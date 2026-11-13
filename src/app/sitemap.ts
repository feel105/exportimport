import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { products } from '@/data/products'
import { defaultLocale, localeMeta, locales } from '@/i18n/config'

const STATIC_ROUTES = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/products', priority: 0.9 },
  { path: '/services', priority: 0.8 },
  { path: '/quality-compliance', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/privacy-policy', priority: 0.4 },
  { path: '/terms', priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const localizedEntries = (path: string, priority: number): MetadataRoute.Sitemap => {
    const languages = {
      ...Object.fromEntries(
        locales.map((locale) => [
          localeMeta[locale].htmlLang,
          `${siteConfig.url}/${locale}${path}`,
        ])
      ),
      'x-default': `${siteConfig.url}/${defaultLocale}${path}`,
    }

    return locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority,
      alternates: { languages },
    }))
  }

  const staticPages = STATIC_ROUTES.flatMap((route) =>
    localizedEntries(route.path, route.priority)
  )

  const productPages = products.flatMap((product) =>
    localizedEntries(`/products/${product.slug}`, 0.7).map((entry) => ({
      ...entry,
      changeFrequency: 'monthly' as const,
    }))
  )

  return [...staticPages, ...productPages]
}
