const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const base = siteUrl.replace(/\/$/, "");

const homeFaqs = [
  {
    question: "When do you need an electrical engineer on a construction project?",
    answer:
      "You need an electrical engineer whenever the project involves a service upgrade, significant lighting or controls work, EV charging infrastructure, marina or waterfront electrical, or any permit submission where the building department expects stamped or well-documented electrical design. Early engagement prevents costly redesigns.",
  },
  {
    question: "What is electrical plan review?",
    answer:
      "Electrical plan review is an independent check of power, lighting, and one-line drawings before permit submission. It verifies NEC compliance, panel and feeder sizing, grounding, coordination with mechanical and architectural trades, and constructability, so issues surface while changes are still inexpensive.",
  },
  {
    question: "Does CIRCUITA serve clients in Florida and the Southeast?",
    answer:
      "Yes. CIRCUITA regularly supports architects, developers, and contractors on projects in Florida and the broader Southeast United States, with deliverables aligned to the adopted NEC cycle, Florida Building Code Energy, and jurisdictional expectations.",
  },
  {
    question: "What services does CIRCUITA offer?",
    answer:
      "CIRCUITA offers seven electrical engineering services: (1) Electrical plan review and QA/QC; (2) Constructability and bid-risk review; (3) Lighting design and photometrics; (4) EV charging infrastructure consulting; (5) Electrical design support (non-EOR); (6) Marina and waterfront electrical consulting; (7) Energy and code compliance consulting.",
  },
  {
    question: "How much does electrical engineering consulting cost?",
    answer:
      "Fees vary by scope, package size, and turnaround needs. Plan reviews for a straightforward commercial project typically start in the low thousands. CIRCUITA scopes every engagement clearly up front so there are no surprises.",
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
