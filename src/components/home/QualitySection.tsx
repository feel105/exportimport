import Link from 'next/link'
import { getLocale, getTranslations } from 'next-intl/server'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { localeHref } from '@/i18n/href'

interface Credential {
  code: string
  name: string
  type: string
  status: string
}

export default async function QualitySection() {
  const t = await getTranslations('qualitySection')
  const locale = await getLocale()
  const credentials = t.raw('credentials') as Credential[]

  return (
    <section
      className="w-full border-b border-hairline py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-navy"
      aria-labelledby="quality-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-white tracking-wide">
            <ShieldCheck size={13} className="text-gold" />
            <span className="mono-tag text-gold">{t('eyebrow')}</span>
          </div>
          <h2
            id="quality-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
          >
            {t('heading')}
          </h2>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start w-full">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate text-xs sm:text-sm lg:text-base leading-relaxed">
              {t('paragraph')}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl border border-hairline bg-white/[0.02]">
                <p className="text-2xl font-black text-white">{t('sortexMetric')}</p>
                <p className="text-xs text-slate-400 mt-1 font-mono uppercase">
                  {t('sortexLabel')}
                </p>
              </div>
              <div className="p-4 rounded-xl border border-hairline bg-white/[0.02]">
                <p className="text-2xl font-black text-white">{t('deskMetric')}</p>
                <p className="text-xs text-slate-400 mt-1 font-mono uppercase">
                  {t('deskLabel')}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={localeHref(locale, '/quality-compliance')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(56,207,255,0.3)] hover:shadow-[0_0_28px_rgba(56,207,255,0.5)] transition-all flex items-center gap-2"
              >
                <span>{t('protocolsButton')}</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href={localeHref(locale, '/contact')}
                className="px-5 py-3 rounded-full bg-white/[0.06] border border-hairline text-white font-semibold text-xs sm:text-sm hover:bg-white/[0.1] transition-all"
              >
                {t('labButton')}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
            {credentials.map((cred) => (
              <div
                key={cred.code}
                className="p-4.5 sm:p-5 rounded-2xl border border-hairline bg-white/[0.02] hover:bg-white/[0.04] hover:border-hairline-light transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="mono-tag text-gold font-bold text-xs">{cred.code}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {cred.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-bold text-white group-hover:text-gold-light transition-colors">
                    {cred.name}
                  </p>
                  <p className="text-slate-400 text-xs font-mono">{cred.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
