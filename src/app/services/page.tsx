import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ServicesFaqJsonLd } from "@/components/seo/ServicesFaqJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { getFaqByCluster } from "@/lib/services-faq";

export const metadata: Metadata = {
  title: "Electrical Plan Review, Lighting Design & Engineering Consulting Services",
  description:
    "CIRCUITA offers electrical engineering consulting services: plan review and QA/QC, constructability & bid-risk review, lighting design and photometrics, EV charging infrastructure, electrical design support, marina electrical, and energy code compliance. Serving architects, developers, and contractors in Florida and across the Southeast.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | CIRCUITA: Plan Review, Lighting, EV & Consulting",
    description:
      "Electrical plan review, constructability feedback, lighting design, EV charging, marina, and energy-code consulting for architects, developers, and contractors in Florida and the Southeast.",
    url: "/services",
  },
};

const offerings = [
  {
    id: "plan-review",
    title: "Electrical Plan Review & QA/QC",
    outcome: "Fewer surprises in the field and at permit",
    summary:
      "An independent pass over power, lighting, and one-line drawings against NEC and jurisdictional expectations. Verifies panel schedule accuracy, load calculations, grounding, coordination with mechanical and architectural, and constructability.",
    detail:
      "I read drawings the way contractors and plans examiners do: panel and feeder sizing, grounding and bonding clarity, AFCI/GFCI coverage, load balancing, and the small coordination gaps that turn into RFIs. You get prioritized notes you can close out in sequence.",
    bullets: [
      "Electrical drawing review (power, lighting, one-lines)",
      "NEC compliance check (high-level, non-stamped)",
      "Panel schedules and load validation",
      "Coordination review against mechanical and architectural",
    ],
  },
  {
    id: "constructability",
    title: "Constructability & Bid Risk Review",
    outcome: "Designs that build cleanly and bid tight",
    summary:
      "A pre-bid and pre-buyout pass that identifies design gaps, cost-risk hotspots, and change-order exposure before pricing is locked. Optional RFI-development support to surface the questions contractors would otherwise catch in the field.",
    detail:
      "Bid risk review focuses on the ambiguity contractors price as contingency: unclear routing, accessible gear locations, long-lead equipment, missing details. Removing that ambiguity tightens bids and protects the schedule.",
    bullets: [
      "Identify design gaps before construction",
      "Highlight cost risks and change-order exposure",
      "Pre-bid drawing review for contractors",
      "RFI development support",
    ],
  },
  {
    id: "lighting",
    title: "Lighting Design & Photometric Analysis",
    outcome: "Spaces lit to target, under code, on budget",
    summary:
      "Interior and exterior lighting design with fixture selection, IES-based photometric studies, and lighting power density (LPD) compliance. Covers new design, retrofits, and upgrade scopes.",
    detail:
      "From tenant-improvement fixture layouts to site lighting photometrics, deliverables are formatted so your architect, EOR, and contractor can move directly from my drawings to procurement without reinterpretation.",
    bullets: [
      "Interior lighting layout and fixture selection",
      "Exterior and site lighting design",
      "IES-based photometric calculations",
      "Lighting power density (LPD) and energy code compliance",
    ],
  },
  {
    id: "ev-charging",
    title: "EV Charging Infrastructure Consulting",
    outcome: "Chargers that energize on schedule",
    summary:
      "EV charger site planning and electrical feasibility: load analysis against existing service, panel and distribution upgrades, utility coordination, and NEC Article 625 compliance. Scoped for single-site installations up to multi-port DCFC layouts.",
    detail:
      "Most EV charging projects hit their deadline or miss it based on early service-capacity work. I front-load the load study and utility coordination so surprises don't land at final inspection.",
    bullets: [
      "EV charger layout and site planning",
      "Load analysis and service capacity review",
      "Panel and distribution upgrade planning",
      "Utility coordination guidance and NEC Article 625 compliance",
    ],
  },
  {
    id: "design-support",
    title: "Electrical Design Support (Non-EOR)",
    outcome: "Engineering input without taking the seal",
    summary:
      "Conceptual layouts, panel schedules, feeder sizing, and one-line diagram assistance for teams who need engineering early or supplementary capacity mid-project. No sealed drawings — the EOR retains design responsibility.",
    detail:
      "Useful for architects pricing concepts, design-build contractors shaping scope, or an EOR needing overflow capacity on a single package. Deliverables are clear enough to hand directly to the EOR for incorporation.",
    bullets: [
      "Conceptual electrical layouts",
      "Design development support",
      "Panel schedules and feeder sizing",
      "One-line diagram assistance",
    ],
  },
  {
    id: "marina",
    title: "Marina & Waterfront Electrical Consulting",
    outcome: "NEC 555 compliance in harsh environments",
    summary:
      "Shore power system review, dock electrical layout, corrosion and grounding considerations, and code review for marina and waterfront installations. Covers new builds, upgrades, and compliance sweeps on existing systems.",
    detail:
      "Marinas demand more than code compliance — material selection, equipment elevation, grounding strategy, and GFCI/ELCI protection all have to survive salt-air realities. I document what's in place, what doesn't meet current code, and a prioritized path to compliance.",
    bullets: [
      "Shore power system review",
      "Dock electrical layout",
      "Corrosion and grounding considerations",
      "Safety and NEC Article 555 code review",
    ],
  },
  {
    id: "energy-code",
    title: "Energy & Code Compliance Consulting",
    outcome: "Efficient, compliant, and documented",
    summary:
      "Lighting energy compliance (IECC / FBC-Energy), load optimization, retrofit recommendations, and efficiency reviews for existing buildings. Output is a prioritized list with scope and code implications, not a full energy model.",
    detail:
      "Retrofit and efficiency work is often gated by what's worth doing given the code path. I scope the minimum compliance route and the optional upgrade opportunities separately so decisions are clean.",
    bullets: [
      "Lighting energy compliance (IECC / FBC-Energy)",
      "Load optimization strategies",
      "Retrofit recommendations",
      "Energy efficiency reviews",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesFaqJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <PageHeader
        variant="services"
        title="Electrical engineering consulting services"
        description="CIRCUITA offers seven electrical engineering services: plan review, constructability and bid-risk review, lighting design, EV charging infrastructure, design support, marina electrical, and energy-code consulting. I help architects, developers, and contractors in Florida and the Southeast reduce field risk, avoid permit delays, and build with fewer change orders."
      />

      <section className="bg-surface py-16">
        <Container>
          <div className="grid gap-12">
            {offerings.map((o) => (
              <RevealOnScroll key={o.title}>
                <article id={o.id} className="electric-card scroll-mt-24 rounded-2xl bg-surface-container-lowest p-8 shadow-architectural ring-1 ring-outline-variant/10 md:p-12">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="font-headline text-2xl font-black tracking-tight text-primary-container md:text-3xl">
                        {o.title}
                      </h2>
                      <p className="mt-2 font-headline text-sm font-bold uppercase tracking-widest text-secondary">
                        {o.outcome}
                      </p>
                    </div>
                    <Button href="/contact" variant="secondary" size="sm" className="shrink-0">
                      Discuss this
                    </Button>
                  </div>
                  <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-on-surface">
                    {o.summary}
                  </p>
                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
                    {o.detail}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-on-surface">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-16 rounded-3xl bg-secondary-container p-10 md:p-14">
              <h3 className="font-headline text-2xl font-black text-primary-container md:text-3xl">
                Not sure where to start?
              </h3>
              <p className="mt-4 max-w-2xl text-lg text-on-surface-variant">
                Send drawings, milestones, and what you need to protect, whether that is schedule, budget, or
                permit risk. I will suggest an engagement that fits.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Request consultation
                </Button>
                <Link
                  href="/about"
                  className="font-headline inline-flex min-h-11 items-center px-2 text-base font-bold text-primary-container underline-offset-4 hover:underline"
                >
                  Learn about my approach
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div id="faq" className="mt-20 scroll-mt-24 border-t border-outline-variant/10 pt-16">
              <h2 className="font-headline text-2xl font-black tracking-tight text-primary-container md:text-3xl">
                Frequently asked questions about electrical engineering services
              </h2>
              <p className="mt-3 max-w-2xl text-on-surface-variant">
                Straight answers on plan review, constructability, lighting, EV, marina, design support, pricing,
                Florida code, and what to send for a productive first pass.
              </p>

              {(
                [
                  { label: "Plan review", clusters: ["plan-review"] as const },
                  { label: "Constructability & bid risk", clusters: ["constructability"] as const },
                  { label: "Lighting & photometrics", clusters: ["lighting"] as const },
                  { label: "EV charging", clusters: ["ev-charging"] as const },
                  { label: "Design support", clusters: ["design-support"] as const },
                  { label: "Marina & waterfront", clusters: ["marina"] as const },
                  { label: "Energy & code compliance", clusters: ["energy-code"] as const },
                  { label: "Process and pricing", clusters: ["process"] as const },
                  { label: "Florida and local projects", clusters: ["local"] as const },
                  { label: "General", clusters: ["general"] as const },
                ] as const
              ).map((group) => {
                const items = getFaqByCluster(...group.clusters);
                if (items.length === 0) return null;
                return (
                  <div key={group.label} className="mt-12">
                    <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-secondary">
                      {group.label}
                    </h3>
                    <div className="mt-6 space-y-8">
                      {items.map((item) => (
                        <div key={item.question} className="max-w-3xl">
                          <h4 className="font-headline text-lg font-bold text-primary-container">
                            {item.question}
                          </h4>
                          <p className="mt-3 leading-relaxed text-on-surface-variant">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </main>
  );
}
