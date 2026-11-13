export const siteConfig = {
  name: 'FEELEXIM',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://feelexim.com',

  email: 'info@feelexim.com',
  phone: '+91 98795 52619',
  whatsapp: '+91 98795 52619',
  location: 'India',

  social: {
    linkedin: 'https://linkedin.com/company/feelexim',
    instagram: 'https://instagram.com/feelexim',
    facebook: '',
  },

  certifications: ['FSSAI', 'RCMC', 'IEC', 'APEDA', 'GST'],
}

export type SiteConfig = typeof siteConfig
