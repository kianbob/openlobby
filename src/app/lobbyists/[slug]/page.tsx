import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber, slugify, toTitleCase } from '@/lib/format'
import { resolveLobbyistSlug, resolveFirmSlug, resolveClientSlug } from '@/lib/resolveSlug'

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
  TAX: [{ href: '/investigations/the-22000-percent-roi', title: 'The 22,000% ROI', desc: 'When lobbying spending yields outsized returns.' }],
}

const alwaysArticles = [
  { href: '/investigations/lobbying-statistics', title: 'Federal Lobbying Statistics 2025', desc: 'The definitive stats — $37.7B total, industry breakdowns, and trends.' },
  { href: '/investigations/what-is-lobbying', title: 'What Is Lobbying? A Complete Guide', desc: 'How lobbying works, who does it, and why it matters.' },
]

function getRelatedArticles(issues: string[], revolvingDoor: boolean) {
  const seen = new Set<string>()
  const articles: { href: string; title: string; desc: string }[] = []
  if (revolvingDoor) {
    articles.push({ href: '/investigations/revolving-door-exposed', title: 'The Revolving Door Exposed', desc: 'How former government officials become the most powerful lobbyists.' })
    seen.add('/investigations/revolving-door-exposed')
  }
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
  const resolved = resolveLobbyistSlug(slug)
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'lobbyists', `${resolved}.json`), 'utf-8'))
  } catch { return null }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = getData(slug)
  if (!d) return { title: 'Lobbyist Not Found' }
  return {
    title: `${toTitleCase(d.name)} — Lobbyist Profile`,
    description: `${toTitleCase(d.name)} has appeared in ${formatNumber(d.totalFilings)} federal lobbying filings.${d.revolvingDoor ? ' Former government official.' : ''}`,
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
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbJsonLd items={[{ name: 'Lobbyists', href: '/lobbyists' }, { name: d.name }]} />
      <Breadcrumbs items={[{ name: 'Lobbyists', href: '/lobbyists' }, { name: d.name }]} />

      <div className="flex items-start gap-3 mb-2">
        <h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{toTitleCase(d.name)}</h1>
        {d.revolvingDoor && <span className="mt-2 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">🏛️ Revolving Door</span>}
      </div>

      {d.governmentPositions.length > 0 && (() => {
        // Deduplicate similar positions (often same role with slight text variations)
        const unique = d.governmentPositions.filter((pos, i, arr) => {
          const normalized = pos.toLowerCase().replace(/[^a-z]/g, '').slice(0, 40)
          return !arr.slice(0, i).some(p => p.toLowerCase().replace(/[^a-z]/g, '').slice(0, 40) === normalized)
        })
        return (
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">Former Government Position{unique.length > 1 ? 's' : ''}:</p>
            {unique.map((pos, i) => (
              <p key={i} className="text-gray-700 font-medium">{pos}</p>
            ))}
          </div>
        )
      })()}

      <ShareButtons url={`https://www.openlobby.us/lobbyists/${slug}`} title={`${toTitleCase(d.name)} — federal lobbyist profile`} />

      {/* AI Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8 mt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {toTitleCase(d.name)} has appeared in {formatNumber(d.totalFilings)} federal lobbying filings
              {d.firms.length > 1 ? ` across ${d.firms.length} firms` : d.firms.length === 1 ? ` at ${toTitleCase(d.firms[0].name)}` : ''},
              representing {d.topClients.length} client{d.topClients.length !== 1 ? 's' : ''}.
              {d.revolvingDoor ? ' As a former government official, they bring insider expertise to their lobbying work — part of Washington\'s "revolving door."' : ''}
              {d.issues.length > 0 ? ` Active across ${d.issues.length} policy area${d.issues.length > 1 ? 's' : ''}.` : ''}
            </p>
          </div>
        </div>
      </div>

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

      {/* Issue Areas */}
      {d.issues.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Issue Areas</h2>
          <div className="flex flex-wrap gap-2">
            {d.issues.map(issue => (
              <Link key={issue} href={`/issues/${issue}`} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">{issue}</Link>
            ))}
          </div>
        </section>
      )}

      {/* Yearly Activity */}
      {d.yearlyActivity.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Filing History</h2>
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
                <Link href={`/firms/${resolveFirmSlug(f.name)}`} className="text-primary hover:underline">{toTitleCase(f.name)}</Link>
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
                <Link href={`/clients/${resolveClientSlug(c.name)}`} className="text-primary hover:underline">{toTitleCase(c.name)}</Link>
                <span className="text-sm text-gray-500">{c.filings} filings</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Analysis */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Analysis</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/revolving-door-premium" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🏛️ Revolving Door Premium</div>
            <div className="text-xs text-gray-500 mt-1">Do ex-government lobbyists earn more?</div>
          </Link>
          <Link href="/network" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🕸️ Network Analysis</div>
            <div className="text-xs text-gray-500 mt-1">Explore connections between firms and lobbyists</div>
          </Link>
          <Link href="/concentration" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🎯 Market Concentration</div>
            <div className="text-xs text-gray-500 mt-1">How concentrated is the lobbying market?</div>
          </Link>
        </div>
      </section>

      {/* Related Investigations */}
      {(() => {
        const articles = getRelatedArticles(d.issues || [], d.revolvingDoor)
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

      {/* Explore More */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/lobbyists" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">← All Lobbyists</Link>
          <Link href="/revolving-door" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🏛️ Revolving Door</Link>
          <Link href="/network" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🕸️ Network Analysis</Link>
          <Link href="/investigations" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🔍 Investigations</Link>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
