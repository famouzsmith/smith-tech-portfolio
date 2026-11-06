import Link from "next/link";
import BrandMark from "@/components/layout/BrandMark";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              {site.shortBio}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink">
              Quick links
            </h2>
            <ul className="mt-4 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted transition-colors hover:text-accent-deep"
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
            <ul className="mt-4 space-y-3 text-sm font-medium">
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent-deep"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted transition-colors hover:text-accent-deep"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.name}. All rights reserved.</p>
          <p>
            {site.brand} · {site.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
