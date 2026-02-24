import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber, slugify } from '@/lib/format'

interface LobbyistData {
  id: number
  name: string
  slug: string
  revolvingDoor: boolean
  governmentPositions: string[]
  totalFilings: number
  yearlyActivity: { year: number; filings: number; clients: number; firms: number; issues: string[] }[]
  topClients: { name: string; filings: number }[]
  firms: { name: string; filings: number }[]
  issues: string[]
}

function getData(slug: string): LobbyistData | null {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'lobbyists', `${slug}.json`), 'utf-8'))
  } catch { return null }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = getData(slug)
  if (!d) return { title: 'Lobbyist Not Found' }
  return {
    title: `${d.name} — Lobbyist Profile`,
    description: `${d.name} has appeared in ${formatNumber(d.totalFilings)} federal lobbying filings.${d.revolvingDoor ? ' Former government official.' : ''}`,
  }
}

export async function generateStaticParams() {
  try {
    const index = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'lobbyist-index.json'), 'utf-8'))
    return index.slice(0, 200).map((l: { slug: string }) => ({ slug: l.slug }))
  } catch { return [] }
}

export const dynamicParams = true

export default async function LobbyistDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = getData(slug)

  if (!d) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbyist Not Found</h1>
        <p className="text-gray-600"><Link href="/lobbyists" className="text-primary hover:underline">Browse all lobbyists →</Link></p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Lobbyists', href: '/lobbyists' }, { name: d.name }]} />

      <div className="flex items-start gap-3 mb-2">
        <h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{d.name}</h1>
        {d.revolvingDoor && <span className="mt-2 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">🏛️ Revolving Door</span>}
      </div>

      {d.governmentPositions.length > 0 && (
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">Former Government Position{d.governmentPositions.length > 1 ? 's' : ''}:</p>
          {d.governmentPositions.map((pos, i) => (
            <p key={i} className="text-gray-700 font-medium">{pos}</p>
          ))}
        </div>
      )}

      <ShareButtons url={`https://www.openlobby.us/lobbyists/${slug}`} title={`${d.name} — federal lobbyist profile`} />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(d.totalFilings)}</div>
          <div className="text-xs text-gray-500">Total Filings</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{d.firms.length}</div>
          <div className="text-xs text-gray-500">Firms</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{d.topClients.length}</div>
          <div className="text-xs text-gray-500">Clients</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{d.issues.length}</div>
          <div className="text-xs text-gray-500">Issue Areas</div>
        </div>
      </div>

      {/* Yearly Activity */}
      {d.yearlyActivity.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Activity by Year</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                  <th className="px-4 py-3 text-right font-semibold">Filings</th>
                  <th className="px-4 py-3 text-right font-semibold">Clients</th>
                  <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Firms</th>
                </tr>
              </thead>
              <tbody>
                {d.yearlyActivity.map(y => (
                  <tr key={y.year} className="border-t border-gray-100">
                    <td className="px-4 py-3">{y.year}</td>
                    <td className="px-4 py-3 text-right font-medium">{y.filings}</td>
                    <td className="px-4 py-3 text-right">{y.clients}</td>
                    <td className="px-4 py-3 text-right hidden sm:table-cell">{y.firms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Firms */}
      {d.firms.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Firms</h2>
          <div className="space-y-2">
            {d.firms.map(f => (
              <div key={f.name} className="flex justify-between items-center py-2 border-b border-gray-100">
                <Link href={`/firms/${slugify(f.name)}`} className="text-primary hover:underline">{f.name}</Link>
                <span className="text-sm text-gray-500">{f.filings} filings</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Top Clients */}
      {d.topClients.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Clients</h2>
          <div className="space-y-2">
            {d.topClients.slice(0, 20).map(c => (
              <div key={c.name} className="flex justify-between items-center py-2 border-b border-gray-100">
                <Link href={`/clients/${slugify(c.name)}`} className="text-primary hover:underline">{c.name}</Link>
                <span className="text-sm text-gray-500">{c.filings} filings</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
