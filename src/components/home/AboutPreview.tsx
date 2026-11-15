import Link from 'next/link'
import { getLocale, getTranslations } from 'next-intl/server'
import { ArrowRight, CheckCircle, Globe2, ShieldCheck, Award, Globe, Globe2Icon, GlobeCheck, GlobeCheckIcon, GlobeCodeIcon, GlobeOff, GlobeX } from 'lucide-react'
import { localeHref } from '@/i18n/href'

export default async function AboutPreview() {
  const t = await getTranslations('aboutPreview')
  const locale = await getLocale()
  const highlights = t.raw('highlights') as string[]

  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy"
      aria-labelledby="about-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center w-full">
          <div className="lg:col-span-5 relative w-full">
            <div className="rounded-2xl border border-hairline bg-white/[0.02] p-6 sm:p-7 lg:p-8 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between pb-3.5 border-b border-hairline">
                <div className="flex items-center gap-2">
                  <span className="glow-indicator-green" />
                  <span className="mono-tag text-white text-xs font-bold">
                    {t('profile')}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-hairline flex items-center justify-center text-gold shadow-sm">
                  <Award size={15} />
                </div>
              </div>

              <div className="rounded-xl p-6 sm:p-7 bg-[#0f1723] border border-hairline text-center space-y-2.5 shadow-inner">
                <GlobeCheckIcon size={36} className="mx-auto text-emerald-400" />
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {t('bridgeTitle')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                  {t('bridgeDescription')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-hairline">
                  <p className="text-slate-400 text-[10px]">{t('originLabel')}</p>
                  <p className="text-white font-bold mt-0.5 text-xs">{t('originValue')}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-hairline">
                  <p className="text-slate-400 text-[10px]">{t('qualityLabel')}</p>
                  <p className="text-emerald-400 font-bold mt-0.5 text-xs">
                    {t('qualityValue')}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-2 sm:-right-3 glass-pill px-4 py-2 flex items-center gap-2 shadow-2xl border-hairline">
              <ShieldCheck size={15} className="text-emerald-400" />
              <span className="text-xs font-mono font-bold text-white">{t('registered')}</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 sm:space-y-6 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
              <span className="mono-tag text-gold">{t('eyebrow')}</span>
            </div>

            <div className="space-y-3">
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
              >
                {t('titleLead')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-gold to-cyan-300">
                  {t('titleHighlight')}
                </span>
              </h2>

              <p className="text-slate text-xs sm:text-sm lg:text-base leading-relaxed pt-0.5">
                {t('description')}
              </p>
            </div>

            <ul className="space-y-2.5 pt-1">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex items-center gap-3">
              <Link
                href={localeHref(locale, '/about')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white border border-hairline font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{t('learnMore')}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
