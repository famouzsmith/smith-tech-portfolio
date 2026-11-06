import type { Metadata } from "next";
import CallToAction from "@/components/ui/CallToAction";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.servicesPage.metaTitle,
  description: site.servicesPage.metaDescription,
  openGraph: {
    title: `${site.servicesPage.metaTitle} | ${site.name}`,
    description: site.servicesPage.metaDescription,
  },
  twitter: {
    card: "summary",
    title: `${site.servicesPage.metaTitle} | ${site.name}`,
    description: site.servicesPage.metaDescription,
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep sm:text-sm">
              {site.servicesPage.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {site.servicesPage.headline}
            </h1>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {site.services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="text-xs font-bold uppercase tracking-[0.18em] text-accent-deep"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-xl font-bold text-ink sm:text-2xl">
                  {service.title}
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent-deep"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {site.servicesPage.processTitle}
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {site.servicesPage.process.map((step, index) => (
              <li
                key={step.title}
                className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-sm font-extrabold text-accent-deep"
                >
                  {index + 1}
                </span>
                <span className="font-bold text-ink">{step.title}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
