import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber, slugify, toTitleCase } from '@/lib/format'

import IssueChartsWrapper from './IssueChartsWrapper'

const articleMap: Record<string, { href: string; title: string; desc: string }[]> = {
  HCR: [{ href: '/investigations/big-pharma-lobbying', title: "Big Pharma's $452M Lobbying Machine", desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }, { href: '/investigations/healthcare-3-billion-bet', title: "Healthcare's $3 Billion Bet", desc: "The healthcare industry's massive lobbying investment." }],
  PHA: [{ href: '/investigations/big-pharma-lobbying', title: "Big Pharma's $452M Lobbying Machine", desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }],
  DEF: [{ href: '/investigations/defense-contractor-lobbying', title: 'The Defense Lobby', desc: 'Defense contractors spend millions lobbying for contracts worth billions.' }],
  CPT: [{ href: '/investigations/tech-lobbying-war', title: "Big Tech's $150M Lobbying War", desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }, { href: '/investigations/ai-regulation-fight', title: "Who's Lobbying to Shape AI Policy", desc: 'The AI regulation fight is the biggest lobbying battle of the decade.' }],
  SCI: [{ href: '/investigations/tech-lobbying-war', title: "Big Tech's $150M Lobbying War", desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }],
  COM: [{ href: '/investigations/tech-lobbying-war', title: "Big Tech's $150M Lobbying War", desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }],
  TRD: [{ href: '/investigations/tariff-lobbying-surge', title: 'The 2025 Tariff Panic', desc: 'As tariffs return, lobbying on trade surges.' }],
  TAR: [{ href: '/investigations/tariff-lobbying-surge', title: 'The 2025 Tariff Panic', desc: 'As tariffs return, lobbying on trade surges.' }],
  FOR: [{ href: '/investigations/foreign-influence', title: 'Foreign Governments Are Lobbying Congress', desc: '1,000+ foreign entities from 50+ countries lobby the US government.' }],
  FIN: [{ href: '/investigations/follow-the-money', title: 'Follow the Money', desc: 'Tracking lobbying dollars through the financial system.' }],
  BNK: [{ href: '/investigations/follow-the-money', title: 'Follow the Money', desc: 'Tracking lobbying dollars through the financial system.' }],
  CPI: [{ href: '/investigations/crypto-lobbying-explosion', title: 'The Crypto Lobbying Explosion', desc: 'How crypto went from zero to massive lobbying presence.' }],
  GOV: [{ href: '/investigations/doge-vs-lobbying', title: 'DOGE vs. the Lobbying Machine', desc: 'Government efficiency meets the lobbying industrial complex.' }],
  TAX: [{ href: '/investigations/the-22000-percent-roi', title: 'The 22,000% ROI', desc: 'When lobbying spending yields outsized returns.' }],
  ENE: [{ href: '/investigations/follow-the-money', title: 'Follow the Money', desc: 'Tracking energy lobbying dollars and their impact.' }],
}

const alwaysArticles = [
  { href: '/investigations/lobbying-statistics', title: 'Federal Lobbying Statistics 2025', desc: 'The definitive stats — $15.2B total, industry breakdowns, and trends.' },
  { href: '/investigations/what-is-lobbying', title: 'What Is Lobbying? A Complete Guide', desc: 'How lobbying works, who does it, and why it matters.' },
]

const issueCodeToIndustry: Record<string, { page: string; label: string }> = {
  CPT: { page: '/tech-lobbying', label: 'Tech Lobbying' },
  SCI: { page: '/tech-lobbying', label: 'Tech Lobbying' },
  COM: { page: '/tech-lobbying', label: 'Tech Lobbying' },
  HCR: { page: '/pharmaceutical-lobbying', label: 'Pharma Lobbying' },
  PHA: { page: '/pharmaceutical-lobbying', label: 'Pharma Lobbying' },
  MIA: { page: '/pharmaceutical-lobbying', label: 'Pharma Lobbying' },
  DEF: { page: '/defense-lobbying', label: 'Defense Lobbying' },
}

function getRelatedArticles(code: string) {
  const seen = new Set<string>()
  const articles: { href: string; title: string; desc: string }[] = []
  const mapped = articleMap[code]
  if (mapped) {
    for (const a of mapped) { seen.add(a.href); articles.push(a) }
  }
  for (const a of alwaysArticles) {
    if (!seen.has(a.href)) { seen.add(a.href); articles.push(a) }
  }
  return articles
}

interface IssueData {
  code: string
  name: string
  totalSpending: number
  totalFilings: number
  yearlySpending: { year: number; income: number; filings: number }[]
  topClients: { name: string; income: number }[]
  topFirms: { name: string; income: number }[]
  sampleDescriptions: string[]
  quarterlyTrend: { quarter: string; filings: number; spending: number }[]
  totalEstimatedSpending: number
}

function getIssueFiles(): string[] {
  try {
    return fs.readdirSync(path.join(process.cwd(), 'public', 'data', 'issues'))
      .filter(f => f.endsWith('.json'))
  } catch { return [] }
}

function getData(slug: string): IssueData | null {
  try {
    const code = slug.toUpperCase()
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'issues', `${code}.json`), 'utf-8'))
  } catch { return null }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = getData(slug)
  if (!d) return { title: 'Issue Not Found' }
  return {
    title: `${d.name} (${d.code}) Lobbying: ${formatCurrency(d.totalSpending)} in Federal Influence`,
    description: `${d.name} lobbying totals ${formatCurrency(d.totalSpending)} across ${formatNumber(d.totalFilings)} filings. See top clients, firms, spending trends, and sample lobbying descriptions.`,
    openGraph: {
      title: `${d.name} Lobbying`,
      description: `${formatCurrency(d.totalSpending)} spent on ${d.name.toLowerCase()} lobbying across ${formatNumber(d.totalFilings)} filings.`,
    },
  }
}

export async function generateStaticParams() {
  return getIssueFiles().map(f => ({ slug: f.replace('.json', '').toLowerCase() }))
}

export const dynamicParams = true

export default async function IssueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = getData(slug)

  if (!d) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${d.name} Federal Lobbying Data`,
    description: `Federal lobbying data for ${d.name} (${d.code}), including ${formatNumber(d.totalFilings)} filings totaling ${formatCurrency(d.totalSpending)}.`,
    url: `https://www.openlobby.us/issues/${slug}`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    creator: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    temporalCoverage: d.yearlySpending.length > 0
      ? `${d.yearlySpending[0].year}/${d.yearlySpending[d.yearlySpending.length - 1].year}`
      : '2018/2025',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd items={[{ name: 'Issues', href: '/issues' }, { name: d.name }]} />
      <Breadcrumbs items={[{ name: 'Issues', href: '/issues' }, { name: d.name }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        📋 {d.name} ({d.code})
      </h1>
      <p className="text-gray-500 mb-4">Federal lobbying activity for the {d.name.toLowerCase()} issue area</p>

      <ShareButtons url={`https://www.openlobby.us/issues/${slug}`} title={`${d.name}: ${formatCurrency(d.totalSpending)} in federal lobbying`} />

      {/* AI Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8 mt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {d.name} ({d.code}) has attracted {formatCurrency(d.totalSpending)} in lobbying spending across {formatNumber(d.totalFilings)} filings. {d.totalSpending > 2000000000 ? 'This is one of the most heavily lobbied issue areas in federal policy.' : d.totalSpending > 500000000 ? 'This is a major lobbying issue area with significant corporate interest.' : 'This issue area sees targeted lobbying from organizations with specific policy interests.'}
            </p>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(d.totalSpending)}</div>
          <div className="text-xs text-gray-500">Total Spending</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(d.totalFilings)}</div>
          <div className="text-xs text-gray-500">Total Filings</div>
        </div>
        {d.totalEstimatedSpending > 0 && (
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(d.totalEstimatedSpending)}</div>
            <div className="text-xs text-gray-500">Estimated Spending</div>
          </div>
        )}
      </div>

      {/* Yearly Spending Trend */}
      {d.yearlySpending.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending by Year</h2>
          <IssueChartsWrapper data={d.yearlySpending} />
        </section>
      )}

      {/* Top Clients Table */}
      {d.topClients.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Clients</h2>
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
                {d.topClients.slice(0, 20).map((c, i) => (
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

      {/* Top Firms Table */}
      {d.topFirms.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Lobbying Firms</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Firm</th>
                  <th className="px-4 py-3 text-right font-semibold">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {d.topFirms.slice(0, 20).map((f, i) => (
                  <tr key={f.name} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/firms/${slugify(f.name)}`} className="text-primary hover:underline">{toTitleCase(f.name)}</Link>
                    </td>
                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(f.income)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Sample Descriptions */}
      {d.sampleDescriptions && d.sampleDescriptions.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Sample Lobbying Descriptions</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
            {d.sampleDescriptions.slice(0, 10).map((desc, i) => (
              <p key={i} className="text-sm text-gray-700 leading-relaxed">
                <span className="text-gray-400 mr-2">•</span>{desc}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Related Analysis */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Analysis</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
            <div className="text-xs text-gray-500 mt-1">Which issues are surging right now?</div>
          </Link>
          <Link href="/issue-battles" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">⚔️ Issue Battles</div>
            <div className="text-xs text-gray-500 mt-1">See which sides are spending on competing issues</div>
          </Link>
          <Link href="/filing-patterns" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">📅 Seasonal Patterns</div>
            <div className="text-xs text-gray-500 mt-1">When does lobbying peak throughout the year?</div>
          </Link>
          <Link href="/geographic" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🗺️ Geographic Analysis</div>
            <div className="text-xs text-gray-500 mt-1">Where lobbying dollars come from by state</div>
          </Link>
          {issueCodeToIndustry[d.code] && (
            <Link href={issueCodeToIndustry[d.code].page} className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <div className="font-medium text-sm text-purple-700">🏭 {issueCodeToIndustry[d.code].label}</div>
              <div className="text-xs text-gray-500 mt-1">Industry overview and top spenders</div>
            </Link>
          )}
        </div>
      </section>

      {/* Related Investigations */}
      {(() => {
        const articles = getRelatedArticles(d.code)
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
          <Link href="/issues" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">← All Issues</Link>
          <Link href="/momentum" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚀 Trends</Link>
          <Link href="/filing-patterns" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📊 Filing Patterns</Link>
          <Link href="/investigations" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🔍 Investigations</Link>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
