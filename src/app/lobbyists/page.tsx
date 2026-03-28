import { Metadata } from 'next'
import LobbyistsPageClient from './LobbyistsPageClient'

export const metadata: Metadata = {
  title: '23,545 Federal Lobbyists: Names, Clients, and Revolving Door Ties',
  description: 'Search every registered federal lobbyist in America. 5,000+ came straight from government. See who they work for, what they lobby on, and their full filing history.',
}

export default function LobbyistsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbyists Directory","description":"23,545 registered federal lobbyists with client lists, firm affiliations, and government position history (2018-2025).","url":"https://www.openlobby.us/lobbyists","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2025","variableMeasured":"Federal lobbying spending"}) }} />
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
