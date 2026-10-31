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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FEELEXIM — The Agricultural Export Platform | Indian Spices, Seeds & Commodities',
  description:
    'FEELEXIM is the modern B2B Indian agricultural export platform for premium whole spices, ground powders, seeds, and commodities. Direct farm-origin sourcing, NABL laboratory testing, and ocean freight logistics to 35+ global ports.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ProductCategories />
      <TradePlatformShowcase />
      <WhyChooseUs />
      <SpecificationWorkbench />
      <QualitySection />
      <GlobalTrade />
      <FAQ />
      <ContactCTA />
    </>
  )
}
