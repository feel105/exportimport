import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { siteConfig } from '@/config/site'
import { localeHref } from '@/i18n/href'
import { buildPageMetadata } from '@/lib/metadata'
import { getLocaleFromParams } from '@/i18n/server'

interface LegalSection {
  title: string
  paragraphs: string[]
  list?: string[]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.privacy.meta' })

  return buildPageMetadata({
    locale,
    path: '/privacy-policy',
    title: t('title'),
    description: t('description'),
  })
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.privacy' })
  const sections = t.raw('sections') as LegalSection[]

  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
      <div className="container-xl w-full space-y-12">
        <div>
          <Link
            href={localeHref(locale, '/')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} /> {t('back')}
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <Shield size={18} className="text-gold" />
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              {t('legalDocument')}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {t('title')}
          </h1>
          <p className="text-slate text-sm mt-2">{t('lastUpdated')}</p>
        </div>

        <div className="glass-card !rounded-2xl p-8 sm:p-12 lg:p-14 space-y-8 text-sm sm:text-base text-slate leading-relaxed shadow-2xl">
          {sections.map((section, sectionIndex) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-lg font-bold text-white">{section.title}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraph}>
                  {t(`sections.${sectionIndex}.paragraphs.${paragraphIndex}`, {
                    name: siteConfig.name,
                    email: siteConfig.email,
                  })}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  {section.list.map((item, itemIndex) => (
                    <li key={item}>{t(`sections.${sectionIndex}.list.${itemIndex}`)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
