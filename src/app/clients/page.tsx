import { Metadata } from 'next'
import ClientsPageClient from './ClientsPageClient'

export const metadata: Metadata = {
  title: 'Top Lobbying Clients — Who Spends the Most to Influence Congress',
  description: 'Ranked list of 39,900+ organizations that lobby Congress, sorted by total spending. From the US Chamber of Commerce ($608M) to Fortune 500 companies and trade associations. 2018-2025 Senate LDA data.',
}

export default function ClientsPage() {
  return (
    <div>
      <ClientsPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Understanding Lobbying Clients</h2>
          <p className="text-gray-600">
            OpenLobby tracks <strong>37,994 organizations</strong> that have filed lobbying disclosures with the U.S. Senate since 2018. 
            These clients collectively spent <strong>$37.7 billion</strong> on federal lobbying across 726,000+ quarterly filings.
          </p>
          <p className="text-gray-600">
            The top spender, the U.S. Chamber of Commerce, has invested over $607 million in lobbying — more than three times the next largest client. 
            Trade associations like the Chamber pool money from thousands of member companies, amplifying their collective influence far beyond what any single company could achieve.
          </p>
          <p className="text-gray-600">
            Click any client to see their full lobbying profile: spending trends, lobbying firms hired, individual lobbyists deployed, 
            issue areas targeted, government agencies contacted, and actual descriptions from their quarterly filings.
          </p>
        </div>
      </div>
    </div>
  )
}
