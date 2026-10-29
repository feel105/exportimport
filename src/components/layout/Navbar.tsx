'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)

  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setIsMobileOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Info Bar */}
        <div
          className={`hidden md:block transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-12 opacity-100'
          }`}
          style={{ background: 'rgba(11, 17, 26, 0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="container-xl flex items-center justify-between py-2 text-xs">
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-gold transition-colors"
              >
                <Mail size={13} className="text-gold" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-slate-300 hover:text-gold transition-colors"
              >
                <Phone size={13} className="text-gold" />
                <span>{siteConfig.phone}</span>
              </a>
              <div className="flex items-center gap-1.5 text-slate-400 pl-2 border-l border-white/10">
                <ShieldCheck size={13} className="text-emerald-400" />
                <span>FSSAI • APEDA • SPICE RCMC Registered</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled ? 'glass-nav py-3' : 'bg-transparent py-4 lg:py-5'
          }`}
        >
          <div className="container-xl flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group" aria-label="FEELEXIM Home">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm text-navy shadow-md transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  boxShadow: '0 0 16px rgba(224, 160, 69, 0.3)',
                }}
              >
                FE
              </div>
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                FEEL<span className="text-gold">EXIM</span>
              </span>
            </Link>

            {/* Desktop Navigation with Floating Pill Design */}
            <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.05] border border-white/[0.09] backdrop-blur-xl" aria-label="Main navigation">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-xs xl:text-sm font-semibold rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-white/15 text-white shadow-sm border border-white/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.07]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3.5">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-xs shadow-[0_0_18px_rgba(224,160,69,0.3)] hover:shadow-[0_0_24px_rgba(224,160,69,0.45)] transition-all hover:-translate-y-0.5"
              >
                <span>Request a Quote</span>
                <ArrowRight size={13} />
              </Link>

              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 text-white hover:bg-white/15 transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
