import { site } from "@/data/site";

type SocialLinksProps = {
  className?: string;
};

function SocialIcon({ name }: { name: string }) {
  const iconClassName = "h-5 w-5";

  switch (name) {
    case "LinkedIn":
      return (
        <svg
          aria-hidden="true"
          className={iconClassName}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          aria-hidden="true"
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect width="18" height="18" x="3" y="3" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "X":
      return (
        <svg
          aria-hidden="true"
          className={iconClassName}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.4L6.45 22H3.3l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 18h1.73L7.28 3.9H5.42L17.8 20Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg
          aria-hidden="true"
          className={iconClassName}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14 8.5V7c0-.83.67-1 1.5-1H17V3h-2.5C11.9 3 11 4.66 11 7v1.5H9V12h2v9h3v-9h2.7l.3-3.5H14Z" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg
          aria-hidden="true"
          className={iconClassName}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98.99-3.65-.23-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.42Z" />
        </svg>
      );
    default:
      return (
        <svg
          aria-hidden="true"
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
          <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
        </svg>
      );
  }
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`.trim()}>
      {site.socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              social.handle
                ? `${social.name}: ${social.handle}`
                : social.name
            }
            title={social.name}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-canvas text-ink transition-colors hover:border-accent-strong hover:bg-accent-soft hover:text-accent-deep"
          >
            <SocialIcon name={social.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}
