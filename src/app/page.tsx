import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import CallToAction from "@/components/ui/CallToAction";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

const homeTitle = `${site.name} | ${site.title}`;

export const metadata: Metadata = {
  description: site.home.heroIntro,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.brand,
    title: homeTitle,
    description: site.home.heroIntro,
  },
  twitter: {
    card: "summary",
    title: homeTitle,
    description: site.home.heroIntro,
  },
};

export default function Home() {
  const credibilityChips = [
    "2+ years experience",
    `${site.services.length} service areas`,
    `${site.projects.length} projects`,
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-canvas via-canvas to-accent-soft/70 pb-8 pt-10 sm:pb-12 sm:pt-20 lg:pb-14 lg:pt-24">
        <Container className="relative">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep sm:text-sm">
                {site.brand}
              </p>
              <h1 className="mt-3 text-[clamp(2rem,9vw,3rem)] font-extrabold tracking-tight text-ink sm:mt-4 sm:text-5xl lg:text-6xl">
                {site.name}
              </h1>
              <p className="mt-2 text-xl font-bold tracking-tight text-accent-deep sm:mt-3 sm:text-3xl lg:text-4xl">
                {site.title}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
                {site.home.heroIntro}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Link
                  href="/projects"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-accent-deep sm:text-base"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-base font-bold text-ink transition-colors hover:border-accent-strong hover:bg-accent-soft hover:text-accent-deep sm:text-base"
                >
                  Hire Me
                </Link>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8" aria-label="Highlights">
                {credibilityChips.map((chip) => (
                  <li
                    key={chip}
                    className="max-w-full break-words rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-muted shadow-sm"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto mt-4 w-full max-w-[17rem] sm:mt-8 sm:max-w-sm lg:mt-10 lg:max-w-[25rem]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #4facfe 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-accent/10 blur-2xl"
              />

              <div className="relative rounded-[2rem] border border-line bg-surface p-3 shadow-lg">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-accent-soft">
                  <Image
                    src={site.profileImage}
                    alt={site.profileImageAlt}
                    fill
                    preload
                    sizes="(min-width: 1024px) 25rem, (min-width: 640px) 24rem, 17rem"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-5 left-5 rounded-full border border-line bg-surface/95 px-4 py-2 text-xs font-bold text-accent-deep shadow-sm">
                  {site.home.heroBadge}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServicesPreview />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
}
