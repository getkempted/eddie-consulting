import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ServicesFaqJsonLd } from "@/components/seo/ServicesFaqJsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { servicesFaq, getFaqByCluster } from "@/lib/services-faq";

export const metadata: Metadata = {
  title: "Structural Plan Review, Constructability & Engineering Consulting Services",
  description:
    "STRUCTURA offers three structural engineering services: (1) structural plan review before permit, (2) constructability feedback on sequencing and details, and (3) engineering consulting for complex structural conditions. Serving architects, developers, and contractors in Florida and across the Southeast.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | STRUCTURA: Plan Review, Constructability & Consulting",
    description:
      "Structural plan review, constructability feedback, and engineering consulting for architects, developers, and contractors in Florida and the Southeast.",
    url: "/services",
  },
};

const offerings = [
  {
    id: "plan-review",
    title: "Structural plan review",
    outcome: "Fewer surprises in the field",
    summary:
      "A structural plan review is an independent check of structural drawings and details before permit submission. It verifies load paths, code compliance, coordination with architecture and MEP, and constructability.",
    detail:
      "I read drawings the way contractors and inspectors do: load path gaps, vague details, and clashes with other trades. You get prioritized notes you can close out in sequence.",
    bullets: [
      "Gravity and lateral system coherence",
      "Connection intent vs. constructability",
      "Coordination checkpoints with architecture and MEP",
      "Code compliance for the specific jurisdiction",
    ],
  },
  {
    id: "constructability",
    title: "Constructability feedback",
    outcome: "Designs that build cleanly",
    summary:
      "A constructability review evaluates whether a structural design can be built efficiently in the field. It catches sequencing conflicts, procurement risks, and overly complex details before they become change orders.",
    detail:
      "Practical guidance on sequencing, tolerances, and details that drive schedule and cost, kept proportional to the job.",
    bullets: [
      "Sequencing and staging considerations",
      "Material and system tradeoffs",
      "Risk hotspots before procurement",
      "Connection complexity and field access",
    ],
  },
  {
    id: "consulting",
    title: "Engineering consulting",
    outcome: "Decisions on demand",
    summary:
      "Structural engineering consulting provides targeted reviews, second opinions, and written recommendations for complex structural conditions, without replacing your engineer of record.",
    detail:
      "Working sessions for adaptive reuse, tricky transfers, and unusual framing, with written outputs your team can share internally.",
    bullets: [
      "Options with pros, cons, and dependencies",
      "Clear assumptions and exclusions",
      "Fast follow-ups when the design shifts",
      "Written deliverables your team can forward as-is",
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
        title="Structural plan review & consulting services"
        description="STRUCTURA offers three structural engineering services: plan review, constructability feedback, and engineering consulting. I help architects, developers, and contractors in Florida and the Southeast reduce field risk, avoid permit delays, and build with fewer change orders."
      />

      <section className="bg-surface py-16">
        <Container>
          <div className="grid gap-12">
            {offerings.map((o) => (
              <RevealOnScroll key={o.title}>
                <article id={o.id} className="scroll-mt-24 rounded-2xl bg-surface-container-lowest p-8 shadow-architectural ring-1 ring-outline-variant/10 md:p-12">
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
                Send drawings, milestones, and what you need to protect, whether that is schedule, budget, or risk. We
                will suggest an engagement that fits.
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
                Frequently asked questions about structural engineering services
              </h2>
              <p className="mt-3 max-w-2xl text-on-surface-variant">
                Straight answers on plan review, constructability, consulting scope, pricing, Florida code, and what
                to send for a productive first pass.
              </p>

              {(
                [
                  { label: "Plan review", clusters: ["plan-review"] as const },
                  { label: "Constructability", clusters: ["constructability"] as const },
                  { label: "Consulting scope", clusters: ["consulting"] as const },
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
