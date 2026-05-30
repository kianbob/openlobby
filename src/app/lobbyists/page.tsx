import { Metadata } from 'next'
import LobbyistsPageClient from './LobbyistsPageClient'

export const metadata: Metadata = {
  title: 'Federal Lobbyists Directory: 23,545 Registered Lobbyists',
  description: 'Search all 23,545 registered federal lobbyists. 5,000+ are ex-government officials. See their clients, firms, issues, and complete filing history (2018-2026).',
}

export default function LobbyistsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many registered lobbyists are there in the US?","acceptedAnswer":{"@type":"Answer","text":"There are 23,545 registered federal lobbyists tracked by OpenLobby since 2018. These individuals are named on quarterly lobbying disclosure filings submitted to the U.S. Senate."}},{"@type":"Question","name":"What is the revolving door in lobbying?","acceptedAnswer":{"@type":"Answer","text":"The revolving door refers to the movement of personnel between government positions and lobbying jobs. Over 5,000 of the 23,545 registered lobbyists disclosed prior government positions, bringing insider knowledge to their lobbying work."}},{"@type":"Question","name":"How do I find a specific federal lobbyist?","acceptedAnswer":{"@type":"Answer","text":"Use the search bar on this page to find any of the 23,545 registered federal lobbyists by name. Each profile shows their clients, firms, issue areas, and complete filing history."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbyists Directory","description":"23,545 registered federal lobbyists with client lists, firm affiliations, and government position history (2018-2026).","url":"https://www.openlobby.us/lobbyists","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2026","variableMeasured":"Federal lobbying spending"}) }} />
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
