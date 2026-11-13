export type ProductCategory = 'whole-spices' | 'spice-powders' | 'seeds' | 'nuts-other'

export interface Product {
  id: string
  slug: string
  category: ProductCategory
  image: string
  available: boolean
  tags?: string[]
}

export interface LocalizedProduct extends Product {
  name: string
  categoryLabel: string
  shortDescription: string
}

export interface ProductCategory_Meta {
  id: ProductCategory
  icon: string
}

export interface LocalizedProductCategory extends ProductCategory_Meta {
  label: string
  description: string
}
