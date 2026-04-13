import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { AboutFaqJsonLd } from "@/components/seo/AboutFaqJsonLd";

export const metadata: Metadata = {
  title: "About CIRCUITA | Electrical Engineering Consulting Practice",
  description:
    "CIRCUITA is an electrical engineering consulting practice serving architects, developers, and contractors in Florida and the Southeast. I provide plan review, lighting design, EV charging, marina electrical, constructability, and targeted electrical consulting with clear, written deliverables.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About CIRCUITA | Electrical Engineering Consulting",
    description:
      "Learn how CIRCUITA works on your project: electrical plan review, lighting design, EV charging, marina electrical, and consulting engagements.",
    url: "/about",
  },
};

const aboutFaqs = [
  {
    q: "What is CIRCUITA?",
    a: "CIRCUITA is an electrical engineering consulting practice that provides plan review, constructability and bid-risk review, lighting design, EV charging consulting, electrical design support, marina electrical, and energy-code consulting for architects, developers, and contractors in Florida and the Southeast United States.",
  },
  {
    q: "Who does CIRCUITA work with?",
    a: "CIRCUITA works with architects, developers, general contractors, and construction managers on commercial and multifamily projects. I collaborate alongside your electrical engineer of record, not as a replacement.",
  },
  {
    q: "Where does CIRCUITA operate?",
    a: "CIRCUITA serves projects throughout Florida (including Miami-Dade, Broward, Hillsborough, and Orange counties) and the broader Southeast United States. Remote consulting is available nationwide.",
  },
  {
    q: "What makes CIRCUITA different from other electrical engineering firms?",
    a: "CIRCUITA focuses on consulting (plan review, constructability, lighting, EV, marina, and targeted electrical guidance) rather than full-service EOR work. Deliverables are written clearly enough for your team to forward directly to contractors, building departments, and other consultants.",
  },
  {
    q: "Does CIRCUITA produce sealed drawings?",
    a: "No. CIRCUITA provides written recommendations, review comments, photometric studies, and design support, not sealed construction documents. If your project requires stamped drawings, I can discuss scope or refer you to a full-service electrical engineering firm.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <AboutFaqJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <PageHeader
        variant="about"
        title="About CIRCUITA: electrical engineering consulting"
        description="CIRCUITA is an electrical engineering consulting practice for architects, developers, and contractors in Florida and the Southeast. I provide plan review, lighting design, EV charging, marina electrical, and targeted electrical consulting with clear, written deliverables."
      />

      <section className="bg-surface py-16 md:py-20">
        <Container>
          <RevealOnScroll>
            <div className="rounded-2xl bg-surface-container-low p-8 ring-1 ring-outline-variant/10 md:p-10">
              <h2 className="font-headline text-sm font-bold uppercase tracking-widest text-secondary">
                Key facts about CIRCUITA
              </h2>
              <ul className="mt-4 grid gap-x-8 gap-y-3 text-on-surface sm:grid-cols-2">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  <span><strong>Focus:</strong> Electrical plan review, lighting design, EV charging, marina electrical, and consulting</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  <span><strong>Clients:</strong> Architects, developers, general contractors, construction managers</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  <span><strong>Geography:</strong> Florida and Southeast United States</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  <span><strong>Expertise:</strong> National Electrical Code, Florida amendments, IECC energy compliance, multi-discipline coordination</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  <span><strong>Experience:</strong> Licensed PE with 8 years of electrical engineering experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  <span><strong>Deliverables:</strong> Written comments, photometric studies, panel schedules, prioritized notes</span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <RevealOnScroll className="lg:col-span-7">
              <div>
                <h2 className="font-headline text-2xl font-black tracking-tight text-primary-container md:text-3xl">
                  How does CIRCUITA work on your project?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
                  CIRCUITA works alongside architects, mechanical consultants, and contractors to turn electrical
                  intent into decisions that limit rework and protect the schedule. Every engagement starts with
                  explicit scope, deadlines, and a clear definition of what &ldquo;done&rdquo; looks like.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
                  Whether the engagement is a quick checkpoint or a full review pass, the process stays light and the
                  comments stay usable, formatted so your team can forward them directly.
                </p>

                <h3 className="mt-10 font-headline text-xl font-bold text-primary-container">
                  When should you hire CIRCUITA?
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                  Hire CIRCUITA when you need an electrical consultant who speaks both code and jobsite reality.
                  Common engagement types include:
                </p>
                <ul className="mt-4 space-y-3 text-on-surface-variant">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span>An{" "}
                      <Link href="/services#plan-review" className="font-bold text-primary-container underline-offset-4 hover:underline">
                        NEC plan review
                      </Link>{" "}
                      before permit submission
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span>A fast{" "}
                      <Link href="/services#constructability" className="font-bold text-primary-container underline-offset-4 hover:underline">
                        constructability and bid-risk sweep
                      </Link>{" "}
                      ahead of buyout
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span>A{" "}
                      <Link href="/services#lighting" className="font-bold text-primary-container underline-offset-4 hover:underline">
                        photometric study
                      </Link>{" "}
                      or an{" "}
                      <Link href="/services#ev-charging" className="font-bold text-primary-container underline-offset-4 hover:underline">
                        EV feasibility analysis
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-5">
              <aside className="h-full">
                <div className="h-full rounded-2xl bg-surface-container-low p-8 shadow-architectural ring-1 ring-outline-variant/10 md:p-10">
                  <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                    What CIRCUITA delivers
                  </h3>
                  <ul className="mt-6 space-y-4 text-on-surface">
                    <li className="leading-relaxed">
                      <span className="font-headline font-bold text-primary-container">Licensed electrical review</span>{" "}
                      grounded in NEC intent and your drawings, not generic checklists.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-headline font-bold text-primary-container">Full-package comfort</span>{" "}
                      Comfortable working from complete drawing sets and the RFI and coordination threads that follow.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-headline font-bold text-primary-container">Readable deliverables</span>{" "}
                      Comments, photometric output, and summaries your team can forward as-is to contractors and building departments.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-headline font-bold text-primary-container">Fast turnaround</span>{" "}
                      Typical first pass in 2 to 5 business days, aligned to your submission dates.
                    </li>
                  </ul>
                </div>
              </aside>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="mt-16 border-t border-outline-variant/10 pt-16">
              <h2 className="font-headline text-2xl font-black tracking-tight text-primary-container md:text-3xl">
                Frequently asked questions about CIRCUITA
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {aboutFaqs.map((f) => (
                  <div key={f.q} className="rounded-xl bg-surface-container-lowest p-8 shadow-architectural ring-1 ring-outline-variant/10">
                    <h3 className="font-headline text-lg font-bold text-primary-container">{f.q}</h3>
                    <p className="mt-3 leading-relaxed text-on-surface-variant">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-16 rounded-3xl bg-primary-container p-10 text-on-primary md:p-14">
              <h2 className="font-headline text-2xl font-black tracking-tight md:text-3xl">Ready to discuss your project?</h2>
              <p className="mt-4 max-w-2xl text-primary-fixed-dim">
                Send project type, location, timeline, and what you need reviewed. I will reply with next steps and a
                suggested scope.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" className="bg-secondary text-on-primary hover:opacity-95">
                  Request consultation
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </main>
  );
}
