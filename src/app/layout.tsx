import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: {
    default: 'OpenLobby — Follow the Money in Washington',
    template: '%s | OpenLobby',
  },
  description: 'Explore $15 billion in federal lobbying (2018-2025). Search clients, firms, lobbyists, and issues. Independent data journalism powered by Senate LDA filings.',
  metadataBase: new URL('https://www.openlobby.us'),
  openGraph: {
    type: 'website',
    siteName: 'OpenLobby',
    locale: 'en_US',
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
          '@type': 'WebSite',
          name: 'OpenLobby',
          url: 'https://www.openlobby.us',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.openlobby.us/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }) }} />
      </head>
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
