import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export default function FeaturedProjects() {
  const featuredProjects = site.projects.filter((project) => project.featured);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep sm:text-sm">
              Selected work
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Featured projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-accent-strong hover:bg-accent-soft hover:text-accent-deep sm:text-base"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} href="/projects" />
          ))}
        </div>
      </Container>
    </section>
  );
}
