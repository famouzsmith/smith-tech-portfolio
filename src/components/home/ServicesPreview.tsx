import Link from "next/link";
import Container from "@/components/ui/Container";
import WhatIDoIcon from "@/components/ui/WhatIDoIcon";
import { site } from "@/data/site";

export default function ServicesPreview() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep sm:text-sm">
              Services
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {site.about.whatIDoTitle}
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex min-h-11 items-center rounded-full px-4 py-2 text-base font-bold text-accent-deep transition-colors hover:bg-accent-soft"
          >
            View services
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.about.whatIDo.map((item) => (
            <Link
              key={item.title}
              href="/services"
              className="block rounded-2xl border border-line bg-surface p-6 shadow-sm transition-colors hover:border-accent-strong hover:bg-canvas"
            >
              <article className="flex h-full flex-col">
                <WhatIDoIcon icon={item.icon} />
                <h3 className="mt-4 text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-muted sm:text-sm">
                  {item.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
