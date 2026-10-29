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
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container-xl space-y-12">

        {/* Page Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold">
            <span className="glow-indicator-green !w-2 !h-2" />
            <span>TRADE DESK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect With Our Export Desk
          </h1>
          <p className="text-slate text-base sm:text-lg leading-relaxed">
            Ready to source Indian agricultural commodities? Send us your required specifications, estimated volume, and destination port.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Contact & Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 space-y-6">
              <h2 className="text-xl font-bold text-white pb-4 border-b border-white/10">
                Direct Inquiries
              </h2>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Business Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white font-semibold hover:text-gold transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Phone / WhatsApp</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="text-white font-semibold hover:text-gold transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Location</p>
                    <p className="text-white font-semibold">India (Export Operations)</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Response Time</p>
                    <p className="text-white font-semibold">Within 24 business hours</p>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <p className="text-xs text-slate font-medium">Export Compliance</p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.certifications.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] text-white font-semibold flex items-center gap-1.5"
                    >
                      <ShieldCheck size={12} className="text-emerald-400" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="glass-card p-6 border-white/10 text-xs text-slate space-y-1.5">
              <p className="text-white font-semibold">Sample Shipments</p>
              <p className="leading-relaxed">
                Courier sample parcels (DHL/FedEx) can be arranged for quality analysis upon mutual agreement on commercial terms.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            <ContactFormWrapper searchParams={searchParams} />
          </div>

        </div>
      </div>
    </div>
  )
}
