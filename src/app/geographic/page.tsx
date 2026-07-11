'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber } from '@/lib/format'

interface TopIssue { code: string; count: number }
interface StateData {
  state: string; totalIncome: number; filings: number; uniqueClients: number
  population: number; perCapita: number; perCapitaFilings: number; topIssues: TopIssue[]
}
interface Data { states: StateData[] }

const STATE_NAMES: Record<string, string> = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',
  DE:'Delaware',DC:'District of Columbia',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',
  IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',
  MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',
  NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',
  OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',
  SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',
  WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',PR:'Puerto Rico',GU:'Guam',VI:'Virgin Islands',
}

type SortKey = 'totalIncome' | 'perCapita' | 'uniqueClients' | 'filings'

function getSpendingColor(perCapita: number): string {
  if (perCapita > 1000) return 'bg-indigo-100 border-indigo-300'
  if (perCapita > 200) return 'bg-purple-50 border-purple-200'
  if (perCapita > 100) return 'bg-blue-50 border-blue-200'
  return 'bg-gray-50 border-gray-200'
}

export default function GeographicPage() {
  const [data, setData] = useState<Data | null>(null)
  const [sortBy, setSortBy] = useState<SortKey>('totalIncome')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')

  useEffect(() => { fetch('/data/geographic-heatmap.json').then(r => r.json()).then(setData).catch(() => {}) }, [])

  const sorted = useMemo(() => {
    if (!data) return []
    return [...data.states].sort((a, b) => sortDir === 'desc' ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy])
  }, [data, sortBy, sortDir])

  const punchAbove = useMemo(() => {
    if (!data) return []
    return [...data.states]
      .filter(s => s.population < 2000000 && s.state !== 'DC')
      .sort((a, b) => b.perCapita - a.perCapita)
      .slice(0, 10)
  }, [data])

  const dc = data?.states.find(s => s.state === 'DC')

  function handleSort(key: SortKey) {
    if (sortBy === key) setSortDir(d => d === 'desc' ? 'asc' : 'desc')
    else { setSortBy(key); setSortDir('desc') }
  }

  if (!data) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Geographic' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Map</h1>
          <p className="text-gray-600 max-w-3xl">Where influence comes from — lobbying spending and activity by state.</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/geographic" title="Geographic Lobbying Analysis — OpenLobby" />
      </div>

      {/* DC callout */}
      {dc && (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🏛️</span>
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                DC: ${formatNumber(Math.round(dc.perCapita))}/person in lobbying
              </h2>
              <p className="text-sm text-red-800 leading-relaxed">
                The District of Columbia is in a league of its own — {formatCurrency(dc.totalIncome)} in total lobbying from {formatNumber(dc.uniqueClients)} clients. That&apos;s ${formatNumber(Math.round(dc.perCapita))} per resident, dwarfing every state by orders of magnitude. DC isn&apos;t just where lobbying happens — it&apos;s where lobbying <em>lives</em>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{data.states.length}</div>
          <div className="text-xs text-gray-500">States/Territories</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(data.states.reduce((s, st) => s + st.totalIncome, 0))}</div>
          <div className="text-xs text-gray-500">Total Lobbying</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.states.reduce((s, st) => s + st.uniqueClients, 0))}</div>
          <div className="text-xs text-gray-500">Total Clients</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.states.reduce((s, st) => s + st.filings, 0))}</div>
          <div className="text-xs text-gray-500">Total Filings</div>
        </div>
      </div>

      {/* State ranking table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>State Rankings</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">State</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('totalIncome')}>Total Spending {sortBy === 'totalIncome' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('perCapita')}>Per Capita {sortBy === 'perCapita' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('uniqueClients')}>Clients {sortBy === 'uniqueClients' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('filings')}>Filings {sortBy === 'filings' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Top Issues</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sorted.map((s, i) => (
                <tr key={s.state} className={`hover:bg-gray-50 ${s.state === 'DC' ? 'bg-yellow-50' : ''}`}>
                  <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    <Link href={`/states/${s.state}`} className="text-primary hover:underline">{STATE_NAMES[s.state] || s.state}</Link>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatCurrency(s.totalIncome)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">${formatNumber(Math.round(s.perCapita))}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatNumber(s.uniqueClients)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatNumber(s.filings)}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1 flex-wrap">
                      {s.topIssues.slice(0, 3).map(ti => (
                        <Link key={ti.code} href={`/issues/${ti.code}`} className="bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded hover:bg-indigo-50 hover:text-indigo-700">{ti.code}</Link>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Punching Above Their Weight */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>🥊 Punching Above Their Weight</h2>
        <p className="text-gray-600 mb-4 text-sm">Small states (under 2M population) with outsized per-capita lobbying spending.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {punchAbove.map(s => (
            <div key={s.state} className={`border rounded-xl p-4 ${getSpendingColor(s.perCapita)}`}>
              <Link href={`/states/${s.state}`} className="text-lg font-bold text-gray-900 hover:text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{s.state}</Link>
              <div className="text-sm text-gray-600"><Link href={`/states/${s.state}`} className="hover:text-primary hover:underline">{STATE_NAMES[s.state]}</Link></div>
              <div className="text-xl font-bold text-primary mt-2">${formatNumber(Math.round(s.perCapita))}</div>
              <div className="text-xs text-gray-500">per capita</div>
              <div className="text-xs text-gray-500 mt-1">{formatNumber(s.uniqueClients)} clients · {formatCurrency(s.totalIncome)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/dc-lobbying-capital" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏛️ DC: The Lobbying Capital</div>
            <div className="text-xs text-gray-500 mt-1">Why Washington dominates the map</div>
          </Link>
          <Link href="/investigations/foreign-influence" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🌍 Foreign Influence</div>
            <div className="text-xs text-gray-500 mt-1">International lobbying in the US</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">Complete state-by-state breakdown</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/states" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🗺️ All States</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/concentration" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🎯 Market Concentration</Link>
        </div>
      </section>

      {/* Additional Analysis */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Why Geography Matters in Lobbying</h2>
        <div className="prose prose-lg max-w-none">
          <p>Lobbying spending by state reveals where economic interests concentrate and how different regions engage with federal policy. States with major defense installations (Virginia, Maryland, Connecticut) show disproportionate defense lobbying. States with pharmaceutical hubs (New Jersey, Massachusetts) dominate healthcare lobbying. Energy-producing states (Texas, Louisiana, Oklahoma) lead on energy and environmental issues.</p>
          <p>This geographic concentration has political implications: members of Congress from states with heavy lobbying activity receive more attention from lobbyists, attend more fundraisers, and are more likely to serve on committees relevant to their state&apos;s major industries.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Virginia Corridor</h3>
          <p>Virginia consistently ranks among the top lobbying states, driven by its proximity to Washington, DC and its massive defense contractor presence. Companies like Northrop Grumman, General Dynamics, Booz Allen Hamilton, Leidos, and SAIC are all headquartered in Northern Virginia, creating a dense lobbying ecosystem that feeds directly into Pentagon and Capitol Hill influence operations.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Small State Influence</h3>
          <p>Per-capita lobbying metrics reveal surprising influence concentrations. Small states with major industries — like Connecticut (insurance and defense), Delaware (corporate law), and Rhode Island (defense and healthcare) — punch well above their weight. A single major employer in a small state can dramatically affect that state&apos;s per-capita lobbying figures.</p>
          <p>Explore state-level data in detail on our <Link href="/states" className="text-indigo-600 hover:underline">state pages</Link>, or see how lobbying connects to broader economic patterns with our <Link href="/industries" className="text-indigo-600 hover:underline">industry analysis</Link>.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Urban vs. Rural Lobbying</h3>
          <p>Lobbying spending is overwhelmingly concentrated in urban and suburban areas. The top 10 metropolitan areas account for over 70% of all lobbying client headquarters. Rural areas, despite representing significant portions of the population, have minimal direct lobbying presence — their interests are more commonly represented through trade associations (like the American Farm Bureau Federation) and industry groups rather than individual company lobbying.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Which state has the most lobbying spending?", acceptedAnswer: { "@type": "Answer", text: "Washington, DC leads by an enormous margin with $27,105 in per-capita lobbying spending. Among states, Virginia, New York, California, and Texas typically rank highest by total spending due to their concentrations of defense contractors, financial institutions, and corporate headquarters." } },
          { "@type": "Question", name: "Why does DC have so much more lobbying than any state?", acceptedAnswer: { "@type": "Answer", text: "DC is where lobbying happens. Most lobbying firms, trade associations, and government affairs offices are headquartered there. With a small resident population (under 700,000) and massive lobbying infrastructure, DC's per-capita figure ($27,105) dwarfs every state." } },
          { "@type": "Question", name: "Which small states have the most lobbying per capita?", acceptedAnswer: { "@type": "Answer", text: "Small states with major industries punch above their weight. Connecticut (insurance/defense), Delaware (corporate law), and states with major defense installations or pharmaceutical hubs show disproportionate per-capita lobbying spending." } },
          { "@type": "Question", name: "How does geographic lobbying data relate to political influence?", acceptedAnswer: { "@type": "Answer", text: "States with heavy lobbying activity see their congressional delegations receive more attention from lobbyists. Members from these states are more likely to serve on committees relevant to their state's industries and to receive campaign contributions from lobbying clients." } },
        ]
      }) }} />

      <SourceCitation sources={['Senate LDA Filings', 'U.S. Census Bureau Population Estimates']} lastUpdated="February 2026" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>State-Level Lobbying Dynamics in 2026</h2>
        <div className="prose prose-lg max-w-none">
          <p>Geographic lobbying patterns are shifting as industries evolve. Texas has seen rapid growth in lobbying activity driven by the energy sector, defense installations, and an expanding tech presence in Austin. Florida&apos;s lobbying footprint is growing as companies relocate headquarters to the state. Meanwhile, traditional lobbying powerhouses like New York and California maintain dominant positions through their concentrations of financial, pharmaceutical, and tech companies.</p>
          <p>The most interesting geographic story may be the rise of &quot;secondary&quot; lobbying hubs. Companies increasingly maintain Washington offices for direct lobbying while also engaging in state-level advocacy. This dual approach means that geographic analysis must account for both where organizations are headquartered and where they direct their lobbying efforts.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Industry Clusters and Regional Influence</h2>
        <div className="prose prose-lg max-w-none">
          <p>Certain states dominate specific lobbying sectors. Connecticut&apos;s insurance industry and defense manufacturing (United Technologies, now RTX) drive disproportionate per-capita spending. New Jersey&apos;s pharmaceutical corridor — home to Johnson &amp; Johnson, Merck, and dozens of smaller firms — makes it a <Link href="/pharmaceutical-lobbying" className="text-indigo-600 hover:underline">pharma lobbying</Link> powerhouse. Virginia&apos;s proximity to the Pentagon ensures it leads in <Link href="/defense-lobbying" className="text-indigo-600 hover:underline">defense lobbying</Link>.</p>
          <p>These industry clusters create feedback loops with congressional representation. Members from defense-heavy states tend to seek Armed Services Committee seats, reinforcing the relationship between geographic industry concentration and legislative influence. Explore these connections further in our <Link href="/analysis" className="text-indigo-600 hover:underline">analysis hub</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/tools/industry-compare" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Industry Compare</div>
            <div className="text-xs text-gray-500 mt-1">Compare spending across sectors</div>
          </Link>
          <Link href="/foreign" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🌍 Foreign Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">International influence in U.S. policy</div>
          </Link>
          <Link href="/trends" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 Spending Trends</div>
            <div className="text-xs text-gray-500 mt-1">Historical spending patterns</div>
          </Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Per-Capita Lobbying: A Different Perspective</h2>
        <div className="prose prose-lg max-w-none">
          <p>Total spending tells one story, but per-capita figures reveal a different picture. Washington, DC leads at $27,105 per resident — a reflection of being the epicenter of the lobbying industry itself. Among actual states, per-capita leaders tend to be those with major industry headquarters concentrated in a relatively small population: Connecticut (insurance and defense), Delaware (corporate law), and states with dominant single-industry employers.</p>
          <p>Per-capita analysis also highlights underrepresented states. Large, rural states often have the lowest per-capita lobbying despite significant agricultural and energy industries. Their interests are more commonly represented through <Link href="/industries" className="text-indigo-600 hover:underline">trade associations</Link> rather than individual company lobbying. Browse the full data on our <Link href="/search" className="text-indigo-600 hover:underline">searchable database</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Geographic Data</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">🔍 Search by State</Link>
          <Link href="/downloads" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📥 Download Data</Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The K Street Effect</h2>
        <div className="prose prose-lg max-w-none">
          <p>Washington, DC&apos;s dominance in geographic lobbying data reflects its unique role as both the seat of government and the lobbying industry&apos;s headquarters. With under 700,000 residents and thousands of lobbying firms, the District&apos;s per-capita figure of $27,105 is more than 50 times that of most states. This concentration creates a self-reinforcing ecosystem where proximity to lawmakers attracts more firms, which in turn attracts more clients.</p>
          <p>Virginia and Maryland benefit from spillover effects, with many lobbying professionals living in the suburbs while working in DC. The broader DC metropolitan area accounts for the vast majority of the lobbying industry&apos;s workforce and revenue. Explore related analysis on our <Link href="/how-lobbying-works" className="text-indigo-600 hover:underline">how lobbying works page</Link>.</p>
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
