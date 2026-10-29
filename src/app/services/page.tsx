import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, ShieldCheck, Package, Anchor, FileCheck2, FlaskConical } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Export Services',
  description:
    'Comprehensive Indian export services: product sourcing, sortex cleaning, custom packaging, documentation coordination, and global shipping management.',
}

const services = [
  {
    icon: Search,
    title: 'Custom Product Sourcing',
    desc: 'Leverage our established network of Indian farm clusters, aggregators, and processors to procure commodities tailored to your exact purity, size, and botanical grade.',
    highlights: ['Regional farm origin mapping', 'Batch sampling', 'Price discovery & index comparison'],
  },
  {
    icon: FlaskConical,
    title: 'Quality Testing & Grade Analysis',
    desc: 'Coordinating rigorous pre-shipment inspections through government and buyer-approved accredited laboratories to verify physical, chemical, and microbiological standards.',
    highlights: ['Aflatoxin & pesticide screening', 'Moisture & volatile oil content check', 'Sortex cleanliness inspection'],
  },
  {
    icon: Package,
    title: 'Custom Packaging & Private Label',
    desc: 'Packaging solutions engineered for food preservation during transoceanic transit, with customizable buyer branding, barcoding, and destination language compliance.',
    highlights: ['25kg & 50kg PP / HDPE / Jute bags', 'Multi-wall paper bags & vacuum packs', 'Retail consumer pouches with private label'],
  },
  {
    icon: FileCheck2,
    title: 'Statutory Export Documentation',
    desc: 'Complete handling and coordination of all Indian customs and international import documentation to ensure swift customs clearance at your destination port.',
    highlights: ['Phytosanitary Certificate', 'Certificate of Origin (Preferential / Non-Preferential)', 'Commercial Invoice, Packing List, BL & Fumigation'],
  },
  {
    icon: Anchor,
    title: 'Freight & Container Logistics',
    desc: 'Coordinating container stuffing, fumigation, port transportation to Mundra / Nhava Sheva, and ocean freight booking with premier shipping lines.',
    highlights: ['FOB, CIF, and CFR trade terms', '20ft & 40ft FCL container loads', 'Real-time dispatch tracking & BL release'],
  },
  {
    icon: ShieldCheck,
    title: 'Post-Dispatch Support & Continuity',
    desc: 'Ongoing commercial communication following vessel departure to ensure seamless document surrender, bank presentations, and repeat container scheduling.',
    highlights: ['Couriered original documents', 'Contractual fulfillment guarantee', 'Long-term price hedging guidance'],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
      <div className="container-xl space-y-20 lg:space-y-32">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>END-TO-END COORDINATION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Comprehensive Export Services
          </h1>
          <p className="text-slate text-base sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto pt-2">
            From initial specification analysis to container arrival at your port, we manage every critical milestone of the Indian agricultural export supply chain.
          </p>
        </div>

        {/* Services 6-Grid in Frosted Liquid Glass */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map(({ icon: Icon, title, desc, highlights }) => (
            <div
              key={title}
              className="glass-card !rounded-3xl p-9 sm:p-10 lg:p-11 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold mb-8 shadow-inner">
                  <Icon size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
                <p className="text-slate text-sm sm:text-base leading-relaxed mb-8">{desc}</p>
                <div className="space-y-3 pt-6 border-t border-white/10">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner Spanning Full Container Width */}
        <div className="glass-card !rounded-3xl p-12 sm:p-16 lg:p-20 text-center border-gold/30 shadow-[0_24px_70px_rgba(224,160,69,0.15)] relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(224, 142, 69, 0.16) 0%, transparent 65%)',
              filter: 'blur(75px)',
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">Need Customized Sourcing?</h2>
            <p className="text-slate text-base sm:text-lg leading-relaxed">
              Have a unique commodity requirement, non-standard moisture threshold, or private label packaging request? Discuss your terms directly with our export desk.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/contact"
                className="px-9 py-4.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-base shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all flex items-center gap-2.5"
              >
                <span>Request Custom Sourcing</span>
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/products"
                className="px-9 py-4.5 rounded-2xl glass-pill text-white font-semibold text-base hover:bg-white/[0.14] transition-all"
              >
                View Available Commodities
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
