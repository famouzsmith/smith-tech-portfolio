import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "new-work");
const doneDir = path.join(sourceDir, "done");
const outputDir = path.join(root, "public", "images", "projects");
const allowedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const maxWidth = 1600;
const quality = 80;
const warnBytes = 409_600;

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
  const results = [];
  const errors = [];

  for (const fileName of files) {
    const inputPath = path.join(sourceDir, fileName);
    const inputExtension = path.extname(fileName);
    const originalBase = path.basename(fileName, inputExtension);

    try {
      const outputBase = slugify(originalBase);
      const outputName = withSuffix(outputBase, ".webp", (name) =>
        fs.existsSync(path.join(outputDir, name)),
      );
      const outputPath = path.join(outputDir, outputName);

      await sharp(inputPath)
        .rotate()
        .resize({
          width: maxWidth,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality })
        .toFile(outputPath);

      const size = fs.statSync(outputPath).size;

      results.push({ outputName, size });

      const doneName = withSuffix(originalBase, inputExtension, (name) =>
        fs.existsSync(path.join(doneDir, name)),
      );

      fs.renameSync(inputPath, path.join(doneDir, doneName));
    } catch (error) {
      errors.push({
        fileName,
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  const total = results.reduce((sum, item) => sum + item.size, 0);

  console.log(`Processed ${results.length} image(s):`);

  for (const item of results) {
    const warning = item.size > warnBytes ? " [WARN over 400 KB]" : "";
    console.log(`- ${item.outputName} — ${formatKb(item.size)}${warning}`);
  }

  console.log(`Total: ${formatKb(total)}`);

  if (errors.length > 0) {
    console.log("Errors:");

    for (const item of errors) {
      console.log(`- ${item.fileName}: ${item.message}`);
    }

    process.exitCode = 1;
  }
}
