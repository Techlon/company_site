import type { Metadata } from "next";
import { CONTACT_EMAIL, SectionLabel, SiteFooter, SiteHeader } from "../ui";

export const metadata: Metadata = {
  title: "Careers — Techlon",
  description:
    "Join Techlon. A small product engineering team building software and AI products for startups and small companies.",
};

const VALUES = [
  {
    title: "Say it plainly.",
    body: "Clear, direct communication — with clients and with each other. No jargon shields, no burying bad news. If something's off track, say so early.",
  },
  {
    title: "Think before you type.",
    body: "We design the solution before we write the code. An hour of scoping saves a week of rework, and the build plan is part of the product.",
  },
  {
    title: "Ship it properly.",
    body: "Tested, documented, deployed. Done means running in production and understandable by the next person, not working on your machine.",
  },
  {
    title: "Own the outcome.",
    body: "You're responsible for the result, not just the ticket. If the thing you built doesn't solve the client's problem, the work isn't finished.",
  },
  {
    title: "Stay curious.",
    body: "The stack moves and so do we. We make time to learn the tools that are about to matter, not just the ones we already know.",
  },
  {
    title: "Protect focus.",
    body: "Deep work is where the value comes from. Meetings earn their slot, messages don't demand instant replies, and maker time is defended.",
  },
];

const CULTURE = [
  {
    title: "Remote-first, genuinely.",
    body: "Work from where you work best. We keep a few hours of overlap for collaboration and leave the rest of the day to you.",
  },
  {
    title: "Small team, real responsibility.",
    body: "No layers between you and the client. You'll be on the first call, you'll make architecture decisions, and your name is on what ships.",
  },
  {
    title: "Merit gets rewarded.",
    body: "We're small enough that good work is visible. Compensation and scope grow with what you deliver, not with tenure.",
  },
];

const GROWTH = [
  {
    title: "Honest feedback, on a cadence",
    body: "Regular reviews that tell you where you actually stand — what's working, what isn't, and what the next step looks like.",
  },
  {
    title: "Progression without bureaucracy",
    body: "No ladders to petition, no committee season. When you're operating at the next level, your role catches up to you.",
  },
  {
    title: "Time to sharpen the saw",
    body: "Courses, papers, side experiments — if it makes you better at the work, it counts as work.",
  },
];

export default function Careers() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:pt-36">
          <p className="mb-10 font-mono text-sm uppercase tracking-widest text-muted">
            <span className="text-accent">Careers</span>
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Build things properly, with people who care that they work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Techlon is a product engineering team building software and AI
            products for startups and small companies. We hire slowly and
            deliberately — when we do, it&apos;s for people who want
            responsibility early and take craft seriously.
          </p>
          <div className="mt-10">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Joining%20Techlon`}
              className="inline-block rounded bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-85"
            >
              Write to us
            </a>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <SectionLabel n="01">What we value</SectionLabel>
            <p className="mb-14 max-w-2xl text-2xl font-medium tracking-tight md:text-3xl">
              Six things we hold each other to.
            </p>
            <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 md:grid-cols-3">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-background p-8">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work culture */}
        <section id="culture" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <SectionLabel n="02">How it feels to work here</SectionLabel>
            <div className="grid gap-12 md:grid-cols-3">
              {CULTURE.map((c) => (
                <div key={c.title}>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career development — dark band */}
        <section className="bg-panel text-panel-fg">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-10 font-mono text-sm uppercase tracking-widest text-panel-muted">
              <span className="text-accent">03</span> — Growing here
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Clear pathways, no ceremony.
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              {GROWTH.map((g) => (
                <div key={g.title}>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {g.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-panel-muted">
                    {g.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-28 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Sound like you?
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
              We don&apos;t always have an open role, but we always read our
              mail. Send a few lines about what you&apos;ve built and what you
              want to build next.
            </p>
            <div className="mt-10">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Joining%20Techlon`}
                className="inline-block rounded bg-accent px-8 py-4 font-medium text-white transition-opacity hover:opacity-85"
              >
                Write to us
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
