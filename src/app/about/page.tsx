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
    <div className="pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
      <div className="container-xl space-y-20 lg:space-y-32">

        {/* Hero Banner */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>INDIAN EXPORT HOUSE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Bridging Indian Agricultural Excellence with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
              World Markets.
            </span>
          </h1>
          <p className="text-slate text-base sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto pt-2">
            FEELEXIM operates as an international trade and sourcing house headquartered in India, coordinating high-grade spices, seeds, nuts, and agricultural products for international buyers.
          </p>
        </div>

        {/* Story Section in Frosted Glass */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
          <div className="lg:col-span-7 glass-card !rounded-3xl p-10 sm:p-14 lg:p-16 space-y-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Our Purpose & Methodology
              </h2>
              <p className="text-slate text-base sm:text-lg leading-relaxed">
                India produces some of the world&apos;s most sought-after agricultural commodities — from pungent cumin and vibrant high-curcumin turmeric to pure sesame and medicinal seeds. However, navigating regional suppliers, fluctuating moisture standards, and complex export paperwork can pose major challenges for global importers.
              </p>
              <p className="text-slate text-base sm:text-lg leading-relaxed">
                FEELEXIM was founded to eliminate this friction. We serve as your dedicated Indian sourcing arm — identifying authentic supplies, arranging independent laboratory tests, supervising sorting and custom packaging, and securing statutory export certifications before container dispatch.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-5">
              <Link
                href="/products"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm sm:text-base hover:bg-gold-light transition-all flex items-center gap-2.5 shadow-[0_0_24px_rgba(224,160,69,0.35)]"
              >
                <span>Explore Catalog</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-2xl glass-pill text-white font-semibold text-sm sm:text-base hover:bg-white/[0.14] transition-all"
              >
                Contact Trade Desk
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 glass-card !rounded-3xl p-10 sm:p-14 space-y-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xl font-bold text-white">Registered Credentials</span>
                  <p className="text-xs text-slate mt-1">Official statutory registrations</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.08] flex items-center justify-center text-gold">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                {siteConfig.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-gold/30 transition-colors">
                    <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-white text-sm font-semibold">{cert} Certified & Registered</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate leading-relaxed pt-4 border-t border-white/10">
              All export shipments undergo required statutory phytosanitary inspections and quality checks in full compliance with Indian trade authorities.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid in Frosted Glass */}
        <div className="space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Our Core Commitments</h2>
            <p className="text-slate text-base sm:text-lg">Why international food companies and distributors rely on FEELEXIM.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card !rounded-3xl p-9 sm:p-10 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-xl">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold mb-6 shadow-inner">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-slate text-sm sm:text-base leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
