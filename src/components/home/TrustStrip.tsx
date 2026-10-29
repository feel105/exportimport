import { ShieldCheck, Tag, Package, FileCheck } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'Quality-Focused Sourcing', desc: 'Product specs strictly verified at source', accent: 'text-emerald-400' },
  { icon: Tag, label: 'Competitive Quotations', desc: 'Transparent FOB, CIF & CFR terms', accent: 'text-amber-400' },
  { icon: Package, label: 'Flexible Packaging', desc: 'Custom branding, private label & bulk sizing', accent: 'text-cyan-accent' },
  { icon: FileCheck, label: 'Export Documentation', desc: 'FSSAI, APEDA, RCMC, Phyto & IEC support', accent: 'text-blue-400' },
]

export default function TrustStrip() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative z-20" aria-label="Value propositions">
      <div className="container-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map(({ icon: Icon, label, desc, accent }) => (
            <div
              key={label}
              className="glass-card !rounded-3xl p-7 sm:p-8 lg:p-9 flex items-center gap-6 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center flex-shrink-0 shadow-inner">
                <Icon size={26} className={accent} />
              </div>
              <div className="min-w-0">
                <p className="text-white text-base sm:text-lg font-bold truncate leading-snug">
                  {label}
                </p>
                <p className="text-slate text-xs sm:text-sm mt-1.5 leading-relaxed">
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
