import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe2, ShieldCheck, Award } from 'lucide-react'

const highlights = [
  'Buyer-focused sourcing & tailored chemical/physical specifications',
  'Direct coordination with certified Indian growers and processing hubs',
  'Export port logistics & complete documentation clearance (Mundra / Nhava Sheva)',
  'Transparent commercial discussions, forward contracts & sample evaluations',
  'Sustainable, long-term trade partnerships across international ports',
]

export default function AboutPreview() {
  return (
    <section className="section-py relative overflow-hidden w-full" aria-labelledby="about-heading">
      <div className="container-xl w-full">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center w-full">

          {/* Left: Frosted Visual Composite (5 Cols) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="glass-card p-5 sm:p-6 lg:p-7 relative overflow-hidden space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="glow-indicator-green" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Export House Profile
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/[0.09] border border-white/20 flex items-center justify-center text-white shadow-sm">
                  <Award size={15} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]" />
                </div>
              </div>

              {/* Graphic area */}
              <div className="rounded-xl p-5 sm:p-6 bg-gradient-to-br from-navy via-navy-deep to-slate-900 border border-white/10 text-center space-y-2.5 shadow-inner">
                <Globe2 size={40} className="mx-auto text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                <h3 className="text-lg sm:text-xl font-extrabold text-white">Global Trade Bridge</h3>
                <p className="text-xs text-slate max-w-sm mx-auto leading-relaxed">
                  Connecting India&apos;s agricultural harvest to food manufacturers, packers, and distributors across Europe, the Middle East, Americas, and Asia.
                </p>
              </div>

              {/* Mini spec grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                  <p className="text-slate text-[11px]">Origin Sourcing</p>
                  <p className="text-white font-bold mt-0.5 text-xs sm:text-sm">All Indian Zones</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                  <p className="text-slate text-[11px]">Statutory Standard</p>
                  <p className="text-emerald-400 font-bold mt-0.5 text-xs sm:text-sm">Export Grade A</p>
                </div>
              </div>
            </div>

            {/* Floating pill badge */}
            <div className="absolute -bottom-3 -right-2 sm:-right-3 glass-pill px-4 py-2 flex items-center gap-2 shadow-2xl">
              <ShieldCheck size={16} className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]" />
              <span className="text-xs font-bold text-white">Govt. Registered Exporter</span>
            </div>
          </div>

          {/* Right: Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
              <span>ABOUT FEELEXIM</span>
            </div>

            <div className="space-y-2">
              <h2
                id="about-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15]"
              >
                Your Partner in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
                  Global Trade.
                </span>
              </h2>

              <p className="text-slate text-xs sm:text-sm lg:text-base leading-relaxed pt-0.5">
                FEELEXIM connects international importers, wholesalers, and manufacturers with premium Indian agricultural commodities. We work directly with dependable regional growers and processing units across India to guarantee product conformity, customized packaging, and frictionless export documentation.
              </p>
            </div>

            <ul className="space-y-2.5 pt-0.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200 text-xs sm:text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-1 flex items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.1] hover:bg-white/[0.16] text-white border border-white/[0.18] font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
