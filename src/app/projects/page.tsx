import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects are coming soon.",
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

          <div className="mt-8 max-w-xl rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
            <p className="leading-7 text-muted">Projects are coming soon</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
