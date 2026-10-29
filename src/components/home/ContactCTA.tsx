import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function ContactCTA() {
  return (
    <section className="section-py relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="container-xl">
        <div className="glass-card !rounded-3xl p-12 sm:p-20 lg:p-28 relative overflow-hidden text-center border-gold/30 shadow-[0_28px_80px_rgba(224,160,69,0.18)]">
          {/* Subtle warm glow behind */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(224, 142, 69, 0.2) 0%, transparent 65%)',
              filter: 'blur(85px)',
            }}
          />

          <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold tracking-wide">
              <span className="glow-indicator-amber !w-2 !h-2" />
              <span>READY TO TRADE?</span>
            </div>

            <h2
              id="cta-heading"
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.12]"
            >
              Let&apos;s Start a Conversation.
            </h2>

            <p className="text-slate text-base sm:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              Share your target specifications, required volume, and destination port. We will revert with competitive pricing and comprehensive product details.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <Link
                href="/contact"
                className="px-10 py-4.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-base shadow-[0_0_28px_rgba(224,160,69,0.35)] hover:shadow-[0_0_36px_rgba(224,160,69,0.5)] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                <span>Request a Formal Quotation</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="px-9 py-4.5 rounded-2xl glass-pill text-white font-semibold text-base hover:bg-white/[0.14] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                <Mail size={18} className="text-gold" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
