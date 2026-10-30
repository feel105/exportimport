import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'FEELEXIM commercial terms, quotation conditions, and website terms of use.',
}

export default function TermsPage() {
  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
      <div className="container-xl w-full space-y-12">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <FileText size={18} className="text-gold" />
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">Legal Document</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate text-sm mt-2">Last Updated: October 2026 • FEELEXIM Trade Operations</p>
        </div>

        <div className="glass-card !rounded-3xl p-10 sm:p-14 lg:p-16 space-y-8 text-sm sm:text-base text-slate leading-relaxed shadow-2xl">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Quotations & Price Validity</h2>
            <p>
              Commodity market prices for agricultural crops, spices, and seeds are subject to daily market fluctuations, crop arrival volumes, and currency variations. Quotations issued through the {siteConfig.name} platform or direct correspondence are valid only for the validity duration explicitly stated on the written proforma or quote sheet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Quality Specifications & Tolerances</h2>
            <p>
              All shipments are executed in compliance with contractual specifications agreed between buyer and seller. Standard agricultural tolerances (moisture, foreign matter, admixture, broken grains) follow Spices Board of India / APEDA / AGMARK guidelines unless custom tolerances are contractually defined.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. International Commercial Terms (Incoterms)</h2>
            <p>
              Standard contracts are governed by ICC Incoterms (typically FOB Indian Ports, CIF, or CFR Destination Ports). Marine insurance, customs handling, and discharge demurrage are assigned according to the agreed Incoterm in each individual contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Force Majeure</h2>
            <p>
              Neither party shall be held liable for delays or failure in delivery resulting from acts of God, extreme adverse weather conditions, freight embargoes, government export restrictions, or unforeseen international shipping disruptions beyond reasonable control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Governing Law & Dispute Resolution</h2>
            <p>
              All trade contracts and commercial agreements are subject to the laws and jurisdiction of India, with mutual arbitration conducted under standard rules of international spice and commodity trade associations where applicable.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
