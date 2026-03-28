import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industry Lobbying Comparison Tool: Healthcare vs. Tech vs. Defense',
  description: 'Compare lobbying spending across 10 major industries side-by-side. Healthcare ($4.4B), tech ($1.8B), defense ($1.2B) — see spending, lobbyist counts, top clients, and growth trends.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Industry Lobbying Comparison Tool","url":"https://www.openlobby.us/tools/industry-compare","description":"Compare lobbying spending across major industries side-by-side.","applicationCategory":"Government Data Tool","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"}}) }} />
      {children}
    </>
  )
}
