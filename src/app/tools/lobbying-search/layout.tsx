import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search 726,000+ Lobbying Filings — Real Senate LDA Disclosures',
  description: 'Browse actual lobbying disclosures filed with the Senate. See what companies told Congress they lobbied on — amounts, issues, lobbyists named, and agencies contacted.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Lobbying Filing Search Tool","url":"https://www.openlobby.us/tools/lobbying-search","description":"Search and browse actual lobbying disclosure filings from the Senate LDA database.","applicationCategory":"Government Data Tool","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"}}) }} />
      {children}
    </>
  )
}
