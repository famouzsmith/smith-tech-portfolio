import Link from "next/link";
import BrandMark from "@/components/layout/BrandMark";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="pt-12 sm:pt-16 pb-safe-footer">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-sm text-base leading-7 text-muted sm:text-sm">
              {site.shortBio}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink">
              Quick links
            </h2>
            <ul className="mt-4 space-y-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-base font-medium text-muted transition-colors hover:text-accent-deep sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-1 text-base font-medium sm:text-sm">
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-accent-deep"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-11 items-center break-all text-muted transition-colors hover:text-accent-deep"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-base text-muted sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>© {site.name}. All rights reserved.</p>
          <p>
            {site.brand} · {site.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
