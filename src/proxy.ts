import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'
import { routing } from './i18n/routing'
import { defaultLocale, isLocale } from './i18n/config'

const handleI18nRouting = createMiddleware(routing)

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const firstSegment = pathname.split('/')[1]

  // A locale-like prefix that we do not support (e.g. /it/about) is dropped
  // rather than producing a broken nested route.
  if (
    firstSegment &&
    /^[a-zA-Z]{2,3}(-[a-zA-Z]{2,4})?$/.test(firstSegment) &&
    !isLocale(firstSegment)
  ) {
    const rest = pathname.slice(firstSegment.length + 1)
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}${rest === '/' ? '' : rest}`
    return NextResponse.redirect(url)
  }

  return handleI18nRouting(request)
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
