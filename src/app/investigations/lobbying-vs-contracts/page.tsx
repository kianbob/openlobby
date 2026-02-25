import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'

export const metadata: Metadata = {
  title: 'For Every $1 They Lobby, They Get $49,536 Back',
  description: 'We cross-referenced lobbying disclosures with USASpending.gov contract data. The ROI is staggering: top contractors turn thousands in lobbying into billions in federal contracts.',
  openGraph: {
    title: 'For Every $1 They Lobby, They Get $49,536 Back',
    description: 'Cross-referenced lobbying spend vs. federal contracts for 21 top contractors. The ROI of government influence, exposed.',
  },
}

export default function LobbyingVsContractsPage() {
  const topContractors = [
    { name: 'TriWest Healthcare Alliance', lobbying: 270000, contracts: 13374744670, roi: 49536, category: 'Healthcare' },
    { name: 'Amentum Services', lobbying: 580000, contracts: 3583167409, roi: 6178, category: 'Services' },
    { name: 'Sandia National Labs (NTESS)', lobbying: 1019000, contracts: 5673408174, roi: 5568, category: 'National Security' },
    { name: 'McKesson Corporation', lobbying: 3630000, contracts: 11870431649, roi: 3270, category: 'Healthcare' },
    { name: 'Atlantic Diving Supply', lobbying: 1942000, contracts: 5993126834, roi: 3086, category: 'Defense Supply' },
    { name: 'RTX Corporation', lobbying: 2775000, contracts: 7280700848, roi: 2624, category: 'Defense' },
    { name: 'QTC Medical Services', lobbying: 1160000, contracts: 2886404916, roi: 2488, category: 'Healthcare' },
    { name: 'Huntington Ingalls', lobbying: 4436000, contracts: 8565929513, roi: 1931, category: 'Defense' },
    { name: 'BAE Systems Land & Armaments', lobbying: 1370000, contracts: 2164547913, roi: 1580, category: 'Defense' },
    { name: 'Raytheon Company', lobbying: 10433000, contracts: 16472942438, roi: 1579, category: 'Defense' },
    { name: 'Johns Hopkins APL', lobbying: 1984000, contracts: 2359804109, roi: 1189, category: 'Research' },
    { name: 'Boeing', lobbying: 14852500, contracts: 15444072108, roi: 1040, category: 'Defense' },
    { name: 'Caltech (JPL)', lobbying: 2795000, contracts: 2297053488, roi: 822, category: 'Research' },
    { name: 'SpaceX', lobbying: 5253000, contracts: 2999808160, roi: 571, category: 'Aerospace' },
    { name: 'Booz Allen Hamilton', lobbying: 12130000, contracts: 6563770954, roi: 541, category: 'IT/Consulting' },
    { name: 'Lockheed Martin', lobbying: 141599000, contracts: 58775947590, roi: 415, category: 'Defense' },
    { name: 'Accenture Federal Services', lobbying: 10455000, contracts: 3235465824, roi: 309, category: 'IT/Consulting' },
    { name: 'Sierra Nevada Company', lobbying: 8000000, contracts: 2243556112, roi: 280, category: 'Defense' },
    { name: 'General Dynamics IT', lobbying: 16697500, contracts: 4635820603, roi: 278, category: 'Defense' },
    { name: 'SAIC', lobbying: 17237500, contracts: 4360395756, roi: 253, category: 'IT/Consulting' },
    { name: 'Leidos', lobbying: 22810000, contracts: 3037225603, roi: 133, category: 'IT/Consulting' },
  ]

  const fmt = (n: number) => {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
    if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
    return `$${n}`
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "For Every $1 They Lobby, They Get $49,536 Back", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "We cross-referenced lobbying disclosures with USASpending.gov contract data. The ROI is staggering.", mainEntityOfPage: "https://www.openlobby.us/investigations/lobbying-vs-contracts" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Lobbying vs. Contracts ROI' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Exclusive Analysis</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        For Every $1 They Lobby, They Get{' '}
        <span className="text-primary">$49,536 Back</span>:{' '}
        The Exposed ROI of Government Contractors
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/lobbying-vs-contracts" title="For every $1 they lobby, they get $49,536 back" />

      <QuickFacts facts={[
        { label: 'Contractors matched', value: '21' },
        { label: 'Total lobbying (matched)', value: '$281M' },
        { label: 'Total contracts (matched)', value: '$183.8B' },
        { label: 'Average ROI', value: '3,984:1' },
      ]} />

      <div className="my-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-green-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          We cross-referenced Senate lobbying disclosures with USASpending.gov federal contract data for 2018–2025. 
          Of the top federal contractors, <strong>21 matched directly to lobbying clients</strong>. Together they spent 
          $281 million lobbying — and received <strong>$183.8 billion in federal contracts</strong>. 
          That&apos;s an average return of <strong>$3,984 for every $1 spent lobbying</strong>. 
          Lobbying isn&apos;t an expense. It&apos;s the best investment in America.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The $49,536 Return</h2>
        
        <p>
          TriWest Healthcare Alliance spent <strong>$270,000</strong> lobbying Congress between 2018 and 2025. 
          During the same period, they received <strong>$13.4 billion</strong> in federal contracts — primarily 
          through the VA&apos;s Community Care Network. That&apos;s a return of <strong>$49,536 for every dollar lobbied</strong>.
        </p>

        <p>
          To put that in perspective: if you invested $1 in the S&P 500 in 2018, you&apos;d have about $2.10 today. 
          TriWest&apos;s lobbying returned <strong>24,000 times more</strong> than the stock market.
        </p>

        <p>
          And TriWest isn&apos;t an outlier. It&apos;s just the most extreme example in a pattern that repeats 
          across the entire federal contracting ecosystem.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Full Picture: 21 Contractors, $183.8 Billion</h2>

        <p>
          We matched the top federal contractors (by total contract value on USASpending.gov) against 
          lobbying disclosure filings from the Senate LDA database. Here&apos;s what we found:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose overflow-x-auto">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Spend vs. Federal Contracts (2018–2025)</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2 pr-4">Contractor</th>
                <th className="text-right py-2 px-2">Lobbying</th>
                <th className="text-right py-2 px-2">Contracts</th>
                <th className="text-right py-2 pl-2">ROI</th>
              </tr>
            </thead>
            <tbody>
              {topContractors.map(c => (
                <tr key={c.name} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 pr-4">
                    <div className="font-medium text-gray-900">{c.name}</div>
                    <div className="text-xs text-gray-500">{c.category}</div>
                  </td>
                  <td className="text-right py-2 px-2 text-gray-600">{fmt(c.lobbying)}</td>
                  <td className="text-right py-2 px-2 font-semibold text-gray-900">{fmt(c.contracts)}</td>
                  <td className="text-right py-2 pl-2 font-bold text-primary">{c.roi.toLocaleString()}:1</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Sources: Senate LDA filings via OpenLobby · USASpending.gov contract obligations · 
            <a href="https://www.openspending.us" className="text-primary hover:underline"> OpenSpending.us</a>
          </p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Visual: Lobbying Is a Rounding Error</h2>

        <p>
          The lobbying spend is so small relative to contract value that it barely registers on a chart. 
          Consider the top 5 by ROI:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          {topContractors.slice(0, 7).map(c => (
            <div key={c.name} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium truncate mr-2">{c.name}</span>
                <span className="text-primary font-bold whitespace-nowrap">{c.roi.toLocaleString()}:1</span>
              </div>
              <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-primary rounded-full"
                  style={{ width: `${Math.max((c.contracts / topContractors[0].contracts) * 100, 2)}%` }}
                />
                <div 
                  className="absolute inset-y-0 left-0 bg-red-500 rounded-full"
                  style={{ width: `${Math.max((c.lobbying / topContractors[0].contracts) * 100, 0.3)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-0.5">
                <span>🔴 Lobbying: {fmt(c.lobbying)}</span>
                <span>🔵 Contracts: {fmt(c.contracts)}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why This Happens: Rent-Seeking 101</h2>

        <p>
          Economists have a term for this: <strong>rent-seeking</strong>. When the government controls trillions 
          of dollars in contracts, grants, and spending, rational actors will invest in influence rather than 
          innovation. Why build a better product when you can hire a better lobbyist?
        </p>

        <p>
          This isn&apos;t a left-or-right issue. It&apos;s a <strong>structural incentive problem</strong>. 
          When the federal government spends $6.7 trillion a year, the ROI on political influence 
          will always dwarf the ROI on productive investment. The bigger the government budget, 
          the bigger the lobbying industry.
        </p>

        <p>
          Consider: <Link href="/clients/lockheed-martin-corporation" className="text-primary hover:underline">Lockheed Martin</Link> spent <strong>$141.6 million</strong> lobbying over this period — 
          by far the most of any contractor. They received <strong>$58.8 billion</strong> in contracts. 
          Their ROI &quot;only&quot; 415:1 — but in absolute terms, they got more than any other company. 
          The math works whether you spend $270K or $141M.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Defense Dominates — But It&apos;s Not Alone</h2>

        <p>
          Defense contractors are heavily represented — Boeing, Raytheon, Lockheed Martin, General Dynamics, 
          BAE Systems, Huntington Ingalls. The Pentagon budget is the single largest discretionary spending category, 
          so it naturally attracts the most lobbying.
        </p>

        <p>
          But the <em>highest ROIs</em> don&apos;t come from defense. They come from healthcare 
          (TriWest, McKesson, QTC Medical) and niche contractors (Amentum, Atlantic Diving Supply) 
          that fly under the radar. These companies lobby quietly, spend modestly, and receive enormous 
          contract values — often through sole-source or limited-competition procurements.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What This Means</h2>

        <p>
          We&apos;re not alleging corruption. Lobbying is legal. Federal contracts go through procurement processes. 
          Many of these companies provide genuine value to the government.
        </p>

        <p>
          But the <em>scale</em> of the return should make every taxpayer uncomfortable. When a company can turn 
          $270,000 in lobbying into $13.4 billion in contracts, the incentive structure is clear: 
          <strong>lobbying is the highest-return investment in the American economy</strong>.
        </p>

        <p>
          That&apos;s not a market outcome. It&apos;s a political one. And as long as the federal government remains 
          the largest purchaser of goods and services on Earth, this dynamic will persist.
        </p>

        <p>
          The only antidote is transparency. Know who&apos;s lobbying. Know what they&apos;re getting. 
          Connect the dots.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">See the interactive analysis with sortable tables and charts.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/lobbying-vs-contracts" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Lobbying ROI Calculator →
            </Link>
            <Link href="/clients" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Top Clients →
            </Link>
            <Link href="/lobbying-roi" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Lobbying ROI Analysis →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation 
        sources={[
          'Senate LDA Filings (lda.senate.gov) — 2018–2025',
          'USASpending.gov — Federal Contract Obligations',
          'OpenSpending.us — Federal Spending Data',
          'Cross-referencing methodology: exact and fuzzy name matching of lobbying registrants to prime contract recipients',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/defense-contractor-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ The Defense Lobby</div>
          </Link>
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/lobbying-vs-contracts" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Lobbying vs. Contracts Data</div>
          </Link>
          <Link href="/defense-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ Defense Lobbying Overview</div>
          </Link>
          <Link href="/lobbying-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🧮 ROI Calculator</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
