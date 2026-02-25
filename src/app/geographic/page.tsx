'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber } from '@/lib/format'

interface TopIssue { code: string; count: number }
interface StateData {
  state: string; totalIncome: number; filings: number; uniqueClients: number
  population: number; perCapita: number; perCapitaFilings: number; topIssues: TopIssue[]
}
interface Data { states: StateData[] }

const STATE_NAMES: Record<string, string> = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',
  DE:'Delaware',DC:'District of Columbia',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',
  IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',
  MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',
  NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',
  OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',
  SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',
  WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',PR:'Puerto Rico',GU:'Guam',VI:'Virgin Islands',
}

type SortKey = 'totalIncome' | 'perCapita' | 'uniqueClients' | 'filings'

function getSpendingColor(perCapita: number): string {
  if (perCapita > 1000) return 'bg-indigo-100 border-indigo-300'
  if (perCapita > 200) return 'bg-purple-50 border-purple-200'
  if (perCapita > 100) return 'bg-blue-50 border-blue-200'
  return 'bg-gray-50 border-gray-200'
}

export default function GeographicPage() {
  const [data, setData] = useState<Data | null>(null)
  const [sortBy, setSortBy] = useState<SortKey>('totalIncome')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')

  useEffect(() => { fetch('/data/geographic-heatmap.json').then(r => r.json()).then(setData).catch(() => {}) }, [])

  const sorted = useMemo(() => {
    if (!data) return []
    return [...data.states].sort((a, b) => sortDir === 'desc' ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy])
  }, [data, sortBy, sortDir])

  const punchAbove = useMemo(() => {
    if (!data) return []
    return [...data.states]
      .filter(s => s.population < 2000000 && s.state !== 'DC')
      .sort((a, b) => b.perCapita - a.perCapita)
      .slice(0, 10)
  }, [data])

  const dc = data?.states.find(s => s.state === 'DC')

  function handleSort(key: SortKey) {
    if (sortBy === key) setSortDir(d => d === 'desc' ? 'asc' : 'desc')
    else { setSortBy(key); setSortDir('desc') }
  }

  if (!data) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Geographic' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Map</h1>
          <p className="text-gray-600 max-w-3xl">Where influence comes from — lobbying spending and activity by state.</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/geographic" title="Geographic Lobbying Analysis — OpenLobby" />
      </div>

      {/* DC callout */}
      {dc && (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🏛️</span>
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                DC: ${formatNumber(Math.round(dc.perCapita))}/person in lobbying
              </h2>
              <p className="text-sm text-red-800 leading-relaxed">
                The District of Columbia is in a league of its own — {formatCurrency(dc.totalIncome)} in total lobbying from {formatNumber(dc.uniqueClients)} clients. That&apos;s ${formatNumber(Math.round(dc.perCapita))} per resident, dwarfing every state by orders of magnitude. DC isn&apos;t just where lobbying happens — it&apos;s where lobbying <em>lives</em>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{data.states.length}</div>
          <div className="text-xs text-gray-500">States/Territories</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(data.states.reduce((s, st) => s + st.totalIncome, 0))}</div>
          <div className="text-xs text-gray-500">Total Lobbying</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.states.reduce((s, st) => s + st.uniqueClients, 0))}</div>
          <div className="text-xs text-gray-500">Total Clients</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.states.reduce((s, st) => s + st.filings, 0))}</div>
          <div className="text-xs text-gray-500">Total Filings</div>
        </div>
      </div>

      {/* State ranking table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>State Rankings</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">State</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('totalIncome')}>Total Spending {sortBy === 'totalIncome' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('perCapita')}>Per Capita {sortBy === 'perCapita' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('uniqueClients')}>Clients {sortBy === 'uniqueClients' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('filings')}>Filings {sortBy === 'filings' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Top Issues</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sorted.map((s, i) => (
                <tr key={s.state} className={`hover:bg-gray-50 ${s.state === 'DC' ? 'bg-yellow-50' : ''}`}>
                  <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    <Link href={`/states/${s.state}`} className="text-primary hover:underline">{STATE_NAMES[s.state] || s.state}</Link>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatCurrency(s.totalIncome)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">${formatNumber(Math.round(s.perCapita))}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatNumber(s.uniqueClients)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatNumber(s.filings)}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1 flex-wrap">
                      {s.topIssues.slice(0, 3).map(ti => (
                        <Link key={ti.code} href={`/issues/${ti.code}`} className="bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded hover:bg-indigo-50 hover:text-indigo-700">{ti.code}</Link>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Punching Above Their Weight */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>🥊 Punching Above Their Weight</h2>
        <p className="text-gray-600 mb-4 text-sm">Small states (under 2M population) with outsized per-capita lobbying spending.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {punchAbove.map(s => (
            <div key={s.state} className={`border rounded-xl p-4 ${getSpendingColor(s.perCapita)}`}>
              <Link href={`/states/${s.state}`} className="text-lg font-bold text-gray-900 hover:text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{s.state}</Link>
              <div className="text-sm text-gray-600"><Link href={`/states/${s.state}`} className="hover:text-primary hover:underline">{STATE_NAMES[s.state]}</Link></div>
              <div className="text-xl font-bold text-primary mt-2">${formatNumber(Math.round(s.perCapita))}</div>
              <div className="text-xs text-gray-500">per capita</div>
              <div className="text-xs text-gray-500 mt-1">{formatNumber(s.uniqueClients)} clients · {formatCurrency(s.totalIncome)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/dc-lobbying-capital" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏛️ DC: The Lobbying Capital</div>
            <div className="text-xs text-gray-500 mt-1">Why Washington dominates the map</div>
          </Link>
          <Link href="/investigations/foreign-influence" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🌍 Foreign Influence</div>
            <div className="text-xs text-gray-500 mt-1">International lobbying in the US</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">Complete state-by-state breakdown</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/states" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🗺️ All States</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/concentration" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🎯 Market Concentration</Link>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings', 'U.S. Census Bureau Population Estimates']} lastUpdated="February 2026" />
    </div>
  )
}
