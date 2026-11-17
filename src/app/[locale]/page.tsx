import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import AboutPreview from '@/components/home/AboutPreview'
import ProductCategories from '@/components/home/ProductCategories'
import TradePlatformShowcase from '@/components/home/TradePlatformShowcase'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import SpecificationWorkbench from '@/components/home/SpecificationWorkbench'
import QualitySection from '@/components/home/QualitySection'
import GlobalTrade from '@/components/home/GlobalTrade'
import FAQ from '@/components/home/FAQ'
import ContactCTA from '@/components/home/ContactCTA'
import { buildPageMetadata } from '@/lib/metadata'
import { getLocaleFromParams } from '@/i18n/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return buildPageMetadata({
    locale,
    path: '/',
    title: t('homeTitle'),
    description: t('homeDescription'),
    absoluteTitle: true,
  })
}

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <TrustStrip /> */}
      <AboutPreview />
      <ProductCategories />
      {/* <TradePlatformShowcase /> */}
      <WhyChooseUs />
      <SpecificationWorkbench />
      <QualitySection />
      {/* <GlobalTrade /> */}
      <FAQ />
      <ContactCTA />
    </>
  )
}
