'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

interface Filing {
  filing_uuid: string
  filing_type: string
  filing_type_display: string
  filing_year: number
  filing_period_display: string
  filing_document_url: string
  income: string | null
  expenses: string | null
  dt_posted: string
  registrant: { name: string }
  client: { name: string }
  lobbying_activities: {
    general_issue_code: string
    general_issue_code_display: string
    description: string
  }[]
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function formatAmount(income: string | null, expenses: string | null): string {
  const val = income ? parseFloat(income) : expenses ? parseFloat(expenses) : 0
  if (!val) return '—'
  if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(1)}M`
  if (val >= 1_000) return `$${(val / 1_000).toFixed(0)}K`
  return `$${val.toLocaleString()}`
}

function formatDate(dt: string): string {
  return new Date(dt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const typeColors: Record<string, string> = {
  'Registration': 'bg-green-100 text-green-800',
  'Q1': 'bg-blue-100 text-blue-800',
  'Q2': 'bg-blue-100 text-blue-800',
  'Q3': 'bg-blue-100 text-blue-800',
  'Q4': 'bg-blue-100 text-blue-800',
  'Amendment': 'bg-yellow-100 text-yellow-800',
  'Termination': 'bg-red-100 text-red-800',
}

const issueColors = [
  'bg-purple-100 text-purple-700', 'bg-indigo-100 text-indigo-700',
  'bg-pink-100 text-pink-700', 'bg-teal-100 text-teal-700',
  'bg-orange-100 text-orange-700', 'bg-cyan-100 text-cyan-700',
]

export default function RecentFilingsPage() {
  const [filings, setFilings] = useState<Filing[]>([])
  const [typeFilter, setTypeFilter] = useState<string>('')
  const [issueFilter, setIssueFilter] = useState<string>('')

  useEffect(() => {
    fetch('/data/recent-filings.json').then(r => r.json()).then(setFilings).catch(() => {})
  }, [])

  const allTypes = useMemo(() => {
    const s = new Set(filings.map(f => f.filing_type))
    return Array.from(s).sort()
  }, [filings])

  const allIssues = useMemo(() => {
    const m = new Map<string, string>()
    filings.forEach(f => f.lobbying_activities.forEach(a => {
      if (!m.has(a.general_issue_code)) m.set(a.general_issue_code, a.general_issue_code_display)
    }))
    return Array.from(m.entries()).sort((a, b) => a[1].localeCompare(b[1]))
  }, [filings])

  const filtered = useMemo(() => {
    return filings.filter(f => {
      if (typeFilter && f.filing_type !== typeFilter) return false
      if (issueFilter && !f.lobbying_activities.some(a => a.general_issue_code === issueFilter)) return false
      return true
    })
  }, [filings, typeFilter, issueFilter])

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Recent Filings' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Recent Filings
      </h1>
      <p className="text-gray-600 mb-6">
        Showing {filtered.length} of the 50 most recent filings. Data refreshed periodically from the{' '}
        <a href="https://lda.senate.gov" className="text-primary underline" target="_blank" rel="noopener noreferrer">
          Senate LDA API
        </a>.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
        >
          <option value="">All Filing Types</option>
          {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select
          value={issueFilter}
          onChange={e => setIssueFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
        >
          <option value="">All Issue Areas</option>
          {allIssues.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
        </select>
        {(typeFilter || issueFilter) && (
          <button onClick={() => { setTypeFilter(''); setIssueFilter('') }} className="text-sm text-primary underline">
            Clear filters
          </button>
        )}
      </div>

      {/* Filing Cards */}
      <div className="space-y-4">
        {filtered.map(f => {
          const filingTypeLabel = f.filing_type_display.includes('Registration') ? 'Registration'
            : f.filing_type_display.includes('Termination') ? 'Termination'
            : f.filing_type_display.includes('Amendment') ? 'Amendment'
            : f.filing_type
          const colorClass = typeColors[filingTypeLabel] || typeColors[f.filing_type] || 'bg-gray-100 text-gray-800'
          const description = f.lobbying_activities.map(a => a.description).filter(Boolean).join('; ')

          return (
            <div key={f.filing_uuid} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div className="flex-1 min-w-0">
                  <Link href={`/clients/${slugify(f.client.name)}`} className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                    {f.client.name}
                  </Link>
                  <div className="text-sm text-gray-500 mt-0.5">
                    Firm:{' '}
                    <Link href={`/firms/${slugify(f.registrant.name)}`} className="text-gray-700 hover:text-primary underline-offset-2 hover:underline">
                      {f.registrant.name}
                    </Link>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-lg font-bold text-gray-900">{formatAmount(f.income, f.expenses)}</span>
                  <div className="text-xs text-gray-500 mt-0.5">{formatDate(f.dt_posted)}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
                  {f.filing_type_display}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  {f.filing_period_display}
                </span>
              </div>

              {f.lobbying_activities.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {f.lobbying_activities.map((a, i) => (
                    <Link
                      key={`${a.general_issue_code}-${i}`}
                      href={`/issues/${a.general_issue_code}`}
                      className={`px-2 py-0.5 rounded text-xs font-medium hover:opacity-80 ${issueColors[i % issueColors.length]}`}
                    >
                      {a.general_issue_code_display}
                    </Link>
                  ))}
                </div>
              )}

              {description && (
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>
              )}

              <a
                href={f.filing_document_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                View official filing
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )
        })}

        {filtered.length === 0 && filings.length > 0 && (
          <div className="text-center py-12 text-gray-500">No filings match your filters.</div>
        )}
        {filings.length === 0 && (
          <div className="text-center py-12 text-gray-400">Loading filings...</div>
        )}
      </div>
    </div>
  )
}
