import { seoDefaults, SITE_NAME } from "@/lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const base = siteUrl.replace(/\/$/, "");

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: SITE_NAME,
      legalName: "STRUCTURA",
      url: base,
      description: seoDefaults.defaultDescription,
      slogan:
        "Structural engineering consulting that cuts field risk",
      foundingLocation: {
        "@type": "Place",
        name: "Florida, United States",
      },
      knowsAbout: [
        "Structural engineering",
        "Structural plan review",
        "Constructability",
        "Building code compliance",
        "Construction engineering",
        "Florida Building Code",
        "Wind load design",
        "High Velocity Hurricane Zone requirements",
        "Structural peer review",
        "Multi-discipline coordination",
        "ASCE 7 wind design",
        "Post-tension concrete",
        "Steel framing",
        "Adaptive reuse structural consulting",
        "Milestone structural inspections",
      ],
      areaServed: [
        { "@type": "State", name: "Florida" },
        { "@type": "AdministrativeArea", name: "Southeast United States" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "Structural plan review",
        "Constructability consulting",
        "Structural engineering consulting",
        "Structural peer review",
        "Engineering coordination",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Structural Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#plan-review`,
              name: "Structural Plan Review",
              url: `${base}/services#plan-review`,
              provider: { "@id": `${base}/#organization` },
              description:
                "Independent structural review of drawings and details before permit submission. Checks load paths, code compliance, coordination with architecture and MEP, and constructability.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "Structural Plan Review",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#constructability`,
              name: "Constructability Feedback",
              url: `${base}/services#constructability`,
              provider: { "@id": `${base}/#organization` },
              description:
                "Practical guidance on sequencing, tolerances, connections, and details that drive schedule and cost. Identifies field problems before they become change orders.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "Constructability Consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#consulting`,
              name: "Engineering Consulting",
              url: `${base}/services#consulting`,
              provider: { "@id": `${base}/#organization` },
              description:
                "Targeted consulting for adaptive reuse, complex transfers, unusual framing, and performance-based design with written deliverables.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "Structural Engineering Consulting",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      name: SITE_NAME,
      url: base,
      inLanguage: "en-US",
      publisher: { "@id": `${base}/#organization` },
      about: {
        "@type": "Thing",
        name: "Structural engineering consulting and plan review",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${base}/#professional-service`,
      name: `${SITE_NAME}: Structural engineering consulting`,
      url: `${base}/services`,
      provider: { "@id": `${base}/#organization` },
      areaServed: [
        { "@type": "State", name: "Florida" },
        { "@type": "AdministrativeArea", name: "Southeast United States" },
        { "@type": "Country", name: "United States" },
      ],
      description:
        "STRUCTURA provides structural plan review, constructability consulting, and engineering consulting for architects, developers, and contractors. Services include independent drawing review, constructability feedback, and targeted structural consulting for complex projects.",
      serviceType: [
        "Structural plan review",
        "Constructability consulting",
        "Engineering consulting",
        "Structural peer review",
      ],
      priceRange: "$$",
      knowsAbout: [
        "Florida Building Code",
        "ASCE 7 wind design",
        "High Velocity Hurricane Zone",
        "Threshold building requirements",
        "Post-tension concrete",
        "Steel and concrete framing",
        "Milestone structural inspections",
        "SB 4-D recertification",
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Architects, developers, general contractors, and construction managers working on commercial and multifamily projects",
      },
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
