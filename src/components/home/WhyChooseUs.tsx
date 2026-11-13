import { getTranslations } from 'next-intl/server'
import { Tag, Package, Shield, FileCheck, MessageSquare, Search } from 'lucide-react'

const icons = [Tag, Package, Shield, FileCheck, MessageSquare, Search]

interface Feature {
  title: string
  desc: string
}

export default async function WhyChooseUs() {
  const t = await getTranslations('whyChooseUs')
  const features = t.raw('features') as Feature[]

  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy"
      aria-labelledby="why-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">{t('eyebrow')}</span>
          </div>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
          >
            {t('heading')}
          </h2>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
          {features.map(({ title, desc }, index) => {
            const Icon = icons[index]
            return (
              <div
                key={title}
                className="p-6 sm:p-7 rounded-2xl border border-hairline bg-white/[0.02] hover:bg-white/[0.05] hover:border-hairline-light flex flex-col justify-between transition-all duration-300 space-y-5 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-hairline flex items-center justify-center text-white group-hover:bg-gold group-hover:text-navy transition-all">
                      <Icon size={18} />
                    </div>
                    <span className="mono-tag text-[10px] text-slate-500 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                      {title}
                    </h3>
                    <p className="text-slate text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-hairline text-[11px] font-mono text-slate-500 group-hover:text-gold transition-colors">
                  {t('verifiedStandard')}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
