import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

interface IndustryData {
  industry: string
  totalSpending: number
  totalFilings: number
  clientCount: number
  topClients: { name: string; spending: number; filings: number }[]
  yearlySpending: { year: number; spending: number }[]
}

function loadIndustries(): IndustryData[] {
  const dir = path.join(process.cwd(), 'public/data/industries')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
  const all: IndustryData[] = files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')))
  all.sort((a, b) => b.totalSpending - a.totalSpending)
  return all
}

const stats = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/stats.json'), 'utf-8'))

function fmt(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
  return `$${n.toLocaleString()}`
}

const breadcrumbs = [{ name: 'Industries', href: '/industries' }, { name: 'Spending by Industry' }]

export const metadata: Metadata = {
  title: 'Lobbying Spending by Industry: $37.7B Exposed | OpenLobby',
  description: 'Breakdown of $37.7B in federal lobbying spending by industry. See which sectors spend the most — healthcare, finance, technology, defense, and more.',
  keywords: ['lobbying by industry', 'lobbying spending by sector', 'industry lobbying data', 'which industries lobby most', 'healthcare lobbying', 'tech lobbying'],
  openGraph: {
    title: 'Lobbying Spending by Industry: $37.7B Exposed',
    description: 'Which industries spend the most on lobbying? Healthcare, finance, and tech lead the pack. See the full breakdown.',
    url: 'https://www.openlobby.us/lobbying-spending-by-industry',
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.openlobby.us/lobbying-spending-by-industry' },
}

export default function LobbyingByIndustryPage() {
  const industries = loadIndustries()
  const totalIndustrySpending = industries.reduce((s, i) => s + i.totalSpending, 0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Lobbying Spending by Industry: $37.7B Exposed',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    publisher: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    datePublished: '2026-01-15',
    mainEntityOfPage: 'https://www.openlobby.us/lobbying-spending-by-industry',
  }

  const maxSpending = industries[0]?.totalSpending || 1

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Industry Analysis</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Lobbying Spending by Industry: {fmt(stats.totalIncome)} Exposed
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Not all industries lobby equally. Healthcare and finance dominate Washington&apos;s influence economy,
            spending billions to shape regulations, secure funding, and block unfavorable legislation.
            Here&apos;s the complete industry-by-industry breakdown.
          </p>
        </header>

        {/* Summary Stats */}
        <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-6 text-indigo-200">Industry Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-black text-amber-400">{industries.length}</div>
              <div className="text-sm text-indigo-300 mt-1">Industry Sectors</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(totalIndustrySpending)}</div>
              <div className="text-sm text-indigo-300 mt-1">Total Classified Spending</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(industries[0]?.totalSpending || 0)}</div>
              <div className="text-sm text-indigo-300 mt-1">#1 Industry Spending</div>
            </div>
          </div>
        </div>

        {/* Visual Ranking */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Industry Spending Rankings</h2>
          <div className="space-y-4">
            {industries.map((ind, i) => {
              const pct = (ind.totalSpending / maxSpending) * 100
              const sharePct = ((ind.totalSpending / totalIndustrySpending) * 100).toFixed(1)
              return (
                <div key={ind.industry} className="group">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="w-6 text-sm font-bold text-gray-400">{i + 1}</div>
                    <Link href={`/industries/${ind.industry}`} className="font-semibold text-indigo-700 hover:text-indigo-500 capitalize flex-1">
                      {ind.industry}
                    </Link>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">{fmt(ind.totalSpending)}</span>
                      <span className="text-gray-500 text-sm ml-2">({sharePct}%)</span>
                    </div>
                  </div>
                  <div className="ml-10 bg-gray-100 rounded-full h-6 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${pct}%` }}
                    >
                      <span className="text-xs font-bold text-white">{ind.clientCount.toLocaleString()} clients</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Spending totals cover {stats.yearRange}. Client counts reflect unique organizations in each sector.
          </p>
        </section>

        {/* Detailed Industry Breakdowns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Detailed Industry Profiles</h2>
          <div className="space-y-8">
            {industries.map((ind) => (
              <div key={ind.industry} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold capitalize">
                      <Link href={`/industries/${ind.industry}`} className="text-indigo-700 hover:text-indigo-500">
                        {ind.industry}
                      </Link>
                    </h3>
                    <p className="text-gray-500 text-sm">{ind.clientCount.toLocaleString()} clients · {ind.totalFilings.toLocaleString()} filings</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-indigo-700">{fmt(ind.totalSpending)}</div>
                  </div>
                </div>

                {/* Yearly trend mini-bar */}
                <div className="flex items-end gap-1 h-16 mb-4">
                  {ind.yearlySpending.map((y) => {
                    const maxY = Math.max(...ind.yearlySpending.map(d => d.spending))
                    const h = maxY > 0 ? (y.spending / maxY) * 100 : 0
                    return (
                      <div key={y.year} className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-indigo-500 rounded-t" style={{ height: `${h}%`, minHeight: '2px' }} />
                        <span className="text-[10px] text-gray-400 mt-1">{y.year}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Top 5 clients */}
                <div>
                  <h4 className="font-semibold text-gray-700 text-sm mb-2">Top Spenders</h4>
                  <div className="space-y-1">
                    {ind.topClients.slice(0, 5).map((c) => (
                      <div key={c.name} className="flex justify-between text-sm">
                        <span className="text-gray-700 truncate mr-4">{c.name}</span>
                        <span className="text-indigo-700 font-semibold whitespace-nowrap">{fmt(c.spending)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Key Takeaways</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 mb-2">Concentration of Power</h3>
              <p className="text-amber-800 text-sm">
                The top 3 industries account for over 60% of all classified lobbying spending. This concentration
                means a handful of sectors have disproportionate influence over federal policy.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">Rising Tech Spending</h3>
              <p className="text-blue-800 text-sm">
                Technology lobbying has grown faster than any other sector, driven by battles over AI regulation,
                antitrust enforcement, data privacy, and cryptocurrency oversight.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-2">Defense Remains Steady</h3>
              <p className="text-green-800 text-sm">
                Defense contractors maintain consistent, high lobbying spending — reflecting the ongoing need
                to secure multi-billion-dollar government contracts and influence procurement decisions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Dive Deeper Into Each Industry</h2>
          <p className="text-indigo-200 mb-6">
            Click any industry above to see the full client list, top lobbyists, key issues, and historical spending trends.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/industries" className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Browse All Industries
            </Link>
            <Link href="/biggest-lobbying-clients" className="bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              Biggest Clients
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
