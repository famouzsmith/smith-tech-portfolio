import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function BrandMark() {
  return (
    <Link
      href="/"
      aria-label={`${site.brand} home`}
      className="inline-flex items-center gap-3 rounded-xl"
    >
      <Image
        src="/images/profile/main-logo-web.jpg"
        alt={`${site.brand} logo`}
        width={400}
        height={400}
        preload
        sizes="(min-width: 640px) 48px, 44px"
        className="h-11 w-11 shrink-0 rounded-xl object-contain sm:h-12 sm:w-12"
      />
      <span className="flex min-w-0 flex-col">
        <span className="text-sm font-extrabold tracking-[0.16em] text-ink sm:text-base">
          {site.brand}
        </span>
        <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted sm:text-[0.65rem]">
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
