import { Product } from '@/types/product'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="glass-card !rounded-3xl text-center py-20 px-6">
        <p className="text-5xl mb-4">🔍</p>
        <h3 className="text-xl font-bold text-white mb-2">No matching products found</h3>
        <p className="text-sm text-slate max-w-sm mx-auto">
          Try adjusting your search query or selecting a different category filter.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-7 lg:gap-8 xl:gap-9 w-full">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
