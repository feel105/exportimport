import Link from 'next/link'
import Image from 'next/image'
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
  const hasCustomImage = product.image && product.image.startsWith('/product/')

  return (
    <div className="glass-card !rounded-2xl group p-5 sm:p-6 lg:p-6.5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full shadow-xl">
      <div>
        {/* Visual / Image Container */}
        <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden mb-5 shadow-inner">
          {hasCustomImage ? (
            <Image
              src={product.image!}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <span className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform duration-300 select-none">
              {emoji}
            </span>
          )}
          
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-black/60 text-white border border-white/10 backdrop-blur-md">
              {product.categoryLabel}
            </span>
          </div>

          {product.available && (
            <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-semibold text-emerald-300 backdrop-blur-md">
              <span className="glow-indicator-green !w-2 !h-2" />
              Ready
            </div>
          )}
        </div>

        {/* Product Details */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-slate text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6">
          {product.shortDescription}
        </p>
      </div>

      {/* Action Row */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <Link
          href={`/products/${product.slug}`}
          className="text-xs sm:text-sm font-bold text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
        >
          <span>Full Spec</span>
          <ArrowRight size={14} />
        </Link>
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold text-navy hover:bg-gold-light font-bold text-xs transition-all shadow-[0_0_14px_rgba(224,160,69,0.3)] hover:shadow-[0_0_20px_rgba(224,160,69,0.45)]"
        >
          <Mail size={13} />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  )
}
