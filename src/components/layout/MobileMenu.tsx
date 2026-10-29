'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full lg:hidden"
        style={{
          background: 'linear-gradient(160deg, #10253F 0%, #0B1424 100%)',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ fontWeight: 800, fontSize: '1.125rem', color: '#fff', letterSpacing: '-0.02em' }}>
            FEEL<span style={{ color: 'var(--gold)' }}>EXIM</span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all"
                style={{
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--gold)' : '3px solid transparent',
                }}
              >
                {link.label}
                {isActive && <ArrowRight size={16} style={{ color: 'var(--gold)' }} />}
              </Link>
            )
          })}
        </nav>

        {/* Divider */}
        <div className="mx-6 gradient-divider" />

        {/* Contact info */}
        <div className="px-6 py-5 space-y-3">
          <p className="eyebrow" style={{ fontSize: '0.7rem' }}>Get in Touch</p>
          <a href={`mailto:${siteConfig.email}`} className="block text-sm text-white/60 hover:text-gold transition-colors">
            {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="block text-sm text-white/60 hover:text-gold transition-colors">
            {siteConfig.phone}
          </a>
        </div>

        {/* CTA */}
        <div className="px-6 pb-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-gold w-full text-center"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  )
}
