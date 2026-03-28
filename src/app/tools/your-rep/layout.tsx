import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Who Lobbies Your State? Find Your Rep's Top Lobbyists",
  description: "Enter your state and see the top lobbyists, biggest spenders, and key issues in your backyard. Every state's lobbying profile — from California ($1.8B) to Wyoming.",
}

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Find Your State's Top Lobbyists",
  url: "https://www.openlobby.us/tools/your-rep",
  description: "Enter your state and see the top lobbyists, biggest spenders, and key issues.",
  applicationCategory: "Government Data Tool",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      {children}
    </>
  )
}
