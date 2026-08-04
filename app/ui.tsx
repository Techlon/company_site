import Link from "next/link";

export const CONTACT_EMAIL = "hello@techlon.io";

/**
 * Cal.com booking links. Slugs must match the event types on the account —
 * "30min" and "45min" are Cal's defaults. Clearing CAL_USERNAME sends every
 * CTA back to the email contact section rather than to a dead link.
 */
const CAL_USERNAME = "techlon";

const calLink = (eventSlug: string) =>
  CAL_USERNAME ? `https://cal.com/${CAL_USERNAME}/${eventSlug}` : "/#contact";

export const HAS_BOOKING = Boolean(CAL_USERNAME);
export const BOOKING_URL = calLink("30min");
export const SPRINT_BOOKING_URL = calLink("45min");

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
        <Link
          href="/"
          className="font-mono text-lg font-semibold tracking-tight"
        >
          techlon<span className="text-accent">.</span>
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
        <p>
          techlon<span className="text-accent">.</span>
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
