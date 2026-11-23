export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-[max(1rem,env(safe-area-inset-left))] focus:top-[max(1rem,env(safe-area-inset-top))] focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-base focus:font-semibold focus:text-white"
    >
      Skip to content
    </a>
  );
}
