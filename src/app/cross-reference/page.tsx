'use client'

import { useState, useEffect, useMemo } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency } from '@/lib/format'

interface FollowEntry {
  name: string
  lobbying: number
  contracts: number
  roi: number
  roiLabel: string
}

interface ROIEntry {
  clientName: string
  clientId: number
  lobbyingSpend: number
  contractAmount: number
  roi: number
  state: string
  issues: (string | null)[]
}

interface ROIData {
  totalMatches: number
  totalLobbyingSpend: number
  totalContractValue: number
  averageROI: number
  topByROI: ROIEntry[]
  topByContractValue: ROIEntry[]
}

const EXTERNAL_SITES = {
  openspending: { name: 'OpenSpending', url: 'https://openspending.org', color: 'bg-blue-100 text-blue-800' },
  openfeds: { name: 'OpenFeds', url: 'https://openfeds.org', color: 'bg-purple-100 text-purple-800' },
  openmedicare: { name: 'OpenMedicare', url: 'https://openmedicare.org', color: 'bg-pink-100 text-pink-800' },
}

// Curated cross-reference examples
const PHARMA_EXAMPLES = [
  { company: 'MCKESSON CORPORATION', insight: 'Top pharmaceutical distributor lobbies on Medicare reimbursement while receiving $11.8B+ in federal contracts — the highest ROI in our dataset.' },
  { company: 'PFIZER INC.', insight: 'One of the most active pharmaceutical lobbyists, with filings spanning healthcare, trade, tax, and defense issues across multiple lobbying entities.' },
]

const DEFENSE_EXAMPLES = [
  { company: 'RTX CORPORATION', insight: 'Formerly Raytheon, received $7.3B in Pentagon contracts while spending $2.2M on defense lobbying — a 3,250x return on investment.' },
  { company: 'GENERAL DYNAMICS', insight: 'Active across multiple lobbying registrations, focusing exclusively on defense and budget appropriations issues.' },
  { company: 'HUNTINGTON INGALLS INCORPORATED', insight: 'Navy shipbuilder with $4.4B in contracts and a 2,174x lobbying ROI — the third highest in our database.' },
  { company: 'BOOZ ALLEN HAMILTON INC.', insight: 'Federal consulting giant spanning cybersecurity, intelligence, and defense, with lobbying across 11 different issue areas.' },
]

const DOGE_EXAMPLES = [
  { company: 'ACCENTURE FEDERAL SERVICES LLC', insight: 'Major federal IT contractor lobbying across 13 issue areas including government operations — a prime target for efficiency reviews.' },
  { company: 'LEIDOS, INC.', insight: 'Defense and IT services firm with extensive government contracts and revolving-door lobbyists from congressional committees.' },
]

function ExampleCard({ company, insight, lobbying, contracts, roi }: {
  company: string
  insight: string
  lobbying?: number
  contracts?: number
  roi?: number
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-indigo-200 transition-colors">
      <h4 className="font-bold text-gray-900 mb-1 text-sm">{company}</h4>
      <p className="text-xs text-gray-600 mb-3">{insight}</p>
      {(lobbying || contracts) && (
        <div className="flex gap-4 text-xs">
          {lobbying && (
            <div>
              <span className="text-gray-400">Lobbying: </span>
              <span className="font-semibold text-gray-700">{formatCurrency(lobbying)}</span>
            </div>
          )}
          {contracts && (
            <div>
              <span className="text-gray-400">Contracts: </span>
              <span className="font-semibold text-gray-700">{formatCurrency(contracts)}</span>
            </div>
          )}
          {roi && (
            <div>
              <span className="text-gray-400">ROI: </span>
              <span className="font-bold text-emerald-600">{roi.toLocaleString()}x</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function CrossReferencePage() {
  const [followData, setFollowData] = useState<FollowEntry[]>([])
  const [roiData, setRoiData] = useState<ROIData | null>(null)

  useEffect(() => {
    fetch('/data/follow-the-money.json').then(r => r.json()).then(setFollowData)
    fetch('/data/lobbying-roi.json').then(r => r.json()).then(setRoiData)
  }, [])

  const enriched = useMemo(() => {
    if (!roiData) return new Map<string, ROIEntry>()
    const map = new Map<string, ROIEntry>()
    for (const entry of roiData.topByROI) {
      map.set(entry.clientName.toUpperCase(), entry)
    }
    return map
  }, [roiData])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Cross-Reference' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Cross-Dataset Intelligence
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        The power of connecting the dots — unique to OpenLobby because we connect 5 datasets
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">This tool reveals the hidden web connecting lobbying money to government contracts. When a company spends $1M lobbying and receives $1B in federal contracts, that&apos;s a 1,000x return on investment. The cross-reference shows which companies are playing this game most effectively — and which government agencies are most influenced by lobbying pressure.</p>
          </div>
        </div>
      </div>

      {/* Hero stat */}
      {roiData && (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-indigo-200 text-sm font-medium uppercase tracking-wide">Companies Cross-Referenced</p>
              <p className="text-4xl font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>{roiData.totalMatches}</p>
            </div>
            <div>
              <p className="text-indigo-200 text-sm font-medium uppercase tracking-wide">Lobbying → Contracts Pipeline</p>
              <p className="text-4xl font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>
                {formatCurrency(roiData.totalLobbyingSpend)} → {formatCurrency(roiData.totalContractValue)}
              </p>
            </div>
            <div>
              <p className="text-indigo-200 text-sm font-medium uppercase tracking-wide">Average Return</p>
              <p className="text-4xl font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>
                {roiData.averageROI.toLocaleString()}x
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Connected Sites */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
          🔗 Cross-Referenced With
        </h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(EXTERNAL_SITES).map(([key, site]) => (
            <a
              key={key}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${site.color} hover:opacity-80 transition-opacity`}
            >
              {site.name}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Follow the Money - Top Connections */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          💰 Follow the Money — Lobbying → Contracts
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Companies that lobby and receive government contracts, ranked by return on investment
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700">Company</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-right">Lobbying Spend</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">→</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-right">Contracts Received</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-right">ROI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {followData.slice(0, 15).map(e => (
                <tr key={e.name} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{e.name}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{formatCurrency(e.lobbying)}</td>
                  <td className="px-4 py-3 text-center text-gray-300">→</td>
                  <td className="px-4 py-3 text-right text-gray-600">{formatCurrency(e.contracts)}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                      {e.roi.toLocaleString()}x
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sector Deep Dives */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Pharma × Medicare */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💊</span>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
              Pharma Lobbying × Medicare Spending
            </h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            The pharmaceutical industry spends millions lobbying on healthcare policy while receiving billions in government contracts and Medicare payments.
          </p>
          <div className="space-y-3">
            {PHARMA_EXAMPLES.map(ex => {
              const data = enriched.get(ex.company.toUpperCase())
              return (
                <ExampleCard
                  key={ex.company}
                  company={ex.company}
                  insight={ex.insight}
                  lobbying={data?.lobbyingSpend}
                  contracts={data?.contractAmount}
                  roi={data?.roi}
                />
              )
            })}
          </div>
        </div>

        {/* Defense × Pentagon */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🛡️</span>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
              Defense Lobbying × Pentagon Contracts
            </h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Defense contractors are among the highest-ROI lobbyists, turning modest lobbying investments into billions in Pentagon contracts.
          </p>
          <div className="space-y-3">
            {DEFENSE_EXAMPLES.map(ex => {
              const data = enriched.get(ex.company.toUpperCase())
              return (
                <ExampleCard
                  key={ex.company}
                  company={ex.company}
                  insight={ex.insight}
                  lobbying={data?.lobbyingSpend}
                  contracts={data?.contractAmount}
                  roi={data?.roi}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* DOGE Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🏛️</span>
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
            DOGE Targets × Industry Lobbying
          </h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Federal contractors targeted for efficiency reviews also maintain significant lobbying operations to protect their government business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {DOGE_EXAMPLES.map(ex => {
            const data = enriched.get(ex.company.toUpperCase())
            return (
              <ExampleCard
                key={ex.company}
                company={ex.company}
                insight={ex.insight}
                lobbying={data?.lobbyingSpend}
                contracts={data?.contractAmount}
                roi={data?.roi}
              />
            )
          })}
        </div>
      </div>

      {/* Methodology */}
      <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
        <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>About This Analysis</h3>
        <p>
          Cross-reference data combines lobbying disclosure filings from the Senate Office of Public Records
          with federal contract data from USASpending.gov. ROI is calculated as total contract value divided
          by total lobbying spend. Correlation does not imply causation — many factors influence government
          contracting decisions beyond lobbying activity. Data covers 2018–2025.
        </p>
      </div>
    </div>
  )
}
