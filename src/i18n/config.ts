export const locales = ['en', 'de', 'es'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export interface LocaleMeta {
  /** Name shown inside the language switcher, in the language's own script. */
  nativeName: string
  /** English name, useful for metadata and diagnostics. */
  englishName: string
  /** BCP 47 tag used for <html lang>, hreflang and Open Graph. */
  htmlLang: string
  /** Open Graph locale format. */
  ogLocale: string
  /** Country flag emoji for the language. */
  flag: string
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: {
    nativeName: 'English',
    englishName: 'English',
    htmlLang: 'en',
    ogLocale: 'en_US',
    flag: '🇬🇧',
  },
  de: {
    nativeName: 'Deutsch',
    englishName: 'German',
    htmlLang: 'de',
    ogLocale: 'de_DE',
    flag: '🇩🇪',
  },
  es: {
    nativeName: 'Español',
    englishName: 'Spanish',
    htmlLang: 'es',
    ogLocale: 'es_ES',
    flag: '🇪🇸',
  },
}

export function isLocale(value: string | null | undefined): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}
