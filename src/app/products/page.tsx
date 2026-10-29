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
    <div className="pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
      <div className="container-xl">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 lg:mb-20 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>EXPORT CATALOG</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Premium Agricultural Products
          </h1>
          <p className="text-slate text-base sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto pt-2">
            Browse our export-ready commodities sourced from prime agricultural belts across India. Filter by category, search by product name, or enquire for customized specifications.
          </p>
        </div>

        {/* Interactive Product Catalog Container wrapped in Suspense */}
        <Suspense fallback={<div className="glass-card !rounded-3xl p-16 text-center text-slate">Loading product catalog...</div>}>
          <ProductsCatalogContent searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}
