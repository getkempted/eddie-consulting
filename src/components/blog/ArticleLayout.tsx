import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import type { BlogPost } from "@/lib/blog";
import { getRelatedPosts } from "@/lib/blog";

const pillarLabels: Record<string, string> = {
  "plan-review": "Plan Review",
  constructability: "Constructability",
  consulting: "Consulting",
  florida: "Florida & Code",
};

export function ArticleLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const related = getRelatedPosts(post.slug, 3);

  return (
    <main>
      <ArticleJsonLd
        headline={post.title}
        description={post.description}
        slug={post.slug}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
      />

      <div className="border-b border-outline-variant/10 bg-surface-container-low">
        <Container className="py-14 md:py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Insights", href: "/insights" },
              { name: post.title, href: `/insights/${post.slug}` },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="font-headline text-xs font-bold uppercase tracking-widest text-secondary">
              {pillarLabels[post.pillar] ?? post.pillar}
            </p>
            <h1 className="mt-4 font-headline text-3xl font-black tracking-tighter text-primary-container md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-on-surface-variant md:text-xl">
              {post.description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-on-surface-variant">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{post.readingTime} min read</span>
              <span>By CIRCUITA</span>
            </div>
          </div>
        </Container>
      </div>

      <section className="bg-surface py-16">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <article className="prose-structura lg:col-span-8">{children}</article>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-2xl bg-surface-container-low p-8 shadow-architectural ring-1 ring-outline-variant/10">
                  <h3 className="font-headline text-lg font-bold text-primary-container">
                    Need electrical engineering support?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                    Share your project details and CIRCUITA will follow up with a scope and next steps.
                  </p>
                  <div className="mt-6">
                    <Button href="/contact" variant="primary" size="sm" className="w-full justify-center">
                      Request consultation
                    </Button>
                  </div>
                </div>

                {related.length > 0 && (
                  <div className="rounded-2xl bg-surface-container-low p-8 shadow-architectural ring-1 ring-outline-variant/10">
                    <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Related articles
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link
                            href={`/insights/${r.slug}`}
                            className="font-headline text-sm font-bold text-primary-container underline-offset-4 hover:underline"
                          >
                            {r.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="rounded-2xl bg-surface-container-low p-8 shadow-architectural ring-1 ring-outline-variant/10">
                  <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                    CIRCUITA services
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <Link
                        href="/services#plan-review"
                        className="text-sm text-primary-container underline-offset-4 hover:underline"
                      >
                        Electrical plan review
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services#constructability"
                        className="text-sm text-primary-container underline-offset-4 hover:underline"
                      >
                        Constructability & bid risk
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services#lighting"
                        className="text-sm text-primary-container underline-offset-4 hover:underline"
                      >
                        Lighting design & photometrics
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
