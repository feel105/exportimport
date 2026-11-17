import Link from 'next/link'
import { getLocale, getTranslations } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import { localeHref } from '@/i18n/href'
import CategoryCard from './CategoryCard'

const categories = [
  { id: 'whole-spices', emoji: '🌶️', href: '/products?category=whole-spices' },
  { id: 'spice-powders', emoji: '🫙', href: '/products?category=spice-powders' },
  { id: 'seeds', emoji: '🌱', href: '/products?category=seeds' },
  { id: 'nuts-other', emoji: '🥜', href: '/products?category=nuts-other' },
]

const categoryImages: Record<string, string[]> = {
  'whole-spices': [
    '/product/spices/cumin/cumin.JPG',
    '/product/spices/blackpepper/blakcpapper.JPG',
    '/product/spices/cardamom/2.jpg',
    '/product/spices/coriander/2.png',
    '/product/spices/turmeric/real1.JPG'
  ],
  'spice-powders': [
    '/product/spices/chilli/2.jpg',
    '/product/spices/coriander/1.png',
    '/product/spices/cumin/4.jpg',
    '/product/spices/turmeric/3.png',
  ],
  seeds: ['/product/spices/sesame/sesame_Natural.jpg', '/product/spices/seeds/Ajwain2.jpeg', '/product/spices/seeds/quinoa1.jpeg', '/product/spices/seeds/fennel2.jpeg'],
  'nuts-other': ['/home/slides/nuts.jpg', '/product/spices/tulsi/2.png', '/product/spices/tea/tea.jpg', '/product/spices/moringa/moringa powder.png'],
}

export default async function ProductCategories() {
  const t = await getTranslations('productRange')
  const locale = await getLocale()

  return (
    <section
      className="w-full border-b border-hairline py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-navy-deep/40"
      aria-labelledby="products-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-10 sm:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
              <span className="mono-tag text-gold">{t('eyebrow')}</span>
            </div>
            <h2
              id="products-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
            >
              {t('heading')}
            </h2>
            <p className="text-slate text-sm sm:text-base leading-relaxed pt-1">
              {t('description')}
            </p>
          </div>

          <Link
            href={localeHref(locale, '/products')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white border border-hairline text-xs font-semibold transition-all self-start md:self-auto"
          >
            <span>{t('browse')}</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {categories.map(({ id, emoji, href }, index) => (
            <CategoryCard
              key={id}
              href={localeHref(locale, href)}
              emoji={emoji}
              images={categoryImages[id]}
              badge={t(`categories.${id}.badge`)}
              label={t(`categories.${id}.label`)}
              desc={t(`categories.${id}.desc`)}
              specs={t(`categories.${id}.specs`)}
              viewGrades={t('viewGrades')}
              interval={3400 + (index % 4) * 600}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
