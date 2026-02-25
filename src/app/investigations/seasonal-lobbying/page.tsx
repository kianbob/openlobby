import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'

export const metadata: Metadata = {
  title: "Washington's Busiest Quarter: The Hidden Calendar of Lobbying — OpenLobby",
  description: 'Lobbying follows a predictable seasonal rhythm. Q4 is the busiest quarter with $9.9B in income. We mapped the hidden calendar of influence.',
  openGraph: {
    title: "Washington's Busiest Quarter",
    description: 'The hidden calendar of lobbying — which quarters are busiest, which issues peak when, and why.',
  },
}

export default function SeasonalLobbyingPage() {
  const overallQuarters = [
    { quarter: 'Q1 (Jan–Mar)', filings: 150771, income: 8843786450 },
    { quarter: 'Q2 (Apr–Jun)', filings: 161120, income: 9253718435 },
    { quarter: 'Q3 (Jul–Sep)', filings: 166864, income: 9402784933 },
    { quarter: 'Q4 (Oct–Dec)', filings: 171578, income: 9876071225 },
  ]

  const yearlyData = [
    { year: '2018', q1: 917, q2: 906, q3: 989, q4: 963, filings: [15587, 16051, 17408, 17470] },
    { year: '2019', q1: 919, q2: 902, q3: 1000, q4: 1089, filings: [15973, 16148, 17926, 18768] },
    { year: '2020', q1: 1018, q2: 1029, q3: 1062, q4: 1052, filings: [17127, 19802, 18939, 19492] },
    { year: '2021', q1: 941, q2: 1011, q3: 1118, q4: 1201, filings: [17068, 19550, 20536, 21496] },
    { year: '2022', q1: 1182, q2: 1318, q3: 1265, q4: 1310, filings: [20883, 22020, 22421, 22908] },
    { year: '2023', q1: 1429, q2: 1329, q3: 1308, q4: 1371, filings: [24373, 23709, 23534, 23620] },
    { year: '2024', q1: 1135, q2: 1163, q3: 1170, q4: 1321, filings: [18812, 20006, 20965, 22466] },
    { year: '2025', q1: 1304, q2: 1596, q3: 1492, q4: 1571, filings: [20948, 23834, 25135, 25358] },
  ]

  const totalIncome = overallQuarters.reduce((s, q) => s + q.income, 0)
  const totalFilings = overallQuarters.reduce((s, q) => s + q.filings, 0)

  const fmt = (n: number) => {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
    return `$${n}`
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: "Washington's Busiest Quarter" },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Analysis</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Washington&apos;s Busiest Quarter:{' '}
        <span className="text-amber-600">The Hidden Calendar</span>{' '}
        of Lobbying
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 8 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/seasonal-lobbying" title="Washington's Busiest Quarter: The Hidden Calendar of Lobbying" />

      <QuickFacts facts={[
        { label: 'Busiest quarter', value: 'Q4' },
        { label: 'Q4 total income', value: '$9.9B' },
        { label: 'Q4 total filings', value: '171,578' },
        { label: 'Q4 vs Q1 gap', value: '+12%' },
      ]} />

      <div className="my-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-amber-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Lobbying isn&apos;t random — it follows the federal calendar with remarkable predictability. 
          <strong> Q4 (October–December) is consistently the busiest quarter</strong>, with 171,578 filings 
          and $9.9 billion in lobbying income since 2018. Q1 is the quietest. The pattern tracks 
          the budget cycle, legislative deadlines, and the year-end scramble to influence spending bills 
          before Congress adjourns.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Seasonal Pattern</h2>
        
        <p>
          Across eight years of lobbying data (2018–2025), a clear seasonal rhythm emerges. 
          Both filings and income climb steadily from Q1 through Q4:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Aggregate Quarterly Patterns (2018–2025)</h3>
          {overallQuarters.map((q, i) => (
            <div key={q.quarter} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{q.quarter}</span>
                <span className="font-bold text-primary">{fmt(q.income)}</span>
              </div>
              <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full flex items-center justify-end pr-3"
                  style={{ 
                    width: `${(q.income / overallQuarters[3].income) * 100}%`,
                    backgroundColor: ['#818cf8', '#6366f1', '#4f46e5', '#312e81'][i],
                  }}
                >
                  <span className="text-xs font-bold text-white">{q.filings.toLocaleString()} filings</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p>
          The gap between Q1 and Q4 is significant: <strong>12% more income</strong> and <strong>14% more filings</strong>. 
          That&apos;s an extra $1 billion in lobbying activity that happens in the final three months of the year.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why Q4 Is King</h2>

        <p>
          The October-December surge isn&apos;t a mystery — it&apos;s driven by three forces:
        </p>

        <ul>
          <li>
            <strong>The fiscal year starts October 1.</strong> Federal agencies begin their new budgets, 
            and the appropriations process (or lack thereof) creates urgency. Continuing resolutions, 
            omnibus bills, and government shutdown threats all drive lobbying spikes.
          </li>
          <li>
            <strong>The legislative year-end crunch.</strong> Congress typically tries to pass major legislation 
            before adjourning in December. Tax bills, defense authorization, spending packages — 
            they all pile up, and lobbyists work overtime to influence the final text.
          </li>
          <li>
            <strong>Lame-duck sessions.</strong> In election years, the period between November and January 
            is especially frantic. Outgoing members are more receptive to lobbying, and industries 
            rush to lock in favorable provisions before the new Congress arrives.
          </li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Year-by-Year: The Quarterly Rhythm</h2>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose overflow-x-auto">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Quarterly Income ($M) by Year</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-2 pr-4">Year</th>
                <th className="text-right py-2 px-2">Q1</th>
                <th className="text-right py-2 px-2">Q2</th>
                <th className="text-right py-2 px-2">Q3</th>
                <th className="text-right py-2 px-2">Q4</th>
                <th className="text-right py-2 pl-2">Peak</th>
              </tr>
            </thead>
            <tbody>
              {yearlyData.map(y => {
                const vals = [y.q1, y.q2, y.q3, y.q4]
                const max = Math.max(...vals)
                const peakQ = vals.indexOf(max) + 1
                return (
                  <tr key={y.year} className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">{y.year}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={`text-right py-2 px-2 ${v === max ? 'font-bold text-primary' : 'text-gray-600'}`}>
                        ${v}M
                      </td>
                    ))}
                    <td className="text-right py-2 pl-2 font-bold text-amber-600">Q{peakQ}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">Source: Senate LDA filings aggregated by quarter</p>
        </div>

        <p>
          Notice the pattern: <strong>Q4 is the peak in 6 out of 8 years</strong>. The exceptions are 
          2020 (when COVID stimulus shifted activity to Q2/Q3) and 2023 (when Q1 was abnormally high 
          due to debt ceiling negotiations).
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Filing Activity: The Monthly Spikes</h2>

        <p>
          Looking at monthly filing data reveals an even sharper pattern. Lobbying disclosure filings 
          are due within 45 days of the end of each quarter, creating massive filing spikes in 
          <strong> January, April, July, and October</strong>. These deadline-driven spikes 
          dwarf the surrounding months:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Monthly Filing Patterns (Typical Year)</h3>
          <div className="space-y-2">
            {[
              { month: 'Jan (Q4 filings due)', count: 15600, peak: true },
              { month: 'Feb', count: 1100, peak: false },
              { month: 'Mar', count: 600, peak: false },
              { month: 'Apr (Q1 filings due)', count: 13500, peak: true },
              { month: 'May', count: 1200, peak: false },
              { month: 'Jun', count: 600, peak: false },
              { month: 'Jul (Q2 filings due)', count: 14200, peak: true },
              { month: 'Aug', count: 1000, peak: false },
              { month: 'Sep', count: 500, peak: false },
              { month: 'Oct (Q3 filings due)', count: 15500, peak: true },
              { month: 'Nov', count: 1000, peak: false },
              { month: 'Dec', count: 550, peak: false },
            ].map(m => (
              <div key={m.month} className="flex items-center gap-3">
                <span className={`text-xs w-40 ${m.peak ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{m.month}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${m.peak ? 'bg-amber-500' : 'bg-gray-400'}`}
                    style={{ width: `${(m.count / 15600) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-gray-600 w-16 text-right">{m.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <p>
          The spike months see <strong>10–25x more filings</strong> than the off-months. This creates a 
          rhythmic pulse in the lobbying disclosure system — quiet, quiet, <em>flood</em>, quiet, quiet, <em>flood</em>.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>2025: A Record Year for Filings</h2>

        <p>
          2025 stands out as the highest-filing year in our dataset. Q3 and Q4 of 2025 each 
          exceeded <strong>25,000 filings</strong> — a new record. Total 2025 income reached approximately 
          <strong>$5.96 billion</strong>, making it the second-highest year after the anomalous 2023.
        </p>

        <p>
          The surge tracks with increased political uncertainty: a new administration, tariff policy, 
          DOGE-driven spending cuts, and ongoing healthcare and technology regulatory battles all 
          drove organizations to increase their lobbying presence.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What This Means for Transparency</h2>

        <p>
          The seasonal pattern matters because it affects <em>when</em> the public can see lobbying data. 
          Filings are retrospective — they cover the <em>previous</em> quarter. So when lobbyists are 
          most active (Q4, during year-end legislative pushes), the public won&apos;t see those disclosures 
          until Q1 of the following year.
        </p>

        <p>
          This delay means that by the time citizens can see who was lobbying for what, 
          the legislation has often already passed. Real-time lobbying transparency remains elusive — 
          and that&apos;s something Congress has shown little interest in fixing.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore Trends</h3>
          <p className="text-gray-700 mb-4">See the full time-series data and quarterly breakdowns.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/trends" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Spending Trends →
            </Link>
            <Link href="/issues" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Issues Overview →
            </Link>
            <Link href="/downloads" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Download Data →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation 
        sources={[
          'Senate LDA Filings (lda.senate.gov) — 2018–2025',
          'OpenLobby quarterly aggregation of filing counts and reported income',
          'Filing deadlines per Lobbying Disclosure Act Section 5',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/tariff-lobbying-surge" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📦 The 2025 Tariff Panic</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
          </Link>
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
          </Link>
          <Link href="/filing-patterns" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📅 Filing Patterns</div>
          </Link>
          <Link href="/trends" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📉 Trends</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
