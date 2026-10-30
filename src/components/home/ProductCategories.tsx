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
  },
  {
    id: 'spice-powders',
    label: 'Spice Powders',
    desc: 'Finely milled Turmeric Powder, Red Chilli Powder, Coriander, Ginger, Garlic & Onion Powders',
    icon: Wind,
    emoji: '🫙',
    href: '/products?category=spice-powders',
    badge: 'Controlled Mesh',
  },
  {
    id: 'seeds',
    label: 'Seeds & Grains',
    desc: 'Natural Sesame Seeds, Black Sesame, Flax Seeds, Chia, Basil Seeds, Kalonji & Quinoa',
    icon: Sprout,
    emoji: '🌱',
    href: '/products?category=seeds',
    badge: 'Sortex 99.8%',
  },
  {
    id: 'nuts-other',
    label: 'Nuts & Commodities',
    desc: 'Assorted export-grade nuts and bespoke Indian agricultural commodities on commercial inquiry',
    icon: Package,
    emoji: '🥜',
    href: '/products?category=nuts-other',
    badge: 'On Request',
  },
]

export default function ProductCategories() {
  return (
    <section className="section-py relative overflow-hidden w-full" aria-labelledby="products-heading">
      <div className="container-xl space-y-6 sm:space-y-7 lg:space-y-8 w-full">

        {/* Section Heading with Calibrated Margins */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span>EXPORT PORTFOLIO</span>
          </div>
          <h2
            id="products-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight"
          >
            Premium Indian Export Range
          </h2>
          <p className="text-slate text-xs sm:text-sm leading-relaxed pt-0.5">
            Carefully harvested, cleaned, sorted, and packed to comply with your destination market&apos;s statutory food safety import standards.
          </p>
        </div>

        {/* 4 Frosted Glass Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {categories.map(({ label, desc, emoji, href, badge }) => (
            <Link
              key={href}
              href={href}
              className="glass-card !rounded-2xl group p-4.5 sm:p-5 lg:p-5.5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden shadow-xl"
            >
              <div className="space-y-3.5">
                {/* Top header row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    {emoji}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-200">
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

              {/* Bottom interactive link */}
              <div className="pt-3 mt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/90 group-hover:text-gold transition-colors">
                <span>View Products</span>
                <div className="w-7 h-7 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all shadow-sm">
                  <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center pt-1">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.16] font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            <span>Browse Full Product Catalog (25+ Commodities)</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  )
}
