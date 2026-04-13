/** FAQ content organized by topic clusters for topical authority + FAQPage JSON-LD.
 *  Each cluster targets a keyword group and links to relevant service/pillar pages. */

export type FaqItem = {
  question: string;
  answer: string;
  /** Which cluster this FAQ belongs to (used for filtering on different pages). */
  cluster:
    | "plan-review"
    | "constructability"
    | "lighting"
    | "ev-charging"
    | "design-support"
    | "marina"
    | "energy-code"
    | "process"
    | "local"
    | "general";
};

export const servicesFaq: readonly FaqItem[] = [
  // ── Electrical Plan Review & QA/QC Cluster ───────────────────────
  {
    cluster: "plan-review",
    question: "What is electrical plan review, and when should you engage a consultant?",
    answer:
      "Electrical plan review is a structured pass over power, lighting, and one-line drawings to verify NEC compliance, panel schedule accuracy, load calculations, and coordination with mechanical and architectural trades. Engage before permit submission or major buyout milestones when corrections are still inexpensive.",
  },
  {
    cluster: "plan-review",
    question: "What do you check during an electrical plan review?",
    answer:
      "I check panel schedules and connected loads against service capacity, feeder and branch-circuit sizing, grounding and bonding, AFCI/GFCI coverage where required, one-line coherence, short-circuit assumptions, lighting control zones, and coordination with mechanical and architectural drawings. The goal is a package that clears permit and builds cleanly.",
  },
  {
    cluster: "plan-review",
    question: "What are common reasons electrical plans get rejected?",
    answer:
      "The most frequent triggers are incomplete or inconsistent panel schedules, undersized feeders, missing AFCI/GFCI coverage, ambiguous grounding and bonding details, one-lines that disagree with the panel schedules, and missing special-occupancy provisions (marinas, healthcare, EV). Many are caught in a first-pass review before the building department ever sees them.",
  },
  {
    cluster: "plan-review",
    question: "How is an electrical peer review different from plan review?",
    answer:
      "Peer review is typically an independent evaluation of the engineer of record's design by another licensed electrical engineer. Plan review focuses on drawing readiness: NEC compliance, panel and feeder accuracy, coordination gaps, and constructability, rather than recalculating the full design.",
  },
  {
    cluster: "plan-review",
    question: "What should you send for a useful first-pass electrical review?",
    answer:
      "Issue drawings (power, lighting, one-line), panel schedules, load calculations, specifications, relevant cut sheets, milestone dates, and a short list of risks you want off the schedule (coordination gaps, service sizing uncertainty, jurisdictional sensitivities). More context, tighter feedback.",
  },

  // ── Constructability & Bid Risk Cluster ──────────────────────────
  {
    cluster: "constructability",
    question: "What is an electrical constructability and bid-risk review?",
    answer:
      "A constructability review evaluates whether the electrical design can be built efficiently: routing conflicts, tight ceiling spaces, accessible panel locations, gear lead times, procurement risk, and details that drive RFIs and change orders. Bid-risk review flags design gaps and ambiguity that contractors typically price as risk.",
  },
  {
    cluster: "constructability",
    question: "When should a constructability review happen on an electrical package?",
    answer:
      "Ideally at the end of design development or early construction documents, before buyout and procurement. Reviews at this stage have the most impact on cost because the design is mature enough to evaluate but still flexible enough to adjust without triggering a full re-issue.",
  },
  {
    cluster: "constructability",
    question: "How does electrical constructability feedback reduce change orders?",
    answer:
      "By flagging undersized pull boxes, tight conduit routing, gear that won't fit the electrical room, long-lead equipment risk, and coordination gaps with mechanical and architectural trades before procurement, a constructability pass prevents most of the field improvisation that drives RFIs, change orders, and schedule slippage.",
  },

  // ── Lighting Design & Photometrics Cluster ───────────────────────
  {
    cluster: "lighting",
    question: "What does a lighting design engagement deliver?",
    answer:
      "Depending on scope: interior or exterior fixture layouts, fixture selection, IES-based photometric studies, lighting power density (LPD) calculations, control narratives, and submittal review. Deliverables are documented clearly so the design team, GC, and electrical EOR can implement without guesswork.",
  },
  {
    cluster: "lighting",
    question: "What is a photometric study and when do you need one?",
    answer:
      "A photometric study uses IES files from selected fixtures to model illuminance (footcandle) levels across a space or site. It's used to validate interior illumination targets, exterior security and site lighting, dark-sky compliance, parking-lot uniformity, and any jurisdictional lighting requirements.",
  },
  {
    cluster: "lighting",
    question: "Can you help with lighting upgrades or retrofits?",
    answer:
      "Yes. Retrofit engagements cover LED replacement strategies, controls upgrades for energy code compliance (IECC/FBC-Energy), fixture selection that balances energy, aesthetics, and maintenance, and photometric validation that the upgrade meets target illumination levels.",
  },

  // ── EV Charging Infrastructure Cluster ───────────────────────────
  {
    cluster: "ev-charging",
    question: "What's involved in planning EV charging infrastructure?",
    answer:
      "Site EVSE layout, load analysis against existing service capacity, panel and distribution upgrade planning, conduit and feeder routing, NEC Article 625 compliance, and utility coordination guidance. Early planning is what separates projects that energize on schedule from projects that hit service-capacity surprises at final inspection.",
  },
  {
    cluster: "ev-charging",
    question: "How do you size electrical service for EV chargers?",
    answer:
      "Start with an existing-service load study, apply NEC 625 demand factors for the EVSE population, and compare to the service rating with realistic future-growth headroom. If the existing service is tight, I can evaluate load-management options, a distribution-level upgrade, or a utility service upgrade with coordination guidance.",
  },

  // ── Electrical Design Support (Non-EOR) Cluster ──────────────────
  {
    cluster: "design-support",
    question: "How is electrical design support different from full EOR work?",
    answer:
      "Design support provides conceptual layouts, panel schedules, feeder sizing, and one-line diagram assistance without sealed drawings. It's used by architects and design-build contractors who need engineering input before bringing on an EOR, or by an EOR who wants supplementary capacity on a specific package.",
  },
  {
    cluster: "design-support",
    question: "Can you work alongside our existing engineer of record?",
    answer:
      "Yes. That is a common arrangement. I provide targeted review, options analysis, or design assistance while your EOR retains design responsibility and the seal. I coordinate through your established communication channels and respect the EOR relationship.",
  },

  // ── Marina & Waterfront Electrical Cluster ───────────────────────
  {
    cluster: "marina",
    question: "What's specific about marina and waterfront electrical design?",
    answer:
      "NEC Article 555 drives the requirements: equipment leakage current protection, ground-fault protection, elevated equipment heights, corrosion-resistant materials, dock receptacle layout, and shore-power sizing. Harsh-environment considerations for grounding, bonding, and equipment ratings matter as much as the code itself.",
  },
  {
    cluster: "marina",
    question: "Can you review an existing marina electrical system?",
    answer:
      "Yes. Reviews cover shore-power capacity and sizing, GFCI/ELCI protection, dock receptacle configurations, grounding and bonding, signage, and NEC Article 555 compliance. For upgrade or retrofit work, I document what's in place, what doesn't meet current code, and a prioritized path to compliance.",
  },

  // ── Energy & Code Compliance Cluster ─────────────────────────────
  {
    cluster: "energy-code",
    question: "Do you handle lighting energy code compliance (IECC / FBC-Energy)?",
    answer:
      "Yes. Lighting power density calculations, control requirements, automatic shutoff and daylight response, and exterior lighting allowances — documented in a format jurisdictional reviewers accept. For retrofit projects, I scope the minimum path to compliance rather than forcing a full re-design.",
  },
  {
    cluster: "energy-code",
    question: "What does an energy-efficiency review look like for an existing building?",
    answer:
      "A walk-through plus drawing review to identify lighting, control, and distribution opportunities: LED retrofits, occupancy and daylight controls, panel rebalancing, and any low-hanging load reductions. Output is a prioritized list with rough scope and code implications, not a full energy model.",
  },

  // ── Process and Pricing Cluster ──────────────────────────────────
  {
    cluster: "process",
    question: "How quickly can you turn around a review?",
    answer:
      "Turnaround depends on package size and scope, but many first passes fall in a multi-day window once scope is agreed. I align deliverables to your submission or procurement dates up front.",
  },
  {
    cluster: "process",
    question: "How much does electrical engineering consulting cost?",
    answer:
      "Fees vary by scope, package size, and turnaround needs. Plan reviews for a straightforward commercial project typically start in the low thousands. I scope every engagement clearly up front so there are no surprises. Send your project details for a specific proposal.",
  },
  {
    cluster: "process",
    question: "What does your engagement process look like from start to finish?",
    answer:
      "I start with a brief consultation to define scope, schedule, and deliverables. Then I perform a focused review or design pass. You receive prioritized, written comments or documented layouts your team can fold into the next drawing issue. Follow-ups are available as the design evolves.",
  },
  {
    cluster: "process",
    question: "What deliverables will you receive?",
    answer:
      "You receive prioritized written comments (for review work) or documented layouts, panel schedules, and one-line diagrams (for design support), formatted so your team can forward them directly to contractors, building departments, or other consultants. Lighting engagements include IES photometric output and LPD calculations.",
  },

  // ── Local / Florida Cluster ──────────────────────────────────────
  {
    cluster: "local",
    question: "Do you work with clients in Florida and across the Southeast?",
    answer:
      "Yes. I regularly support architects, developers, and contractors on projects in Florida and the broader Southeast, with deliverables aligned to the adopted NEC cycle, Florida Building Code Energy, and typical jurisdictional expectations.",
  },
  {
    cluster: "local",
    question: "Are you familiar with Florida's electrical code landscape?",
    answer:
      "Yes. Florida adopts the NEC with state-specific amendments through the Florida Building Code, and FBC-Energy governs lighting energy compliance. Jurisdictions like Miami-Dade, Broward, Hillsborough, and Orange each have their own documentation expectations — I work within those daily.",
  },

  // ── General / Decision-Support Cluster ───────────────────────────
  {
    cluster: "general",
    question: "When do you need an electrical consultant on a project?",
    answer:
      "You need an electrical consultant when the project involves a service upgrade, significant lighting or controls work, EV charging infrastructure, marina or waterfront electrical, a jurisdiction-sensitive permit submission, or any situation where a design-team or EOR would benefit from a second set of experienced electrical eyes before issuing drawings.",
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
