'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber, toTitleCase, slugify } from '@/lib/format'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })

interface Summary {
  firmsWithRevolvingDoor: number
  firmsWithout: number
  avgRevenueWith: number
  avgRevenueWithout: number
  revenuePremium: number
  avgClientsWithRD: number
  avgClientsWithout: number
}

interface SamplePosition {
  name: string
  position: string
}

interface TopFirm {
  firm: string
  revolvingDoorLobbyists: number
  totalIncome: number
  clientCount: number
  incomePerLobbyist: number
  samplePositions: SamplePosition[]
}

interface PremiumData {
  summary: Summary
  topRevolvingDoorFirms: TopFirm[]
}

export default function RevolvingDoorPremiumPage() {
  const [data, setData] = useState<PremiumData | null>(null)
  const [shown, setShown] = useState(20)

  useEffect(() => {
    fetch('/data/revolving-door-premium.json').then(r => r.json()).then(setData).catch(() => {})
  }, [])

  if (!data) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
    </div>
  )

  const { summary } = data

  const revenueCompare = [
    { name: 'With RD Lobbyists', value: summary.avgRevenueWith },
    { name: 'Without', value: summary.avgRevenueWithout },
  ]

  const clientCompare = [
    { name: 'With RD Lobbyists', value: summary.avgClientsWithRD },
    { name: 'Without', value: summary.avgClientsWithout },
  ]

  // Dedupe sample positions per firm
  const dedupePositions = (positions: SamplePosition[]) => {
    const seen = new Set<string>()
    return positions.filter(p => {
      const key = `${p.name}::${p.position.slice(0, 50)}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Revolving Door', href: '/revolving-door' }, { name: 'Revenue Premium' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        The Revolving Door Premium
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl text-lg">
        Do ex-government lobbyists really earn more? The data says <strong>overwhelmingly yes</strong>.
      </p>

      {/* Giant Stat */}
      <div className="bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl p-8 md:p-12 mb-10 text-white text-center">
        <div className="text-6xl md:text-8xl font-black mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          {summary.revenuePremium}%
        </div>
        <div className="text-xl md:text-2xl font-medium text-red-100 mb-2">Revenue Premium</div>
        <p className="text-red-100 max-w-xl mx-auto">
          Firms with revolving door lobbyists earn <strong className="text-white">3.7× more revenue</strong> on average than firms without former government officials.
        </p>
      </div>

      {/* Cross-link */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 flex items-center gap-3">
        <span className="text-xl">🏛️</span>
        <p className="text-sm text-indigo-900">
          Want to see individual revolving door lobbyists? <Link href="/revolving-door" className="font-bold underline hover:text-indigo-700">Browse all 5,000+ former officials →</Link>
        </p>
      </div>

      {/* Side-by-side Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Average Revenue per Firm</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueCompare} layout="vertical">
                <XAxis type="number" tickFormatter={(v: any) => formatCurrency(v)} />
                <YAxis type="category" dataKey="name" width={130} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v: any) => formatCurrency(v)} />
                <Bar dataKey="value" fill="#4f46e5" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            {formatCurrency(summary.avgRevenueWith)} vs {formatCurrency(summary.avgRevenueWithout)}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Average Clients per Firm</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={clientCompare} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={130} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#7c3aed" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            {summary.avgClientsWithRD} clients vs {summary.avgClientsWithout} clients
          </p>
        </div>
      </div>

      {/* What This Means */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          💡 What This Means
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            This is arguably the most important finding in our entire dataset. Firms that employ former government officials
            don&apos;t just do <em>slightly</em> better — they earn <strong>nearly four times as much revenue</strong> as firms without
            revolving door connections.
          </p>
          <p>
            The implication is clear: <strong>access to government insiders is the most valuable commodity in lobbying</strong>.
            When a firm hires a former congressional chief of staff or agency director, they&apos;re not just buying expertise — they&apos;re
            buying a Rolodex of relationships that translates directly into revenue.
          </p>
          <p>
            This creates a self-reinforcing cycle. Higher-revenue firms can afford to recruit more government talent,
            which attracts more clients, which generates more revenue. The {formatNumber(summary.firmsWithRevolvingDoor)} firms
            with revolving door lobbyists collectively dominate the industry, while the {formatNumber(summary.firmsWithout)} firms
            without are left competing for scraps.
          </p>
          <p className="text-sm text-gray-500 italic">
            Note: This analysis uses total firm revenue and lobbyist counts from LDA filings. Correlation does not equal causation —
            larger firms may hire more government officials <em>because</em> they&apos;re already successful. But the magnitude of the
            difference ({summary.revenuePremium}%) strongly suggests that revolving door connections are a significant driver of success.
          </p>
        </div>
      </div>

      {/* Top Firms Table */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          Top Revolving Door Firms
        </h2>
        <p className="text-gray-600 mb-6">Firms with the most former government officials on staff, with sample positions held.</p>
        <div className="space-y-4">
          {data.topRevolvingDoorFirms.slice(0, shown).map((f, i) => {
            const positions = dedupePositions(f.samplePositions).slice(0, 3)
            return (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <Link href={`/firms/${slugify(f.firm)}`} className="font-bold text-indigo-700 hover:text-indigo-900">{toTitleCase(f.firm)}</Link>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span><strong className="text-gray-900">{formatCurrency(f.totalIncome)}</strong> revenue</span>
                    <span><strong className="text-gray-900">{formatNumber(f.clientCount)}</strong> clients</span>
                  </div>
                </div>
                {positions.length > 0 && (
                  <div className="space-y-1.5">
                    {positions.map((p, j) => (
                      <div key={j} className="text-sm">
                        <span className="font-medium text-indigo-700">{toTitleCase(p.name)}</span>
                        <span className="text-gray-500 ml-2">— {p.position.slice(0, 120)}{p.position.length > 120 ? '...' : ''}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        {data.topRevolvingDoorFirms.length > shown && (
          <button onClick={() => setShown(s => s + 20)} className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Show more firms...
          </button>
        )}
      </section>

      <SourceCitation sources={['U.S. Senate Lobbying Disclosure Act Database', 'OpenLobby analysis']} lastUpdated="2025" />
    </div>
  )
}
