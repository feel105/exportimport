import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { siteConfig } from '@/config/site'
import { EnquiryForm } from '@/components/contact/EnquiryForm'
import { getLocalizedProducts } from '@/lib/localized-products'
import { buildPageMetadata } from '@/lib/metadata'
import { getLocaleFromParams } from '@/i18n/server'
import type { LocalizedProduct } from '@/types/product'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.contact.meta' })

  return buildPageMetadata({
    locale,
    path: '/contact',
    title: t('title'),
    description: t('description'),
  })
}

function ContactFormWrapper({
  searchParams,
  products,
  loadingText,
}: {
  searchParams: Promise<{ product?: string }>
  products: LocalizedProduct[]
  loadingText: string
}) {
  return (
    <Suspense
      fallback={<div className="glass-card p-12 text-center text-slate">{loadingText}</div>}
    >
      <ContactFormContent searchParams={searchParams} products={products} />
    </Suspense>
  )
}

async function ContactFormContent({
  searchParams,
  products,
}: {
  searchParams: Promise<{ product?: string }>
  products: LocalizedProduct[]
}) {
  const params = await searchParams
  return <EnquiryForm initialProduct={params.product || ''} products={products} />
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ product?: string }>
}) {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.contact' })
  const products = await getLocalizedProducts(locale)

  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 w-full">
      <div className="container-xl space-y-16 lg:space-y-24 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">{t('eyebrow')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            {t('heading')}
          </h1>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto pt-1">
            {t('description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start w-full">
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="glass-card !rounded-2xl p-7 sm:p-9 lg:p-10 space-y-6 shadow-2xl w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-white pb-4 border-b border-white/10">
                {t('directInquiries')}
              </h2>

              <ul className="space-y-5 text-sm sm:text-base">
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 shadow-inner">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">{t('businessEmail')}</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white font-semibold hover:text-gold transition-colors text-sm sm:text-base"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 shadow-inner">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">{t('phone')}</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="text-white font-semibold hover:text-gold transition-colors text-sm sm:text-base"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 shadow-inner">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">{t('location')}</p>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {t('locationValue')}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 shadow-inner">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">{t('responseTime')}</p>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {t('responseValue')}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pt-5 border-t border-white/10 space-y-3">
                <p className="text-xs text-slate font-medium uppercase tracking-wider">
                  {t('exportCompliance')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white font-semibold flex items-center gap-1.5"
                    >
                      <ShieldCheck size={13} className="text-emerald-400" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card !rounded-2xl p-6 sm:p-7 border-white/10 text-xs sm:text-sm text-slate space-y-1.5 shadow-xl">
              <p className="text-white font-bold text-sm">{t('sampleTitle')}</p>
              <p className="leading-relaxed">{t('sampleDescription')}</p>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <ContactFormWrapper
              searchParams={searchParams}
              products={products}
              loadingText={t('loadingForm')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
