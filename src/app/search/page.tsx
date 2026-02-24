'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, slugify } from '@/lib/format'

interface SearchResult {
  type: 'client' | 'firm' | 'lobbyist' | 'issue'
  name: string
  slug: string
  detail: string
}

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [clients, setClients] = useState<{ name: string; totalIncome: number; state?: string }[]>([])
  const [firms, setFirms] = useState<{ name: string; totalIncome: number }[]>([])
  const [lobbyists, setLobbyists] = useState<{ name: string; slug: string; filings: number; revolvingDoor?: boolean }[]>([])
  const [issues, setIssues] = useState<{ code: string; name: string; totalSpending: number }[]>([])

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
    })
  }, [])

  const results = useMemo(() => {
    if (query.length < 2) return []
    const q = query.toLowerCase()
    const out: SearchResult[] = []

    for (const c of clients) {
      if (c.name.toLowerCase().includes(q)) {
        out.push({ type: 'client', name: c.name, slug: `/clients/${slugify(c.name)}`, detail: `${formatCurrency(c.totalIncome)} spent${c.state ? ` · ${c.state}` : ''}` })
      }
      if (out.length > 100) break
    }
    for (const f of firms) {
      if (f.name.toLowerCase().includes(q)) {
        out.push({ type: 'firm', name: f.name, slug: `/firms/${slugify(f.name)}`, detail: `${formatCurrency(f.totalIncome)} income` })
      }
      if (out.length > 150) break
    }
    for (const l of lobbyists) {
      if (l.name.toLowerCase().includes(q)) {
        out.push({ type: 'lobbyist', name: l.name, slug: `/lobbyists/${l.slug}`, detail: `${l.filings} filings${l.revolvingDoor ? ' · 🏛️ Revolving Door' : ''}` })
      }
      if (out.length > 180) break
    }
    for (const i of issues) {
      if (i.name.toLowerCase().includes(q) || i.code.toLowerCase().includes(q)) {
        out.push({ type: 'issue', name: `${i.name} (${i.code})`, slug: `/issues/${i.code}`, detail: formatCurrency(i.totalSpending) })
      }
    }

    return out.slice(0, 50)
  }, [query, clients, firms, lobbyists, issues])

  const typeColors = {
    client: 'bg-blue-100 text-blue-800',
    firm: 'bg-purple-100 text-purple-800',
    lobbyist: 'bg-amber-100 text-amber-800',
    issue: 'bg-green-100 text-green-800',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Search' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Search</h1>
      <p className="text-gray-600 mb-6">Search across all clients, firms, lobbyists, and issues.</p>

      <input
        type="text"
        placeholder="Type to search... (e.g., Google, Brownstein, healthcare)"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full px-5 py-3 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none mb-6"
        autoFocus
      />

      {query.length >= 2 && (
        <p className="text-sm text-gray-500 mb-4">{results.length} results{results.length === 50 ? ' (showing first 50)' : ''}</p>
      )}

      <div className="space-y-2">
        {results.map((r, i) => (
          <Link key={i} href={r.slug} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-primary/30 transition-colors">
            <span className={`px-2 py-0.5 text-xs font-semibold rounded ${typeColors[r.type]}`}>{r.type}</span>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 truncate">{r.name}</div>
              <div className="text-sm text-gray-500">{r.detail}</div>
            </div>
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      {query.length >= 2 && results.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg mb-2">No results for &ldquo;{query}&rdquo;</p>
          <p className="text-sm">Try a different search term — we have thousands of clients, firms, and lobbyists.</p>
        </div>
      )}

      {query.length < 2 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-6xl mb-4">🔍</p>
          <p>Start typing to search across all lobbying data</p>
        </div>
      )}
    </div>
  )
}
