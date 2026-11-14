'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X, ArrowRight, ChevronDown, ShieldCheck, MailBadge, PhoneCall } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { navigation } from '@/config/navigation'
import { localeHref, stripLocale } from '@/i18n/href'
import type { Locale } from '@/i18n/config'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const t = useTranslations('nav')
  const locale = useLocale() as Locale
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

  const currentPath = stripLocale(pathname)
  const isActive = (href: string) => {
    const base = href.split('?')[0]
    if (base === '/') return currentPath === '/'
    return currentPath === base || currentPath.startsWith(`${base}/`)
  }

  const activePanel = openMenu
    ? navigation.find((item) => item.href === openMenu)?.panel
    : undefined

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled || openMenu ? 'glass-nav' : 'bg-transparent'
          }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div
          className={`overflow-hidden border-b border-hairline bg-gradient-to-r from-navy-deep via-[#162233] to-navy-deep transition-all duration-300 ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
            }`}
        >
          <div className="mx-auto flex h-9 w-full max-w-[1920px] items-center justify-between gap-4 px-4 text-[11px] sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-2">
              {/* <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
               <span className="mono-tag hidden font-bold text-emerald-400 sm:inline">
                {t('harvest')}
              </span> */}
              <ShieldCheck size={12} className="text-gold" />
              <span>{t('certifications')}</span>
              <Link
                href={localeHref(locale, '/products')}
                className="ml-1 inline-flex flex-shrink-0 items-center gap-1 font-semibold text-gold transition-colors hover:text-gold-light"
              >
                <span>{t('viewAllocation')}</span>
                <ArrowRight size={11} />
              </Link>
            </div>

            <div className="hidden items-center gap-5 text-[11px] text-slate-400 lg:flex">
              <span className="flex items-center gap-1.5">
                <MailBadge size={12} className="text-gold" />
                <a
                  href={`mailto:${siteConfig.email.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-white"
                >{siteConfig.email}</a>
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5">
                <PhoneCall size={12} className="text-gold" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto flex h-[66px] w-full max-w-[1920px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Link
                href={localeHref(locale, '/')}
                className="group flex flex-shrink-0 items-center"
                aria-label={t('brandAria')}
              >
                <Logo priority />
              </Link>

              <span className="hidden h-4 w-px bg-white/15 2xl:block" />
              <span className="mono-tag hidden items-center gap-1.5 text-[10px] tracking-wider text-slate-400 2xl:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t('ports')}
              </span>
            </div>

            <nav className="hidden items-center xl:flex" aria-label={t('mainNavAria')}>
              {navigation.map((item) => {
                const itemIsActive = isActive(item.href)
                const isOpen = openMenu === item.href
                const label = t(item.labelKey)

                if (!item.panel) {
                  return (
                    <Link
                      key={item.href}
                      href={localeHref(locale, item.href)}
                      className="nav-link"
                      data-active={itemIsActive}
                    >
                      {label}
                    </Link>
                  )
                }

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.href)}
                  >
                    <button
                      type="button"
                      className="nav-link"
                      data-active={itemIsActive || isOpen}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMenu(isOpen ? null : item.href)}
                    >
                      {label}
                      <ChevronDown
                        size={14}
                        className={`opacity-60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="nav-link hidden 2xl:inline-flex"
              >
                {siteConfig.phone}
              </a>

              <span className="hidden h-5 w-px bg-white/15 2xl:block" />

              <LanguageSwitcher className="hidden md:inline-flex" />

              <Link
                href={localeHref(locale, '/products')}
                className="nav-cta-outline hidden md:inline-flex"
              >
                {t('browseCatalog')}
              </Link>

              <Link href={localeHref(locale, '/contact')} className="nav-cta-primary">
                <span className="hidden sm:inline">{t('requestQuotation')}</span>
                <span className="sm:hidden">{t('enquire')}</span>
                <ArrowRight size={13} />
              </Link>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12] xl:hidden"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? t('closeMenu') : t('openMenu')}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
              >
                {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {activePanel && (
            <div className="absolute inset-x-0 top-full z-40 hidden xl:block">
              <div className="mx-auto w-full max-w-[1180px] px-6 pt-2 lg:px-8">
                <div className="nav-panel-in glass-panel overflow-hidden rounded-2xl">
                  <div className="grid lg:grid-cols-[340px_1fr]">
                    <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
                      <Link
                        href={localeHref(locale, activePanel.overview.href)}
                        className="group block"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-[16px] font-semibold leading-tight tracking-tight text-white">
                            {t(activePanel.overview.labelKey)}
                          </span>
                          <ArrowRight
                            size={16}
                            className="mt-0.5 flex-shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </div>
                        {activePanel.overview.descriptionKey && (
                          <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-slate-400">
                            {t(activePanel.overview.descriptionKey)}
                          </p>
                        )}
                      </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-white/10">
                      {activePanel.columns.map((column) => (
                        <div key={column.headingKey} className="p-8">
                          <p className="mono-tag mb-5 text-[10px] font-bold tracking-wider text-gold">
                            {t(column.headingKey)}
                          </p>
                          <ul className="flex flex-col gap-4">
                            {column.items.map((link) => (
                              <li key={link.labelKey}>
                                <Link
                                  href={localeHref(locale, link.href)}
                                  className="group flex flex-col gap-0.5"
                                >
                                  <span className="nav-underline w-fit text-[14px] font-medium leading-tight text-white">
                                    {t(link.labelKey)}
                                  </span>
                                  {link.descriptionKey && (
                                    <span className="text-[13px] leading-snug text-slate-400">
                                      {t(link.descriptionKey)}
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
                      href={localeHref(locale, activePanel.footer.href)}
                      className="group flex items-center justify-between gap-6 border-t border-white/10 bg-white/[0.03] px-8 py-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="flex flex-col">
                        <span className="text-[15px] font-semibold text-white">
                          {t(activePanel.footer.labelKey)}
                        </span>
                        {activePanel.footer.descriptionKey && (
                          <span className="text-[13px] text-slate-400">
                            {t(activePanel.footer.descriptionKey)}
                          </span>
                        )}
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
