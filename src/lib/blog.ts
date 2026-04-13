/** Blog post data and helpers for the insights/blog section. */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string */
  publishedAt: string;
  updatedAt?: string;
  /** Reading time in minutes */
  readingTime: number;
  /** Primary keyword for SEO */
  primaryKeyword: string;
  /** Which content cluster / pillar this supports */
  pillar: "plan-review" | "constructability" | "consulting" | "florida";
  /** Tags for filtering */
  tags: string[];
};

/** Central registry of all blog posts. Add new posts here. */
export const blogPosts: BlogPost[] = [
  {
    slug: "common-structural-plan-review-mistakes",
    title: "10 Common Structural Plan Review Mistakes That Delay Permitting",
    description:
      "The most frequent errors found during structural plan review, and how to fix them before your next permit submission.",
    publishedAt: "2026-04-10",
    readingTime: 6,
    primaryKeyword: "structural plan review mistakes",
    pillar: "plan-review",
    tags: ["plan review", "permitting", "Florida Building Code"],
  },
  {
    slug: "constructability-review-reduces-change-orders",
    title: "How a Constructability Review Reduces Change Orders and RFIs",
    description:
      "Why constructability reviews catch field problems before they become change orders, and how to estimate ROI for your project.",
    publishedAt: "2026-04-10",
    readingTime: 6,
    primaryKeyword: "constructability review benefits",
    pillar: "constructability",
    tags: ["constructability", "change orders", "RFIs"],
  },
  {
    slug: "when-to-hire-structural-engineering-consultant",
    title: "When to Hire a Structural Engineering Consultant (And What to Expect)",
    description:
      "Scenarios that trigger the need for a structural consultant, what they deliver vs. an engineer of record, and how to scope the engagement.",
    publishedAt: "2026-04-10",
    readingTime: 5,
    primaryKeyword: "hire structural engineering consultant",
    pillar: "consulting",
    tags: ["consulting", "hiring", "engineer of record"],
  },
  {
    slug: "florida-building-permit-structural-requirements",
    title: "What to Expect During the Florida Building Permit Process: Structural Requirements",
    description:
      "A structural engineer's guide to Florida's permitting process: required documents, common rejection reasons, and how to respond to plan review comments.",
    publishedAt: "2026-04-10",
    readingTime: 5,
    primaryKeyword: "Florida building permit structural requirements",
    pillar: "florida",
    tags: ["Florida", "permitting", "building code", "plan review"],
  },
  {
    slug: "florida-wind-load-design-requirements",
    title: "Florida Wind Load Design: What Architects and Developers Need to Know",
    description:
      "An overview of Florida's wind load requirements, HVHZ provisions, and how wind loads affect structural system selection for your project.",
    publishedAt: "2026-04-10",
    readingTime: 7,
    primaryKeyword: "Florida wind load requirements",
    pillar: "florida",
    tags: ["Florida", "wind load", "HVHZ", "building code"],
  },
  {
    slug: "architect-structural-engineer-coordination",
    title: "Architect-Structural Engineer Coordination: Preventing Design Conflicts",
    description:
      "Common friction points between architectural and structural design, plus coordination practices that keep projects moving without costly redesigns.",
    publishedAt: "2026-04-10",
    readingTime: 6,
    primaryKeyword: "architect structural engineer coordination",
    pillar: "consulting",
    tags: ["coordination", "architects", "design conflicts"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByPillar(pillar: BlogPost["pillar"]): BlogPost[] {
  return blogPosts.filter((p) => p.pillar === pillar);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => p.slug !== slug && p.pillar === post.pillar)
    .slice(0, limit);
}
