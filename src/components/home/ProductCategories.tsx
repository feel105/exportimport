import Link from 'next/link'
import { ArrowRight, Leaf, Wind, Sprout, Package } from 'lucide-react'

const categories = [
  {
    id: 'whole-spices',
    label: 'Whole Spices',
    desc: 'Cumin, Coriander, Turmeric Finger, Black Pepper, Fennel, Cloves & Mustard',
    icon: Leaf,
    emoji: '🌶️',
    href: '/products?category=whole-spices',
    badge: 'Popular',
    accent: 'text-amber-400',
  },
  {
    id: 'spice-powders',
    label: 'Spice Powders',
    desc: 'Finely milled Turmeric, Red Chilli, Coriander, Ginger, Garlic & Onion Powders',
    icon: Wind,
    emoji: '🫙',
    href: '/products?category=spice-powders',
    badge: 'Consistent Mesh',
    accent: 'text-cyan-accent',
  },
  {
    id: 'seeds',
    label: 'Seeds & Grains',
    desc: 'Natural Sesame, Black Sesame, Flax, Chia, Basil, Kalonji & Quinoa',
    icon: Sprout,
    emoji: '🌱',
    href: '/products?category=seeds',
    badge: 'Cleaned 99.8%',
    accent: 'text-emerald-400',
  },
  {
    id: 'nuts-other',
    label: 'Nuts & Commodities',
    desc: 'Assorted export-grade nuts and bespoke Indian agricultural commodities',
    icon: Package,
    emoji: '🥜',
    href: '/products?category=nuts-other',
    badge: 'On Request',
    accent: 'text-purple-400',
  },
]

export default function ProductCategories() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="products-heading">
      <div className="container-xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-medium text-gold mb-3">
            <span>EXPORT PORTFOLIO</span>
          </div>
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Premium Indian Export Range
          </h2>
          <p className="text-slate text-sm sm:text-base mt-4 leading-relaxed">
            Carefully harvested, cleaned, sorted, and packed to comply with your destination market&apos;s import standards.
          </p>
        </div>

        {/* 4 Frosted Glass Category Cards matching Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ label, desc, emoji, href, badge }) => (
            <Link
              key={href}
              href={href}
              className="glass-card group p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Top header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {emoji}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300">
                    {badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {label}
                </h3>
                <p className="text-slate text-xs sm:text-sm leading-relaxed mb-6">
                  {desc}
                </p>
              </div>

              {/* Bottom interactive link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/80 group-hover:text-gold transition-colors">
                <span>Explore Category</span>
                <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all">
                  <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.16] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Browse Full Product Catalog (25+ Products)
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
