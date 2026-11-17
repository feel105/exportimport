export type HeroSlideSource = {
  key: string
  src: string
  hsCode: string
  href: string
}

export type HeroSlide = HeroSlideSource & {
  label: string
  meta: string
  description: string
  specs: string[]
}

export const SLIDE_MS = 5500

export const HERO_SLIDES: HeroSlideSource[] = [
  {
    key: 'whole-spices',
    src: '/home/ships/port-night.jpg',
    hsCode: 'HS 0909',
    href: '/products?category=whole-spices',
  },
  {
    key: 'spice-powders',
    src: '/home/slides/spice-powders.png',
    hsCode: 'HS 0910',
    href: '/products?category=spice-powders',
  },
  {
    key: 'nuts-other',
    src: '/home/slides/sesame.png',
    hsCode: 'HS 0801',
    href: '/products?category=nuts-other',
  },
  {
    key: 'seeds',
    src: '/home/slides/sesame_.jpg',
    hsCode: 'HS 1207',
    href: '/products?category=seeds',
  },
  {
    key: 'tea',
    src: '/home/tea.jpg',
    hsCode: 'HS 0902',
    href: '/products',
  },
  {
    key: 'herbs',
    src: '/home/herbs.jpg',
    hsCode: 'HS 1211',
    href: '/products',
  },
  {
    key: 'agri',
    src: '/home/agri-products.jpg',
    hsCode: 'HS 1209',
    href: '/products?category=nuts-other',
  },
]
