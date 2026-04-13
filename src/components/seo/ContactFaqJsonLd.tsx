const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const base = siteUrl.replace(/\/$/, "");

const contactFaqs = [
  {
    question: "How do I request an electrical engineering consultation?",
    answer:
      "Fill out the contact form on the CIRCUITA website with your project location, scope (plan review, lighting, EV, marina, etc.), milestones, and what you need reviewed. CIRCUITA will respond with a suggested scope, timeline, and next steps.",
  },
  {
    question: "What information should I include in my consultation request?",
    answer:
      "Include: (1) project location and building type, (2) which service fits (plan review, lighting, EV, marina, design support, energy code, or constructability), (3) design milestones and construction dates, (4) drawings or packages you want reviewed, and (5) specific risks you want addressed early.",
  },
  {
    question: "How quickly does CIRCUITA respond to consultation requests?",
    answer:
      "CIRCUITA typically responds within one business day with a proposed scope and next steps. Turnaround for a first review pass is usually 2 to 5 business days once scope is agreed.",
  },
  {
    question: "Is there a minimum project size for CIRCUITA engagements?",
    answer:
      "No strict minimum. CIRCUITA scopes engagements to fit the project, from a quick electrical checkpoint on a single feeder or fixture question to a full review pass on a multi-story package.",
  },
];

const faqGraph = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
  url: `${base}/contact`,
};

export function ContactFaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqGraph) }}
    />
  );
}
