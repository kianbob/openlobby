'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber, slugify, toTitleCase } from '@/lib/format'

interface MultiFirmLobbyist {
  id: string
  name: string
  firmCount: number
  firms: string[]
  clientCount: number
}

interface FirmPairOverlap {
  firmA: string
  firmB: string
  sharedLobbyists: number
  sharedNames: string[]
}

interface TopFirm {
  firm: string
  lobbyistCount: number
  clientCount: number
}

interface NetworkData {
  multiFirmLobbyists: MultiFirmLobbyist[]
  firmPairOverlap: FirmPairOverlap[]
  topFirmsByNetwork: TopFirm[]
  totalUniqueLobbyists: number
  totalUniqueFirms: number
  avgLobbyistsPerFirm: number
}

type SortKey = 'firm' | 'lobbyistCount' | 'clientCount'

export default function NetworkPage() {
  const [data, setData] = useState<NetworkData | null>(null)
  const [sortKey, setSortKey] = useState<SortKey>('lobbyistCount')
  const [sortAsc, setSortAsc] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch('/data/network-analysis.json').then(r => r.json()).then(setData).catch(() => {})
  }, [])

  const sortedFirms = useMemo(() => {
    if (!data) return []
    const list = [...data.topFirmsByNetwork]
    list.sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey]
      if (typeof av === 'string' && typeof bv === 'string') return sortAsc ? av.localeCompare(bv) : bv.localeCompare(av)
      return sortAsc ? (av as number) - (bv as number) : (bv as number) - (av as number)
    })
    return list
  }, [data, sortKey, sortAsc])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(false) }
  }

  const SortIcon = ({ col }: { col: SortKey }) => (
    <span className="ml-1 text-gray-400">{sortKey === col ? (sortAsc ? '↑' : '↓') : '↕'}</span>
  )

  if (!data) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Influence Network' }]} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 mb-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          The Influence Network
        </h1>
        <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl">
          {formatNumber(data.totalUniqueLobbyists)} lobbyists. {formatNumber(data.totalUniqueFirms)} firms. Here&apos;s how they connect.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { label: 'Unique Lobbyists', value: formatNumber(data.totalUniqueLobbyists), icon: '👤' },
          { label: 'Lobbying Firms', value: formatNumber(data.totalUniqueFirms), icon: '🏢' },
          { label: 'Avg Lobbyists/Firm', value: data.avgLobbyistsPerFirm.toFixed(1), icon: '📊' },
        ].map(s => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="text-3xl font-bold text-gray-900">{s.value}</div>
            <div className="text-sm text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Career Movers */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          🔄 Career Movers
        </h2>
        <p className="text-gray-600 mb-6">Lobbyists who&apos;ve worked at multiple firms — the most connected operators in DC.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.multiFirmLobbyists.slice(0, showAll ? 77 : 12).map(l => (
            <div key={l.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <Link href={`/lobbyists/${slugify(l.name)}`} className="text-lg font-bold text-indigo-700 hover:text-indigo-900">
                {toTitleCase(l.name)}
              </Link>
              <div className="flex gap-4 mt-2 text-sm text-gray-500">
                <span><strong className="text-gray-900">{l.firmCount}</strong> firms</span>
                <span><strong className="text-gray-900">{l.clientCount}</strong> clients</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {l.firms.map(f => (
                  <span key={f} className="inline-block text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">
                    {toTitleCase(f).replace(/, Inc\.?$|, Llc$|, Llp$/i, '')}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {data.multiFirmLobbyists.length > 12 && (
          <button onClick={() => setShowAll(!showAll)} className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            {showAll ? 'Show fewer' : `Show all ${data.multiFirmLobbyists.length} career movers`}
          </button>
        )}
      </section>

      {/* Shared DNA */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          🧬 Shared DNA
        </h2>
        <p className="text-gray-600 mb-6">Firms that share the most lobbyists — when people move between these firms, they carry relationships and clients with them.</p>
        <div className="space-y-4">
          {data.firmPairOverlap.map((pair, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1 text-right md:text-right">
                  <div className="font-bold text-gray-900">{toTitleCase(pair.firmA)}</div>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg">
                    {pair.sharedLobbyists}
                  </div>
                  <span className="text-xs text-gray-500 mt-1">shared</span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{toTitleCase(pair.firmB)}</div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
                {pair.sharedNames.map(n => (
                  <span key={n} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{toTitleCase(n)}</span>
                ))}
                {pair.sharedLobbyists > pair.sharedNames.length && (
                  <span className="text-xs text-gray-400">+{pair.sharedLobbyists - pair.sharedNames.length} more</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Biggest Networks */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          🏗️ Biggest Networks
        </h2>
        <p className="text-gray-600 mb-6">Top firms by the size of their lobbyist network. Click column headers to sort.</p>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 cursor-pointer select-none" onClick={() => handleSort('firm')}>
                    Firm<SortIcon col="firm" />
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer select-none" onClick={() => handleSort('lobbyistCount')}>
                    Lobbyists<SortIcon col="lobbyistCount" />
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 cursor-pointer select-none" onClick={() => handleSort('clientCount')}>
                    Clients<SortIcon col="clientCount" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedFirms.slice(0, 50).map((f, i) => (
                  <tr key={f.firm} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{toTitleCase(f.firm)}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{formatNumber(f.lobbyistCount)}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{formatNumber(f.clientCount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/revolving-door-exposed" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 Revolving Door Exposed</div>
            <div className="text-xs text-gray-500 mt-1">Former officials in the lobbying network</div>
          </Link>
          <Link href="/investigations/dc-lobbying-capital" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏛️ DC: The Lobbying Capital</div>
            <div className="text-xs text-gray-500 mt-1">The epicenter of the lobbying network</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
            <div className="text-xs text-gray-500 mt-1">Track the flow of lobbying dollars</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/firms" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏢 Top Firms</Link>
          <Link href="/lobbyists" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🧑‍💼 Top Lobbyists</Link>
          <Link href="/concentration" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🎯 Concentration</Link>
          <Link href="/revolving-door" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚪 Revolving Door</Link>
        </div>
      </section>

      <SourceCitation sources={['U.S. Senate Lobbying Disclosure Act Database', 'OpenLobby analysis']} lastUpdated="2025" />
    </div>
  )
}
