export const siteConfig = {
  name: 'FEELEXIM',
  tagline: 'India to the World',
  description:
    'Your trusted sourcing partner for Indian spices, seeds, nuts, and agricultural products. We connect international buyers with reliable Indian suppliers through quality-focused sourcing and export coordination.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://feelexim.com',

  // Contact — update before going live
  email: 'info@feelexim.com',
  phone: '+91 98795 52619',
  whatsapp: '+91 98795 52619',
  location: 'India',

  // Social — update before going live
  social: {
    linkedin: 'https://linkedin.com/company/feelexim',
    instagram: 'https://instagram.com/feelexim',
    facebook: '',
  },

  // Navigation links
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Quality & Compliance', href: '/quality-compliance' },
    { label: 'Contact', href: '/contact' },
  ],

  // Footer columns
  footerQuickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],

  footerCategories: [
    { label: 'Whole Spices', href: '/products?category=whole-spices' },
    { label: 'Spice Powders', href: '/products?category=spice-powders' },
    { label: 'Seeds', href: '/products?category=seeds' },
    { label: 'Nuts & Agricultural', href: '/products?category=nuts-other' },
  ],

  // Certifications
  certifications: ['FSSAI', 'Spice RCMC', 'IEC', 'APEDA', 'GST'],
}

export type SiteConfig = typeof siteConfig
