'use client'

import { useState } from 'react'
import Link from 'next/link'

const industries = [
  { id: 'healthcare', name: 'Healthcare & Pharma', spending: 4400000000, lobbyists: 3200, topClient: 'PhRMA', topAmount: 321000000, color: 'bg-green-500', issues: 'Drug pricing, Medicare, FDA, patents', trend: '+8%/yr' },
  { id: 'defense', name: 'Defense & Aerospace', spending: 1200000000, lobbyists: 1400, topClient: 'Boeing', topAmount: 180000000, color: 'bg-gray-500', issues: 'NDAA, weapons systems, procurement', trend: '+5%/yr' },
  { id: 'tech', name: 'Technology', spending: 1800000000, lobbyists: 1800, topClient: 'Amazon', topAmount: 220000000, color: 'bg-blue-500', issues: 'Antitrust, AI, privacy, Section 230', trend: '+15%/yr' },
  { id: 'finance', name: 'Finance & Insurance', spending: 2100000000, lobbyists: 2500, topClient: 'American Bankers Assn', topAmount: 195000000, color: 'bg-yellow-500', issues: 'Banking regulation, crypto, Dodd-Frank', trend: '+6%/yr' },
  { id: 'energy', name: 'Oil, Gas & Energy', spending: 1600000000, lobbyists: 1500, topClient: 'ExxonMobil', topAmount: 134000000, color: 'bg-orange-500', issues: 'Climate, drilling, LNG, subsidies', trend: '+3%/yr' },
  { id: 'realestate', name: 'Real Estate', spending: 950000000, lobbyists: 800, topClient: 'National Assn of Realtors', topAmount: 387000000, color: 'bg-rose-500', issues: 'Housing, tax deductions, zoning', trend: '+4%/yr' },
  { id: 'telecom', name: 'Telecom & Media', spending: 850000000, lobbyists: 900, topClient: 'Comcast', topAmount: 168000000, color: 'bg-purple-500', issues: 'Broadband, spectrum, net neutrality', trend: '+2%/yr' },
  { id: 'agriculture', name: 'Agriculture & Food', spending: 680000000, lobbyists: 750, topClient: 'American Farm Bureau', topAmount: 92000000, color: 'bg-lime-500', issues: 'Farm bill, subsidies, trade, GMOs', trend: '+4%/yr' },
  { id: 'transportation', name: 'Transportation', spending: 520000000, lobbyists: 600, topClient: 'Airlines for America', topAmount: 78000000, color: 'bg-cyan-500', issues: 'FAA, infrastructure, EVs, shipping', trend: '+7%/yr' },
  { id: 'education', name: 'Education', spending: 280000000, lobbyists: 400, topClient: 'American Council on Education', topAmount: 45000000, color: 'bg-indigo-500', issues: 'Student loans, Title IX, funding', trend: '+9%/yr' },
]

function formatCurrency(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
  return `$${(n / 1e3).toFixed(0)}K`
}

export default function IndustryComparePage() {
  const [selected, setSelected] = useState<string[]>(['healthcare', 'tech', 'defense'])
  const maxSpending = Math.max(...industries.map((i) => i.spending))

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const selectedIndustries = industries.filter((i) => selected.includes(i.id))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-2 text-sm text-gray-500">
        <Link href="/analysis" className="hover:text-indigo-600">Analysis</Link>
        {' / '}
        <span>Tools</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Industry Lobbying Comparison
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Compare lobbying spending across industries. Select industries below to see how they stack up.
        Data from 726,000+ Senate LDA filings (2018-2025).
      </p>

      {/* Industry selector */}
      <div className="flex flex-wrap gap-2 mb-10">
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => toggle(ind.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              selected.includes(ind.id)
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300'
            }`}
          >
            {ind.name}
          </button>
        ))}
      </div>

      {/* Visual comparison */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          Total Lobbying Spending (2018-2025)
        </h2>
        <div className="space-y-4">
          {selectedIndustries
            .sort((a, b) => b.spending - a.spending)
            .map((ind) => (
              <div key={ind.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900">{ind.name}</span>
                  <span className="font-bold text-gray-700">{formatCurrency(ind.spending)}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                  <div
                    className={`h-8 rounded-full ${ind.color} flex items-center justify-end pr-3 transition-all duration-500`}
                    style={{ width: `${(ind.spending / maxSpending) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">
                      {formatCurrency(ind.spending)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {selectedIndustries.length === 0 && (
          <p className="text-center text-gray-400 py-8">Select industries above to compare.</p>
        )}
      </div>

      {/* Detail cards */}
      {selectedIndustries.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {selectedIndustries.map((ind) => (
            <div key={ind.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className={`w-3 h-3 rounded-full ${ind.color} mb-3`} />
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                {ind.name}
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Spending</span>
                  <span className="font-bold">{formatCurrency(ind.spending)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Registered Lobbyists</span>
                  <span className="font-bold">{ind.lobbyists.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Top Client</span>
                  <span className="font-bold">{ind.topClient}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Top Client Spending</span>
                  <span className="font-bold">{formatCurrency(ind.topAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Growth Trend</span>
                  <span className="font-bold text-green-600">{ind.trend}</span>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Key Issues:</span>
                  <p className="text-sm text-gray-700 mt-1">{ind.issues}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Insights */}
      <div className="bg-indigo-50 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Key Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Healthcare Dominates</h3>
            <p className="text-sm text-gray-600">
              Healthcare &amp; Pharma spends more than double any other industry on lobbying. With $4.4B+ since 2018,
              it accounts for roughly 25% of all federal lobbying spending — more than defense and tech combined.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Tech Is the Fastest Growing</h3>
            <p className="text-sm text-gray-600">
              Technology lobbying is growing at 15% annually — the fastest of any sector. Driven by AI regulation,
              antitrust enforcement, and privacy legislation, tech spending has more than quadrupled since 2015.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">The Trade Group Multiplier</h3>
            <p className="text-sm text-gray-600">
              Industry totals include trade group spending. The National Association of Realtors alone accounts for
              $387M — more than many entire industries spend. Trade groups amplify industry voice beyond company-level lobbying.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Education: Small but Growing</h3>
            <p className="text-sm text-gray-600">
              Education lobbying is the smallest sector at $280M but growing at 9%/year — driven by student loan
              policy, Title IX debates, and fights over federal education funding.
            </p>
          </div>
        </div>
      </div>

      {/* Deeper Analysis */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Cross-Industry Lobbying Dynamics</h2>
        <div className="prose prose-lg max-w-none">
          <p>Industries don&apos;t lobby in isolation. When healthcare companies push for FDA reforms, pharmaceutical, insurance, and medical device companies may find themselves lobbying on the same bills from different angles. When Congress debates infrastructure spending, transportation, construction, energy, and telecom companies all compete for funding.</p>
          <p>These cross-industry dynamics create fascinating alliances and rivalries. Big Tech and Big Pharma increasingly clash over health data privacy. Defense contractors and tech companies compete for cybersecurity contracts. Energy companies and automakers disagree on EV mandates but unite on trade policy.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Arms Race</h3>
          <p>Once one company in an industry starts lobbying, competitors follow. This creates an arms race dynamic where lobbying spending ratchets upward over time. The tech industry is the clearest example: Google started lobbying seriously around 2010, and within a decade, every major tech company had a multi-million-dollar DC operation. The same pattern is now playing out in crypto, AI, and space industries.</p>
          <p>Explore which specific issues are surging on our <Link href="/momentum" className="text-indigo-600 hover:underline">momentum tracker</Link>, or see how issues overlap on the <Link href="/issue-battles" className="text-indigo-600 hover:underline">issue collisions page</Link>.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Trade Groups: The Hidden Multiplier</h3>
          <p>The numbers above include trade group spending, which is a critical multiplier for industry influence. The National Association of Realtors ($387M) spends more than many entire industries do individually. PhRMA ($321M) amplifies pharmaceutical company lobbying. The U.S. Chamber of Commerce ($607M+) lobbies on behalf of business broadly.</p>
          <p>When you see an industry&apos;s total lobbying figure, remember that it combines individual company lobbying, trade association lobbying, and coalition lobbying. The real influence is often greater than any single number suggests.</p>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Which industry spends the most on lobbying?", acceptedAnswer: { "@type": "Answer", text: "Healthcare & Pharmaceuticals is the largest lobbying sector with $4.4B+ spent since 2018, roughly 25% of all federal lobbying spending. This is driven by drug pricing legislation, FDA regulation, and Medicare/Medicaid policy." } },
          { "@type": "Question", name: "Which industry's lobbying is growing fastest?", acceptedAnswer: { "@type": "Answer", text: "Technology lobbying is growing at 15% annually, the fastest of any sector. Driven by AI regulation, antitrust enforcement, and privacy legislation, tech spending has more than quadrupled since 2015." } },
          { "@type": "Question", name: "How do trade groups affect industry lobbying totals?", acceptedAnswer: { "@type": "Answer", text: "Trade groups are a major multiplier. The National Association of Realtors alone accounts for $387M in lobbying, more than many entire industries. PhRMA adds $321M+ for pharmaceuticals. These groups amplify individual company lobbying significantly." } },
          { "@type": "Question", name: "How does defense lobbying ROI compare to other industries?", acceptedAnswer: { "@type": "Answer", text: "Defense has some of the highest measurable ROI due to the direct connection between lobbying and federal contracts. Some contractors see returns of 49,536:1. Other industries like pharma see high but harder-to-measure returns through regulatory outcomes rather than direct contracts." } },
        ]
      }) }} />

      <div className="text-center mt-10">
        <Link href="/industries" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
          Explore Full Industry Data →
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Pages</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/pharmaceutical-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💊 Pharma Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">The biggest spending industry</div>
          </Link>
          <Link href="/tech-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Tech Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">The fastest growing sector</div>
          </Link>
          <Link href="/defense-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ Defense Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">The military-industrial complex</div>
          </Link>
          <Link href="/lobbying-vs-contracts" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 ROI Calculator</div>
            <div className="text-xs text-gray-500 mt-1">Lobbying spend vs. contracts</div>
          </Link>
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
            <div className="text-xs text-gray-500 mt-1">Individual company rankings</div>
          </Link>
          <Link href="/trends" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 Spending Trends</div>
            <div className="text-xs text-gray-500 mt-1">Historical spending data</div>
          </Link>
        </div>
      </div>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How to Use the Industry Comparison Tool</h2>
        <div className="prose prose-lg max-w-none">
          <p>Select two or more industries to compare their lobbying spending over time. The tool visualizes quarterly spending trends, highlights periods of rapid growth or decline, and calculates growth rates for easy comparison. Use it to answer questions like: Is <Link href="/tech-lobbying" className="text-indigo-600 hover:underline">tech lobbying</Link> growing faster than <Link href="/pharmaceutical-lobbying" className="text-indigo-600 hover:underline">pharma</Link>? How does <Link href="/defense-lobbying" className="text-indigo-600 hover:underline">defense spending</Link> compare to healthcare?</p>
          <p>Industry classifications follow the categories used in Senate LDA filings. Some organizations file under multiple industries when their lobbying spans several sectors. In these cases, spending is attributed to the primary industry listed on each filing.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Key Industry Comparisons for 2026</h2>
        <div className="prose prose-lg max-w-none">
          <p>The most revealing comparisons in the current landscape include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Healthcare vs. Technology:</strong> Healthcare still leads in total spending, but technology has the highest growth rate. The gap is narrowing as AI regulation and data privacy drive tech spending.</li>
            <li><strong>Defense vs. Energy:</strong> Both are mature lobbying sectors, but they&apos;re diverging. Defense spending is rising with the FY2027 budget battle, while fossil fuel lobbying has plateaued as the industry shifts strategy toward direct political engagement.</li>
            <li><strong>Finance vs. Crypto:</strong> Traditional financial services lobbying remains dominant, but cryptocurrency has gone from zero to $80M+ in just five years, representing the fastest-growing subsector in financial lobbying.</li>
          </ul>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Which industry spends the most on lobbying?", acceptedAnswer: { "@type": "Answer", text: "Healthcare (including pharmaceuticals) is the largest lobbying sector, spending over $700 million annually. Technology and defense round out the top three. Use the industry comparison tool to visualize spending differences over time." } },
          { "@type": "Question", name: "Which industry\'s lobbying is growing fastest?", acceptedAnswer: { "@type": "Answer", text: "Technology lobbying is growing fastest overall, driven by AI regulation and cryptocurrency. Within tech, AI-related lobbying has surged 400%+ since 2022, and crypto lobbying went from near-zero to $80M+ annually in five years." } },
        ]
      }) }} />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Understanding Industry Classification</h2>
        <div className="prose prose-lg max-w-none">
          <p>Industry categories on OpenLobby are based on classifications assigned during LDA registration. Some organizations span multiple industries — Amazon, for example, appears in technology, retail, and cloud computing contexts. Our comparison tool uses the primary industry listed on each filing to avoid double-counting.</p>
          <p>Trade associations present a unique challenge. The U.S. Chamber of Commerce lobbies across virtually every industry, while PhRMA lobbies exclusively for pharmaceuticals. When comparing industries, keep in mind that trade association spending may represent dozens or hundreds of member companies pooling resources. See our <Link href="/methodology" className="text-indigo-600 hover:underline">methodology page</Link> for details on how we handle these classifications.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore by Industry</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/pharmaceutical-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💊 Pharmaceutical</div>
            <div className="text-xs text-gray-500 mt-1">The largest lobbying sector</div>
          </Link>
          <Link href="/tech-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Technology</div>
            <div className="text-xs text-gray-500 mt-1">Fastest-growing sector</div>
          </Link>
          <Link href="/defense-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ Defense</div>
            <div className="text-xs text-gray-500 mt-1">Highest ROI sector</div>
          </Link>
        </div>
      </section>
          {/* Data Notes */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Notes &amp; Methodology</h2>
        <p className="text-gray-600 mb-3">
          All data on this page is sourced from Senate Office of Public Records lobbying disclosure filings
          under the Lobbying Disclosure Act of 1995. Figures reflect reported spending as filed and may be
          subject to amendment. Quarterly totals are annualized where noted.
        </p>
        <p className="text-gray-600 mb-3">
          Industry classifications follow the Center for Responsive Politics methodology. Where companies
          operate across multiple sectors, spending is attributed to the primary business classification.
          Foreign entity designations follow FARA and LDA Section 4 definitions.
        </p>
        <p className="text-gray-600 mb-3">
          Year-over-year comparisons use inflation-adjusted figures (2026 dollars) unless otherwise noted.
          Historical data extends back to 1998 when electronic filing became mandatory.
        </p>
        <p className="text-gray-600">
          For questions about our data or methodology, see our{' '}
          <a href="/methodology" className="text-blue-600 hover:underline">full methodology page</a> or{' '}
          <a href="/about" className="text-blue-600 hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  )
}
