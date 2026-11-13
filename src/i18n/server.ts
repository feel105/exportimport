import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from './routing'
import type { Locale } from './config'

export async function getLocaleFromParams(
  params: Promise<{ locale: string }>
): Promise<Locale> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return locale
}
