import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency } from '@/lib/format'

interface FirmData {
  name: string
  slug: string
  totalIncome: number
  filings: number
  yearlyIncome: { year: number; income: number }[]
  clients: string[]
  lobbyists: string[]
  issues: string[]
  clientCount: number
  years: number[]
}

function getFirm(slug: string): FirmData | null {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'firms', `${slug}.json`)
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const firm = getFirm(slug)
  if (!firm) return { title: 'Firm Not Found' }
  return {
    title: `${firm.name} — Lobbying Firm`,
    description: `${firm.name} earned ${formatCurrency(firm.totalIncome)} in lobbying income representing ${firm.clientCount} clients.`,
  }
}

export async function generateStaticParams() {
  try {
    const index = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'firm-index.json'), 'utf-8'))
    return index.slice(0, 200).map((f: { slug: string }) => ({ slug: f.slug }))
  } catch {
    return []
  }
}

export const dynamicParams = true

export default async function FirmDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const firm = getFirm(slug)

  if (!firm) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Firm Not Found</h1>
        <p className="text-gray-600"><a href="/firms" className="text-primary hover:underline">Browse all firms →</a></p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Firms', href: '/firms' }, { name: firm.name }]} />
      
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>{firm.name}</h1>
      
      <ShareButtons url={`https://www.openlobby.us/firms/${slug}`} title={`${firm.name} earned ${formatCurrency(firm.totalIncome)} in lobbying income`} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(firm.totalIncome)}</div>
          <div className="text-xs text-gray-500">Total Income</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{firm.clientCount}</div>
          <div className="text-xs text-gray-500">Clients</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{firm.lobbyists.length}</div>
          <div className="text-xs text-gray-500">Lobbyists</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{firm.filings}</div>
          <div className="text-xs text-gray-500">Filings</div>
        </div>
      </div>

      {firm.yearlyIncome.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Income by Year</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                  <th className="px-4 py-3 text-right font-semibold">Lobbying Income</th>
                </tr>
              </thead>
              <tbody>
                {firm.yearlyIncome.map(yi => (
                  <tr key={yi.year} className="border-t border-gray-100">
                    <td className="px-4 py-3">{yi.year}</td>
                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(yi.income)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {firm.clients.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Clients</h2>
          <div className="flex flex-wrap gap-2">
            {firm.clients.slice(0, 50).map(c => (
              <span key={c} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{c}</span>
            ))}
            {firm.clients.length > 50 && (
              <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-sm">+{firm.clients.length - 50} more</span>
            )}
          </div>
        </section>
      )}

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
