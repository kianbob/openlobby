'use client'
import SourceCitation from '@/components/SourceCitation'
import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, formatNumber } from '@/lib/format'

interface Industry {
  name: string
  codes: string[]
  totalSpending: number
  totalFilings: number
  yearlySpending: { year: number; income: number; filings: number }[]
}

export default function IndustriesPage() {
  const [industries, setIndustries] = useState<Industry[]>([])

  useEffect(() => {
    fetch('/data/industries.json').then(r => r.json()).then(setIndustries).catch(() => {})
  }, [])

  const totalSpending = industries.reduce((s, i) => s + i.totalSpending, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Industries' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by Industry</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Which sectors of the economy spend the most to influence Congress? Industries grouped by LDA issue categories.
      </p>

      {industries.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map(ind => {
            const pct = totalSpending > 0 ? (ind.totalSpending / totalSpending * 100).toFixed(1) : '0'
            const latest = ind.yearlySpending[ind.yearlySpending.length - 1]
            const prev = ind.yearlySpending.length >= 2 ? ind.yearlySpending[ind.yearlySpending.length - 2] : null
            const change = latest && prev && prev.income > 0
              ? ((latest.income - prev.income) / prev.income * 100).toFixed(1) : null

            return (
              <div key={ind.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/30 transition-colors">
                <h2 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{ind.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{ind.codes.join(', ')} · {pct}% of total lobbying</p>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div>
                    <div className="text-lg font-bold text-primary">{formatCurrency(ind.totalSpending)}</div>
                    <div className="text-xs text-gray-500">Total Spend</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">{formatNumber(ind.totalFilings)}</div>
                    <div className="text-xs text-gray-500">Filings</div>
                  </div>
                  {change && (
                    <div>
                      <div className={`text-lg font-bold ${Number(change) > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {Number(change) > 0 ? '+' : ''}{change}%
                      </div>
                      <div className="text-xs text-gray-500">YoY Change</div>
                    </div>
                  )}
                </div>

                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-16">
                  {ind.yearlySpending.map(y => {
                    const max = Math.max(...ind.yearlySpending.map(y => y.income))
                    const h = max > 0 ? (y.income / max * 100) : 0
                    return (
                      <div key={y.year} className="flex-1 flex flex-col items-center gap-0.5" title={`${y.year}: ${formatCurrency(y.income)}`}>
                        <div className="w-full bg-primary/20 rounded-t" style={{ height: `${Math.max(h, 4)}%` }}>
                          <div className="w-full h-full bg-primary rounded-t" style={{ opacity: 0.5 + h / 200 }} />
                        </div>
                        <span className="text-[9px] text-gray-400">{String(y.year).slice(2)}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="2025" />
    </div>
  )
}
