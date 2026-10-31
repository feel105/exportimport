import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  {
    tag: 'GLOBAL REACH',
    metric: '35+',
    metricSub: 'Ports',
    title: 'Active Destination Trade Lanes',
    desc: 'Regular container dispatch to UK, UAE, USA, Germany, Japan & Singapore.',
    href: '/services',
    linkText: 'Explore trade lanes',
  },
  {
    tag: 'SORTEX PURITY',
    metric: '99.8%',
    metricSub: 'Standard',
    title: 'Machine-Cleaned Sourcing',
    desc: 'Direct NABL lab inspection for ASTA cleanliness, volatile oil & mycotoxins.',
    href: '/quality-compliance',
    linkText: 'View lab protocols',
  },
  {
    tag: 'SHELF LIFE',
    metric: '< 8%',
    metricSub: 'Moisture',
    title: 'Strict Quality Retention',
    desc: 'Controlled post-harvest drying & vacuum packing preventing clumping in transit.',
    href: '/products',
    linkText: 'Browse commodities',
  },
  {
    tag: 'TRADE DESK',
    metric: '24h',
    metricSub: 'SLA',
    title: 'Commercial Turnaround',
    desc: 'Transparent FOB Indian Ports, CIF & CFR price proformas with freight analysis.',
    href: '/contact',
    linkText: 'Request proforma',
  },
]

export default function TrustStrip() {
  return (
    <section
      className="w-full border-b border-hairline bg-navy-deep/60 relative overflow-hidden"
      aria-label="Platform metrics and trust indicators"
    >
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-hairline">
          {stats.map(({ tag, metric, metricSub, title, desc, href, linkText }, idx) => (
            <Link
              key={tag}
              href={href}
              className={`group flex flex-col justify-between p-6 sm:p-7 lg:p-8 hover:bg-white/[0.03] transition-all duration-300 relative ${
                idx === 0 ? 'xl:pl-0' : ''
              } ${idx === stats.length - 1 ? 'xl:pr-0' : ''}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="mono-tag text-[10px] text-slate-400 font-bold group-hover:text-gold transition-colors">
                    {tag}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">0{idx + 1}</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-amber-200 transition-colors">
                    {metric}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold uppercase">
                    {metricSub}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-gold transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-hairline flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                <span>{linkText}</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
