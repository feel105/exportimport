'use client'

import { useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { localeMeta, locales, type Locale } from '@/i18n/config'
import { stripLocale } from '@/i18n/href'

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('languageSwitcher')
  const [isPending, startTransition] = useTransition()

  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return

    const path = stripLocale(pathname)
    const search = typeof window === 'undefined' ? '' : window.location.search
    const nextPath = `/${nextLocale}${path === '/' ? '' : path}${search}`

    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;samesite=lax`

    startTransition(() => {
      router.replace(nextPath)
      router.refresh()
    })
  }

  return (
    <label
      className={`relative inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-2 text-white transition-colors hover:bg-white/[0.12] ${className}`}
    >
      <span className="sr-only">{t('change')}</span>
      <select
        value={locale}
        onChange={(event) => changeLocale(event.target.value as Locale)}
        disabled={isPending}
        aria-label={t('current', { language: localeMeta[locale].nativeName })}
        className="cursor-pointer appearance-none bg-transparent pr-4 text-[11px] font-semibold uppercase tracking-wide text-white outline-none disabled:cursor-wait disabled:opacity-60"
      >
        {locales.map((item) => (
          <option key={item} value={item} className="bg-[#121A26] text-white">
            {localeMeta[item].flag} {localeMeta[item].nativeName}
          </option>
        ))}
      </select>
      <ChevronDown
        size={11}
        className="pointer-events-none -ml-3 flex-shrink-0 opacity-60 text-current"
        aria-hidden="true"
      />
    </label>
  )
}
