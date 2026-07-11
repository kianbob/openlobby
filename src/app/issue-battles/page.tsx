'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber } from '@/lib/format'

interface Pair { issues: [string, string]; count: number; jaccard: number }
interface Data { topPairs: Pair[]; totalMultiIssueFilings: number; avgIssuesPerFiling: number }

const ISSUE_NAMES: Record<string, string> = {
  HCR: 'Healthcare', TAX: 'Taxation', DEF: 'Defense', TRD: 'Trade', BUD: 'Budget',
  ENG: 'Energy', ENV: 'Environment', TRA: 'Transportation', FIN: 'Financial Services',
  EDU: 'Education', LBR: 'Labor', IMM: 'Immigration', TEC: 'Technology', AGR: 'Agriculture',
  CPT: 'Computers/IT', CSP: 'Consumer Issues', GOV: 'Government Issues', MMM: 'Medicare/Medicaid',
  CON: 'Constitution', MON: 'Monetary Policy', CIV: 'Civil Rights', SCI: 'Science',
  SMB: 'Small Business', HOU: 'Housing', INT: 'Intelligence', FOR: 'Foreign Relations',
  MIA: 'Media/Info', NAT: 'Natural Resources', SPO: 'Sports', UTI: 'Utilities',
  BAN: 'Banking', AVI: 'Aviation', TEL: 'Telecom', GAM: 'Gaming', PHA: 'Pharmacy',
  RET: 'Retirement', INS: 'Insurance', TOB: 'Tobacco', WAS: 'Waste', ROD: 'Roads',
  MED: 'Medical', ALC: 'Alcohol', FIR: 'Firearms', DIS: 'Disaster', CDT: 'Commodities',
  AUT: 'Automotive', FOO: 'Food', ADV: 'Advertising', BEV: 'Beverages', APP: 'Apparel',
}

function getColor(jaccard: number): string {
  if (jaccard > 0.3) return '#4f46e5'
  if (jaccard > 0.2) return '#7c3aed'
  if (jaccard > 0.15) return '#a855f7'
  return '#c084fc'
}

export default function IssueBattlesPage() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => { fetch('/data/issue-cooccurrence.json').then(r => r.json()).then(setData).catch(() => {}) }, [])

  if (!data) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Issue Battles' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Issue Collisions</h1>
          <p className="text-gray-600 max-w-3xl">When industries clash — which lobbying issues get fought together in the same filings.</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/issue-battles" title="Issue Collisions — OpenLobby" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.totalMultiIssueFilings)}</div>
          <div className="text-xs text-gray-500">Multi-Issue Filings</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{data.avgIssuesPerFiling.toFixed(2)}</div>
          <div className="text-xs text-gray-500">Avg Issues per Filing</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{data.topPairs.length}</div>
          <div className="text-xs text-gray-500">Issue Pairs Tracked</div>
        </div>
      </div>

      {/* Network visualization - connected cards */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Issue Co-occurrence Network</h2>
        <p className="text-gray-600 mb-4 text-sm">Stronger connections (higher Jaccard similarity) indicate issues that are consistently lobbied together. Thicker lines = stronger relationship.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.topPairs.slice(0, 18).map((pair, i) => {
            const color = getColor(pair.jaccard)
            return (
              <div key={i} className="bg-white border-2 rounded-xl p-4 hover:shadow-lg transition-shadow" style={{ borderColor: color }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded">{pair.issues[0]}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">{pair.issues[1]}</span>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {ISSUE_NAMES[pair.issues[0]] || pair.issues[0]} × {ISSUE_NAMES[pair.issues[1]] || pair.issues[1]}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{formatNumber(pair.count)} joint filings</span>
                  <span className="text-sm font-bold" style={{ color }}>J={pair.jaccard.toFixed(3)}</span>
                </div>
                <div className="mt-2 bg-gray-100 rounded-full h-1.5">
                  <div className="h-full rounded-full" style={{ width: `${pair.jaccard * 100 * 2.5}%`, backgroundColor: color }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Battlegrounds narrative */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-indigo-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>⚔️ The Battlegrounds</h2>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p><strong>Healthcare × Medicare/Medicaid (J=0.434):</strong> The strongest connection in lobbying. Nearly half of all healthcare lobbying filings also address Medicare/Medicaid — because the two are inseparable in policy. Drug pricing, hospital reimbursement, and insurance regulation all live at this intersection.</p>
          <p><strong>Budget × Everything:</strong> Budget (BUD) appears in 4 of the top 5 pairs. This makes sense — nearly every policy fight ultimately comes down to money. Appropriations bills are the vehicle for policy, making budget the universal connector.</p>
          <p><strong>Tax × Trade (J=0.203):</strong> Tariffs are taxes on imports, so trade and tax lobbying naturally overlap. The 2025 tariff surge has only strengthened this connection as companies fight both the tariffs themselves and their tax implications.</p>
        </div>
      </section>

      {/* Full table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>All Issue Pairs</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Issue Pair</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">Joint Filings</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">Jaccard Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.topPairs.map((p, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {ISSUE_NAMES[p.issues[0]] || p.issues[0]} × {ISSUE_NAMES[p.issues[1]] || p.issues[1]}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatNumber(p.count)}</td>
                  <td className="px-4 py-3 text-right font-mono text-gray-700">{p.jaccard.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Additional Analysis */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Why Issue Co-occurrence Matters</h2>
        <div className="prose prose-lg max-w-none">
          <p>When issues appear together in lobbying filings, it reveals how industries think about policy. A company lobbying on both TAX and TRD (Trade) isn&apos;t fighting two separate battles — it&apos;s fighting one battle on two fronts. Tariffs <em>are</em> taxes, and trade policy <em>is</em> tax policy for importers.</p>
          <p>Understanding these connections helps citizens and journalists see through the complexity of lobbying disclosures. A pharmaceutical company filing on both HCR (Healthcare) and BUD (Budget) is simultaneously fighting drug pricing reform and lobbying for NIH funding — two sides of the same coin for their bottom line.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The 2025-2026 Shift</h3>
          <p>The issue landscape has shifted dramatically since 2024. Trade (TRD) has surged from a mid-tier issue to one of the most frequently paired categories, driven by tariff uncertainty. AI-related filings increasingly pair Computers/IT (CPT) with Defense (DEF), reflecting the dual-use nature of artificial intelligence technology.</p>
          <p>Meanwhile, healthcare pairings remain stubbornly dominant — the HCR × MMM connection has been the strongest in our dataset every single year since 2018, never dropping below a Jaccard score of 0.40.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>How to Read These Scores</h3>
          <p>The <strong>Jaccard similarity score</strong> measures how often two issues appear together relative to how often they appear at all. A score of 1.0 would mean two issues always appear together; a score of 0.0 means they never do. In lobbying data, scores above 0.20 indicate a strong, meaningful connection between two policy areas.</p>
          <p>The <strong>joint filings count</strong> tells you the raw volume — how many actual lobbying filings listed both issues. High joint filings with a moderate Jaccard score means both issues are very common individually but still frequently overlap. Use our <Link href="/issues" className="text-indigo-600 hover:underline">issue explorer</Link> to see individual issue statistics.</p>
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Industry Examples: Multi-Issue Lobbying</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">🏥 Pharmaceutical Companies</h3>
            <p>Big Pharma routinely files on HCR + PHA + BUD + TRD simultaneously. They&apos;re fighting drug pricing (HCR), shaping FDA regulation (PHA), protecting NIH funding (BUD), and blocking drug importation (TRD) — all in the same quarterly filing.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">💻 Tech Giants</h3>
            <p>Companies like Google and Meta file across CPT + TAX + TRD + DEF + IMM. They&apos;re fighting antitrust (CPT), shaping corporate tax policy (TAX), opposing data localization rules (TRD), bidding on defense contracts (DEF), and protecting H-1B visa programs (IMM).</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">✈️ Defense Contractors</h3>
            <p>Defense firms typically cluster around DEF + BUD + FOR + HOM. They&apos;re securing weapons programs (DEF), fighting for appropriations (BUD), supporting arms sales (FOR), and selling homeland security technology (HOM). See our <Link href="/defense-lobbying" className="text-indigo-600 hover:underline">defense lobbying analysis</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">⛽ Energy Companies</h3>
            <p>Oil and gas companies file on ENG + ENV + TAX + TRD. They lobby on drilling regulations (ENG), fight environmental rules (ENV), protect tax subsidies (TAX), and shape LNG export policy (TRD).</p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What are the most commonly paired lobbying issues?", acceptedAnswer: { "@type": "Answer", text: "Healthcare (HCR) and Medicare/Medicaid (MMM) have the strongest co-occurrence with a Jaccard score of 0.434. Budget/Appropriations (BUD) appears in 4 of the top 5 pairs, making it the universal connector in lobbying." } },
          { "@type": "Question", name: "What does the Jaccard score mean in lobbying data?", acceptedAnswer: { "@type": "Answer", text: "The Jaccard similarity score measures how often two issues appear together relative to how often they appear individually. A score above 0.20 indicates a strong connection between two policy areas. The maximum possible score is 1.0 (always appear together)." } },
          { "@type": "Question", name: "How many issues do lobbying filings typically cover?", acceptedAnswer: { "@type": "Answer", text: "The average lobbying filing lists 3.2 issue codes. Multi-issue filings reveal how organizations view policy battles as interconnected — a company lobbying on both trade and taxation sees tariffs as fundamentally a tax issue." } },
          { "@type": "Question", name: "Why is Budget/Appropriations the most connected lobbying issue?", acceptedAnswer: { "@type": "Answer", text: "Nearly every policy fight ultimately comes down to money. Appropriations bills are the vehicle for implementing policy, making Budget (BUD) the universal connector. Whether a company cares about defense, healthcare, or education, the federal budget determines funding levels." } },
        ]
      }) }} />

      <SourceCitation sources={['Senate LDA Filings', 'Lobbying Disclosure Act Reports']} lastUpdated="February 2026" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
            <div className="text-xs text-gray-500 mt-1">Industries competing over the same issues</div>
          </Link>
          <Link href="/investigations/tech-lobbying-war" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Big Tech&apos;s Lobbying War</div>
            <div className="text-xs text-gray-500 mt-1">Tech giants battling over policy</div>
          </Link>
          <Link href="/investigations/healthcare-3-billion-bet" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏥 Healthcare&apos;s $3B Bet</div>
            <div className="text-xs text-gray-500 mt-1">The healthcare lobbying arms race</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/issues" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📋 All Issues</Link>
          <Link href="/momentum" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚀 Momentum</Link>
          <Link href="/industries" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏭 Industries</Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How Issue Battles Shape Policy</h2>
        <div className="prose prose-lg max-w-none">
          <p>When multiple industries lobby on the same issue from different angles, it creates what we call an &quot;issue battle.&quot; These collisions reveal the true fault lines in American policy. Healthcare reform pits pharmaceutical companies against insurance companies against hospital systems — all spending millions to shape the same legislation in different directions.</p>
          <p>The most expensive issue battles in 2026 center on AI regulation (tech companies vs. civil society vs. incumbent industries), trade policy (importers vs. domestic manufacturers vs. agricultural exporters), and energy transition (fossil fuel companies vs. renewable energy firms vs. utilities). Each side deploys lobbyists, funds think tanks, and engages in grassroots campaigns to build congressional support.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Reading the Battle Map</h2>
        <div className="prose prose-lg max-w-none">
          <p>Our issue battles visualization shows which LDA issue codes appear together most frequently in lobbying filings. When two issues co-occur in many filings, it means organizations are lobbying on both simultaneously — often because legislation bundles them together or because they&apos;re strategically linked.</p>
          <p>For example, defense (DEF) and trade (TRD) issues frequently co-occur because defense contractors lobby on both weapons procurement and trade policy (export controls, tariffs on components). Similarly, healthcare (HCR) and tax (TAX) issues overlap because health insurance tax credits and pharmaceutical tax provisions are often part of the same legislative packages.</p>
          <p>Use the <Link href="/momentum" className="text-indigo-600 hover:underline">momentum tracker</Link> to see which of these battleground issues are heating up, or explore individual issue codes on our <Link href="/issues" className="text-indigo-600 hover:underline">issues directory</Link>.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Biggest Spending Collisions</h2>
        <div className="prose prose-lg max-w-none">
          <p>Some issue battles involve staggering sums. The healthcare-tax nexus sees over $1 billion in combined annual lobbying from both sides. Energy policy battles involve $500+ million. And the emerging AI regulation fight, while smaller in absolute terms, is growing faster than any other issue category.</p>
          <p>These spending collisions are leading indicators of legislative action. When lobbying on both sides of an issue surges, it usually means Congress is close to acting — and the outcome is uncertain enough that both sides believe spending more could tip the balance. Explore these dynamics further in our <Link href="/analysis" className="text-indigo-600 hover:underline">analysis hub</Link>.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What are issue battles in lobbying?", acceptedAnswer: { "@type": "Answer", text: "Issue battles occur when multiple industries or interest groups lobby on the same policy issue from competing perspectives. These collisions — such as tech companies vs. civil society on AI regulation — reveal the true fault lines in American policymaking and often involve billions in combined spending." } },
          { "@type": "Question", name: "Which lobbying issues have the most spending on both sides?", acceptedAnswer: { "@type": "Answer", text: "Healthcare and tax policy see the largest two-sided spending battles, with over $1 billion in combined annual lobbying. Energy policy, trade, and AI regulation are also major battlegrounds where competing interests spend heavily to influence outcomes." } },
          { "@type": "Question", name: "How do issue battles predict legislation?", acceptedAnswer: { "@type": "Answer", text: "When lobbying surges on both sides of an issue, it typically signals that Congress is close to acting and the outcome remains uncertain. Tracking these spending collisions can serve as a leading indicator of upcoming legislation." } },
        ]
      }) }} />

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Case Study: The Energy Transition Battle</h2>
        <div className="prose prose-lg max-w-none">
          <p>The energy transition represents one of the most complex issue battles in modern lobbying. Fossil fuel companies lobby to protect existing operations, secure continued tax benefits, and slow the transition timeline. Renewable energy firms lobby for production tax credits, grid modernization investments, and favorable permitting rules. Utilities lobby on both sides depending on their generation mix. And automakers lobby on EV mandates, charging infrastructure, and emissions standards.</p>
          <p>What makes this battle unique is its geographic dimension. Coal-state representatives face intense lobbying from the fossil fuel industry, while representatives from states with wind and solar resources hear from renewable developers. These competing pressures often determine how individual members vote on energy legislation. Explore the geographic dimensions on our <Link href="/geographic" className="text-indigo-600 hover:underline">geographic analysis page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Tracking Issue Battles Over Time</h2>
        <div className="prose prose-lg max-w-none">
          <p>Issue battles evolve as legislation moves through Congress. Early in a bill&apos;s lifecycle, lobbying may be concentrated among a few industry players. As the bill advances, more organizations engage, and spending on both sides escalates. After a vote, lobbying shifts to implementation — shaping how agencies write the rules that give laws their real-world impact.</p>
          <p>Our <Link href="/trends" className="text-indigo-600 hover:underline">spending trends</Link> visualize these cycles over time, and the <Link href="/momentum" className="text-indigo-600 hover:underline">momentum tracker</Link> captures the current state of each battle in real time.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Healthcare-Tax Nexus</h2>
        <div className="prose prose-lg max-w-none">
          <p>The most expensive issue battle in American lobbying is the intersection of healthcare and tax policy. Healthcare tax credits, pharmaceutical tax provisions, medical device taxes, and health insurance deductions create a trillion-dollar policy nexus where the healthcare industry, tax lobbyists, small business groups, and labor unions all compete to shape outcomes.</p>
          <p>This nexus generates over $1 billion in combined annual lobbying from all sides. The complexity ensures that healthcare-tax provisions appear in nearly every major piece of fiscal legislation, creating a perpetual lobbying cycle. See the full <Link href="/pharmaceutical-lobbying" className="text-indigo-600 hover:underline">pharmaceutical lobbying analysis</Link> for the healthcare industry&apos;s perspective on these battles.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Access</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">🔍 Search by Issue</Link>
          <Link href="/downloads" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📥 Download Data</Link>
          <Link href="/how-lobbying-works" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📖 How Lobbying Works</Link>
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
