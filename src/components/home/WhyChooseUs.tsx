import { Tag, Package, Shield, FileCheck, MessageSquare, Search } from 'lucide-react'

const features = [
  {
    num: '01',
    icon: Tag,
    title: 'Transparent Quotations',
    desc: 'Clear, competitive pricing calculated directly against Indian wholesale terminal markets, with complete breakdown of ocean freight and certification costs.',
  },
  {
    num: '02',
    icon: Package,
    title: 'Flexible Packaging Options',
    desc: 'Custom private labeling, varied package sizing (1kg to 1000kg jumbo tote bags), and protective vacuum packaging tailored to destination shelf life.',
  },
  {
    num: '03',
    icon: Shield,
    title: 'Verified Quality Sourcing',
    desc: 'Direct field and terminal market sourcing backed by NABL accredited lab inspections for moisture, pesticide MRLs, and ASTA cleanliness.',
  },
  {
    num: '04',
    icon: FileCheck,
    title: 'Complete Export Documentation',
    desc: 'Full coordination of Phytosanitary, Certificate of Origin, Bill of Lading, Fumigation, and custom trade invoices without bureaucratic delays.',
  },
  {
    num: '05',
    icon: MessageSquare,
    title: 'Responsive Trade Desk',
    desc: 'Dedicated commercial managers providing proactive status updates from port loading at Mundra / Nhava Sheva to shipping line tracking.',
  },
  {
    num: '06',
    icon: Search,
    title: 'Buyer-Specific Procurement',
    desc: 'Capability to procure unique grades, wild-harvested herbs, or specialty seeds outside standard catalogs upon commercial request.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy"
      aria-labelledby="why-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12">

        {/* Section Heading with Sanity Display Typography */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">THE FEELEXIM ADVANTAGE</span>
          </div>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
          >
            Built Around Your Sourcing Needs.
          </h2>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
            Engineered to remove volatility, quality uncertainty, and communication barriers from cross-border agricultural procurement.
          </p>
        </div>

        {/* 6 Feature Cards Grid with Architectural Blueprint Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
          {features.map(({ num, icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 sm:p-7 rounded-2xl border border-hairline bg-white/[0.02] hover:bg-white/[0.05] hover:border-hairline-light flex flex-col justify-between transition-all duration-300 space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-hairline flex items-center justify-center text-white group-hover:bg-gold group-hover:text-navy transition-all">
                    <Icon size={18} />
                  </div>
                  <span className="mono-tag text-[10px] text-slate-500 font-mono">{num}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate text-xs sm:text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-hairline text-[11px] font-mono text-slate-500 group-hover:text-gold transition-colors">
                OPERATIONAL STANDARD VERIFIED
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
