import Link from "next/link";

export const CONTACT_EMAIL = "hello@techlon.io";

/**
 * Cal.com booking links. Slugs must match the event-type URLs on the account —
 * renaming an event's title in Cal does not change its slug. Clearing
 * CAL_USERNAME sends every CTA back to the email contact section rather than
 * to a dead link.
 */
const CAL_USERNAME = "techlon";

const calLink = (eventSlug: string) =>
  CAL_USERNAME ? `https://cal.com/${CAL_USERNAME}/${eventSlug}` : "/#contact";

export const HAS_BOOKING = Boolean(CAL_USERNAME);
export const BOOKING_URL = calLink("intro-call");
export const SPRINT_BOOKING_URL = calLink("discovery-sprint");

/**
 * The Techlon mark. Brand colours are intentionally hard-coded rather than
 * themed — a logo should render identically wherever it appears.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect width="32" height="32" rx="7" fill="#16181d" />
      <rect x="9" y="12.2" width="11.6" height="3" rx="1.2" fill="#f4f3f0" />
      <rect x="12.2" y="8" width="4" height="17" rx="1.3" fill="#f4f3f0" />
      <rect x="12.2" y="21.8" width="7.8" height="3.2" rx="1.3" fill="#f4f3f0" />
      <circle cx="23.9" cy="22" r="2.9" fill="#1d4ed8" />
    </svg>
  );
}

export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-dashed border-amber-500/60 bg-amber-100/60 px-2 py-0.5 font-mono text-xs text-amber-800">
      TODO: {children}
    </span>
  );
}

export function SectionLabel({
  n,
  children,
}: {
  n: string;
  children: React.ReactNode;
}) {
  return (
    <p className="mb-10 font-mono text-sm tracking-widest text-muted uppercase">
      <span className="text-accent">{n}</span> — {children}
    </p>
  );
}

const NAV = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#how-we-work", label: "How we work" },
  { href: "/#work", label: "Work" },
  { href: "/#team", label: "Team" },
  { href: "/careers", label: "Careers" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="h-7 w-7" />
          <span className="font-mono text-lg font-semibold tracking-tight">
            techlon<span className="text-accent">.</span>
          </span>
          <span className="sr-only">Techlon home</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={BOOKING_URL}
          className="rounded bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-sm text-muted">
        <p className="flex items-center gap-2">
          <LogoMark className="h-5 w-5" />
          <span>
            techlon<span className="text-accent">.</span>
          </span>
        </p>
        <p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors hover:text-foreground"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          · Cleveland, OH, US
        </p>
      </div>
    </footer>
  );
}
