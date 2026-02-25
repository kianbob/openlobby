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

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">The 79 LDA issue categories reveal exactly what lobbyists are fighting over. Health Issues (HCR) dominates at over $2.3 billion — more than any other category — because healthcare policy directly affects trillions in industry revenue. Budget/Appropriations (BUD) is next because that&apos;s where the money gets allocated. Watch for surging issue categories: when lobbying on Trade (TRD) or Tariffs (TAR) suddenly spikes, it means policy changes are imminent.</p>
          </div>
        </div>
      </div>

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
                    <Link href={`/issues/${iss.code.toLowerCase()}`} className="text-primary hover:underline font-medium">{iss.name}</Link>
                  </td>
                  <td className="px-4 py-3 text-right font-medium">{formatCurrency(iss.totalSpending)}</td>
                  <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{formatNumber(iss.totalFilings)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-12 mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
            <div className="text-xs text-gray-500 mt-1">How competing industries battle over the same issues</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">Complete industry and issue breakdowns</div>
          </Link>
          <Link href="/investigations/seasonal-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📅 Seasonal Lobbying Patterns</div>
            <div className="text-xs text-gray-500 mt-1">When do lobbying spikes happen?</div>
          </Link>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/momentum" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚀 Spending Momentum</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/industries" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏭 Industries</Link>
          <Link href="/text-analysis" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📝 Text Analysis</Link>
          <Link href="/issue-battles" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">⚔️ Issue Battles</Link>
        </div>
      </div>
    </div>
  )
}
