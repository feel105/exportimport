import * as rootParams from 'next/root-params'
import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'
import type { Locale } from './config'
import en from '../../messages/en.json'
import de from '../../messages/de.json'
import es from '../../messages/es.json'

const messages: Record<Locale, typeof en> = { en, de, es }

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const paramValue = await rootParams.locale()

    if (!hasLocale(routing.locales, paramValue)) {
      notFound()
    }

    locale = paramValue
  }

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return {
    locale,
    messages: messages[locale],
  }
})
