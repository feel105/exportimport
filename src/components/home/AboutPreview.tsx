import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe2, ShieldCheck, Award } from 'lucide-react'

const highlights = [
  'Buyer-focused sourcing & tailored specifications',
  'Direct coordination with certified Indian farms and processors',
  'Export documentation & port logistics assistance',
  'Transparent commercial discussions & sample evaluation',
  'Long-term partnerships across international markets',
]

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Frosted Visual Composite */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="glow-indicator-green" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Trading House Profile</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-gold">
                  <Award size={16} />
                </div>
              </div>

              {/* Graphic area */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-navy to-navy-deep border border-white/10 mb-6 text-center space-y-3">
                <Globe2 size={48} className="mx-auto text-cyan-accent animate-pulse" />
                <h3 className="text-xl font-bold text-white">Global Bridge</h3>
                <p className="text-xs text-slate max-w-xs mx-auto leading-relaxed">
                  Exporting India&apos;s finest agricultural harvest to international food brands, distributors, and wholesalers.
                </p>
              </div>

              {/* Mini spec grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                  <p className="text-slate">Origin</p>
                  <p className="text-white font-bold mt-0.5">India (All Zones)</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                  <p className="text-slate">Standard</p>
                  <p className="text-emerald-400 font-bold mt-0.5">Export Grade A</p>
                </div>
              </div>
            </div>

            {/* Floating pill badge */}
            <div className="absolute -bottom-5 -right-3 sm:-right-6 glass-pill px-4 py-2 flex items-center gap-2.5 shadow-2xl">
              <ShieldCheck size={16} className="text-gold" />
              <span className="text-xs font-semibold text-white">Govt. Registered Exporter</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-medium text-gold">
              <span>ABOUT FEELEXIM</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Your Sourcing Partner in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
                Global Trade.
              </span>
            </h2>

            <p className="text-slate text-base sm:text-lg leading-relaxed">
              FEELEXIM connects international importers, wholesalers, and manufacturers with premium
              Indian agricultural commodities. We work directly with dependable regional growers and
              processing units across India to guarantee product conformity, customized packaging, and
              frictionless export documentation.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-slate-200 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/[0.1] hover:bg-white/[0.16] text-white border border-white/[0.18] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Learn More About Us
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
