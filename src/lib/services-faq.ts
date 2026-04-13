/** FAQ content organized by topic clusters for topical authority + FAQPage JSON-LD.
 *  Each cluster targets a keyword group and links to relevant service/pillar pages. */

export type FaqItem = {
  question: string;
  answer: string;
  /** Which cluster this FAQ belongs to (used for filtering on different pages). */
  cluster: "plan-review" | "constructability" | "consulting" | "process" | "local" | "general";
};

export const servicesFaq: readonly FaqItem[] = [
  // ── Plan Review Cluster ──────────────────────────────────────────
  {
    cluster: "plan-review",
    question: "What is structural plan review, and when should we engage a consultant?",
    answer:
      "Plan review is a structured pass over structural drawings and details to verify load paths, coordination with architecture and MEP, and constructability before procurement and field work. Engage early before permit submission or major buyout milestones when changes are still inexpensive.",
  },
  {
    cluster: "plan-review",
    question: "What do you look for during a structural plan review?",
    answer:
      "I check gravity and lateral load path continuity, connection details for constructability, coordination conflicts with architectural and MEP trades, code compliance for the jurisdiction, and anything that could trigger field rework or change orders downstream.",
  },
  {
    cluster: "plan-review",
    question: "What are common reasons structural plans get rejected?",
    answer:
      "The most frequent rejection triggers are incomplete load path documentation, missing or ambiguous connection details, wind and seismic load calculation errors, inadequate foundation design for local soil conditions, and noncompliance with the Florida Building Code or local amendments.",
  },
  {
    cluster: "plan-review",
    question: "How is a structural peer review different from plan review?",
    answer:
      "Peer review is typically an independent evaluation of the engineer of record's design by a separate licensed engineer. Plan review focuses on drawing readiness: constructability, coordination gaps, and code alignment, rather than recalculating the entire design from scratch.",
  },
  {
    cluster: "plan-review",
    question: "What should we send for a useful first pass?",
    answer:
      "Issue drawings, relevant specifications, milestone dates, and a short list of risks you want removed from the schedule (coordination gaps, connection clarity, staging constraints). The more context, the tighter the review.",
  },

  // ── Constructability Cluster ─────────────────────────────────────
  {
    cluster: "constructability",
    question: "What is a constructability review and why does it matter?",
    answer:
      "A constructability review evaluates whether the structural design can be built efficiently in the field. It identifies sequencing issues, material procurement risks, tolerance problems, and details that drive schedule and cost, catching problems before they become change orders.",
  },
  {
    cluster: "constructability",
    question: "When should a constructability review happen in the project timeline?",
    answer:
      "Ideally at the end of design development or early construction documents, before major buyout decisions and procurement. A review at this stage has maximum impact on cost and schedule because the design is mature enough to evaluate but flexible enough to adjust.",
  },
  {
    cluster: "constructability",
    question: "How does constructability feedback save money on construction projects?",
    answer:
      "By identifying sequencing conflicts, overly complex details, and material substitution opportunities before procurement, constructability feedback prevents field improvisation, reduces change orders, and keeps the schedule on track. Projects with early constructability input typically see fewer RFIs and less rework.",
  },

  // ── Consulting Cluster ───────────────────────────────────────────
  {
    cluster: "consulting",
    question: "How is structural consulting different from full structural design?",
    answer:
      "Consulting focuses on targeted reviews, options, and written guidance, often alongside your engineer of record, while full design typically includes complete calculation packages and sealed drawings for permit. I scope engagements to the decisions you need, not duplicate EOR work.",
  },
  {
    cluster: "consulting",
    question: "Can you work alongside our existing engineer of record?",
    answer:
      "Yes. That is a common arrangement. I provide targeted review, second opinions, or constructability input while your EOR retains design responsibility. I coordinate through your established communication channels and respect the EOR relationship.",
  },
  {
    cluster: "consulting",
    question: "What types of projects benefit most from structural consulting?",
    answer:
      "Adaptive reuse and renovation projects, buildings with complex transfers or unusual framing, high-rise construction in high-wind zones, and any project where the design team wants a second set of structural eyes before committing to costly details.",
  },
  {
    cluster: "consulting",
    question: "Do you provide sealed drawings or stamped calculations?",
    answer:
      "My consulting engagements produce written recommendations, review comments, and options analysis, not sealed documents. If your project requires sealed structural drawings, I can discuss scope or refer you to a full-service structural engineering firm.",
  },

  // ── Process and Pricing Cluster ──────────────────────────────────
  {
    cluster: "process",
    question: "How quickly can we get comments back?",
    answer:
      "Turnaround depends on package size and scope, but many first passes fall in a multi-day window once scope is agreed. I align deliverables to your submission or procurement dates up front.",
  },
  {
    cluster: "process",
    question: "How much does structural engineering consulting cost?",
    answer:
      "Fees vary by scope, package size, and turnaround needs. Plan reviews for a straightforward commercial project typically start in the low thousands. I scope every engagement clearly up front so there are no surprises. Send your project details for a specific proposal.",
  },
  {
    cluster: "process",
    question: "What does your engagement process look like from start to finish?",
    answer:
      "I start with a brief consultation to define scope, schedule, and deliverables. Then I perform a focused review pass on structure, code intent, and coordination. You receive prioritized, written comments your team can fold into the next drawing issue. Follow-ups are available as the design evolves.",
  },
  {
    cluster: "process",
    question: "What deliverables will we receive?",
    answer:
      "You receive prioritized written comments, typically organized by severity and trade. Comments are formatted so your team can forward them directly to the relevant parties. For consulting engagements, you also get options summaries with pros, cons, and clear assumptions.",
  },

  // ── Local / Florida Cluster ──────────────────────────────────────
  {
    cluster: "local",
    question: "Do you work with clients in Florida and across the Southeast?",
    answer:
      "Yes. I regularly support architects, developers, and contractors on projects in Florida and the broader Southeast, with deliverables aligned to local building code intent and typical jurisdictional expectations.",
  },
  {
    cluster: "local",
    question: "Are you familiar with Florida Building Code requirements for structural design?",
    answer:
      "Absolutely. I work within FBC requirements daily, including wind load provisions, High Velocity Hurricane Zone (HVHZ) requirements for Miami-Dade and Broward counties, hurricane protection standards, and the specific documentation expectations of Florida building departments.",
  },
  {
    cluster: "local",
    question: "Do you handle projects in Miami-Dade's High Velocity Hurricane Zone?",
    answer:
      "Yes. HVHZ projects have additional structural requirements for wind resistance, impact protection, and documentation that go beyond standard FBC. I am experienced with the specific requirements and review expectations for Miami-Dade and Broward County projects.",
  },
  {
    cluster: "local",
    question: "Can you help with Florida's milestone inspection and recertification requirements?",
    answer:
      "Yes. Following SB 4-D, condominiums and cooperative buildings 30 years old (25 years in coastal areas) require milestone structural inspections. I can support clients preparing for or responding to these inspection requirements with targeted structural assessment and guidance.",
  },

  // ── General / Decision-Support Cluster ───────────────────────────
  {
    cluster: "general",
    question: "When do you need a structural engineer on a construction project?",
    answer:
      "You need a structural engineer whenever the project involves load-bearing modifications, new construction requiring permit, renovation of existing structures, unusual framing or transfer conditions, or when the building department requires structural documentation. Early engagement prevents costly redesigns.",
  },
  {
    cluster: "general",
    question: "What is the difference between a structural engineer and an architect?",
    answer:
      "Architects design the overall building layout, aesthetics, and functionality. Structural engineers design the systems that hold the building up: foundations, columns, beams, lateral bracing, and connections. On most projects, both work together: the architect defines the space and the structural engineer makes it stand safely.",
  },
  {
    cluster: "general",
    question: "How does structural engineering consulting fit into the construction timeline?",
    answer:
      "Structural consulting is most valuable during design development and construction document phases, before permit submission and procurement. Engaging a structural consultant early gives your team time to address issues when changes are least expensive and least disruptive to the schedule.",
  },
] as const;

/** Get FAQ items filtered by one or more clusters. */
export function getFaqByCluster(...clusters: FaqItem["cluster"][]): FaqItem[] {
  return servicesFaq.filter((item) => clusters.includes(item.cluster));
}

/** Get all FAQ items for the main services page. */
export function getAllFaq(): readonly FaqItem[] {
  return servicesFaq;
}
