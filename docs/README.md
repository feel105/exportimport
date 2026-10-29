# FEELEXIM Website

A production-quality, fully responsive import & export business website for **FEELEXIM**, an Indian export house serving international importers, wholesalers, distributors, and food manufacturers.

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Email**: Nodemailer (configurable)

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/feelexim.git
cd feelexim

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/              # About Us page
│   ├── products/           # Products catalog + detail pages
│   ├── services/           # Services page
│   ├── quality-compliance/ # Quality & Compliance page
│   ├── contact/            # Contact & Quotation page
│   ├── privacy-policy/     # Privacy Policy page
│   ├── terms/              # Terms & Conditions page
│   └── api/enquiries/      # Server-side form handler
├── components/
│   ├── layout/             # Header, Navbar, Footer, MobileMenu
│   ├── home/               # Homepage section components
│   ├── products/           # Product card, grid, filters
│   ├── contact/            # Enquiry form
│   └── ui/                 # Reusable UI primitives
├── config/
│   └── site.ts             # ← Central config: contact, nav, social links
├── data/
│   ├── products.ts         # ← Product catalog data
│   └── faqs.ts             # ← FAQ data
├── lib/
│   ├── utils.ts            # Shared utilities
│   └── validations.ts      # Zod schemas
└── types/
    └── product.ts          # TypeScript interfaces
```

---

## Configuration

### Site Configuration

Edit `src/config/site.ts` to update:
- Business name, tagline, description
- Contact email, phone number
- Social media URLs (LinkedIn, Instagram, Facebook)
- Navigation links
- Company location

### Contact Details

All contact details are centralized in `src/config/site.ts`:
```ts
export const siteConfig = {
  email: 'info@feelexim.com',       // Replace with actual email
  phone: '+91 XXXXX XXXXX',         // Replace with actual phone
  linkedin: 'https://linkedin.com/company/feelexim',
  instagram: 'https://instagram.com/feelexim',
  // ...
}
```

### Logo

1. Place your logo file in `public/logo/` (SVG or PNG recommended)
2. Update the logo path in `src/components/layout/Navbar.tsx`
3. The `LogoPlaceholder` component will be replaced automatically

### Product Catalog

Edit `src/data/products.ts` to add, remove, or update products.  
Each product follows the `Product` interface defined in `src/types/product.ts`.

### FAQ Content

Edit `src/data/faqs.ts` to update questions and answers.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your site's public URL | `https://feelexim.com` |
| `EMAIL_HOST` | SMTP server | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP port | `587` |
| `EMAIL_USER` | SMTP username | `you@gmail.com` |
| `EMAIL_PASS` | SMTP password | `app-password` |
| `EMAIL_FROM` | Sender address | `noreply@feelexim.com` |
| `EMAIL_TO` | Enquiry recipient | `enquiries@feelexim.com` |

> ⚠️ Never commit `.env.local` to version control.

---

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
npx tsc --noEmit     # TypeScript type check
```

---

## Replacing Images

Place images in `public/images/`:

| Image | File | Notes |
|---|---|---|
| Hero background | `public/images/hero-bg.jpg` | Recommended: 1920×1080px |
| About section | `public/images/about.jpg` | Recommended: 800×600px |
| Global trade | `public/images/global-trade.jpg` | Recommended: 1200×600px |
| Product images | `public/images/products/*.jpg` | Recommended: 800×800px (square) |

All images use Next.js `<Image>` component for automatic optimization.

---

## Certifications & Credentials

FEELEXIM holds the following certifications (update this list if changed):
- FSSAI (Food Safety and Standards Authority of India)
- Spice RCMC (Registration cum Membership Certificate)
- IEC (Import Export Code)
- Spices Board Registration
- APEDA Registration
- GST Registration

Do not add certifications to this list without verification.

---

## Deployment

See [deploy.md](./deploy.md) for full deployment instructions covering:
- Vercel (recommended)
- Netlify
- Self-hosted VPS
- Email provider setup

---

## Design System

See [design.md](./design.md) for the complete design system documentation including:
- Color palette
- Typography
- Glass effects
- Animation system
- Component patterns

---

## Project Plan

See [Plan.md](./Plan.md) for the full project plan including:
- Phase breakdown
- Feature checklist
- File structure

---

## Important Notes

- **Do not fabricate** testimonials, statistics, certifications, or company history
- **Do not expose** email credentials or API keys in client-side code
- **Logo**: Never auto-generate or replace the official FEELEXIM logo
- All contact details must be updated in `src/config/site.ts` only

---

## License

Private — All rights reserved. FEELEXIM.
