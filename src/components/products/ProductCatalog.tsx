'use client'

import { useState, useMemo } from 'react'
import { Product, ProductCategory, ProductCategory_Meta } from '@/types/product'
import { ProductFilters } from './ProductFilters'
import { ProductGrid } from './ProductGrid'

interface ProductCatalogProps {
  products: Product[]
  categories: ProductCategory_Meta[]
  initialCategory?: ProductCategory | 'all'
}

export function ProductCatalog({
  products,
  categories,
  initialCategory = 'all',
}: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.tags?.some((tag) => tag.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [products, activeCategory, searchQuery])

  return (
    <div>
      <ProductFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  )
}
