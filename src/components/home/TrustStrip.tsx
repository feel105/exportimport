import { ShieldCheck, Tag, Package, FileCheck } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'Quality-Focused Sourcing', desc: 'Product specs strictly verified', accent: 'text-emerald-400', glow: 'glow-indicator-green' },
  { icon: Tag, label: 'Competitive Quotations', desc: 'Transparent international terms', accent: 'text-amber-400', glow: 'glow-indicator-amber' },
  { icon: Package, label: 'Flexible Packaging', desc: 'Custom branding & bulk sizing', accent: 'text-cyan-accent', glow: 'glow-indicator-amber' },
  { icon: FileCheck, label: 'Export Documentation', desc: 'FSSAI, APEDA, RCMC, IEC support', accent: 'text-blue-400', glow: 'glow-indicator-green' },
]

export default function TrustStrip() {
  return (
    <section className="py-8 relative z-20" aria-label="Value propositions">
      <div className="container-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label, desc, accent }) => (
            <div
              key={label}
              className="glass-card !rounded-2xl p-4 flex items-center gap-3.5 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center flex-shrink-0">
                <Icon size={19} className={accent} />
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold truncate leading-snug">
                  {label}
                </p>
                <p className="text-slate text-xs mt-0.5 truncate">
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
