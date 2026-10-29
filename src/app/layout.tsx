import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Indian Spices & Agricultural Products Export`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Indian spices export',
    'spice exporter India',
    'cumin seeds export',
    'turmeric export',
    'agricultural products India',
    'import export India',
    'FEELEXIM',
    'Indian food export',
    'seeds export India',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} — Indian Spices & Agricultural Products Export`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/liquid_ui_home.png',
        width: 1200,
        height: 630,
        alt: 'FEELEXIM — Indian Spices & Agricultural Products Export',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Indian Spices & Agricultural Products Export`,
    description: siteConfig.description,
    images: ['/liquid_ui_home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
