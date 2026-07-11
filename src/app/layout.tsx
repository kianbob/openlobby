import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: {
    default: 'Federal Lobbying Database — $37.7B Exposed | OpenLobby',
    template: '%s | OpenLobby',
  },
  description: 'Track $37.7B in federal lobbying across 726,000+ filings. Search 37,994 clients, 23,545 lobbyists, and 7,757 firms. The most comprehensive lobbying database in America (2018-2026).',
  metadataBase: new URL('https://www.openlobby.us'),
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': 'https://www.openlobby.us/feed.xml',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'OpenLobby',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.openlobby.us/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpenLobby — Follow the Money in Washington',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MKREG3WMER" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-MKREG3WMER');` }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'OpenLobby',
          url: 'https://www.openlobby.us',
          description: 'Independent data journalism about federal lobbying. Explore billions in lobbying spending from Senate LDA filings.',
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Dataset',
          name: 'Federal Lobbying Disclosure Data',
          description: 'Comprehensive analysis of 726,000+ federal lobbying filings from 2018-2026, totaling $37.7 billion in lobbying income.',
          url: 'https://www.openlobby.us/downloads',
          creator: { '@type': 'Organization', name: 'OpenLobby' },
          temporalCoverage: '2018/2026',
          distribution: { '@type': 'DataDownload', contentUrl: 'https://www.openlobby.us/downloads' },
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'OpenLobby',
          url: 'https://www.openlobby.us',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.openlobby.us/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }) }} />
        <meta name="google-adsense-account" content="ca-pub-9872374508496229" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872374508496229" crossOrigin="anonymous"></script>      </head>
      <body className="font-sans min-h-screen flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  )
}
