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
      legalName: "CIRCUITA",
      url: base,
      description: seoDefaults.defaultDescription,
      slogan: "Electrical engineering consulting that cuts field risk",
      foundingLocation: {
        "@type": "Place",
        name: "Florida, United States",
      },
      knowsAbout: [
        "Electrical engineering",
        "Electrical plan review",
        "NEC compliance",
        "National Electrical Code",
        "NFPA 70",
        "NEC Article 625 (EV charging)",
        "NEC Article 555 (marinas and boatyards)",
        "IES photometric analysis",
        "Lighting design",
        "Lighting power density",
        "IECC energy code",
        "Florida Building Code Energy",
        "Panel schedule design",
        "Load calculations",
        "Short-circuit and coordination studies",
        "EV charging infrastructure",
        "Marina and waterfront electrical",
        "Grounding and bonding",
        "Electrical constructability",
        "Bid-risk review",
      ],
      areaServed: [
        { "@type": "State", name: "Florida" },
        { "@type": "AdministrativeArea", name: "Southeast United States" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "Electrical plan review",
        "Constructability and bid-risk review",
        "Lighting design and photometrics",
        "EV charging infrastructure consulting",
        "Electrical design support",
        "Marina and waterfront electrical consulting",
        "Energy and code compliance consulting",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electrical Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#plan-review`,
              name: "Electrical Plan Review & QA/QC",
              url: `${base}/services#plan-review`,
              provider: { "@id": `${base}/#organization` },
              description:
                "Independent pass over power, lighting, and one-line drawings against NEC and jurisdictional expectations. Panel schedule accuracy, load calculations, grounding, coordination, and constructability.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "Electrical Plan Review",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#constructability`,
              name: "Constructability & Bid Risk Review",
              url: `${base}/services#constructability`,
              provider: { "@id": `${base}/#organization` },
              description:
                "Pre-bid and pre-buyout pass identifying design gaps, cost-risk hotspots, change-order exposure, and RFI-development support. Removes ambiguity that contractors otherwise price as contingency.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "Electrical Constructability Consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#lighting`,
              name: "Lighting Design & Photometric Analysis",
              url: `${base}/services#lighting`,
              provider: { "@id": `${base}/#organization` },
              description:
                "Interior and exterior lighting design with fixture selection, IES-based photometric studies, and LPD compliance for new design, retrofits, and upgrades.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "Lighting Design Consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#ev-charging`,
              name: "EV Charging Infrastructure Consulting",
              url: `${base}/services#ev-charging`,
              provider: { "@id": `${base}/#organization` },
              description:
                "EV charger site planning, load analysis, service capacity review, panel and distribution upgrades, utility coordination, and NEC Article 625 compliance.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "EV Charging Infrastructure Consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#design-support`,
              name: "Electrical Design Support (Non-EOR)",
              url: `${base}/services#design-support`,
              provider: { "@id": `${base}/#organization` },
              description:
                "Conceptual layouts, panel schedules, feeder sizing, and one-line diagram assistance without sealed drawings. Engineering input for architects, design-build teams, or EOR overflow capacity.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "Electrical Design Consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#marina`,
              name: "Marina & Waterfront Electrical Consulting",
              url: `${base}/services#marina`,
              provider: { "@id": `${base}/#organization` },
              description:
                "Shore power system review, dock electrical layout, corrosion and grounding considerations, and NEC Article 555 code review for marinas and waterfront installations.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "Marina Electrical Consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/services#energy-code`,
              name: "Energy & Code Compliance Consulting",
              url: `${base}/services#energy-code`,
              provider: { "@id": `${base}/#organization` },
              description:
                "Lighting energy compliance (IECC / FBC-Energy), load optimization, retrofit recommendations, and efficiency reviews for existing buildings.",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "AdministrativeArea", name: "Southeast United States" },
              ],
              serviceType: "Energy Code Compliance Consulting",
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
        name: "Electrical engineering consulting and plan review",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${base}/#professional-service`,
      name: `${SITE_NAME}: Electrical engineering consulting`,
      url: `${base}/services`,
      provider: { "@id": `${base}/#organization` },
      areaServed: [
        { "@type": "State", name: "Florida" },
        { "@type": "AdministrativeArea", name: "Southeast United States" },
        { "@type": "Country", name: "United States" },
      ],
      description:
        "CIRCUITA provides electrical plan review, constructability and bid-risk review, lighting design and photometrics, EV charging consulting, electrical design support, marina electrical, and energy-code consulting for architects, developers, and contractors.",
      serviceType: [
        "Electrical plan review",
        "Constructability and bid-risk review",
        "Lighting design and photometrics",
        "EV charging infrastructure consulting",
        "Electrical design support",
        "Marina and waterfront electrical consulting",
        "Energy and code compliance consulting",
      ],
      priceRange: "$$",
      knowsAbout: [
        "National Electrical Code",
        "NEC Article 625 (EV charging)",
        "NEC Article 555 (marinas)",
        "IECC Energy Code",
        "Florida Building Code Energy",
        "IES photometric analysis",
        "Lighting power density",
        "Panel schedule design",
        "Load calculations",
        "Grounding and bonding",
        "Shore power systems",
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
