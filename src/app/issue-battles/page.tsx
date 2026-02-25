'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber } from '@/lib/format'

interface Pair { issues: [string, string]; count: number; jaccard: number }
interface Data { topPairs: Pair[]; totalMultiIssueFilings: number; avgIssuesPerFiling: number }

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
}

function getColor(jaccard: number): string {
  if (jaccard > 0.3) return '#4f46e5'
  if (jaccard > 0.2) return '#7c3aed'
  if (jaccard > 0.15) return '#a855f7'
  return '#c084fc'
}

export default function IssueBattlesPage() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => { fetch('/data/issue-cooccurrence.json').then(r => r.json()).then(setData).catch(() => {}) }, [])

  if (!data) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Issue Battles' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Issue Collisions</h1>
          <p className="text-gray-600 max-w-3xl">When industries clash — which lobbying issues get fought together in the same filings.</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/issue-battles" title="Issue Collisions — OpenLobby" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.totalMultiIssueFilings)}</div>
          <div className="text-xs text-gray-500">Multi-Issue Filings</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{data.avgIssuesPerFiling.toFixed(2)}</div>
          <div className="text-xs text-gray-500">Avg Issues per Filing</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{data.topPairs.length}</div>
          <div className="text-xs text-gray-500">Issue Pairs Tracked</div>
        </div>
      </div>

      {/* Network visualization - connected cards */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Issue Co-occurrence Network</h2>
        <p className="text-gray-600 mb-4 text-sm">Stronger connections (higher Jaccard similarity) indicate issues that are consistently lobbied together. Thicker lines = stronger relationship.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.topPairs.slice(0, 18).map((pair, i) => {
            const color = getColor(pair.jaccard)
            return (
              <div key={i} className="bg-white border-2 rounded-xl p-4 hover:shadow-lg transition-shadow" style={{ borderColor: color }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded">{pair.issues[0]}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">{pair.issues[1]}</span>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {ISSUE_NAMES[pair.issues[0]] || pair.issues[0]} × {ISSUE_NAMES[pair.issues[1]] || pair.issues[1]}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{formatNumber(pair.count)} joint filings</span>
                  <span className="text-sm font-bold" style={{ color }}>J={pair.jaccard.toFixed(3)}</span>
                </div>
                <div className="mt-2 bg-gray-100 rounded-full h-1.5">
                  <div className="h-full rounded-full" style={{ width: `${pair.jaccard * 100 * 2.5}%`, backgroundColor: color }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Battlegrounds narrative */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-indigo-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>⚔️ The Battlegrounds</h2>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p><strong>Healthcare × Medicare/Medicaid (J=0.434):</strong> The strongest connection in lobbying. Nearly half of all healthcare lobbying filings also address Medicare/Medicaid — because the two are inseparable in policy. Drug pricing, hospital reimbursement, and insurance regulation all live at this intersection.</p>
          <p><strong>Budget × Everything:</strong> Budget (BUD) appears in 4 of the top 5 pairs. This makes sense — nearly every policy fight ultimately comes down to money. Appropriations bills are the vehicle for policy, making budget the universal connector.</p>
          <p><strong>Tax × Trade (J=0.203):</strong> Tariffs are taxes on imports, so trade and tax lobbying naturally overlap. The 2025 tariff surge has only strengthened this connection as companies fight both the tariffs themselves and their tax implications.</p>
        </div>
      </section>

      {/* Full table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>All Issue Pairs</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Issue Pair</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">Joint Filings</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">Jaccard Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.topPairs.map((p, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {ISSUE_NAMES[p.issues[0]] || p.issues[0]} × {ISSUE_NAMES[p.issues[1]] || p.issues[1]}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatNumber(p.count)}</td>
                  <td className="px-4 py-3 text-right font-mono text-gray-700">{p.jaccard.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings', 'Lobbying Disclosure Act Reports']} lastUpdated="February 2026" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
            <div className="text-xs text-gray-500 mt-1">Industries competing over the same issues</div>
          </Link>
          <Link href="/investigations/tech-lobbying-war" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Big Tech&apos;s Lobbying War</div>
            <div className="text-xs text-gray-500 mt-1">Tech giants battling over policy</div>
          </Link>
          <Link href="/investigations/healthcare-3-billion-bet" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏥 Healthcare&apos;s $3B Bet</div>
            <div className="text-xs text-gray-500 mt-1">The healthcare lobbying arms race</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/issues" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📋 All Issues</Link>
          <Link href="/momentum" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚀 Momentum</Link>
          <Link href="/industries" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏭 Industries</Link>
        </div>
      </section>
    </div>
  )
}
