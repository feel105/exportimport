import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { defaultLocale, localeMeta, locales, type Locale } from '@/i18n/config'

interface PageMetadataOptions {
  locale: Locale
  path: string
  title: string
  description: string
  absoluteTitle?: boolean
}

const OG_IMAGE = {
  url: '/liquid_ui_home.png',
  width: 1200,
  height: 630,
  alt: 'FEELEXIM — Indian Spices & Agricultural Products Export',
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const normalizedPath = path === '/' ? '' : path
  const canonical = `${siteConfig.url}/${locale}${normalizedPath}`

  const languages = Object.fromEntries(
    locales.map((item) => [
      localeMeta[item].htmlLang,
      `${siteConfig.url}/${item}${normalizedPath}`,
    ])
  )

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        'x-default': `${siteConfig.url}/${defaultLocale}${normalizedPath}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: localeMeta[locale].ogLocale,
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeMeta[item].ogLocale),
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
