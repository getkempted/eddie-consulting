const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const base = siteUrl.replace(/\/$/, "");

const aboutFaqs = [
  {
    question: "What is CIRCUITA?",
    answer:
      "CIRCUITA is an electrical engineering consulting practice that provides plan review, constructability and bid-risk review, lighting design, EV charging consulting, electrical design support, marina electrical, and energy-code consulting for architects, developers, and contractors in Florida and the Southeast United States.",
  },
  {
    question: "Who does CIRCUITA work with?",
    answer:
      "CIRCUITA works with architects, developers, general contractors, and construction managers on commercial and multifamily projects. I collaborate alongside your electrical engineer of record, not as a replacement.",
  },
  {
    question: "Where does CIRCUITA operate?",
    answer:
      "CIRCUITA serves projects throughout Florida (including Miami-Dade, Broward, Hillsborough, and Orange counties) and the broader Southeast United States. Remote consulting is available nationwide.",
  },
  {
    question: "What makes CIRCUITA different from other electrical engineering firms?",
    answer:
      "CIRCUITA focuses on consulting (plan review, constructability, lighting, EV, marina, and targeted electrical guidance) rather than full-service electrical EOR work. Deliverables are written clearly enough for your team to forward directly to contractors, building departments, and other consultants.",
  },
  {
    question: "Does CIRCUITA produce sealed drawings?",
    answer:
      "No. CIRCUITA provides written recommendations, review comments, photometric studies, and design support, not sealed construction documents. If your project requires stamped drawings, I can discuss scope or refer you to a full-service electrical engineering firm.",
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
