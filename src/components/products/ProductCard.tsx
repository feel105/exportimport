'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mail } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { localeHref } from '@/i18n/href'
import type { Locale } from '@/i18n/config'
import type { LocalizedProduct } from '@/types/product'

interface ProductCardProps {
  product: LocalizedProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations('pages.products')
  const locale = useLocale() as Locale

  const categoryEmojis: Record<string, string> = {
    'whole-spices': '🌶️',
    'spice-powders': '🫙',
    seeds: '🌱',
    'nuts-other': '🥜',
  }

  const emoji = categoryEmojis[product.category] || '📦'
  const hasCustomImage = product.image && product.image.startsWith('/product/')
  const productHref = localeHref(locale, `/products/${product.slug}`)
  const enquiryHref = localeHref(
    locale,
    `/contact?product=${encodeURIComponent(product.name)}`
  )

  return (
    <div className="glass-card !rounded-2xl group p-5 sm:p-6 lg:p-6.5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full shadow-xl">
      <div>
        <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden mb-5 shadow-inner">
          {hasCustomImage ? (
            <Image
              src={product.image}
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
              {t('ready')}
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
          <Link href={productHref}>{product.name}</Link>
        </h3>
        <p className="text-slate text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6">
          {product.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <Link
          href={productHref}
          className="text-xs sm:text-sm font-bold text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
        >
          <span>{t('fullSpec')}</span>
          <ArrowRight size={14} />
        </Link>
        <Link
          href={enquiryHref}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold text-navy hover:bg-gold-light font-bold text-xs transition-all shadow-[0_0_14px_rgba(56,207,255,0.3)] hover:shadow-[0_0_20px_rgba(56,207,255,0.45)]"
        >
          <Mail size={13} />
          <span>{t('enquire')}</span>
        </Link>
      </div>
    </div>
  )
}
