'use client'

import { Search, X } from 'lucide-react'
import { ProductCategory, ProductCategory_Meta } from '@/types/product'

interface ProductFiltersProps {
  categories: ProductCategory_Meta[]
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
  return (
    <div className="space-y-6 mb-10">
      {/* Search Input styled as liquid glass bar */}
      <div className="relative max-w-md mx-auto sm:mx-0">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products by name or tag..."
          className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-white/[0.07] border border-white/15 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 backdrop-blur-xl transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Pills styled matching reference image floating docks */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-gold to-gold-dark text-navy font-bold shadow-[0_0_16px_rgba(224,160,69,0.35)]'
              : 'glass-card !rounded-xl !p-2 !px-4 text-slate-300 hover:text-white hover:border-white/30'
          }`}
        >
          All Products
        </button>

        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-navy font-bold shadow-[0_0_16px_rgba(224,160,69,0.35)]'
                  : 'glass-card !rounded-xl !p-2 !px-4 text-slate-300 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
