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
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container-xl space-y-16 lg:space-y-24">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>END-TO-END COORDINATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Export Services
          </h1>
          <p className="text-slate text-base sm:text-lg leading-relaxed">
            From initial specification analysis to container arrival at your port, we manage every critical milestone of the Indian agricultural export supply chain.
          </p>
        </div>

        {/* Services 6-Grid in Frosted Liquid Glass */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, highlights }) => (
            <div
              key={title}
              className="glass-card p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold mb-6">
                  <Icon size={24} />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
                <p className="text-slate text-sm leading-relaxed mb-6">{desc}</p>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass-card p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-5 border-gold/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Need Customized Sourcing?</h2>
          <p className="text-slate text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have a unique commodity requirement or private label request? Discuss your terms directly with our export desk.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all"
            >
              Request a Customized Service Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
