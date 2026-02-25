'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, formatNumber } from '@/lib/format'

interface StateEntry {
  abbreviation: string
  name: string
  totalSpending: number
  clientCount: number
  filings: number
}

type SortKey = 'totalSpending' | 'clientCount' | 'name'

export default function StatesPage() {
  const [states, setStates] = useState<StateEntry[]>([])
  const [sortBy, setSortBy] = useState<SortKey>('totalSpending')

  useEffect(() => {
    fetch('/data/state-index.json').then(r => r.json()).then(setStates).catch(() => {})
  }, [])

  const sorted = [...states].sort((a, b) =>
    sortBy === 'name' ? a.name.localeCompare(b.name) : (b[sortBy] as number) - (a[sortBy] as number)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'States' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by State</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        Where lobbying clients are based. States ranked by total lobbying spending from clients headquartered there.
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">Where lobbying clients are headquartered reveals the geography of political influence. Washington D.C. dominates because trade associations and lobbying firms are based there. But California, New York, and Texas follow — home to Big Tech, Wall Street, and energy companies. State-level data shows which regions have the most at stake in federal policy, and which states punch above their economic weight in the influence game.</p>
          </div>
        </div>
      </div>

      <select value={sortBy} onChange={e => setSortBy(e.target.value as SortKey)}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white mb-6">
        <option value="totalSpending">Sort by Spending</option>
        <option value="clientCount">Sort by Client Count</option>
        <option value="name">Sort by Name</option>
      </select>

      {states.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">#</th>
                <th className="px-4 py-3 text-left font-semibold">State</th>
                <th className="px-4 py-3 text-right font-semibold">Total Spending</th>
                <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Clients</th>
                <th className="px-4 py-3 text-right font-semibold hidden md:table-cell">Filings</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((s, i) => (
                <tr key={s.abbreviation} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                  <td className="px-4 py-3">
                    <Link href={`/states/${s.abbreviation}`} className="text-primary hover:underline font-medium">
                      {s.name}
                    </Link>
                    <span className="ml-2 text-xs text-gray-400">{s.abbreviation}</span>
                  </td>
                  <td className="px-4 py-3 text-right font-medium">{formatCurrency(s.totalSpending)}</td>
                  <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{formatNumber(s.clientCount)}</td>
                  <td className="px-4 py-3 text-right text-gray-600 hidden md:table-cell">{formatNumber(s.filings)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-12 mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/investigations/dc-lobbying-capital" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏛️ DC: The Lobbying Capital</div>
            <div className="text-xs text-gray-500 mt-1">Why Washington dominates lobbying geography</div>
          </Link>
          <Link href="/investigations/foreign-influence" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🌍 Foreign Influence</div>
            <div className="text-xs text-gray-500 mt-1">Foreign entities lobbying the US government</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers and state breakdowns</div>
          </Link>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/geographic" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🗺️ Geographic Analysis</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/industries" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏭 Industries</Link>
          <Link href="/firms" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏢 Top Firms</Link>
        </div>
      </div>
    </div>
  )
}
