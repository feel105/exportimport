import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quality & Compliance',
  description:
    'FEELEXIM compliance standards: verified statutory registrations (FSSAI, Spice RCMC, IEC, APEDA, GST), laboratory testing parameters, and export quality controls.',
}

const certificationsList = [
  {
    name: 'FSSAI',
    fullName: 'Food Safety and Standards Authority of India',
    purpose: 'Apex food safety regulatory licensing ensuring purity, sanitary processing, and absence of prohibited adulterants.',
  },
  {
    name: 'Spice RCMC',
    fullName: 'Registration cum Membership Certificate — Spices Board',
    purpose: 'Statutory certificate permitting legitimate commercial export of whole spices and spice powders from India.',
  },
  {
    name: 'IEC',
    fullName: 'Import Export Code (DGFT, Ministry of Commerce)',
    purpose: 'Permanent business identification code issued by the Directorate General of Foreign Trade for cross-border shipments.',
  },
  {
    name: 'APEDA',
    fullName: 'Agricultural & Processed Food Products Export Development Authority',
    purpose: 'Registration governing export standards, packaging requirements, and promotion of Indian agricultural produce.',
  },
  {
    name: 'GST',
    fullName: 'Goods and Services Tax Registration',
    purpose: 'Statutory tax registration verifying corporate standing and legal compliance under Indian revenue laws.',
  },
]

const inspectionProtocols = [
  {
    title: 'Moisture Control',
    desc: 'Each commodity is dried and sorted to maintain moisture strictly beneath statutory thresholds (typically 8% - 10%), inhibiting fungal growth and microbial spoilage during marine transit.',
  },
  {
    title: 'Sortex Cleaning & Optical Grading',
    desc: 'Color sortex grading machines eliminate discolored seeds, stones, and foreign matter to achieve clean purities from 99.0% up to 99.9% as demanded by buyers.',
  },
  {
    title: 'Pesticide & Chemical Residue Testing',
    desc: 'Samples can be submitted to NABL accredited laboratories (e.g. SGS, Eurofins, Geo-Chem) to verify compliance with destination MRLs (Maximum Residue Limits).',
  },
  {
    title: 'Phytosanitary & Fumigation Protocol',
    desc: 'Mandatory methyl bromide or aluminum phosphide fumigation of containers combined with official government phytosanitary inspection certificates prior to loading.',
  },
]

export default function QualityCompliancePage() {
  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 w-full">
      <div className="container-xl space-y-20 lg:space-y-32 w-full">

        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.14] text-xs font-bold text-gold tracking-wider uppercase">
            <ShieldCheck size={14} className="text-gold" />
            <span>VERIFIED COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Quality Assurance & Credentials
          </h1>
          <p className="text-slate text-sm sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto pt-1">
            International agricultural trade requires uncompromising compliance. FEELEXIM operates under certified Indian trade licenses and adheres to strict destination food safety regulations.
          </p>
        </div>

        {/* Verified Statutory Certifications Grid in Frosted Glass */}
        <div className="glass-card !rounded-2xl p-8 sm:p-10 lg:p-12 space-y-8 shadow-2xl">
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Statutory Registrations & Licenses</h2>
              <p className="text-slate text-xs sm:text-sm mt-0.5">Legitimate government registrations held by FEELEXIM</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold">
              <Award size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 w-full">
            {certificationsList.map(({ name, fullName, purpose }) => (
              <div
                key={name}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-gold/30 transition-all flex flex-col justify-between shadow-inner"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black text-gold">{name}</span>
                    <span className="glow-indicator-green !w-2 !h-2" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-2 leading-snug">{fullName}</h3>
                  <p className="text-slate text-xs leading-relaxed">{purpose}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 italic pt-1">
            * Note: In accordance with our authenticity commitment, only verified registrations held by FEELEXIM are listed above.
          </p>
        </div>

        {/* Inspection & Testing Protocols */}
        <div className="space-y-8 lg:space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">Quality Control Protocols</h2>
            <p className="text-slate text-xs sm:text-sm lg:text-base">Every shipment follows a structured quality verification workflow.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
            {inspectionProtocols.map(({ title, desc }) => (
              <div key={title} className="glass-card !rounded-2xl p-6 sm:p-7 space-y-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                </div>
                <p className="text-slate text-xs sm:text-sm leading-relaxed pl-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Spanning Full Container Width */}
        <div className="glass-card !rounded-2xl p-8 sm:p-12 lg:p-14 text-center border-gold/30 shadow-[0_24px_70px_rgba(224,160,69,0.15)] relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(224, 142, 69, 0.16) 0%, transparent 65%)',
              filter: 'blur(75px)',
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">Require Destination-Specific Standards?</h2>
            <p className="text-slate text-xs sm:text-sm lg:text-base leading-relaxed">
              We are accustomed to aligning packaging and laboratory protocols to meet regional import regulations worldwide.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all"
              >
                <span>Discuss Compliance Parameters</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
