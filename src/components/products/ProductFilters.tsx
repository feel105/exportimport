'use client'

import { Search, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { ProductCategory, LocalizedProductCategory } from '@/types/product'

interface ProductFiltersProps {
  categories: LocalizedProductCategory[]
  activeCategory: ProductCategory | 'all'
  onCategoryChange: (category: ProductCategory | 'all') => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function ProductFilters({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: ProductFiltersProps) {
  const t = useTranslations('pages.products')

  return (
    <div className="w-full space-y-8 mb-16">
      <div className="relative w-full max-w-2xl">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white/[0.07] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 backdrop-blur-2xl transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
            aria-label={t('clearSearch')}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="w-full flex flex-wrap items-center gap-3.5">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-gold to-gold-dark text-navy shadow-[0_0_20px_rgba(224,160,69,0.4)]'
              : 'glass-card !rounded-xl !p-2.5 !px-5 text-slate-300 hover:text-white hover:border-white/30'
          }`}
        >
          {t('allCommodities')}
        </button>

        {categories.map((category) => {
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-navy shadow-[0_0_20px_rgba(224,160,69,0.4)]'
                  : 'glass-card !rounded-xl !p-2.5 !px-5 text-slate-300 hover:text-white hover:border-white/30'
              }`}
            >
              {category.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
