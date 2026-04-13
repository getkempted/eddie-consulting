# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Summary

Professional marketing website for "STRUCTURA" — a structural engineering consulting business. The site's purpose is lead generation through a contact/consultation form, establishing credibility via design and content. Currently in pre-development: planning documents and HTML mockups exist, but the Next.js application has not been scaffolded yet.

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Animation:** GSAP (scroll-triggered), Spline (3D hero), Lottie (micro-interactions)
- **Backend:** Supabase (PostgreSQL for leads table)
- **Email:** Resend (future)
- **Hosting:** Vercel with GitHub auto-deploy

## Key Architecture Decisions

- **Server Components** for all static content and SEO; **Client Components** only for animations and interactivity (GSAP, Spline, Lottie)
- **Server Actions** or API route handlers for form submission — never expose Supabase service role keys client-side
- Spline 3D is hero-section only and must be lazy-loaded for performance
- Contact form flow: client validation → server action → Supabase `leads` table insert

## Design System ("Blueprint Precision")

The design system is documented in `mockups/blueprint_precision/DESIGN.md`. Critical rules:

- **No 1px solid borders.** Section boundaries use background color shifts between surface tiers (`#f7f9fb` → `#f2f4f6`)
- **No pure black (#000000) for text.** Use `on_surface` (#191c1e)
- **No standard drop shadows.** Use "Architectural Shadows" (32–64px blur, 4–6% opacity, tinted color)
- **Ghost borders only** when needed for accessibility: `outline_variant` (#c5c6cd) at 15% opacity
- **Typography:** Inter for headlines (tight letter-spacing -0.02em), Manrope for body text
- **Glassmorphism** for floating elements: 80% opacity surface colors + 20px backdrop-blur
- **Hero/CTA gradient:** `primary_container` (#0d1c32) → `secondary` (#505f76) at 135°

## Pages

Four core pages with HTML mockups in `mockups/`:
- Home (`mockups/home_page/`) — hero with Spline 3D, services overview, CTAs
- About (`mockups/about_page/`) — credentials, background, credibility
- Services (`mockups/services_page/`) — plan review, constructability, consulting
- Contact (`mockups/contact_page/`) — lead capture form (name, email, company, project description)

Each mockup folder contains `code.html` (reference implementation) and `screen.png` (visual reference).

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY        # server-only, never expose to client
```

## Guiding Principles

- Keep v1 simple — speed to market over feature completeness
- Focus on lead generation first
- Use animation intentionally; avoid overload
- Optimize for performance across devices (especially mobile)
- Limit Spline to key sections; lazy-load heavy assets
