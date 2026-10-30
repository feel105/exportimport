import Link from 'next/link'
import { ArrowRight, Anchor, Navigation, ShieldCheck } from 'lucide-react'

export default function GlobalTrade() {
  return (
    <section className="section-py relative overflow-hidden w-full" aria-labelledby="global-heading">
      <div className="container-xl w-full">
        <div className="glass-card !rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden text-center w-full shadow-2xl">
          {/* Top indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-cyan-accent mb-3.5">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>CONNECTING CONTINENTS</span>
          </div>

          <h2
            id="global-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15] mb-2.5 max-w-4xl mx-auto"
          >
            Bringing Indian Produce to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400">
              Global Importers.
            </span>
          </h2>

          <p className="text-slate text-xs sm:text-sm lg:text-base max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-7">
            We work with international importers, wholesalers, distributors, and food processors across the globe — coordinating dependable supply chains from Indian ports to your destination harbour.
          </p>

          {/* 3 Pillar Metrics Pill Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 max-w-4xl mx-auto mb-6 sm:mb-7 text-xs sm:text-sm w-full">
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center gap-2">
              <Anchor size={16} className="text-cyan-accent" />
              <span className="text-white font-semibold">Mundra & Nhava Sheva Ports</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center gap-2">
              <Navigation size={16} className="text-gold" />
              <span className="text-white font-semibold">FOB / CIF / CFR Terms</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span className="text-white font-semibold">Customs Clearance Ready</span>
            </div>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-royal to-royal-dark text-white font-bold text-xs sm:text-sm shadow-[0_0_28px_rgba(37,99,235,0.45)] hover:shadow-[0_0_36px_rgba(37,99,235,0.65)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Start Commercial Discussion</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
