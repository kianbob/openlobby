import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber, slugify, toTitleCase } from '@/lib/format'

interface IssueData {
  code: string
  name: string
  totalSpending: number
  totalFilings: number
  yearlySpending: { year: number; income: number; filings: number }[]
  topClients: { name: string; income: number }[]
  topFirms: { name: string; income: number }[]
  sampleDescriptions: string[]
}

function getData(code: string): IssueData | null {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'issues', `${code}.json`), 'utf-8'))
  } catch { return null }
}

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params
  const d = getData(code)
  if (!d) return { title: 'Issue Not Found' }
  return {
    title: `${d.name} Lobbying — ${formatCurrency(d.totalSpending)} Spent`,
    description: `${formatCurrency(d.totalSpending)} has been spent lobbying on ${d.name.toLowerCase()} issues. See top clients, firms, and trends.`,
  }
}

export async function generateStaticParams() {
  try {
    const index = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'issue-index.json'), 'utf-8'))
    return index.map((i: { code: string }) => ({ code: i.code }))
  } catch { return [] }
}

export const dynamicParams = true

export default async function IssueDetailPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const d = getData(code)

  if (!d) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Issue Not Found</h1>
        <p className="text-gray-600"><Link href="/issues" className="text-primary hover:underline">Browse all issues →</Link></p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Issues', href: '/issues' }, { name: d.name }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{d.name}</h1>
      <p className="text-gray-500 mb-4">Issue Code: {d.code}</p>

      <ShareButtons url={`https://www.openlobby.us/issues/${code}`} title={`${formatCurrency(d.totalSpending)} spent lobbying on ${d.name.toLowerCase()}`} />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(d.totalSpending)}</div>
          <div className="text-xs text-gray-500">Total Lobbying Spend</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(d.totalFilings)}</div>
          <div className="text-xs text-gray-500">Filings</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{d.topClients.length}</div>
          <div className="text-xs text-gray-500">Top Clients</div>
        </div>
      </div>

      {/* Yearly Spending */}
      {d.yearlySpending.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending by Year</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                  <th className="px-4 py-3 text-right font-semibold">Spending</th>
                  <th className="px-4 py-3 text-right font-semibold">Filings</th>
                </tr>
              </thead>
              <tbody>
                {d.yearlySpending.map(y => (
                  <tr key={y.year} className="border-t border-gray-100">
                    <td className="px-4 py-3">{y.year}</td>
                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(y.income)}</td>
                    <td className="px-4 py-3 text-right text-gray-600">{formatNumber(y.filings)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Top Clients */}
      {d.topClients.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Biggest Spenders</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Client</th>
                  <th className="px-4 py-3 text-right font-semibold">Spending</th>
                </tr>
              </thead>
              <tbody>
                {d.topClients.slice(0, 25).map((c, i) => (
                  <tr key={c.name} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/clients/${slugify(c.name)}`} className="text-primary hover:underline">{toTitleCase(c.name)}</Link>
                    </td>
                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(c.income)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Top Firms */}
      {d.topFirms.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Firms</h2>
          <div className="space-y-2">
            {d.topFirms.slice(0, 15).map(f => (
              <div key={f.name} className="flex justify-between items-center py-2 border-b border-gray-100">
                <Link href={`/firms/${slugify(f.name)}`} className="text-primary hover:underline">{toTitleCase(f.name)}</Link>
                <span className="text-sm text-gray-500">{formatCurrency(f.income)}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What They Lobby For */}
      {d.sampleDescriptions.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What They Lobby For</h2>
          <ul className="space-y-2">
            {d.sampleDescriptions.slice(0, 10).map((desc, i) => (
              <li key={i} className="text-gray-700 text-sm pl-4 border-l-2 border-primary/30">{desc}</li>
            ))}
          </ul>
        </section>
      )}

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
