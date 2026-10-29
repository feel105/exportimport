# FEELEXIM — Design System

## Design Philosophy

FEELEXIM is a **premium international trading brand**. The design combines:
- **Liquid Glass UI** — glassmorphism with excellent readability
- **Dark Navy Foundation** — authoritative, trustworthy, premium
- **Champagne Gold Accents** — exclusivity and quality
- **Royal Blue Actions** — clear, confident interactivity
- **Clean White Sections** — breathing room, clarity

The overall aesthetic: elegant, confident, modern, and trustworthy — like an established international trading house.

---

## Color Palette

### Primary Colors

| Name | Hex / Value | Usage |
|---|---|---|
| Midnight Navy | `#0B1424` | Primary background, hero, footer, navbar |
| Deep Ocean Blue | `#10253F` | Secondary dark backgrounds, cards |
| Royal Blue | `#1D4ED8` | Primary buttons, links, interactive states |
| Champagne Gold | `#D6B574` | Accents, highlights, eyebrow labels, decorative borders |
| Warm White | `#F8FAFC` | Light section backgrounds, primary text on dark |
| Slate Gray | `#64748B` | Body text, secondary labels, muted elements |

### Glass Effects

| Name | Value | Usage |
|---|---|---|
| Glass White | `rgba(255, 255, 255, 0.08)` | Card backgrounds on dark surfaces |
| Glass Border | `rgba(255, 255, 255, 0.16)` | Card and nav borders |
| Glass Hover | `rgba(255, 255, 255, 0.12)` | Hover state backgrounds |
| Glass Shadow | `0 8px 32px rgba(0,0,0,0.3)` | Card and nav shadows |

### Tailwind CSS Config Extensions

```ts
// tailwind.config.ts
colors: {
  navy: {
    DEFAULT: '#0B1424',
    deep: '#10253F',
  },
  royal: '#1D4ED8',
  gold: {
    DEFAULT: '#D6B574',
    light: '#E8D09A',
    dark: '#B8962E',
  },
  warm: '#F8FAFC',
  slate: '#64748B',
}
```

---

## Typography

### Font Stack

| Role | Font | Weights |
|---|---|---|
| Headings | `Inter` (Google Fonts) | 600, 700, 800 |
| Body | `Inter` | 400, 500 |
| Eyebrow / Labels | `Inter` | 500, uppercase, tracked |
| Mono (optional) | `JetBrains Mono` | 400 |

### Type Scale (using Tailwind clamp)

| Token | Size | Usage |
|---|---|---|
| `text-hero` | `clamp(2.5rem, 5vw, 4.5rem)` | Hero headline |
| `text-5xl` | `3rem` | Page headings (H1) |
| `text-4xl` | `2.25rem` | Section headings (H2) |
| `text-2xl` | `1.5rem` | Card headings (H3) |
| `text-xl` | `1.25rem` | Sub-section titles |
| `text-base` | `1rem` | Body text |
| `text-sm` | `0.875rem` | Captions, labels, topbar |
| `text-xs` | `0.75rem` | Badges, tags |

### Eyebrow Labels
- Uppercase, `text-xs` or `text-sm`, letter-spacing: `0.1em`
- Color: Champagne Gold (`#D6B574`)
- Used above every major section heading

---

## Spacing System

Use Tailwind default spacing scale (4px base unit). Key conventions:

| Usage | Value |
|---|---|
| Section vertical padding | `py-20 lg:py-28` |
| Container horizontal padding | `px-4 sm:px-6 lg:px-8` |
| Card internal padding | `p-6 lg:p-8` |
| Grid gap | `gap-6 lg:gap-8` |
| Stack gap (vertical) | `space-y-4` or `space-y-6` |

Max content width: `max-w-7xl mx-auto`

---

## Border Radius

| Element | Radius |
|---|---|
| Cards | `rounded-2xl` (16px) |
| Buttons | `rounded-lg` (8px) |
| Badges / Tags | `rounded-full` |
| Images | `rounded-xl` (12px) |
| Input fields | `rounded-lg` (8px) |

---

## Shadows

| Name | Value | Usage |
|---|---|---|
| Glass shadow | `0 8px 32px rgba(0,0,0,0.3)` | Cards on dark |
| Soft shadow | `0 4px 24px rgba(0,0,0,0.08)` | Cards on light |
| Gold glow | `0 0 20px rgba(214,181,116,0.2)` | Gold accent hover |
| Blue glow | `0 0 24px rgba(29,78,216,0.3)` | Button hover |

---

## Glassmorphism System

### Standard Glass Card

```css
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### Glass Navbar (after scroll)

```css
.glass-nav {
  background: rgba(11, 20, 36, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

### Usage Rules
- Glass effects ONLY on dark (navy) backgrounds
- Do NOT use glass on light/white sections — use solid cards instead
- Always ensure text contrast ratio ≥ 4.5:1 on glass surfaces
- Limit backdrop-filter to key elements for performance

---

## Button Variants

### Primary Button
- Background: Royal Blue `#1D4ED8`
- Text: White
- Hover: Slightly lighter blue + subtle glow
- Border-radius: `rounded-lg`
- Padding: `px-6 py-3`
- Font: `font-semibold`

### Secondary Button (Outline)
- Background: Transparent
- Border: `1px solid rgba(255,255,255,0.3)`
- Text: White
- Hover: `rgba(255,255,255,0.08)` background
- Use on dark backgrounds

### Gold CTA Button
- Background: Champagne Gold `#D6B574`
- Text: Midnight Navy `#0B1424`
- Hover: Gold glow shadow
- Use sparingly for highest-priority CTAs

### Ghost Button
- Background: Transparent
- Text: Slate Gray or White
- Hover: Subtle background tint
- Use for low-priority actions

---

## Icon System

Use **Lucide React** exclusively.

| Size | Class | Usage |
|---|---|---|
| Small | `w-4 h-4` | Inline, labels, badges |
| Medium | `w-5 h-5` | Default, top bar |
| Large | `w-6 h-6` | Feature cards, nav |
| XL | `w-8 h-8` | Section feature icons |
| Hero | `w-10 h-10` or `w-12 h-12` | Large callout icons |

Icon color on dark: `text-gold` or `text-blue-400`  
Icon color on light: `text-royal` or `text-slate`

---

## Section Layout Patterns

### Dark Section (Navy)
- Background: `#0B1424` or `#10253F`
- Text: `#F8FAFC`
- Cards: Glass cards
- Use: Hero, Footer, Why Choose Us, Export Process

### Light Section (White)
- Background: `#F8FAFC` or `#FFFFFF`
- Text: `#0B1424`
- Cards: Solid white with soft shadow
- Use: About, Products, FAQ

### Alternating Rhythm
```
Hero (dark) → Trust Strip (dark/accent) → About (light) → Products (light) 
→ Why Choose Us (dark) → Process (dark) → Quality (light) 
→ Global (dark) → Contact (light) → Footer (dark)
```

---

## Animation System

### Principles
- Subtle, purposeful, never distracting
- All animations respect `prefers-reduced-motion`
- Use Framer Motion for scroll-triggered reveals
- Duration: 200–500ms. Easing: `ease-out` or spring

### Standard Animations

| Name | Description | Duration |
|---|---|---|
| Fade up | `opacity: 0 → 1`, `y: 20 → 0` | 400ms |
| Scale in | `scale: 0.95 → 1`, `opacity: 0 → 1` | 300ms |
| Slide in left | `x: -30 → 0`, `opacity: 0 → 1` | 400ms |
| Slide in right | `x: 30 → 0`, `opacity: 0 → 1` | 400ms |
| Stagger children | Each child delayed by `0.1s` | — |

### Hover Effects

| Element | Effect |
|---|---|
| Cards | `translateY(-4px)` + shadow intensify |
| Product images | `scale(1.04)` |
| Buttons | Background shift + glow |
| Nav links | Underline slide in |
| Social icons | `scale(1.1)` + color |

### Scroll Behavior
- Navbar: Transparent → glass on scroll (`scrollY > 60`)
- Sections: Fade-up on enter viewport
- Back-to-top: Appears after `scrollY > 400`

---

## Form Design

### Input Fields
```css
/* Base style */
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.15);
border-radius: 8px;
padding: 12px 16px;
color: #F8FAFC;
transition: border-color 200ms;

/* Focus */
border-color: #1D4ED8;
outline: none;
box-shadow: 0 0 0 3px rgba(29,78,216,0.2);

/* Error */
border-color: #EF4444;
box-shadow: 0 0 0 3px rgba(239,68,68,0.2);
```

### Labels
- `text-sm font-medium`
- Color: `#CBD5E1` on dark, `#374151` on light

---

## Navigation Design

### TopBar
- Height: `~36px`
- Background: `#0B1424`
- Text: `text-sm` slate/warm white
- Content: Email | Phone (left) | Social icons (right)

### Navbar
- Height: `64px` desktop, `56px` mobile
- Initially: Fully transparent, text white
- After scroll: Glass blur + navy tint
- Logo: Left-aligned
- Links: Center or right-aligned
- CTA "Request a Quote": Gold or Blue button, always visible

### Mobile Menu
- Full-width slide-down or side drawer
- Dark navy background
- Large touch-friendly nav items
- CTA button at bottom
- Close button / backdrop tap to dismiss

---

## Image Guidelines

- All images: Next.js `<Image>` component for optimization
- Hero: Full-width, high-quality agricultural/logistics photo
- Products: Consistent aspect ratio (1:1 or 4:3)
- About: Large landscape or portrait agricultural image
- Alt text: Descriptive and meaningful
- Lazy loading: Below-the-fold sections only (`loading="lazy"`)
- Priority loading: Hero image only (`priority`)
- Placeholder: Blur placeholder for perceived performance

---

## Accessibility

- Color contrast ratio: ≥ 4.5:1 for body text, ≥ 3:1 for large text
- Focus indicators: Visible ring on all interactive elements
- Keyboard navigation: Fully operable without mouse
- ARIA labels: All icon-only buttons and links
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- One `<h1>` per page
- Form labels linked to inputs via `htmlFor` / `id`
- Error messages: Linked to inputs via `aria-describedby`
- Motion: All animations wrapped in `@media (prefers-reduced-motion: no-preference)`
