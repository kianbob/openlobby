'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, formatNumber } from '@/lib/format'

interface Issue {
  code: string
  name: string
  totalSpending: number
  totalFilings: number
}

export default function IssuesPage() {
  const [issues, setIssues] = useState<Issue[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/data/issue-index.json').then(r => r.json()).then(setIssues).catch(() => {})
  }, [])

  const filtered = issues.filter(i => !search || i.name.toLowerCase().includes(search.toLowerCase()) || i.code.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Issues' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by Issue</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        The 79 issue categories defined by the Senate for lobbying disclosure. See which policy areas attract the most money.
      </p>

      <input type="text" placeholder="Search issues..." value={search} onChange={e => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none mb-6" />

      {issues.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">#</th>
                <th className="px-4 py-3 text-left font-semibold">Code</th>
                <th className="px-4 py-3 text-left font-semibold">Issue Area</th>
                <th className="px-4 py-3 text-right font-semibold">Total Spending</th>
                <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Filings</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((iss, i) => (
                <tr key={iss.code} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{iss.code}</td>
                  <td className="px-4 py-3">
                    <Link href={`/issues/${iss.code}`} className="text-primary hover:underline font-medium">{iss.name}</Link>
                  </td>
                  <td className="px-4 py-3 text-right font-medium">{formatCurrency(iss.totalSpending)}</td>
                  <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{formatNumber(iss.totalFilings)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
