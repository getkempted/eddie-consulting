import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { TrustStats } from "@/components/sections/home/TrustStats";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { CtaBand } from "@/components/sections/home/CtaBand";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
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
      <HomeHero />
      <TrustStats />
      <ServicesPreview />
      <ProcessSection />
      {/* <FeaturedInsights /> — hidden until blog is rewritten from structural to electrical topics */}
      <CtaBand />
    </main>
  );
}
