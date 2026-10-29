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
    <div className="glass-card !rounded-3xl group p-8 sm:p-9 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full shadow-xl">
      <div>
        {/* Visual / Image Container */}
        <div className="relative aspect-square w-full rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden mb-6 shadow-inner">
          {hasCustomImage ? (
            <Image
              src={product.image!}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <span className="text-7xl sm:text-8xl group-hover:scale-110 transition-transform duration-300 select-none">
              {emoji}
            </span>
          )}
          
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3.5 py-1.5 text-xs font-bold rounded-full bg-black/60 text-white border border-white/10 backdrop-blur-md">
              {product.categoryLabel}
            </span>
          </div>

          {product.available && (
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-semibold text-emerald-300 backdrop-blur-md">
              <span className="glow-indicator-green !w-2 !h-2" />
              Ready
            </div>
          )}
        </div>

        {/* Product Details */}
        <h3 className="text-2xl font-bold text-white mb-2.5 group-hover:text-gold transition-colors">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-slate text-sm sm:text-base line-clamp-2 leading-relaxed mb-8">
          {product.shortDescription}
        </p>
      </div>

      {/* Action Row */}
      <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
        <Link
          href={`/products/${product.slug}`}
          className="text-sm font-bold text-slate-300 hover:text-white inline-flex items-center gap-2 transition-colors"
        >
          <span>Full Spec</span>
          <ArrowRight size={15} />
        </Link>
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold text-navy hover:bg-gold-light font-bold text-xs sm:text-sm transition-all shadow-[0_0_16px_rgba(224,160,69,0.3)] hover:shadow-[0_0_22px_rgba(224,160,69,0.45)]"
        >
          <Mail size={14} />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  )
}
