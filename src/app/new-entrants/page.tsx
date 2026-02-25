'use client'
import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber, toTitleCase } from '@/lib/format'
import dynamic from 'next/dynamic'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })

interface Entrant {
  id: number; name: string; state: string; desc: string; year: number; period: string; firstFirm: string; posted: string
}
interface YearCount { year: number; count: number }
interface Data {
  recentEntrants: Entrant[]; entrantsByYear: YearCount[]; totalNewClients: number; totalNewFirms: number
}

export default function NewEntrantsPage() {
  const [data, setData] = useState<Data | null>(null)
  const [search, setSearch] = useState('')
  const [stateFilter, setStateFilter] = useState('')
  const [yearFilter, setYearFilter] = useState('')

  useEffect(() => { fetch('/data/new-entrants.json').then(r => r.json()).then(setData).catch(() => {}) }, [])

  const states = useMemo(() => {
    if (!data) return []
    return [...new Set(data.recentEntrants.map(e => e.state))].sort()
  }, [data])

  const years = useMemo(() => {
    if (!data) return []
    return [...new Set(data.recentEntrants.map(e => e.year))].sort((a, b) => b - a)
  }, [data])

  const filtered = useMemo(() => {
    if (!data) return []
    return data.recentEntrants.filter(e => {
      if (search && !e.name.toLowerCase().includes(search.toLowerCase()) && !e.desc.toLowerCase().includes(search.toLowerCase())) return false
      if (stateFilter && e.state !== stateFilter) return false
      if (yearFilter && e.year !== Number(yearFilter)) return false
      return true
    })
  }, [data, search, stateFilter, yearFilter])

  const latestYear = data?.entrantsByYear?.[data.entrantsByYear.length - 1]

  if (!data) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'First-Time Filers' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>First-Time Filers</h1>
          <p className="text-gray-600 max-w-3xl">Tracking new organizations that start lobbying Washington for the first time.</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/new-entrants" title="First-Time Lobbying Filers — OpenLobby" />
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🆕</span>
          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              {latestYear ? formatNumber(latestYear.count) : '—'} new organizations started lobbying Washington in {latestYear?.year || '—'}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Every year, thousands of organizations register to lobby Congress for the first time. These first-time filers reveal which industries and causes are newly entering the influence game — and what policy battles are pulling in new players.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.totalNewClients)}</div>
          <div className="text-xs text-gray-500">Total New Clients (All Time)</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.totalNewFirms)}</div>
          <div className="text-xs text-gray-500">Total New Firms</div>
        </div>
        {latestYear && (
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(latestYear.count)}</div>
            <div className="text-xs text-gray-500">{latestYear.year} New Entrants</div>
          </div>
        )}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{data.entrantsByYear.length}</div>
          <div className="text-xs text-gray-500">Years Tracked</div>
        </div>
      </div>

      {/* Bar Chart */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>New Entrants by Year</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-4" style={{ height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.entrantsByYear}>
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v: any) => formatNumber(v)} />
              <Bar dataKey="count" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Searchable Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Recent First-Time Filers</h2>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text" placeholder="Search by name or description..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={search} onChange={e => setSearch(e.target.value)}
          />
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm" value={stateFilter} onChange={e => setStateFilter(e.target.value)}>
            <option value="">All States</option>
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm" value={yearFilter} onChange={e => setYearFilter(e.target.value)}>
            <option value="">All Years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Organization</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">State</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Description</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">First Firm</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.slice(0, 100).map(e => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{toTitleCase(e.name)}</td>
                  <td className="px-4 py-3 text-gray-600">{e.state}</td>
                  <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{e.desc}</td>
                  <td className="px-4 py-3 text-gray-600">{toTitleCase(e.firstFirm)}</td>
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{new Date(e.posted).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length > 100 && <div className="text-center py-3 text-sm text-gray-500">Showing 100 of {formatNumber(filtered.length)} results</div>}
          {filtered.length === 0 && <div className="text-center py-8 text-gray-500">No results found</div>}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
        <h2 className="text-xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>💡 Why It Matters</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          First-time filers are a leading indicator of where policy battles are headed. When a wave of AI companies suddenly registers lobbyists, it signals that regulation is coming. When healthcare startups flood K Street, it means the industry sees both threat and opportunity in upcoming legislation. Tracking new entrants reveals the future of lobbying before the spending numbers catch up.
        </p>
      </section>

      <SourceCitation sources={['Senate LDA Filings', 'Lobbying Disclosure Act Reports']} lastUpdated="February 2026" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/first-time-filers-2024" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🆕 First-Time Filers 2024</div>
            <div className="text-xs text-gray-500 mt-1">Who just entered the lobbying game?</div>
          </Link>
          <Link href="/investigations/crypto-lobbying-explosion" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">₿ Crypto Lobbying Explosion</div>
            <div className="text-xs text-gray-500 mt-1">From zero to massive presence</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/client-trajectories" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📈 Client Trajectories</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/momentum" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚀 Momentum</Link>
        </div>
      </section>
    </div>
  )
}
