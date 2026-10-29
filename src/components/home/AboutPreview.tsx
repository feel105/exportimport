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
    <section className="section-py relative overflow-hidden" aria-labelledby="about-heading">
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* Left: Frosted Visual Composite (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-10 sm:p-14 lg:p-16 relative overflow-hidden space-y-9">
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="glow-indicator-green" />
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    Export House Profile
                  </span>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-white/[0.08] flex items-center justify-center text-gold">
                  <Award size={20} />
                </div>
              </div>

              {/* Graphic area */}
              <div className="rounded-3xl p-9 sm:p-10 bg-gradient-to-br from-navy via-navy-deep to-slate-900 border border-white/10 text-center space-y-4 shadow-inner">
                <Globe2 size={60} className="mx-auto text-cyan-accent" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Global Trade Bridge</h3>
                <p className="text-sm text-slate max-w-sm mx-auto leading-relaxed">
                  Connecting India&apos;s agricultural harvest to food manufacturers, packers, and distributors across Europe, the Middle East, Americas, and Asia.
                </p>
              </div>

              {/* Mini spec grid */}
              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4.5 rounded-2xl bg-white/[0.05] border border-white/[0.08]">
                  <p className="text-slate">Origin Sourcing</p>
                  <p className="text-white font-bold mt-1 text-sm sm:text-base">All Indian Zones</p>
                </div>
                <div className="p-4.5 rounded-2xl bg-white/[0.05] border border-white/[0.08]">
                  <p className="text-slate">Statutory Standard</p>
                  <p className="text-emerald-400 font-bold mt-1 text-sm sm:text-base">Export Grade A</p>
                </div>
              </div>
            </div>

            {/* Floating pill badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-8 glass-pill px-7 py-3.5 flex items-center gap-3.5 shadow-2xl">
              <ShieldCheck size={22} className="text-gold" />
              <span className="text-xs sm:text-sm font-bold text-white">Govt. Registered Exporter</span>
            </div>
          </div>

          {/* Right: Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
              <span>ABOUT FEELEXIM</span>
            </div>

            <div className="space-y-4">
              <h2
                id="about-heading"
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
              >
                Your Partner in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
                  Global Trade.
                </span>
              </h2>

              <p className="text-slate text-base sm:text-lg leading-relaxed pt-2">
                FEELEXIM connects international importers, wholesalers, and manufacturers with premium Indian agricultural commodities. We work directly with dependable regional growers and processing units across India to guarantee product conformity, customized packaging, and frictionless export documentation.
              </p>
            </div>

            <ul className="space-y-4 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <CheckCircle size={18} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-slate-200 text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white/[0.1] hover:bg-white/[0.16] text-white border border-white/[0.18] font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
