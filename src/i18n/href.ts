import { isLocale, type Locale } from './config'

/**
 * Prefixes an internal path with the active locale while leaving external,
 * mail, telephone, hash and already-localized links untouched.
 */
export function localeHref(locale: Locale | string, href: string): string {
  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  ) {
    return href
  }

  if (href === '/') {
    return `/${locale}`
  }

  return `/${locale}${href.startsWith('/') ? href : `/${href}`}`
}

/** Removes the leading locale segment from a pathname. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/')
  if (isLocale(segments[1])) {
    const rest = segments.slice(2).join('/')
    return rest ? `/${rest}` : '/'
  }
  return pathname || '/'
}
