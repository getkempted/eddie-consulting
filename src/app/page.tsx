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
      "CIRCUITA | Electrical Engineering Consulting, Plan Review, Lighting & EV (Florida & Southeast)",
  },
  description:
    "CIRCUITA is an electrical engineering consulting practice in Florida and the Southeast. Services include electrical plan review, constructability & bid-risk review, lighting design and photometrics, EV charging infrastructure, design support, marina electrical, and energy-code consulting.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CIRCUITA | Electrical Engineering Consulting, Plan Review & Lighting",
    description:
      "Electrical engineering consulting for architects, developers, and contractors in Florida and the Southeast: plan review, lighting design, EV charging, marina electrical, and constructability with clear deliverables.",
    url: "/",
  },
};

function HomeFaq() {
  const faqs = [
    {
      q: "When do you need an electrical engineer on a construction project?",
      a: "You need an electrical engineer whenever the project involves a service upgrade, significant lighting or controls work, EV charging infrastructure, marina or waterfront electrical, or any permit submission where the building department expects well-documented electrical design. Early engagement prevents costly redesigns.",
    },
    {
      q: "What is electrical plan review?",
      a: "Electrical plan review is an independent check of power, lighting, and one-line drawings before permit submission. It verifies NEC compliance, panel and feeder sizing, grounding, coordination with mechanical and architectural trades, and constructability, so issues surface while changes are still inexpensive.",
    },
    {
      q: "Does CIRCUITA serve clients in Florida and the Southeast?",
      a: "Yes. CIRCUITA regularly supports architects, developers, and contractors on projects in Florida and the broader Southeast United States, with deliverables aligned to the adopted NEC cycle, Florida Building Code Energy, and jurisdictional expectations.",
    },
    {
      q: "What services does CIRCUITA offer?",
      a: "CIRCUITA offers seven electrical engineering services: (1) Electrical plan review and QA/QC; (2) Constructability and bid-risk review; (3) Lighting design and photometrics; (4) EV charging infrastructure consulting; (5) Electrical design support (non-EOR); (6) Marina and waterfront electrical consulting; (7) Energy and code compliance consulting.",
    },
    {
      q: "How much does electrical engineering consulting cost?",
      a: "Fees vary by scope, package size, and turnaround needs. Plan reviews for a straightforward commercial project typically start in the low thousands. CIRCUITA scopes every engagement clearly up front so there are no surprises.",
    },
  ];

  return (
    <section className="bg-surface-container-low py-20">
      <Container>
        <RevealOnScroll>
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl font-black tracking-tighter text-primary-container md:text-4xl">
                Frequently asked questions about electrical engineering
              </h2>
              <p className="mt-3 text-lg text-on-surface-variant">
                Quick answers for architects, developers, and contractors evaluating electrical consulting services.
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
                Electrical engineering insights
              </h2>
              <p className="mt-3 text-lg text-on-surface-variant">
                Practical guidance on NEC plan review, lighting design, EV charging, and Florida electrical
                code, written for the architects, developers, and contractors who design and build.
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
      {/* <FeaturedInsights /> — hidden until blog is rewritten from structural to electrical topics */}
      <CtaBand />
    </main>
  );
}
