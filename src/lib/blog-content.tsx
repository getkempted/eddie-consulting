/** Article content components keyed by slug.
 *  Each function renders the body of a blog post using semantic HTML
 *  styled by the .prose-structura class in globals.css. */

import Link from "next/link";

function PlanReviewMistakes() {
  return (
    <>
      <h2>Key takeaways</h2>
      <ul>
        <li>The 10 most common structural plan review mistakes all delay permitting by triggering revision cycles.</li>
        <li>Most rejections stem from incomplete load paths, missing connection details, wind load errors, and code misalignment.</li>
        <li>A pre-submission structural plan review by an independent consultant catches these errors before the building department sees them.</li>
        <li>Fixing mistakes before submission is always faster and cheaper than responding to plan review comments.</li>
      </ul>

      <h2>Why plan review mistakes delay permitting</h2>
      <p>
        Structural plan review is the checkpoint between design and construction. When drawings reach a
        reviewer, whether at a building department or through a third-party consultant, errors and omissions
        trigger comments that must be resolved before a permit is issued. Each revision cycle adds days or
        weeks to the schedule.
      </p>
      <p>
        The mistakes below are the ones we see most often across commercial and multifamily projects in
        Florida and the Southeast. Fixing them before submission is the fastest way to reduce review cycles
        and get to permit.
      </p>

      <h2>1. Incomplete load path documentation</h2>
      <p>
        Reviewers trace loads from roof to foundation. If the drawings skip a transfer level or leave a
        connection undefined, the review stops until the path is clarified. Gravity and lateral load paths
        both need to be continuous and explicit on the structural sheets.
      </p>

      <h2>2. Missing or vague connection details</h2>
      <p>
        Typical details that say "contractor to verify" or "connection per manufacturer" almost always
        generate comments. Reviewers need to see specific weld sizes, bolt patterns, embed plate
        dimensions, and anchorage calculations, especially for lateral connections.
      </p>

      <h2>3. Wind load calculation errors</h2>
      <p>
        In Florida, wind loads drive much of the structural design. Common errors include using the wrong
        wind speed map, misclassifying the exposure category, confusing MWFRS and C&amp;C loads, and
        missing HVHZ requirements in Miami-Dade and Broward counties. These trigger immediate rejection.
      </p>

      <h2>4. Foundation design mismatches</h2>
      <p>
        When foundation design does not align with the geotechnical report (wrong bearing capacity
        assumptions, missing pile lengths, or ignoring high water table conditions), the reviewer flags it.
        Florida's karst geology and coastal conditions make this especially common.
      </p>

      <h2>5. Inadequate special inspection notes</h2>
      <p>
        Florida Building Code requires special inspections for structural elements including high-strength
        concrete, post-tensioning, structural steel welding, and deep foundations. Missing or incomplete
        special inspection notes on the drawings delay permit issuance.
      </p>

      <h2>6. Code edition misalignment</h2>
      <p>
        Referencing the wrong edition of the Florida Building Code, ACI 318, or AISC 360 is a common
        rejection trigger. Always confirm which code edition the jurisdiction enforces before finalizing
        the structural package.
      </p>

      <h2>7. Coordination conflicts with MEP</h2>
      <p>
        Large penetrations through structural members, ductwork routing through beams, and equipment loads
        that were not accounted for in the structural design all generate comments. Reviewers check
        coordination, and unresolved conflicts slow the process.
      </p>

      <h2>8. Missing drift and deflection checks</h2>
      <p>
        Lateral drift limits and member deflection checks are required for code compliance. When these
        calculations are missing from the submission, the reviewer cannot verify serviceability, and the
        package is returned for revision.
      </p>

      <h2>9. Incomplete diaphragm design</h2>
      <p>
        Floor and roof diaphragms must be designed to transfer lateral loads to the vertical lateral force
        resisting system. Missing collector and chord designs, unclear diaphragm boundaries, and
        unaddressed re-entrant corners are frequent triggers.
      </p>

      <h2>10. Inconsistent drawing sets</h2>
      <p>
        When structural sheets conflict with architectural or MEP sheets (different column grids, mismatched
        floor elevations, inconsistent member sizes), the reviewer flags each discrepancy. A coordination
        check before submission prevents most of these.
      </p>

      <h2>How to avoid these mistakes</h2>
      <p>
        The most effective prevention is a{" "}
        <Link href="/services#plan-review">structural plan review</Link> before permit submission. A second
        set of experienced eyes catches the errors that the design team has become too close to see.
      </p>
      <p>
        At STRUCTURA, we review drawings the way building departments and contractors do, checking load
        paths, code compliance, coordination, and constructability. The result is a cleaner submission and
        fewer revision cycles.
      </p>
      <p>
        <Link href="/contact">Request a consultation</Link> to discuss your next package.
      </p>
    </>
  );
}

function ConstructabilityChangOrders() {
  return (
    <>
      <h2>Key takeaways</h2>
      <ul>
        <li>A constructability review evaluates whether a structural design can be built efficiently in the field.</li>
        <li>Change orders typically add 5-10% to total project cost. Most fall into predictable categories that a constructability review can catch.</li>
        <li>The optimal time for a constructability review is at the end of design development or early construction documents.</li>
        <li>A constructability review that prevents even one significant field modification pays for itself.</li>
      </ul>

      <h2>What are change orders, and why do they happen?</h2>
      <p>
        Change orders are modifications to the original construction contract, usually triggered by design
        errors, unforeseen conditions, or coordination failures. Industry data consistently shows that
        change orders add 5 to 10% to total project cost on average, with individual changes ranging from
        minor adjustments to six-figure impacts.
      </p>
      <p>
        Most change orders fall into predictable categories: incomplete details, sequencing conflicts,
        material substitutions, and coordination failures between trades. A{" "}
        <Link href="/services#constructability">constructability review</Link> targets exactly these categories
        before construction begins.
      </p>

      <h2>How a constructability review prevents field problems</h2>
      <p>
        A constructability review evaluates whether the structural design can be built efficiently in the
        field. It is not a code compliance check. It is a practical assessment of how the design translates
        to actual construction. The review examines sequencing, access, tolerances, connection complexity,
        and material availability.
      </p>

      <h3>Sequencing conflicts</h3>
      <p>
        Steel erection sequences that conflict with concrete pour schedules. Foundation work that cannot
        proceed until adjacent excavation is complete. Precast delivery that does not align with crane
        availability. These are the sequencing issues that a constructability review identifies before they
        become field delays.
      </p>

      <h3>Connection complexity</h3>
      <p>
        Connections that look clean on paper but are unreachable in the field: bolts behind other members,
        welds in confined spaces, reinforcement congestion at beam-column joints. A constructability review
        flags these before fabrication and reinforcement placement.
      </p>

      <h3>Material and procurement risks</h3>
      <p>
        Specified materials with long lead times. Uncommon member sizes that require special rolling.
        Concrete mix designs that are difficult to place in high-heat conditions. The review identifies
        procurement risks early enough to coordinate alternatives.
      </p>

      <h2>Calculating the ROI</h2>
      <p>
        A constructability review for a mid-sized commercial project typically costs a fraction of a
        single change order. If the review prevents even one significant field modification, it has paid
        for itself. When it prevents three or four, which is common, the return is substantial.
      </p>
      <p>
        Beyond direct cost savings, constructability reviews reduce RFIs (requests for information) during
        construction. Fewer RFIs mean less engineering response time, fewer field delays, and a smoother
        construction schedule.
      </p>

      <h2>When to schedule a constructability review</h2>
      <p>
        The optimal window is at the end of design development or early construction documents, after the
        structural system is defined but before procurement decisions are locked. At this stage, the design
        is mature enough to evaluate and flexible enough to adjust.
      </p>
      <p>
        Reviews done later in the process still have value, but the cost of changes increases as
        construction approaches. Early review has the highest impact on both cost and schedule.
      </p>
      <p>
        <Link href="/contact">Request a consultation</Link> to discuss constructability review
        for your project.
      </p>
    </>
  );
}

function WhenToHireConsultant() {
  return (
    <>
      <h2>Key takeaways</h2>
      <ul>
        <li>Hire a structural engineering consultant when your project has complex structural conditions, needs a pre-permit review, requires a second opinion, or exceeds your team&apos;s capacity.</li>
        <li>A structural consultant provides targeted review and written recommendations, not sealed drawings. The engineer of record retains design responsibility.</li>
        <li>The more specific the scope, the tighter the deliverable and the faster the turnaround.</li>
        <li>Common engagement types: pre-permit plan review, adaptive reuse consulting, design dispute resolution, and constructability input.</li>
      </ul>

      <h2>When does a project need a structural consultant?</h2>
      <p>
        Not every project needs a structural consultant beyond the engineer of record. But certain
        scenarios consistently benefit from an independent structural perspective: targeted review, a
        second opinion, or specialized expertise that supplements the design team.
      </p>

      <h3>Complex or unusual structural conditions</h3>
      <p>
        Adaptive reuse projects, buildings with long-span transfers, mixed structural systems, or
        performance-based design challenges all benefit from additional structural expertise. A consultant
        brings focused experience on specific problem types without replacing the EOR.
      </p>

      <h3>Pre-permit review</h3>
      <p>
        When the design team wants confidence that the structural package will pass plan review without
        major comments, a third-party{" "}
        <Link href="/services#plan-review">structural plan review</Link> catches errors the team may have
        become too close to see.
      </p>

      <h3>Design disputes or second opinions</h3>
      <p>
        When the architect, contractor, or owner disagrees with a structural approach, an independent
        consultant can evaluate the options objectively and provide a written assessment that helps the
        team move forward.
      </p>

      <h3>Staff gaps or capacity constraints</h3>
      <p>
        When the primary structural firm is at capacity or lacks experience with a specific project type,
        a consultant can supplement the team for a defined scope without the overhead of hiring.
      </p>

      <h2>What a structural consultant delivers</h2>
      <p>
        Consulting engagements produce written recommendations, review comments, options analyses, and
        coordination notes, not sealed drawings. The consultant works alongside the engineer of record, who
        retains design responsibility and produces the stamped documents.
      </p>
      <p>
        Deliverables are formatted so the project team can forward them directly to relevant parties.
        Clarity and usability are part of the scope.
      </p>

      <h2>How to scope an engagement</h2>
      <p>
        Start with the decisions you need to make, not a generic request for "structural consulting." The
        more specific the scope, the tighter the deliverable and the faster the turnaround.
      </p>
      <p>
        At STRUCTURA, we scope every engagement to the decisions that matter for your project and
        timeline. <Link href="/contact">Request a consultation</Link> with your project details
        and we will propose a scope that fits.
      </p>
    </>
  );
}

function FloridaBuildingPermit() {
  return (
    <>
      <h2>Key takeaways</h2>
      <ul>
        <li>The Florida building permit process for structural scope follows a predictable pattern: submit, review, respond to comments, receive permit.</li>
        <li>Required structural documents include: structural drawings, calculations, geotechnical report, special inspection plan, wind load calculations, and product approvals (in HVHZ areas).</li>
        <li>Common rejection triggers: incomplete wind load documentation, load path gaps, missing special inspection notes, and code edition errors.</li>
        <li>Miami-Dade and Broward County (HVHZ) have additional requirements and longer review timelines.</li>
        <li>A pre-submission plan review by an independent consultant reduces revision cycles and protects the permit timeline.</li>
      </ul>

      <h2>How the Florida structural permit process works</h2>
      <p>
        The Florida building permit process for structural scope follows a predictable pattern: submit a
        complete structural package, a plans examiner reviews it for code compliance, comments are issued,
        the design team responds, and the permit is granted once all comments are resolved.
      </p>
      <p>
        The process varies by jurisdiction. Miami-Dade, Broward, and other counties have different
        requirements and timelines, but the structural requirements share a common foundation in the
        Florida Building Code.
      </p>

      <h2>Required structural documents for permit</h2>
      <ul>
        <li>Structural drawings: foundation plans, framing plans, details, and schedules</li>
        <li>Structural calculations: gravity, lateral, foundation, and connection design</li>
        <li>Geotechnical report referenced in the foundation design</li>
        <li>Special inspection plan listing required inspections</li>
        <li>Product approvals for specified systems (especially in HVHZ areas)</li>
        <li>Wind load calculations per ASCE 7 as adopted by FBC</li>
        <li>Threshold building documentation if applicable</li>
      </ul>

      <h2>Common structural reasons for plan review rejection</h2>
      <p>
        Plans examiners in Florida consistently flag the same categories of issues. Addressing these before
        submission eliminates the most common revision cycles:
      </p>
      <ol>
        <li>
          <strong>Incomplete wind load documentation</strong>: missing exposure category justification,
          wrong wind speed, or HVHZ requirements not addressed
        </li>
        <li>
          <strong>Load path gaps</strong>: discontinuous gravity or lateral load paths, especially at
          transfers and collector lines
        </li>
        <li>
          <strong>Missing special inspection notes</strong>: required by FBC for structural concrete,
          steel, masonry, and deep foundations
        </li>
        <li>
          <strong>Foundation/geotechnical misalignment</strong>: design assumptions that do not match the
          geotechnical recommendations
        </li>
        <li>
          <strong>Code edition errors</strong>: referencing a superseded code or standard
        </li>
      </ol>

      <h2>How to respond to structural plan review comments</h2>
      <p>
        Efficient comment response requires addressing each item specifically, referencing the affected
        drawing sheet and detail, and resubmitting only the revised sheets with a response letter. Vague
        responses generate additional rounds.
      </p>
      <p>
        A{" "}
        <Link href="/services#plan-review">pre-submission plan review</Link> by an independent structural
        consultant catches most of these issues before the building department sees them, reducing revision
        cycles and protecting the permit timeline.
      </p>

      <h2>Jurisdiction-specific considerations</h2>
      <h3>Miami-Dade County (HVHZ)</h3>
      <p>
        Miami-Dade enforces High Velocity Hurricane Zone requirements with additional product approval
        documentation, impact-resistant glazing implications for structural design, and stricter wind
        load provisions. Plan review timelines tend to be longer.
      </p>

      <h3>Broward County</h3>
      <p>
        Broward also falls within the HVHZ and shares many of Miami-Dade's requirements but has its own
        building department processes and review timelines.
      </p>

      <h3>Central Florida and Tampa Bay</h3>
      <p>
        Outside the HVHZ, wind loads are still significant but the product approval requirements are less
        stringent. Review timelines are generally shorter but vary by municipality.
      </p>

      <p>
        <Link href="/contact">Request a consultation</Link> to discuss your next Florida permit
        submission.
      </p>
    </>
  );
}

function FloridaWindLoad() {
  return (
    <>
      <h2>Key takeaways</h2>
      <ul>
        <li>Wind loads often govern structural design in Florida, especially along the coast and in the HVHZ (Miami-Dade and Broward counties).</li>
        <li>The Florida Building Code adopts ASCE 7 for wind load determination. Florida wind speeds range from approximately 110 mph inland to over 180 mph in the HVHZ.</li>
        <li>HVHZ projects require additional product approvals (NOA), impact-resistant glazing, and stricter documentation.</li>
        <li>Common wind design errors include using the wrong wind speed, misclassifying exposure category, and confusing MWFRS and C&amp;C loads.</li>
        <li>STRUCTURA verifies wind load calculations and documentation as part of structural plan review and consulting.</li>
      </ul>

      <h2>Why wind load design matters in Florida</h2>
      <p>
        Florida's location in the hurricane belt means wind loads often govern the structural design of
        buildings, especially along the coast and in the High Velocity Hurricane Zone covering Miami-Dade
        and Broward counties. Getting the wind load design right is not optional; errors trigger permit
        rejection and, more importantly, put buildings at risk.
      </p>

      <h2>Florida Building Code wind provisions</h2>
      <p>
        The Florida Building Code adopts ASCE 7 (Minimum Design Loads for Buildings) for wind load
        determination. The current edition references ASCE 7-22 wind speed maps, which provide ultimate
        design wind speeds based on Risk Category. Florida's wind speeds range from approximately 110 mph
        inland to over 180 mph in the HVHZ.
      </p>

      <h3>Risk Categories and wind speed</h3>
      <p>
        Buildings are classified into Risk Categories I through IV based on occupancy and use. Higher Risk
        Categories have higher design wind speeds. Most commercial and multifamily buildings fall into Risk
        Category II or III. Essential facilities (hospitals, emergency shelters) are Risk Category IV and
        must be designed for the highest wind loads.
      </p>

      <h3>Exposure categories</h3>
      <p>
        Wind exposure depends on the surrounding terrain and surface roughness. Florida projects commonly
        fall into Exposure B (urban/suburban) or Exposure C (open terrain, coastal). Exposure D applies
        along flat, unobstructed shorelines. The exposure category significantly affects wind pressure
        calculations and is a frequent source of plan review comments.
      </p>

      <h2>High Velocity Hurricane Zone (HVHZ) requirements</h2>
      <p>
        Miami-Dade and Broward counties enforce HVHZ provisions that go beyond the standard FBC. These
        include additional requirements for:
      </p>
      <ul>
        <li>Product approval (NOA, Notice of Acceptance) for structural components and cladding</li>
        <li>Impact-resistant glazing or protective devices for all openings</li>
        <li>Enhanced testing and documentation for roofing, windows, and doors</li>
        <li>Stricter wind-borne debris region provisions</li>
      </ul>
      <p>
        Structural engineers working in the HVHZ must account for these additional requirements in the
        connection design, member sizing, and documentation submitted for permit.
      </p>

      <h2>MWFRS vs. Components and Cladding</h2>
      <p>
        ASCE 7 distinguishes between Main Wind Force Resisting System (MWFRS) loads and Components and
        Cladding (C&amp;C) loads. MWFRS loads govern the overall lateral system design, while C&amp;C
        loads apply to individual elements and their connections. Confusing the two is a common design
        error that triggers plan review comments.
      </p>

      <h2>Common wind design errors in Florida projects</h2>
      <ol>
        <li>Using the wrong wind speed (basic vs. ultimate, or the wrong Risk Category)</li>
        <li>Misclassifying the exposure category</li>
        <li>Applying MWFRS loads where C&amp;C loads are required (and vice versa)</li>
        <li>Missing HVHZ requirements in Miami-Dade and Broward projects</li>
        <li>Not accounting for internal pressure coefficients for partially enclosed buildings</li>
        <li>Ignoring topographic effects for elevated sites</li>
      </ol>

      <h2>How we help</h2>
      <p>
        STRUCTURA&apos;s <Link href="/services#plan-review">structural plan review</Link> and{" "}
        <Link href="/services#consulting">consulting services</Link> include verification of
        wind load calculations and documentation. We check that the design aligns with FBC requirements,
        the correct ASCE 7 provisions, and the specific expectations of the reviewing jurisdiction.
      </p>
      <p>
        <Link href="/contact">Request a consultation</Link> for your Florida project.
      </p>
    </>
  );
}

function ArchitectCoordination() {
  return (
    <>
      <h2>Key takeaways</h2>
      <ul>
        <li>Architect-structural coordination failures cause change orders, RFIs, and field rework. Resolving conflicts on paper costs a fraction of resolving them in the field.</li>
        <li>Common friction points: column grid placement, floor-to-floor height impacts, transfer conditions, and facade/cladding loads.</li>
        <li>Best practices: involve the structural engineer at schematic design, share design criteria early, hold weekly coordination meetings, and run overlay checks before milestones.</li>
        <li>A third-party structural consultant can serve as a coordination bridge between separate architect and structural engineering firms.</li>
      </ul>

      <h2>Why architect-structural coordination matters</h2>
      <p>
        Architectural and structural design are interdependent. The architect defines the space (layouts,
        ceiling heights, facade systems, circulation) while the structural engineer makes that space stand
        up safely. When coordination breaks down, the result is design conflicts that surface during
        construction as change orders, RFIs, and field rework.
      </p>
      <p>
        Early, intentional coordination between architects and structural engineers prevents most of these
        conflicts. The cost of resolving a design conflict on paper is a fraction of resolving it in the
        field.
      </p>

      <h2>Common friction points</h2>

      <h3>Column grid flexibility</h3>
      <p>
        Architects need open floor plans. Structural engineers need columns where loads need to go.
        Resolving this tension early, during schematic design, prevents costly transfers and oversized
        members later. Moving a column in design development costs hours; moving it during construction
        documents costs weeks.
      </p>

      <h3>Floor-to-floor height impacts</h3>
      <p>
        Structural depth (beam depth, slab thickness) directly affects ceiling heights and building
        height. When architectural floor-to-floor dimensions do not account for structural depth plus MEP
        clearances, the compression forces compromises in ceiling height, ductwork routing, or structural
        system changes.
      </p>

      <h3>Transfer conditions</h3>
      <p>
        Architectural layouts that change between floors (parking below retail, residential above
        commercial) create structural transfers. These are expensive, schedule-sensitive, and must be
        identified early. A{" "}
        <Link href="/services#consulting">structural consultant</Link> can evaluate transfer
        options with the architect before the design is locked.
      </p>

      <h3>Facade and cladding loads</h3>
      <p>
        Heavy cladding systems, cantilevered balconies, and large curtain wall spans all affect the
        structural design. The structural engineer needs facade load information early to size members
        and connections correctly. Late changes to the facade system often cascade into structural
        redesigns.
      </p>

      <h2>Coordination best practices</h2>
      <ol>
        <li>
          <strong>Involve the structural engineer at schematic design</strong>: even a quick review of
          the architectural concept can flag structural implications early
        </li>
        <li>
          <strong>Share design criteria early</strong>: loading assumptions, deflection limits, and code
          requirements should be established before design development
        </li>
        <li>
          <strong>Hold regular coordination meetings</strong>: brief weekly check-ins between architect
          and structural engineer prevent drift
        </li>
        <li>
          <strong>Use overlay checks</strong>: compare architectural and structural grids, elevations,
          and sections before each milestone submission
        </li>
      </ol>

      <h2>How a structural consultant facilitates coordination</h2>
      <p>
        A third-party structural consultant can serve as a coordination bridge, reviewing architectural
        intent against structural implications, identifying conflicts early, and providing written
        recommendations that both teams can act on. This is especially valuable on projects with separate
        architect and structural engineering firms.
      </p>
      <p>
        At STRUCTURA, coordination support is part of our{" "}
        <Link href="/services#plan-review">consulting and plan review services</Link>. We work
        alongside your design team to keep the structural and architectural design aligned.
      </p>
      <p>
        <Link href="/contact">Request a consultation</Link> to discuss coordination for your
        project.
      </p>
    </>
  );
}

/** Map of slug → content component. Add entries here when creating new articles. */
export const articleContent: Record<string, React.FC> = {
  "common-structural-plan-review-mistakes": PlanReviewMistakes,
  "constructability-review-reduces-change-orders": ConstructabilityChangOrders,
  "when-to-hire-structural-engineering-consultant": WhenToHireConsultant,
  "florida-building-permit-structural-requirements": FloridaBuildingPermit,
  "florida-wind-load-design-requirements": FloridaWindLoad,
  "architect-structural-engineer-coordination": ArchitectCoordination,
};
