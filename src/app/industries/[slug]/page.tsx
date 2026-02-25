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

import IndustryChartsWrapper from './IndustryChartsWrapper'

const ALL_SLUGS = [
  'technology', 'healthcare', 'defense', 'energy', 'finance',
  'agriculture', 'transportation', 'telecom', 'real-estate', 'education',
]

const INDUSTRY_LABELS: Record<string, string> = {
  technology: 'Technology',
  healthcare: 'Healthcare',
  defense: 'Defense',
  energy: 'Energy',
  finance: 'Finance',
  agriculture: 'Agriculture',
  transportation: 'Transportation',
  telecom: 'Telecommunications',
  'real-estate': 'Real Estate',
  education: 'Education',
}

const INDUSTRY_ICONS: Record<string, string> = {
  technology: '💻', healthcare: '🏥', defense: '🛡️', energy: '⚡',
  finance: '🏦', agriculture: '🌾', transportation: '🚛', telecom: '📡',
  'real-estate': '🏠', education: '🎓',
}

const INDUSTRY_INVESTIGATIONS: Record<string, { title: string; href: string }[]> = {
  technology: [
    { title: 'The AI Regulation Fight', href: '/investigations/ai-regulation-fight' },
    { title: 'Tech Lobbying War', href: '/tech-lobbying' },
  ],
  healthcare: [
    { title: 'Healthcare is $3 Billion Bet', href: '/investigations/healthcare-3-billion-bet' },
    { title: 'Big Pharma Lobbying', href: '/investigations/big-pharma-lobbying' },
  ],
  defense: [
    { title: 'Defense Contractor Lobbying', href: '/investigations/defense-contractor-lobbying' },
  ],
  energy: [
    { title: 'Follow the Money', href: '/investigations/follow-the-money' },
  ],
  finance: [
    { title: 'The 22,000% ROI', href: '/investigations/the-22000-percent-roi' },
  ],
}

interface IndustryData {
  industry: string
  totalSpending: number
  totalFilings: number
  clientCount: number
  topClients: { name: string; state: string; spending: number; filings: number; desc: string | null }[]
  yearlySpending: { year: number; spending: number }[]
  topIssues: { code: string; count: number }[]
}

function getData(slug: string): IndustryData | null {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'industries', `${slug}.json`), 'utf-8'))
  } catch { return null }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = getData(slug)
  if (!d) return { title: 'Industry Not Found' }
  const label = INDUSTRY_LABELS[slug] || toTitleCase(d.industry)
  return {
    title: `${label} Industry Lobbying: ${formatCurrency(d.totalSpending)} in Federal Influence`,
    description: `The ${label.toLowerCase()} industry has spent ${formatCurrency(d.totalSpending)} on federal lobbying across ${formatNumber(d.totalFilings)} filings from ${formatNumber(d.clientCount)} clients. See top spenders, issues, and trends.`,
    openGraph: {
      title: `${label} Industry Lobbying`,
      description: `${formatCurrency(d.totalSpending)} spent by ${formatNumber(d.clientCount)} clients in the ${label.toLowerCase()} sector.`,
    },
  }
}

export async function generateStaticParams() {
  return ALL_SLUGS.map(slug => ({ slug }))
}

export const dynamicParams = true

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = getData(slug)

  if (!d) {
    notFound()
  }

  const label = INDUSTRY_LABELS[slug] || toTitleCase(d.industry)
  const icon = INDUSTRY_ICONS[slug] || '🏢'
  const investigations = INDUSTRY_INVESTIGATIONS[slug] || []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${label} Industry Federal Lobbying Data`,
    description: `Federal lobbying spending data for the ${label.toLowerCase()} industry, including ${formatNumber(d.clientCount)} clients and ${formatNumber(d.totalFilings)} filings.`,
    url: `https://www.openlobby.us/industries/${slug}`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    creator: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    temporalCoverage: d.yearlySpending.length > 0
      ? `${d.yearlySpending[0].year}/${d.yearlySpending[d.yearlySpending.length - 1].year}`
      : '2018/2025',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd items={[{ name: 'Industries', href: '/industries' }, { name: label }]} />
      <Breadcrumbs items={[{ name: 'Industries', href: '/industries' }, { name: label }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        {icon} {label} Industry Lobbying
      </h1>
      <p className="text-gray-500 mb-4">Federal lobbying by {label.toLowerCase()} companies and organizations</p>

      <ShareButtons url={`https://www.openlobby.us/industries/${slug}`} title={`${label} Industry: ${formatCurrency(d.totalSpending)} in federal lobbying`} />

      {/* AI Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8 mt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              The {label.toLowerCase()} industry has spent {formatCurrency(d.totalSpending)} on federal lobbying across {formatNumber(d.totalFilings)} disclosure filings. With {formatNumber(d.clientCount)} active lobbying clients, this sector is {d.totalSpending > 3000000000 ? 'among the largest lobbying forces in Washington' : d.totalSpending > 1000000000 ? 'a major lobbying presence on Capitol Hill' : 'an active participant in the federal lobbying landscape'}. This data reveals which companies have the most at stake in federal policy affecting {label.toLowerCase()}.
            </p>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
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

      {/* Yearly Spending Trend */}
      {d.yearlySpending.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending by Year</h2>
          <IndustryChartsWrapper data={d.yearlySpending} />
        </section>
      )}

      {/* Top Clients Table */}
      {d.topClients.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top {label} Spenders</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Client</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">State</th>
                  <th className="px-4 py-3 text-right font-semibold">Spending</th>
                  <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Filings</th>
                </tr>
              </thead>
              <tbody>
                {d.topClients.slice(0, 20).map((c, i) => (
                  <tr key={c.name} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/clients/${slugify(c.name)}`} className="text-primary hover:underline">{toTitleCase(c.name)}</Link>
                      {c.desc && <div className="text-xs text-gray-400 mt-0.5 truncate max-w-xs">{c.desc}</div>}
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{c.state}</td>
                    <td className="px-4 py-3 text-right font-medium">{formatCurrency(c.spending)}</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{formatNumber(c.filings)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Top Issues */}
      {d.topIssues.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Lobbying Issues</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {d.topIssues.slice(0, 12).map(issue => (
              <Link
                key={issue.code}
                href={`/issues/${issue.code}`}
                className="bg-gray-50 rounded-xl p-3 hover:bg-indigo-50 hover:border-indigo-200 border border-gray-200 transition-colors"
              >
                <div className="font-semibold text-sm text-primary">{issue.code}</div>
                <div className="text-xs text-gray-500">{formatNumber(issue.count)} filings</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Investigations */}
      {investigations.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
          <div className="space-y-3">
            {investigations.map(inv => (
              <Link
                key={inv.href}
                href={inv.href}
                className="block bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4 hover:border-indigo-300 transition-colors"
              >
                <span className="font-semibold text-indigo-900">{inv.title}</span>
                <span className="text-indigo-500 ml-2">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Analysis */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Analysis</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/concentration" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🎯 Market Concentration</div>
            <div className="text-xs text-gray-500 mt-1">How concentrated is lobbying within this industry?</div>
          </Link>
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
            <div className="text-xs text-gray-500 mt-1">Which industries are surging right now?</div>
          </Link>
          <Link href="/network" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🕸️ Network Analysis</div>
            <div className="text-xs text-gray-500 mt-1">Explore connections between firms and lobbyists</div>
          </Link>
          <Link href="/lobbying-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">💵 ROI Calculator</div>
            <div className="text-xs text-gray-500 mt-1">Calculate the return on lobbying investment</div>
          </Link>
        </div>
      </section>

      {/* Other Industries */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore Other Industries</h2>
        <div className="flex flex-wrap gap-2">
          {ALL_SLUGS.filter(s => s !== slug).map(s => (
            <Link
              key={s}
              href={`/industries/${s}`}
              className="px-3 py-1.5 bg-gray-100 rounded-full text-sm hover:bg-indigo-100 hover:text-primary transition-colors"
            >
              {INDUSTRY_ICONS[s]} {INDUSTRY_LABELS[s]}
            </Link>
          ))}
        </div>
      </section>

      {/* Explore More */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/industries" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">← All Industries</Link>
          <Link href="/compare" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">⚖️ Compare</Link>
          <Link href="/lobbying-roi" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">💵 ROI Calculator</Link>
          <Link href="/investigations" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🔍 Investigations</Link>
          <Link href="/how-lobbying-works" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📖 How Lobbying Works</Link>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
