'use client'

import { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency } from '@/lib/format'

const ROIChart = dynamic(() => import('./ROIChart'), { ssr: false })

interface ROIEntry {
  clientName: string
  clientId: number
  lobbyingSpend: number
  contractAmount: number
  roi: number
  state: string
  issues: (string | null)[]
  filings: number
  years: number[]
}

interface FollowEntry {
  name: string
  lobbying: number
  contracts: number
  roi: number
  roiLabel: string
}

interface ROIData {
  totalMatches: number
  totalLobbyingSpend: number
  totalContractValue: number
  averageROI: number
  topByROI: ROIEntry[]
  topByContractValue: ROIEntry[]
  topByLobbyingSpend: ROIEntry[]
}

type SortKey = 'clientName' | 'lobbyingSpend' | 'contractAmount' | 'roi'

export default function LobbyingROIPage() {
  const [roiData, setRoiData] = useState<ROIData | null>(null)
  const [followData, setFollowData] = useState<FollowEntry[]>([])
  const [sortKey, setSortKey] = useState<SortKey>('roi')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')

  useEffect(() => {
    fetch('/data/lobbying-roi.json').then(r => r.json()).then(setRoiData)
    fetch('/data/follow-the-money.json').then(r => r.json()).then(setFollowData)
  }, [])

  const allEntries = useMemo(() => {
    if (!roiData) return []
    return roiData.topByROI
  }, [roiData])

  const sorted = useMemo(() => {
    return [...allEntries].sort((a, b) => {
      const av = a[sortKey]
      const bv = b[sortKey]
      if (typeof av === 'string' && typeof bv === 'string') {
        return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
      }
      return sortDir === 'asc' ? (av as number) - (bv as number) : (bv as number) - (av as number)
    })
  }, [allEntries, sortKey, sortDir])

  const chartData = useMemo(() => {
    return followData.slice(0, 10).map(d => ({
      name: d.name.length > 20 ? d.name.slice(0, 18) + '…' : d.name,
      roi: d.roi,
      lobbying: d.lobbying,
      contracts: d.contracts,
    }))
  }, [followData])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('desc')
    }
  }

  const sortIcon = (key: SortKey) => {
    if (sortKey !== key) return '↕'
    return sortDir === 'asc' ? '↑' : '↓'
  }

  if (!roiData) {
    return <div className="max-w-7xl mx-auto px-4 py-12"><p className="text-gray-500">Loading…</p></div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'ROI Calculator' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        The Lobbying ROI Calculator
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        How much do companies get back for every dollar spent lobbying?
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">The Lobbying ROI Calculator reveals what may be the best investment in America: for every dollar spent on lobbying, companies receive an average return of $760 in government contracts and tax benefits. This isn&apos;t coincidence — it&apos;s a deliberate strategy. Companies like Lockheed Martin and Boeing spend millions lobbying because the return dwarfs any stock market investment.</p>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 text-center">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide mb-1">Average ROI</p>
          <p className="text-4xl font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>
            ${roiData.averageROI.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-1">back for every $1 lobbied</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Total Lobbying Spend</p>
          <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
            {formatCurrency(roiData.totalLobbyingSpend)}
          </p>
          <p className="text-sm text-gray-500 mt-1">across {roiData.totalMatches} matched companies</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Total Contracts Received</p>
          <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
            {formatCurrency(roiData.totalContractValue)}
          </p>
          <p className="text-sm text-gray-500 mt-1">in federal government contracts</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Top 10 Companies by ROI
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Return on investment: dollars in government contracts per dollar spent lobbying
        </p>
        {chartData.length > 0 && <ROIChart data={chartData} />}
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
            All Matched Companies
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Companies that both lobby and receive federal contracts. Click column headers to sort.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 font-semibold text-gray-700 cursor-pointer hover:text-indigo-600"
                    onClick={() => handleSort('clientName')}>
                  Client {sortIcon('clientName')}
                </th>
                <th className="px-6 py-3 font-semibold text-gray-700 text-right cursor-pointer hover:text-indigo-600"
                    onClick={() => handleSort('lobbyingSpend')}>
                  Lobbying Spend {sortIcon('lobbyingSpend')}
                </th>
                <th className="px-6 py-3 font-semibold text-gray-700 text-right cursor-pointer hover:text-indigo-600"
                    onClick={() => handleSort('contractAmount')}>
                  Contracts Received {sortIcon('contractAmount')}
                </th>
                <th className="px-6 py-3 font-semibold text-gray-700 text-right cursor-pointer hover:text-indigo-600"
                    onClick={() => handleSort('roi')}>
                  ROI Multiplier {sortIcon('roi')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sorted.map((entry) => (
                <tr key={entry.clientId} className="hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-900">{entry.clientName}</td>
                  <td className="px-6 py-3 text-right text-gray-600">{formatCurrency(entry.lobbyingSpend)}</td>
                  <td className="px-6 py-3 text-right text-gray-600">{formatCurrency(entry.contractAmount)}</td>
                  <td className="px-6 py-3 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                      {entry.roi.toLocaleString()}x
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
