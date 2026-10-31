import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Globe, Users, TrendingUp } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about FEELEXIM, our values, and our mission connecting international importers with authentic Indian spices, seeds, and agricultural commodities.',
}

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Quality-Centric Sourcing',
    desc: 'We coordinate directly with certified growers, grading centers, and processing plants across India to ensure all physical and chemical tolerances are strictly verified.',
  },
  {
    icon: Globe,
    title: 'Global Export Fluency',
    desc: 'From port coordination at Mundra and Nhava Sheva to customs clearances, certificate of origin, and phytosanitary certificates, we manage export logistics end-to-end.',
  },
  {
    icon: Users,
    title: 'Buyer-Aligned Focus',
    desc: 'Every international market has unique labeling, packaging, mesh size, and testing parameters. We customize sourcing according to your specific import norms.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Trade Relationships',
    desc: 'We prioritize consistent reliability, transparent commercial dealings, and integrity over one-off spot shipments, building enduring global partnerships.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 w-full">
      <div className="container-xl space-y-20 lg:space-y-32 w-full">

        {/* Hero Banner */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">INDIAN EXPORT HOUSE • ESTABLISHED TRADE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Bridging Indian Agricultural Excellence with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
              World Markets.
            </span>
          </h1>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto pt-1">
            FEELEXIM operates as an international trade and sourcing house headquartered in India, coordinating high-grade spices, seeds, nuts, and agricultural products for international buyers.
          </p>
        </div>

        {/* Story Section in Frosted Glass */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch w-full">
          <div className="lg:col-span-7 glass-card !rounded-2xl p-8 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between shadow-2xl w-full">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Our Purpose & Methodology
              </h2>
              <p className="text-slate text-sm sm:text-base leading-relaxed">
                India produces some of the world&apos;s most sought-after agricultural commodities — from pungent cumin and vibrant high-curcumin turmeric to pure sesame and medicinal seeds. However, navigating regional suppliers, fluctuating moisture standards, and complex export paperwork can pose major challenges for global importers.
              </p>
              <p className="text-slate text-sm sm:text-base leading-relaxed">
                FEELEXIM was founded to eliminate this friction. We serve as your dedicated Indian sourcing arm — identifying authentic supplies, arranging independent laboratory tests, supervising sorting and custom packaging, and securing statutory export certifications before container dispatch.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all flex items-center gap-2"
              >
                <span>Explore Catalog</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl glass-pill text-white font-semibold text-xs sm:text-sm hover:bg-white/[0.14] transition-all"
              >
                Contact Trade Desk
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 glass-card !rounded-2xl p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-2xl w-full">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-lg font-bold text-white">Registered Credentials</span>
                  <p className="text-xs text-slate mt-0.5">Official statutory registrations</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-gold">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-3 mt-5">
                {siteConfig.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-gold/30 transition-colors">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-white text-xs sm:text-sm font-semibold">{cert} Certified & Registered</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate leading-relaxed pt-3 border-t border-white/10">
              All export shipments undergo required statutory phytosanitary inspections and quality checks in full compliance with Indian trade authorities.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid in Frosted Glass */}
        <div className="space-y-8 lg:space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">Our Core Commitments</h2>
            <p className="text-slate text-xs sm:text-sm lg:text-base">Why international food companies and distributors rely on FEELEXIM.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card !rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold mb-5 shadow-inner">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
