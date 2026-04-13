const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const base = siteUrl.replace(/\/$/, "");

const homeFaqs = [
  {
    question: "When do you need a structural engineer on a construction project?",
    answer:
      "You need a structural engineer whenever the project involves load-bearing modifications, new construction requiring permit, renovation of existing structures, or when the building department requires structural documentation. Early engagement prevents costly redesigns.",
  },
  {
    question: "What is structural plan review?",
    answer:
      "Structural plan review is an independent check of structural drawings and details before permit submission. It verifies load paths, code compliance, coordination with architecture and MEP, and constructability, so problems surface while changes are still inexpensive.",
  },
  {
    question: "Does STRUCTURA serve clients in Florida and the Southeast?",
    answer:
      "Yes. STRUCTURA regularly supports architects, developers, and contractors on projects in Florida and the broader Southeast United States, with deliverables aligned to local building code intent and jurisdictional expectations.",
  },
  {
    question: "What services does STRUCTURA offer?",
    answer:
      "STRUCTURA offers three structural engineering services: (1) Structural plan review, an independent pass on drawings before permit; (2) Constructability feedback, practical guidance on sequencing, tolerances, and details that drive cost; and (3) Engineering consulting, targeted support for complex structural conditions with written deliverables.",
  },
  {
    question: "How much does structural engineering consulting cost?",
    answer:
      "Fees vary by scope, package size, and turnaround needs. Plan reviews for a straightforward commercial project typically start in the low thousands. STRUCTURA scopes every engagement clearly up front so there are no surprises.",
  },
];

const faqGraph = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
  url: `${base}/`,
};

export function HomeFaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqGraph) }}
    />
  );
}
