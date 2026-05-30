import { Metadata } from 'next'
import FirmsPageClient from './FirmsPageClient'

export const metadata: Metadata = {
  title: 'Lobbying Firms Ranked: 7,757 K Street Power Brokers',
  description: 'Every lobbying firm in Washington ranked by revenue. Firms with ex-government staff earn 369% more. Search all 7,757 firms in the $37.7B influence industry (2018-2026).',
}

export default function FirmsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the biggest lobbying firms in Washington DC?","acceptedAnswer":{"@type":"Answer","text":"The largest lobbying firms by revenue include Akin Gump Strauss Hauer & Feld, Brownstein Hyatt Farber Schreck, and Holland & Knight. Top firms earn $50M+ annually representing hundreds of clients across industries."}},{"@type":"Question","name":"Do lobbying firms with ex-government employees earn more?","acceptedAnswer":{"@type":"Answer","text":"Yes. OpenLobby data shows firms employing former government officials earn 369% more revenue on average than firms without revolving door connections, highlighting the premium placed on insider access."}},{"@type":"Question","name":"How many lobbying firms operate in the US?","acceptedAnswer":{"@type":"Answer","text":"OpenLobby tracks 7,757 lobbying firms that have filed disclosures with the U.S. Senate since 2018. These firms range from solo practitioners to multinational law firms with hundreds of lobbyists."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbying Firms Database","description":"7,757 lobbying firms ranked by revenue, with client lists, lobbyist rosters, and revolving door data (2018-2026).","url":"https://www.openlobby.us/firms","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2026","variableMeasured":"Federal lobbying spending"}) }} />
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
