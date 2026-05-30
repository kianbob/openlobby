import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

interface LobbyistData {
  name: string
  slug: string
  firms: string[]
  clients: string[]
  filings: number
  positions?: string[]
}

function loadTopLobbyists(): LobbyistData[] {
  const dir = path.join(process.cwd(), 'public/data/lobbyists')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
  const all: LobbyistData[] = []
  for (const file of files) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8'))
      all.push(data)
    } catch { /* skip malformed */ }
  }
  // Sort by filings (proxy for revenue/activity since lobbyist files don't have income)
  all.sort((a, b) => (b.filings || 0) - (a.filings || 0))
  return all.slice(0, 50)
}

const breadcrumbs = [{ name: 'Top Lobbyists' }]

export const metadata: Metadata = {
  title: 'Top 50 Most Powerful Lobbyists in Washington DC',
  description: 'The 50 most active and influential lobbyists in America, ranked. See their clients, firms, filing history, and government connections (2018-2026).',
  keywords: ['top lobbyists', 'most powerful lobbyists', 'washington lobbyists', 'K street lobbyists', 'influential lobbyists', 'lobbyist rankings'],
  openGraph: {
    title: 'Top 50 Most Powerful Lobbyists in America',
    description: 'The most active lobbyists in Washington, ranked by filings. See who they work for and where they came from.',
    url: 'https://www.openlobby.us/top-lobbyists',
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.openlobby.us/top-lobbyists' },
}

export default function TopLobbyistsPage() {
  const lobbyists = loadTopLobbyists()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 50 Most Powerful Lobbyists in America',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    publisher: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    datePublished: '2026-01-15',
    mainEntityOfPage: 'https://www.openlobby.us/top-lobbyists',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Rankings</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Top 50 Most Powerful Lobbyists in America
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            These are the most active lobbyists in Washington — ranked by number of disclosure filings.
            They represent America&apos;s biggest corporations, trade associations, and foreign governments,
            collectively appearing on thousands of lobbying filings worth billions of dollars.
          </p>
        </header>

        {/* Key context */}
        <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-4 text-indigo-200">What Makes a Lobbyist &quot;Powerful&quot;?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-black text-amber-400">{lobbyists[0]?.filings || 0}</div>
              <div className="text-sm text-indigo-300 mt-1">#1 Lobbyist&apos;s Filings</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{lobbyists.reduce((s, l) => s + l.filings, 0).toLocaleString()}</div>
              <div className="text-sm text-indigo-300 mt-1">Combined Top-50 Filings</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{new Set(lobbyists.flatMap(l => l.clients)).size.toLocaleString()}</div>
              <div className="text-sm text-indigo-300 mt-1">Unique Clients Represented</div>
            </div>
          </div>
          <p className="text-indigo-300 text-sm mt-4">
            Power in lobbying comes from access, relationships, and volume. The lobbyists below appear on the most
            disclosure filings — meaning they&apos;re actively lobbying on behalf of the most clients on the most issues.
          </p>
        </div>

        {/* Rankings table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>The Rankings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-2 font-semibold text-gray-700 w-12">#</th>
                  <th className="py-3 pr-4 font-semibold text-gray-700">Lobbyist</th>
                  <th className="py-3 pr-4 font-semibold text-gray-700">Filings</th>
                  <th className="py-3 pr-4 font-semibold text-gray-700">Clients</th>
                  <th className="py-3 font-semibold text-gray-700">Primary Firm</th>
                </tr>
              </thead>
              <tbody>
                {lobbyists.map((l, i) => (
                  <tr key={l.slug} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 pr-2 text-gray-400 font-medium">{i + 1}</td>
                    <td className="py-3 pr-4">
                      <Link href={`/lobbyists/${l.slug}`} className="font-semibold text-indigo-700 hover:text-indigo-500">
                        {l.name}
                      </Link>
                      {l.positions && l.positions.length > 0 && (
                        <div className="text-xs text-gray-500 mt-0.5 truncate max-w-xs">
                          {l.positions[0]}
                        </div>
                      )}
                    </td>
                    <td className="py-3 pr-4 font-semibold">{l.filings.toLocaleString()}</td>
                    <td className="py-3 pr-4 text-gray-600">{l.clients.length}</td>
                    <td className="py-3 text-gray-600 text-sm truncate max-w-[200px]">
                      {l.firms[0] || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Ranked by total Senate LDA disclosure filings (2018–2025). Source: OpenLobby analysis of public filings.
          </p>
        </section>

        {/* Notable patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Notable Patterns</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">The Revolving Door</h3>
              <p className="text-gray-600">
                Many of the top lobbyists have prior government experience — former Congressional staffers,
                agency officials, and even former members of Congress. This &quot;revolving door&quot; gives them
                insider knowledge and personal relationships that make them exceptionally effective advocates.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Multi-Client Influence</h3>
              <p className="text-gray-600">
                The most active lobbyists represent dozens of clients simultaneously. This concentration of
                influence means a small number of individuals have outsized impact on legislation across
                multiple industries and issue areas.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">K Street Dominance</h3>
              <p className="text-gray-600">
                The top lobbyists are concentrated at a handful of major firms — many headquartered on or
                near K Street in Washington, DC. These firms function as influence powerhouses, coordinating
                lobbying strategies across hundreds of clients.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Methodology</h2>
          <p className="text-gray-600 mb-4">
            This ranking is based on the total number of Senate LDA disclosure filings on which each lobbyist
            appears, covering the period 2018–2025. We use filing count as a proxy for activity and influence
            because:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>More filings indicate more active lobbying across more clients and issues</li>
            <li>Each filing represents a quarterly or semi-annual lobbying engagement</li>
            <li>High filing counts correlate with representation of major, high-spending clients</li>
            <li>Filing frequency is a more reliable measure than self-reported income figures</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Explore Individual Lobbyists</h2>
          <p className="text-indigo-200 mb-6">
            Click any lobbyist above to see their full profile — including every client they&apos;ve represented,
            every issue they&apos;ve lobbied on, and their complete filing history.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/firms" className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Browse Firms
            </Link>
            <Link href="/clients" className="bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              Browse Clients
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
