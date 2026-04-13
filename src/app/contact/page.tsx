import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ContactFaqJsonLd } from "@/components/seo/ContactFaqJsonLd";

export const metadata: Metadata = {
  title: "Contact STRUCTURA | Request a Structural Engineering Consultation",
  description:
    "Request a structural engineering consultation from STRUCTURA. Share your project location, building type, milestones, and drawings. STRUCTURA responds with scope, timing, and next steps for Florida and Southeast projects.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact STRUCTURA | Request a Consultation",
    description:
      "Start a consultation for structural plan review, constructability support, or engineering consulting. STRUCTURA serves Florida and Southeast projects.",
    url: "/contact",
  },
};

const contactFaqs = [
  {
    q: "How do I request a structural engineering consultation?",
    a: "Fill out the form on this page with your project location, building type, milestones, and what you need reviewed. STRUCTURA will respond with a suggested scope, timeline, and next steps.",
  },
  {
    q: "What information should I include in my consultation request?",
    a: "Include: (1) project location and building type, (2) design milestones and construction dates, (3) drawings or packages you want reviewed, and (4) specific risks you want addressed early.",
  },
  {
    q: "How quickly does STRUCTURA respond to consultation requests?",
    a: "STRUCTURA typically responds within one business day with a proposed scope and next steps. Turnaround for a first review pass is usually 2 to 5 business days once scope is agreed.",
  },
  {
    q: "Is there a minimum project size for STRUCTURA engagements?",
    a: "No strict minimum. STRUCTURA scopes engagements to fit the project, from a quick structural checkpoint on a single detail to a full review pass on a multi-story package.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <ContactFaqJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <PageHeader
        variant="contact"
        title="Request a structural engineering consultation"
        description="Tell me about your project, what you need reviewed, and when you need comments. STRUCTURA will respond with a scope, timeline, and next steps."
      />

      <section className="bg-surface py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <RevealOnScroll className="lg:col-span-5">
              <div>
                <h2 className="font-headline text-2xl font-black tracking-tight text-primary-container md:text-3xl">
                  What to include in your request
                </h2>
                <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
                  The more context you provide, the faster STRUCTURA can propose a scope that fits your project and timeline.
                </p>
                <ul className="mt-6 space-y-4 text-base leading-relaxed text-on-surface-variant">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span><strong>Project location and building type:</strong> city, county, structure type</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span><strong>Design milestones and construction dates:</strong> permit submission, buyout, start</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span><strong>Drawings or packages:</strong> what you want reviewed and at what stage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span><strong>Risks to address early:</strong> coordination gaps, connections, staging concerns</span>
                  </li>
                </ul>
                <div className="mt-10 rounded-xl bg-surface-container-low p-6 ring-1 ring-outline-variant/10">
                  <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                    Not sure which service fits?
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>
                      <Link
                        href="/services#plan-review"
                        className="font-bold text-primary-container underline-offset-4 hover:underline"
                      >
                        Structural plan review
                      </Link>{" "}
                      <span className="text-on-surface-variant">, when drawings need a structural check before permit</span>
                    </li>
                    <li>
                      <Link
                        href="/services#constructability"
                        className="font-bold text-primary-container underline-offset-4 hover:underline"
                      >
                        Constructability feedback
                      </Link>{" "}
                      <span className="text-on-surface-variant">, when you want field-ready notes before procurement</span>
                    </li>
                    <li>
                      <Link
                        href="/services#consulting"
                        className="font-bold text-primary-container underline-offset-4 hover:underline"
                      >
                        Engineering consulting
                      </Link>{" "}
                      <span className="text-on-surface-variant">, when you need a working session or second opinion</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-on-surface-variant">
                    <Link
                      href="/about"
                      className="text-primary-container underline-offset-4 hover:underline"
                    >
                      Learn how STRUCTURA works on your project
                    </Link>
                  </p>
                </div>
                {process.env.NODE_ENV === "development" ? (
                  <p className="mt-8 text-sm leading-relaxed text-on-surface-variant">
                    Dev: run Supabase locally and apply the migration so submissions persist to the{" "}
                    <code className="rounded bg-surface-container-low px-1 py-0.5 font-mono text-xs text-on-surface">
                      leads
                    </code>{" "}
                    table.
                  </p>
                ) : null}
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-7">
              <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-architectural ring-1 ring-outline-variant/10 sm:p-8 md:p-10">
                <ContactForm />
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="mt-16 border-t border-outline-variant/10 pt-16">
              <h2 className="font-headline text-2xl font-black tracking-tight text-primary-container md:text-3xl">
                Frequently asked questions about consultations
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {contactFaqs.map((f) => (
                  <div key={f.q} className="rounded-xl bg-surface-container-lowest p-8 shadow-architectural ring-1 ring-outline-variant/10">
                    <h3 className="font-headline text-lg font-bold text-primary-container">{f.q}</h3>
                    <p className="mt-3 leading-relaxed text-on-surface-variant">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </main>
  );
}
