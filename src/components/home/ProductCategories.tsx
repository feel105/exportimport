import Link from 'next/link'
import { ArrowRight, Leaf, Wind, Sprout, Package } from 'lucide-react'

const categories = [
  {
    id: 'whole-spices',
    label: 'Whole Spices',
    desc: 'Cumin Seeds, Coriander Seeds, Turmeric Finger, Black Pepper, Fennel, Cloves & Mustard Seeds',
    icon: Leaf,
    emoji: '🌶️',
    href: '/products?category=whole-spices',
    badge: 'High Demand',
    specs: 'Machine Cleaned • ASTA Tolerances',
  },
  {
    id: 'spice-powders',
    label: 'Spice Powders',
    desc: 'Finely milled Turmeric Powder, Red Chilli Powder, Coriander, Ginger, Garlic & Onion Powders',
    icon: Wind,
    emoji: '🫙',
    href: '/products?category=spice-powders',
    badge: 'Controlled Mesh',
    specs: '60 - 100 Mesh • Pure & Unadulterated',
  },
  {
    id: 'seeds',
    label: 'Seeds & Grains',
    desc: 'Natural Sesame Seeds, Black Sesame, Flax Seeds, Chia, Basil Seeds, Kalonji & Quinoa',
    icon: Sprout,
    emoji: '🌱',
    href: '/products?category=seeds',
    badge: 'Sortex 99.8%',
    specs: 'Laser Cleaned • Purity 99.8%+',
  },
  {
    id: 'nuts-other',
    label: 'Nuts & Commodities',
    desc: 'Assorted export-grade nuts and bespoke Indian agricultural commodities on commercial inquiry',
    icon: Package,
    emoji: '🥜',
    href: '/products?category=nuts-other',
    badge: 'On Request',
    specs: 'Direct Sourcing • Export Graded',
  },
]

export default function ProductCategories() {
  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy-deep/40"
      aria-labelledby="products-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12">

        {/* Section Heading with Sanity Display Typography */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
              <span className="mono-tag text-gold">EXPORT PORTFOLIO • 25+ COMMODITIES</span>
            </div>
            <h2
              id="products-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
            >
              Premium Indian Export Range.
            </h2>
            <p className="text-slate text-sm sm:text-base leading-relaxed pt-1">
              Machine cleaned, optically sorted, and packed to comply with your destination market&apos;s statutory food safety import standards.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white border border-hairline text-xs font-semibold transition-all self-start md:self-auto"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 4 Architectural Bento Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {categories.map(({ label, desc, emoji, href, badge, specs }) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-hairline bg-white/[0.02] hover:bg-white/[0.05] hover:border-hairline-light group p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden space-y-6"
            >
              <div className="space-y-4">
                {/* Top header row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.08] border border-hairline flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    {emoji}
                  </div>
                  <span className="mono-tag text-[10px] text-slate-400 group-hover:text-gold transition-colors">
                    {badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                    {label}
                  </h3>
                  <p className="text-slate text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Bottom specs & interactive link */}
              <div className="pt-3.5 border-t border-hairline space-y-2">
                <p className="text-[10px] font-mono text-slate-400">
                  {specs}
                </p>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                  <span className="font-mono text-[11px]">VIEW GRADES</span>
                  <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-hairline flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all shadow-sm">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
