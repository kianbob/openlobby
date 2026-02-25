import { Metadata } from 'next'
import LobbyistsPageClient from './LobbyistsPageClient'

export const metadata: Metadata = {
  title: 'Lobbyists Directory — 23,545 Federal Lobbyists Profiled',
  description: 'Search 23,545 registered federal lobbyists. See their clients, firms, filing history, and government positions. Includes 5,000+ revolving door lobbyists. 2018-2025 Senate LDA data.',
}

export default function LobbyistsPage() {
  return (
    <div>
      <LobbyistsPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>About Registered Lobbyists</h2>
          <p className="text-gray-600">
            OpenLobby profiles <strong>23,545 individual lobbyists</strong> who have been named on federal lobbying disclosure filings since 2018. 
            Over <strong>5,000 of these lobbyists</strong> disclosed prior government positions — the revolving door between public service and K Street.
          </p>
          <p className="text-gray-600">
            Lobbyists marked with the 🏛️ badge held government positions before entering the private sector. 
            These former officials — from White House advisors to congressional chiefs of staff — bring insider knowledge and personal relationships 
            that command premium rates. Click any lobbyist to see their full profile, including clients served and firms they work for.
          </p>
        </div>
      </div>
    </div>
  )
}
