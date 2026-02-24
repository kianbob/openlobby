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
    </div>
  )
}
