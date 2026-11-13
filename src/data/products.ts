import { Product, ProductCategory_Meta } from '@/types/product'

export const productCategories: ProductCategory_Meta[] = [
  { id: 'whole-spices', icon: 'Leaf' },
  { id: 'spice-powders', icon: 'Wind' },
  { id: 'seeds', icon: 'Sprout' },
  { id: 'nuts-other', icon: 'Package' },
]

export const products: Product[] = [
  // Whole Spices
  {
    id: 'cumin-seeds',
    slug: 'cumin-seeds',
    category: 'whole-spices',
    image: '/images/products/cumin-seeds.jpg',
    available: true,
    tags: ['spice', 'whole', 'export-ready'],
  },
  {
    id: 'coriander-seeds',
    slug: 'coriander-seeds',
    category: 'whole-spices',
    image: '/images/products/coriander-seeds.jpg',
    available: true,
    tags: ['spice', 'whole'],
  },
  {
    id: 'turmeric-finger',
    slug: 'turmeric-finger',
    category: 'whole-spices',
    image: '/images/products/turmeric-finger.jpg',
    available: true,
    tags: ['spice', 'whole', 'high-curcumin'],
  },
  {
    id: 'black-pepper',
    slug: 'black-pepper',
    category: 'whole-spices',
    image: '/images/products/black-pepper.jpg',
    available: true,
    tags: ['spice', 'whole'],
  },
  {
    id: 'fennel-seeds',
    slug: 'fennel-seeds',
    category: 'whole-spices',
    image: '/images/products/fennel-seeds.jpg',
    available: true,
    tags: ['spice', 'whole'],
  },
  {
    id: 'fenugreek-seeds',
    slug: 'fenugreek-seeds',
    category: 'whole-spices',
    image: '/images/products/fenugreek-seeds.jpg',
    available: true,
    tags: ['spice', 'whole'],
  },
  {
    id: 'mustard-seeds',
    slug: 'mustard-seeds',
    category: 'whole-spices',
    image: '/images/products/mustard-seeds.jpg',
    available: true,
    tags: ['spice', 'whole'],
  },
  {
    id: 'cloves',
    slug: 'cloves',
    category: 'whole-spices',
    image: '/images/products/cloves.jpg',
    available: true,
    tags: ['spice', 'whole'],
  },

  // Spice Powders
  {
    id: 'moringa-leaf-powder',
    slug: 'moringa-leaf-powder',
    category: 'spice-powders',
    image: '/product/moringa powder.png',
    available: true,
    tags: ['moringa', 'powder', 'superfood', 'organic', 'export-ready'],
  },
  {
    id: 'turmeric-powder',
    slug: 'turmeric-powder',
    category: 'spice-powders',
    image: '/images/products/turmeric-powder.jpg',
    available: true,
    tags: ['powder', 'spice'],
  },
  {
    id: 'red-chilli-powder',
    slug: 'red-chilli-powder',
    category: 'spice-powders',
    image: '/images/products/red-chilli-powder.jpg',
    available: true,
    tags: ['powder', 'spice'],
  },
  {
    id: 'coriander-powder',
    slug: 'coriander-powder',
    category: 'spice-powders',
    image: '/images/products/coriander-powder.jpg',
    available: true,
    tags: ['powder', 'spice'],
  },
  {
    id: 'ginger-powder',
    slug: 'ginger-powder',
    category: 'spice-powders',
    image: '/images/products/ginger-powder.jpg',
    available: true,
    tags: ['powder', 'spice'],
  },
  {
    id: 'garlic-powder',
    slug: 'garlic-powder',
    category: 'spice-powders',
    image: '/images/products/garlic-powder.jpg',
    available: true,
    tags: ['powder', 'spice'],
  },
  {
    id: 'onion-powder',
    slug: 'onion-powder',
    category: 'spice-powders',
    image: '/images/products/onion-powder.jpg',
    available: true,
    tags: ['powder', 'spice'],
  },

  // Seeds
  {
    id: 'sesame-seeds',
    slug: 'sesame-seeds',
    category: 'seeds',
    image: '/images/products/sesame-seeds.jpg',
    available: true,
    tags: ['seed', 'export-ready'],
  },
  {
    id: 'black-sesame-seeds',
    slug: 'black-sesame-seeds',
    category: 'seeds',
    image: '/images/products/black-sesame-seeds.jpg',
    available: true,
    tags: ['seed'],
  },
  {
    id: 'flax-seeds',
    slug: 'flax-seeds',
    category: 'seeds',
    image: '/images/products/flax-seeds.jpg',
    available: true,
    tags: ['seed', 'health'],
  },
  {
    id: 'chia-seeds',
    slug: 'chia-seeds',
    category: 'seeds',
    image: '/images/products/chia-seeds.jpg',
    available: true,
    tags: ['seed', 'health'],
  },
  {
    id: 'basil-seeds',
    slug: 'basil-seeds',
    category: 'seeds',
    image: '/images/products/basil-seeds.jpg',
    available: true,
    tags: ['seed'],
  },
  {
    id: 'kalonji-seeds',
    slug: 'kalonji-seeds',
    category: 'seeds',
    image: '/images/products/kalonji-seeds.jpg',
    available: true,
    tags: ['seed'],
  },
  {
    id: 'quinoa',
    slug: 'quinoa',
    category: 'seeds',
    image: '/images/products/quinoa.jpg',
    available: true,
    tags: ['seed', 'health', 'grain'],
  },

  // Nuts & Other
  {
    id: 'nuts',
    slug: 'nuts',
    category: 'nuts-other',
    image: '/images/products/nuts.jpg',
    available: true,
    tags: ['nuts'],
  },
  {
    id: 'agricultural-commodities',
    slug: 'agricultural-commodities',
    category: 'nuts-other',
    image: '/images/products/agricultural.jpg',
    available: true,
    tags: ['agricultural'],
  },
]

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category)
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
