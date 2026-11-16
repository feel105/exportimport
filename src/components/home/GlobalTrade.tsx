import { getTranslations } from 'next-intl/server'
import { Anchor, Navigation, ShieldCheck, Globe2 } from 'lucide-react'

interface Lane {
  region: string
  ports: string
  days: string
  status: string
}

interface Pillar {
  title: string
  desc: string
}

const pillarIcons = [Anchor, Navigation, ShieldCheck]
const pillarColors = ['text-gold', 'text-cyan-accent', 'text-emerald-accent']

export default async function GlobalTrade() {
  const t = await getTranslations('globalTrade')
  const lanes = t.raw('lanes') as Lane[]
  const pillars = t.raw('pillars') as Pillar[]

  return (
    <section
      className="w-full border-b border-hairline py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-navy-deep/60"
      aria-labelledby="global-heading"
    >
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12 relative z-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-cyan-accent tracking-wide">
            <Globe2 size={13} className="text-cyan-accent" />
            <span className="mono-tag text-cyan-accent">{t('eyebrow')}</span>
          </div>
          <h2
            id="global-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
          >
            {t('heading')}
          </h2>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 w-full">
          {lanes.map(({ region, ports, days, status }) => (
            <div
              key={region}
              className="p-5 sm:p-6 rounded-2xl border border-hairline bg-white/[0.02] hover:bg-white/[0.05] hover:border-hairline-light transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="mono-tag text-[10px] text-slate-400 font-mono">
                    {status}
                  </span>
                  <span className="text-emerald-400 font-mono font-bold text-xs">{days}</span>
                </div>
                <h3 className="text-base font-bold text-white">{region}</h3>
                <p className="text-slate-400 text-xs font-mono leading-relaxed">{ports}</p>
              </div>

              <div className="pt-3 border-t border-hairline flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{t('terms')}</span>
                <span className="text-white font-bold">{t('gateIn')}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-5 rounded-2xl border border-hairline bg-white/[0.02]">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index]
            return (
              <div key={pillar.title} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-hairline flex items-center justify-center text-gold flex-shrink-0">
                  <Icon size={16} className={pillarColors[index]} />
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm font-bold">{pillar.title}</p>
                  <p className="text-[11px] text-slate-400">{pillar.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
