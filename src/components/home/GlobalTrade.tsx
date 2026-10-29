import Link from 'next/link'
import { ArrowRight, Anchor, Navigation, ShieldCheck } from 'lucide-react'

export default function GlobalTrade() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="global-heading">
      <div className="container-xl">
        <div className="glass-card p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Subtle top indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-cyan-accent mb-6">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>CONNECTING CONTINENTS</span>
          </div>

          <h2
            id="global-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Bringing Indian Products Closer to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400">
              Global Buyers.
            </span>
          </h2>

          <p className="text-slate text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We work with international importers, wholesalers, distributors, and food processors across the globe — coordinating dependable supply chains from Indian ports to your destination harbour.
          </p>

          {/* 3 Pillar Metrics Pill Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-10 text-xs">
            <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center gap-2">
              <Anchor size={15} className="text-cyan-accent" />
              <span className="text-white font-medium">Mundra & Nhava Sheva Ports</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center gap-2">
              <Navigation size={15} className="text-gold" />
              <span className="text-white font-medium">FOB / CIF / CFR Terms</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center gap-2">
              <ShieldCheck size={15} className="text-emerald-400" />
              <span className="text-white font-medium">Custom Clearance Ready</span>
            </div>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-royal to-royal-dark text-white font-bold text-sm shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_32px_rgba(37,99,235,0.6)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Start Commercial Discussion
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
