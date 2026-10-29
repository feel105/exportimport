# FEELEXIM — Content & Customization Guide

This file explains how to update all content, images, contact details, products, and branding.

---

## 1. Contact Details & Social Links

**File:** `src/config/site.ts`

Update these values before going live:

```ts
email: 'info@feelexim.com'       // Business email
phone: '+91 98795 52619'         // Business phone / WhatsApp
linkedin: 'https://linkedin.com/company/feelexim'
instagram: 'https://instagram.com/feelexim'
facebook: 'https://facebook.com/feelexim'   // optional
location: 'India'
```

These values automatically populate:
- TopBar (email + phone + social icons)
- Footer (contact column)
- Contact page (left column)
- JSON-LD structured data

---

## 2. Logo

**Folder:** `public/logo/`

Steps:
1. Copy your logo file to `public/logo/feelexim-logo.svg` (or `.png`)
2. Open `src/components/layout/Navbar.tsx`
3. Replace the `<LogoPlaceholder>` component with:
   ```tsx
   import Image from 'next/image'
   <Image src="/logo/feelexim-logo.svg" alt="FEELEXIM" width={160} height={48} priority />
   ```
4. Repeat in `src/components/layout/Footer.tsx`

**Logo guidelines:**
- Preferred format: SVG (scales perfectly)
- PNG: Minimum 400px wide, transparent background
- Do NOT distort or recolor the official logo

---

## 3. Products

**File:** `src/data/products.ts`

Each product object:
```ts
{
  id: 'cumin-seeds',
  name: 'Cumin Seeds',
  slug: 'cumin-seeds',
  category: 'whole-spices',
  shortDescription: 'Premium Indian cumin seeds, sourced for consistent quality.',
  image: '/images/products/cumin-seeds.jpg',
  available: true,
}
```

**To add a product:**
1. Add an entry to `src/data/products.ts`
2. Place a product image in `public/images/products/`
3. The product automatically appears in the catalog and filters

**Product image specs:**
- Format: JPG or WebP
- Size: 800×800px (square)
- Background: White or very light neutral
- Naming: Match the product `id` (e.g., `cumin-seeds.jpg`)

---

## 4. FAQ Content

**File:** `src/data/faqs.ts`

```ts
{
  question: 'What products does FEELEXIM export?',
  answer: 'We export a range of Indian-origin...',
}
```

Add, remove, or edit entries freely.

---

## 5. Hero Section Copy

**File:** `src/components/home/Hero.tsx`

Editable strings near the top of the component:
```tsx
const eyebrow = 'INDIA TO THE WORLD'
const headline = 'Connecting Indian Quality to Global Markets.'
const subtext = 'Your trusted sourcing partner...'
```

---

## 6. Hero & Section Images

Replace placeholder images with high-quality photos:

| Section | File Path |
|---|---|
| Hero background | `public/images/hero-bg.jpg` |
| About section | `public/images/about.jpg` |
| Global Trade | `public/images/global-trade.jpg` |
| Quality section | `public/images/quality.jpg` |

**Image specs:**
- Hero: 1920×1080px, JPG, < 300KB (compress with [Squoosh](https://squoosh.app))
- About: 800×600px, JPG
- Always use descriptive `alt` text

---

## 7. Certifications

**File:** `src/components/home/QualitySection.tsx`

Update the certifications list:
```tsx
const certifications = [
  { name: 'FSSAI', description: 'Food Safety and Standards Authority of India' },
  { name: 'Spice RCMC', description: 'Registration cum Membership Certificate' },
  { name: 'IEC', description: 'Import Export Code' },
  { name: 'APEDA', description: 'Agricultural & Processed Food Products Export' },
  { name: 'GST', description: 'Goods and Services Tax Registration' },
]
```

**Only include certifications you actually hold.**

---

## 8. Navigation Links

**File:** `src/config/site.ts`

```ts
navLinks: [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Quality & Compliance', href: '/quality-compliance' },
  { label: 'Contact', href: '/contact' },
]
```

---

## 9. SEO Metadata

**File:** `src/app/layout.tsx` and each page's `metadata` export.

Per-page example:
```ts
export const metadata: Metadata = {
  title: 'FEELEXIM — Indian Spices & Agricultural Products Export',
  description: 'FEELEXIM is an Indian export house ...',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/images/og-image.jpg'],
  },
}
```

**OG Image:** Create `public/images/og-image.jpg` (1200×630px)

---

## 10. Privacy Policy & Terms

**Files:**
- `src/app/privacy-policy/page.tsx`
- `src/app/terms/page.tsx`

These pages contain placeholder legal text. **Replace with actual legal documents** reviewed by a legal professional before going live.

---

## 11. Email Configuration

**File:** `.env.local` (never commit this file)

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@feelexim.com
EMAIL_TO=enquiries@feelexim.com
```

See [deploy.md](./deploy.md) for email provider options.

---

## 12. Favicon

Replace `public/favicon.ico` and `public/icon.png` with the official FEELEXIM favicon.

Recommended sizes:
- `favicon.ico` — 32×32px
- `icon.png` — 512×512px
- `apple-icon.png` — 180×180px
