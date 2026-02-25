import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, toTitleCase } from '@/lib/format'

const articleMap: Record<string, { href: string; title: string; desc: string }[]> = {
  HCR: [{ href: '/investigations/big-pharma-lobbying', title: 'Big Pharma\'s $452M Lobbying Machine', desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }],
  PHA: [{ href: '/investigations/big-pharma-lobbying', title: 'Big Pharma\'s $452M Lobbying Machine', desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }],
  MIA: [{ href: '/investigations/big-pharma-lobbying', title: 'Big Pharma\'s $452M Lobbying Machine', desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }],
  DEF: [{ href: '/investigations/defense-contractor-lobbying', title: 'The Defense Lobby', desc: 'Defense contractors spend millions lobbying for contracts worth billions.' }],
  CPT: [{ href: '/investigations/tech-lobbying-war', title: 'Big Tech\'s $150M Lobbying War', desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }, { href: '/investigations/ai-regulation-fight', title: 'Who\'s Lobbying to Shape AI Policy', desc: 'The AI regulation fight is the biggest lobbying battle of the decade.' }],
  SCI: [{ href: '/investigations/tech-lobbying-war', title: 'Big Tech\'s $150M Lobbying War', desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }],
  COM: [{ href: '/investigations/tech-lobbying-war', title: 'Big Tech\'s $150M Lobbying War', desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }],
  TRD: [{ href: '/investigations/tariff-lobbying-surge', title: 'The 2025 Tariff Panic', desc: 'As tariffs return, lobbying on trade surges.' }],
  TAR: [{ href: '/investigations/tariff-lobbying-surge', title: 'The 2025 Tariff Panic', desc: 'As tariffs return, lobbying on trade surges.' }],
  FOR: [{ href: '/investigations/foreign-influence', title: 'Foreign Governments Are Lobbying Congress', desc: '1,000+ foreign entities from 50+ countries lobby the US government.' }],
}

const alwaysArticles = [
  { href: '/investigations/lobbying-statistics', title: 'Federal Lobbying Statistics 2025', desc: 'The definitive stats — $15.2B total, industry breakdowns, and trends.' },
  { href: '/investigations/what-is-lobbying', title: 'What Is Lobbying? A Complete Guide', desc: 'How lobbying works, who does it, and why it matters.' },
]

function getRelatedArticles(issues: string[]) {
  const seen = new Set<string>()
  const articles: { href: string; title: string; desc: string }[] = []
  for (const issue of issues) {
    const mapped = articleMap[issue]
    if (mapped) {
      for (const a of mapped) {
        if (!seen.has(a.href)) {
          seen.add(a.href)
          articles.push(a)
        }
      }
    }
  }
  for (const a of alwaysArticles) {
    if (!seen.has(a.href)) {
      seen.add(a.href)
      articles.push(a)
    }
  }
  return articles
}

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
      <BreadcrumbJsonLd items={[{ name: 'Clients', href: '/clients' }, { name: toTitleCase(client.name) }]} />
      <Breadcrumbs items={[{ name: 'Clients', href: '/clients' }, { name: toTitleCase(client.name) }]} />
      
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{toTitleCase(client.name)}</h1>
      {client.description && <p className="text-gray-600 mb-4">{client.description}</p>}
      {client.state && <p className="text-sm text-gray-500 mb-6">Based in {client.state}</p>}
      
      <ShareButtons url={`https://www.openlobby.us/clients/${slug}`} title={`${toTitleCase(client.name)} spent ${formatCurrency(client.totalSpending)} on lobbying`} />

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8 mt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              With {formatCurrency(client.totalSpending)} in lobbying spend across {client.filings} quarterly filings, {toTitleCase(client.name)} is {client.totalSpending > 5000000 ? 'one of the biggest lobbying spenders in Washington' : client.totalSpending > 1000000 ? 'a significant lobbying presence' : 'an active lobbying client'}.{client.lobbyists?.length > 10 ? ` They deploy ${client.lobbyists.length} individual lobbyists` : ''}{client.firms?.length > 1 ? ` They work with ${client.firms.length} different lobbying firms.` : ''}
            </p>
          </div>
        </div>
      </div>

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

      {/* Related Investigations */}
      {(() => {
        const relatedArticles = getRelatedArticles(client.issues || [])
        return relatedArticles.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {relatedArticles.map(a => (
                <Link key={a.href} href={a.href} className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                  <div className="font-medium text-sm text-indigo-700">{a.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{a.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        ) : null
      })()}

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">← All Clients</a>
          <a href="/compare" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">⚖️ Compare Clients</a>
          <a href="/lobbying-roi" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">💵 ROI Calculator</a>
          <a href="/investigations" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🔍 Investigations</a>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
