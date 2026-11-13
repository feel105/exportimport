import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { localeHref } from '@/i18n/href'
import { buildPageMetadata } from '@/lib/metadata'
import { getLocaleFromParams } from '@/i18n/server'

interface Certification {
  name: string
  fullName: string
  purpose: string
}

interface Protocol {
  title: string
  desc: string
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.quality.meta' })

  return buildPageMetadata({
    locale,
    path: '/quality-compliance',
    title: t('title'),
    description: t('description'),
  })
}

export default async function QualityCompliancePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'pages.quality' })
  const certifications = t.raw('certifications') as Certification[]
  const protocols = t.raw('protocols') as Protocol[]

  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 w-full">
      <div className="container-xl space-y-20 lg:space-y-32 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.14] text-xs font-bold text-gold tracking-wider uppercase">
            <ShieldCheck size={14} className="text-gold" />
            <span>{t('eyebrow')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            {t('heading')}
          </h1>
          <p className="text-slate text-sm sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto pt-1">
            {t('description')}
          </p>
        </div>

        <div className="glass-card !rounded-2xl p-8 sm:p-10 lg:p-12 space-y-8 shadow-2xl">
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {t('registrationsTitle')}
              </h2>
              <p className="text-slate text-xs sm:text-sm mt-0.5">
                {t('registrationsSubtitle')}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold">
              <Award size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 w-full">
            {certifications.map((certification) => (
              <div
                key={certification.name}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-gold/30 transition-all flex flex-col justify-between shadow-inner"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black text-gold">{certification.name}</span>
                    <span className="glow-indicator-green !w-2 !h-2" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-2 leading-snug">
                    {certification.fullName}
                  </h3>
                  <p className="text-slate text-xs leading-relaxed">{certification.purpose}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 italic pt-1">{t('note')}</p>
        </div>

        <div className="space-y-8 lg:space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {t('protocolsTitle')}
            </h2>
            <p className="text-slate text-xs sm:text-sm lg:text-base">
              {t('protocolsSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
            {protocols.map((protocol) => (
              <div
                key={protocol.title}
                className="glass-card !rounded-2xl p-6 sm:p-7 space-y-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">{protocol.title}</h3>
                </div>
                <p className="text-slate text-xs sm:text-sm leading-relaxed pl-7">
                  {protocol.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card !rounded-2xl p-8 sm:p-12 lg:p-14 text-center border-gold/30 shadow-[0_24px_70px_rgba(224,160,69,0.15)] relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(224, 142, 69, 0.16) 0%, transparent 65%)',
              filter: 'blur(75px)',
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              {t('ctaHeading')}
            </h2>
            <p className="text-slate text-xs sm:text-sm lg:text-base leading-relaxed">
              {t('ctaDescription')}
            </p>
            <div className="pt-2">
              <Link
                href={localeHref(locale, '/contact')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all"
              >
                <span>{t('ctaButton')}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
