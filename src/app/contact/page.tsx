import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { EnquiryForm } from '@/components/contact/EnquiryForm'

export const metadata: Metadata = {
  title: 'Contact Us & Request a Quote',
  description:
    'Contact FEELEXIM trade desk. Request formal quotations for Indian spices, seeds, and agricultural commodities with custom packaging and destination shipping terms.',
}

function ContactFormWrapper({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>
}) {
  return (
    <Suspense fallback={<div className="glass-card p-12 text-center text-slate">Loading quotation form...</div>}>
      <ContactFormContent searchParams={searchParams} />
    </Suspense>
  )
}

async function ContactFormContent({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>
}) {
  const params = await searchParams
  return <EnquiryForm initialProduct={params.product || ''} />
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>
}) {
  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 w-full">
      <div className="container-xl space-y-16 lg:space-y-24 w-full">

        {/* Page Heading */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
            <span className="mono-tag text-gold">COMMERCIAL TRADE DESK • DIRECT INQUIRY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Connect With Our Export Desk
          </h1>
          <p className="text-slate text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto pt-1">
            Ready to source Indian agricultural commodities? Send us your required specifications, estimated volume, and destination port.
          </p>
        </div>

        {/* 2-Column Grid with Generous Gaps */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start w-full">

          {/* Left Column: Direct Contact & Info Card */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="glass-card !rounded-2xl p-7 sm:p-9 lg:p-10 space-y-6 shadow-2xl w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-white pb-4 border-b border-white/10">
                Direct Inquiries
              </h2>

              <ul className="space-y-5 text-sm sm:text-base">
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 shadow-inner">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Business Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white font-semibold hover:text-gold transition-colors text-sm sm:text-base"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 shadow-inner">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Phone / WhatsApp</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="text-white font-semibold hover:text-gold transition-colors text-sm sm:text-base"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 shadow-inner">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Location</p>
                    <p className="text-white font-semibold text-sm sm:text-base">India (Export Operations)</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 shadow-inner">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Response Time</p>
                    <p className="text-white font-semibold text-sm sm:text-base">Within 24 business hours</p>
                  </div>
                </li>
              </ul>

              <div className="pt-5 border-t border-white/10 space-y-3">
                <p className="text-xs text-slate font-medium uppercase tracking-wider">Export Compliance</p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.certifications.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-white font-semibold flex items-center gap-1.5"
                    >
                      <ShieldCheck size={13} className="text-emerald-400" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="glass-card !rounded-2xl p-6 sm:p-7 border-white/10 text-xs sm:text-sm text-slate space-y-1.5 shadow-xl">
              <p className="text-white font-bold text-sm">Sample Shipments</p>
              <p className="leading-relaxed">
                Courier sample parcels (DHL/FedEx) can be arranged for quality analysis upon mutual agreement on commercial terms.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7 w-full">
            <ContactFormWrapper searchParams={searchParams} />
          </div>

        </div>
      </div>
    </div>
  )
}
