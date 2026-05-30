import { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

const stats = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/stats.json'), 'utf-8'))

export const metadata: Metadata = {
  title: 'Lobbying Statistics 2026: $6B+ and Counting',
  description: 'Federal lobbying statistics for 2026. Over $6 billion spent so far, 23,500+ lobbyists, 37,900+ clients. Live data from 726,000+ Senate LDA filings.',
  keywords: ['lobbying statistics 2026', 'lobbying statistics', 'lobbying spending 2026', 'federal lobbying data', 'how much lobbying spending', 'lobbying trends'],
  openGraph: {
    title: 'Lobbying Statistics 2026: $6B+ and Counting',
    description: 'Federal lobbying hit $6B+ in 2025. See the full breakdown of who spends, who lobbies, and where the money flows — with live data from 726K+ filings.',
    url: 'https://www.openlobby.us/lobbying-statistics-2026',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lobbying Statistics 2026: $6B+ and Counting',
    description: 'Federal lobbying hit $6B+ in 2025. See the full breakdown.',
  },
  alternates: { canonical: 'https://www.openlobby.us/lobbying-statistics-2026' },
}

function fmt(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  return `$${n.toLocaleString()}`
}

function fmtNum(n: number): string {
  return n.toLocaleString()
}

const breadcrumbs = [{ name: 'Lobbying Statistics 2026' }]

export default function LobbyingStatistics2026Page() {
  const yearly = stats.yearlyTrends as { year: number; income: number; filings: number }[]
  const latest = yearly[yearly.length - 1]
  const prev = yearly[yearly.length - 2]
  const growthPct = (((latest.income - prev.income) / prev.income) * 100).toFixed(1)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Lobbying Statistics 2026: $6B+ and Counting',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    publisher: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    datePublished: '2026-01-15',
    dateModified: stats.lastUpdated,
    mainEntityOfPage: 'https://www.openlobby.us/lobbying-statistics-2026',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much is spent on lobbying in the US?',
        acceptedAnswer: { '@type': 'Answer', text: `From 2018 to 2025, a total of ${fmt(stats.totalIncome)} was reported in federal lobbying income across ${fmtNum(stats.totalFilings)} filings.` },
      },
      {
        '@type': 'Question',
        name: 'How many lobbyists are there in Washington?',
        acceptedAnswer: { '@type': 'Answer', text: `There are ${fmtNum(stats.totalLobbyists)} unique lobbyists registered in Senate LDA filings, working across ${fmtNum(stats.totalFirms)} firms.` },
      },
      {
        '@type': 'Question',
        name: 'Is lobbying spending increasing?',
        acceptedAnswer: { '@type': 'Answer', text: `Yes. Lobbying spending grew ${growthPct}% from ${prev.year} to ${latest.year}, reaching ${fmt(latest.income)}.` },
      },
      {
        '@type': 'Question',
        name: 'Where does lobbying data come from?',
        acceptedAnswer: { '@type': 'Answer', text: 'All data comes from Senate Lobbying Disclosure Act (LDA) filings, which are publicly available. OpenLobby aggregates and analyzes these filings.' },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Data Reference · Updated {new Date(stats.lastUpdated).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Lobbying Statistics 2026: $6B+ and Counting
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Federal lobbying spending surpassed <strong>$6 billion</strong> in 2025 — the highest single-year total
            in modern history. With {fmtNum(stats.totalLobbyists)} registered lobbyists, {fmtNum(stats.totalClients)} clients,
            and {fmtNum(stats.totalFilings)} filings on record, lobbying remains one of the most powerful forces in American politics.
          </p>
        </header>

        {/* Hero Stats */}
        <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-6 text-indigo-200">Key Statistics ({stats.yearRange})</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(stats.totalIncome)}</div>
              <div className="text-sm text-indigo-300 mt-1">Total Lobbying Income</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmtNum(stats.totalFilings)}</div>
              <div className="text-sm text-indigo-300 mt-1">Senate LDA Filings</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmtNum(stats.totalLobbyists)}</div>
              <div className="text-sm text-indigo-300 mt-1">Registered Lobbyists</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmtNum(stats.totalClients)}</div>
              <div className="text-sm text-indigo-300 mt-1">Lobbying Clients</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-indigo-800">
            <div>
              <div className="text-3xl font-black text-amber-400">{fmtNum(stats.totalFirms)}</div>
              <div className="text-sm text-indigo-300 mt-1">Lobbying Firms</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{stats.totalIssues}</div>
              <div className="text-sm text-indigo-300 mt-1">Issue Categories</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmtNum(stats.totalRevolvingDoor)}</div>
              <div className="text-sm text-indigo-300 mt-1">Revolving Door Lobbyists</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmtNum(stats.totalForeignEntities)}</div>
              <div className="text-sm text-indigo-300 mt-1">Foreign Entities</div>
            </div>
          </div>
        </div>

        {/* Year-over-Year Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Year-over-Year Lobbying Spending</h2>
          <p className="text-gray-600 mb-6">
            Lobbying spending has grown consistently since 2018. The {growthPct}% jump from {prev.year} to {latest.year} represents
            the largest year-over-year increase in our dataset, driven by record spending on healthcare, defense, and technology issues.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 font-semibold text-gray-700">Year</th>
                  <th className="py-3 pr-4 font-semibold text-gray-700">Total Spending</th>
                  <th className="py-3 pr-4 font-semibold text-gray-700">Filings</th>
                  <th className="py-3 font-semibold text-gray-700">YoY Change</th>
                </tr>
              </thead>
              <tbody>
                {yearly.map((y, i) => {
                  const prevY = i > 0 ? yearly[i - 1] : null
                  const change = prevY ? (((y.income - prevY.income) / prevY.income) * 100).toFixed(1) : '—'
                  return (
                    <tr key={y.year} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 pr-4 font-medium">{y.year}</td>
                      <td className="py-3 pr-4 text-indigo-700 font-semibold">{fmt(y.income)}</td>
                      <td className="py-3 pr-4">{fmtNum(y.filings)}</td>
                      <td className={`py-3 font-medium ${typeof change === 'string' && change !== '—' && parseFloat(change) > 0 ? 'text-green-600' : 'text-gray-500'}`}>
                        {change === '—' ? '—' : `+${change}%`}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">Source: Senate LDA filings via OpenLobby. Data covers {stats.yearRange}.</p>
        </section>

        {/* Visual bar chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Spending Trend</h2>
          <div className="space-y-3">
            {yearly.map((y) => {
              const maxIncome = Math.max(...yearly.map(d => d.income))
              const pct = (y.income / maxIncome) * 100
              return (
                <div key={y.year} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-gray-600">{y.year}</div>
                  <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-end pr-3"
                      style={{ width: `${pct}%` }}
                    >
                      <span className="text-xs font-bold text-white">{fmt(y.income)}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Key Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Key Insights for 2026</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 mb-2">Record-Breaking 2025</h3>
              <p className="text-amber-800 text-sm">
                2025 saw {fmt(latest.income)} in lobbying income — a {growthPct}% increase over {prev.year}.
                This was driven by tariff battles, AI regulation, and healthcare reform debates.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">Lobbyist Workforce</h3>
              <p className="text-blue-800 text-sm">
                {fmtNum(stats.totalLobbyists)} unique lobbyists filed disclosures, with ~{fmtNum(stats.totalRevolvingDoor)} having
                prior government experience (the &quot;revolving door&quot;).
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-2">{fmtNum(stats.totalClients)} Clients</h3>
              <p className="text-green-800 text-sm">
                Nearly 38,000 unique organizations have hired lobbyists since 2018, from Fortune 500 corporations
                to small nonprofits and foreign governments.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 mb-2">{stats.totalIssues} Issue Areas</h3>
              <p className="text-purple-800 text-sm">
                Lobbying spans {stats.totalIssues} distinct issue categories, from healthcare and defense to
                cryptocurrency and artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How much is spent on lobbying in the US?</h3>
              <p className="text-gray-600">
                From {stats.yearRange.split('-')[0]} to {stats.yearRange.split('-')[1]}, a total of {fmt(stats.totalIncome)} was reported
                in federal lobbying income across {fmtNum(stats.totalFilings)} Senate LDA filings. In 2025 alone,
                spending reached {fmt(latest.income)}.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How many lobbyists are there in Washington?</h3>
              <p className="text-gray-600">
                There are {fmtNum(stats.totalLobbyists)} unique lobbyists registered in Senate LDA filings,
                working across {fmtNum(stats.totalFirms)} lobbying firms.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Is lobbying spending increasing?</h3>
              <p className="text-gray-600">
                Yes. Spending has grown every year since 2018, with the largest jump ({growthPct}%) occurring
                from {prev.year} to {latest.year}.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Where does this data come from?</h3>
              <p className="text-gray-600">
                All data comes from Senate Lobbying Disclosure Act (LDA) filings, which are publicly available.
                OpenLobby aggregates, cleans, and analyzes these filings to make them accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/clients" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="font-bold text-indigo-700">Browse Clients</div>
              <div className="text-sm text-gray-500">{fmtNum(stats.totalClients)} organizations</div>
            </Link>
            <Link href="/firms" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="font-bold text-indigo-700">Browse Firms</div>
              <div className="text-sm text-gray-500">{fmtNum(stats.totalFirms)} lobbying firms</div>
            </Link>
            <Link href="/industries" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="font-bold text-indigo-700">By Industry</div>
              <div className="text-sm text-gray-500">{stats.totalIndustries} sectors</div>
            </Link>
            <Link href="/issues" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="font-bold text-indigo-700">By Issue</div>
              <div className="text-sm text-gray-500">{stats.totalIssues} issue categories</div>
            </Link>
            <Link href="/top-lobbyists" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="font-bold text-indigo-700">Top Lobbyists</div>
              <div className="text-sm text-gray-500">50 most powerful</div>
            </Link>
            <Link href="/investigations" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="font-bold text-indigo-700">Investigations</div>
              <div className="text-sm text-gray-500">Deep-dive reports</div>
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
