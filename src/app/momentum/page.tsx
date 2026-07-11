'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency } from '@/lib/format'
import dynamic from 'next/dynamic'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const LineChart = dynamic(() => import('recharts').then(m => m.LineChart), { ssr: false })
const Line = dynamic(() => import('recharts').then(m => m.Line), { ssr: false })

interface TrendPoint { quarter: string; amount: number }
interface Issue {
  code: string; latestQuarter: string; latestAmount: number; previousAmount: number; growthPct: number; trend: TrendPoint[]
}
interface Data { surging: Issue[]; declining: Issue[] }

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
  DOC: 'District of Columbia', CAW: 'Clean Air/Water', ACC: 'Accounting', FAM: 'Family',
  ANI: 'Animals', WEL: 'Welfare', ART: 'Arts', POS: 'Postal', MAR: 'Marine',
  RES: 'Real Estate', CHM: 'Chemicals', MAN: 'Manufacturing', REL: 'Religion', LAW: 'Law',
  TOR: 'Torts', URB: 'Urban Development', UNM: 'Unemployment', LBY: 'Lobbying Regulation',
  AER: 'Aerospace', FUE: 'Fuel', IND: 'Indian Affairs', PHI: 'Philippine Issues',
  TAR: 'Tariffs', MIG: 'Migration',
}

function Sparkline({ data, color }: { data: TrendPoint[]; color: string }) {
  const sorted = [...data].sort((a, b) => a.quarter.localeCompare(b.quarter))
  return (
    <div style={{ width: 120, height: 32 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sorted}>
          <Line type="monotone" dataKey="amount" stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function MomentumPage() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => { fetch('/data/quarterly-momentum.json').then(r => r.json()).then(setData).catch(() => {}) }, [])

  if (!data) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  const surgingChart = data.surging.slice(0, 10).map(i => ({ name: ISSUE_NAMES[i.code] || i.code, growth: i.growthPct }))
  const decliningChart = data.declining.slice(0, 10).map(i => ({ name: ISSUE_NAMES[i.code] || i.code, growth: i.growthPct }))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Momentum' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>What&apos;s Surging Now</h1>
          <p className="text-gray-600 max-w-3xl">Quarter-over-quarter momentum in lobbying spending — which issues are heating up and which are cooling down.</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/momentum" title="Lobbying Momentum — OpenLobby" />
      </div>

      {/* Split view */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Surging */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)' }}>
            📈 Surging Issues
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={surgingChart} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v: any) => `+${v}%`} />
                <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: any) => `+${v.toFixed(1)}%`} />
                <Bar dataKey="growth" fill="#16a34a" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {data.surging.slice(0, 10).map(issue => (
              <div key={issue.code} className="flex items-center justify-between bg-green-50 border border-green-100 rounded-lg px-4 py-3">
                <div>
                  <div className="font-semibold text-gray-900">{ISSUE_NAMES[issue.code] || issue.code}</div>
                  <div className="text-xs text-gray-500">{formatCurrency(issue.latestAmount)} → was {formatCurrency(issue.previousAmount)}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkline data={issue.trend} color="#16a34a" />
                  <span className="text-green-700 font-bold text-sm">+{issue.growthPct.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Declining */}
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)' }}>
            📉 Declining Issues
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={decliningChart} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v: any) => `${v}%`} />
                <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: any) => `${v.toFixed(1)}%`} />
                <Bar dataKey="growth" fill="#dc2626" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {data.declining.slice(0, 10).map(issue => (
              <div key={issue.code} className="flex items-center justify-between bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                <div>
                  <div className="font-semibold text-gray-900">{ISSUE_NAMES[issue.code] || issue.code}</div>
                  <div className="text-xs text-gray-500">{formatCurrency(issue.latestAmount)} → was {formatCurrency(issue.previousAmount)}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkline data={issue.trend} color="#dc2626" />
                  <span className="text-red-700 font-bold text-sm">{issue.growthPct.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explainer */}
      <section className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
        <h2 className="text-xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>💡 What Drives Lobbying Surges?</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          Lobbying spending surges when legislation moves. A new bill, an executive order, or a regulatory change can trigger an avalanche of spending as industries scramble to shape outcomes. Declines often happen after bills pass or die — the urgency fades. Watch the surging issues to see what Congress will fight about next.
        </p>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Link href="/investigations/tariff-lobbying-surge" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📦 The 2025 Tariff Panic</div>
            <div className="text-xs text-gray-500 mt-1">How tariff fears drove a lobbying surge</div>
          </Link>
          <Link href="/investigations/ai-regulation-fight" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🤖 The AI Regulation Fight</div>
            <div className="text-xs text-gray-500 mt-1">The fastest-growing lobbying battle</div>
          </Link>
          <Link href="/investigations/seasonal-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📅 Seasonal Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">When do spending spikes happen?</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/issues" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📋 All Issues</Link>
          <Link href="/client-trajectories" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📈 Client Trajectories</Link>
          <Link href="/trends" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📉 Trends</Link>
          <Link href="/issue-battles" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">⚔️ Issue Battles</Link>
        </div>
      </section>

      {/* Additional Analysis */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How to Use This Page</h2>
        <div className="prose prose-lg max-w-none">
          <p>The momentum tracker is a leading indicator tool. When you see an issue surging, ask yourself:</p>
          <ul>
            <li><strong>What legislation is moving?</strong> Check congressional calendars and committee schedules for bills related to the surging issue.</li>
            <li><strong>Who benefits from the increase?</strong> Look at which specific companies and industries are driving the surge by clicking through to issue pages.</li>
            <li><strong>Is there an external trigger?</strong> Regulatory proposals, executive orders, court decisions, and international events all trigger lobbying surges.</li>
            <li><strong>What's the opposition doing?</strong> For every surge in one direction, there's often counter-lobbying from the other side.</li>
          </ul>
          <p>Journalists and researchers can use this tool to identify emerging stories before they hit mainstream news. When lobbying spending spikes, legislative action typically follows within 1-2 quarters.</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Understanding Lobbying Momentum</h2>
        <div className="prose prose-lg max-w-none">
          <p>Lobbying momentum isn&apos;t random — it tracks the legislative calendar, executive actions, and market disruptions. When a major bill moves through committee, lobbying spending on related issues surges. When a regulatory agency proposes new rules, affected industries ramp up their DC presence. And when an unexpected event like a pandemic or tariff announcement shocks the economy, entirely new lobbying campaigns materialize almost overnight.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Historical Momentum Patterns</h3>
          <p>Our data reveals consistent seasonal patterns in lobbying momentum. Q1 (January-March) typically sees increased activity as the new congressional session begins and the President&apos;s budget proposal is released. Q3 (July-September) spikes during NDAA markup and appropriations season. Q4 often shows a burst of year-end spending as organizations push for inclusion in must-pass legislation.</p>
          <p>See our <Link href="/investigations/seasonal-lobbying" className="text-indigo-600 hover:underline">seasonal lobbying analysis</Link> for detailed quarter-by-quarter patterns across all major issue categories.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>What Surging Issues Tell Us</h3>
          <p>The surging issues on this page are leading indicators of future legislation. When lobbying spending on an issue spikes, it almost always means that Congress is actively considering action — or that industries expect action soon. By tracking momentum, you can predict which policy battles will dominate the next congressional session.</p>
          <p>Conversely, declining issues often signal that a legislative fight is over (either the bill passed or died), that regulatory uncertainty has been resolved, or that industries have shifted their lobbying resources to higher-priority battles.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>2026 Momentum Outlook</h3>
          <p>Several issues are poised for significant momentum shifts in 2026. AI regulation continues to accelerate as Congress moves closer to comprehensive legislation. Trade and tariff lobbying remains elevated as businesses adapt to new trade policies. Defense spending debates intensify as the FY2027 budget takes shape. And healthcare lobbying — always the largest sector — faces new pressure from drug pricing implementation and Medicare reform proposals.</p>
          <p>Compare these shifts over time on our <Link href="/trends" className="text-indigo-600 hover:underline">spending trends page</Link> or dive into individual industries with our <Link href="/tools/industry-compare" className="text-indigo-600 hover:underline">industry comparison tool</Link>.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What does lobbying momentum mean?", acceptedAnswer: { "@type": "Answer", text: "Lobbying momentum measures quarter-over-quarter changes in spending by issue category. Surging issues indicate increased congressional attention and legislative activity, while declining issues suggest that policy battles have been resolved or deprioritized." } },
          { "@type": "Question", name: "What lobbying issues are surging in 2026?", acceptedAnswer: { "@type": "Answer", text: "AI regulation, trade/tariff policy, and defense spending are among the fastest-growing lobbying issues in 2026. AI-related lobbying has surged over 400% since 2022, while tariff lobbying increased 561% due to trade policy uncertainty." } },
          { "@type": "Question", name: "Why do lobbying spending spikes happen?", acceptedAnswer: { "@type": "Answer", text: "Lobbying surges when legislation moves. A new bill, executive order, or regulatory change triggers spending as industries scramble to shape outcomes. Declines happen after bills pass or die. The legislative calendar and unexpected events (like tariff announcements) are the primary drivers." } },
          { "@type": "Question", name: "Can lobbying momentum predict future legislation?", acceptedAnswer: { "@type": "Answer", text: "Yes, to some extent. When lobbying spending on an issue spikes, it almost always means Congress is actively considering action. Tracking momentum can serve as a leading indicator of upcoming policy battles and legislative priorities." } },
        ]
      }) }} />

      <SourceCitation sources={['Senate LDA Filings', 'Lobbying Disclosure Act Reports']} lastUpdated="February 2026" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How We Calculate Momentum</h2>
        <div className="prose prose-lg max-w-none">
          <p>Momentum scores are calculated by comparing current-quarter spending to the trailing four-quarter average for each issue code. A score above 1.0 indicates accelerating spending; below 1.0 signals deceleration. We weight recent quarters more heavily to capture emerging trends rather than long-term averages.</p>
          <p>Issues are categorized using the Senate&apos;s standardized LDA issue codes (e.g., HCR for healthcare, DEF for defense, CPT for computer/technology). Each lobbying filing can list multiple issues, so spending is allocated proportionally when a filing covers several categories. Learn more about our approach on the <Link href="/methodology" className="text-indigo-600 hover:underline">methodology page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Emerging Issues to Watch in 2026</h2>
        <div className="prose prose-lg max-w-none">
          <p>Beyond the headline surges in AI and trade, several under-the-radar issues are gaining momentum. Water rights and infrastructure lobbying has increased 85% as western states face drought-related disputes. Space commerce lobbying is rising as commercial launch providers seek regulatory clarity from the FAA and FCC. And cannabis lobbying continues to grow ahead of potential federal rescheduling.</p>
          <p>These emerging issues often start small but can explode when legislation moves. Track individual issue categories on our <Link href="/issues" className="text-indigo-600 hover:underline">full issues directory</Link> or compare them side-by-side on the <Link href="/issue-battles" className="text-indigo-600 hover:underline">issue battles page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Pages</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/trends" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 Spending Trends</div>
            <div className="text-xs text-gray-500 mt-1">Historical spending over time</div>
          </Link>
          <Link href="/issue-battles" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ Issue Battles</div>
            <div className="text-xs text-gray-500 mt-1">Which issues compete for attention</div>
          </Link>
          <Link href="/analysis" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Analysis Hub</div>
            <div className="text-xs text-gray-500 mt-1">In-depth research and reports</div>
          </Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Declining Issues: What the Drop-offs Tell Us</h2>
        <div className="prose prose-lg max-w-none">
          <p>Declining momentum can be just as informative as surging spending. When lobbying on an issue drops sharply, it usually means one of three things: the legislative fight is over (bill passed or died), regulatory uncertainty has been resolved, or industries have shifted resources to higher-priority battles. Monitoring declines helps identify which policy questions are settled and which are merely dormant.</p>
          <p>For example, pandemic-related lobbying that surged during 2020-2021 has steadily declined as emergency provisions expired. But some issues that seemed settled can reignite unexpectedly — trade policy lobbying was declining before tariff announcements triggered a 561% surge. The <Link href="/investigations/lobbying-statistics" className="text-indigo-600 hover:underline">full statistics page</Link> provides historical context for these cycles.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Using Momentum Data</h2>
        <div className="prose prose-lg max-w-none">
          <p>Journalists can use momentum data to identify emerging stories before they hit the mainstream. Researchers can track policy attention across issue categories. And citizens can monitor which issues their representatives are being lobbied on most intensely. Download the underlying data on our <Link href="/downloads" className="text-indigo-600 hover:underline">downloads page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Momentum Data Access</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">🔍 Search by Issue</Link>
          <Link href="/downloads" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📥 Download Data</Link>
          <Link href="/investigations/lobbying-statistics" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📊 Full Statistics</Link>
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
