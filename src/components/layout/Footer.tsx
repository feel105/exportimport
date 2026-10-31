'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import BackToTop from '@/components/ui/BackToTop'
import CurrentYear from '@/components/ui/CurrentYear'

function LinkedInIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer
      className="w-full border-t border-hairline bg-[#090E17] text-slate-300 relative overflow-hidden"
      role="contentinfo"
    >
      <div className="container-xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 pt-16 sm:pt-20 pb-12 space-y-14">
        
        {/* Sanity-Style Top Section: Community & Inline Newsletter Capture Form */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 border-b border-hairline">
          <div className="max-w-xl space-y-2">
            <span className="mono-tag text-gold font-bold">MARKET INTELLIGENCE</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Subscribe to Export Price Intelligence.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Weekly harvest crop arrivals, wholesale terminal price movements, and ocean freight space updates directly to your corporate inbox.
            </p>
          </div>

          {/* Inline Email Form */}
          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Thank you. You are now subscribed to FEELEXIM trade updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="buyer@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-4.5 rounded-full bg-white/[0.04] border border-hairline text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-gold transition-colors font-mono"
                />
                <button
                  type="submit"
                  className="h-11 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0 border border-hairline"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Full-Width Multi-Column Link Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 w-full">

          {/* Column 1 — Brand (4 Cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="FEELEXIM">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-xs text-navy shadow-md"
                style={{
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  boxShadow: '0 0 16px rgba(224, 160, 69, 0.35)',
                }}
              >
                FE
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                FEEL<span className="text-gold">EXIM</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Connecting international importers, food brands, and distributors with authentic Indian agricultural commodities through quality-focused sourcing and port logistics.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.06] border border-hairline text-white hover:bg-white/[0.12] transition-colors"
                >
                  <LinkedInIcon />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.06] border border-hairline text-white hover:bg-white/[0.12] transition-colors"
                >
                  <InstagramIcon />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.06] border border-hairline text-white hover:bg-white/[0.12] transition-colors"
                >
                  <FacebookIcon />
                </a>
              )}
            </div>
          </div>

          {/* Column 2 — Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <h3 className="mono-tag text-gold font-bold tracking-wider">NAVIGATION</h3>
            <ul className="space-y-2">
              {siteConfig.footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Product Categories (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <h3 className="mono-tag text-gold font-bold tracking-wider">COMMODITIES</h3>
            <ul className="space-y-2">
              {siteConfig.footerCategories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Desk (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <h3 className="mono-tag text-gold font-bold tracking-wider">TRADE DESK</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors truncate"
                >
                  <Mail size={12} className="text-gold flex-shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone size={12} className="text-gold flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={12} className="text-gold flex-shrink-0 mt-0.5" />
                <span>India • Mundra & Nhava Sheva Despatch Corridor</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with Sanity-Style Status Telemetry */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 w-full">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>MUNDRA & NHAVA SHEVA PORTS OPERATIONAL</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <p>
            © <Suspense fallback={<span>2026</span>}><CurrentYear /></Suspense> {siteConfig.name}. All rights reserved.
          </p>
        </div>

      </div>

      <BackToTop />
    </footer>
  )
}
