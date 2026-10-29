import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import AboutPreview from '@/components/home/AboutPreview'
import ProductCategories from '@/components/home/ProductCategories'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ExportProcess from '@/components/home/ExportProcess'
import QualitySection from '@/components/home/QualitySection'
import GlobalTrade from '@/components/home/GlobalTrade'
import FAQ from '@/components/home/FAQ'
import ContactCTA from '@/components/home/ContactCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FEELEXIM — Indian Spices & Agricultural Products Export',
  description:
    'FEELEXIM is your trusted Indian export partner for premium spices, seeds, nuts, and agricultural products. Quality-focused sourcing, competitive quotations, and flexible packaging.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ProductCategories />
      <WhyChooseUs />
      <ExportProcess />
      <QualitySection />
      <GlobalTrade />
      <FAQ />
      <ContactCTA />
    </>
  )
}
