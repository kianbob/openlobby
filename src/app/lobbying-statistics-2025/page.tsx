import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lobbying Statistics 2024-2025: Key Facts and Data',
  description: 'Comprehensive federal lobbying statistics for 2024-2025. Total spending, number of lobbyists, top clients, biggest issues, and year-over-year trends from 650,000+ filings.',
  keywords: ['lobbying statistics', 'lobbying spending data', 'lobbying statistics 2025', 'lobbying statistics 2024', 'federal lobbying data', 'how much is spent on lobbying'],
  openGraph: {
    title: 'Lobbying Statistics 2024-2025: Key Facts and Data',
    description: 'Every key lobbying statistic from 2024-2025 — total spending, lobbyists, filings, issues, and trends from our database of 650,000+ filings.',
    url: 'https://www.openlobby.us/lobbying-statistics-2025',
  },
}

export default function LobbyingStatistics2025Page() {
  const yearlyData = [
    { year: 2018, spending: '$1.40B', filings: '66,516' },
    { year: 2019, spending: '$1.47B', filings: '68,815' },
    { year: 2020, spending: '$1.62B', filings: '75,360' },
    { year: 2021, spending: '$1.76B', filings: '78,650' },
    { year: 2022, spending: '$2.05B', filings: '88,232' },
    { year: 2023, spending: '$2.24B', filings: '95,236' },
    { year: 2024, spending: '$1.98B', filings: '82,249' },
  ]

  const topIssues = [
    { issue: 'Budget/Appropriations (BUD)', spending: '$2.63B', filings: '118,907', clients: '10,957' },
    { issue: 'Healthcare (HCR)', spending: '$2.30B', filings: '86,616', clients: '7,329' },
    { issue: 'Taxes (TAX)', spending: '$1.8B+', filings: '70,000+', clients: '6,000+' },
    { issue: 'Trade (TRD)', spending: '$1.5B+', filings: '55,000+', clients: '5,000+' },
    { issue: 'Defense (DEF)', spending: '$1.4B+', filings: '50,000+', clients: '4,500+' },
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12">
        <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Data Reference</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          Lobbying Statistics 2024–2025: Key Facts and Data
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Comprehensive federal lobbying statistics compiled from our database of 650,000+ Senate LDA filings
          covering 2018–2025. Updated regularly as new filings are published.
        </p>
      </header>

      {/* Master Stats */}
      <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-12">
        <h2 className="text-xl font-bold mb-6 text-indigo-200">Overall Statistics (2018–2025)</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: '$15.2B', label: 'Total Lobbying Spending' },
            { value: '650,333', label: 'Total Filings' },
            { value: '29,754', label: 'Unique Lobbyists' },
            { value: '5,000+', label: 'Revolving Door Officials' },
            { value: '79', label: 'Issue Categories' },
            { value: '1,591', label: 'Top Clients Tracked' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl font-black text-amber-400" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
              <div className="text-sm text-indigo-300 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Year by Year */}
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
        Spending by Year
      </h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold">Year</th>
              <th className="text-right py-3 px-4 font-bold">Total Spending</th>
              <th className="text-right py-3 px-4 font-bold">Filings</th>
              <th className="text-right py-3 px-4 font-bold">YoY Change</th>
            </tr>
          </thead>
          <tbody>
            {yearlyData.map((y, i) => {
              const prevSpending = i > 0 ? parseFloat(yearlyData[i-1].spending.replace(/[$B]/g, '')) : null
              const currSpending = parseFloat(y.spending.replace(/[$B]/g, ''))
              const change = prevSpending ? (((currSpending - prevSpending) / prevSpending) * 100).toFixed(1) : null
              return (
                <tr key={y.year} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-bold">{y.year}</td>
                  <td className="py-3 px-4 text-right font-bold text-indigo-700">{y.spending}</td>
                  <td className="py-3 px-4 text-right">{y.filings}</td>
                  <td className={`py-3 px-4 text-right font-semibold ${change && parseFloat(change) > 0 ? 'text-emerald-600' : change && parseFloat(change) < 0 ? 'text-red-600' : ''}`}>
                    {change ? `${parseFloat(change) > 0 ? '+' : ''}${change}%` : '—'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Top Issues */}
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
        Top Lobbying Issues by Total Spending
      </h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold">Issue</th>
              <th className="text-right py-3 px-4 font-bold">Total Spending</th>
              <th className="text-right py-3 px-4 font-bold">Filings</th>
              <th className="text-right py-3 px-4 font-bold">Clients</th>
            </tr>
          </thead>
          <tbody>
            {topIssues.map(issue => (
              <tr key={issue.issue} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{issue.issue}</td>
                <td className="py-3 px-4 text-right font-bold text-indigo-700">{issue.spending}</td>
                <td className="py-3 px-4 text-right">{issue.filings}</td>
                <td className="py-3 px-4 text-right">{issue.clients}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Key Trends
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Lobbying hit a record $2.24B in 2023</strong> — the highest single-year total in our dataset, driven by healthcare, defense, and AI regulation</li>
          <li><strong>2024 saw a slight dip to $1.98B</strong> — election year dynamics shifted some spending to political campaigns</li>
          <li><strong>The revolving door is accelerating</strong> — over 5,000 former government officials are currently registered lobbyists</li>
          <li><strong>AI lobbying exploded 400%+</strong> — AI-related mentions in lobbying filings surged since 2022</li>
          <li><strong>Crypto became a lobbying force</strong> — from near-zero to millions in annual lobbying spend</li>
          <li><strong>Tariff lobbying surged 561%</strong> — trade policy uncertainty drove a massive increase in 2024-2025</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Notable Data Points
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>49,536:1</strong> — The highest lobbying ROI we found: $270K in lobbying → $13.4B in federal contracts</li>
          <li><strong>369%</strong> — The premium that firms with revolving-door lobbyists charge over those without</li>
          <li><strong>$27,105</strong> — Washington DC&apos;s per-capita lobbying spending, dwarfing every state</li>
          <li><strong>4,627</strong> — Number of clients whose lobbying spending grew 100%+ during our tracking period</li>
          <li><strong>10,957</strong> — Unique clients who lobbied on Budget/Appropriations, the most-lobbied issue</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Data Sources & Methodology
        </h2>
        <p>
          All statistics are derived from Senate LDA (Lobbying Disclosure Act) filings accessed through the{' '}
          <a href="https://lda.senate.gov" className="text-indigo-600 hover:text-indigo-800">Senate Office of Public Records</a>.
          Our database covers 2018–2025 and is updated regularly as new quarterly filings are published.
          For full methodology details, see our{' '}
          <Link href="/methodology" className="text-indigo-600 hover:text-indigo-800 font-semibold">methodology page</Link>.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        <Link href="/trends" className="block p-5 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition-colors">
          <div className="font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>Interactive Trends</div>
          <p className="text-sm text-gray-600 mt-1">Explore spending over time</p>
        </Link>
        <Link href="/downloads" className="block p-5 bg-emerald-50 rounded-xl text-center hover:bg-emerald-100 transition-colors">
          <div className="font-bold text-emerald-700" style={{ fontFamily: 'var(--font-serif)' }}>Download Data</div>
          <p className="text-sm text-gray-600 mt-1">Get the raw datasets</p>
        </Link>
        <Link href="/investigations" className="block p-5 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors">
          <div className="font-bold text-amber-700" style={{ fontFamily: 'var(--font-serif)' }}>Investigations</div>
          <p className="text-sm text-gray-600 mt-1">Data-driven articles</p>
        </Link>
      </div>
    </article>
  )
}
