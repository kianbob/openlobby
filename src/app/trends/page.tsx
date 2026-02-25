'use client'
import Link from 'next/link'
import SourceCitation from '@/components/SourceCitation'
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

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">Federal lobbying spending has nearly doubled from $1.4 billion in 2018 to $2.7 billion in 2025 — a record high. This isn&apos;t just inflation: it reflects an escalating arms race as more industries recognize that lobbying delivers extraordinary returns on investment. The COVID-era spike (2020-2021) came as industries scrambled to shape trillions in pandemic relief spending. The 2025 surge is driven by tariff lobbying, AI regulation fights, and healthcare policy battles.</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
        <p className="text-sm font-medium text-amber-900">💡 Did you know?</p>
        <p className="text-sm text-amber-800 mt-1">Lobbying spending has increased every single year since 2016. The 2025 jump of +36.4% is the largest single-year increase in over a decade — driven by tariffs, AI regulation, and healthcare fights.</p>
      </div>

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
      <section className="mt-8 mb-4">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Reading</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="/investigations/doge-vs-lobbying" className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">DOGE vs. The Lobbying Machine</div>
            <div className="text-xs text-gray-500 mt-1">What happens when DOGE comes for the agencies that lobbyists depend on?</div>
          </a>
          <a href="/investigations/tariff-lobbying-surge" className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">The 2025 Tariff Panic</div>
            <div className="text-xs text-gray-500 mt-1">As tariffs return, lobbying on trade surges. Which industries are most desperate?</div>
          </a>
          <a href="/investigations/lobbying-statistics" className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">Federal Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive stats — $15.2B total, industry breakdowns, and historical trends.</div>
          </a>
        </div>
      </section>

      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="2025" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">Complete spending overview and trends</div>
          </Link>
          <Link href="/investigations/seasonal-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📅 Seasonal Patterns</div>
            <div className="text-xs text-gray-500 mt-1">When do lobbying spikes happen?</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
            <div className="text-xs text-gray-500 mt-1">Where lobbying dollars flow</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/momentum" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚀 Momentum</Link>
          <Link href="/client-trajectories" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📈 Client Trajectories</Link>
          <Link href="/industries" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏭 Industries</Link>
        </div>
      </section>
    </div>
  )
}
