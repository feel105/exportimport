import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Anchor, FileCheck2, FlaskConical, Package, Search, ShieldCheck } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { localeHref } from '@/i18n/href'
import { buildPageMetadata } from '@/lib/metadata'
import { getLocaleFromParams } from '@/i18n/server'

const serviceIcons = [Search, FlaskConical, Package, FileCheck2, Anchor, ShieldCheck]

interface ServiceItem {
  title: string
  desc: string
  highlights: string[]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.services.meta' })

  return buildPageMetadata({
    locale,
    path: '/services',
    title: t('title'),
    description: t('description'),
  })
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.services' })
  const services = t.raw('items') as ServiceItem[]

  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 w-full">
      <div className="container-xl space-y-20 lg:space-y-32 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>{t('eyebrow')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            {t('heading')}
          </h1>
          <p className="text-slate text-sm sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto pt-1">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 w-full">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <div
                key={service.title}
                className="glass-card !rounded-2xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold mb-6 shadow-inner">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-slate text-xs sm:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="glass-card !rounded-2xl p-8 sm:p-12 lg:p-14 text-center border-gold/30 shadow-[0_24px_70px_rgba(224,160,69,0.15)] relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(224, 142, 69, 0.16) 0%, transparent 65%)',
              filter: 'blur(75px)',
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              {t('ctaHeading')}
            </h2>
            <p className="text-slate text-base sm:text-lg leading-relaxed">
              {t('ctaDescription')}
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
              <Link
                href={localeHref(locale, '/contact')}
                className="px-9 py-4.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-base shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all flex items-center gap-2.5"
              >
                <span>{t('ctaPrimary')}</span>
                <ArrowRight size={17} />
              </Link>
              <Link
                href={localeHref(locale, '/products')}
                className="px-9 py-4.5 rounded-2xl glass-pill text-white font-semibold text-base hover:bg-white/[0.14] transition-all"
              >
                {t('ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
