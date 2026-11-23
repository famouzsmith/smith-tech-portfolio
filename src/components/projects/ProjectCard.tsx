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
      <span className="relative block aspect-[4/5] w-full overflow-hidden rounded-xl border border-line bg-surface shadow-sm">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 24rem, 17rem"
          className="object-contain p-2"
        />
      </span>

      <span className="mt-4 flex items-start justify-between gap-3">
        <span className="min-w-0">
          <span className="block text-lg font-bold tracking-tight text-ink">
            {project.title}
          </span>
          <span className="mt-1 block break-words text-base leading-6 text-muted sm:text-sm">
            {project.summary}
          </span>
        </span>
        <span className="max-w-full shrink-0 break-words rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent-deep">
          {categoryLabels[project.category]}
        </span>
      </span>
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
