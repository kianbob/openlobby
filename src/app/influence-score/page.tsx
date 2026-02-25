'use client'
import Link from 'next/link'

import { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, slugify, toTitleCase } from '@/lib/format'

const RadarChartComponent = dynamic(() => import('./RadarChartComponent'), { ssr: false })

interface Client {
  id: number
  name: string
  totalIncome: number
  filings: number
  years: number[]
  issues: (string | null)[]
  state: string | null
  desc: string | null
}

interface RDEntry {
  id: number
  name: string
  positions: string[]
  firms: string[]
  clients: string[]
  filings: number
}

interface ScoredClient {
  id: number
  name: string
  totalSpend: number
  revolvingDoorCount: number
  issueCount: number
  filingCount: number
  yearsActive: number
  scores: {
    spend: number
    revolvingDoor: number
    issues: number
    filings: number
    longevity: number
  }
  composite: number
  tier: string
}

function getTier(score: number): string {
  if (score >= 90) return 'Extreme'
  if (score >= 70) return 'High'
  if (score >= 50) return 'Moderate'
  return 'Low'
}

function tierColor(tier: string): string {
  switch (tier) {
    case 'Extreme': return 'bg-red-100 text-red-800 border-red-200'
    case 'High': return 'bg-orange-100 text-orange-800 border-orange-200'
    case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    default: return 'bg-gray-100 text-gray-700 border-gray-200'
  }
}

function normalize(val: number, max: number): number {
  if (max === 0 || val === 0) return 0
  // Use power curve for better distribution — compresses range so more entities score higher
  return Math.min(100, Math.round(Math.pow(val / max, 0.35) * 100))
}

export default function InfluenceScorePage() {
  const [scored, setScored] = useState<ScoredClient[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/data/top-clients.json').then(r => r.json()),
      fetch('/data/revolving-door.json').then(r => r.json()),
    ]).then(([clients, rdEntries]: [Client[], RDEntry[]]) => {
      // Count revolving door lobbyists per client name
      const rdMap = new Map<string, number>()
      for (const rd of rdEntries) {
        for (const c of rd.clients) {
          const key = c.toUpperCase()
          rdMap.set(key, (rdMap.get(key) || 0) + 1)
        }
      }

      // Take top 200 clients by spend
      const top = clients.slice(0, 200)

      // Find maxes for normalization
      const maxSpend = Math.max(...top.map(c => c.totalIncome))
      const maxFilings = Math.max(...top.map(c => c.filings))
      const maxIssues = Math.max(...top.map(c => c.issues.filter(Boolean).length))
      const maxYears = Math.max(...top.map(c => c.years.length))
      const rdCounts = top.map(c => rdMap.get(c.name.toUpperCase()) || 0)
      const maxRD = Math.max(...rdCounts, 1)

      const results: ScoredClient[] = top.map((c) => {
        const rdCount = rdMap.get(c.name.toUpperCase()) || 0
        const issueCount = c.issues.filter(Boolean).length
        const yearsActive = c.years.length

        const scores = {
          spend: normalize(c.totalIncome, maxSpend),
          revolvingDoor: normalize(rdCount, maxRD),
          issues: normalize(issueCount, maxIssues),
          filings: normalize(c.filings, maxFilings),
          longevity: normalize(yearsActive, maxYears),
        }

        // Weighted composite: spend 30%, RD 25%, issues 15%, filings 15%, longevity 15%
        const composite = Math.round(
          scores.spend * 0.30 +
          scores.revolvingDoor * 0.25 +
          scores.issues * 0.15 +
          scores.filings * 0.15 +
          scores.longevity * 0.15
        )

        return {
          id: c.id,
          name: c.name,
          totalSpend: c.totalIncome,
          revolvingDoorCount: rdCount,
          issueCount,
          filingCount: c.filings,
          yearsActive,
          scores,
          composite,
          tier: getTier(composite),
        }
      })

      results.sort((a, b) => b.composite - a.composite)
      setScored(results.slice(0, 50))
      setLoading(false)
    })
  }, [])

  const top5 = scored.slice(0, 5)
  const radarData = useMemo(() => {
    if (top5.length === 0) return []
    const dimensions = ['spend', 'revolvingDoor', 'issues', 'filings', 'longevity'] as const
    const labels = ['Spending', 'Revolving Door', 'Issues', 'Filings', 'Longevity']
    return dimensions.map((dim, i) => {
      const entry: Record<string, string | number> = { dimension: labels[i] }
      top5.forEach(c => {
        entry[c.name.slice(0, 20)] = Math.round(c.scores[dim])
      })
      return entry
    })
  }, [top5])

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-12"><p className="text-gray-500">Calculating influence scores…</p></div>
  }

  const tierCounts = { Extreme: 0, High: 0, Moderate: 0, Low: 0 }
  scored.forEach(s => { tierCounts[s.tier as keyof typeof tierCounts]++ })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Influence Score' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Influence Score Rankings
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        A composite score measuring lobbying intensity across 5 dimensions
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">Our Influence Score combines multiple factors — lobbying spend, number of lobbyists deployed, revolving door connections, and issue breadth — into a single metric measuring each client&apos;s Washington clout. The highest-scoring entities aren&apos;t always the biggest spenders; sometimes a well-connected firm with a few ex-officials outranks a corporation spending ten times more.</p>
          </div>
        </div>
      </div>

      {/* Tier Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {(['Extreme', 'High', 'Moderate', 'Low'] as const).map(tier => (
          <div key={tier} className={`rounded-xl p-4 text-center border ${tierColor(tier)}`}>
            <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{tierCounts[tier]}</p>
            <p className="text-sm font-medium">{tier} Influence</p>
            <p className="text-xs opacity-70">
              {tier === 'Extreme' ? '90+' : tier === 'High' ? '70–89' : tier === 'Moderate' ? '50–69' : '<50'}
            </p>
          </div>
        ))}
      </div>

      {/* Radar Chart for Top 5 */}
      {radarData.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Top 5 — Score Breakdown
          </h2>
          <RadarChartComponent data={radarData} names={top5.map(c => c.name.slice(0, 20))} />
        </div>
      )}

      {/* Rankings Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
            Top 50 Most Influential Clients
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700 w-12">#</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Client</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-right">Total Spend</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">Revolving Door</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">Issues</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">Filings</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">Years</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">Score</th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {scored.map((s, i) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-400 font-mono">{i + 1}</td>
                  <td className="px-4 py-3 font-medium max-w-xs truncate">
                    <Link href={`/clients/${slugify(s.name)}`} className="text-primary hover:underline">{toTitleCase(s.name)}</Link>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">{formatCurrency(s.totalSpend)}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{s.revolvingDoorCount}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{s.issueCount}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{s.filingCount}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{s.yearsActive}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${s.composite}%`,
                            backgroundColor: s.composite >= 90 ? '#dc2626' : s.composite >= 70 ? '#ea580c' : s.composite >= 50 ? '#ca8a04' : '#6b7280',
                          }}
                        />
                      </div>
                      <span className="font-bold text-gray-900">{s.composite}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-bold border ${tierColor(s.tier)}`}>
                      {s.tier}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Methodology */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
        <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Methodology</h3>
        <p className="mb-4">
          The Influence Score measures each client&apos;s lobbying footprint across five dimensions, normalized against the top 200 spenders using a power-curve distribution (exponent 0.35) for better spread.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="font-semibold text-gray-900 mb-1">💰 Spending Power — 30%</div>
            <p>Total lobbying expenditure reported in LDA filings across all years.</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="font-semibold text-gray-900 mb-1">🚪 Revolving Door — 25%</div>
            <p>Number of lobbyists working for this client who disclosed former government positions.</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="font-semibold text-gray-900 mb-1">📋 Issue Breadth — 15%</div>
            <p>How many distinct policy issue areas the client lobbies on (e.g., healthcare, defense, tax).</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="font-semibold text-gray-900 mb-1">📄 Filing Volume — 15%</div>
            <p>Total number of LDA filings, reflecting lobbying activity intensity.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-gray-200 mb-4">
          <div className="font-semibold text-gray-900 mb-1">⏳ Longevity — 15%</div>
          <p>Number of years the client has been active in lobbying — sustained influence over time.</p>
        </div>
        <p className="text-xs text-gray-500">
          Tier thresholds: <strong>Extreme</strong> (90+), <strong>High</strong> (70–89), <strong>Moderate</strong> (50–69), <strong>Low</strong> (&lt;50). Scores are relative — they measure influence compared to other top spenders, not an absolute scale.
        </p>
      </div>
      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="2025" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
            <div className="text-xs text-gray-500 mt-1">When lobbying investment pays off big</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
            <div className="text-xs text-gray-500 mt-1">Track lobbying spending flows</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/lobbying-roi" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🧮 ROI Calculator</Link>
          <Link href="/concentration" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🎯 Concentration</Link>
        </div>
      </section>
    </div>
  )
}
