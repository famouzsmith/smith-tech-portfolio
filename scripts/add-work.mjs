import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

sharp.cache(false);

const root = process.cwd();
const sourceDir = path.join(root, "new-work");
const doneDir = path.join(sourceDir, "done");
const outputDir = path.join(root, "public", "images", "projects");
const allowedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const maxWidth = 1600;
const quality = 80;
const warnBytes = 409_600;
const retryCodes = new Set(["EBUSY", "EPERM", "EACCES"]);
const maxRetries = 5;
const retryDelayMs = 300;

function slugify(value) {
  return (
    value
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-{2,}/g, "-") || "design"
  );
}

function withSuffix(base, extension, exists) {
  let candidate = `${base}${extension}`;
  let index = 2;

  while (exists(candidate)) {
    candidate = `${base}-${index}${extension}`;
    index += 1;
  }

  return candidate;
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function isRetriableFsError(error) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    retryCodes.has(error.code)
  );
}

function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

async function retryFsAction(action) {
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    try {
      return await action();
    } catch (error) {
      lastError = error;

      if (!isRetriableFsError(error) || attempt === maxRetries) {
        break;
      }

      await wait(retryDelayMs);
    }
  }

  throw lastError;
}

async function moveOriginal(inputPath, doneDir, fileName, inputExtension) {
  const originalBase = path.basename(fileName, inputExtension);
  const doneName = withSuffix(originalBase, inputExtension, (name) =>
    fs.existsSync(path.join(doneDir, name)),
  );
  const donePath = path.join(doneDir, doneName);

  try {
    await retryFsAction(() => fs.promises.rename(inputPath, donePath));
    return { moved: true, doneName };
  } catch (renameError) {
    try {
      await retryFsAction(() => fs.promises.copyFile(inputPath, donePath));
      await retryFsAction(() => fs.promises.unlink(inputPath));
      return { moved: true, doneName };
    } catch (fallbackError) {
      return { moved: false, doneName, error: fallbackError, renameError };
    }
  }
}

fs.mkdirSync(sourceDir, { recursive: true });
fs.mkdirSync(doneDir, { recursive: true });
fs.mkdirSync(outputDir, { recursive: true });

const files = fs
  .readdirSync(sourceDir, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .filter((entry) => !entry.name.startsWith("."))
  .filter((entry) => entry.name.toLowerCase() !== "readme.md")
  .filter((entry) =>
    allowedExtensions.has(path.extname(entry.name).toLowerCase()),
  )
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  console.log("No new images found in new-work/.");
} else {
  const converted = [];
  const errors = [];

  for (const fileName of files) {
    const inputPath = path.join(sourceDir, fileName);
    const inputExtension = path.extname(fileName);
    const originalBase = path.basename(fileName, inputExtension);

    try {
      const inputBuffer = await fs.promises.readFile(inputPath);
      const outputBase = slugify(originalBase);
      const outputName = withSuffix(outputBase, ".webp", (name) =>
        fs.existsSync(path.join(outputDir, name)),
      );
      const outputPath = path.join(outputDir, outputName);

      await sharp(inputBuffer)
        .rotate()
        .resize({
          width: maxWidth,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality })
        .toFile(outputPath);

      const size = fs.statSync(outputPath).size;
      const move = await moveOriginal(
        inputPath,
        doneDir,
        fileName,
        inputExtension,
      );

      converted.push({
        fileName,
        outputName,
        size,
        moved: move.moved,
        moveError: move.moved ? null : move.error,
      });
    } catch (error) {
      errors.push({
        fileName,
        message: errorMessage(error),
      });
    }
  }

  const total = converted.reduce((sum, item) => sum + item.size, 0);
  const movedCount = converted.filter((item) => item.moved).length;
  const moveProblems = converted.filter((item) => !item.moved);

  console.log(`Converted ${converted.length} image(s):`);

  for (const item of converted) {
    const warning = item.size > warnBytes ? " [WARN over 400 KB]" : "";
    const problem = item.moved ? "" : " [move failed — see problem below]";
    console.log(`- ${item.outputName} — ${formatKb(item.size)}${warning}${problem}`);
  }

  console.log(`Moved ${movedCount} original(s) to new-work/done/.`);
  console.log(`Total: ${formatKb(total)}`);

  if (moveProblems.length > 0) {
    console.log("Move problems:");

    for (const item of moveProblems) {
      console.log(`- ${item.fileName} is still in new-work/${item.fileName}.`);
      console.log(
        `  Converted copy already exists at public/images/projects/${item.outputName}.`,
      );
      console.log(
        "  Do not run the script on it again until you move or remove the original.",
      );
      console.log(`  Reason: ${errorMessage(item.moveError)}`);
    }

    process.exitCode = 1;
  }

  if (errors.length > 0) {
    console.log("Errors:");

    for (const item of errors) {
      console.log(`- ${item.fileName}: ${item.message}`);
    }

    process.exitCode = 1;
  }
}
