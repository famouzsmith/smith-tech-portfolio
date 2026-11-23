import type { Metadata } from "next";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected graphic design projects.",
};

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep sm:text-sm">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Projects
          </h1>

          <ProjectsGallery />
        </div>
      </Container>
    </section>
  );
}
