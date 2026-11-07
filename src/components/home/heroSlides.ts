export type HeroSlide = {
  src: string
  label: string
  meta: string
  hsCode: string
  description: string
  specs: string[]
  href: string
}

export const SLIDE_MS = 5500

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: '/home/whole-spices.jpg',
    label: 'Whole Spices',
    meta: 'Machine Cleaned • ASTA',
    hsCode: 'HS 0909',
    description:
      'Cumin, coriander, turmeric finger, black pepper, fennel and cloves — machine cleaned, sortex graded and packed to ASTA tolerances.',
    specs: ['Machine Cleaned', 'ASTA Tolerances'],
    href: '/products?category=whole-spices',
  },
  {
    src: '/home/spice-powders.jpg',
    label: 'Spice Powders',
    meta: '60–100 Mesh • Pure',
    hsCode: 'HS 0910',
    description:
      'Turmeric, chilli, coriander, ginger, garlic and onion powders milled to your specified mesh, colour value and heat level.',
    specs: ['60–100 Mesh', 'No Additives'],
    href: '/products?category=spice-powders',
  },
  {
    src: '/home/nuts.jpg',
    label: 'Nuts & Dry Fruits',
    meta: 'Export Grade • Assorted',
    hsCode: 'HS 0801',
    description:
      'Export-grade assorted nuts and dry fruits sourced to buyer specification, with complete food-safety documentation on request.',
    specs: ['Export Grade', 'Buyer Specification'],
    href: '/products?category=nuts-other',
  },
  {
    src: '/home/seeds.jpg',
    label: 'Seeds',
    meta: 'Sortex 99.8% • Bulk',
    hsCode: 'HS 1207',
    description:
      'Sesame, flax, chia, basil, kalonji, mustard and quinoa — laser cleaned and sortexed to 99.8% purity for bulk buyers.',
    specs: ['Sortex 99.8%', 'Bulk Packing'],
    href: '/products?category=seeds',
  },
  {
    src: '/home/tea.jpg',
    label: 'Tea',
    meta: 'Single Origin • Bulk',
    hsCode: 'HS 0902',
    description:
      'Single-origin Indian teas selected for bright liquor, clean aroma and consistent batch-to-batch strength.',
    specs: ['Single Origin', 'Bulk / Retail'],
    href: '/products',
  },
  {
    src: '/home/herbs.jpg',
    label: 'Herbs',
    meta: 'Air-Dried • Aromatic',
    hsCode: 'HS 1211',
    description:
      'Mint, tulsi and moringa leaves, air-dried and hygienically processed to retain natural colour, aroma and potency.',
    specs: ['Air-Dried', 'Aromatic'],
    href: '/products',
  },
  {
    src: '/home/agri-products.jpg',
    label: 'Agri Products',
    meta: 'Farm Direct • FOB / CIF',
    hsCode: 'HS 1209',
    description:
      'Farm-direct agricultural commodities and food ingredients for processors, importers and bulk packers worldwide.',
    specs: ['Farm Direct', 'FOB / CIF'],
    href: '/products?category=nuts-other',
  },
]
