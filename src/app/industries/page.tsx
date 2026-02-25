import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShareButtons from '@/components/ShareButtons'
import { formatCurrency, formatNumber } from '@/lib/format'

export const metadata: Metadata = {
  title: 'Lobbying by Industry — Which Sectors Spend the Most? — OpenLobby',
  description: 'Explore federal lobbying spending by industry. See which sectors — from healthcare to defense — spend the most to influence Washington.',
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

  return (
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
    </div>
  )
}
