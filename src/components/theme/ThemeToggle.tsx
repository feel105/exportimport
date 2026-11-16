'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme, type ThemePref } from './useTheme'

const ICONS = { system: Monitor, light: Sun, dark: Moon } as const

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const t = useTranslations('nav')
  const { pref, cycle } = useTheme()

  const labels: Record<ThemePref, string> = {
    system: t('themeSystem'),
    light: t('themeLight'),
    dark: t('themeDark'),
  }

  const Icon = ICONS[pref]
  const label = labels[pref]

  return (
    <button
      type="button"
      onClick={cycle}
      title={`${label} — ${t('themeToggle')}`}
      aria-label={`${label}. ${t('themeToggle')}`}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12] ${className}`}
    >
      <Icon size={17} />
    </button>
  )
}
