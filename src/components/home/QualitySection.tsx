import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'

const statutoryCredentials = [
  {
    code: 'FSSAI',
    name: 'Food Safety & Standards Authority',
    type: 'Central License #1072...',
    status: 'Verified & Active',
  },
  {
    code: 'APEDA',
    name: 'Agri & Processed Food Authority',
    type: 'Export Registration #218...',
    status: 'Verified & Active',
  },
  {
    code: 'SPICES BOARD',
    name: 'Ministry of Commerce & Industry',
    type: 'RCMC Exporter Certificate',
    status: 'Verified & Active',
  },
  {
    code: 'DGFT IEC',
    name: 'Directorate General of Foreign Trade',
    type: 'Import Export Code Validated',
    status: 'Verified & Active',
  },
  {
    code: 'AGMARK',
    name: 'Agricultural Marketing Standard',
    type: 'Quality Grading & Sorting',
    status: 'Verified & Active',
  },
  {
    code: 'SGS / GEO-CHEM',
    name: 'Independent Lab Pre-Shipment',
    type: 'Purity & MRL Certificate',
    status: 'Per Consignment',
  },
]

export default function QualitySection() {
  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy"
      aria-labelledby="quality-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-white tracking-wide">
            <ShieldCheck size={13} className="text-gold" />
            <span className="mono-tag text-gold">STATUTORY ACCREDITATION</span>
          </div>
          <h2
            id="quality-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
          >
            Enterprise-Grade Trade Compliance.
          </h2>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            Global food and spice trade depends entirely on specification conformity, statutory credentials, and zero-defect phytosanitary clearance.
          </p>
        </div>

        {/* Sanity-Style Split Layout: Left SLA & narrative / Right Credential Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start w-full">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate text-xs sm:text-sm lg:text-base leading-relaxed">
              We operate exclusively in strict compliance with destination market tolerances on moisture, pesticide residue (MRLs), aflatoxins, and microbiological purity. Every consignment is inspected and sealed prior to port loading.
            </p>

            {/* SLA Badges Strip */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl border border-hairline bg-white/[0.02]">
                <p className="text-2xl font-black text-white">99.8%</p>
                <p className="text-xs text-slate-400 mt-1 font-mono uppercase">Sortex Purity SLA</p>
              </div>
              <div className="p-4 rounded-xl border border-hairline bg-white/[0.02]">
                <p className="text-2xl font-black text-white">24/7</p>
                <p className="text-xs text-slate-400 mt-1 font-mono uppercase">Trade Desk Dispatch</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/quality-compliance"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(224,160,69,0.3)] hover:shadow-[0_0_28px_rgba(224,160,69,0.5)] transition-all flex items-center gap-2"
              >
                <span>Full Compliance Protocols</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 rounded-full bg-white/[0.06] border border-hairline text-white font-semibold text-xs sm:text-sm hover:bg-white/[0.1] transition-all"
              >
                Request Lab Sample
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Statutory Accreditation Tiles (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
            {statutoryCredentials.map((cred) => (
              <div
                key={cred.code}
                className="p-4.5 sm:p-5 rounded-2xl border border-hairline bg-white/[0.02] hover:bg-white/[0.04] hover:border-hairline-light transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="mono-tag text-gold font-bold text-xs">
                    {cred.code}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {cred.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                    {cred.name}
                  </p>
                  <p className="text-slate-400 text-xs font-mono">
                    {cred.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
