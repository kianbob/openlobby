'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber, slugify, toTitleCase } from '@/lib/format'

interface Lobbyist {
  id: number
  name: string
  filings: number
  positions: string[]
  firms: string[]
  clients: string[]
}

export default function LobbyistsPage() {
  const [lobbyists, setLobbyists] = useState<Lobbyist[]>([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | 'revolving'>('all')
  const [shown, setShown] = useState(50)

  useEffect(() => {
    fetch('/data/top-lobbyists.json').then(r => r.json()).then(setLobbyists).catch(() => {})
  }, [])

  const filtered = lobbyists
    .filter(l => {
      if (filter === 'revolving' && (!l.positions || l.positions.length === 0)) return false
      if (search && !l.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Lobbyists' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Federal Lobbyists</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        The people walking the halls of Congress — ranked by number of filings. Those with 🏛️ badges held government positions before becoming lobbyists.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input type="text" placeholder="Search lobbyists..." value={search}
          onChange={e => { setSearch(e.target.value); setShown(50) }}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
        <select value={filter} onChange={e => { setFilter(e.target.value as 'all' | 'revolving'); setShown(50) }}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
          <option value="all">All Lobbyists</option>
          <option value="revolving">Revolving Door Only 🏛️</option>
        </select>
      </div>

      <p className="text-sm text-gray-500 mb-4">{formatNumber(filtered.length)} lobbyists</p>

      {lobbyists.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-right font-semibold">Filings</th>
                  <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Firms</th>
                  <th className="px-4 py-3 text-right font-semibold hidden md:table-cell">Clients</th>
                  <th className="px-4 py-3 text-center font-semibold hidden lg:table-cell">Gov Position</th>
                </tr>
              </thead>
              <tbody>
                {filtered.slice(0, shown).map((l, i) => (
                  <tr key={l.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/lobbyists/${slugify(l.name)}`} className="text-primary hover:underline font-medium">
                        {toTitleCase(l.name)}
                      </Link>
                      {l.positions?.length > 0 && <span className="ml-2" title="Former government official">🏛️</span>}
                    </td>
                    <td className="px-4 py-3 text-right font-medium">{formatNumber(l.filings)}</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{l.firms?.length || 0}</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden md:table-cell">{l.clients?.length || 0}</td>
                    <td className="px-4 py-3 text-center hidden lg:table-cell max-w-xs">
                      {l.positions?.length > 0 ? (
                        <span className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded-full inline-block max-w-[200px] truncate" title={l.positions.join('; ')}>{l.positions[0]?.split(';')[0]?.trim()}</span>
                      ) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {shown < filtered.length && (
            <div className="text-center mt-6">
              <button onClick={() => setShown(s => s + 50)} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Show More ({formatNumber(filtered.length - shown)} remaining)
              </button>
            </div>
          )}
        </>
      )}
      <div className="mt-12 mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/investigations/revolving-door-exposed" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 The Revolving Door Exposed</div>
            <div className="text-xs text-gray-500 mt-1">Former government officials who became lobbyists</div>
          </Link>
          <Link href="/investigations/the-revolving-door-premium" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💵 The Revolving Door Premium</div>
            <div className="text-xs text-gray-500 mt-1">Former officials command higher fees</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers and trends</div>
          </Link>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/firms" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏢 Top Firms</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/revolving-door" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚪 Revolving Door</Link>
          <Link href="/network" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🕸️ Network Analysis</Link>
          <Link href="/how-lobbying-works" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📖 How Lobbying Works</Link>
        </div>
      </div>

      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="2025" />
    </div>
  )
}
