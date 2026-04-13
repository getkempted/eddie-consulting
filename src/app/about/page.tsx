import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AboutFaqJsonLd } from "@/components/seo/AboutFaqJsonLd";

export const metadata: Metadata = {
  title: "About STRUCTURA | Structural Engineering Consulting Firm",
  description:
    "STRUCTURA is a structural engineering consulting firm serving architects, developers, and contractors in Florida and the Southeast. We provide plan review, constructability feedback, and engineering consulting with clear, written deliverables.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About STRUCTURA | Structural Engineering Consulting",
    description:
      "Learn how STRUCTURA works with project teams: structural plan reviews, constructability input, and consulting engagements.",
    url: "/about",
  },
};

const aboutFaqs = [
  {
    q: "What is STRUCTURA?",
    a: "STRUCTURA is a structural engineering consulting firm that provides plan review, constructability feedback, and engineering consulting for architects, developers, and contractors in Florida and the Southeast United States.",
  },
  {
    q: "Who does STRUCTURA work with?",
    a: "STRUCTURA works with architects, developers, general contractors, and construction managers on commercial and multifamily projects. We collaborate alongside your engineer of record, not as a replacement.",
  },
  {
    q: "Where does STRUCTURA operate?",
    a: "STRUCTURA serves projects throughout Florida (including Miami-Dade HVHZ and Broward County) and the broader Southeast United States. Remote consulting is available nationwide.",
  },
  {
    q: "What makes STRUCTURA different from other structural engineering firms?",
    a: "STRUCTURA focuses on consulting (plan review, constructability, and targeted structural guidance) rather than full structural design. Deliverables are written clearly enough for your team to forward directly to contractors, building departments, and other consultants.",
  },
  {
    q: "Does STRUCTURA produce sealed drawings?",
    a: "No. STRUCTURA provides written recommendations, review comments, and options analysis, not sealed construction documents. If your project requires stamped drawings, we can discuss scope or refer you to a full-service structural engineering firm.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <AboutFaqJsonLd />
      <PageHeader
        title="About STRUCTURA: structural engineering consulting"
        description="STRUCTURA is a structural engineering consulting firm for architects, developers, and contractors in Florida and the Southeast. We provide plan review, constructability feedback, and targeted engineering consulting with clear, written deliverables."
      />

      <section className="bg-surface py-16 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ]}
          />

          <RevealOnScroll>
            <div className="mt-10 rounded-2xl bg-surface-container-low p-8 ring-1 ring-outline-variant/10 md:p-10">
              <h2 className="font-headline text-sm font-bold uppercase tracking-widest text-secondary">
                Key facts about STRUCTURA
              </h2>
              <ul className="mt-4 grid gap-x-8 gap-y-3 text-on-surface sm:grid-cols-2">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  <span><strong>Focus:</strong> Structural plan review, constructability, and engineering consulting</span>
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
                  <span><strong>Expertise:</strong> Florida Building Code, HVHZ, ASCE 7, multi-discipline coordination</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  <span><strong>Experience:</strong> Licensed PE with 8 years of civil engineering experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  <span><strong>Deliverables:</strong> Written comments, options analysis, prioritized notes</span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <RevealOnScroll className="lg:col-span-7">
              <div>
                <h2 className="font-headline text-2xl font-black tracking-tight text-primary-container md:text-3xl">
                  How does STRUCTURA work with project teams?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
                  STRUCTURA works alongside architects, MEP consultants, and contractors to turn structural intent into
                  decisions that limit rework and protect the schedule. Every engagement starts with explicit scope,
                  deadlines, and a clear definition of what &ldquo;done&rdquo; looks like.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
                  Whether the engagement is a quick checkpoint or a full review pass, the process stays light and the
                  comments stay usable, formatted so your team can forward them directly.
                </p>

                <h3 className="mt-10 font-headline text-xl font-bold text-primary-container">
                  When do teams hire STRUCTURA?
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                  Teams hire STRUCTURA when they need a construction engineering consultant who speaks both code and
                  jobsite reality. Common engagement types include:
                </p>
                <ul className="mt-4 space-y-3 text-on-surface-variant">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span>A{" "}
                      <Link href="/services#plan-review" className="font-bold text-primary-container underline-offset-4 hover:underline">
                        peer review of structural drawings
                      </Link>{" "}
                      before permit submission
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span>A fast{" "}
                      <Link href="/services#constructability" className="font-bold text-primary-container underline-offset-4 hover:underline">
                        constructability sweep
                      </Link>{" "}
                      ahead of buyout
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span>A{" "}
                      <Link href="/services#consulting" className="font-bold text-primary-container underline-offset-4 hover:underline">
                        working session
                      </Link>{" "}
                      on a complex transfer or lateral system
                    </span>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-5">
              <aside className="h-full">
                <div className="h-full rounded-2xl bg-surface-container-low p-8 shadow-architectural ring-1 ring-outline-variant/10 md:p-10">
                  <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                    What STRUCTURA delivers
                  </h3>
                  <ul className="mt-6 space-y-4 text-on-surface">
                    <li className="leading-relaxed">
                      <span className="font-headline font-bold text-primary-container">Licensed structural review</span>{" "}
                      grounded in code intent and your drawings, not generic checklists.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-headline font-bold text-primary-container">Full-package comfort</span>{" "}
                      Comfortable working from complete drawing sets and the RFI and coordination threads that follow.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-headline font-bold text-primary-container">Readable deliverables</span>{" "}
                      Comments and summaries your team can forward as-is to contractors and building departments.
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
                Frequently asked questions about STRUCTURA
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
                Send project type, location, timeline, and what you need reviewed. We will reply with next steps and a
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
