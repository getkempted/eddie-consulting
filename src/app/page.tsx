import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { TrustStats } from "@/components/sections/home/TrustStats";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { CtaBand } from "@/components/sections/home/CtaBand";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { HomeFaqJsonLd } from "@/components/seo/HomeFaqJsonLd";
import { seoDefaults } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: {
    absolute:
      "STRUCTURA | Structural Engineering Consulting, Plan Review & Constructability (Florida & Southeast)",
  },
  description:
    "STRUCTURA is a structural engineering consulting firm in Florida and the Southeast. Services include structural plan review, constructability feedback, and engineering consulting for architects, developers, and contractors.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "STRUCTURA | Structural Engineering Consulting & Plan Review",
    description:
      "Structural engineering consulting for architects, developers, and contractors in Florida and the Southeast: plan review, constructability, and responsive consulting with clear deliverables.",
    url: "/",
  },
};

function HomeFaq() {
  const faqs = [
    {
      q: "When do you need a structural engineer on a construction project?",
      a: "You need a structural engineer whenever the project involves load-bearing modifications, new construction requiring a permit, renovation of existing structures, or when the building department requires structural documentation. Early engagement prevents costly redesigns.",
    },
    {
      q: "What is structural plan review?",
      a: "Structural plan review is an independent check of structural drawings and details before permit submission. It verifies load paths, code compliance, coordination with architecture and MEP, and constructability, so problems surface while changes are still inexpensive.",
    },
    {
      q: "Does STRUCTURA work with teams in Florida and the Southeast?",
      a: "Yes. STRUCTURA regularly supports architects, developers, and contractors on projects in Florida and the broader Southeast United States, with deliverables aligned to local building code intent and jurisdictional expectations.",
    },
    {
      q: "What services does STRUCTURA offer?",
      a: "STRUCTURA offers three structural engineering services: (1) Structural plan review, an independent pass on drawings before permit; (2) Constructability feedback, practical guidance on sequencing, tolerances, and details that drive cost; and (3) Engineering consulting, targeted support for complex structural conditions with written deliverables.",
    },
    {
      q: "How much does structural engineering consulting cost?",
      a: "Fees vary by scope, package size, and turnaround needs. Plan reviews for a straightforward commercial project typically start in the low thousands. STRUCTURA scopes every engagement clearly up front so there are no surprises.",
    },
  ];

  return (
    <section className="bg-surface-container-low py-20">
      <Container>
        <RevealOnScroll>
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl font-black tracking-tighter text-primary-container md:text-4xl">
                Frequently asked questions about structural engineering
              </h2>
              <p className="mt-3 text-lg text-on-surface-variant">
                Quick answers for architects, developers, and contractors evaluating structural consulting services.
              </p>
            </div>
            <Link
              href="/services#faq"
              className="font-headline group inline-flex items-center gap-2 text-base font-bold text-primary-container"
            >
              All FAQs
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </RevealOnScroll>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((f) => (
            <RevealOnScroll key={f.q}>
              <div className="rounded-xl bg-surface-container-lowest p-8 shadow-architectural ring-1 ring-outline-variant/10">
                <h3 className="font-headline text-lg font-bold text-primary-container">{f.q}</h3>
                <p className="mt-3 leading-relaxed text-on-surface-variant">{f.a}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedInsights() {
  const featured = blogPosts.slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section className="bg-surface py-20">
      <Container>
        <RevealOnScroll>
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl font-black tracking-tighter text-primary-container md:text-4xl">
                Structural engineering insights
              </h2>
              <p className="mt-3 text-lg text-on-surface-variant">
                Practical guidance on plan review, constructability, and Florida building code, written for
                the teams that design and build.
              </p>
            </div>
            <Link
              href="/insights"
              className="font-headline group inline-flex items-center gap-2 text-base font-bold text-primary-container"
            >
              All articles
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </RevealOnScroll>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((post) => (
            <RevealOnScroll key={post.slug}>
              <article className="rounded-xl bg-surface-container-lowest p-8 shadow-architectural ring-1 ring-outline-variant/10 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-headline text-lg font-bold tracking-tight text-primary-container">
                  <Link href={`/insights/${post.slug}`} className="hover:underline underline-offset-4">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {post.description}
                </p>
                <p className="mt-4 text-xs text-on-surface-variant">{post.readingTime} min read</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HomeFaqJsonLd />
      <HomeHero />
      <TrustStats />
      <ServicesPreview />
      <ProcessSection />
      <HomeFaq />
      <FeaturedInsights />
      <CtaBand />
    </main>
  );
}
