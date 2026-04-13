# Design System Document: Engineering Excellence

## 1. Overview & Creative North Star: "The Architectural Blueprint"
This design system is built to mirror the precision, stability, and sophistication of high-end structural engineering. We are moving away from the "generic corporate" aesthetic toward a **Creative North Star of "The Architectural Blueprint."**

This means the UI should feel like a technical drawing brought to life: precise, layered, and intentionally spacious. We break the standard "SaaS template" look by utilizing **intentional asymmetry**—where heavy, authoritative typography is balanced against expansive white space—and **tonal depth**, replacing rigid lines with subtle shifts in surface color. The result is a digital environment that feels as trustworthy and permanent as a steel-and-glass skyscraper.

---

## 2. Colors: Tonal Rigor
Our palette is rooted in a "Deep Navy" foundation, accented by "Industrial Steel." We do not use color for decoration; we use it for structural hierarchy.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. Boundaries must be defined solely through background color shifts or tonal transitions. To separate a section, transition from `surface` (#f7f9fb) to `surface-container-low` (#f2f4f6). This creates a sophisticated, "borderless" flow that feels high-end and custom.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the surface-container tiers to create nested depth:
- **Base Level:** `surface` (#f7f9fb) for the main background.
- **Sectioning:** `surface-container-low` (#f2f4f6) for large content blocks.
- **Interactive Elements:** `surface-container-lowest` (#ffffff) for cards and primary input areas to provide a "pop" of clean white.
- **Depth Hierarchy:** `surface-container-high` (#e6e8ea) for utility bars or secondary sidebars.

### The "Glass & Gradient" Rule
To inject "soul" into the technical layout, use **Glassmorphism** for floating elements (like navigation bars or modal overlays). Use `surface` colors at 80% opacity with a `20px` backdrop-blur. 
**Signature Texture:** For Hero sections and primary CTAs, use a subtle linear gradient transitioning from `primary_container` (#0d1c32) to `secondary` (#505f76) at a 135-degree angle. This mimics the light reflecting off brushed steel.

---

## 3. Typography: Authoritative Clarity
We utilize a high-contrast scale to convey expertise.

*   **Display & Headlines (Inter):** These are your "Structural Beams." Use `display-lg` and `headline-lg` with tight letter-spacing (-0.02em) and bold weights. Headlines should command the page, often sitting in asymmetrical layouts with significant left-hand margins.
*   **Body & Titles (Manrope):** These are the "Technical Specifications." Manrope provides a warmer, more legible contrast to the rigid Inter. Use `body-lg` for editorial content to maintain a premium, high-end consulting feel.
*   **Labels:** Use `label-md` in all-caps with increased letter-spacing (+0.05em) for category headers or technical data points, rendered in `on_surface_variant` (#44474d).

---

## 4. Elevation & Depth: Tonal Layering
In this system, elevation is a product of light and shadow, not lines.

*   **The Layering Principle:** Achieve depth by stacking tiers. A `surface-container-lowest` (#ffffff) card placed on a `surface-container-low` (#f2f4f6) background creates a natural lift.
*   **Ambient Shadows:** For floating elements, use "Architectural Shadows."
    *   *Blur:* 32px to 64px.
    *   *Opacity:* 4% to 6%.
    *   *Color:* Use a tinted `on_surface` color rather than pure black to keep the shadow feeling integrated with the deep navy environment.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` (#c5c6cd) at **15% opacity**. 100% opaque borders are strictly forbidden.
*   **Glassmorphism:** Use semi-transparent layers to allow the "structural" colors beneath to bleed through, softening the edges of the technical interface.

---

## 5. Components: Technical Precision

### Buttons
*   **Primary:** Solid `primary_container` (#0d1c32) with `on_primary` (#ffffff) text. Use `md` (0.375rem) roundedness.
*   **Secondary:** Ghost style. No background, `outline` (#75777e) at 20% opacity, with `primary` text.
*   **Tertiary:** Text-only with a subtle `primary` underline that expands on hover.

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Implementation:** Separate list items using 16px of vertical whitespace or by alternating background colors between `surface` and `surface-container-low`. Cards should use the `surface-container-lowest` (#ffffff) color to stand out against the light gray background.

### Input Fields
*   **Style:** Minimalist. No bottom border or full enclosure. Use a `surface-container-high` (#e6e8ea) background with `md` (0.375rem) corners. The focus state should be a 2px "Ghost Border" of the `primary` color.

### Engineering-Specific Components
*   **Data Grids:** Use `surface-container-highest` for headers. No vertical lines; use horizontal alignment and `label-sm` for column headers to maintain a "blueprint" feel.
*   **Blueprint Overlays:** Use semi-transparent `secondary_container` (#d0e1fb) chips to highlight technical specs over imagery.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical white space to lead the eye to key conversion points.
*   **Do** use tonal shifts (e.g., `surface` to `surface-container`) to define site sections.
*   **Do** apply `xl` (0.75rem) roundedness sparingly for large containers to soften the "industrial" feel.

### Don't:
*   **Don't** use 1px solid black or dark gray borders for any reason.
*   **Don't** use standard drop shadows (e.g., 0px 2px 4px). They feel "cheap" and "standard."
*   **Don't** crowd the interface. If an element feels tight, increase the margin by a factor of 1.5x.
*   **Don't** use pure black (#000000) for text; always use `on_surface` (#191c1e) to maintain a sophisticated tonal range.