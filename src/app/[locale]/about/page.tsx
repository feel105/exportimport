import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { siteConfig } from '@/config/site'
import { localeHref } from '@/i18n/href'
import { buildPageMetadata } from '@/lib/metadata'
import { getLocaleFromParams } from '@/i18n/server'

const pillarIcons = [ShieldCheck, Globe, Users, TrendingUp]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.about.meta' })

  return buildPageMetadata({
    locale,
    path: '/about',
    title: t('title'),
    description: t('description'),
  })
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.about' })
  const pillars = t.raw('pillars') as { title: string; desc: string }[]

  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 w-full">
      <div className="container-xl space-y-20 lg:space-y-32 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">{t('eyebrow')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            {t('titleLead')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-gold to-cyan-300">
              {t('titleHighlight')}
            </span>
          </h1>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto pt-1">
            {t('description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch w-full">
          <div className="lg:col-span-7 glass-card !rounded-2xl p-8 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between shadow-2xl w-full">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {t('purposeTitle')}
              </h2>
              <p className="text-slate text-sm sm:text-base leading-relaxed">{t('paragraph1')}</p>
              <p className="text-slate text-sm sm:text-base leading-relaxed">{t('paragraph2')}</p>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={localeHref(locale, '/products')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(56,207,255,0.35)] hover:shadow-[0_0_32px_rgba(56,207,255,0.5)] transition-all flex items-center gap-2"
              >
                <span>{t('exploreCatalog')}</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href={localeHref(locale, '/contact')}
                className="px-7 py-3.5 rounded-xl glass-pill text-white font-semibold text-xs sm:text-sm hover:bg-white/[0.14] transition-all"
              >
                {t('contactDesk')}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 glass-card !rounded-2xl p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-2xl w-full">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-lg font-bold text-white">{t('credentialsTitle')}</span>
                  <p className="text-xs text-slate mt-0.5">{t('credentialsSubtitle')}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-gold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-3 mt-5">
                {siteConfig.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-gold/30 transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-white text-xs sm:text-sm font-semibold">
                      {t('certified', { cert })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate leading-relaxed pt-3 border-t border-white/10">
              {t('complianceNote')}
            </p>
          </div>
        </div>

        <div className="space-y-8 lg:space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {t('commitmentsTitle')}
            </h2>
            <p className="text-slate text-xs sm:text-sm lg:text-base">{t('commitmentsSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[index]
              return (
                <div
                  key={pillar.title}
                  className="glass-card !rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold mb-5 shadow-inner">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-slate text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
