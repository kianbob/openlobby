'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, slugify, toTitleCase } from '@/lib/format'

interface SearchResult {
  type: 'client' | 'firm' | 'lobbyist' | 'issue'
  name: string
  slug: string
  detail: string
  spending?: number
}

const typeConfig = {
  client: { label: 'Clients', color: 'bg-blue-100 text-blue-800 border-blue-200', icon: '💰', activeColor: 'bg-blue-600 text-white' },
  firm: { label: 'Firms', color: 'bg-purple-100 text-purple-800 border-purple-200', icon: '🏢', activeColor: 'bg-purple-600 text-white' },
  lobbyist: { label: 'Lobbyists', color: 'bg-amber-100 text-amber-800 border-amber-200', icon: '👤', activeColor: 'bg-amber-500 text-white' },
  issue: { label: 'Issues', color: 'bg-green-100 text-green-800 border-green-200', icon: '📋', activeColor: 'bg-green-600 text-white' },
} as const

type FilterType = 'all' | 'client' | 'firm' | 'lobbyist' | 'issue'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterType>('all')
  const [clients, setClients] = useState<{ name: string; totalIncome?: number; spending?: number; state?: string }[]>([])
  const [firms, setFirms] = useState<{ name: string; totalIncome: number }[]>([])
  const [lobbyists, setLobbyists] = useState<{ name: string; slug: string; filings: number; revolvingDoor?: boolean }[]>([])
  const [issues, setIssues] = useState<{ code: string; name: string; totalSpending: number }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/data/client-index.json').then(r => r.json()).catch(() => []),
      fetch('/data/firm-index.json').then(r => r.json()).catch(() => []),
      fetch('/data/lobbyist-index.json').then(r => r.json()).catch(() => []),
      fetch('/data/issue-index.json').then(r => r.json()).catch(() => []),
    ]).then(([c, f, l, i]) => {
      setClients(c)
      setFirms(f)
      setLobbyists(l)
      setIssues(i)
      setLoading(false)
    })
  }, [])

  const { results, counts } = useMemo(() => {
    if (query.length < 2) return { results: [], counts: { client: 0, firm: 0, lobbyist: 0, issue: 0 } }
    const q = query.toLowerCase()
    const all: SearchResult[] = []
    const counts = { client: 0, firm: 0, lobbyist: 0, issue: 0 }

    for (const c of clients) {
      if (c.name.toLowerCase().includes(q)) {
        const spending = c.totalIncome || c.spending || 0
        counts.client++
        if (filter === 'all' || filter === 'client') {
          all.push({ type: 'client', name: c.name, slug: `/clients/${slugify(c.name)}`, detail: `${formatCurrency(spending)} spent${c.state ? ` · ${c.state}` : ''}`, spending })
        }
      }
      if (counts.client > 200) break
    }
    for (const f of firms) {
      if (f.name.toLowerCase().includes(q)) {
        counts.firm++
        if (filter === 'all' || filter === 'firm') {
          all.push({ type: 'firm', name: f.name, slug: `/firms/${slugify(f.name)}`, detail: `${formatCurrency(f.totalIncome)} income`, spending: f.totalIncome })
        }
      }
      if (counts.firm > 200) break
    }
    for (const l of lobbyists) {
      if (l.name.toLowerCase().includes(q)) {
        counts.lobbyist++
        if (filter === 'all' || filter === 'lobbyist') {
          all.push({ type: 'lobbyist', name: l.name, slug: `/lobbyists/${l.slug}`, detail: `${l.filings} filings${l.revolvingDoor ? ' · 🏛️ Revolving Door' : ''}` })
        }
      }
      if (counts.lobbyist > 200) break
    }
    for (const i of issues) {
      if (i.name.toLowerCase().includes(q) || i.code.toLowerCase().includes(q)) {
        counts.issue++
        if (filter === 'all' || filter === 'issue') {
          all.push({ type: 'issue', name: `${i.name} (${i.code})`, slug: `/issues/${i.code}`, detail: formatCurrency(i.totalSpending), spending: i.totalSpending })
        }
      }
    }

    // Sort by spending when available
    const sorted = all.sort((a, b) => (b.spending || 0) - (a.spending || 0))
    return { results: sorted.slice(0, 50), counts }
  }, [query, filter, clients, firms, lobbyists, issues])

  const totalMatches = Object.values(counts).reduce((a, b) => a + b, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Search' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Search</h1>
      <p className="text-gray-600 mb-6">Search across {clients.length.toLocaleString()} clients, {firms.length.toLocaleString()} firms, {lobbyists.length.toLocaleString()} lobbyists, and {issues.length} issue areas.</p>

      {/* Search Input */}
      <div className="relative mb-4">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search... (e.g., Google, Brownstein, healthcare, defense)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-12 pr-5 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none shadow-sm"
          autoFocus
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setFilter('all') }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* Type Filters */}
      {query.length >= 2 && (
        <div className="flex flex-wrap gap-2 mb-5">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${filter === 'all' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'}`}
          >
            All ({totalMatches})
          </button>
          {(Object.keys(typeConfig) as (keyof typeof typeConfig)[]).map(type => (
            <button
              key={type}
              onClick={() => setFilter(filter === type ? 'all' : type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${filter === type ? typeConfig[type].activeColor + ' border-transparent' : `${typeConfig[type].color} hover:opacity-80`}`}
            >
              {typeConfig[type].icon} {typeConfig[type].label} ({counts[type]})
            </button>
          ))}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="text-center py-16 text-gray-400">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full mb-4" />
          <p>Loading search index...</p>
        </div>
      )}

      {/* Results Count */}
      {!loading && query.length >= 2 && (
        <p className="text-sm text-gray-500 mb-4">
          {results.length} results{results.length === 50 ? ` (showing top 50 by spending)` : ''}
          {filter !== 'all' ? ` in ${typeConfig[filter].label}` : ''}
        </p>
      )}

      {/* Results */}
      <div className="space-y-2">
        {results.map((r, i) => (
          <Link key={`${r.type}-${i}`} href={r.slug} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all group">
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${typeConfig[r.type].color}`}>
              {typeConfig[r.type].icon} {r.type}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 truncate group-hover:text-indigo-700 transition-colors">{toTitleCase(r.name)}</div>
              <div className="text-sm text-gray-500">{r.detail}</div>
            </div>
            <svg className="w-4 h-4 text-gray-300 flex-shrink-0 group-hover:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {!loading && query.length >= 2 && results.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-5xl mb-4">🤷</p>
          <p className="text-lg mb-2">No results for &ldquo;{query}&rdquo;{filter !== 'all' ? ` in ${typeConfig[filter].label}` : ''}</p>
          {filter !== 'all' && (
            <button onClick={() => setFilter('all')} className="text-indigo-600 hover:underline text-sm mb-4 block mx-auto">
              Try searching all categories →
            </button>
          )}
          <p className="text-sm mb-6">Try a different search term — we have thousands of clients, firms, and lobbyists.</p>
          <div className="text-sm">
            <p className="font-medium text-gray-600 mb-3">Browse by category:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: 'Clients', href: '/clients' },
                { name: 'Firms', href: '/firms' },
                { name: 'Lobbyists', href: '/lobbyists' },
                { name: 'Issues', href: '/issues' },
                { name: 'Industries', href: '/industries' },
                { name: 'Investigations', href: '/investigations' },
              ].map(cat => (
                <Link key={cat.href} href={cat.href} className="px-3 py-1.5 bg-gray-100 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors">
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && query.length < 2 && (
        <div className="text-center py-16">
          <p className="text-6xl mb-4">🔍</p>
          <p className="text-gray-500 text-lg mb-2">Start typing to search across all lobbying data</p>
          <p className="text-gray-400 text-sm mb-8">Results are sorted by spending amount — biggest spenders first</p>

          <div className="mb-8">
            <p className="text-sm font-medium text-gray-500 mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Google', 'Boeing', 'PhRMA', 'Amazon', 'healthcare', 'tariffs', 'defense', 'Meta', 'Lockheed'].map(term => (
                <button key={term} onClick={() => setQuery(term)} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700 transition-all shadow-sm">
                  {term}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { name: 'Clients', href: '/clients', icon: '💰', count: clients.length.toLocaleString() },
              { name: 'Firms', href: '/firms', icon: '🏢', count: firms.length.toLocaleString() },
              { name: 'Lobbyists', href: '/lobbyists', icon: '👤', count: lobbyists.length.toLocaleString() },
              { name: 'Issues', href: '/issues', icon: '📋', count: `${issues.length}` },
            ].map(cat => (
              <Link key={cat.href} href={cat.href} className="p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-indigo-200 transition-all text-center">
                <div className="text-2xl mb-1">{cat.icon}</div>
                <div className="text-sm font-bold text-gray-900">{cat.name}</div>
                <div className="text-xs text-gray-400">{cat.count}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
