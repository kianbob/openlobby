import { Metadata } from 'next'
import StatesPageClient from './StatesPageClient'

export const metadata: Metadata = {
  title: 'Lobbying by State: All 50 States Ranked (2018-2026)',
  description: 'How much lobbying comes from your state? DC leads at $27,105 per capita — 89x the national average. All 50 states ranked by total spend and clients.',
}

export default function StatesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which state spends the most on lobbying?","acceptedAnswer":{"@type":"Answer","text":"Washington DC leads all jurisdictions in lobbying spending at $27,105 per capita — 89x the national average. Among states, New York, California, and Texas have the highest total lobbying expenditures."}},{"@type":"Question","name":"How much does lobbying cost per capita by state?","acceptedAnswer":{"@type":"Answer","text":"Lobbying spending per capita varies dramatically. DC leads at $27,105 per capita. Most states fall between $10-$100 per capita, with variation driven by the concentration of corporate headquarters and trade associations."}},{"@type":"Question","name":"Can I look up lobbying spending for my state?","acceptedAnswer":{"@type":"Answer","text":"Yes. OpenLobby provides lobbying data for all 50 states plus DC. Click any state to see total spending, top clients, per capita figures, and trends from 2018-2026."}}]}) }} />
      <StatesPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by State</h2>
          <p className="text-gray-600">
            Lobbying clients must disclose their headquarters state on every filing. This data reveals striking geographic patterns: 
            <strong>Washington DC</strong> leads with $27,105 in lobbying spending per capita — 89 times the national average — 
            because many trade associations and lobbying-focused organizations are headquartered there.
          </p>
          <p className="text-gray-600">
            Among actual states, <strong>New York</strong>, <strong>Texas</strong>, and <strong>California</strong> lead in total spending, 
            while <strong>Connecticut</strong> and <strong>New Jersey</strong> punch above their weight on a per-capita basis due to 
            pharmaceutical and financial services companies headquartered there.
          </p>
          <p className="text-gray-600">
            Click any state to see its top lobbying clients, issue breakdown, spending trends, and per-capita analysis.
          </p>
        </div>
      </div>
    </div>
  )
}
