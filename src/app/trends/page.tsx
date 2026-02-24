'use client'

import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, formatNumber } from '@/lib/format'

interface YearData {
  year: number
  totalIncome: number
  totalExpenses: number
  filings: number
  registrations: number
}

export default function TrendsPage() {
  const [trends, setTrends] = useState<YearData[]>([])

  useEffect(() => {
    fetch('/data/trends.json').then(r => r.json()).then(setTrends).catch(() => {})
  }, [])

  const totalSpending = trends.reduce((s, t) => s + t.totalIncome, 0)
  const totalFilings = trends.reduce((s, t) => s + t.filings, 0)
  const latestYear = trends[trends.length - 1]
  const prevYear = trends.length >= 2 ? trends[trends.length - 2] : null
  const yoyChange = latestYear && prevYear && prevYear.totalIncome > 0
    ? ((latestYear.totalIncome - prevYear.totalIncome) / prevYear.totalIncome * 100).toFixed(1)
    : null

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Trends' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Spending Trends</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        How much money flows into federal lobbying each year — and whether it&apos;s going up or down.
      </p>

      {trends.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(totalSpending)}</div>
              <div className="text-xs text-gray-500">Total (All Years)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(totalFilings)}</div>
              <div className="text-xs text-gray-500">Total Filings</div>
            </div>
            {latestYear && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(latestYear.totalIncome)}</div>
                <div className="text-xs text-gray-500">{latestYear.year} Spending</div>
              </div>
            )}
            {yoyChange && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className={`text-2xl font-bold ${Number(yoyChange) > 0 ? 'text-red-600' : 'text-green-600'}`} style={{ fontFamily: 'var(--font-serif)' }}>
                  {Number(yoyChange) > 0 ? '+' : ''}{yoyChange}%
                </div>
                <div className="text-xs text-gray-500">Year-over-Year</div>
              </div>
            )}
          </div>

          {/* Bar Chart (CSS-only) */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending by Year</h2>
            <div className="space-y-3">
              {trends.map(t => {
                const maxIncome = Math.max(...trends.map(t => t.totalIncome))
                const pct = maxIncome > 0 ? (t.totalIncome / maxIncome * 100) : 0
                return (
                  <div key={t.year} className="flex items-center gap-4">
                    <span className="w-12 text-sm font-medium text-gray-700">{t.year}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                      <div className="bg-primary h-full rounded-full flex items-center justify-end pr-3" style={{ width: `${Math.max(pct, 5)}%` }}>
                        <span className="text-xs text-white font-medium">{formatCurrency(t.totalIncome)}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Table */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Year-by-Year Detail</h2>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Year</th>
                    <th className="px-4 py-3 text-right font-semibold">Lobbying Income</th>
                    <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Expenses</th>
                    <th className="px-4 py-3 text-right font-semibold">Filings</th>
                    <th className="px-4 py-3 text-right font-semibold hidden md:table-cell">New Registrations</th>
                  </tr>
                </thead>
                <tbody>
                  {[...trends].reverse().map(t => (
                    <tr key={t.year} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-medium">{t.year}</td>
                      <td className="px-4 py-3 text-right font-medium">{formatCurrency(t.totalIncome)}</td>
                      <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{t.totalExpenses > 0 ? formatCurrency(t.totalExpenses) : '—'}</td>
                      <td className="px-4 py-3 text-right">{formatNumber(t.filings)}</td>
                      <td className="px-4 py-3 text-right text-gray-600 hidden md:table-cell">{formatNumber(t.registrations)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
