import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'FEELEXIM website privacy policy and data protection terms.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container-xl max-w-4xl space-y-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="flex items-center gap-2 mb-2">
            <Shield size={16} className="text-gold" />
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate text-xs mt-1">Last Updated: October 2026</p>
        </div>

        <div className="glass-card p-8 sm:p-12 space-y-6 text-sm text-slate leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p>
              When you submit a quotation inquiry or contact request on the {siteConfig.name} website, we collect personal and commercial information including your name, company name, corporate email address, phone/WhatsApp number, destination country, and specified commodity requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. How We Use Your Information</h2>
            <p>
              The information collected is used exclusively for legitimate business communication:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Preparing and sending formal export price quotations (FOB/CIF/CFR).</li>
              <li>Coordinating commodity sample deliveries and laboratory testing reports.</li>
              <li>Facilitating container freight, customs documentation, and commercial agreements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Data Protection & Confidentiality</h2>
            <p>
              We do not sell, rent, or trade your contact or business information with third-party advertising networks. Information is only shared with authorized statutory trade authorities, shipping carriers, and inspection agencies strictly necessary to execute your export order.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Contacting Us</h2>
            <p>
              For any questions regarding your data or this policy, contact our privacy desk at{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                {siteConfig.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
