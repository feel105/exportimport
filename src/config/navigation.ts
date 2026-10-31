export interface NavLinkItem {
  label: string
  description?: string
  href: string
}

export interface NavColumn {
  heading: string
  items: NavLinkItem[]
}

export interface NavPanel {
  overview: NavLinkItem
  columns: NavColumn[]
  footer?: NavLinkItem
}

export interface NavItem {
  label: string
  href: string
  panel?: NavPanel
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    panel: {
      overview: {
        label: 'Browse Full Catalog',
        description:
          "Machine cleaned, optically sorted, and packed to comply with your destination market's statutory food safety import standards.",
        href: '/products',
      },
      columns: [
        {
          heading: 'COMMODITIES',
          items: [
            {
              label: 'Whole Spices',
              description: 'Machine Cleaned • ASTA Tolerances',
              href: '/products?category=whole-spices',
            },
            {
              label: 'Spice Powders',
              description: '60 - 100 Mesh • Pure & Unadulterated',
              href: '/products?category=spice-powders',
            },
            {
              label: 'Seeds & Grains',
              description: 'Laser Cleaned • Purity 99.8%+',
              href: '/products?category=seeds',
            },
            {
              label: 'Nuts & Commodities',
              description: 'Direct Sourcing • Export Graded',
              href: '/products?category=nuts-other',
            },
          ],
        },
      ],
      footer: {
        label: 'Request Quotation',
        description:
          'Export price lists & container loading slots now active for EU, GCC, UK & Americas.',
        href: '/contact',
      },
    },
  },
  {
    label: 'Services',
    href: '/services',
    panel: {
      overview: {
        label: 'Comprehensive Export Services',
        description:
          'From initial specification analysis to container arrival at your port, we manage every critical milestone of the Indian agricultural export supply chain.',
        href: '/services',
      },
      columns: [
        {
          heading: 'END-TO-END COORDINATION',
          items: [
            {
              label: 'Custom Product Sourcing',
              description: 'Regional farm origin mapping',
              href: '/services',
            },
            {
              label: 'Quality Testing & Grade Analysis',
              description: 'Aflatoxin & pesticide screening',
              href: '/services',
            },
            {
              label: 'Custom Packaging & Private Label',
              description: '25kg & 50kg PP / HDPE / Jute bags',
              href: '/services',
            },
          ],
        },
        {
          heading: 'EXPORT DESK',
          items: [
            {
              label: 'Statutory Export Documentation',
              description: 'Phytosanitary Certificate',
              href: '/services',
            },
            {
              label: 'Freight & Container Logistics',
              description: 'FOB, CIF, and CFR trade terms',
              href: '/services',
            },
            {
              label: 'Post-Dispatch Support & Continuity',
              description: 'Couriered original documents',
              href: '/services',
            },
          ],
        },
      ],
      footer: {
        label: 'Request Custom Sourcing',
        description:
          'Have a unique commodity requirement, non-standard moisture threshold, or private label packaging request?',
        href: '/contact',
      },
    },
  },
  {
    label: 'Quality & Compliance',
    href: '/quality-compliance',
    panel: {
      overview: {
        label: 'Quality Assurance & Credentials',
        description:
          'International agricultural trade requires uncompromising compliance. FEELEXIM operates under certified Indian trade licenses and adheres to strict destination food safety regulations.',
        href: '/quality-compliance',
      },
      columns: [
        {
          heading: 'STATUTORY REGISTRATIONS',
          items: [
            { label: 'FSSAI', description: 'Food Safety and Standards Authority of India', href: '/quality-compliance' },
            { label: 'Spice RCMC', description: 'Registration cum Membership Certificate', href: '/quality-compliance' },
            { label: 'IEC', description: 'Import Export Code (DGFT)', href: '/quality-compliance' },
            { label: 'APEDA', description: 'Agricultural & Processed Food Products', href: '/quality-compliance' },
            { label: 'GST', description: 'Goods and Services Tax Registration', href: '/quality-compliance' },
          ],
        },
        {
          heading: 'QUALITY CONTROL PROTOCOLS',
          items: [
            { label: 'Moisture Control', href: '/quality-compliance' },
            { label: 'Sortex Cleaning & Optical Grading', href: '/quality-compliance' },
            { label: 'Pesticide & Chemical Residue Testing', href: '/quality-compliance' },
            { label: 'Phytosanitary & Fumigation Protocol', href: '/quality-compliance' },
          ],
        },
      ],
      footer: {
        label: 'Discuss Compliance Parameters',
        description: 'We align packaging and laboratory protocols to meet regional import regulations worldwide.',
        href: '/contact',
      },
    },
  },
  { label: 'Contact', href: '/contact' },
]
