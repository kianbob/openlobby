import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber, slugify, toTitleCase } from '@/lib/format'

import StateChartsWrapper from './StateChartsWrapper'

interface StateData {
  abbreviation: string
  name: string
  totalSpending: number
  totalFilings: number
  clientCount: number
  yearlySpending: { year: number; income: number }[]
  topClients: { name: string; income: number }[]
  topIssues: { code: string; income: number }[]
  perCapita: number
  population: number
  nationalRank: number
  perCapitaRank: number
}

function getStateFiles(): string[] {
  try {
    return fs.readdirSync(path.join(process.cwd(), 'public', 'data', 'states'))
      .filter(f => f.endsWith('.json'))
  } catch { return [] }
}

function getData(slug: string): StateData | null {
  try {
    const abbr = slug.toUpperCase()
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'states', `${abbr}.json`), 'utf-8'))
  } catch { return null }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = getData(slug)
  if (!d) return { title: 'State Not Found' }
  return {
    title: `${d.name} Lobbying: ${formatCurrency(d.totalSpending)} in Federal Influence`,
    description: `${d.name} clients have spent ${formatCurrency(d.totalSpending)} on federal lobbying across ${formatNumber(d.totalFilings)} filings from ${formatNumber(d.clientCount)} clients. Per capita: $${d.perCapita.toFixed(2)}.`,
    openGraph: {
      title: `${d.name} Lobbying`,
      description: `${formatCurrency(d.totalSpending)} in federal lobbying from ${formatNumber(d.clientCount)} ${d.name} clients.`,
    },
  }
}

export async function generateStaticParams() {
  return getStateFiles().map(f => ({ slug: f.replace('.json', '').toLowerCase() }))
}

export const dynamicParams = true

export default async function StateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = getData(slug)

  if (!d) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>State Not Found</h1>
        <p className="text-gray-600"><Link href="/states" className="text-primary hover:underline">Browse all states →</Link></p>
      </div>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${d.name} Federal Lobbying Data`,
    description: `Federal lobbying data for clients based in ${d.name}, including ${formatNumber(d.clientCount)} clients and ${formatNumber(d.totalFilings)} filings.`,
    url: `https://www.openlobby.us/states/${slug}`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    creator: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    temporalCoverage: d.yearlySpending.length > 0
      ? `${d.yearlySpending[0].year}/${d.yearlySpending[d.yearlySpending.length - 1].year}`
      : '2018/2025',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd items={[{ name: 'States', href: '/states' }, { name: d.name }]} />
      <Breadcrumbs items={[{ name: 'States', href: '/states' }, { name: d.name }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        🏛️ {d.name} ({d.abbreviation}) Lobbying
      </h1>
      <p className="text-gray-500 mb-4">Federal lobbying by clients headquartered in {d.name}</p>

      <ShareButtons url={`https://www.openlobby.us/states/${slug}`} title={`${d.name}: ${formatCurrency(d.totalSpending)} in federal lobbying`} />

      {/* AI Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8 mt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {d.name} ranks #{d.nationalRank} nationally in total lobbying spending and #{d.perCapitaRank} in per-capita spending. With {formatNumber(d.clientCount)} active lobbying clients spending {formatCurrency(d.totalSpending)} across {formatNumber(d.totalFilings)} filings, {d.name} {d.nationalRank <= 5 ? 'is one of the most influential states in federal lobbying' : d.nationalRank <= 15 ? 'is a significant player in the federal lobbying landscape' : 'has a targeted lobbying presence in Washington'}.
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
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>${d.perCapita.toFixed(2)}</div>
          <div className="text-xs text-gray-500">Per Capita</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>#{d.nationalRank}</div>
          <div className="text-xs text-gray-500">National Rank</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>#{d.perCapitaRank}</div>
          <div className="text-xs text-gray-500">Per Capita Rank</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(d.clientCount)}</div>
          <div className="text-xs text-gray-500">Clients</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(d.population)}</div>
          <div className="text-xs text-gray-500">Population</div>
        </div>
      </div>

      {/* Yearly Spending Trend */}
      {d.yearlySpending.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending by Year</h2>
          <StateChartsWrapper data={d.yearlySpending} />
        </section>
      )}

      {/* Top Clients Table */}
      {d.topClients.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top {d.name} Spenders</h2>
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

      {/* Top Issues */}
      {d.topIssues.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Lobbying Issues</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {d.topIssues.slice(0, 12).map(issue => (
              <Link
                key={issue.code}
                href={`/issues/${issue.code.toLowerCase()}`}
                className="bg-gray-50 rounded-xl p-3 hover:bg-indigo-50 hover:border-indigo-200 border border-gray-200 transition-colors"
              >
                <div className="font-semibold text-sm text-primary">{issue.code}</div>
                <div className="text-xs text-gray-500">{formatCurrency(issue.income)}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
