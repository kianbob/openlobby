'use client'
import { useState, useEffect, useMemo } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber, toTitleCase } from '@/lib/format'
import dynamic from 'next/dynamic'

const PieChart = dynamic(() => import('recharts').then(m => m.PieChart), { ssr: false })
const Pie = dynamic(() => import('recharts').then(m => m.Pie), { ssr: false })
const Cell = dynamic(() => import('recharts').then(m => m.Cell), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const Legend = dynamic(() => import('recharts').then(m => m.Legend), { ssr: false })

interface Firm {
  firm: string; totalRevenue: number; clientCount: number; hhi: number; topClient: string
  topClientShare: number; concentration: string; issueCount: number; topIssue: string; issueSpecialization: number
}
interface Data {
  firms: Firm[]
  concentrationDistribution: Record<string, number>
  avgHHI: number
}

const COLORS = ['#dc2626', '#f59e0b', '#3b82f6', '#16a34a']
const LABELS: Record<string, string> = {
  highly_concentrated: 'Highly Concentrated', concentrated: 'Concentrated', moderate: 'Moderate', diversified: 'Diversified'
}

type SortKey = 'totalRevenue' | 'hhi' | 'clientCount'

export default function ConcentrationPage() {
  const [data, setData] = useState<Data | null>(null)
  const [sortBy, setSortBy] = useState<SortKey>('totalRevenue')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')

  useEffect(() => { fetch('/data/firm-concentration.json').then(r => r.json()).then(setData).catch(() => {}) }, [])

  const donutData = useMemo(() => {
    if (!data) return []
    return Object.entries(data.concentrationDistribution).map(([key, value]) => ({
      name: LABELS[key] || key, value
    }))
  }, [data])

  const sortedFirms = useMemo(() => {
    if (!data) return []
    return [...data.firms].sort((a, b) => sortDir === 'desc' ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy])
  }, [data, sortBy, sortDir])

  const dependentFirms = useMemo(() => {
    if (!data) return []
    return [...data.firms].filter(f => f.clientCount > 5).sort((a, b) => b.topClientShare - a.topClientShare).slice(0, 15)
  }, [data])

  function handleSort(key: SortKey) {
    if (sortBy === key) setSortDir(d => d === 'desc' ? 'asc' : 'desc')
    else { setSortBy(key); setSortDir('desc') }
  }

  if (!data) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Firm Concentration' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>The Power Players</h1>
          <p className="text-gray-600 max-w-3xl">Firm concentration analysis — how dependent are lobbying firms on their biggest clients?</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/concentration" title="Firm Concentration Analysis — OpenLobby" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.firms.length)}</div>
          <div className="text-xs text-gray-500">Total Firms Analyzed</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.avgHHI)}</div>
          <div className="text-xs text-gray-500">Average HHI Score</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-red-600" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.concentrationDistribution.highly_concentrated)}</div>
          <div className="text-xs text-gray-500">Highly Concentrated</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-green-600" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.concentrationDistribution.diversified)}</div>
          <div className="text-xs text-gray-500">Diversified Firms</div>
        </div>
      </div>

      {/* Donut Chart */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Concentration Distribution</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-4" style={{ height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={donutData} cx="50%" cy="50%" innerRadius={80} outerRadius={130} dataKey="value" label={({ name, percent }: { name?: string; percent?: number }) => `${name ?? ''} ${((percent ?? 0) * 100).toFixed(0)}%`}>
                {donutData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Top Firms Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Firms</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Firm</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('totalRevenue')}>Revenue {sortBy === 'totalRevenue' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('clientCount')}>Clients {sortBy === 'clientCount' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer hover:text-primary" onClick={() => handleSort('hhi')}>HHI {sortBy === 'hhi' ? (sortDir === 'desc' ? '↓' : '↑') : ''}</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Top Client</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">Top Share</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sortedFirms.slice(0, 50).map(f => (
                <tr key={f.firm} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{toTitleCase(f.firm)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatCurrency(f.totalRevenue)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatNumber(f.clientCount)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatNumber(f.hhi)}</td>
                  <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{toTitleCase(f.topClient)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{f.topClientShare}%</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      f.concentration === 'highly_concentrated' ? 'bg-red-100 text-red-700' :
                      f.concentration === 'concentrated' ? 'bg-yellow-100 text-yellow-700' :
                      f.concentration === 'moderate' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>{LABELS[f.concentration]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Client Dependency Risk */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>🚨 Client Dependency Risk</h2>
        <p className="text-gray-600 mb-4">Firms with 5+ clients most dependent on a single client — a key business risk indicator.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dependentFirms.map(f => (
            <div key={f.firm} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="font-semibold text-gray-900 mb-1">{toTitleCase(f.firm)}</div>
              <div className="text-xs text-gray-500 mb-2">{f.clientCount} clients · {formatCurrency(f.totalRevenue)}</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div className="bg-red-500 h-full rounded-full" style={{ width: `${f.topClientShare}%` }} />
                </div>
                <span className="text-sm font-bold text-red-600">{f.topClientShare}%</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Top: {toTitleCase(f.topClient)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HHI Explainer */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>📊 What is HHI?</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          The Herfindahl-Hirschman Index (HHI) measures market concentration. For lobbying firms, we calculate HHI based on revenue share across clients. A score of 10,000 means one client provides 100% of revenue. Below 1,500 is considered diversified. High HHI means the firm&apos;s fate is tied to a few key clients — a risky position that can lead to conflicts of interest or business vulnerability.
        </p>
      </section>

      <SourceCitation sources={['Senate LDA Filings', 'Lobbying Disclosure Act Reports']} lastUpdated="February 2026" />
    </div>
  )
}
