import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl bg-gradient-to-br from-accent-strong to-accent-deep px-6 py-10 text-white shadow-sm sm:px-10 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
            {site.contactCta.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {site.contactCta.heading}
          </h2>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-accent-deep shadow-sm transition-colors hover:bg-accent-soft focus-visible:outline-white sm:text-base"
            >
              {site.contactCta.buttonLabel}
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-white sm:text-base"
            >
              {site.contactCta.whatsappLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
