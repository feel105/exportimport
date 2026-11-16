import type { Metadata } from 'next'
import { getMessages, getTranslations } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import '../globals.css'
import { siteConfig } from '@/config/site'
import { localeMeta } from '@/i18n/config'
import { routing } from '@/i18n/routing'
import { getLocaleFromParams } from '@/i18n/server'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t('siteTitle'),
      template: `%s | ${siteConfig.name}`,
    },
    description: t('siteDescription'),
    keywords: [
      'Indian spices export',
      'spice exporter India',
      'cumin seeds export',
      'turmeric export',
      'agricultural products India',
      'import export India',
      'FEELEXIM',
      'Indian food export',
      'seeds export India',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: 'website',
      locale: localeMeta[locale].ogLocale,
      url: `${siteConfig.url}/${locale}`,
      title: t('siteTitle'),
      description: t('siteDescription'),
      siteName: siteConfig.name,
      images: [
        {
          url: '/liquid_ui_home.png',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('siteTitle'),
      description: t('siteDescription'),
      images: ['/liquid_ui_home.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-icon.png',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const locale = await getLocaleFromParams(params)
  const messages = await getMessages()

  return (
    <html lang={localeMeta[locale].htmlLang} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var k='exim.theme';var s=localStorage.getItem(k);var d=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',d);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();",
          }}
        />
      </head>
      <body className="w-full min-h-screen overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main id="main-content" className="w-full min-h-screen overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
