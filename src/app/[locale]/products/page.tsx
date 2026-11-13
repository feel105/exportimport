import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getTranslations } from 'next-intl/server'
import type {
  LocalizedProduct,
  LocalizedProductCategory,
  ProductCategory,
} from '@/types/product'
import { ProductCatalog } from '@/components/products/ProductCatalog'
import {
  getLocalizedProductCategories,
  getLocalizedProducts,
} from '@/lib/localized-products'
import { buildPageMetadata } from '@/lib/metadata'
import { getLocaleFromParams } from '@/i18n/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.products.meta' })

  return buildPageMetadata({
    locale,
    path: '/products',
    title: t('title'),
    description: t('description'),
  })
}

function ProductsCatalogContent({
  searchParams,
  products,
  categories,
}: {
  searchParams: Promise<{ category?: string }>
  products: LocalizedProduct[]
  categories: LocalizedProductCategory[]
}) {
  return (
    <ProductsCatalogData
      searchParams={searchParams}
      products={products}
      categories={categories}
    />
  )
}

async function ProductsCatalogData({
  searchParams,
  products,
  categories,
}: {
  searchParams: Promise<{ category?: string }>
  products: LocalizedProduct[]
  categories: LocalizedProductCategory[]
}) {
  const params = await searchParams
  const initialCategory = (params.category as ProductCategory | 'all') || 'all'

  return (
    <ProductCatalog
      products={products}
      categories={categories}
      initialCategory={initialCategory}
    />
  )
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string }>
}) {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.products' })
  const [products, categories] = await Promise.all([
    getLocalizedProducts(locale),
    getLocalizedProductCategories(locale),
  ])

  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 w-full">
      <div className="container-xl w-full">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16 space-y-5">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>{t('eyebrow')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            {t('heading')}
          </h1>
          <p className="text-slate text-sm sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto pt-1">
            {t('description')}
          </p>
        </div>

        <Suspense
          fallback={
            <div className="glass-card !rounded-2xl p-14 text-center text-slate">
              {t('loading')}
            </div>
          }
        >
          <ProductsCatalogContent
            searchParams={searchParams}
            products={products}
            categories={categories}
          />
        </Suspense>
      </div>
    </div>
  )
}
