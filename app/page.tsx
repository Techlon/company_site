import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  HAS_BOOKING,
  SPRINT_BOOKING_URL,
  SectionLabel,
  SiteFooter,
  SiteHeader,
} from "./ui";
import {
  AbTestChart,
  CannibalizationChart,
  CnnChart,
  FraudChart,
  RocCurveChart,
} from "./graphics";

const SPRINT_LIST_PRICE = "$2,000";
const SPRINT_PRICE = "$500";
const SPRINT_OFFER_END = "October 31, 2026";

const TEAM = [
  {
    name: "Oluwagbemi Lesi",
    role: "Founder",
    photo: "/team/oluwagbemi.jpg",
    bio: [
      "Oluwagbemi Lesi is a product developer, data scientist and AI/ML model builder specializing in predictive modeling, deep learning, and NLP.",
      "Holding an MBA in Business Analytics from Case Western Reserve University enables him to pair rigorous technical execution with sharp model validation instincts, built on seven years across financial services, real estate, and FinTech regulation.",
      "Recent work includes an LSTM forecasting model that cut test error by 41% and an ensemble NLP fraud-detection system (SBERT, RoBERTa, XGBoost) with an LLM auditor stage. Fluent across PyTorch, TensorFlow, AWS, and Spark, with a legal foundation in FinTech compliance and model risk governance.",
    ],
  },
  {
    name: "Emeka Osuagwu",
    role: "[Role]",
    photo: "/team/emeka.jpg",
    bio: ["[Profile and photo coming.]"],
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Product Development",
    body: "We start before the code. Scoping, user flows, architecture decisions, and a build plan that survives contact with reality. If you know the problem but not the shape of the solution yet, this is where we begin.",
  },
  {
    n: "02",
    title: "Web & App Development",
    body: "Production web applications and mobile apps. Modern stack, tested, documented, and handed over in a state your own engineers can pick up. No black boxes.",
  },
  {
    n: "03",
    title: "Data Science",
    body: "Getting answers out of data you already have. Pipelines, analysis, forecasting, dashboards your team will actually open. We start with the decision you're trying to make and work backwards.",
  },
  {
    n: "04",
    title: "AI & Model Building",
    body: "Custom models, LLM applications, RAG systems, and evaluation to prove they work. We build AI that ships to real users — not demos that fall apart the first week under load.",
  },
];

const PRINCIPLES = [
  {
    title: "We scope before we quote.",
    body: "Fixed prices on vague requirements are how projects get 40% built and abandoned. We do paid discovery first, then quote against something real.",
  },
  {
    title: "You see working software every week.",
    body: "Not status reports. A deployed environment you can click through, from week one. If we are going the wrong direction, you will know in seven days instead of three months.",
  },
  {
    title: "One team, start to finish.",
    body: "The people on your first call are the people writing the code. No handoff to a junior team after you sign.",
  },
  {
    title: "The bill is never a surprise.",
    body: "Fixed-price sprints and a running total you can check any time. If something threatens the budget, you hear it from us first — before it costs you anything.",
  },
];

const PROJECTS = [
  {
    title: "Sales Cannibalization",
    year: "2026",
    metric: "Adj. R² 0.9250",
    body: "A nested logit model to find the primary drivers of a company's sales — and what share of a new product's sales came from cannibalizing existing ones.",
    chart: CannibalizationChart,
  },
  {
    title: "Fake Review Detection",
    year: "2026",
    metric: "ROC-AUC 0.761 · Acc 0.744",
    body: "An ensemble of SBERT, XGBoost, and RoBERTa that detects fake product and service reviews, with an LLM auditor checking the model's calls.",
    chart: RocCurveChart,
  },
  {
    title: "A/B Testing",
    year: "2025",
    metric: "No significant lift",
    body: "A one-tailed t-test on whether a new page increased conversion. It didn't — and the null held across every heterogeneity analysis. Knowing that before rollout is the point.",
    chart: AbTestChart,
  },
  {
    title: "Image Recognition",
    year: "2023",
    metric: "Accuracy 0.9875",
    body: "A convolutional neural network for object classification, built with TensorFlow and Keras.",
    chart: CnnChart,
  },
  {
    title: "Credit Card Fraud Detection",
    year: "2022",
    metric: "F1 0.847",
    body: "A fraud pipeline in Scikit-learn comparing XGBoost, Random Forest, SVM, decision trees, and logistic regression on heavily imbalanced transaction data. Scored on F1, not accuracy — on data this skewed, accuracy flatters a model that never catches anything.",
    chart: FraudChart,
  },
];

const FAQS = [
  {
    q: "We're a startup — is this going to be too expensive?",
    a: "Depends what you need. An MVP scoped to prove one thing is a different project from a full platform, and we'll tell you which one you're actually asking for. The discovery sprint gives you a real number before you commit to anything.",
  },
  {
    q: "We have an internal team already.",
    a: "Plenty of our clients do. We come in for the piece the team doesn't have capacity or specialist depth for — an AI feature, a data pipeline, a rebuild of something creaking — and we work in your repos, your standards, your review process.",
  },
  {
    q: "Techlon is new. Why should we take the risk?",
    a: "Fair question. Two answers: the projects above are our own work with the real numbers attached — including one where the honest result was that the change didn't help. And we scope in two-week paid increments, so you're never exposed for more than one sprint — if it isn't working, you stop, and you keep the build plan.",
  },
  {
    q: "How fast can you start?",
    a: "Usually within two weeks. Tell us your timeline on the call and we'll be straight with you about whether we can hit it.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* 1. Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:pt-36">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            We build software and AI products end to end, from prototype to
            production.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Techlon is a product engineering team for startups and small
            companies. We take an idea, a rough spec, or a stalled project and
            turn it into something real, shipped, and running in production —
            the design, the code, the models, and the infrastructure
            underneath.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              className="rounded bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-85"
            >
              Book a 30-minute call
            </a>
            <a
              href="#how-we-work"
              className="rounded border border-line px-6 py-3 font-medium transition-colors hover:border-foreground"
            >
              See how we work
            </a>
          </div>
        </section>

        {/* 2. Capabilities */}
        <section id="capabilities" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <SectionLabel n="01">Capabilities</SectionLabel>
            <p className="mb-14 max-w-2xl text-2xl font-medium tracking-tight md:text-3xl">
              Four things we do. Most projects use more than one.
            </p>
            <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
              {CAPABILITIES.map((cap) => (
                <div key={cap.n}>
                  <p className="font-mono text-sm text-accent">{cap.n}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. How we work */}
        <section id="how-we-work" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <SectionLabel n="02">How we work</SectionLabel>
            <p className="mb-14 max-w-2xl text-2xl font-medium tracking-tight md:text-3xl">
              Custom software goes wrong in predictable ways. Here&apos;s how we
              avoid them.
            </p>
            <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="bg-background p-8">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Discovery sprint — dark band */}
        <section className="bg-panel text-panel-fg">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-10 font-mono text-sm uppercase tracking-widest text-panel-muted">
              <span className="text-accent">03</span> — Discovery sprint
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Not sure what you need built yet? Start here.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-panel-muted">
              <p>
                Two weeks, fixed price. We dig into the problem, map the
                technical approach, and hand you a complete build plan:
                architecture, scope, timeline, and a fixed quote for the full
                project.
              </p>
              <p>
                You keep the plan whether or not you build with us. If you do
                continue, the sprint fee comes off the project cost.
              </p>
              <p>
                A discovery sprint is normally {SPRINT_LIST_PRICE}. Through{" "}
                {SPRINT_OFFER_END} we are running it at 75% off. It&apos;s the
                cheapest way to find out whether your project is a three-month
                project or a nine-month one, before you commit to either.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={SPRINT_BOOKING_URL}
                className="rounded bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-85"
              >
                Book a discovery sprint · {SPRINT_PRICE}
              </a>
              <p className="font-mono text-sm text-panel-muted">
                <span className="line-through">{SPRINT_LIST_PRICE}</span>{" "}
                <span className="ml-1 rounded border border-panel-muted/40 px-2 py-1 text-xs uppercase tracking-widest">
                  75% off · through {SPRINT_OFFER_END}
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. What we've built */}
        <section id="work" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <SectionLabel n="04">Work</SectionLabel>
            <p className="mb-14 max-w-2xl text-2xl font-medium tracking-tight md:text-3xl">
              Things we&apos;ve made
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {PROJECTS.map((project, i) => {
                const Chart = project.chart;
                return (
                  <div
                    key={project.title}
                    className={`overflow-hidden rounded-lg border border-line ${
                      i === PROJECTS.length - 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="border-b border-line bg-white/50 px-4 pt-4">
                      <Chart />
                    </div>
                    <div className="p-6">
                      <p className="font-mono text-xs uppercase tracking-widest text-muted">
                        {project.year} · <span className="text-accent">{project.metric}</span>
                      </p>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {project.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Who we are */}
        <section id="team" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <SectionLabel n="05">Team</SectionLabel>
            <p className="mb-6 max-w-2xl text-2xl font-medium tracking-tight md:text-3xl">
              The people who&apos;ll be building it
            </p>
            <p className="max-w-2xl leading-relaxed text-muted">
              We started Techlon because we realized many startups, small and
              mid-size companies were struggling to build the products,
              services their customers needed — so we stepped in to close that
              gap.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {/* Members still holding [bracketed] placeholders stay off the
                  public site until their real details land. */}
              {TEAM.filter(
                (member) =>
                  !`${member.role}${member.bio.join(" ")}`.includes("["),
              ).map((member) => (
                <div
                  key={member.name}
                  className="rounded-lg border border-line p-6"
                >
                  {/* Portrait frame: 4:5 with object-top keeps the whole face
                      and bust in shot whatever the source photo's ratio. */}
                  {existsSync(join(process.cwd(), "public", member.photo)) ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={320}
                      height={400}
                      className="mb-5 aspect-[4/5] w-40 rounded-lg object-cover object-top"
                    />
                  ) : (
                    <div className="mb-5 flex aspect-[4/5] w-40 items-center justify-center rounded-lg border border-dashed border-line bg-line/60 font-mono text-xs text-muted">
                      photo
                    </div>
                  )}
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-muted">{member.role}</p>
                  {/* hyphens-auto keeps justified text from opening up rivers
                      of whitespace in a column this narrow. */}
                  <div className="mt-3 space-y-3 hyphens-auto text-justify text-sm leading-relaxed text-muted">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 leading-relaxed text-muted">
              Want to be one of them?{" "}
              <a
                href="/careers"
                className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
              >
                See how we work and what we value →
              </a>
            </p>
          </div>
        </section>

        {/* 7. Questions */}
        <section id="questions" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <SectionLabel n="06">Questions</SectionLabel>
            <div className="grid gap-12 md:grid-cols-2">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {faq.q}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Closing CTA */}
        <section id="contact" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-28 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Tell us what you&apos;re trying to build.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
              Thirty minutes, no pitch deck. Bring a problem, a half-formed
              idea, or a project that&apos;s stuck — you&apos;ll leave with a
              straight answer about whether it&apos;s worth building and roughly
              what it takes.
            </p>
            <div className="mt-10">
              {/* Falls back to email until a booking link is configured. */}
              <a
                href={HAS_BOOKING ? BOOKING_URL : `mailto:${CONTACT_EMAIL}`}
                className="inline-block rounded bg-accent px-8 py-4 font-medium text-white transition-opacity hover:opacity-85"
              >
                Book a call
              </a>
              {HAS_BOOKING && (
                <p className="mt-6 text-sm text-muted">
                  Or email us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
