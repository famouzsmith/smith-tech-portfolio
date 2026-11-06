import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.contactPage.metaTitle,
  description: site.contactPage.metaDescription,
  openGraph: {
    title: `${site.contactPage.metaTitle} | ${site.name}`,
    description: site.contactPage.metaDescription,
  },
  twitter: {
    card: "summary",
    title: `${site.contactPage.metaTitle} | ${site.name}`,
    description: site.contactPage.metaDescription,
  },
};

export default function ContactPage() {
  const socials = site.socials.filter((social) => social.name !== "WhatsApp");

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-deep sm:text-sm">
            {site.contactPage.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {site.contactPage.headline}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            {site.contactPage.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">
              {site.contactPage.whatsappTitle}
            </h2>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-accent-strong px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-deep sm:text-base"
            >
              {site.contactPage.whatsappLabel}
            </a>
          </article>

          <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">
              {site.contactPage.emailTitle}
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 break-all text-base font-semibold text-accent-deep transition-colors hover:text-accent-strong sm:text-lg"
            >
              {site.email}
            </a>
          </article>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {site.contactPage.socialsTitle}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-4 shadow-sm transition-colors hover:border-accent-strong hover:bg-accent-soft"
                >
                  <span>
                    <span className="block text-sm font-bold text-ink">
                      {social.name}
                    </span>
                    {social.handle ? (
                      <span className="mt-0.5 block text-sm text-muted">
                        {social.handle}
                      </span>
                    ) : null}
                  </span>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-accent-deep"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <a
            href={site.cvUrl}
            download
            className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-bold text-ink transition-colors hover:border-accent-strong hover:bg-accent-soft hover:text-accent-deep"
          >
            {site.contactPage.cvLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
