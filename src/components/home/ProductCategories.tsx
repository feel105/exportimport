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
    <section className="section-py relative overflow-hidden" aria-labelledby="products-heading">
      <div className="container-xl space-y-14 lg:space-y-18">

        {/* Section Heading with Generous Margins */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
            <span>EXPORT PORTFOLIO</span>
          </div>
          <h2
            id="products-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            Premium Indian Export Range
          </h2>
          <p className="text-slate text-base sm:text-lg leading-relaxed pt-1">
            Carefully harvested, cleaned, sorted, and packed to comply with your destination market&apos;s statutory food safety import standards.
          </p>
        </div>

        {/* 4 Frosted Glass Category Cards spanning wide screens with generous padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {categories.map(({ label, desc, emoji, href, badge }) => (
            <Link
              key={href}
              href={href}
              className="glass-card !rounded-3xl group p-9 sm:p-10 lg:p-11 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-xl"
            >
              <div className="space-y-7">
                {/* Top header row */}
                <div className="flex items-center justify-between">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {emoji}
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-200">
                    {badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">
                    {label}
                  </h3>
                  <p className="text-slate text-sm sm:text-base leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Bottom interactive link */}
              <div className="pt-7 mt-8 border-t border-white/10 flex items-center justify-between text-sm font-bold text-white/90 group-hover:text-gold transition-colors">
                <span>View Products</span>
                <div className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all shadow-sm">
                  <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center pt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.16] font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            <span>Browse Full Product Catalog (25+ Commodities)</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}
