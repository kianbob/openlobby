'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  Sample filing data (static — in production this would hit an API) */
/* ------------------------------------------------------------------ */
const sampleFilings = [
  { id: 1, client: 'Amazon.com Services LLC', firm: 'In-House', amount: 5870000, year: 2024, quarter: 'Q2', issues: 'Antitrust, Labor, Cloud Computing, Trade', lobbyists: 'Andrew Jassy (CEO oversight), Brian Huseman' },
  { id: 2, client: 'Pharmaceutical Research & Manufacturers of America (PhRMA)', firm: 'Multiple Firms', amount: 8340000, year: 2024, quarter: 'Q1', issues: 'Drug Pricing, Medicare, Patents, FDA', lobbyists: 'Stephen Ubl, Debra DeShong' },
  { id: 3, client: 'Lockheed Martin Corporation', firm: 'In-House', amount: 3420000, year: 2024, quarter: 'Q2', issues: 'Defense Authorization, F-35, Space, Missile Defense', lobbyists: 'Over 50 registered lobbyists' },
  { id: 4, client: 'Alphabet Inc.', firm: 'In-House + External', amount: 4230000, year: 2024, quarter: 'Q1', issues: 'Antitrust, AI Regulation, Privacy, Section 230', lobbyists: 'Karan Bhatia, Jan Baran' },
  { id: 5, client: 'U.S. Chamber of Commerce', firm: 'In-House', amount: 17890000, year: 2024, quarter: 'Q2', issues: 'Tax, Trade, Labor, Regulation, Energy, Healthcare', lobbyists: 'Suzanne Clark, Neil Bradley' },
  { id: 6, client: 'ExxonMobil Corporation', firm: 'In-House + External', amount: 2890000, year: 2024, quarter: 'Q1', issues: 'Energy, Climate, Trade, Tax, LNG Exports', lobbyists: 'Dan Easley, Stephen Comstock' },
  { id: 7, client: 'Meta Platforms Inc.', firm: 'In-House + External', amount: 5120000, year: 2024, quarter: 'Q2', issues: 'Privacy, Section 230, Content Moderation, VR/AR', lobbyists: 'Joel Kaplan, Kevin Martin' },
  { id: 8, client: 'Boeing Company', firm: 'In-House', amount: 3780000, year: 2024, quarter: 'Q1', issues: 'Defense, FAA, Space, Trade, Manufacturing', lobbyists: 'Ziad Ojakli, Tim Keating' },
  { id: 9, client: 'National Association of Realtors', firm: 'In-House', amount: 12350000, year: 2024, quarter: 'Q2', issues: 'Housing, Tax, Mortgage, Insurance, Land Use', lobbyists: 'Shannon McGahn, Vince Malta' },
  { id: 10, client: 'Pfizer Inc.', firm: 'In-House + External', amount: 3120000, year: 2024, quarter: 'Q1', issues: 'Drug Pricing, Patents, FDA Approval, Vaccines', lobbyists: 'Jim Greenwood (former), Sally Susman' },
  { id: 11, client: 'Microsoft Corporation', firm: 'In-House', amount: 2940000, year: 2024, quarter: 'Q2', issues: 'AI, Cloud, Cybersecurity, Gaming, Antitrust', lobbyists: 'Fred Humphries, Steve Guggenheimer' },
  { id: 12, client: 'Chevron Corporation', firm: 'In-House + External', amount: 2450000, year: 2024, quarter: 'Q1', issues: 'Energy, Environment, Trade, Tax, LNG', lobbyists: 'Bruce Niemeyer, Rhonda Zygocki' },
  { id: 13, client: 'American Hospital Association', firm: 'In-House', amount: 7230000, year: 2024, quarter: 'Q2', issues: 'Medicare, Medicaid, ACA, Hospital Funding', lobbyists: 'Rick Pollack, Stacey Hughes' },
  { id: 14, client: 'AT&T Inc.', firm: 'In-House', amount: 2780000, year: 2024, quarter: 'Q1', issues: 'Telecom, Broadband, 5G, Spectrum, Privacy', lobbyists: 'Tim McKone, Bob Quinn' },
  { id: 15, client: 'Raytheon Technologies', firm: 'In-House', amount: 2680000, year: 2024, quarter: 'Q2', issues: 'Defense, Missiles, Radar, Engines, Cyber', lobbyists: 'David Bice, Mark Russell' },
  { id: 16, client: 'Apple Inc.', firm: 'In-House + External', amount: 2340000, year: 2024, quarter: 'Q1', issues: 'App Store, Privacy, Trade/China, Antitrust', lobbyists: 'Timothy Powderly, Erik Neuenschwander' },
  { id: 17, client: 'Comcast Corporation', firm: 'In-House', amount: 3560000, year: 2024, quarter: 'Q2', issues: 'Broadband, Media, Telecom, Copyright, Net Neutrality', lobbyists: 'David Cohen, Francis Buono' },
  { id: 18, client: 'Koch Industries', firm: 'In-House + External', amount: 1890000, year: 2024, quarter: 'Q1', issues: 'Energy, Tax, Trade, Labor, Environment', lobbyists: 'Philip Ellender, Mark Holden' },
  { id: 19, client: 'Northrop Grumman', firm: 'In-House', amount: 2980000, year: 2024, quarter: 'Q2', issues: 'Defense, B-21, Space, Cybersecurity, Nuclear', lobbyists: 'Sid Ashworth, Leah Craft' },
  { id: 20, client: 'UnitedHealth Group', firm: 'In-House + External', amount: 2560000, year: 2024, quarter: 'Q1', issues: 'Medicare, Medicaid, ACA, Pharmacy Benefits', lobbyists: 'Thomas Greany, Leslie Dach' },
  { id: 21, client: 'Saudi Arabia (via FARA agents)', firm: 'Hogan Lovells, Squire Patton Boggs', amount: 4200000, year: 2024, quarter: 'Q2', issues: 'Arms Sales, Foreign Relations, Investment, Energy', lobbyists: 'Multiple registered foreign agents' },
  { id: 22, client: 'American Petroleum Institute', firm: 'In-House', amount: 2670000, year: 2024, quarter: 'Q1', issues: 'Energy, Climate, Methane, LNG, Drilling', lobbyists: 'Mike Sommers, Frank Macchiarola' },
  { id: 23, client: 'Business Roundtable', firm: 'In-House', amount: 5120000, year: 2024, quarter: 'Q2', issues: 'Corporate Tax, Trade, Immigration, Infrastructure', lobbyists: 'Joshua Bolten, Kristen Silverberg' },
  { id: 24, client: 'General Dynamics', firm: 'In-House', amount: 2340000, year: 2024, quarter: 'Q1', issues: 'Defense, Submarines, Tanks, IT Services', lobbyists: 'Lori Robinson, Mark Roualet' },
]

function formatCurrency(amount: number): string {
  if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`
  if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`
  return `$${amount}`
}

export default function LobbyingSearchPage() {
  const [query, setQuery] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'client' | 'firm' | 'issue'>('all')
  const [sortBy, setSortBy] = useState<'amount' | 'client' | 'year'>('amount')

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    let filtered = sampleFilings

    if (q) {
      filtered = filtered.filter((f) => {
        if (filterType === 'client') return f.client.toLowerCase().includes(q)
        if (filterType === 'firm') return f.firm.toLowerCase().includes(q)
        if (filterType === 'issue') return f.issues.toLowerCase().includes(q)
        return (
          f.client.toLowerCase().includes(q) ||
          f.firm.toLowerCase().includes(q) ||
          f.issues.toLowerCase().includes(q) ||
          f.lobbyists.toLowerCase().includes(q)
        )
      })
    }

    filtered.sort((a, b) => {
      if (sortBy === 'amount') return b.amount - a.amount
      if (sortBy === 'client') return a.client.localeCompare(b.client)
      return b.year - a.year
    })

    return filtered
  }, [query, filterType, sortBy])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-2 text-sm text-gray-500">
        <Link href="/analysis" className="hover:text-indigo-600">Analysis</Link>
        {' / '}
        <Link href="#" className="hover:text-indigo-600">Tools</Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Lobbying Search
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Search lobbying filings by client, firm, or issue. Data from Senate LDA disclosures covering
        726,000+ filings. For the full database, visit our{' '}
        <Link href="/search" className="text-indigo-600 hover:underline">main search page</Link>.
      </p>

      {/* Search controls */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clients, firms, issues, or lobbyists..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as typeof filterType)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="all">All Fields</option>
              <option value="client">Client Only</option>
              <option value="firm">Firm Only</option>
              <option value="issue">Issue Only</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="amount">Sort by Amount</option>
              <option value="client">Sort by Client</option>
              <option value="year">Sort by Date</option>
            </select>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Showing {results.length} of {sampleFilings.length} sample filings · {query ? `Filtered by: "${query}"` : 'Showing all'}
        </p>
      </div>

      {/* Quick filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['Defense', 'Healthcare', 'Tech', 'Energy', 'Tax', 'Trade', 'AI', 'Privacy'].map((tag) => (
          <button
            key={tag}
            onClick={() => { setQuery(tag); setFilterType('issue') }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              query.toLowerCase() === tag.toLowerCase() && filterType === 'issue'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            {tag}
          </button>
        ))}
        {query && (
          <button
            onClick={() => { setQuery(''); setFilterType('all') }}
            className="px-4 py-2 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-200 hover:bg-red-100"
          >
            Clear ✕
          </button>
        )}
      </div>

      {/* Results */}
      <div className="space-y-4">
        {results.map((filing) => (
          <div
            key={filing.id}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-indigo-200 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
                  {filing.client}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Firm: {filing.firm} · {filing.year} {filing.quarter}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Issues:</strong> {filing.issues}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Lobbyists:</strong> {filing.lobbyists}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-2xl font-black text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>
                  {formatCurrency(filing.amount)}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Quarterly Spending
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No filings match your search.</p>
          <p className="text-gray-400 mt-2">Try a different keyword or clear filters.</p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
          Want the Full Database?
        </h2>
        <p className="text-gray-600 mb-6">
          This tool shows a sample of top filings. Our full database has 726,000+ filings with complete search and filtering.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/search" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
            Full Search →
          </Link>
          <Link href="/downloads" className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-white transition-colors">
            Download Data →
          </Link>
        </div>
      </div>
    </div>
  )
}
