# FEELEXIM — Skill & Component Reference

## Component Map

This file documents all reusable components, their props, and usage patterns for developers working on the FEELEXIM codebase.

---

## UI Primitives (`src/components/ui/`)

### Button
```tsx
import { Button } from '@/components/ui/Button'

<Button variant="primary" size="md" href="/contact">Request a Quote</Button>
<Button variant="secondary" size="lg">Learn More</Button>
<Button variant="gold" size="md">Explore Products</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'gold' \| 'ghost' \| 'outline'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `href` | `string` | — | Renders as `<Link>` when provided |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Shows spinner |
| `fullWidth` | `boolean` | `false` | Full width |
| `onClick` | `() => void` | — | Click handler |

---

### Container
```tsx
import { Container } from '@/components/ui/Container'

<Container>
  <p>Content</p>
</Container>

<Container size="narrow">
  <p>Narrower content</p>
</Container>
```

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'default' \| 'narrow' \| 'wide'` | `'default'` | Max width |
| `className` | `string` | — | Additional classes |

---

### SectionHeading
```tsx
import { SectionHeading } from '@/components/ui/SectionHeading'

<SectionHeading
  eyebrow="OUR PRODUCTS"
  title="Premium Indian Agricultural Products"
  description="Explore our curated range of spices, seeds, and nuts."
  align="center"
/>
```

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `eyebrow` | `string` | — | Small uppercase label above title |
| `title` | `string` | required | Main heading text |
| `description` | `string` | — | Optional subtext |
| `align` | `'left' \| 'center'` | `'left'` | Text alignment |
| `theme` | `'dark' \| 'light'` | `'light'` | Color adaptation |

---

### GlassCard
```tsx
import { GlassCard } from '@/components/ui/GlassCard'

<GlassCard>
  <p>Content on dark background</p>
</GlassCard>

<GlassCard hover className="p-8">
  <p>Hoverable glass card</p>
</GlassCard>
```

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `hover` | `boolean` | `false` | Enable hover animation |
| `className` | `string` | — | Additional Tailwind classes |
| `as` | `ElementType` | `'div'` | HTML element to render as |

---

## Layout Components (`src/components/layout/`)

### Navbar
- Sticky on scroll
- Transparent → glass transition at `scrollY > 60`
- Contains: Logo, nav links, "Request a Quote" CTA
- Mobile: hamburger toggle → opens `MobileMenu`

**Configuration:** All nav links from `src/config/site.ts → navLinks`

---

### TopBar
- Slim strip above Navbar
- Left: Email, Phone (from `siteConfig`)
- Right: Social icons (LinkedIn, Instagram, Facebook)
- Hidden on scroll for better mobile UX

---

### MobileMenu
- Full-width slide-down drawer
- Triggered by Navbar hamburger button
- Closes on: link click, backdrop tap, escape key
- Contains: nav links, "Request a Quote" CTA button

---

### Footer
- Dark navy background
- 4 columns: Brand | Quick Links | Categories | Contact
- Dynamic copyright year
- Back-to-top button
- Privacy Policy & Terms links

---

## Home Sections (`src/components/home/`)

### Hero
- Full-width, 100vh hero
- Background: High-quality image with navy overlay
- Layout: Left text + Right visual
- Animations: Framer Motion fade-up on load
- Trust indicators row below CTAs

**Editable copy:** Top of `Hero.tsx` component file

---

### TrustStrip
- 4 value proposition items with icons
- Responsive: 4-col desktop → 2-col tablet → scrollable mobile
- Icons: Lucide React

---

### AboutPreview
- Split layout: Image left + Text right
- Optional glass overlay card on image
- CTA: "Learn More About Us" → `/about`

---

### ProductCategories
- Featured category grid
- Shows A/B/C/D category tiles
- CTA per tile → `/products?category=X`
- "View All Products" button

---

### WhyChooseUs
- Dark navy background
- 6 feature cards in responsive grid
- Lucide icons + hover animation

---

### ExportProcess
- 6-step numbered timeline
- Horizontal on desktop, vertical on mobile
- Connecting line between steps
- Framer Motion stagger animation

---

### QualitySection
- Clean light background
- Certifications list (FSSAI, RCMC, IEC, APEDA, GST)
- CTA: "Discuss Your Requirements" → `/contact`

---

### GlobalTrade
- Dark section with world map or global image
- Bold headline + description
- No fabricated country lists

---

### FAQ
- Accessible accordion (`<details>` / Framer Motion)
- Data from `src/data/faqs.ts`
- Keyboard accessible (Enter/Space to toggle)
- ARIA attributes: `aria-expanded`, `aria-controls`

---

### ContactCTA
- Bottom-of-page CTA strip
- "Let's Start a Conversation"
- Two buttons: "Request a Quote" + "View Our Products"

---

## Product Components (`src/components/products/`)

### ProductCard
```tsx
<ProductCard product={product} onEnquire={handleEnquire} />
```
- Image, name, category badge, short description
- "Enquire About Product" CTA
- Hover: card elevation + image scale

### ProductGrid
```tsx
<ProductGrid products={filteredProducts} />
```
- Responsive grid (1 → 2 → 3 → 4 cols)
- Empty state when no products match filters

### ProductFilters
```tsx
<ProductFilters
  categories={categories}
  activeCategory={active}
  onCategoryChange={setActive}
  searchQuery={query}
  onSearchChange={setQuery}
/>
```
- Category filter tabs
- Search input with debounce
- Clears gracefully

---

## Contact Components (`src/components/contact/`)

### EnquiryForm
```tsx
<EnquiryForm preselectedProduct="cumin-seeds" />
```
- All fields with Zod validation
- Loading, success, error states
- Submits to `/api/enquiries`
- Accessible error messages

**Props:**
| Prop | Type | Description |
|---|---|---|
| `preselectedProduct` | `string` | Pre-fill product dropdown |

---

## Data Structures (`src/types/product.ts`)

### Product Interface
```ts
interface Product {
  id: string
  name: string
  slug: string
  category: ProductCategory
  shortDescription: string
  fullDescription?: string
  image: string
  images?: string[]
  available: boolean
  tags?: string[]
}

type ProductCategory =
  | 'whole-spices'
  | 'spice-powders'
  | 'seeds'
  | 'nuts-other'
```

---

## Validation Schemas (`src/lib/validations.ts`)

### Enquiry Form Schema (Zod)
```ts
const enquirySchema = z.object({
  fullName: z.string().min(2).max(100),
  companyName: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  country: z.string().min(2),
  product: z.string().min(1),
  quantity: z.string().optional(),
  packaging: z.string().optional(),
  destinationPort: z.string().optional(),
  requirements: z.string().max(1000).optional(),
})
```

---

## Site Configuration (`src/config/site.ts`)

```ts
export const siteConfig = {
  name: 'FEELEXIM',
  tagline: 'India to the World',
  description: '...',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://feelexim.com',
  email: 'info@feelexim.com',
  phone: '+91 XXXXX XXXXX',
  location: 'India',
  social: {
    linkedin: 'https://linkedin.com/company/feelexim',
    instagram: 'https://instagram.com/feelexim',
    facebook: '',
  },
  navLinks: [...],
  footerLinks: {...},
}
```

---

## Animation Variants (Framer Motion)

Reusable variants in `src/lib/utils.ts`:

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}
```

Use with `useInView` or Framer Motion `whileInView` for scroll reveals.

---

## Tailwind Custom Classes

Defined in `globals.css`:

```css
.glass-card { /* glassmorphism card */ }
.glass-nav  { /* sticky nav glass */ }
.section-dark  { /* navy section */ }
.section-light { /* white section */ }
.text-gold { color: #D6B574; }
.bg-navy   { background: #0B1424; }
.eyebrow   { /* uppercase gold label */ }
```
