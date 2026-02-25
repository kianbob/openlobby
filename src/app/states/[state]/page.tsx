import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber, slugify, toTitleCase } from '@/lib/format'

interface StateData {
  abbreviation: string
  name: string
  totalSpending: number
  totalFilings: number
  clientCount: number
  yearlySpending: { year: number; income: number }[]
  topClients: { name: string; income: number }[]
  topIssues: { code: string; income: number }[]
}

function getData(state: string): StateData | null {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'states', `${state}.json`), 'utf-8'))
  } catch { return null }
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params
  const d = getData(state)
  if (!d) return { title: 'State Not Found' }
  return {
    title: `${d.name} Lobbying — ${formatCurrency(d.totalSpending)} Spent`,
    description: `Clients based in ${d.name} have spent ${formatCurrency(d.totalSpending)} on federal lobbying. See top spenders, issues, and trends.`,
  }
}

export async function generateStaticParams() {
  try {
    const index = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'state-index.json'), 'utf-8'))
    return index.map((s: { abbreviation: string }) => ({ state: s.abbreviation }))
  } catch { return [] }
}

export const dynamicParams = true

export default async function StateDetailPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const d = getData(state)

  if (!d) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>State Not Found</h1>
        <p className="text-gray-600"><Link href="/states" className="text-primary hover:underline">Browse all states →</Link></p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'States', href: '/states' }, { name: d.name }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{d.name} Lobbying</h1>
      <p className="text-gray-500 mb-4">Federal lobbying by clients headquartered in {d.name}</p>

      <ShareButtons url={`https://www.openlobby.us/states/${state}`} title={`${d.name}: ${formatCurrency(d.totalSpending)} in federal lobbying`} />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(d.totalSpending)}</div>
          <div className="text-xs text-gray-500">Total Lobbying</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(d.clientCount)}</div>
          <div className="text-xs text-gray-500">Clients</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(d.totalFilings)}</div>
          <div className="text-xs text-gray-500">Filings</div>
        </div>
      </div>

      {/* Yearly */}
      {d.yearlySpending.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending by Year</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                  <th className="px-4 py-3 text-right font-semibold">Spending</th>
                </tr>
              </thead>
              <tbody>
                {d.yearlySpending.map(y => (
                  <tr key={y.year} className="border-t border-gray-100">
                    <td className="px-4 py-3">{y.year}</td>
                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(y.income)}</td>
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
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Biggest Spenders in {d.name}</h2>
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

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
