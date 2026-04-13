/** Site-wide SEO constants (keywords, geography, brand strings). */

export const SITE_NAME = "CIRCUITA";

export const seoDefaults = {
  siteName: SITE_NAME,
  /** Primary commercial intent phrases for on-page and meta alignment. */
  primaryKeywords: [
    "electrical engineering consulting",
    "electrical plan review",
    "NEC compliance consulting",
    "lighting design consultant Florida",
    "EV charging infrastructure consulting",
  ] as const,
  secondaryKeywords: [
    "electrical engineering consulting practice",
    "electrical peer review",
    "photometric analysis services",
    "marina electrical consulting",
    "electrical constructability review",
    "Florida electrical permit consultant",
    "commercial lighting design consultant",
  ] as const,
  /** Long-tail keywords targeting specific problems and services. */
  longTailKeywords: [
    "how to pass electrical plan review",
    "NEC article 625 EV charging compliance",
    "marina NEC 555 compliance Florida",
    "LPD compliance Florida",
    "electrical engineer for permit Florida",
    "IES photometric study Florida",
    "electrical design support without stamping",
    "when do you need an electrical consultant",
    "electrical retrofit energy code Florida",
    "shore power system review Florida",
  ] as const,
  /** Geographic focus for local and regional queries (no street address until provided). */
  areaServed: ["Florida", "Southeast United States"] as const,
  targetCities: [
    "Miami",
    "Fort Lauderdale",
    "Tampa",
    "Orlando",
    "Jacksonville",
    "West Palm Beach",
  ] as const,
  defaultDescription:
    "Electrical engineering consulting for architects, developers, and contractors in Florida and the Southeast: plan review, lighting design, EV charging, marina electrical, and constructability with clear written deliverables.",
} as const;

export function absoluteUrl(path: string, siteUrl: string): string {
  const base = siteUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
