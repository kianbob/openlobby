'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const contractors = [
  { name: 'TriWest Healthcare Alliance', category: 'Healthcare', lobbying: 270000, contracts: 13374744670, roi: 49536 },
  { name: 'Amentum Services', category: 'Services', lobbying: 580000, contracts: 3583167409, roi: 6178 },
  { name: 'Sandia National Labs (NTESS)', category: 'National Security', lobbying: 1019000, contracts: 5673408174, roi: 5568 },
  { name: 'McKesson Corporation', category: 'Healthcare', lobbying: 3630000, contracts: 11870431649, roi: 3270 },
  { name: 'Atlantic Diving Supply', category: 'Defense Supply', lobbying: 1942000, contracts: 5993126834, roi: 3086 },
  { name: 'RTX Corporation', category: 'Defense', lobbying: 2775000, contracts: 7280700848, roi: 2624 },
  { name: 'QTC Medical Services', category: 'Healthcare', lobbying: 1160000, contracts: 2886404916, roi: 2488 },
  { name: 'Huntington Ingalls', category: 'Defense', lobbying: 4436000, contracts: 8565929513, roi: 1931 },
  { name: 'BAE Systems Land & Armaments', category: 'Defense', lobbying: 1370000, contracts: 2164547913, roi: 1580 },
  { name: 'Raytheon Company', category: 'Defense', lobbying: 10433000, contracts: 16472942438, roi: 1579 },
  { name: 'Johns Hopkins APL', category: 'Research', lobbying: 1984000, contracts: 2359804109, roi: 1189 },
  { name: 'The Boeing Company', category: 'Defense', lobbying: 14852500, contracts: 15444072108, roi: 1040 },
  { name: 'Caltech (JPL)', category: 'Research', lobbying: 2795000, contracts: 2297053488, roi: 822 },
  { name: 'SpaceX', category: 'Aerospace', lobbying: 5253000, contracts: 2999808160, roi: 571 },
  { name: 'Booz Allen Hamilton', category: 'IT/Consulting', lobbying: 12130000, contracts: 6563770954, roi: 541 },
  { name: 'Lockheed Martin', category: 'Defense', lobbying: 141599000, contracts: 58775947590, roi: 415 },
  { name: 'Accenture Federal Services', category: 'IT/Consulting', lobbying: 10455000, contracts: 3235465824, roi: 309 },
  { name: 'Sierra Nevada Company', category: 'Defense', lobbying: 8000000, contracts: 2243556112, roi: 280 },
  { name: 'General Dynamics IT', category: 'Defense', lobbying: 16697500, contracts: 4635820603, roi: 278 },
  { name: 'SAIC', category: 'IT/Consulting', lobbying: 17237500, contracts: 4360395756, roi: 253 },
  { name: 'Leidos', category: 'IT/Consulting', lobbying: 22810000, contracts: 3037225603, roi: 133 },
]

const totalLobbying = 281428500
const totalContracts = 183818324671
const overallROI = Math.round(totalContracts / totalLobbying)

type SortKey = 'name' | 'lobbying' | 'contracts' | 'roi'

function fmt(n: number) {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n}`
}

export default function LobbyingVsContractsAnalysis() {
  const [sortKey, setSortKey] = useState<SortKey>('roi')
  const [sortAsc, setSortAsc] = useState(false)

  const sorted = useMemo(() => {
    const arr = [...contractors]
    arr.sort((a, b) => {
      const va = sortKey === 'name' ? a.name : a[sortKey]
      const vb = sortKey === 'name' ? b.name : b[sortKey]
      if (typeof va === 'string' && typeof vb === 'string') return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va)
      return sortAsc ? (va as number) - (vb as number) : (vb as number) - (va as number)
    })
    return arr
  }, [sortKey, sortAsc])

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(false) }
  }

  const SortHeader = ({ k, label, align = 'left' }: { k: SortKey; label: string; align?: string }) => (
    <th
      className={`py-3 px-3 cursor-pointer hover:bg-gray-100 select-none ${align === 'right' ? 'text-right' : 'text-left'}`}
      onClick={() => toggleSort(k)}
    >
      {label} {sortKey === k ? (sortAsc ? '↑' : '↓') : ''}
    </th>
  )

  const maxContracts = Math.max(...contractors.map(c => c.contracts))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Lobbying vs. Contracts' }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Lobbying ROI Calculator
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Cross-referenced lobbying disclosures with federal contract data from{' '}
        <a href="https://www.openspending.us" className="text-primary hover:underline">USASpending.gov</a>.
        For every $1 these contractors spent lobbying, they received thousands back in federal contracts.
      </p>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Matched Contractors', value: '21' },
          { label: 'Total Lobbying', value: fmt(totalLobbying) },
          { label: 'Total Contracts', value: fmt(totalContracts) },
          { label: 'Overall ROI', value: `${overallROI.toLocaleString()}:1` },
        ].map(s => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
            <div className="text-sm text-gray-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Visual: Bar Chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Lobbying Spend <span className="text-red-500">(red)</span> vs. Contracts Received <span className="text-primary">(blue)</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">The lobbying bars are so small they&apos;re barely visible. That&apos;s the point.</p>
        <div className="space-y-2 max-h-[600px] overflow-y-auto">
          {sorted.slice(0, 15).map(c => (
            <div key={c.name}>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="font-medium truncate mr-2">{c.name}</span>
                <span className="text-primary font-bold whitespace-nowrap">{c.roi.toLocaleString()}:1</span>
              </div>
              <div className="relative h-5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-primary/80 rounded-full"
                  style={{ width: `${(c.contracts / maxContracts) * 100}%` }}
                />
                <div
                  className="absolute inset-y-0 left-0 bg-red-500 rounded-full"
                  style={{ width: `${Math.max((c.lobbying / maxContracts) * 100, 0.15)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
                <span>🔴 {fmt(c.lobbying)}</span>
                <span>🔵 {fmt(c.contracts)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sortable Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <SortHeader k="name" label="Contractor" />
                <th className="py-3 px-3 text-left">Category</th>
                <SortHeader k="lobbying" label="Lobbying Spend" align="right" />
                <SortHeader k="contracts" label="Federal Contracts" align="right" />
                <SortHeader k="roi" label="ROI" align="right" />
              </tr>
            </thead>
            <tbody>
              {sorted.map((c, i) => (
                <tr key={c.name} className={`border-b border-gray-100 hover:bg-gray-50 ${i % 2 ? 'bg-gray-50/50' : ''}`}>
                  <td className="py-3 px-3 font-medium">{c.name}</td>
                  <td className="py-3 px-3 text-gray-600">{c.category}</td>
                  <td className="py-3 px-3 text-right text-gray-600">{fmt(c.lobbying)}</td>
                  <td className="py-3 px-3 text-right font-semibold">{fmt(c.contracts)}</td>
                  <td className="py-3 px-3 text-right font-bold text-primary">{c.roi.toLocaleString()}:1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Source & Links */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Methodology &amp; Sources</h3>
        <p className="text-sm text-gray-700 mb-3">
          We matched the top federal contractors (by total obligation on{' '}
          <a href="https://www.usaspending.gov" className="text-primary hover:underline">USASpending.gov</a>) 
          against lobbying registrants in Senate LDA filings for 2018–2025. Matches were made using exact 
          and fuzzy name matching. ROI = total federal contracts ÷ total lobbying spend.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Federal spending data available at{' '}
          <a href="https://www.openspending.us" className="text-primary hover:underline">OpenSpending.us</a>.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/investigations/lobbying-vs-contracts" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
            Read the Investigation →
          </Link>
          <Link href="/lobbying-roi" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Lobbying ROI Analysis →
          </Link>
          <a href="https://www.openspending.us" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            OpenSpending.us →
          </a>
        </div>
      </div>
    </div>
  )
}
