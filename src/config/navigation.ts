export interface NavLinkItem {
  labelKey: string
  descriptionKey?: string
  href: string
}

export interface NavColumn {
  headingKey: string
  items: NavLinkItem[]
}

export interface NavPanel {
  overview: NavLinkItem
  columns: NavColumn[]
  footer?: NavLinkItem
}

export interface NavItem {
  labelKey: string
  href: string
  panel?: NavPanel
}

export const navigation: NavItem[] = [
  { labelKey: 'home', href: '/' },
  { labelKey: 'about', href: '/about' },
  {
    labelKey: 'products',
    href: '/products',
    panel: {
      overview: {
        labelKey: 'panels.products.overviewLabel',
        descriptionKey: 'panels.products.overviewDescription',
        href: '/products',
      },
      columns: [
        {
          headingKey: 'panels.products.commodities',
          items: [
            {
              labelKey: 'panels.products.wholeSpices',
              descriptionKey: 'panels.products.wholeSpicesDesc',
              href: '/products?category=whole-spices',
            },
            {
              labelKey: 'panels.products.spicePowders',
              descriptionKey: 'panels.products.spicePowdersDesc',
              href: '/products?category=spice-powders',
            },
            {
              labelKey: 'panels.products.seeds',
              descriptionKey: 'panels.products.seedsDesc',
              href: '/products?category=seeds',
            },
            {
              labelKey: 'panels.products.nuts',
              descriptionKey: 'panels.products.nutsDesc',
              href: '/products?category=nuts-other',
            },
          ],
        },
      ],
      footer: {
        labelKey: 'panels.products.footerLabel',
        descriptionKey: 'panels.products.footerDescription',
        href: '/contact',
      },
    },
  },
  {
    labelKey: 'services',
    href: '/services',
    panel: {
      overview: {
        labelKey: 'panels.services.overviewLabel',
        descriptionKey: 'panels.services.overviewDescription',
        href: '/services',
      },
      columns: [
        {
          headingKey: 'panels.services.coordination',
          items: [
            {
              labelKey: 'panels.services.customSourcing',
              descriptionKey: 'panels.services.customSourcingDesc',
              href: '/services',
            },
            {
              labelKey: 'panels.services.qualityTesting',
              descriptionKey: 'panels.services.qualityTestingDesc',
              href: '/services',
            },
            {
              labelKey: 'panels.services.packaging',
              descriptionKey: 'panels.services.packagingDesc',
              href: '/services',
            },
          ],
        },
        {
          headingKey: 'panels.services.exportDesk',
          items: [
            {
              labelKey: 'panels.services.documentation',
              descriptionKey: 'panels.services.documentationDesc',
              href: '/services',
            },
            {
              labelKey: 'panels.services.freight',
              descriptionKey: 'panels.services.freightDesc',
              href: '/services',
            },
            {
              labelKey: 'panels.services.postDispatch',
              descriptionKey: 'panels.services.postDispatchDesc',
              href: '/services',
            },
          ],
        },
      ],
      footer: {
        labelKey: 'panels.services.footerLabel',
        descriptionKey: 'panels.services.footerDescription',
        href: '/contact',
      },
    },
  },
  {
    labelKey: 'quality',
    href: '/quality-compliance',
    panel: {
      overview: {
        labelKey: 'panels.quality.overviewLabel',
        descriptionKey: 'panels.quality.overviewDescription',
        href: '/quality-compliance',
      },
      columns: [
        {
          headingKey: 'panels.quality.registrations',
          items: [
            {
              labelKey: 'panels.quality.fssai',
              descriptionKey: 'panels.quality.fssaiDesc',
              href: '/quality-compliance',
            },
            {
              labelKey: 'panels.quality.rcmc',
              descriptionKey: 'panels.quality.rcmcDesc',
              href: '/quality-compliance',
            },
            {
              labelKey: 'panels.quality.iec',
              descriptionKey: 'panels.quality.iecDesc',
              href: '/quality-compliance',
            },
            {
              labelKey: 'panels.quality.apeda',
              descriptionKey: 'panels.quality.apedaDesc',
              href: '/quality-compliance',
            },
            {
              labelKey: 'panels.quality.gst',
              descriptionKey: 'panels.quality.gstDesc',
              href: '/quality-compliance',
            },
          ],
        },
        {
          headingKey: 'panels.quality.protocols',
          items: [
            {
              labelKey: 'panels.quality.moisture',
              href: '/quality-compliance',
            },
            {
              labelKey: 'panels.quality.sortex',
              href: '/quality-compliance',
            },
            {
              labelKey: 'panels.quality.residue',
              href: '/quality-compliance',
            },
            {
              labelKey: 'panels.quality.phytosanitary',
              href: '/quality-compliance',
            },
          ],
        },
      ],
      footer: {
        labelKey: 'panels.quality.footerLabel',
        descriptionKey: 'panels.quality.footerDescription',
        href: '/contact',
      },
    },
  },
  { labelKey: 'contact', href: '/contact' },
]
