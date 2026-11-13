import { getTranslations } from 'next-intl/server'
import type { Locale } from '@/i18n/config'
import { productCategories, products } from '@/data/products'
import type { LocalizedProduct, LocalizedProductCategory } from '@/types/product'

export async function getLocalizedProducts(locale: Locale): Promise<LocalizedProduct[]> {
  const t = await getTranslations({ locale, namespace: 'products' })
  const categoryT = await getTranslations({ locale, namespace: 'productCategories' })

  return products.map((product) => ({
    ...product,
    name: t(`${product.slug}.name`),
    shortDescription: t(`${product.slug}.description`),
    categoryLabel: categoryT(`${product.category}.label`),
  }))
}

export async function getLocalizedProductCategories(
  locale: Locale
): Promise<LocalizedProductCategory[]> {
  const t = await getTranslations({ locale, namespace: 'productCategories' })

  return productCategories.map((category) => ({
    ...category,
    label: t(`${category.id}.label`),
    description: t(`${category.id}.description`),
  }))
}
