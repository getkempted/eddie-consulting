import { SITE_NAME } from "@/lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const base = siteUrl.replace(/\/$/, "");

export function ArticleJsonLd({
  headline,
  description,
  slug,
  publishedAt,
  updatedAt,
}: {
  headline: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  const graph = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${base}/insights/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: base,
    },
    publisher: { "@id": `${base}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${base}/insights/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
