'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency } from '@/lib/format'

// Based on real data: ~$6.0B lobbying in 2025, ~160M US taxpayers
const LOBBYING_PER_TAXPAYER = 37.50 // $6.0B / 160M

const topIndustries = [
  { name: 'Healthcare & Pharma', pct: 22, color: 'bg-red-500', amount: 3.71, desc: 'Drug pricing, Medicare, FDA regulation' },
  { name: 'Finance & Insurance', pct: 15, color: 'bg-blue-500', amount: 2.53, desc: 'Banking regulation, crypto, insurance' },
  { name: 'Technology', pct: 14, color: 'bg-indigo-500', amount: 2.36, desc: 'AI regulation, data privacy, antitrust' },
  { name: 'Energy & Environment', pct: 12, color: 'bg-green-500', amount: 2.03, desc: 'Oil/gas, renewables, climate policy' },
  { name: 'Defense & Security', pct: 10, color: 'bg-gray-500', amount: 1.69, desc: 'Military contracts, procurement' },
  { name: 'Transportation', pct: 7, color: 'bg-yellow-500', amount: 1.18, desc: 'Airlines, shipping, infrastructure' },
  { name: 'Trade & Tariffs', pct: 6, color: 'bg-orange-500', amount: 1.01, desc: 'Import/export, trade agreements' },
  { name: 'Other', pct: 14, color: 'bg-gray-300', amount: 2.36, desc: 'Agriculture, education, labor, etc.' },
]

export default function YourTaxDollarPage() {
  const [salary, setSalary] = useState(75000)
  const personalShare = (salary / 75000) * LOBBYING_PER_TAXPAYER

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Your Tax Dollar & Lobbying' }]} />
      
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        What Does Lobbying Cost You?
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        In 2025, organizations spent $2.7 billion lobbying Congress — a record high. 
        That money influences the laws that affect your taxes, healthcare, and daily life.
        Here&apos;s how it breaks down.
      </p>

      {/* Calculator */}
      <div className="bg-indigo-50 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-indigo-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Your Personal Lobbying Share
        </h2>
        <label className="block text-sm text-gray-700 mb-2">Enter your annual income:</label>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-lg font-bold text-indigo-700">$</span>
          <input
            type="number"
            value={salary}
            onChange={e => setSalary(Number(e.target.value) || 0)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-48 text-lg"
          />
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="text-3xl font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>
            ${personalShare.toFixed(2)}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Your proportional share of the $2.7 billion spent lobbying Congress in 2025.
            That&apos;s ${(personalShare / 12).toFixed(2)}/month worth of corporate influence on the laws that govern your life.
          </p>
        </div>
      </div>

      {/* Where the money goes */}
      <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Where the Lobbying Money Goes
      </h2>
      <div className="space-y-3 mb-8">
        {topIndustries.map(ind => (
          <div key={ind.name} className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-700 font-medium flex-shrink-0">{ind.name}</div>
            <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
              <div className={`h-full ${ind.color} rounded-full flex items-center px-3`} style={{ width: `${ind.pct}%` }}>
                <span className="text-xs text-white font-bold">{ind.pct}%</span>
              </div>
            </div>
            <div className="w-16 text-right text-sm font-medium">${ind.amount.toFixed(2)}</div>
          </div>
        ))}
        <p className="text-xs text-gray-500 mt-2">*Based on $6.0B total lobbying spend and approximate industry shares from our data.</p>
      </div>

      {/* Key context */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>The ROI Problem</h3>
          <p className="text-sm text-gray-600">
            Academic research shows lobbying returns $6-$220 for every $1 spent. Our data shows even higher: 
            McKesson spent $1.45M lobbying and received $11.8B in government contracts — an 8,187x return.
          </p>
          <Link href="/lobbying-roi" className="text-sm text-indigo-600 hover:underline mt-2 block">See the ROI Calculator →</Link>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door</h3>
          <p className="text-sm text-gray-600">
            5,000 former government officials now work as lobbyists. They use their insider knowledge 
            and relationships to influence the same agencies they once served.
          </p>
          <Link href="/revolving-door" className="text-sm text-indigo-600 hover:underline mt-2 block">See the Revolving Door →</Link>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Why This Matters</h3>
        <p className="text-sm text-gray-600">
          Lobbying is legal. But when companies can spend billions to influence Congress while 
          individual citizens can spend nothing, the playing field isn&apos;t level. The first step 
          to accountability is transparency — and that&apos;s what OpenLobby provides.
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/investigations" className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Read Our Investigations
          </Link>
          <Link href="/search" className="text-sm px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50">
            Search the Data
          </Link>
        </div>
      </div>
    </div>
  )
}
