import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber, toTitleCase, slugify } from '@/lib/format'
import { resolveFirmSlug, resolveClientSlug, resolveLobbyistSlug } from '@/lib/resolveSlug'

const articleMap: Record<string, { href: string; title: string; desc: string }[]> = {
  HCR: [{ href: '/investigations/big-pharma-lobbying', title: "Big Pharma's $452M Lobbying Machine", desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }],
  PHA: [{ href: '/investigations/big-pharma-lobbying', title: "Big Pharma's $452M Lobbying Machine", desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }],
  DEF: [{ href: '/investigations/defense-contractor-lobbying', title: 'The Defense Lobby', desc: 'Defense contractors spend millions lobbying for contracts worth billions.' }],
  CPT: [{ href: '/investigations/tech-lobbying-war', title: "Big Tech's $150M Lobbying War", desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }],
  SCI: [{ href: '/investigations/tech-lobbying-war', title: "Big Tech's $150M Lobbying War", desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }],
  TRD: [{ href: '/investigations/tariff-lobbying-surge', title: 'The 2025 Tariff Panic', desc: 'As tariffs return, lobbying on trade surges.' }],
  FOR: [{ href: '/investigations/foreign-influence', title: 'Foreign Governments Are Lobbying Congress', desc: '1,000+ foreign entities from 50+ countries lobby the US government.' }],
  FIN: [{ href: '/investigations/follow-the-money', title: 'Follow the Money', desc: 'Tracking lobbying dollars through the financial system.' }],
  CPI: [{ href: '/investigations/crypto-lobbying-explosion', title: 'The Crypto Lobbying Explosion', desc: 'How crypto went from zero to massive lobbying presence.' }],
  GOV: [{ href: '/investigations/doge-vs-lobbying', title: 'DOGE vs. the Lobbying Machine', desc: 'Government efficiency meets the lobbying industrial complex.' }],
  TAX: [{ href: '/investigations/the-22000-percent-roi', title: 'The 22,000% ROI', desc: 'When lobbying spending yields outsized returns.' }],
  ENE: [{ href: '/investigations/follow-the-money', title: 'Follow the Money', desc: 'Tracking energy lobbying dollars and their impact.' }],
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
        if (!seen.has(a.href)) { seen.add(a.href); articles.push(a) }
      }
    }
  }
  for (const a of alwaysArticles) {
    if (!seen.has(a.href)) { seen.add(a.href); articles.push(a) }
  }
  return articles
}

interface FirmIndexEntry {
  slug: string
  name: string
  totalIncome: number
  issues?: string[]
}

function getSimilarFirms(firm: FirmData): FirmIndexEntry[] {
  try {
    const index: FirmIndexEntry[] = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'firm-index.json'), 'utf-8'))
    const firmIssues = new Set(firm.issues?.filter(Boolean) || [])
    return index
      .filter(f => f.slug !== firm.slug)
      .map(f => ({ ...f, score: (f.issues || []).filter(i => firmIssues.has(i)).length }))
      .filter(f => f.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
  } catch { return [] }
}

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
  const resolved = resolveFirmSlug(slug)
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'firms', `${resolved}.json`)
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
    title: `${toTitleCase(firm.name)} - Lobbying Firm`,
    description: `${toTitleCase(firm.name)} earned ${formatCurrency(firm.totalIncome)} in lobbying income representing ${firm.clientCount} clients.`,
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
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbJsonLd items={[{ name: 'Firms', href: '/firms' }, { name: toTitleCase(firm.name) }]} />
      <Breadcrumbs items={[{ name: 'Firms', href: '/firms' }, { name: toTitleCase(firm.name) }]} />

      <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{toTitleCase(firm.name)}</h1>

      <p className="text-gray-600 mb-4 max-w-3xl leading-relaxed">
        {toTitleCase(firm.name)} is a lobbying firm that has earned {formatCurrency(firm.totalIncome)} in lobbying income
        across {formatNumber(firm.filings)} filings, representing {firm.clientCount} clients
        {firm.years.length > 1 ? ` over ${firm.years.length} years (${Math.min(...firm.years)}–${Math.max(...firm.years)})` : ''}.
        The firm employs {firm.lobbyists.length} lobbyist{firm.lobbyists.length !== 1 ? 's' : ''}
        {firm.issues.length > 0 ? ` across ${firm.issues.length} policy issue areas` : ''}.
      </p>

      <ShareButtons url={`https://www.openlobby.us/firms/${slug}`} title={`${toTitleCase(firm.name)} earned ${formatCurrency(firm.totalIncome)} in lobbying income`} />

      {/* AI Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8 mt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {toTitleCase(firm.name)} has earned {formatCurrency(firm.totalIncome)} in lobbying income across {formatNumber(firm.filings)} filings, representing {firm.clientCount} clients.
              {firm.totalIncome > 50000000 ? ' This makes it one of the highest-earning lobbying firms in Washington.' : firm.totalIncome > 10000000 ? ' It is a significant player in the federal lobbying industry.' : ' It is an active participant in federal lobbying.'}
              {firm.lobbyists.length > 20 ? ` The firm deploys ${firm.lobbyists.length} lobbyists` : ''}
              {firm.issues.length > 0 ? ` across ${firm.issues.length} policy areas.` : '.'}
              {firm.years.length > 1 ? ` Active from ${Math.min(...firm.years)} to ${Math.max(...firm.years)}.` : ''}
            </p>
          </div>
        </div>
      </div>

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
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Clients ({firm.clientCount})</h2>
          <div className="flex flex-wrap gap-2">
            {firm.clients.slice(0, 50).map(c => (
              <a key={c} href={`/clients/${resolveClientSlug(c)}`} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors">{toTitleCase(c)}</a>
            ))}
            {firm.clients.length > 50 && (
              <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-sm">+{firm.clients.length - 50} more</span>
            )}
          </div>
        </section>
      )}

      {firm.lobbyists.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbyists ({firm.lobbyists.length})</h2>
          <div className="flex flex-wrap gap-2">
            {firm.lobbyists.slice(0, 50).map(l => (
              <a key={l} href={`/lobbyists/${resolveLobbyistSlug(l)}`} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                {toTitleCase(l)}
              </a>
            ))}
            {firm.lobbyists.length > 50 && (
              <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-sm">+{firm.lobbyists.length - 50} more</span>
            )}
          </div>
        </section>
      )}

      {firm.issues.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Issue Areas ({firm.issues.length})</h2>
          <div className="flex flex-wrap gap-2">
            {firm.issues.map(issue => (
              <Link key={issue} href={`/issues/${issue}`} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm hover:bg-indigo-100 transition-colors">{issue}</Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Analysis */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Analysis</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/network" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🕸️ Network Analysis</div>
            <div className="text-xs text-gray-500 mt-1">Explore connections between firms and lobbyists</div>
          </Link>
          <Link href="/concentration" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🎯 Market Concentration</div>
            <div className="text-xs text-gray-500 mt-1">How concentrated is the lobbying market?</div>
          </Link>
          <Link href="/revolving-door-premium" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🏛️ Revolving Door Premium</div>
            <div className="text-xs text-gray-500 mt-1">Do firms with ex-government lobbyists earn more?</div>
          </Link>
          <Link href="/filing-patterns" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">📊 Filing Patterns</div>
            <div className="text-xs text-gray-500 mt-1">Seasonal and quarterly filing trends</div>
          </Link>
        </div>
      </section>

      {/* Related Investigations */}
      {(() => {
        const articles = getRelatedArticles(firm.issues || [])
        return articles.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {articles.slice(0, 6).map(a => (
                <Link key={a.href} href={a.href} className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                  <div className="font-medium text-sm text-indigo-700">{a.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{a.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        ) : null
      })()}

      {/* Similar Firms */}
      {(() => {
        const similar = getSimilarFirms(firm)
        return similar.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Similar Firms</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {similar.map(f => (
                <Link key={f.slug} href={`/firms/${f.slug}`} className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                  <div className="font-medium text-sm text-gray-900">{toTitleCase(f.name)}</div>
                  <div className="text-xs text-gray-500 mt-1">{formatCurrency(f.totalIncome)} total income</div>
                </Link>
              ))}
            </div>
          </section>
        ) : null
      })()}

      {/* Explore More */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/firms" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">← All Firms</Link>
          <Link href="/compare" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">⚖️ Compare</Link>
          <Link href="/lobbying-roi" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">💵 ROI Calculator</Link>
          <Link href="/investigations" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🔍 Investigations</Link>
          <Link href="/network" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🕸️ Network Analysis</Link>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
