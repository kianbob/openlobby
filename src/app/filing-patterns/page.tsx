'use client'
import { useState, useEffect, useMemo } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber, formatCurrency } from '@/lib/format'
import dynamic from 'next/dynamic'

const AreaChart = dynamic(() => import('recharts').then(m => m.AreaChart), { ssr: false })
const Area = dynamic(() => import('recharts').then(m => m.Area), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const PieChart = dynamic(() => import('recharts').then(m => m.PieChart), { ssr: false })
const Pie = dynamic(() => import('recharts').then(m => m.Pie), { ssr: false })
const Cell = dynamic(() => import('recharts').then(m => m.Cell), { ssr: false })
const Legend = dynamic(() => import('recharts').then(m => m.Legend), { ssr: false })
const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })

interface MonthlyData { month: string; count: number }
interface TypeData { type: string; label: string; count: number }
interface FilingData { monthly: MonthlyData[]; byType: TypeData[]; totalFilings: number }
interface QuarterData { quarter: string; filings: number; income: number }
interface OverallQ { filings: number; income: number }
interface SeasonalData { overall: Record<string, OverallQ>; quarterly: QuarterData[]; seasonalIssues: unknown[] }

const PIE_COLORS = ['#4f46e5', '#7c3aed', '#a855f7', '#c084fc', '#e879f9', '#f472b6', '#fb923c', '#fbbf24', '#34d399', '#60a5fa', '#818cf8', '#a78bfa']

export default function FilingPatternsPage() {
  const [filing, setFiling] = useState<FilingData | null>(null)
  const [seasonal, setSeasonal] = useState<SeasonalData | null>(null)

  useEffect(() => {
    fetch('/data/filing-activity.json').then(r => r.json()).then(setFiling).catch(() => {})
    fetch('/data/seasonal-patterns.json').then(r => r.json()).then(setSeasonal).catch(() => {})
  }, [])

  const topTypes = useMemo(() => {
    if (!filing) return []
    return filing.byType.slice(0, 8)
  }, [filing])

  const quarterlyOverall = useMemo(() => {
    if (!seasonal) return []
    return Object.entries(seasonal.overall).map(([q, d]) => ({ quarter: q, filings: d.filings, income: d.income }))
  }, [seasonal])

  const busiestQuarter = useMemo(() => {
    if (!quarterlyOverall.length) return null
    return quarterlyOverall.reduce((a, b) => a.filings > b.filings ? a : b)
  }, [quarterlyOverall])

  if (!filing || !seasonal) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Filing Patterns' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Inside the Filing Room</h1>
          <p className="text-gray-600 max-w-3xl">When lobbyists file, what types of filings they submit, and the seasonal rhythms of influence.</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/filing-patterns" title="Filing Patterns — OpenLobby" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(filing.totalFilings)}</div>
          <div className="text-xs text-gray-500">Total Filings</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{filing.monthly.length}</div>
          <div className="text-xs text-gray-500">Months Tracked</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{filing.byType.length}</div>
          <div className="text-xs text-gray-500">Filing Types</div>
        </div>
        {busiestQuarter && (
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{busiestQuarter.quarter}</div>
            <div className="text-xs text-gray-500">Busiest Quarter</div>
          </div>
        )}
      </div>

      {/* Monthly Area Chart */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Monthly Filing Volume</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-4" style={{ height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filing.monthly}>
              <XAxis dataKey="month" tick={{ fontSize: 10 }} interval={11} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: any) => formatNumber(v)} />
              <Area type="monotone" dataKey="count" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.15} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Filing Type Pie */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Filing Type Breakdown</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4" style={{ height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={topTypes} dataKey="count" nameKey="label" cx="50%" cy="50%" outerRadius={110} label={({ label, percent }: any) => `${label} ${(percent * 100).toFixed(0)}%`}>
                  {topTypes.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v: any) => formatNumber(v)} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Seasonal Pattern */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Seasonal Patterns</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4" style={{ height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quarterlyOverall}>
                <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: any, name: any) => name === 'income' ? formatCurrency(v) : formatNumber(v)} />
                <Bar dataKey="filings" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Filings" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {quarterlyOverall.map(q => (
              <div key={q.quarter} className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-700">{q.quarter}</span>
                <div className="flex gap-4">
                  <span className="text-gray-500">{formatNumber(q.filings)} filings</span>
                  <span className="text-gray-500">{formatCurrency(q.income)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Seasonal Explainer */}
      <section className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
        <h2 className="text-xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>📅 Why Q4 is the Busiest</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          Lobbying filings peak in Q4 (October–December) every year. This isn&apos;t coincidence — it&apos;s the end of the fiscal year, when Congress rushes to pass spending bills, year-end tax provisions, and defense authorization. Lobbyists file their final quarterly reports, and new registrations spike as organizations prepare for the next legislative session. The spike in January/April/July/October reflects the quarterly filing deadline cycle.
        </p>
      </section>

      {/* Full type table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>All Filing Types</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Type Code</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Label</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">Count</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filing.byType.map(t => (
                <tr key={t.type} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-gray-700">{t.type}</td>
                  <td className="px-4 py-3 text-gray-900">{t.label}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatNumber(t.count)}</td>
                  <td className="px-4 py-3 text-right text-gray-500">{(t.count / filing.totalFilings * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings', 'Lobbying Disclosure Act Reports']} lastUpdated="February 2026" />
    </div>
  )
}
