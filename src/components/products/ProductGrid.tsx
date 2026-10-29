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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
