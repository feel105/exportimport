'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { X, ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { navigation } from '@/config/navigation'
import { localeHref, stripLocale } from '@/i18n/href'
import type { Locale } from '@/i18n/config'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from '@/components/theme/ThemeToggle'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const locale = useLocale() as Locale
  const t = useTranslations('nav')
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

  const currentPath = stripLocale(pathname)
  const isActive = (href: string) => {
    const base = href.split('?')[0]
    if (base === '/') return currentPath === '/'
    return currentPath === base || currentPath.startsWith(`${base}/`)
  }

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
        aria-label={t('mobileMenuAria')}
        aria-modal="true"
        className="glass-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto rounded-none border-y-0 border-r-0 xl:hidden"
      >
        <div className="flex h-[66px] flex-shrink-0 items-center justify-between border-b border-white/10 px-5">
          <Link
            href={localeHref(locale, '/')}
            onClick={onClose}
            className="flex items-center"
            aria-label={t('brandAria')}
          >
            <Logo size="sm" />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={t('closeMenu')}
              className="flex h-9 w-9 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="flex-1 px-4 py-5" aria-label={t('mobileNavAria')}>
          <ul className="flex flex-col">
            {navigation.map((item) => {
              const itemIsActive = isActive(item.href)
              const label = t(item.labelKey)

              if (!item.panel) {
                return (
                  <li key={item.href}>
                    <Link
                      href={localeHref(locale, item.href)}
                      onClick={onClose}
                      className="flex h-12 items-center justify-between rounded-md px-3 text-[15px] font-medium transition-colors hover:bg-white/[0.07]"
                      style={{ color: itemIsActive ? 'var(--fg)' : 'var(--fg-muted)' }}
                    >
                      {label}
                      <ArrowRight
                        size={15}
                        className={itemIsActive ? 'text-gold' : 'opacity-30'}
                      />
                    </Link>
                  </li>
                )
              }

              const isExpanded = expanded === item.href

              return (
                <li key={item.href} className="border-b border-white/[0.06] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : item.href)}
                    aria-expanded={isExpanded}
                    className="flex h-12 w-full items-center justify-between rounded-md px-3 text-left text-[15px] font-medium text-white transition-colors hover:bg-white/[0.07]"
                  >
                    {label}
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pb-4 pl-3 pr-1">
                      <Link
                        href={localeHref(locale, item.panel.overview.href)}
                        onClick={onClose}
                        className="mb-3 flex flex-col gap-1 rounded-lg bg-white/[0.04] p-3.5 transition-colors hover:bg-white/[0.07]"
                      >
                        <span className="flex items-center justify-between gap-2 text-[14px] font-semibold text-white">
                          {t(item.panel.overview.labelKey)}
                          <ArrowRight size={14} className="flex-shrink-0 text-gold" />
                        </span>
                        {item.panel.overview.descriptionKey && (
                          <span className="line-clamp-2 text-[12px] leading-relaxed text-slate-400">
                            {t(item.panel.overview.descriptionKey)}
                          </span>
                        )}
                      </Link>

                      <div className="flex flex-col gap-4">
                        {item.panel.columns.map((column) => (
                          <div key={column.headingKey}>
                            <p className="mono-tag mb-2 px-1 text-[10px] font-bold tracking-wider text-gold">
                              {t(column.headingKey)}
                            </p>
                            <ul className="flex flex-col">
                              {column.items.map((link) => (
                                <li key={link.labelKey}>
                                  <Link
                                    href={localeHref(locale, link.href)}
                                    onClick={onClose}
                                    className="flex flex-col gap-0.5 rounded-md px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
                                  >
                                    <span className="text-[14px] font-medium text-white">
                                      {t(link.labelKey)}
                                    </span>
                                    {link.descriptionKey && (
                                      <span className="text-[12px] leading-snug text-slate-400">
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

                      {item.panel.footer && (
                        <Link
                          href={localeHref(locale, item.panel.footer.href)}
                          onClick={onClose}
                          className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-gold/20 bg-gold/[0.06] px-3.5 py-3 text-[13px] font-semibold text-gold transition-colors hover:bg-gold/[0.12]"
                        >
                          {t(item.panel.footer.labelKey)}
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
              {t('certifications')}
            </span>
          </div>

          <LanguageSwitcher className="mb-3 w-full justify-between" />

          <div className="flex flex-col gap-2">
            <Link
              href={localeHref(locale, '/contact')}
              onClick={onClose}
              className="nav-cta-primary w-full justify-center"
            >
              {t('requestQuotation')}
              <ArrowRight size={14} />
            </Link>
            <Link
              href={localeHref(locale, '/products')}
              onClick={onClose}
              className="nav-cta-outline w-full justify-center"
            >
              {t('browseCatalog')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
