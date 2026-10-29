import Link from 'next/link'
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react'
import { siteConfig } from '@/config/site'

const qualityPoints = [
  'Pre-shipment independent inspection and laboratory testing coordination (SGS / Geo-Chem)',
  'Strict compliance with destination market tolerances on moisture, pesticide residue, and aflatoxin',
  'Government Phytosanitary certification & Certificate of Origin issuance prior to dispatch',
  'Custom bulk packaging options (PP, Jute, multi-wall paper bags, and private label pouches)',
  'Complete batch traceability from regional Indian processing units to ocean container loading',
]

export default function QualitySection() {
  return (
    <section className="section-py relative overflow-hidden" aria-labelledby="quality-heading">
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
              <ShieldCheck size={14} className="text-gold" />
              <span>QUALITY & COMPLIANCE</span>
            </div>

            <div className="space-y-5">
              <h2
                id="quality-heading"
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
              >
                Quality and Documentation,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
                  Carefully Coordinated.
                </span>
              </h2>

              <p className="text-slate text-base sm:text-lg leading-relaxed pt-1">
                We understand that global spice and agricultural trade depends entirely on specification
                conformity and proper export credentials. We ensure every consignment fulfills the precise
                physical, chemical, and phytosanitary requirements agreed with international buyers.
              </p>
            </div>

            <ul className="space-y-4 pt-2">
              {qualityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <CheckCircle2 size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-200 text-sm sm:text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/quality-compliance"
                className="px-9 py-4 rounded-2xl bg-white/[0.1] hover:bg-white/[0.16] text-white border border-white/[0.18] font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                <span>View Compliance Standards</span>
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="px-9 py-4 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm sm:text-base shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Discuss Specifications
              </Link>
            </div>
          </div>

          {/* Right Column: Frosted Card with Certifications (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card !rounded-3xl p-10 sm:p-14 lg:p-16 space-y-9 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="glow-indicator-green" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Export Credentials</h3>
                    <p className="text-xs text-slate">Statutory Registrations & Councils</p>
                  </div>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold">
                  <Award size={20} />
                </div>
              </div>

              {/* Verified certifications grid */}
              <div className="grid grid-cols-2 gap-4">
                {siteConfig.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="p-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:border-gold/40 transition-colors flex items-center gap-3 shadow-sm"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-bold">{cert}</p>
                      <p className="text-[11px] text-slate-400">Registered</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm text-slate space-y-2">
                <p className="text-white font-semibold">Destination Testing Support</p>
                <p className="leading-relaxed">
                  Third-party testing via authorized accredited labs (SGS, Geo-Chem, or buyer-appointed inspection agencies) can be coordinated upon request.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
