import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

interface ClientData {
  name: string
  totalSpending: number
  filings: number
  years: number[]
  issues: string[]
  firms: string[]
  lobbyists: string[]
  yearlySpending: { year: number; spending: number }[]
}

function loadTopClients(): ClientData[] {
  const dir = path.join(process.cwd(), 'public/data/clients')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
  // Read all and pick top 100 by totalSpending
  const all: (ClientData & { slug: string })[] = []
  for (const file of files) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8'))
      if (data.totalSpending > 0) {
        all.push({ ...data, slug: file.replace('.json', '') })
      }
    } catch { /* skip */ }
  }
  all.sort((a, b) => b.totalSpending - a.totalSpending)
  return all.slice(0, 100)
}

function fmt(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n.toLocaleString()}`
}

const breadcrumbs = [{ name: 'Clients', href: '/clients' }, { name: 'Biggest Lobbying Clients' }]

export const metadata: Metadata = {
  title: 'The 100 Biggest Lobbying Clients in America | OpenLobby',
  description: 'Ranked list of the 100 biggest lobbying spenders in America. See which corporations, trade associations, and organizations spend the most to influence Congress.',
  keywords: ['biggest lobbying clients', 'top lobbying spenders', 'who spends the most on lobbying', 'lobbying rankings', 'corporate lobbying spending'],
  openGraph: {
    title: 'The 100 Biggest Lobbying Clients in America',
    description: 'Which organizations spend the most on lobbying? The top 100 clients, ranked by total spending since 2018.',
    url: 'https://www.openlobby.us/biggest-lobbying-clients',
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.openlobby.us/biggest-lobbying-clients' },
}

export default function BiggestLobbyingClientsPage() {
  const clients = loadTopClients()
  const totalTop100 = clients.reduce((s, c) => s + c.totalSpending, 0)
  const totalFilings = clients.reduce((s, c) => s + c.filings, 0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The 100 Biggest Lobbying Clients in America',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    publisher: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    datePublished: '2026-01-15',
    mainEntityOfPage: 'https://www.openlobby.us/biggest-lobbying-clients',
  }

  const maxSpending = clients[0]?.totalSpending || 1

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Rankings</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            The 100 Biggest Lobbying Clients in America
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            These 100 organizations spend more on lobbying than the other 37,894 clients combined.
            From trade associations to Fortune 500 corporations, this is where the money flows.
          </p>
        </header>

        {/* Hero Stats */}
        <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-6 text-indigo-200">Top 100 Clients Combined</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(totalTop100)}</div>
              <div className="text-sm text-indigo-300 mt-1">Combined Spending</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{totalFilings.toLocaleString()}</div>
              <div className="text-sm text-indigo-300 mt-1">Combined Filings</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(clients[0]?.totalSpending || 0)}</div>
              <div className="text-sm text-indigo-300 mt-1">#1 Client Spending</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(clients[99]?.totalSpending || 0)}</div>
              <div className="text-sm text-indigo-300 mt-1">#100 Client Spending</div>
            </div>
          </div>
        </div>

        {/* Top 10 showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Top 10 Spenders</h2>
          <div className="space-y-3">
            {clients.slice(0, 10).map((c, i) => {
              const pct = (c.totalSpending / maxSpending) * 100
              return (
                <div key={c.name} className="group">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 text-lg font-black text-gray-300">#{i + 1}</div>
                    <div className="flex-1">
                      <Link href={`/clients/${(c as any).slug}`} className="font-bold text-indigo-700 hover:text-indigo-500">
                        {c.name}
                      </Link>
                      <span className="text-gray-500 text-sm ml-2">{c.filings} filings</span>
                    </div>
                    <div className="font-black text-lg text-indigo-700">{fmt(c.totalSpending)}</div>
                  </div>
                  <div className="ml-11 bg-gray-100 rounded-full h-5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-red-500 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Full table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Complete Top 100</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-2 font-semibold text-gray-700">#</th>
                  <th className="py-2 pr-4 font-semibold text-gray-700">Client</th>
                  <th className="py-2 pr-4 font-semibold text-gray-700 text-right">Spending</th>
                  <th className="py-2 pr-4 font-semibold text-gray-700 text-right">Filings</th>
                  <th className="py-2 font-semibold text-gray-700 text-right">Lobbyists</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((c, i) => (
                  <tr key={c.name} className={`border-b border-gray-100 hover:bg-gray-50 ${i < 10 ? 'bg-amber-50/30' : ''}`}>
                    <td className="py-2 pr-2 text-gray-400 font-medium">{i + 1}</td>
                    <td className="py-2 pr-4">
                      <Link href={`/clients/${(c as any).slug}`} className="font-medium text-indigo-700 hover:text-indigo-500">
                        {c.name}
                      </Link>
                    </td>
                    <td className="py-2 pr-4 text-right font-semibold">{fmt(c.totalSpending)}</td>
                    <td className="py-2 pr-4 text-right text-gray-600">{c.filings.toLocaleString()}</td>
                    <td className="py-2 text-right text-gray-600">{c.lobbyists?.length || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Ranked by total reported lobbying spending (2018–2025). Source: Senate LDA filings via OpenLobby.
          </p>
        </section>

        {/* Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>What the Data Tells Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Trade Associations Dominate</h3>
              <p className="text-gray-600 text-sm">
                Many of the top spenders aren&apos;t individual companies — they&apos;re trade associations that pool
                resources from hundreds of member organizations. This makes them among the most powerful
                lobbying forces in Washington.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Healthcare Leads</h3>
              <p className="text-gray-600 text-sm">
                Healthcare-related organizations consistently rank among the top spenders, driven by drug pricing
                debates, Medicare policy, and regulatory battles that affect trillions in revenue.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Tech Is Rising Fast</h3>
              <p className="text-gray-600 text-sm">
                Technology companies have dramatically increased lobbying spending as they face antitrust scrutiny,
                AI regulation proposals, and data privacy legislation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Extreme Concentration</h3>
              <p className="text-gray-600 text-sm">
                The top 100 clients represent less than 0.3% of all lobbying clients but account for a
                disproportionate share of total spending — a stark illustration of influence inequality.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Explore Any Client</h2>
          <p className="text-indigo-200 mb-6">
            Click any client above to see their full profile — spending history, lobbyists, issues, and connections.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/clients" className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Browse All Clients
            </Link>
            <Link href="/lobbying-spending-by-industry" className="bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              Spending by Industry
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
