import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Electrical Engineering Insights & Guides | CIRCUITA",
  description:
    "Practical articles by CIRCUITA on electrical plan review, NEC compliance, lighting design, EV charging, Florida electrical code, and constructability. Written for architects, developers, and contractors working on commercial and multifamily projects.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | CIRCUITA: Electrical Engineering Articles & Guides",
    description:
      "NEC plan review checklists, lighting design fundamentals, EV charging guidance, Florida code explainers, and coordination best practices from a licensed electrical engineering consultant.",
    url: "/insights",
  },
};

const pillarLabels: Record<string, string> = {
  "plan-review": "Plan Review",
  constructability: "Constructability",
  consulting: "Consulting",
  florida: "Florida & Code",
};

export default function InsightsPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/insights" },
        ]}
      />
      <PageHeader
        title="Electrical engineering insights from CIRCUITA"
        description="Practical articles on NEC plan review, lighting design, EV charging, marina electrical, Florida electrical code, and multi-discipline coordination. Written by CIRCUITA for architects, developers, and contractors working on commercial and multifamily projects."
      />

      <section className="bg-surface py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <RevealOnScroll key={post.slug}>
                <article className="flex h-full flex-col rounded-xl bg-surface-container-lowest p-8 shadow-architectural ring-1 ring-outline-variant/10 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-headline text-xs font-bold uppercase tracking-widest text-secondary">
                    {pillarLabels[post.pillar] ?? post.pillar}
                  </p>
                  <h2 className="mt-3 font-headline text-xl font-bold tracking-tight text-primary-container">
                    <Link href={`/insights/${post.slug}`} className="hover:underline underline-offset-4">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-on-surface-variant">
                    {post.description}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-on-surface-variant">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>{post.readingTime} min read</span>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
