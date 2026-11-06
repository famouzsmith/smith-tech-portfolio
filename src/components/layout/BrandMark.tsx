import Link from "next/link";
import { site } from "@/data/site";

export default function BrandMark() {
  return (
    <Link
      href="/"
      aria-label={`${site.brand} home`}
      className="inline-flex items-center gap-3 rounded-xl"
    >
      <span
        aria-hidden="true"
        className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-strong to-accent-deep text-xs font-extrabold tracking-wider text-white shadow-sm sm:h-11 sm:w-11"
      >
        ST
      </span>
      <span className="flex flex-col">
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
