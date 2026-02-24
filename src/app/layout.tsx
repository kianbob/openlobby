import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'OpenLobby — Follow the Money in Washington',
    template: '%s | OpenLobby',
  },
  description: 'Explore $4.4 billion in annual federal lobbying. Search clients, firms, lobbyists, and issues. Independent data journalism powered by Senate LDA filings.',
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
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
