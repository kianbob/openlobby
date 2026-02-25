'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, formatNumber, slugify, toTitleCase } from '@/lib/format'

interface Client {
  id: number
  name: string
  state: string
  desc: string
  totalIncome: number
  filings: number
  years: number[]
  issues: string[]
}

type SortKey = 'totalIncome' | 'filings' | 'name'

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<SortKey>('totalIncome')
  const [shown, setShown] = useState(50)

  useEffect(() => {
    fetch('/data/top-clients.json').then(r => r.json()).then(setClients).catch(() => {})
  }, [])

  const filtered = clients
    .filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.state?.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortBy === 'name' ? a.name.localeCompare(b.name) : (b[sortBy] as number) - (a[sortBy] as number))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Clients' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Top Lobbying Clients</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        Every organization that pays lobbyists to influence Congress, ranked by total spending. 
        Data from Senate LDA filings, 2018–2025.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or state..."
          value={search}
          onChange={e => { setSearch(e.target.value); setShown(50) }}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
        />
        <select value={sortBy} onChange={e => setSortBy(e.target.value as SortKey)} className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
          <option value="totalIncome">Sort by Spending</option>
          <option value="filings">Sort by Filings</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <p className="text-sm text-gray-500 mb-4">{formatNumber(filtered.length)} clients{search ? ' matching' : ''}</p>

      {clients.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
          <p className="text-lg">Loading client data...</p>
        </div>
      ) : (
        <>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Client</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">State</th>
                  <th className="px-4 py-3 text-right font-semibold">Total Spending</th>
                  <th className="px-4 py-3 text-right font-semibold hidden md:table-cell">Filings</th>
                  <th className="px-4 py-3 text-right font-semibold hidden lg:table-cell">Issues</th>
                </tr>
              </thead>
              <tbody>
                {filtered.slice(0, shown).map((c, i) => (
                  <tr key={c.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/clients/${slugify(c.name)}`} className="text-primary hover:underline font-medium">
                        {toTitleCase(c.name)}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{c.state || '—'}</td>
                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(c.totalIncome)}</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden md:table-cell">{formatNumber(c.filings)}</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden lg:table-cell">{c.issues?.length || 0}</td>
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
