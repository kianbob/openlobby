import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShareButtons from '@/components/ShareButtons'
import { formatCurrency, formatNumber } from '@/lib/format'

export const metadata: Metadata = {
  title: 'Lobbying Spending by Industry: Rankings & Data',
  description: 'Compare lobbying spending across every industry. Healthcare leads at $4.4B, finance $2.1B, tech $1.8B, energy $1.6B. Interactive charts from 726K+ filings (2018-2026).',
}

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

interface IndustrySummary {
  industry: string
  totalSpending: number
  clientCount: number
  filings: number
}

function getData(): IndustrySummary[] {
  try {
    const data: IndustrySummary[] = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'industry-summary.json'), 'utf-8'))
    return data.sort((a, b) => b.totalSpending - a.totalSpending)
  } catch { return [] }
}

export default function IndustriesPage() {
  const industries = getData()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Which industry spends the most on lobbying?', acceptedAnswer: { '@type': 'Answer', text: 'Healthcare is the top lobbying industry at $4.4 billion since 2018, followed by finance ($2.1B), technology ($1.8B), and energy ($1.6B). Healthcare lobbying covers drug pricing, insurance regulation, and Medicare/Medicaid policy.' } },
      { '@type': 'Question', name: 'How much does the tech industry spend on lobbying?', acceptedAnswer: { '@type': 'Answer', text: 'The technology industry has spent approximately $1.8 billion on federal lobbying since 2018. Major spenders include Google, Meta, Amazon, Apple, and Microsoft, lobbying on issues like antitrust, AI regulation, and data privacy.' } },
      { '@type': 'Question', name: 'How much total lobbying spending is there by industry?', acceptedAnswer: { '@type': 'Answer', text: 'Total federal lobbying spending across all industries exceeds $37.7 billion from 2018-2026. This covers 726,000+ quarterly filings from 37,994 clients across healthcare, finance, technology, energy, defense, and dozens of other sectors.' } },
    ],
  }

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbJsonLd items={[{ name: 'Industries' }]} />
      <Breadcrumbs items={[{ name: 'Industries' }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by Industry</h1>
      <p className="text-gray-500 mb-4">Which sectors spend the most to influence Washington?</p>

      <ShareButtons url="https://www.openlobby.us/industries" title="Federal lobbying spending by industry — OpenLobby" />

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8 mt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Federal lobbying is dominated by a handful of industries with the most at stake in government policy. Healthcare and technology lead all sectors, each spending over $6 billion on lobbying. These 10 industry categories cover the major sectors actively working to shape federal legislation and regulation.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {industries.map((ind, i) => {
          const slug = ind.industry
          const label = INDUSTRY_LABELS[slug] || slug
          const icon = INDUSTRY_ICONS[slug] || '🏢'
          return (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="text-3xl">{icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 font-mono">#{i + 1}</span>
                  <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{label}</h2>
                </div>
                <div className="flex gap-4 mt-1 text-sm text-gray-500">
                  <span>{formatNumber(ind.clientCount)} clients</span>
                  <span>{formatNumber(ind.filings)} filings</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(ind.totalSpending)}</div>
                <div className="text-xs text-gray-400">total spending</div>
              </div>
            </Link>
          )
        })}
      </div>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">Industry-by-industry breakdown</div>
          </Link>
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
            <div className="text-xs text-gray-500 mt-1">Industries battling over the same issues</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
            <div className="text-xs text-gray-500 mt-1">Where industry lobbying dollars go</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/tech-lobbying" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">💻 Tech Lobbying</Link>
          <Link href="/pharmaceutical-lobbying" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">💊 Pharma Lobbying</Link>
          <Link href="/defense-lobbying" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🛡️ Defense Lobbying</Link>
          <Link href="/issues" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📋 All Issues</Link>
        </div>
      </section>
    </div>
    </>
  )
}
