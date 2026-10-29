# FEELEXIM — Project Plan

## Project Overview

**Client:** FEELEXIM  
**Type:** Premium Indian Import & Export Business Website  
**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS · Framer Motion · Lucide React  
**Goal:** A production-quality, fully responsive website that communicates trust, global reach, product quality, and professionalism.

---

## Phase Breakdown

### Phase 1 — Setup & Foundation
- [ ] Initialize Next.js project with App Router, TypeScript, Tailwind CSS
- [ ] Configure `tailwind.config.ts` with brand tokens (colors, fonts, spacing)
- [ ] Set up global CSS (`globals.css`) with base styles, glass utilities, and animations
- [ ] Install dependencies: Framer Motion, Lucide React, React Hook Form, Zod
- [ ] Create `src/config/site.ts` — centralized site config (contact, nav, social links)
- [ ] Create `src/types/product.ts` — TypeScript interfaces
- [ ] Create `src/data/products.ts` — structured product data
- [ ] Create `src/data/faqs.ts` — FAQ data
- [ ] Create `src/lib/utils.ts` — shared utility functions
- [ ] Create `src/lib/validations.ts` — Zod schemas

### Phase 2 — Design System & UI Primitives
- [ ] `src/components/ui/Button.tsx` — reusable button variants
- [ ] `src/components/ui/Container.tsx` — layout container
- [ ] `src/components/ui/SectionHeading.tsx` — section title/subtitle
- [ ] `src/components/ui/GlassCard.tsx` — glassmorphism card wrapper

### Phase 3 — Layout: Header & Footer
- [ ] `src/components/layout/TopBar.tsx` — contact + social strip
- [ ] `src/components/layout/Navbar.tsx` — sticky glass navigation + CTA
- [ ] `src/components/layout/MobileMenu.tsx` — animated hamburger drawer
- [ ] `src/components/layout/Footer.tsx` — multi-column footer

### Phase 4 — Homepage Sections
- [ ] `Hero.tsx` — full-width dark hero with layered visuals, headline, CTAs
- [ ] `TrustStrip.tsx` — 4-item value proposition strip
- [ ] `AboutPreview.tsx` — split layout about section
- [ ] `ProductCategories.tsx` — featured category grid
- [ ] `WhyChooseUs.tsx` — 6-feature card grid
- [ ] `ExportProcess.tsx` — numbered process timeline
- [ ] `QualitySection.tsx` — quality & compliance overview
- [ ] `GlobalTrade.tsx` — world map / global reach section
- [ ] `FAQ.tsx` — accessible accordion
- [ ] `ContactCTA.tsx` — bottom CTA strip

### Phase 5 — Inner Pages
- [ ] `/about` — full About Us page
- [ ] `/products` — full catalog with filters & search
- [ ] `/products/[slug]` — individual product detail page
- [ ] `/services` — services overview page
- [ ] `/quality-compliance` — quality & compliance detail page
- [ ] `/contact` — contact page with quotation form
- [ ] `/privacy-policy` — privacy policy page
- [ ] `/terms` — terms & conditions page

### Phase 6 — Forms & API
- [ ] `src/components/contact/EnquiryForm.tsx` — validated quotation form
- [ ] `src/app/api/enquiries/route.ts` — server-side form handler
- [ ] Rate limiting & spam protection
- [ ] Email delivery setup (Nodemailer / Resend / SendGrid) via env vars
- [ ] Loading, success, and error states

### Phase 7 — SEO & Performance
- [ ] Page-level metadata (title, description, OG tags)
- [ ] Semantic HTML audit
- [ ] Structured data (Organization schema)
- [ ] Sitemap (`sitemap.ts`)
- [ ] `robots.txt`
- [ ] Favicon placeholder
- [ ] Image optimization with Next.js `<Image>`
- [ ] Lazy loading below the fold
- [ ] Reduced-motion support

### Phase 8 — QA & Polish
- [ ] Lint & type-check (`next lint`, `tsc --noEmit`)
- [ ] Production build test (`next build`)
- [ ] Responsive testing: 320px, 375px, 768px, 1024px, 1440px, 1920px
- [ ] Navigation, CTAs, and form state checks
- [ ] Accessibility audit (keyboard, contrast, focus)
- [ ] Performance review (Core Web Vitals)

---

## File Structure

```
exim/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── about/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── services/page.tsx
│   │   ├── quality-compliance/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── api/enquiries/route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── ProductCategories.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── ExportProcess.tsx
│   │   │   ├── QualitySection.tsx
│   │   │   ├── GlobalTrade.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── ContactCTA.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductFilters.tsx
│   │   ├── contact/
│   │   │   └── EnquiryForm.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Container.tsx
│   │       ├── SectionHeading.tsx
│   │       └── GlassCard.tsx
│   ├── config/
│   │   └── site.ts
│   ├── data/
│   │   ├── products.ts
│   │   └── faqs.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── validations.ts
│   └── types/
│       └── product.ts
├── public/
│   ├── images/
│   ├── logo/
│   └── icons/
├── Plan.md
├── design.md
├── deploy.md
├── README.md
├── .env.example
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Dependencies

| Package | Purpose |
|---|---|
| `next` | Framework |
| `react`, `react-dom` | UI library |
| `typescript` | Type safety |
| `tailwindcss` | Utility CSS |
| `framer-motion` | Animations |
| `lucide-react` | Icons |
| `react-hook-form` | Form handling |
| `zod` | Schema validation |
| `@hookform/resolvers` | RHF + Zod bridge |
| `nodemailer` | Email (server-side) |
| `@types/nodemailer` | Type definitions |

---

## Brand Quick Reference

| Token | Value |
|---|---|
| Midnight Navy | `#0B1424` |
| Deep Ocean Blue | `#10253F` |
| Royal Blue | `#1D4ED8` |
| Champagne Gold | `#D6B574` |
| Warm White | `#F8FAFC` |
| Slate Gray | `#64748B` |
| Glass White | `rgba(255,255,255,0.08)` |
| Glass Border | `rgba(255,255,255,0.16)` |

---

## Notes
- Never fabricate testimonials, statistics, certifications, or company history.
- All contact details, social links, and credentials are stored centrally in `src/config/site.ts`.
- Logo is a placeholder until the official asset is supplied — never auto-generate a logo.
- Email credentials must never appear in client-side code.
