export type ProductCategory = 'whole-spices' | 'spice-powders' | 'seeds' | 'nuts-other'

export interface Product {
  id: string
  name: string
  slug: string
  category: ProductCategory
  categoryLabel: string
  shortDescription: string
  fullDescription?: string
  image: string
  available: boolean
  tags?: string[]
}

export interface ProductCategory_Meta {
  id: ProductCategory
  label: string
  description: string
  icon: string
}
