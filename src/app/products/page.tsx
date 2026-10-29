import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ProductCategory } from '@/types/product'
import { products, productCategories } from '@/data/products'
import { ProductCatalog } from '@/components/products/ProductCatalog'

export const metadata: Metadata = {
  title: 'Export Products Catalog',
  description:
    'Explore FEELEXIM export product catalog: Indian whole spices, spice powders, natural seeds, and nuts. Cleaned, sorted, and packaged for international export.',
}

async function ProductsCatalogContent({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams
  const initialCategory = (params.category as ProductCategory | 'all') || 'all'

  return (
    <ProductCatalog
      products={products}
      categories={productCategories}
      initialCategory={initialCategory}
    />
  )
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container-xl">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>EXPORT CATALOG</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Premium Agricultural Products
          </h1>
          <p className="text-slate text-sm sm:text-base leading-relaxed">
            Browse our export-ready commodities sourced from prime agricultural belts across India. Filter by category, search by product name, or enquire for customized specifications.
          </p>
        </div>

        {/* Interactive Product Catalog Container wrapped in Suspense */}
        <Suspense fallback={<div className="glass-card p-12 text-center text-slate">Loading product catalog...</div>}>
          <ProductsCatalogContent searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}
