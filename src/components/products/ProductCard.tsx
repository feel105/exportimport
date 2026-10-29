import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryEmojis: Record<string, string> = {
    'whole-spices': '🌶️',
    'spice-powders': '🫙',
    seeds: '🌱',
    'nuts-other': '🥜',
  }

  const emoji = categoryEmojis[product.category] || '📦'

  return (
    <div className="glass-card group p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full">
      <div>
        {/* Visual / Image Container */}
        <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden mb-4">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
            {emoji}
          </span>
          
          <div className="absolute top-2.5 left-2.5">
            <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-black/50 text-white/90 border border-white/10 backdrop-blur-md">
              {product.categoryLabel}
            </span>
          </div>

          {product.available && (
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-semibold text-emerald-300 backdrop-blur-md">
              <span className="glow-indicator-green !w-1.5 !h-1.5" />
              Ready
            </div>
          )}
        </div>

        {/* Product Details */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-slate text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
          {product.shortDescription}
        </p>
      </div>

      {/* Action Row */}
      <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1 transition-colors"
        >
          Details <ArrowRight size={13} />
        </Link>
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold text-navy hover:bg-gold-light font-bold text-xs transition-all shadow-[0_0_12px_rgba(224,160,69,0.25)]"
        >
          <Mail size={12} />
          Enquire
        </Link>
      </div>
    </div>
  )
}
