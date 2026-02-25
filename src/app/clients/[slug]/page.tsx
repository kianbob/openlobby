import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, toTitleCase } from '@/lib/format'

interface ClientData {
  name: string
  slug: string
  state: string
  description: string
  totalSpending: number
  filings: number
  yearlySpending: { year: number; income: number }[]
  firms: string[]
  lobbyists: string[]
  issues: string[]
  sampleDescriptions: string[]
  years: number[]
}

function getClient(slug: string): ClientData | null {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'clients', `${slug}.json`)
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const client = getClient(slug)
  if (!client) return { title: 'Client Not Found' }
  return {
    title: `${toTitleCase(client.name)} — Lobbying Spending`,
    description: `${toTitleCase(client.name)} has spent ${formatCurrency(client.totalSpending)} on federal lobbying. See their firms, lobbyists, issues, and yearly spending trends.`,
  }
}

export async function generateStaticParams() {
  try {
    const index = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'client-index.json'), 'utf-8'))
    return index.slice(0, 200).map((c: { slug: string }) => ({ slug: c.slug }))
  } catch {
    return []
  }
}

export const dynamicParams = true

export default async function ClientDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const client = getClient(slug)

  if (!client) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Client Not Found</h1>
        <p className="text-gray-600">This client is not in our top profiles. <a href="/clients" className="text-primary hover:underline">Browse all clients →</a></p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Clients', href: '/clients' }, { name: toTitleCase(client.name) }]} />
      
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{toTitleCase(client.name)}</h1>
      {client.description && <p className="text-gray-600 mb-4">{client.description}</p>}
      {client.state && <p className="text-sm text-gray-500 mb-6">Based in {client.state}</p>}
      
      <ShareButtons url={`https://www.openlobby.us/clients/${slug}`} title={`${toTitleCase(client.name)} spent ${formatCurrency(client.totalSpending)} on lobbying`} />

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(client.totalSpending)}</div>
          <div className="text-xs text-gray-500">Total Lobbying Spend</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{client.filings}</div>
          <div className="text-xs text-gray-500">Quarterly Filings</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{client.firms.length}</div>
          <div className="text-xs text-gray-500">Lobbying Firms Used</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{client.lobbyists.length}</div>
          <div className="text-xs text-gray-500">Individual Lobbyists</div>
        </div>
      </div>

      {/* Yearly Spending */}
      {client.yearlySpending.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending by Year</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                  <th className="px-4 py-3 text-right font-semibold">Lobbying Spend</th>
                </tr>
              </thead>
              <tbody>
                {client.yearlySpending.map(ys => (
                  <tr key={ys.year} className="border-t border-gray-100">
                    <td className="px-4 py-3">{ys.year}</td>
                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(ys.income)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Lobbying Firms */}
      {client.firms.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Firms</h2>
          <div className="flex flex-wrap gap-2">
            {client.firms.map(firm => (
              <span key={firm} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{firm}</span>
            ))}
          </div>
        </section>
      )}

      {/* Issues */}
      {client.sampleDescriptions.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What They Lobby For</h2>
          <ul className="space-y-2">
            {client.sampleDescriptions.slice(0, 10).map((desc, i) => (
              <li key={i} className="text-gray-700 text-sm pl-4 border-l-2 border-primary/30">{desc}</li>
            ))}
          </ul>
        </section>
      )}

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
