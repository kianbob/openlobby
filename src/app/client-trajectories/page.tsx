'use client'
import { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber, slugify } from '@/lib/format'

const PieChart = dynamic(() => import('recharts').then(m => m.PieChart), { ssr: false })
const Pie = dynamic(() => import('recharts').then(m => m.Pie), { ssr: false })
const Cell = dynamic(() => import('recharts').then(m => m.Cell), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const LineChart = dynamic(() => import('recharts').then(m => m.LineChart), { ssr: false })
const Line = dynamic(() => import('recharts').then(m => m.Line), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })

interface YearAmount { year: number; amount: number }
interface ClientTrajectory {
  id: string
  name: string
  state: string
  total: number
  years: YearAmount[]
  growthRate: number
  trajectory: string
  yearsActive: number
}

interface TrajectoryData {
  topByTotal: ClientTrajectory[]
  exploding: ClientTrajectory[]
  declining: ClientTrajectory[]
  newEntries: ClientTrajectory[]
  trajectoryDistribution: Record<string, number>
}

const TRAJECTORY_COLORS: Record<string, string> = {
  exploding: '#dc2626',
  growing: '#f59e0b',
  stable: '#3b82f6',
  reducing: '#8b5cf6',
  declining: '#6b7280',
  new: '#10b981',
}

const TRAJECTORY_LABELS: Record<string, string> = {
  exploding: '🚀 Exploding',
  growing: '📈 Growing',
  stable: '➡️ Stable',
  reducing: '📉 Reducing',
  declining: '⬇️ Declining',
  new: '🆕 New',
}

function MiniSparkline({ data }: { data: YearAmount[] }) {
  return (
    <div className="h-12 w-32">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="amount" stroke="#4f46e5" strokeWidth={2} dot={false} />
          <YAxis hide domain={['dataMin', 'dataMax']} />
          <XAxis hide dataKey="year" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function TrajectoryBadge({ trajectory }: { trajectory: string }) {
  const colors: Record<string, string> = {
    exploding: 'bg-red-100 text-red-700',
    growing: 'bg-amber-100 text-amber-700',
    stable: 'bg-blue-100 text-blue-700',
    reducing: 'bg-purple-100 text-purple-700',
    declining: 'bg-gray-100 text-gray-600',
    new: 'bg-emerald-100 text-emerald-700',
  }
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${colors[trajectory] || 'bg-gray-100 text-gray-600'}`}>
      {trajectory}
    </span>
  )
}

export default function ClientTrajectoriesPage() {
  const [data, setData] = useState<TrajectoryData | null>(null)
  const [search, setSearch] = useState('')
  const [shown, setShown] = useState(50)

  useEffect(() => {
    fetch('/data/client-trajectories.json').then(r => r.json()).then(setData).catch(() => {})
  }, [])

  const filteredTop = useMemo(() => {
    if (!data) return []
    if (!search) return data.topByTotal
    const q = search.toLowerCase()
    return data.topByTotal.filter(c => c.name.toLowerCase().includes(q) || c.state?.toLowerCase().includes(q))
  }, [data, search])

  if (!data) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
    </div>
  )

  const distData = Object.entries(data.trajectoryDistribution).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value,
    key,
  }))

  const total = distData.reduce((s, d) => s + d.value, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Client Trajectories' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Follow the Money: Client Spending Trajectories
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl text-lg">
        Which organizations are ramping up lobbying? Who&apos;s cutting back? Track how spending patterns shift over time.
      </p>

      {/* Distribution Pie */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Trajectory Distribution
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="h-72 w-72 flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={distData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} label={({ name, percent }: { name?: string; percent?: number }) => `${name ?? ''} ${((percent ?? 0) * 100).toFixed(0)}%`}>
                  {distData.map(d => (
                    <Cell key={d.key} fill={TRAJECTORY_COLORS[d.key] || '#999'} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => formatNumber(Number(v))} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1">
            {distData.map(d => (
              <div key={d.key} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: TRAJECTORY_COLORS[d.key] }} />
                <div>
                  <div className="text-sm font-medium text-gray-900">{TRAJECTORY_LABELS[d.key] || d.name}</div>
                  <div className="text-xs text-gray-500">{formatNumber(d.value)} clients ({((d.value / total) * 100).toFixed(1)}%)</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exploding */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          🚀 Exploding: 100%+ Growth
        </h2>
        <p className="text-gray-600 mb-6">Organizations that have dramatically increased their lobbying spend.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.exploding.slice(0, 10).map(c => (
            <div key={c.id} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <Link href={`/clients/${slugify(c.name)}`} className="font-bold text-indigo-700 hover:text-indigo-900 truncate block">
                  {c.name}
                </Link>
                <div className="flex gap-3 text-sm text-gray-500 mt-1">
                  <span>{formatCurrency(c.total)} total</span>
                  <span className="text-red-600 font-medium">+{c.growthRate}%</span>
                </div>
              </div>
              <MiniSparkline data={c.years} />
            </div>
          ))}
        </div>
      </section>

      {/* Declining */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          ⬇️ Declining
        </h2>
        <p className="text-gray-600 mb-6">Organizations pulling back on lobbying — giving up the fight or changing strategy?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.declining.slice(0, 10).map(c => (
            <div key={c.id} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <Link href={`/clients/${slugify(c.name)}`} className="font-bold text-gray-700 hover:text-gray-900 truncate block">
                  {c.name}
                </Link>
                <div className="flex gap-3 text-sm text-gray-500 mt-1">
                  <span>{formatCurrency(c.total)} total</span>
                  <span className="text-gray-600 font-medium">{c.growthRate}%</span>
                </div>
              </div>
              <MiniSparkline data={c.years} />
            </div>
          ))}
        </div>
      </section>

      {/* New Entrants */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          🆕 New to the Game
        </h2>
        <p className="text-gray-600 mb-6">Recent first-time high spenders entering the lobbying arena.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.newEntries.slice(0, 12).map(c => (
            <div key={c.id} className="bg-white border border-gray-200 rounded-xl p-5">
              <Link href={`/clients/${slugify(c.name)}`} className="font-bold text-emerald-700 hover:text-emerald-900 text-sm block truncate">
                {c.name}
              </Link>
              <div className="text-lg font-bold text-gray-900 mt-1">{formatCurrency(c.total)}</div>
              <div className="text-xs text-gray-500">{c.yearsActive} year{c.yearsActive !== 1 ? 's' : ''} active · {c.state}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Searchable Table */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          📊 Top 200 Clients by Total Spending
        </h2>
        <input
          type="text" placeholder="Search clients..." value={search}
          onChange={e => { setSearch(e.target.value); setShown(50) }}
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none mb-4"
        />
        <p className="text-sm text-gray-500 mb-4">{filteredTop.length} clients</p>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Client</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">Total</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">Trajectory</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">Growth</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">Years</th>
                </tr>
              </thead>
              <tbody>
                {filteredTop.slice(0, shown).map((c, i) => (
                  <tr key={c.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3">
                      <Link href={`/clients/${slugify(c.name)}`} className="font-medium text-indigo-700 hover:text-indigo-900">
                        {c.name}
                      </Link>
                      {c.state && <span className="text-xs text-gray-400 ml-2">{c.state}</span>}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">{formatCurrency(c.total)}</td>
                    <td className="px-4 py-3 text-center"><TrajectoryBadge trajectory={c.trajectory} /></td>
                    <td className="px-4 py-3 text-right">
                      <span className={c.growthRate > 0 ? 'text-red-600' : c.growthRate < 0 ? 'text-gray-500' : 'text-gray-700'}>
                        {c.growthRate > 0 ? '+' : ''}{c.growthRate}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-gray-500">{c.yearsActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {filteredTop.length > shown && (
          <button onClick={() => setShown(s => s + 50)} className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Show more...
          </button>
        )}
      </section>

      <SourceCitation sources={['U.S. Senate Lobbying Disclosure Act Database', 'OpenLobby analysis']} lastUpdated="2025" />
    </div>
  )
}
