import { Metadata } from 'next'
import FirmsPageClient from './FirmsPageClient'

export const metadata: Metadata = {
  title: 'Lobbying Firms — K Street\'s Biggest Players Ranked by Revenue',
  description: 'Ranked directory of 7,757 federal lobbying firms by total income. From Brownstein Hyatt to Akin Gump — see client lists, lobbyist rosters, and revenue trends. 2018-2025 data.',
}

export default function FirmsPage() {
  return (
    <div>
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
