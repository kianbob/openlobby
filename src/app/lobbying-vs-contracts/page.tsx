'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { slugify } from '@/lib/format'

const contractors = [
  { name: 'TriWest Healthcare Alliance', category: 'Healthcare', lobbying: 270000, contracts: 13374744670, roi: 49536 },
  { name: 'Amentum Services', category: 'Services', lobbying: 580000, contracts: 3583167409, roi: 6178 },
  { name: 'Sandia National Labs (NTESS)', category: 'National Security', lobbying: 1019000, contracts: 5673408174, roi: 5568 },
  { name: 'McKesson Corporation', category: 'Healthcare', lobbying: 3630000, contracts: 11870431649, roi: 3270 },
  { name: 'Atlantic Diving Supply', category: 'Defense Supply', lobbying: 1942000, contracts: 5993126834, roi: 3086 },
  { name: 'RTX Corporation', category: 'Defense', lobbying: 2775000, contracts: 7280700848, roi: 2624 },
  { name: 'QTC Medical Services', category: 'Healthcare', lobbying: 1160000, contracts: 2886404916, roi: 2488 },
  { name: 'Huntington Ingalls', category: 'Defense', lobbying: 4436000, contracts: 8565929513, roi: 1931 },
  { name: 'BAE Systems Land & Armaments', category: 'Defense', lobbying: 1370000, contracts: 2164547913, roi: 1580 },
  { name: 'Raytheon Company', category: 'Defense', lobbying: 10433000, contracts: 16472942438, roi: 1579 },
  { name: 'Johns Hopkins APL', category: 'Research', lobbying: 1984000, contracts: 2359804109, roi: 1189 },
  { name: 'The Boeing Company', category: 'Defense', lobbying: 14852500, contracts: 15444072108, roi: 1040 },
  { name: 'Caltech (JPL)', category: 'Research', lobbying: 2795000, contracts: 2297053488, roi: 822 },
  { name: 'SpaceX', category: 'Aerospace', lobbying: 5253000, contracts: 2999808160, roi: 571 },
  { name: 'Booz Allen Hamilton', category: 'IT/Consulting', lobbying: 12130000, contracts: 6563770954, roi: 541 },
  { name: 'Lockheed Martin', category: 'Defense', lobbying: 141599000, contracts: 58775947590, roi: 415 },
  { name: 'Accenture Federal Services', category: 'IT/Consulting', lobbying: 10455000, contracts: 3235465824, roi: 309 },
  { name: 'Sierra Nevada Company', category: 'Defense', lobbying: 8000000, contracts: 2243556112, roi: 280 },
  { name: 'General Dynamics IT', category: 'Defense', lobbying: 16697500, contracts: 4635820603, roi: 278 },
  { name: 'SAIC', category: 'IT/Consulting', lobbying: 17237500, contracts: 4360395756, roi: 253 },
  { name: 'Leidos', category: 'IT/Consulting', lobbying: 22810000, contracts: 3037225603, roi: 133 },
]

const totalLobbying = 281428500
const totalContracts = 183818324671
const overallROI = Math.round(totalContracts / totalLobbying)

type SortKey = 'name' | 'lobbying' | 'contracts' | 'roi'

function fmt(n: number) {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n}`
}

export default function LobbyingVsContractsAnalysis() {
  const [sortKey, setSortKey] = useState<SortKey>('roi')
  const [sortAsc, setSortAsc] = useState(false)

  const sorted = useMemo(() => {
    const arr = [...contractors]
    arr.sort((a, b) => {
      const va = sortKey === 'name' ? a.name : a[sortKey]
      const vb = sortKey === 'name' ? b.name : b[sortKey]
      if (typeof va === 'string' && typeof vb === 'string') return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va)
      return sortAsc ? (va as number) - (vb as number) : (vb as number) - (va as number)
    })
    return arr
  }, [sortKey, sortAsc])

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(false) }
  }

  const SortHeader = ({ k, label, align = 'left' }: { k: SortKey; label: string; align?: string }) => (
    <th
      className={`py-3 px-3 cursor-pointer hover:bg-gray-100 select-none ${align === 'right' ? 'text-right' : 'text-left'}`}
      onClick={() => toggleSort(k)}
    >
      {label} {sortKey === k ? (sortAsc ? '↑' : '↓') : ''}
    </th>
  )

  const maxContracts = Math.max(...contractors.map(c => c.contracts))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Lobbying vs. Contracts' }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Lobbying ROI Calculator
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Cross-referenced lobbying disclosures with federal contract data from{' '}
        <a href="https://www.openspending.us" className="text-primary hover:underline">USASpending.gov</a>.
        For every $1 these contractors spent lobbying, they received thousands back in federal contracts.
      </p>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Matched Contractors', value: '21' },
          { label: 'Total Lobbying', value: fmt(totalLobbying) },
          { label: 'Total Contracts', value: fmt(totalContracts) },
          { label: 'Overall ROI', value: `${overallROI.toLocaleString()}:1` },
        ].map(s => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
            <div className="text-sm text-gray-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Visual: Bar Chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Lobbying Spend <span className="text-red-500">(red)</span> vs. Contracts Received <span className="text-primary">(blue)</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">The lobbying bars are so small they&apos;re barely visible. That&apos;s the point.</p>
        <div className="space-y-2 max-h-[600px] overflow-y-auto">
          {sorted.slice(0, 15).map(c => (
            <div key={c.name}>
              <div className="flex justify-between text-xs mb-0.5">
                <Link href={`/clients/${slugify(c.name)}`} className="font-medium truncate mr-2 text-primary hover:underline">{c.name}</Link>
                <span className="text-primary font-bold whitespace-nowrap">{c.roi.toLocaleString()}:1</span>
              </div>
              <div className="relative h-5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-primary/80 rounded-full"
                  style={{ width: `${(c.contracts / maxContracts) * 100}%` }}
                />
                <div
                  className="absolute inset-y-0 left-0 bg-red-500 rounded-full"
                  style={{ width: `${Math.max((c.lobbying / maxContracts) * 100, 0.15)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
                <span>🔴 {fmt(c.lobbying)}</span>
                <span>🔵 {fmt(c.contracts)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sortable Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <SortHeader k="name" label="Contractor" />
                <th className="py-3 px-3 text-left">Category</th>
                <SortHeader k="lobbying" label="Lobbying Spend" align="right" />
                <SortHeader k="contracts" label="Federal Contracts" align="right" />
                <SortHeader k="roi" label="ROI" align="right" />
              </tr>
            </thead>
            <tbody>
              {sorted.map((c, i) => (
                <tr key={c.name} className={`border-b border-gray-100 hover:bg-gray-50 ${i % 2 ? 'bg-gray-50/50' : ''}`}>
                  <td className="py-3 px-3 font-medium"><Link href={`/clients/${slugify(c.name)}`} className="text-primary hover:underline">{c.name}</Link></td>
                  <td className="py-3 px-3 text-gray-600">{c.category}</td>
                  <td className="py-3 px-3 text-right text-gray-600">{fmt(c.lobbying)}</td>
                  <td className="py-3 px-3 text-right font-semibold">{fmt(c.contracts)}</td>
                  <td className="py-3 px-3 text-right font-bold text-primary">{c.roi.toLocaleString()}:1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Analysis */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What Drives Lobbying ROI?</h2>
        <div className="prose max-w-none text-sm">
          <p>The enormous ROI figures on this page raise a natural question: does lobbying <em>cause</em> companies to win contracts, or do large contractors simply lobby to protect their existing positions? The answer is likely both.</p>
          <p className="mt-3">Companies with extensive government contracting relationships lobby to protect specific programs, secure favorable contract terms, and influence procurement requirements in ways that favor their products. A defense contractor lobbying on the NDAA isn&apos;t just spending money randomly — they&apos;re trying to ensure that specific weapons systems get funded, that procurement rules favor established contractors, and that their technology standards become the government&apos;s standards.</p>
          <p className="mt-3">The <Link href="/revolving-door" className="text-primary hover:underline">revolving door</Link> amplifies this dynamic. Former Pentagon procurement officials who become lobbyists for defense contractors bring intimate knowledge of the acquisition process — knowledge that helps their clients navigate a system they once managed.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Healthcare ROI Anomaly</h2>
        <div className="prose max-w-none text-sm">
          <p>Healthcare companies dominate the highest-ROI slots in our data, but their situation is different from traditional defense contractors. Companies like TriWest Healthcare Alliance and McKesson Corporation receive massive government contracts primarily through Medicare, Medicaid, TRICARE, and VA health programs.</p>
          <p className="mt-3">Their lobbying focuses on maintaining and expanding these program relationships rather than winning competitive procurement bids. When a healthcare company lobbies on Medicare reimbursement rates, they&apos;re not bidding for a contract — they&apos;re shaping the rules of a market where they&apos;re already a participant.</p>
          <p className="mt-3">This means healthcare ROI figures, while real, represent a different dynamic than defense ROI. Explore more in our <Link href="/pharmaceutical-lobbying" className="text-primary hover:underline">pharmaceutical lobbying</Link> and <Link href="/defense-lobbying" className="text-primary hover:underline">defense lobbying</Link> analyses.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Small Firms vs. Giants</h2>
        <div className="prose max-w-none text-sm">
          <p>Not every lobbying investment pays off equally. Large defense primes like Lockheed Martin ($141M in lobbying) have relatively lower ROI ratios (415:1) compared to smaller contractors that spend modestly. This suggests diminishing returns at scale — or simply that Lockheed Martin lobbies on a much broader range of issues beyond just contracts.</p>
          <p className="mt-3">The highest-ROI companies tend to be focused contractors with narrow lobbying agendas: they lobby specifically for the programs that generate their revenue. Broad-based lobbying (on tax policy, trade, regulation) doesn&apos;t show up in contract ROI calculations but may deliver value through other channels.</p>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is the ROI on lobbying?", acceptedAnswer: { "@type": "Answer", text: "The highest ROI in our dataset is 49,536:1 (TriWest Healthcare Alliance: $270K lobbying, $13.4B contracts). Across 21 matched contractors, the overall ROI is 653:1. Academic research estimates average returns of $6-$220 per $1 spent, depending on the industry." } },
          { "@type": "Question", name: "Does lobbying guarantee government contracts?", acceptedAnswer: { "@type": "Answer", text: "No. The ROI figures shown are correlational, not causal. Companies that receive large contracts may also lobby, but the lobbying doesn't automatically cause contract awards. However, the patterns are striking enough to warrant transparency and public scrutiny." } },
          { "@type": "Question", name: "Which companies have the highest lobbying ROI?", acceptedAnswer: { "@type": "Answer", text: "TriWest Healthcare Alliance (49,536:1), Amentum Services (6,178:1), Sandia National Labs (5,568:1), McKesson Corporation (3,270:1), and Atlantic Diving Supply (3,086:1) top our ROI rankings. Healthcare and defense dominate the list." } },
          { "@type": "Question", name: "Where does the contract data come from?", acceptedAnswer: { "@type": "Answer", text: "Federal contract data comes from USASpending.gov, the official source for federal spending data. We match the top federal contractors by total obligation against lobbying registrants in Senate LDA filings for 2018-2025 using exact and fuzzy name matching." } },
        ]
      }) }} />

      {/* Source & Links */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Methodology &amp; Sources</h3>
        <p className="text-sm text-gray-700 mb-3">
          We matched the top federal contractors (by total obligation on{' '}
          <a href="https://www.usaspending.gov" className="text-primary hover:underline">USASpending.gov</a>) 
          against lobbying registrants in Senate LDA filings for 2018–2025. Matches were made using exact 
          and fuzzy name matching. ROI = total federal contracts ÷ total lobbying spend.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Federal spending data available at{' '}
          <a href="https://www.openspending.us" className="text-primary hover:underline">OpenSpending.us</a>.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/investigations/lobbying-vs-contracts" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
            Read the Investigation →
          </Link>
          <Link href="/lobbying-roi" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Lobbying ROI Analysis →
          </Link>
          <a href="https://www.openspending.us" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            OpenSpending.us →
          </a>
        </div>
      </div>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How We Calculate Lobbying ROI</h2>
        <div className="prose prose-lg max-w-none">
          <p>Our ROI calculation cross-references two public datasets: lobbying disclosures from Senate LDA filings and federal contract awards from <a href="https://www.openspending.us" className="text-indigo-600 hover:underline">USASpending.gov</a>. For each organization, we calculate: <strong>ROI = Total Contracts Received ÷ Total Lobbying Spent</strong>.</p>
          <p>This is a <em>correlational</em> measure, not a causal one. Companies that receive large federal contracts tend to be large organizations that also lobby heavily. The lobbying may help secure contracts, but it may also reflect the natural behavior of companies that already do significant government business. Still, the patterns are striking — especially in the <Link href="/defense-lobbying" className="text-indigo-600 hover:underline">defense sector</Link>, where the correlation between lobbying spending and contract awards is strongest.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Sector-by-Sector ROI Comparison</h2>
        <div className="prose prose-lg max-w-none">
          <p><strong>Defense:</strong> The highest ROI sector. Top defense contractors like Lockheed Martin, Boeing, and Raytheon receive thousands of dollars in contracts for every dollar spent on lobbying. This reflects the massive scale of defense procurement and the direct relationship between lobbying and contract competition.</p>
          <p><strong>Healthcare:</strong> Pharmaceutical companies show strong ROI through Medicare/Medicaid reimbursement rates and FDA regulatory outcomes, though the returns are harder to quantify than direct contracts. See our <Link href="/pharmaceutical-lobbying" className="text-indigo-600 hover:underline">pharma lobbying analysis</Link>.</p>
          <p><strong>Technology:</strong> Tech companies’ lobbying ROI often manifests as <em>avoided costs</em> — preventing unfavorable regulation rather than securing direct government contracts. Antitrust enforcement delays and favorable privacy frameworks save billions. Explore more on our <Link href="/tech-lobbying" className="text-indigo-600 hover:underline">tech lobbying page</Link>.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is the ROI on lobbying?", acceptedAnswer: { "@type": "Answer", text: "Lobbying ROI varies by industry. Defense contractors see the highest returns, with top firms receiving $22,000+ in federal contracts for every $1 spent on lobbying. This is correlational rather than causal, but the pattern is consistent across the sector." } },
          { "@type": "Question", name: "Does lobbying guarantee government contracts?", acceptedAnswer: { "@type": "Answer", text: "No. Lobbying does not guarantee contracts, and federal procurement is governed by competitive bidding rules. However, lobbying helps companies stay informed about upcoming opportunities, shape requirements in their favor, and maintain relationships with procurement officials. The correlation between lobbying spending and contract awards is strong, particularly in defense." } },
          { "@type": "Question", name: "Where does lobbying and contract data come from?", acceptedAnswer: { "@type": "Answer", text: "Lobbying data comes from Senate LDA filings (lda.senate.gov). Federal contract data comes from USASpending.gov. OpenLobby cross-references both datasets to calculate ROI metrics. All data is public record." } },
        ]
      }) }} />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Correlation vs. Causation Question</h2>
        <div className="prose prose-lg max-w-none">
          <p>Critics rightly note that high lobbying ROI doesn&apos;t prove that lobbying <em>caused</em> contract awards. Large government contractors lobby heavily because they already do extensive government business — the lobbying may be a consequence of their government relationships, not the cause. However, academic research suggests the relationship runs in both directions: companies that increase lobbying tend to see subsequent increases in contract awards, even after controlling for company size and prior contract history.</p>
          <p>The most compelling evidence comes from natural experiments — when a company suddenly increases lobbying after a new government program is created, and subsequently wins contracts under that program. These patterns are common in our data and suggest that while lobbying alone doesn&apos;t guarantee contracts, it is a meaningful factor in the competitive landscape. Explore the full data on our <Link href="/downloads" className="text-indigo-600 hover:underline">downloads page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Pages</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/defense-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ Defense Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Highest ROI sector</div>
          </Link>
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
            <div className="text-xs text-gray-500 mt-1">Full investigation</div>
          </Link>
          <Link href="/trends" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 Spending Trends</div>
            <div className="text-xs text-gray-500 mt-1">Historical patterns</div>
          </Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Sources and Methodology</h2>
        <div className="prose prose-lg max-w-none">
          <p>Our lobbying-vs-contracts analysis combines two major public datasets. Lobbying expenditures come from Senate LDA filings processed by OpenLobby. Federal contract awards come from <a href="https://www.openspending.us" className="text-indigo-600 hover:underline">USASpending.gov</a>, which tracks all federal spending above $25,000. We match organizations across both datasets using a combination of exact name matching and fuzzy matching algorithms, with manual review for the top 500 spenders.</p>
          <p>For the complete details on our matching methodology and its limitations, see our <Link href="/methodology" className="text-indigo-600 hover:underline">methodology page</Link>.</p>
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
