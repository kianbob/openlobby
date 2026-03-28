import { Metadata } from 'next'
import StatesPageClient from './StatesPageClient'

export const metadata: Metadata = {
  title: 'Lobbying by State: DC Spends $27,105 Per Capita — 89x the National Average',
  description: 'How much lobbying comes from your state? DC leads at $27,105/capita. All 50 states ranked by total spend, per capita, and number of lobbying clients (2018-2025).',
}

export default function StatesPage() {
  return (
    <div>
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
