import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { products, getProductBySlug, getProductsByCategory } from '@/data/products'

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) return { title: 'Product Not Found' }

  return {
    title: `${product.name} — Indian Export Specification`,
    description: product.shortDescription,
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3)

  const categoryEmojis: Record<string, string> = {
    'whole-spices': '🌶️',
    'spice-powders': '🫙',
    seeds: '🌱',
    'nuts-other': '🥜',
  }
  const emoji = categoryEmojis[product.category] || '📦'

  return (
    <div className="pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
      <div className="container-xl space-y-16 lg:space-y-24">
        {/* Back navigation */}
        <div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> Back to Products Catalog
          </Link>
        </div>

        {/* Product Showcase in Frosted Glass */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          
          {/* Left: Product Visual Card */}
          <div className="lg:col-span-5 glass-card !rounded-3xl p-10 sm:p-12 text-center space-y-8 shadow-2xl">
            <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center relative overflow-hidden shadow-inner">
              {product.image && product.image.startsWith('/product/') ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-9xl select-none">{emoji}</span>
              )}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-black/60 text-white border border-white/10 backdrop-blur-md">
                  {product.categoryLabel}
                </span>
              </div>
              <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-semibold text-emerald-300 backdrop-blur-md">
                <span className="glow-indicator-green !w-2 !h-2" />
                Export Ready
              </div>
            </div>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-left">
                <p className="text-slate">Origin</p>
                <p className="text-white font-bold mt-1 text-base">India</p>
              </div>
              <div className="p-4.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-left">
                <p className="text-slate">Purity Standard</p>
                <p className="text-emerald-400 font-bold mt-1 text-base">99%+ Machine Cleaned</p>
              </div>
            </div>
          </div>

          {/* Right: Specifications & Inquire */}
          <div className="lg:col-span-7 glass-card !rounded-3xl p-10 sm:p-14 lg:p-16 space-y-8 shadow-2xl">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-gold uppercase tracking-wider">
                {product.categoryLabel}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mt-2 tracking-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-slate text-base sm:text-lg leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/[0.08] space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-gold" />
                Export Specification Parameters
              </h3>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2.5 leading-relaxed">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span>Grading: Machine cleaned & Sortex graded</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span>Moisture Content: Strictly controlled per buyer destination norms</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span>Packaging: 25kg / 50kg PP bags, Jute bags, Vacuum bags, or Private Label</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span>Loadability: 1×20ft FCL or 1×40ft FCL container loads</span>
                </li>
              </ul>
            </div>

            {/* Tags */}
            {product.tags && (
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="pt-6 flex flex-wrap items-center gap-5 border-t border-white/10">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="px-9 py-4.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm sm:text-base shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all flex items-center gap-2.5"
              >
                <Mail size={18} /> <span>Request Quotation for {product.name}</span>
              </Link>
              <Link
                href="/quality-compliance"
                className="px-8 py-4.5 rounded-2xl glass-pill text-white text-xs sm:text-sm font-semibold hover:bg-white/[0.14] transition-all"
              >
                Quality Compliance Details
              </Link>
            </div>
          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Related Products in {product.categoryLabel}</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="glass-card !rounded-3xl p-6 sm:p-7 group flex items-center gap-5 hover:-translate-y-1.5 transition-all shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-inner flex-shrink-0">
                    {categoryEmojis[rel.category] || '📦'}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white group-hover:text-gold transition-colors truncate">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate mt-1 line-clamp-1">{rel.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
