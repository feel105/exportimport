import { ShieldCheck, Tag, Package, FileCheck } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'Quality-Focused Sourcing', desc: 'Product specs strictly verified at source' },
  { icon: Tag, label: 'Competitive Quotations', desc: 'Transparent FOB, CIF & CFR terms' },
  { icon: Package, label: 'Flexible Packaging', desc: 'Custom branding, private label & bulk sizing' },
  { icon: FileCheck, label: 'Export Documentation', desc: 'FSSAI, APEDA, RCMC, Phyto & IEC support' },
]

export default function TrustStrip() {
  return (
    <section className="pt-2 sm:pt-4 pb-6 sm:pb-8 relative z-20 w-full" aria-label="Value propositions">
      <div className="container-xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 w-full">
          {items.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="glass-card !rounded-2xl p-4 sm:p-4.5 lg:p-5 flex items-center gap-3.5 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.09] border border-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:bg-white/[0.16] group-hover:border-white/30 transition-all duration-300">
                <Icon size={20} className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]" />
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
