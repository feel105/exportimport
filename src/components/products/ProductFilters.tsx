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
    <div className="space-y-8 mb-16">
      {/* Search Input styled as liquid glass bar */}
      <div className="relative max-w-2xl mx-auto sm:mx-0">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search commodities by name, botanical grade, origin or tag..."
          className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white/[0.07] border border-white/15 text-sm sm:text-base text-white placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 backdrop-blur-2xl transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category Pills styled matching reference image floating docks */}
      <div className="flex flex-wrap items-center gap-3.5">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-gold to-gold-dark text-navy shadow-[0_0_24px_rgba(224,160,69,0.4)]'
              : 'glass-card !rounded-2xl !p-3 !px-6 text-slate-300 hover:text-white hover:border-white/30'
          }`}
        >
          All Commodities
        </button>

        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-navy shadow-[0_0_24px_rgba(224,160,69,0.4)]'
                  : 'glass-card !rounded-2xl !p-3 !px-6 text-slate-300 hover:text-white hover:border-white/30'
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
