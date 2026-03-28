import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

interface StateData {
  abbreviation: string
  name: string
  totalSpending: number
  totalFilings: number
  clientCount: number
  perCapita: number
  population: number
  nationalRank: number
  perCapitaRank: number
  topClients: { name: string; income: number }[]
  yearlySpending: { year: number; income: number }[]
}

function loadStates(): StateData[] {
  const dir = path.join(process.cwd(), 'public/data/states')
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
  const all: StateData[] = files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')))
  all.sort((a, b) => b.totalSpending - a.totalSpending)
  return all
}

function fmt(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n.toLocaleString()}`
}

const breadcrumbs = [{ name: 'Lobbying by State' }]

export const metadata: Metadata = {
  title: 'Lobbying by State: Where Does Your State\'s Money Go? | OpenLobby',
  description: 'Interactive breakdown of federal lobbying spending by state. See total spending, per capita spending, top clients, and trends for all 50 states plus DC.',
  keywords: ['lobbying by state', 'state lobbying spending', 'lobbying per capita', 'which states lobby most', 'state lobbying data', 'federal lobbying by state'],
  openGraph: {
    title: 'Lobbying by State: Where Does Your State\'s Money Go?',
    description: 'How much does your state spend on federal lobbying? See the full breakdown for all 50 states + DC.',
    url: 'https://www.openlobby.us/lobbying-by-state',
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.openlobby.us/lobbying-by-state' },
}

export default function LobbyingByStatePage() {
  const states = loadStates()
  const totalSpending = states.reduce((s, st) => s + st.totalSpending, 0)
  const totalClients = states.reduce((s, st) => s + st.clientCount, 0)
  const byPerCapita = [...states].sort((a, b) => b.perCapita - a.perCapita)
  const maxSpending = states[0]?.totalSpending || 1

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Lobbying by State: Where Does Your State\'s Money Go?',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    publisher: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    datePublished: '2026-01-15',
    mainEntityOfPage: 'https://www.openlobby.us/lobbying-by-state',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Geographic Analysis</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Lobbying by State: Where Does Your State&apos;s Money Go?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Federal lobbying isn&apos;t just a Washington phenomenon. Organizations from every state hire lobbyists
            to influence Congress. Some states punch way above their weight — while others barely register.
          </p>
        </header>

        {/* Overview Stats */}
        <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-6 text-indigo-200">State Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-black text-amber-400">{states.length}</div>
              <div className="text-sm text-indigo-300 mt-1">States + DC</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(totalSpending)}</div>
              <div className="text-sm text-indigo-300 mt-1">Total State Spending</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{totalClients.toLocaleString()}</div>
              <div className="text-sm text-indigo-300 mt-1">Total Clients</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">${byPerCapita[0]?.perCapita.toFixed(0) || 0}</div>
              <div className="text-sm text-indigo-300 mt-1">Highest Per Capita ({byPerCapita[0]?.abbreviation})</div>
            </div>
          </div>
        </div>

        {/* Top 10 by total spending */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Top 10 States by Total Lobbying Spending</h2>
          <div className="space-y-3">
            {states.slice(0, 10).map((st, i) => {
              const pct = (st.totalSpending / maxSpending) * 100
              return (
                <div key={st.abbreviation}>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 text-sm font-bold text-gray-400">#{i + 1}</div>
                    <div className="flex-1 font-semibold text-gray-900">{st.name} ({st.abbreviation})</div>
                    <div className="font-bold text-indigo-700">{fmt(st.totalSpending)}</div>
                  </div>
                  <div className="ml-11 bg-gray-100 rounded-full h-5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${pct}%` }}
                    >
                      <span className="text-[10px] font-bold text-white">{st.clientCount} clients</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Per Capita Rankings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Top 10 States by Per Capita Lobbying</h2>
          <p className="text-gray-600 mb-6">
            Per capita spending reveals which states&apos; residents have the most lobbying representation relative to population.
            Small states and state with concentrated industries often rank highest.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-2 font-semibold text-gray-700">#</th>
                  <th className="py-3 pr-4 font-semibold text-gray-700">State</th>
                  <th className="py-3 pr-4 font-semibold text-gray-700 text-right">Per Capita</th>
                  <th className="py-3 pr-4 font-semibold text-gray-700 text-right">Total</th>
                  <th className="py-3 font-semibold text-gray-700 text-right">Population</th>
                </tr>
              </thead>
              <tbody>
                {byPerCapita.slice(0, 10).map((st, i) => (
                  <tr key={st.abbreviation} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 pr-2 text-gray-400">{i + 1}</td>
                    <td className="py-3 pr-4 font-semibold">{st.name}</td>
                    <td className="py-3 pr-4 text-right text-amber-600 font-bold">${st.perCapita.toFixed(2)}</td>
                    <td className="py-3 pr-4 text-right text-indigo-700">{fmt(st.totalSpending)}</td>
                    <td className="py-3 text-right text-gray-600">{st.population.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Full State Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>All States — Complete Rankings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-2 font-semibold text-gray-700">#</th>
                  <th className="py-2 pr-3 font-semibold text-gray-700">State</th>
                  <th className="py-2 pr-3 font-semibold text-gray-700 text-right">Total Spending</th>
                  <th className="py-2 pr-3 font-semibold text-gray-700 text-right">Per Capita</th>
                  <th className="py-2 pr-3 font-semibold text-gray-700 text-right">Clients</th>
                  <th className="py-2 font-semibold text-gray-700 text-right">Filings</th>
                </tr>
              </thead>
              <tbody>
                {states.map((st, i) => (
                  <tr key={st.abbreviation} className={`border-b border-gray-100 hover:bg-gray-50 ${i < 5 ? 'bg-indigo-50/30' : ''}`}>
                    <td className="py-2 pr-2 text-gray-400">{i + 1}</td>
                    <td className="py-2 pr-3 font-medium">{st.name} ({st.abbreviation})</td>
                    <td className="py-2 pr-3 text-right font-semibold text-indigo-700">{fmt(st.totalSpending)}</td>
                    <td className="py-2 pr-3 text-right">${st.perCapita.toFixed(2)}</td>
                    <td className="py-2 pr-3 text-right text-gray-600">{st.clientCount.toLocaleString()}</td>
                    <td className="py-2 text-right text-gray-600">{st.totalFilings.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Based on client headquarters state. Spending covers {new Date().getFullYear() > 2025 ? '2018–2025' : '2018–2024'}. Source: Senate LDA filings.
          </p>
        </section>

        {/* Key Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Key Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">DC Dominance</h3>
              <p className="text-gray-600 text-sm">
                Washington, DC leads in both total spending and per capita — unsurprising given that most trade
                associations, advocacy groups, and lobbying firms are headquartered there.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Corporate Headquarters Effect</h3>
              <p className="text-gray-600 text-sm">
                States with major corporate HQs (NY, CA, IL) rank high because lobbying spending is attributed
                to where the client is headquartered, not where the lobbying occurs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Small States, Big Per Capita</h3>
              <p className="text-gray-600 text-sm">
                Small states with concentrated industries (e.g., Delaware&apos;s financial sector, Connecticut&apos;s
                insurance/defense) often have surprisingly high per-capita lobbying numbers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Every State Lobbies</h3>
              <p className="text-gray-600 text-sm">
                Every single state has organizations lobbying Congress — from Alaska Native corporations to
                Florida sugar producers to Texas oil companies. Federal policy affects everyone.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Explore Your State</h2>
          <p className="text-indigo-200 mb-6">
            Browse the full client list for any state and see exactly who&apos;s lobbying on behalf of your state&apos;s organizations.
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
