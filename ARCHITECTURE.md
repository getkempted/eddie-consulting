
# 📐 ARCHITECTURE.md

## Structural Engineering Consulting Website

---

## 1. Overview

This project is a high-performance, visually engaging marketing website for a structural engineering consulting business. The application prioritizes speed, SEO, and premium user experience through the use of modern web technologies and interactive animations.

The system is designed to:

* Generate leads through contact and consultation requests
* Establish technical credibility through design and content
* Deliver a visually distinct experience using 3D and motion

---

## 2. System Architecture

### High-Level Diagram

```text
[ Client Browser ]
        |
        v
[ Next.js App (Vercel) ]
        |
        |-- Static Pages (SSR/SSG)
        |-- Client Components (Animations, UI)
        |-- Server Actions / API Routes
        |
        v
[ Supabase Backend ]
        |
        |-- PostgreSQL Database
        |-- Auth (optional future)
        |-- Storage (optional future)
```

---

## 3. Tech Stack

### Frontend

* Framework: Next.js (App Router)
* Language: TypeScript
* Styling: Tailwind CSS
* Animation: GSAP
* 3D: Spline
* Micro Animations: Lottie

### Backend

* Platform: Supabase
* Database: PostgreSQL
* API: Supabase client + Next.js server actions

### Deployment

* Hosting: Vercel
* CI/CD: GitHub → Vercel auto-deploy
* Environment Management: Vercel env vars

### Development Tooling

* Claude Code for generation and automation
* Cursor for AI-assisted coding workflows

---

## 4. Application Structure

### Directory Layout

```text
app/
  layout.tsx
  page.tsx
  services/page.tsx
  about/page.tsx
  contact/page.tsx

components/
  layout/
  sections/
  ui/
  animations/
  spline/

lib/
  supabase/
  utils/

public/
  images/
  lottie/

styles/
  globals.css
```

---

## 5. Rendering Strategy

### Approach

* Use **Server Components** for static content and SEO
* Use **Client Components** for animations and interactivity

### Breakdown

| Component Type    | Usage                                  |
| ----------------- | -------------------------------------- |
| Server Components | Pages, static sections                 |
| Client Components | GSAP animations, Spline embeds, Lottie |
| Server Actions    | Form submission handling               |

---

## 6. Animation Architecture

### Spline (3D Layer)

* Used in hero section only
* Embedded via iframe or React wrapper
* Lazy loaded for performance

### GSAP (Motion System)

* Scroll-triggered animations
* Section transitions
* Text and card reveals

### Lottie (Micro Interactions)

* Small animations only
* Used in:

  * Icons
  * Process steps
  * Feedback states

### Principles

* Motion should guide attention
* Avoid animation overload
* Maintain performance across devices

---

## 7. Backend Design

### Core Table: `leads`

```text
id (uuid)
created_at (timestamp)
name (text)
email (text)
company (text)
phone (text)
service_interest (text)
project_description (text)
status (text)
```

### Optional Future Tables

* `case_studies`
* `blog_posts`
* `quote_requests`
* `admin_users`

---

## 8. Data Flow

### Contact Form Submission

```text
User submits form
    ↓
Client validation
    ↓
Next.js Server Action / API Route
    ↓
Supabase insert (leads table)
    ↓
Optional email notification (future)
```

---

## 9. API Layer

### Pattern

* Use Next.js **server actions** or **route handlers**
* Avoid exposing sensitive keys client-side

### Example Flow

* POST `/api/contact`
* Validate payload
* Insert into Supabase
* Return success response

---

## 10. Design System

### Style Direction

* Technical and minimal
* Engineering-inspired
* Grid-based layouts
* Clean spacing and hierarchy

### Color Palette

* Navy (primary)
* Gray / slate tones
* White
* Subtle blue accents

### Typography

* Bold sans-serif headings
* Clean readable body text
* Strong hierarchy

---

## 11. Performance Strategy

### Key Practices

* Lazy load Spline scenes
* Keep GSAP scoped to visible elements
* Compress images and assets
* Use static rendering where possible
* Minimize client-side JavaScript

### Goals

* Fast initial load
* Smooth animation performance
* Responsive across devices

---

## 12. SEO Strategy

### Implementation

* Server-rendered pages
* Metadata per route
* Semantic HTML structure
* Sitemap and robots configuration

### Future SEO Expansion

* Blog content
* Case studies
* Location-based landing pages

---

## 13. Security

### Best Practices

* Validate all form inputs
* Sanitize user data
* Use environment variables securely
* Restrict Supabase access via policies if needed

### Key Rule

* Never expose service role keys in the frontend

---

## 14. Deployment

### Environments

* Local
* Preview (Vercel)
* Production

### Deployment Flow

1. Push to GitHub
2. Vercel builds preview
3. Merge to main
4. Production deploy

### Required Environment Variables

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY (server only)
```

---

## 15. Development Workflow

### Recommended Process

1. Define page or feature in markdown
2. Use Claude Code to generate structure
3. Build components in Next.js
4. Style with Tailwind
5. Add GSAP animations
6. Integrate Spline scene
7. Add Lottie polish
8. Test performance
9. Deploy via Vercel

---

## 16. Build Phases

### Phase 1

* Project setup
* Layout and navigation
* Base styling system

### Phase 2

* Home page
* Hero with Spline
* GSAP animations

### Phase 3

* Services, About, Contact pages
* Supabase integration

### Phase 4

* Lottie enhancements
* SEO improvements
* Performance optimization

---

## 17. Risks and Mitigation

### Risks

* Overuse of animation
* Heavy 3D assets
* Poor performance on mobile

### Mitigation

* Limit Spline usage to key sections
* Use lazy loading
* Optimize assets
* Test across devices early

---

## 18. Future Enhancements

* Case study system
* Blog or insights platform
* Client dashboard
* File upload and review system
* AI-assisted engineering feedback tools
* Stripe integration for paid consultations

---

## 19. Guiding Principles

* Keep v1 simple and fast
* Focus on lead generation first
* Use animation intentionally
* Maintain clean and scalable code
* Optimize for performance and clarity

---

## 20. Summary

This architecture provides a scalable and modern foundation for a consulting website that combines:

* Performance (Next.js + Vercel)
* Simplicity (Supabase backend)
* Visual impact (Spline + GSAP + Lottie)
* Rapid development (Claude Code + Cursor)

The result is a high-quality, production-ready system designed to stand out while remaining maintainable and extensible.
