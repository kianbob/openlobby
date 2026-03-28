import { Metadata } from 'next'
import FirmsPageClient from './FirmsPageClient'

export const metadata: Metadata = {
  title: 'K Street\'s Power Brokers: 7,757 Lobbying Firms Ranked by Revenue',
  description: 'Every lobbying firm in Washington, ranked. Firms with ex-government staff earn 369% more revenue. See who runs K Street\'s $37.7B influence machine (2018-2025).',
}

export default function FirmsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbying Firms Database","description":"7,757 lobbying firms ranked by revenue, with client lists, lobbyist rosters, and revolving door data (2018-2025).","url":"https://www.openlobby.us/firms","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2025","variableMeasured":"Federal lobbying spending"}) }} />
      <FirmsPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>About Lobbying Firms</h2>
          <p className="text-gray-600">
            Our database includes <strong>7,757 lobbying firms</strong> that have filed quarterly activity reports with the Senate. 
            These K Street firms serve as intermediaries between corporations and Congress, representing dozens of clients simultaneously 
            and deploying networks of lobbyists with specialized relationships and expertise.
          </p>
          <p className="text-gray-600">
            Firms with former government officials on staff command a <strong>369% revenue premium</strong> over those without — 
            demonstrating the quantifiable value of the revolving door. Click any firm to explore their client portfolio, 
            lobbyist roster, issue specializations, and revenue history.
          </p>
        </div>
      </div>
    </div>
  )
}
