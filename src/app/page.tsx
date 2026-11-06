import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export default function Home() {
  return (
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

          <div className="mt-10 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Portfolio in progress
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink">
              The foundation is in place.
            </h2>
            <p className="mt-3 leading-7 text-muted">
              The design system, content data, sticky header, mobile
              navigation, and footer are ready. The full portfolio pages are
              coming in the next build steps.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
