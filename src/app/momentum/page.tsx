'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency } from '@/lib/format'
import dynamic from 'next/dynamic'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })
const LineChart = dynamic(() => import('recharts').then(m => m.LineChart), { ssr: false })
const Line = dynamic(() => import('recharts').then(m => m.Line), { ssr: false })

interface TrendPoint { quarter: string; amount: number }
interface Issue {
  code: string; latestQuarter: string; latestAmount: number; previousAmount: number; growthPct: number; trend: TrendPoint[]
}
interface Data { surging: Issue[]; declining: Issue[] }

const ISSUE_NAMES: Record<string, string> = {
  HCR: 'Healthcare', TAX: 'Taxation', DEF: 'Defense', TRD: 'Trade', BUD: 'Budget',
  ENG: 'Energy', ENV: 'Environment', TRA: 'Transportation', FIN: 'Financial Services',
  EDU: 'Education', LBR: 'Labor', IMM: 'Immigration', TEC: 'Technology', AGR: 'Agriculture',
  CPT: 'Computers/IT', CSP: 'Consumer Issues', GOV: 'Government Issues', MMM: 'Medicare/Medicaid',
  CON: 'Constitution', MON: 'Monetary Policy', CIV: 'Civil Rights', SCI: 'Science',
  SMB: 'Small Business', HOU: 'Housing', INT: 'Intelligence', FOR: 'Foreign Relations',
  MIA: 'Media/Info', NAT: 'Natural Resources', SPO: 'Sports', UTI: 'Utilities',
  BAN: 'Banking', AVI: 'Aviation', TEL: 'Telecom', GAM: 'Gaming', PHA: 'Pharmacy',
  RET: 'Retirement', INS: 'Insurance', TOB: 'Tobacco', WAS: 'Waste', ROD: 'Roads',
  MED: 'Medical', ALC: 'Alcohol', FIR: 'Firearms', DIS: 'Disaster', CDT: 'Commodities',
  AUT: 'Automotive', FOO: 'Food', ADV: 'Advertising', BEV: 'Beverages', APP: 'Apparel',
  DOC: 'District of Columbia', CAW: 'Clean Air/Water', ACC: 'Accounting', FAM: 'Family',
  ANI: 'Animals', WEL: 'Welfare', ART: 'Arts', POS: 'Postal', MAR: 'Marine',
  RES: 'Real Estate', CHM: 'Chemicals', MAN: 'Manufacturing', REL: 'Religion', LAW: 'Law',
  TOR: 'Torts', URB: 'Urban Development', UNM: 'Unemployment', LBY: 'Lobbying Regulation',
  AER: 'Aerospace', FUE: 'Fuel', IND: 'Indian Affairs', PHI: 'Philippine Issues',
  TAR: 'Tariffs', MIG: 'Migration',
}

function Sparkline({ data, color }: { data: TrendPoint[]; color: string }) {
  const sorted = [...data].sort((a, b) => a.quarter.localeCompare(b.quarter))
  return (
    <div style={{ width: 120, height: 32 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sorted}>
          <Line type="monotone" dataKey="amount" stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function MomentumPage() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => { fetch('/data/quarterly-momentum.json').then(r => r.json()).then(setData).catch(() => {}) }, [])

  if (!data) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  const surgingChart = data.surging.slice(0, 10).map(i => ({ name: ISSUE_NAMES[i.code] || i.code, growth: i.growthPct }))
  const decliningChart = data.declining.slice(0, 10).map(i => ({ name: ISSUE_NAMES[i.code] || i.code, growth: i.growthPct }))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Momentum' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>What&apos;s Surging Now</h1>
          <p className="text-gray-600 max-w-3xl">Quarter-over-quarter momentum in lobbying spending — which issues are heating up and which are cooling down.</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/momentum" title="Lobbying Momentum — OpenLobby" />
      </div>

      {/* Split view */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Surging */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)' }}>
            📈 Surging Issues
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={surgingChart} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v: any) => `+${v}%`} />
                <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: any) => `+${v.toFixed(1)}%`} />
                <Bar dataKey="growth" fill="#16a34a" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {data.surging.slice(0, 10).map(issue => (
              <div key={issue.code} className="flex items-center justify-between bg-green-50 border border-green-100 rounded-lg px-4 py-3">
                <div>
                  <div className="font-semibold text-gray-900">{ISSUE_NAMES[issue.code] || issue.code}</div>
                  <div className="text-xs text-gray-500">{formatCurrency(issue.latestAmount)} → was {formatCurrency(issue.previousAmount)}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkline data={issue.trend} color="#16a34a" />
                  <span className="text-green-700 font-bold text-sm">+{issue.growthPct.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Declining */}
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-serif)' }}>
            📉 Declining Issues
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={decliningChart} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v: any) => `${v}%`} />
                <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: any) => `${v.toFixed(1)}%`} />
                <Bar dataKey="growth" fill="#dc2626" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {data.declining.slice(0, 10).map(issue => (
              <div key={issue.code} className="flex items-center justify-between bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                <div>
                  <div className="font-semibold text-gray-900">{ISSUE_NAMES[issue.code] || issue.code}</div>
                  <div className="text-xs text-gray-500">{formatCurrency(issue.latestAmount)} → was {formatCurrency(issue.previousAmount)}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkline data={issue.trend} color="#dc2626" />
                  <span className="text-red-700 font-bold text-sm">{issue.growthPct.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explainer */}
      <section className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
        <h2 className="text-xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>💡 What Drives Lobbying Surges?</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          Lobbying spending surges when legislation moves. A new bill, an executive order, or a regulatory change can trigger an avalanche of spending as industries scramble to shape outcomes. Declines often happen after bills pass or die — the urgency fades. Watch the surging issues to see what Congress will fight about next.
        </p>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Link href="/investigations/tariff-lobbying-surge" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📦 The 2025 Tariff Panic</div>
            <div className="text-xs text-gray-500 mt-1">How tariff fears drove a lobbying surge</div>
          </Link>
          <Link href="/investigations/ai-regulation-fight" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🤖 The AI Regulation Fight</div>
            <div className="text-xs text-gray-500 mt-1">The fastest-growing lobbying battle</div>
          </Link>
          <Link href="/investigations/seasonal-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📅 Seasonal Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">When do spending spikes happen?</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/issues" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📋 All Issues</Link>
          <Link href="/client-trajectories" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📈 Client Trajectories</Link>
          <Link href="/trends" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📉 Trends</Link>
          <Link href="/issue-battles" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">⚔️ Issue Battles</Link>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings', 'Lobbying Disclosure Act Reports']} lastUpdated="February 2026" />
    </div>
  )
}
