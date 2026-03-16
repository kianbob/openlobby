'use client'

import { useState } from 'react'
import Link from 'next/link'

const industries = [
  { id: 'healthcare', name: 'Healthcare & Pharma', spending: 4400000000, lobbyists: 3200, topClient: 'PhRMA', topAmount: 321000000, color: 'bg-green-500', issues: 'Drug pricing, Medicare, FDA, patents', trend: '+8%/yr' },
  { id: 'defense', name: 'Defense & Aerospace', spending: 1200000000, lobbyists: 1400, topClient: 'Boeing', topAmount: 180000000, color: 'bg-gray-500', issues: 'NDAA, weapons systems, procurement', trend: '+5%/yr' },
  { id: 'tech', name: 'Technology', spending: 1800000000, lobbyists: 1800, topClient: 'Amazon', topAmount: 220000000, color: 'bg-blue-500', issues: 'Antitrust, AI, privacy, Section 230', trend: '+15%/yr' },
  { id: 'finance', name: 'Finance & Insurance', spending: 2100000000, lobbyists: 2500, topClient: 'American Bankers Assn', topAmount: 195000000, color: 'bg-yellow-500', issues: 'Banking regulation, crypto, Dodd-Frank', trend: '+6%/yr' },
  { id: 'energy', name: 'Oil, Gas & Energy', spending: 1600000000, lobbyists: 1500, topClient: 'ExxonMobil', topAmount: 134000000, color: 'bg-orange-500', issues: 'Climate, drilling, LNG, subsidies', trend: '+3%/yr' },
  { id: 'realestate', name: 'Real Estate', spending: 950000000, lobbyists: 800, topClient: 'National Assn of Realtors', topAmount: 387000000, color: 'bg-rose-500', issues: 'Housing, tax deductions, zoning', trend: '+4%/yr' },
  { id: 'telecom', name: 'Telecom & Media', spending: 850000000, lobbyists: 900, topClient: 'Comcast', topAmount: 168000000, color: 'bg-purple-500', issues: 'Broadband, spectrum, net neutrality', trend: '+2%/yr' },
  { id: 'agriculture', name: 'Agriculture & Food', spending: 680000000, lobbyists: 750, topClient: 'American Farm Bureau', topAmount: 92000000, color: 'bg-lime-500', issues: 'Farm bill, subsidies, trade, GMOs', trend: '+4%/yr' },
  { id: 'transportation', name: 'Transportation', spending: 520000000, lobbyists: 600, topClient: 'Airlines for America', topAmount: 78000000, color: 'bg-cyan-500', issues: 'FAA, infrastructure, EVs, shipping', trend: '+7%/yr' },
  { id: 'education', name: 'Education', spending: 280000000, lobbyists: 400, topClient: 'American Council on Education', topAmount: 45000000, color: 'bg-indigo-500', issues: 'Student loans, Title IX, funding', trend: '+9%/yr' },
]

function formatCurrency(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
  return `$${(n / 1e3).toFixed(0)}K`
}

export default function IndustryComparePage() {
  const [selected, setSelected] = useState<string[]>(['healthcare', 'tech', 'defense'])
  const maxSpending = Math.max(...industries.map((i) => i.spending))

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const selectedIndustries = industries.filter((i) => selected.includes(i.id))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-2 text-sm text-gray-500">
        <Link href="/analysis" className="hover:text-indigo-600">Analysis</Link>
        {' / '}
        <span>Tools</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Industry Lobbying Comparison
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Compare lobbying spending across industries. Select industries below to see how they stack up.
        Data from 726,000+ Senate LDA filings (2018-2025).
      </p>

      {/* Industry selector */}
      <div className="flex flex-wrap gap-2 mb-10">
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => toggle(ind.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              selected.includes(ind.id)
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300'
            }`}
          >
            {ind.name}
          </button>
        ))}
      </div>

      {/* Visual comparison */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          Total Lobbying Spending (2018-2025)
        </h2>
        <div className="space-y-4">
          {selectedIndustries
            .sort((a, b) => b.spending - a.spending)
            .map((ind) => (
              <div key={ind.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900">{ind.name}</span>
                  <span className="font-bold text-gray-700">{formatCurrency(ind.spending)}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                  <div
                    className={`h-8 rounded-full ${ind.color} flex items-center justify-end pr-3 transition-all duration-500`}
                    style={{ width: `${(ind.spending / maxSpending) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">
                      {formatCurrency(ind.spending)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {selectedIndustries.length === 0 && (
          <p className="text-center text-gray-400 py-8">Select industries above to compare.</p>
        )}
      </div>

      {/* Detail cards */}
      {selectedIndustries.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {selectedIndustries.map((ind) => (
            <div key={ind.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className={`w-3 h-3 rounded-full ${ind.color} mb-3`} />
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                {ind.name}
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Spending</span>
                  <span className="font-bold">{formatCurrency(ind.spending)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Registered Lobbyists</span>
                  <span className="font-bold">{ind.lobbyists.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Top Client</span>
                  <span className="font-bold">{ind.topClient}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Top Client Spending</span>
                  <span className="font-bold">{formatCurrency(ind.topAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Growth Trend</span>
                  <span className="font-bold text-green-600">{ind.trend}</span>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Key Issues:</span>
                  <p className="text-sm text-gray-700 mt-1">{ind.issues}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Insights */}
      <div className="bg-indigo-50 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Key Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Healthcare Dominates</h3>
            <p className="text-sm text-gray-600">
              Healthcare &amp; Pharma spends more than double any other industry on lobbying. With $4.4B+ since 2018,
              it accounts for roughly 25% of all federal lobbying spending — more than defense and tech combined.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Tech Is the Fastest Growing</h3>
            <p className="text-sm text-gray-600">
              Technology lobbying is growing at 15% annually — the fastest of any sector. Driven by AI regulation,
              antitrust enforcement, and privacy legislation, tech spending has more than quadrupled since 2015.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">The Trade Group Multiplier</h3>
            <p className="text-sm text-gray-600">
              Industry totals include trade group spending. The National Association of Realtors alone accounts for
              $387M — more than many entire industries spend. Trade groups amplify industry voice beyond company-level lobbying.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Education: Small but Growing</h3>
            <p className="text-sm text-gray-600">
              Education lobbying is the smallest sector at $280M but growing at 9%/year — driven by student loan
              policy, Title IX debates, and fights over federal education funding.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link href="/industries" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
          Explore Full Industry Data →
        </Link>
      </div>
    </div>
  )
}
