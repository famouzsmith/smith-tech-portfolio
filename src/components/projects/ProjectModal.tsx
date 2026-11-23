"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/site";
import { categoryLabels } from "@/data/site";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !project) {
      return;
    }

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    if (!dialog.open) {
      dialog.showModal();
    }

    document.documentElement.dataset.modalOpen = "true";
    closeButtonRef.current?.focus();

    return () => {
      if (dialog.open) {
        dialog.close();
      }

      delete document.documentElement.dataset.modalOpen;
      previouslyFocusedRef.current?.focus();
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className="m-auto max-h-[92dvh] w-[min(92vw,72rem)] overflow-y-auto rounded-3xl border border-line bg-surface p-0 text-ink shadow-xl backdrop:bg-ink/60"
    >
      {project ? (
        <div className="p-4 pb-safe-modal sm:p-6">
          <div className="sticky top-0 z-10 -mx-4 flex items-start justify-between gap-4 bg-surface px-4 pb-3 pt-4 sm:-mx-6 sm:px-6 sm:pt-6">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep">
                {categoryLabels[project.category]}
              </p>
              <h2
                id="project-modal-title"
                className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
              >
                {project.title}
              </h2>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-ink transition-colors hover:bg-canvas"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="mt-5 flex justify-center rounded-2xl border border-line bg-surface p-2 shadow-sm sm:p-4">
            <div className="relative h-[min(55dvh,30rem)] min-h-[12rem] w-full">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 80vw, 92vw"
                className="object-contain"
              />
            </div>
          </div>

          <p className="mt-5 leading-7 text-muted">{project.description}</p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project tags">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="max-w-full break-words rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent-deep"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </dialog>
  );
}
