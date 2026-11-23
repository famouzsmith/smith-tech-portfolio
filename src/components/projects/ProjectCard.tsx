"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site";
import { categoryLabels } from "@/data/site";

type ProjectCardProps = {
  project: Project;
  onOpen?: (project: Project) => void;
  href?: string;
};

export default function ProjectCard({
  project,
  onOpen,
  href,
}: ProjectCardProps) {
  const content = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-accent-soft">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-2"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-muted">{project.summary}</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent-deep">
          {categoryLabels[project.category]}
        </span>
      </div>
    </>
  );

  const className =
    "block w-full rounded-2xl border border-line bg-surface p-3 text-left shadow-sm transition-colors hover:border-accent-strong hover:bg-canvas sm:p-4";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen?.(project)}
      aria-haspopup="dialog"
      aria-label={`View ${project.title} details`}
      className={className}
    >
      {content}
    </button>
  );
}
