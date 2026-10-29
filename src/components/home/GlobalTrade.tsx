import Link from 'next/link'
import { ArrowRight, Anchor, Navigation, ShieldCheck } from 'lucide-react'

export default function GlobalTrade() {
  return (
    <section className="section-py relative overflow-hidden" aria-labelledby="global-heading">
      <div className="container-xl">
        <div className="glass-card !rounded-3xl p-12 sm:p-20 lg:p-28 relative overflow-hidden text-center shadow-2xl">
          {/* Top indicator */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-cyan-accent mb-8">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>CONNECTING CONTINENTS</span>
          </div>

          <h2
            id="global-heading"
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.12] mb-6 max-w-5xl mx-auto"
          >
            Bringing Indian Produce to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400">
              Global Importers.
            </span>
          </h2>

          <p className="text-slate text-base sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-14">
            We work with international importers, wholesalers, distributors, and food processors across the globe — coordinating dependable supply chains from Indian ports to your destination harbour.
          </p>

          {/* 3 Pillar Metrics Pill Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14 text-sm sm:text-base">
            <div className="p-6 rounded-3xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center gap-3">
              <Anchor size={22} className="text-cyan-accent" />
              <span className="text-white font-semibold">Mundra & Nhava Sheva Ports</span>
            </div>
            <div className="p-6 rounded-3xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center gap-3">
              <Navigation size={22} className="text-gold" />
              <span className="text-white font-semibold">FOB / CIF / CFR Terms</span>
            </div>
            <div className="p-6 rounded-3xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center gap-3">
              <ShieldCheck size={22} className="text-emerald-400" />
              <span className="text-white font-semibold">Customs Clearance Ready</span>
            </div>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-11 py-4.5 rounded-2xl bg-gradient-to-r from-royal to-royal-dark text-white font-bold text-base shadow-[0_0_28px_rgba(37,99,235,0.45)] hover:shadow-[0_0_36px_rgba(37,99,235,0.65)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Start Commercial Discussion</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
