import { Tag, Package, Shield, FileCheck, MessageSquare, Search } from 'lucide-react'

const features = [
  {
    icon: Tag,
    title: 'Transparent Quotations',
    desc: 'Clear, competitive pricing calculated directly against Indian wholesale terminal markets, with complete breakdown of freight and certification costs.',
  },
  {
    icon: Package,
    title: 'Flexible Packaging Options',
    desc: 'Custom private labeling, varied package sizing (1kg to 1000kg jumbo tote bags), and protective vacuum packaging tailored to destination shelf life.',
  },
  {
    icon: Shield,
    title: 'Verified Quality Sourcing',
    desc: 'Direct field and terminal market sourcing backed by NABL accredited lab inspections for moisture, pesticide MRLs, and ASTA cleanliness.',
  },
  {
    icon: FileCheck,
    title: 'Complete Export Documentation',
    desc: 'Full coordination of Phytosanitary, Certificate of Origin, Bill of Lading, Fumigation, and custom trade invoices without bureaucratic delays.',
  },
  {
    icon: MessageSquare,
    title: 'Responsive Trade Desk',
    desc: 'Dedicated commercial managers providing proactive status updates from port loading at Mundra / Nhava Sheva to shipping line tracking.',
  },
  {
    icon: Search,
    title: 'Buyer-Specific Procurement',
    desc: 'Capability to procure unique grades, wild-harvested herbs, or specialty seeds outside standard catalogs upon commercial request.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-py relative overflow-hidden w-full" aria-labelledby="why-heading">
      <div className="container-xl space-y-6 sm:space-y-7 lg:space-y-8 w-full">

        {/* Section Heading with Calibrated Margins */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span>OUR ADVANTAGE</span>
          </div>
          <h2
            id="why-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight"
          >
            Built Around Your Sourcing Needs
          </h2>
          <p className="text-slate text-xs sm:text-sm leading-relaxed pt-0.5">
            Engineered to remove volatility, quality uncertainty, and communication barriers from cross-border agricultural procurement.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 w-full">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card !rounded-2xl p-4.5 sm:p-5 lg:p-5.5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold shadow-inner">
                  <Icon size={20} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {title}
                  </h3>
                  <p className="text-slate text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
