"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import type { Project, ProjectCategory, ProjectFilter } from "@/data/site";
import { categoryFilters, site } from "@/data/site";

type AvailableFilter = {
  value: ProjectFilter;
  label: string;
};

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categoriesWithProjects = useMemo<Set<ProjectCategory>>(
    () => new Set(site.projects.map((project) => project.category)),
    [],
  );

  const availableFilters = useMemo<AvailableFilter[]>(
    () =>
      categoryFilters.filter(
        ({ value }) => value === "all" || categoriesWithProjects.has(value),
      ),
    [categoriesWithProjects],
  );

  const visibleProjects = useMemo(
    () =>
      activeFilter === "all"
        ? site.projects
        : site.projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <>
      {categoriesWithProjects.size > 1 ? (
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap gap-2"
        >
          {availableFilters.map((filter) => {
            const isActive = activeFilter === filter.value;
            const baseClassName =
              "inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors";
            const stateClassName = isActive
              ? "border-transparent bg-accent-soft text-accent-deep"
              : "border-line bg-surface text-muted hover:bg-canvas hover:text-ink";

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={isActive}
                className={`${baseClassName} ${stateClassName}`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
