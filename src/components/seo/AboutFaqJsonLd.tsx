const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const base = siteUrl.replace(/\/$/, "");

const aboutFaqs = [
  {
    question: "What is STRUCTURA?",
    answer:
      "STRUCTURA is a structural engineering consulting practice that provides plan review, constructability feedback, and engineering consulting for architects, developers, and contractors in Florida and the Southeast United States.",
  },
  {
    question: "Who does STRUCTURA work with?",
    answer:
      "STRUCTURA works with architects, developers, general contractors, and construction managers on commercial and multifamily projects. I collaborate alongside your engineer of record, not as a replacement.",
  },
  {
    question: "Where does STRUCTURA operate?",
    answer:
      "STRUCTURA serves projects throughout Florida (including Miami-Dade HVHZ and Broward County) and the broader Southeast United States. Remote consulting is available nationwide.",
  },
  {
    question: "What makes STRUCTURA different from other structural engineering firms?",
    answer:
      "STRUCTURA focuses on consulting (plan review, constructability, and targeted structural guidance) rather than full structural design. Deliverables are written clearly enough for your team to forward directly to contractors, building departments, and other consultants.",
  },
  {
    question: "Does STRUCTURA produce sealed drawings?",
    answer:
      "No. STRUCTURA provides written recommendations, review comments, and options analysis, not sealed construction documents. If your project requires stamped drawings, I can discuss scope or refer you to a full-service structural engineering firm.",
  },
];

const faqGraph = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aboutFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
  url: `${base}/about`,
};

export function AboutFaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqGraph) }}
    />
  );
}
