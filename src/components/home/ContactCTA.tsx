import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function ContactCTA() {
  return (
    <section className="section-py relative overflow-hidden w-full" aria-labelledby="cta-heading">
      <div className="container-xl w-full">
        <div className="glass-card !rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden text-center w-full border-gold/30 shadow-[0_28px_80px_rgba(224,160,69,0.18)]">
          {/* Subtle warm glow behind */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(224, 142, 69, 0.2) 0%, transparent 65%)',
              filter: 'blur(85px)',
            }}
          />

          <div className="relative z-10 space-y-3.5 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
              <span className="glow-indicator-amber !w-2 !h-2" />
              <span>READY TO TRADE?</span>
            </div>

            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15]"
            >
              Let&apos;s Start a Conversation.
            </h2>

            <p className="text-slate text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
              Share your target specifications, required volume, and destination port. We will revert with competitive pricing and comprehensive product details.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Request a Formal Quotation</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="px-6 py-3 rounded-xl glass-pill text-white font-semibold text-xs sm:text-sm hover:bg-white/[0.14] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Mail size={15} className="text-gold" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
