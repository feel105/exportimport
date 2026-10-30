import { ShieldCheck, Tag, Package, FileCheck } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'Quality-Focused Sourcing', desc: 'Product specs strictly verified at source', accent: 'text-emerald-400' },
  { icon: Tag, label: 'Competitive Quotations', desc: 'Transparent FOB, CIF & CFR terms', accent: 'text-amber-400' },
  { icon: Package, label: 'Flexible Packaging', desc: 'Custom branding, private label & bulk sizing', accent: 'text-cyan-accent' },
  { icon: FileCheck, label: 'Export Documentation', desc: 'FSSAI, APEDA, RCMC, Phyto & IEC support', accent: 'text-blue-400' },
]

export default function TrustStrip() {
  return (
    <section className="pt-2 sm:pt-4 pb-6 sm:pb-8 relative z-20 w-full" aria-label="Value propositions">
      <div className="container-xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 w-full">
          {items.map(({ icon: Icon, label, desc, accent }) => (
            <div
              key={label}
              className="glass-card !rounded-2xl p-4 sm:p-4.5 lg:p-5 flex items-center gap-3.5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center flex-shrink-0 shadow-inner">
                <Icon size={20} className={accent} />
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs sm:text-sm font-bold truncate leading-snug">
                  {label}
                </p>
                <p className="text-slate text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
