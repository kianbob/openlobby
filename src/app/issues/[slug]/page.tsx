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

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
