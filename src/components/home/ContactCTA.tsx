import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="container-xl">
        <div className="glass-card p-8 sm:p-14 lg:p-16 relative overflow-hidden text-center max-w-4xl mx-auto border-gold/30 shadow-[0_20px_60px_rgba(224,160,69,0.12)]">
          {/* Subtle warm glow behind */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(224, 142, 69, 0.15) 0%, transparent 60%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.14] text-xs font-semibold text-gold">
              <span className="glow-indicator-amber !w-2 !h-2" />
              <span>READY TO TRADE?</span>
            </div>

            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Let&apos;s Start a Conversation.
            </h2>

            <p className="text-slate text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Share your target specifications, required quantities, and destination port. We will revert with competitive pricing and comprehensive product details.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm shadow-[0_0_24px_rgba(224,160,69,0.35)] hover:shadow-[0_0_32px_rgba(224,160,69,0.5)] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Request a Formal Quotation
                <ArrowRight size={16} />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="px-6 py-3.5 rounded-2xl glass-pill text-white font-semibold text-sm hover:bg-white/[0.14] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Mail size={15} className="text-gold" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
