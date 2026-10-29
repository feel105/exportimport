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
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container-xl space-y-16 lg:space-y-24">

        {/* Hero Banner */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>INDIAN EXPORT HOUSE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Bridging Indian Agricultural Excellence with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold to-amber-200">
              World Markets.
            </span>
          </h1>
          <p className="text-slate text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            FEELEXIM operates as an international trade and sourcing house headquartered in India, coordinating high-grade spices, seeds, nuts, and agricultural products for international buyers.
          </p>
        </div>

        {/* Story Section in Frosted Glass */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 glass-card p-8 sm:p-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our Purpose & Methodology
            </h2>
            <p className="text-slate leading-relaxed">
              India produces some of the world&apos;s most sought-after agricultural commodities — from pungent cumin and vibrant high-curcumin turmeric to pure sesame and medicinal seeds. However, navigating regional suppliers, fluctuating moisture standards, and complex export paperwork can pose major challenges for global importers.
            </p>
            <p className="text-slate leading-relaxed">
              FEELEXIM was founded to eliminate this friction. We serve as your dedicated Indian sourcing arm — identifying authentic supplies, arranging independent laboratory tests, supervising sorting and custom packaging, and securing statutory export certifications before container dispatch.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/products"
                className="px-6 py-3 rounded-xl bg-gold text-navy font-bold text-xs hover:bg-gold-light transition-all flex items-center gap-2"
              >
                Explore Catalog <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl glass-pill text-white font-semibold text-xs hover:bg-white/[0.14] transition-all"
              >
                Contact Trade Desk
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 glass-card p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-sm font-bold text-white">Registered Credentials</span>
              <Award className="text-gold w-5 h-5" />
            </div>
            <div className="space-y-3">
              {siteConfig.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-white text-xs font-semibold">{cert} Certified & Registered</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate leading-relaxed pt-2 border-t border-white/10">
              All export shipments undergo required statutory phytosanitary inspections and quality checks in full compliance with Indian trade authorities.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid in Frosted Glass */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white">Our Core Commitments</h2>
            <p className="text-slate text-sm mt-2">Why international food companies and distributors rely on FEELEXIM.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
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
