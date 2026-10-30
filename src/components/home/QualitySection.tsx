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
    <section className="section-py relative overflow-hidden w-full" aria-labelledby="quality-heading">
      <div className="container-xl w-full">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center w-full">

          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-white tracking-wide">
              <ShieldCheck size={13} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
              <span>QUALITY & COMPLIANCE</span>
            </div>

            <div className="space-y-2">
              <h2
                id="quality-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15]"
              >
                Quality and Documentation,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
                  Carefully Coordinated.
                </span>
              </h2>

              <p className="text-slate text-xs sm:text-sm lg:text-base leading-relaxed pt-0.5">
                We understand that global spice and agricultural trade depends entirely on specification
                conformity and proper export credentials. We ensure every consignment fulfills the precise
                physical, chemical, and phytosanitary requirements agreed with international buyers.
              </p>
            </div>

            <ul className="space-y-2 pt-0.5">
              {qualityPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200 text-xs sm:text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                href="/quality-compliance"
                className="px-5 py-2.5 rounded-xl bg-white/[0.1] hover:bg-white/[0.16] text-white border border-white/[0.18] font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>View Compliance Standards</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Discuss Specifications
              </Link>
            </div>
          </div>

          {/* Right Column: Frosted Card with Certifications (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card !rounded-2xl p-4.5 sm:p-5 lg:p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="glow-indicator-green" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">Export Credentials</h3>
                    <p className="text-[10px] text-slate">Statutory Registrations & Councils</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/[0.09] border border-white/20 flex items-center justify-center text-white shadow-sm">
                  <Award size={15} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]" />
                </div>
              </div>

              {/* Verified certifications grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {siteConfig.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.12] hover:border-white/30 transition-colors flex items-center gap-2.5 shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.85)] flex-shrink-0" />
                    <div>
                      <p className="text-white text-xs font-bold">{cert}</p>
                      <p className="text-[10px] text-slate-400">Registered</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-slate space-y-1">
                <p className="text-white font-semibold text-xs">Destination Testing Support</p>
                <p className="leading-relaxed text-[11px]">
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
