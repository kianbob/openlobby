'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, formatNumber, slugify, toTitleCase } from '@/lib/format'

interface Firm {
  id: number
  name: string
  totalIncome: number
  filings: number
  clients: string[]
  years: number[]
}

type SortKey = 'totalIncome' | 'filings' | 'name'

export default function FirmsPage() {
  const [firms, setFirms] = useState<Firm[]>([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<SortKey>('totalIncome')
  const [shown, setShown] = useState(50)

  useEffect(() => {
    fetch('/data/top-firms.json').then(r => r.json()).then(setFirms).catch(() => {})
  }, [])

  const filtered = firms
    .filter(f => !search || f.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortBy === 'name' ? a.name.localeCompare(b.name) : (b[sortBy] as number) - (a[sortBy] as number))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Lobbying Firms' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Top Lobbying Firms</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        K Street&apos;s biggest players — ranked by total income from lobbying clients, 2018–2025.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input type="text" placeholder="Search firms..." value={search}
          onChange={e => { setSearch(e.target.value); setShown(50) }}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
        <select value={sortBy} onChange={e => setSortBy(e.target.value as SortKey)} className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
          <option value="totalIncome">Sort by Income</option>
          <option value="filings">Sort by Filings</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">Lobbying firms are the middlemen of influence — K Street firms like Brownstein Hyatt and Akin Gump represent dozens of clients simultaneously, giving them outsized access to lawmakers. The biggest firms earn tens of millions annually from clients seeking to shape legislation. A firm&apos;s client list reveals which industries are fighting hardest to influence policy, and which issues are generating the most lobbying demand.</p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">{formatNumber(filtered.length)} firms</p>

      {firms.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Firm</th>
                  <th className="px-4 py-3 text-right font-semibold">Total Income</th>
                  <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Clients</th>
                  <th className="px-4 py-3 text-right font-semibold hidden md:table-cell">Filings</th>
                </tr>
              </thead>
              <tbody>
                {filtered.slice(0, shown).map((f, i) => (
                  <tr key={f.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/firms/${slugify(f.name)}`} className="text-primary hover:underline font-medium">{toTitleCase(f.name)}</Link>
                    </td>
                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(f.totalIncome)}</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{f.clients?.length || 0}</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden md:table-cell">{formatNumber(f.filings)}</td>
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
    </div>
  )
}
