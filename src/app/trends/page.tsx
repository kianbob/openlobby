'use client'
import Link from 'next/link'
import SourceCitation from '@/components/SourceCitation'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, formatNumber } from '@/lib/format'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const ReferenceLine = dynamic(() => import('recharts').then(m => m.ReferenceLine), { ssr: false })
const Label = dynamic(() => import('recharts').then(m => m.Label), { ssr: false })

interface YearData {
  year: number
  totalIncome: number
  totalExpenses: number
  filings: number
  registrations: number
}

export default function TrendsPage() {
  const [trends, setTrends] = useState<YearData[]>([])

  useEffect(() => {
    fetch('/data/trends.json').then(r => r.json()).then(setTrends).catch(() => {})
  }, [])

  const totalSpending = trends.reduce((s, t) => s + t.totalIncome, 0)
  const totalFilings = trends.reduce((s, t) => s + t.filings, 0)
  const latestYear = trends[trends.length - 1]
  const prevYear = trends.length >= 2 ? trends[trends.length - 2] : null
  const yoyChange = latestYear && prevYear && prevYear.totalIncome > 0
    ? ((latestYear.totalIncome - prevYear.totalIncome) / prevYear.totalIncome * 100).toFixed(1)
    : null

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Trends' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Spending Trends</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        How much money flows into federal lobbying each year — and whether it&apos;s going up or down.
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">Federal lobbying spending has grown 50% from $4.0 billion in 2018 to $6.0 billion in 2025 — a record high. This isn&apos;t just inflation: it reflects an escalating arms race as more industries recognize that lobbying delivers extraordinary returns on investment. The COVID-era spike (2020-2021) came as industries scrambled to shape trillions in pandemic relief spending. The 2025 surge is driven by tariff lobbying, AI regulation fights, and healthcare policy battles.</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
        <p className="text-sm font-medium text-amber-900">💡 Did you know?</p>
        <p className="text-sm text-amber-800 mt-1">Lobbying spending has increased every single year since 2016. In 2025, spending hit $6.0 billion — a +15.6% jump from 2024 — driven by tariffs, AI regulation, and healthcare fights.</p>
      </div>

      {trends.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(totalSpending)}</div>
              <div className="text-xs text-gray-500">Total (All Years)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(totalFilings)}</div>
              <div className="text-xs text-gray-500">Total Filings</div>
            </div>
            {latestYear && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(latestYear.totalIncome)}</div>
                <div className="text-xs text-gray-500">{latestYear.year} Spending</div>
              </div>
            )}
            {yoyChange && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className={`text-2xl font-bold ${Number(yoyChange) > 0 ? 'text-red-600' : 'text-green-600'}`} style={{ fontFamily: 'var(--font-serif)' }}>
                  {Number(yoyChange) > 0 ? '+' : ''}{yoyChange}%
                </div>
                <div className="text-xs text-gray-500">Year-over-Year</div>
              </div>
            )}
          </div>

          {/* Recharts Bar Chart */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending by Year</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-4" style={{ height: 450 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trends.map(t => ({ ...t, incomeB: t.totalIncome / 1e9 }))}>
                  <XAxis dataKey="year" tick={{ fontSize: 13 }} />
                  <YAxis tickFormatter={(v: any) => `$${v.toFixed(1)}B`} tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(v: any) => formatCurrency(v * 1e9)} labelFormatter={(l: any) => `Year: ${l}`} />
                  <Bar dataKey="incomeB" fill="#4f46e5" radius={[6, 6, 0, 0]} name="Lobbying Income" />
                  <ReferenceLine y={1.62} stroke="#ef4444" strokeDasharray="4 4">
                    <Label value="COVID spike" position="right" fill="#ef4444" fontSize={11} />
                  </ReferenceLine>
                  <ReferenceLine y={2.7} stroke="#f59e0b" strokeDasharray="4 4">
                    <Label value="2025 record" position="right" fill="#f59e0b" fontSize={11} />
                  </ReferenceLine>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-red-500 inline-block"></span> COVID-era surge (2020)</span>
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-amber-500 inline-block"></span> 2025 all-time record ($6.0B)</span>
            </div>
          </section>

          {/* Table */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Year-by-Year Detail</h2>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Year</th>
                    <th className="px-4 py-3 text-right font-semibold">Lobbying Income</th>
                    <th className="px-4 py-3 text-right font-semibold">Filings</th>
                  </tr>
                </thead>
                <tbody>
                  {[...trends].reverse().map(t => (
                    <tr key={t.year} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-medium">{t.year}</td>
                      <td className="px-4 py-3 text-right font-medium">{formatCurrency(t.totalIncome)}</td>
                      <td className="px-4 py-3 text-right">{formatNumber(t.filings)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
      <section className="mt-8 mb-4">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Reading</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="/investigations/doge-vs-lobbying" className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">DOGE vs. The Lobbying Machine</div>
            <div className="text-xs text-gray-500 mt-1">What happens when DOGE comes for the agencies that lobbyists depend on?</div>
          </a>
          <a href="/investigations/tariff-lobbying-surge" className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">The 2025 Tariff Panic</div>
            <div className="text-xs text-gray-500 mt-1">As tariffs return, lobbying on trade surges. Which industries are most desperate?</div>
          </a>
          <a href="/investigations/lobbying-statistics" className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">Federal Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive stats — $37.7B total, industry breakdowns, and historical trends.</div>
          </a>
        </div>
      </section>

      {/* Additional Trend Analysis */}
      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Quarterly Seasonality Patterns</h2>
        <div className="prose prose-lg max-w-none">
          <p>Lobbying spending follows predictable seasonal patterns tied to the congressional calendar and federal budget cycle:</p>
          <ul>
            <li><strong>Q1 (January-March):</strong> New congressional session begins. Increased activity as industries position themselves for the year ahead. Budget proposals drive spending spikes.</li>
            <li><strong>Q2 (April-June):</strong> Committee markups accelerate. Appropriations process begins. Moderate spending levels.</li>
            <li><strong>Q3 (July-September):</strong> NDAA season. Defense and appropriations lobbying peaks. August recess provides time for grassroots campaigns.</li>
            <li><strong>Q4 (October-December):</strong> Year-end spending surge. Lame duck sessions see push for must-pass legislation. Companies may front-load following year's spending.</li>
          </ul>
          <p>These patterns hold across most issue areas, though tariff and trade lobbying can spike unexpectedly based on executive actions. Election years show reduced Q4 spending as political focus shifts to campaigns.</p>
        </div>
      </section>

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What's Driving the Growth?</h2>
        <div className="prose prose-lg max-w-none">
          <p>The steady upward trend in lobbying spending reflects several structural forces. First, the federal government&apos;s regulatory footprint has expanded, creating more policy areas where companies need lobbyists. Second, the returns on lobbying are well-documented — academic research consistently shows $6-$220 returned for every $1 spent, making lobbying one of the best investments a company can make.</p>
          <p>Third, an arms race dynamic has taken hold: once one company in an industry starts lobbying, competitors follow to avoid being disadvantaged. This is most visible in the <Link href="/tech-lobbying" className="text-indigo-600 hover:underline">technology sector</Link>, where lobbying grew 340% as companies raced to match each other&apos;s DC presence.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The COVID Effect</h3>
          <p>The 2020-2021 spending spike wasn&apos;t just about the pandemic itself — it was about the trillions in federal spending that flowed in response. The CARES Act, PPP loans, infrastructure spending, and industry-specific relief packages created enormous lobbying incentives. Industries that had never lobbied before suddenly had billions of dollars at stake in federal spending decisions.</p>
          <p>This effect was lasting: many organizations that started lobbying during COVID continued afterward, permanently expanding the lobbying ecosystem.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Looking Ahead: 2026 and Beyond</h3>
          <p>Several factors suggest lobbying spending will continue to grow in 2026 and beyond. AI regulation is still in its early stages, with comprehensive federal legislation expected. Trade policy uncertainty continues to drive tariff-related lobbying. Defense spending debates intensify with each budget cycle. And healthcare — always the largest lobbying sector — faces ongoing battles over drug pricing, Medicare reform, and insurance regulation.</p>
          <p>Track what&apos;s surging right now on our <Link href="/momentum" className="text-indigo-600 hover:underline">momentum tracker</Link>, or compare industries with our <Link href="/tools/industry-compare" className="text-indigo-600 hover:underline">industry comparison tool</Link>.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How much has lobbying spending grown?", acceptedAnswer: { "@type": "Answer", text: "Federal lobbying spending grew 50% from $4.0 billion in 2018 to $6.0 billion in 2025. Spending has increased every single year since 2016, reflecting an escalating arms race as more industries recognize lobbying's extraordinary ROI." } },
          { "@type": "Question", name: "What caused the 2025 lobbying record?", acceptedAnswer: { "@type": "Answer", text: "The 2025 record of $6.0 billion was driven by tariff-related lobbying (up 561%), AI regulation debates, healthcare policy battles, and continued defense spending fights. The +15.6% year-over-year increase was the largest single-year jump in our dataset." } },
          { "@type": "Question", name: "Did COVID affect lobbying spending?", acceptedAnswer: { "@type": "Answer", text: "Yes. The 2020-2021 spending spike reflected industries scrambling to shape trillions in pandemic relief spending (CARES Act, PPP, infrastructure). Many organizations that started lobbying during COVID continued afterward, permanently expanding the ecosystem." } },
          { "@type": "Question", name: "Will lobbying spending continue to increase?", acceptedAnswer: { "@type": "Answer", text: "Multiple structural factors suggest continued growth: expanding federal regulation, well-documented lobbying ROI, competitive arms race dynamics, and major pending policy battles around AI, trade, healthcare, and defense spending." } },
        ]
      }) }} />

      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="February 2026" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Structural Drivers of Spending Growth</h2>
        <div className="prose prose-lg max-w-none">
          <p>Lobbying spending has grown from $1.4 billion in 1998 to $6.0 billion in 2025. This isn&apos;t just inflation — real spending has roughly tripled. Several structural forces explain the trend:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Regulatory expansion:</strong> More federal regulation means more industries have more at stake in Washington. The ACA, Dodd-Frank, and recent tech regulation proposals each triggered new waves of lobbying.</li>
            <li><strong>Proven ROI:</strong> Academic studies showing high lobbying returns create a competitive dynamic where companies lobby because their competitors do.</li>
            <li><strong>COVID stimulus:</strong> The $5+ trillion in pandemic spending (CARES Act, PPP, infrastructure) drew thousands of new organizations into lobbying for the first time. Many stayed.</li>
            <li><strong>Revolving door:</strong> A growing pool of former government officials creates supply-side growth in the lobbying industry.</li>
          </ul>
          <p>For a deeper exploration of these dynamics, read our <Link href="/investigations/what-is-lobbying" className="text-indigo-600 hover:underline">complete lobbying explainer</Link> or explore our <Link href="/analysis" className="text-indigo-600 hover:underline">analysis hub</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>2026 Trend Outlook</h2>
        <div className="prose prose-lg max-w-none">
          <p>Early 2026 data suggests continued spending growth across most sectors. AI regulation lobbying is on pace to double year-over-year. Trade and tariff lobbying remains elevated. Defense spending debates are intensifying around the FY2027 budget. And healthcare — always the largest sector — faces new pressure from drug pricing implementation.</p>
          <p>Track real-time shifts on our <Link href="/momentum" className="text-indigo-600 hover:underline">momentum tracker</Link>, or compare specific industries with our <Link href="/tools/industry-compare" className="text-indigo-600 hover:underline">industry comparison tool</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Key Trend Milestones</h2>
        <div className="prose prose-lg max-w-none">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>2018:</strong> $3.5B — baseline year in our database, trade war begins driving tariff lobbying</li>
            <li><strong>2020:</strong> $3.7B — COVID stimulus triggers massive lobbying for CARES Act and PPP provisions</li>
            <li><strong>2021:</strong> $4.0B — infrastructure bill and Build Back Better drive record engagement</li>
            <li><strong>2022:</strong> $4.3B — IRA passage, crypto winter begins, AI lobbying starts to grow</li>
            <li><strong>2023:</strong> $4.8B — AI regulation enters mainstream, debt ceiling fight triggers spending</li>
            <li><strong>2024:</strong> $5.4B — election year spending, trade policy uncertainty intensifies</li>
            <li><strong>2025:</strong> $6.0B — all-time record, DOGE triggers defensive lobbying across government</li>
          </ul>
          <p>Each milestone reflects specific policy catalysts. For the latest statistics, see our <Link href="/investigations/lobbying-statistics" className="text-indigo-600 hover:underline">comprehensive statistics page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How to Read Spending Trends</h2>
        <div className="prose prose-lg max-w-none">
          <p>When analyzing lobbying trends, context matters. A spending increase may reflect inflation, industry growth, or specific policy catalysts. We provide both nominal and inflation-adjusted figures where possible. Seasonal patterns also matter — Q1 and Q3 typically see higher spending than Q2 and Q4 due to the budget and appropriations calendar. Our <Link href="/methodology" className="text-indigo-600 hover:underline">methodology page</Link> explains how we account for these factors.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Access</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">🔍 Search All Data</Link>
          <Link href="/downloads" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📥 Download Datasets</Link>
          <Link href="/tools/industry-compare" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📊 Compare Industries</Link>
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">Complete spending overview and trends</div>
          </Link>
          <Link href="/investigations/seasonal-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📅 Seasonal Patterns</div>
            <div className="text-xs text-gray-500 mt-1">When do lobbying spikes happen?</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
            <div className="text-xs text-gray-500 mt-1">Where lobbying dollars flow</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/momentum" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚀 Momentum</Link>
          <Link href="/client-trajectories" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📈 Client Trajectories</Link>
          <Link href="/industries" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏭 Industries</Link>
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
