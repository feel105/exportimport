import { Suspense } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'
import BackToTop from '@/components/ui/BackToTop'
import CurrentYear from '@/components/ui/CurrentYear'

function LinkedInIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative mt-10 sm:mt-14 lg:mt-16 border-t border-white/10 w-full" style={{ background: 'rgba(10, 15, 24, 0.98)' }} role="contentinfo">
      <div className="container-xl w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12">
        {/* Grid spanning full widescreen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 w-full">

          {/* Column 1 — Brand (4 Cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="FEELEXIM">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-xs text-navy shadow-md"
                style={{
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  boxShadow: '0 0 18px rgba(224, 160, 69, 0.35)',
                }}
              >
                FE
              </div>
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                FEEL<span className="text-gold">EXIM</span>
              </span>
            </Link>

            <p className="text-slate text-xs sm:text-sm leading-relaxed max-w-sm">
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white hover:border-gold/40 transition-all hover:-translate-y-0.5"
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white hover:border-gold/40 transition-all hover:-translate-y-0.5"
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white hover:border-gold/40 transition-all hover:-translate-y-0.5"
                >
                  <FacebookIcon />
                </a>
              )}
            </div>
          </div>

          {/* Column 2 — Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-gold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Product Categories (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-gold uppercase tracking-wider">Product Categories</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.footerCategories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Desk (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-gold uppercase tracking-wider">Export Trade Desk</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-slate-300 hover:text-gold transition-colors"
                >
                  <Mail size={18} className="text-gold mt-1 flex-shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-slate-300 hover:text-gold transition-colors"
                >
                  <Phone size={18} className="text-gold mt-1 flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span>India (Operations & Export Despatch)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with Refined Top Padding */}
        <div className="mt-12 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 w-full">
          <p>
            © <Suspense fallback={<span>2026</span>}><CurrentYear /></Suspense> {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <BackToTop />
    </footer>
  )
}
