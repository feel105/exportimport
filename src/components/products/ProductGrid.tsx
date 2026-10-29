import { Product } from '@/types/product'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="glass-card text-center py-16 px-4">
        <p className="text-4xl mb-3">🔍</p>
        <h3 className="text-lg font-bold text-white mb-1">No products found</h3>
        <p className="text-sm text-slate">
          Try adjusting your search query or selecting a different category.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
