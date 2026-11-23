import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep sm:text-sm">
              {site.brand}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="mt-3 text-xl font-semibold text-accent-deep sm:text-2xl">
              {site.title}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {site.shortBio}
            </p>
          </div>
        </Container>
      </section>

      <FeaturedProjects />
    </>
  );
}
