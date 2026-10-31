'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { navigation } from '@/config/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [prevPathname, setPrevPathname] = useState(pathname)

  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setExpanded(null)
  }

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm xl:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className="glass-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto rounded-none border-y-0 border-r-0 xl:hidden"
      >
        {/* Header */}
        <div className="flex h-[66px] flex-shrink-0 items-center justify-between border-b border-white/10 px-5">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5" aria-label="FEELEXIM">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-extrabold text-navy"
              style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))' }}
            >
              FE
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              FEEL<span className="text-gold">EXIM</span>
            </span>
          </Link>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-5" aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href.split('?')[0]))

              if (!item.panel) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex h-12 items-center justify-between rounded-md px-3 text-[15px] font-medium transition-colors hover:bg-white/[0.07]"
                      style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.78)' }}
                    >
                      {item.label}
                      <ArrowRight size={15} className={isActive ? 'text-gold' : 'opacity-30'} />
                    </Link>
                  </li>
                )
              }

              const isExpanded = expanded === item.label

              return (
                <li key={item.label} className="border-b border-white/[0.06] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : item.label)}
                    aria-expanded={isExpanded}
                    className="flex h-12 w-full items-center justify-between rounded-md px-3 text-left text-[15px] font-medium text-white transition-colors hover:bg-white/[0.07]"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pb-4 pl-3 pr-1">
                      <Link
                        href={item.panel.overview.href}
                        onClick={onClose}
                        className="mb-3 flex flex-col gap-1 rounded-lg bg-white/[0.04] p-3.5 transition-colors hover:bg-white/[0.07]"
                      >
                        <span className="flex items-center justify-between gap-2 text-[14px] font-semibold text-white">
                          {item.panel.overview.label}
                          <ArrowRight size={14} className="flex-shrink-0 text-gold" />
                        </span>
                        <span className="line-clamp-2 text-[12px] leading-relaxed text-slate-400">
                          {item.panel.overview.description}
                        </span>
                      </Link>

                      <div className="flex flex-col gap-4">
                        {item.panel.columns.map((column) => (
                          <div key={column.heading}>
                            <p className="mono-tag mb-2 px-1 text-[10px] font-bold tracking-wider text-gold">
                              {column.heading}
                            </p>
                            <ul className="flex flex-col">
                              {column.items.map((link) => (
                                <li key={link.label}>
                                  <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className="flex flex-col gap-0.5 rounded-md px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
                                  >
                                    <span className="text-[14px] font-medium text-white">{link.label}</span>
                                    {link.description && (
                                      <span className="text-[12px] leading-snug text-slate-400">
                                        {link.description}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {item.panel.footer && (
                        <Link
                          href={item.panel.footer.href}
                          onClick={onClose}
                          className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-gold/20 bg-gold/[0.06] px-3.5 py-3 text-[13px] font-semibold text-gold transition-colors hover:bg-gold/[0.12]"
                        >
                          {item.panel.footer.label}
                          <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Contact + CTA */}
        <div className="flex-shrink-0 border-t border-white/10 px-5 py-5">
          <div className="mb-4 flex flex-col gap-1.5 text-[13px]">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-slate-400 transition-colors hover:text-gold"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="text-slate-400 transition-colors hover:text-gold"
            >
              {siteConfig.phone}
            </a>
            <span className="flex items-center gap-1.5 pt-1 text-[11px] text-slate-500">
              <ShieldCheck size={12} className="text-gold" />
              APEDA • FSSAI • SPICES BOARD
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/contact" onClick={onClose} className="nav-cta-primary w-full justify-center">
              Request Quotation
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/products"
              onClick={onClose}
              className="nav-cta-outline w-full justify-center"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
