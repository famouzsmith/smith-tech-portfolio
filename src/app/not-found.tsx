import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep sm:text-sm">
            404
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            The page you are looking for does not exist. Let us help you find
            your way.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-deep sm:text-base"
            >
              Back Home
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-accent-strong hover:bg-accent-soft hover:text-accent-deep sm:text-base"
            >
              View Projects
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
