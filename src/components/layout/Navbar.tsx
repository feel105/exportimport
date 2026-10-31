'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { navigation } from '@/config/navigation'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)

  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setIsMobileOpen(false)
    setOpenMenu(null)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenMenu(null)
    }
    const handlePointer = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handlePointer)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handlePointer)
    }
  }, [])

  const activePanel = openMenu
    ? navigation.find((item) => item.label === openMenu)?.panel
    : undefined

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled || openMenu ? 'glass-nav' : 'bg-transparent'
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* Slim announcement strip */}
        <div
          className={`overflow-hidden border-b border-hairline bg-gradient-to-r from-navy-deep via-[#162233] to-navy-deep transition-all duration-300 ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
          }`}
        >
          <div className="mx-auto flex h-9 w-full max-w-[1920px] items-center justify-between gap-4 px-4 text-[11px] sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-2">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="mono-tag hidden font-bold text-emerald-400 sm:inline">HARVEST 2026</span>
              <span className="truncate text-slate-300">
                Export price lists &amp; container loading slots now active for EU, GCC, UK &amp; Americas.
              </span>
              <Link
                href="/products"
                className="ml-1 inline-flex flex-shrink-0 items-center gap-1 font-semibold text-gold transition-colors hover:text-gold-light"
              >
                <span>View Allocation</span>
                <ArrowRight size={11} />
              </Link>
            </div>

            <div className="hidden items-center gap-5 text-[11px] text-slate-400 lg:flex">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={12} className="text-gold" />
                <span>APEDA • FSSAI • SPICES BOARD</span>
              </span>
              <span className="text-white/20">|</span>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Header row */}
        <div className="relative">
          <div className="mx-auto flex h-[66px] w-full max-w-[1920px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <Link href="/" className="group flex flex-shrink-0 items-center gap-2.5" aria-label="FEELEXIM Home">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-extrabold text-navy shadow-md transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                    boxShadow: '0 0 16px rgba(224, 160, 69, 0.3)',
                  }}
                >
                  FE
                </div>
                <span className="text-lg font-black tracking-tight text-white sm:text-xl">
                  FEEL<span className="text-gold">EXIM</span>
                </span>
              </Link>

              <span className="hidden h-4 w-px bg-white/15 2xl:block" />
              <span className="mono-tag hidden items-center gap-1.5 text-[10px] tracking-wider text-slate-400 2xl:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                PORTS: MUNDRA &amp; NHAVA SHEVA ACTIVE
              </span>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden items-center xl:flex" aria-label="Main navigation">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href.split('?')[0]))
                const isOpen = openMenu === item.label

                if (!item.panel) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="nav-link"
                      data-active={isActive}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.label)}
                  >
                    <button
                      type="button"
                      className="nav-link"
                      data-active={isActive || isOpen}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`opacity-60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="nav-link hidden 2xl:inline-flex"
              >
                {siteConfig.phone}
              </a>

              <span className="hidden h-5 w-px bg-white/15 2xl:block" />

              <Link
                href="/products"
                className="nav-cta-outline hidden md:inline-flex"
              >
                Browse Catalog
              </Link>

              <Link href="/contact" className="nav-cta-primary">
                <span className="hidden sm:inline">Request Quotation</span>
                <span className="sm:hidden">Enquire</span>
                <ArrowRight size={13} />
              </Link>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12] xl:hidden"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
              >
                {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mega menu panel */}
          {activePanel && (
            <div className="absolute inset-x-0 top-full z-40 hidden xl:block">
              <div className="mx-auto w-full max-w-[1180px] px-6 pt-2 lg:px-8">
                <div className="nav-panel-in glass-panel overflow-hidden rounded-2xl">
                  <div className="grid lg:grid-cols-[340px_1fr]">
                    <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
                      <Link href={activePanel.overview.href} className="group block">
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-[16px] font-semibold leading-tight tracking-tight text-white">
                            {activePanel.overview.label}
                          </span>
                          <ArrowRight
                            size={16}
                            className="mt-0.5 flex-shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </div>
                        <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-slate-400">
                          {activePanel.overview.description}
                        </p>
                      </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-white/10">
                      {activePanel.columns.map((column) => (
                        <div key={column.heading} className="p-8">
                          <p className="mono-tag mb-5 text-[10px] font-bold tracking-wider text-gold">
                            {column.heading}
                          </p>
                          <ul className="flex flex-col gap-4">
                            {column.items.map((link) => (
                              <li key={link.label}>
                                <Link href={link.href} className="group flex flex-col gap-0.5">
                                  <span className="nav-underline w-fit text-[14px] font-medium leading-tight text-white">
                                    {link.label}
                                  </span>
                                  {link.description && (
                                    <span className="text-[13px] leading-snug text-slate-400">
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
                  </div>

                  {activePanel.footer && (
                    <Link
                      href={activePanel.footer.href}
                      className="group flex items-center justify-between gap-6 border-t border-white/10 bg-white/[0.03] px-8 py-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="flex flex-col">
                        <span className="text-[15px] font-semibold text-white">{activePanel.footer.label}</span>
                        <span className="text-[13px] text-slate-400">{activePanel.footer.description}</span>
                      </span>
                      <ArrowRight
                        size={16}
                        className="flex-shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
