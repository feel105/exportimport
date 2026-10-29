import Link from 'next/link'
import { ArrowRight, ShieldCheck, CheckCircle2, FileCheck2, Award } from 'lucide-react'
import { siteConfig } from '@/config/site'

const qualityPoints = [
  'Pre-shipment inspection and laboratory testing coordination',
  'Compliance with destination market limits on moisture, pesticide, and aflatoxin',
  'Phytosanitary certification & Certificate of Origin coordination',
  'Custom bulk packaging (PP, Jute, Paper Bags, Pouches with private labeling)',
  'Full traceability from Indian processing units to dispatch port',
]

export default function QualitySection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="quality-heading">
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-medium text-gold">
              <ShieldCheck size={14} className="text-gold" />
              <span>QUALITY & COMPLIANCE</span>
            </div>

            <h2
              id="quality-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Quality and Documentation,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
                Carefully Coordinated.
              </span>
            </h2>

            <p className="text-slate text-base sm:text-lg leading-relaxed">
              We understand that global spice and agricultural trade depends entirely on specification
              conformity and proper export credentials. We ensure every consignment fulfills the precise
              physical, chemical, and phytosanitary requirements agreed with international buyers.
            </p>

            <ul className="space-y-3.5 pt-2">
              {qualityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200 text-sm sm:text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/quality-compliance"
                className="px-6 py-3 rounded-2xl bg-white/[0.1] hover:bg-white/[0.16] text-white border border-white/[0.18] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                View Compliance Standards
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm shadow-[0_0_20px_rgba(224,160,69,0.3)] hover:shadow-[0_0_28px_rgba(224,160,69,0.45)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Discuss Specifications
              </Link>
            </div>
          </div>

          {/* Right Column: Frosted Card with Certifications */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="glow-indicator-green" />
                  <div>
                    <h3 className="text-base font-bold text-white">Export Credentials</h3>
                    <p className="text-xs text-slate">Statutory Registrations & Councils</p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold">
                  <Award size={18} />
                </div>
              </div>

              {/* Verified certifications grid */}
              <div className="grid grid-cols-2 gap-3">
                {siteConfig.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:border-gold/40 transition-colors flex items-center gap-2.5"
                  >
                    <FileCheck2 size={16} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="text-white text-xs font-bold">{cert}</p>
                      <p className="text-[10px] text-slate-400">Registered</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs text-slate space-y-1.5">
                <p className="text-white/90 font-semibold">Destination Testing Support</p>
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
