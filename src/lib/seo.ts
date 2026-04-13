/** Site-wide SEO constants (keywords, geography, brand strings). */

export const SITE_NAME = "STRUCTURA";

export const seoDefaults = {
  siteName: SITE_NAME,
  /** Primary commercial intent phrases for on-page and meta alignment. */
  primaryKeywords: [
    "structural engineering consulting",
    "structural plan review",
    "constructability consulting",
    "structural engineer Florida",
    "structural engineering services",
  ] as const,
  secondaryKeywords: [
    "engineering consulting practice",
    "construction engineering consultant",
    "peer review structural drawings",
    "building code structural review",
    "Florida structural engineer consulting",
    "structural peer review services",
    "commercial structural engineer",
  ] as const,
  /** Long-tail keywords targeting specific problems and services. */
  longTailKeywords: [
    "structural plan review services Florida",
    "constructability review consulting",
    "how to pass structural plan review",
    "structural engineer for permit Florida",
    "structural engineering for renovations Florida",
    "hurricane damage structural assessment",
    "Florida building code structural requirements",
    "when do you need a structural engineer",
    "structural engineer cost Florida",
    "structural inspection before buying house",
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
    "Structural engineering consulting for architects, developers, and contractors in Florida and the Southeast: plan review, constructability, and responsive consulting with clear deliverables.",
} as const;

export function absoluteUrl(path: string, siteUrl: string): string {
  const base = siteUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
