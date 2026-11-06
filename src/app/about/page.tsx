import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/ui/CallToAction";
import Container from "@/components/ui/Container";
import { site, type AboutCardIcon } from "@/data/site";

function WhatIDoIcon({ icon }: { icon: AboutCardIcon }) {
  const paths = {
    web: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" />
      </>
    ),
    branding: (
      <>
        <path d="M6 9V3h12v6" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="7" rx="1" />
      </>
    ),
    support: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    leadership: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  };

  return (
    <span
      aria-hidden="true"
      className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent-deep"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        {paths[icon]}
      </svg>
    </span>
  );
}

export const metadata: Metadata = {
  title: site.about.metaTitle,
  description: site.about.metaDescription,
  openGraph: {
    title: `${site.about.metaTitle} | ${site.name}`,
    description: site.about.metaDescription,
  },
  twitter: {
    card: "summary",
    title: `${site.about.metaTitle} | ${site.name}`,
    description: site.about.metaDescription,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep sm:text-sm">
                {site.about.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {site.about.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                {site.about.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={site.cvUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-deep sm:text-base"
                >
                  {site.about.cvLabel}
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-accent-strong hover:bg-accent-soft hover:text-accent-deep sm:text-base"
                >
                  {site.about.servicesLabel}
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm lg:max-w-none">
              <div className="rounded-[2rem] border border-line bg-surface p-3 shadow-sm">
                <div className="overflow-hidden rounded-[1.5rem] bg-accent-soft">
                  <Image
                    src={site.profileImage}
                    alt={site.profileImageAlt}
                    width={864}
                    height={1080}
                    preload
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {site.about.whatIDoTitle}
          </h2>
          <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.about.whatIDo.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm"
              >
                <WhatIDoIcon icon={item.icon} />
                <h3 className="mt-4 text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {site.about.experienceTitle}
          </h2>

          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[7px] top-2 w-px bg-line sm:left-[9px]"
            />
            <ol className="space-y-6">
              {site.experience.map((item) => (
                <li
                  key={`${item.role}-${item.company}`}
                  className="relative pl-8 sm:pl-10"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-canvas bg-accent-strong sm:left-0.5"
                  />
                  <article className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-ink">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-accent-deep">
                          {item.company}
                        </p>
                        {item.location ? (
                          <p className="mt-1 text-sm text-muted">
                            {item.location}
                          </p>
                        ) : null}
                      </div>
                      {item.period ? (
                        <span className="w-fit shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent-deep">
                          {item.period}
                        </span>
                      ) : null}
                    </div>
                    {item.description ? (
                      <p className="mt-4 leading-7 text-muted">
                        {item.description}
                      </p>
                    ) : null}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                {site.about.educationTitle}
              </h2>
              <ul className="mt-5 space-y-4">
                {site.about.education.map((item) => (
                  <li
                    key={`${item.degree}-${item.year}`}
                    className="rounded-xl bg-canvas p-4"
                  >
                    <p className="font-bold text-ink">{item.degree}</p>
                    <p className="mt-1 text-sm font-semibold text-accent-deep">
                      {item.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                {site.about.leadershipTitle}
              </h2>
              <ul className="mt-5 space-y-4">
                {site.about.leadership.map((item) => (
                  <li
                    key={`${item.role}-${item.organization}`}
                    className="rounded-xl bg-canvas p-4"
                  >
                    <p className="font-bold text-ink">{item.role}</p>
                    <p className="mt-1 text-sm text-muted">
                      {item.organization}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {site.about.highlightsTitle}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {site.about.highlights.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="text-xs font-bold uppercase tracking-[0.18em] text-accent-deep"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-lg font-bold leading-7 text-ink">
                  {item.title}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
