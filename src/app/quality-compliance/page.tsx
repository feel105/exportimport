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
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container-xl space-y-16 lg:space-y-24">

        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold">
            <ShieldCheck size={14} className="text-gold" />
            <span>VERIFIED COMPLIANCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Quality Assurance & Credentials
          </h1>
          <p className="text-slate text-base sm:text-lg leading-relaxed">
            International agricultural trade requires uncompromising compliance. FEELEXIM operates under certified Indian trade licenses and adheres to strict destination food safety regulations.
          </p>
        </div>

        {/* Verified Statutory Certifications Grid in Frosted Glass */}
        <div className="glass-card p-8 sm:p-12 space-y-8">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white">Statutory Registrations & Licenses</h2>
              <p className="text-slate text-xs sm:text-sm mt-1">Legitimate government registrations held by FEELEXIM</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold">
              <Award size={20} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsList.map(({ name, fullName, purpose }) => (
              <div
                key={name}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-gold/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-extrabold text-gold">{name}</span>
                    <span className="glow-indicator-green !w-2 !h-2" />
                  </div>
                  <h3 className="text-xs font-semibold text-white mb-2 leading-snug">{fullName}</h3>
                  <p className="text-slate text-xs leading-relaxed">{purpose}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 italic pt-2">
            * Note: In accordance with our authenticity commitment, only verified registrations held by FEELEXIM are listed above.
          </p>
        </div>

        {/* Inspection & Testing Protocols */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white">Quality Control Protocols</h2>
            <p className="text-slate text-sm mt-2">Every shipment follows a structured quality verification workflow.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {inspectionProtocols.map(({ title, desc }) => (
              <div key={title} className="glass-card p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                </div>
                <p className="text-slate text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-5 border-gold/30">
          <h2 className="text-2xl font-bold text-white">Require Destination-Specific Standards?</h2>
          <p className="text-slate text-sm leading-relaxed">
            We are accustomed to aligning packaging and laboratory protocols to meet regional import regulations worldwide.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all"
            >
              Discuss Compliance Parameters <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
