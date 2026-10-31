import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function ContactCTA() {
  return (
    <section
      className="w-full border-b border-hairline py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-navy"
      aria-labelledby="cta-heading"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">
        <div className="rounded-2xl border border-hairline bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-transparent p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center w-full shadow-2xl">
          {/* Subtle warm glow behind */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(224, 142, 69, 0.16) 0%, transparent 65%)',
              filter: 'blur(85px)',
            }}
          />

          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-hairline text-xs font-semibold text-gold tracking-wide">
              <span className="mono-tag text-gold">READY TO INITIATE TRADE?</span>
            </div>

            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
            >
              Let&apos;s Start a Conversation.
            </h2>

            <p className="text-slate text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
              Share your target commodity specifications, required volume (FCL or LCL), and destination port. Our export desk will revert within 24 business hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Request Formal Quotation</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="px-6 py-3.5 rounded-full bg-white/[0.07] border border-hairline text-white font-semibold text-xs sm:text-sm hover:bg-white/[0.12] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Mail size={14} className="text-gold" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
