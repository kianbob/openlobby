'use client'

import { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency } from '@/lib/format'

const AreaChartComponent = dynamic(() => import('./AreaChartComponent'), { ssr: false })

interface SurgeEntry {
  code: string
  name: string
  latestQuarter: string
  latestIncome: number
  latestFilings: number
  prevYearIncome: number
  prevYearFilings: number
  incomeChangePercent: number
  filingsChangePercent: number
  newClients: number
  trend: string
}

interface TimelineEntry {
  quarter: string
  income: number
  filings: number
}

interface AllIssue {
  code: string
  name: string
  income: number
  filings: number
  clients: number
}

interface SurgeData {
  latestQuarter: string
  comparedTo: string
  surging: SurgeEntry[]
  growing: SurgeEntry[]
  stable: SurgeEntry[]
  declining: SurgeEntry[]
  timelines: Record<string, TimelineEntry[]>
  allIssues: AllIssue[]
}

type TabKey = 'surging' | 'growing' | 'stable' | 'declining'

function trendBg(trend: string): string {
  switch (trend) {
    case 'surging': return 'bg-emerald-500'
    case 'growing': return 'bg-green-400'
    case 'stable': return 'bg-gray-300'
    case 'declining': return 'bg-red-400'
    default: return 'bg-gray-200'
  }
}

function changeColor(pct: number): string {
  if (pct > 100) return 'text-emerald-700 bg-emerald-50'
  if (pct > 0) return 'text-green-700 bg-green-50'
  if (pct > -20) return 'text-gray-600 bg-gray-50'
  return 'text-red-700 bg-red-50'
}

export default function ArmsRacePage() {
  const [data, setData] = useState<SurgeData | null>(null)
  const [tab, setTab] = useState<TabKey>('surging')
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)

  useEffect(() => {
    fetch('/data/surge-tracker.json').then(r => r.json()).then(setData)
  }, [])

  const entries = useMemo(() => {
    if (!data) return []
    return data[tab] || []
  }, [data, tab])

  const timelineData = useMemo(() => {
    if (!data || !selectedIssue || !data.timelines[selectedIssue]) return []
    return data.timelines[selectedIssue]
  }, [data, selectedIssue])

  if (!data) {
    return <div className="max-w-7xl mx-auto px-4 py-12"><p className="text-gray-500">Loading surge data…</p></div>
  }

  const tabs: { key: TabKey; label: string; count: number; color: string }[] = [
    { key: 'surging', label: '🔥 Surging', count: data.surging.length, color: 'bg-emerald-500' },
    { key: 'growing', label: '📈 Growing', count: data.growing.length, color: 'bg-green-400' },
    { key: 'stable', label: '➡️ Stable', count: data.stable.length, color: 'bg-gray-400' },
    { key: 'declining', label: '📉 Declining', count: data.declining.length, color: 'bg-red-400' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Arms Race' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        The Lobbying Arms Race
      </h1>
      <p className="text-lg text-gray-600 mb-2">
        Real-time lobbying weather map — what&apos;s hot right now
      </p>
      <p className="text-sm text-gray-500 mb-8">
        Comparing {data.latestQuarter} to {data.comparedTo}
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">The Arms Race Tracker monitors quarter-over-quarter surges in lobbying spending by issue. When a policy area suddenly sees a 200%+ increase in lobbying, it&apos;s a leading indicator that major legislation is coming. The biggest surges often predict the news cycle weeks before stories break — because industries lobby before the public pays attention.</p>
          </div>
        </div>
      </div>

      {/* Heat Map Grid */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Issue Heat Map
        </h2>
        <div className="flex flex-wrap gap-2">
          {[...data.surging, ...data.growing, ...data.stable, ...data.declining].map(entry => {
            const intensity = Math.min(1, Math.max(0.15, Math.abs(entry.incomeChangePercent) / 500))
            const isPositive = entry.incomeChangePercent > 0
            return (
              <button
                key={entry.code}
                onClick={() => setSelectedIssue(selectedIssue === entry.code ? null : entry.code)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all hover:scale-105 border ${
                  selectedIssue === entry.code ? 'ring-2 ring-indigo-500 ring-offset-1' : ''
                }`}
                style={{
                  backgroundColor: isPositive
                    ? `rgba(16, 185, 129, ${intensity})`
                    : `rgba(239, 68, 68, ${intensity})`,
                  color: intensity > 0.5 ? 'white' : '#374151',
                  borderColor: isPositive
                    ? `rgba(16, 185, 129, ${Math.min(1, intensity + 0.2)})`
                    : `rgba(239, 68, 68, ${Math.min(1, intensity + 0.2)})`,
                }}
                title={`${entry.name}: ${entry.incomeChangePercent > 0 ? '+' : ''}${entry.incomeChangePercent.toFixed(0)}%`}
              >
                {entry.name}
              </button>
            )
          })}
        </div>
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
          <span>Declining</span>
          <div className="flex h-3 rounded overflow-hidden">
            <div className="w-8 bg-red-400" />
            <div className="w-8 bg-red-200" />
            <div className="w-8 bg-gray-200" />
            <div className="w-8 bg-green-200" />
            <div className="w-8 bg-emerald-400" />
          </div>
          <span>Surging</span>
        </div>
      </div>

      {/* Timeline Chart */}
      {selectedIssue && timelineData.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Spending Over Time: {data.allIssues?.find(i => i.code === selectedIssue)?.name || selectedIssue}
          </h2>
          <AreaChartComponent data={timelineData} />
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === t.key
                ? 'bg-indigo-600 text-white'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>

      {/* Issue List */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700">Trend</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Issue</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-right">Latest Spend</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-right">Prior Year</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-right">Change</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">Filings</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">New Clients</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {entries.map(e => (
                <tr
                  key={e.code}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedIssue(selectedIssue === e.code ? null : e.code)}
                >
                  <td className="px-4 py-3">
                    <div className={`w-3 h-3 rounded-full ${trendBg(e.trend)}`} />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">{e.name}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{formatCurrency(e.latestIncome)}</td>
                  <td className="px-4 py-3 text-right text-gray-400">{formatCurrency(e.prevYearIncome)}</td>
                  <td className="px-4 py-3 text-right">
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-bold ${changeColor(e.incomeChangePercent)}`}>
                      {e.incomeChangePercent > 0 ? '+' : ''}{e.incomeChangePercent.toFixed(0)}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">{e.latestFilings}</td>
                  <td className="px-4 py-3 text-center">
                    {e.newClients > 0 ? (
                      <span className="text-emerald-600 font-medium">+{e.newClients}</span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="2025" />
    </div>
  )
}
