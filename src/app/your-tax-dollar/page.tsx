'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const LOBBYING_TOTAL = 6_019_085_780
const US_TAXPAYERS = 160_000_000

const topIndustries = [
  { name: 'Healthcare & Pharma', pct: 22, color: 'bg-red-500', emoji: '💊', desc: 'Drug pricing, Medicare, FDA regulation' },
  { name: 'Finance & Insurance', pct: 15, color: 'bg-blue-500', emoji: '🏦', desc: 'Banking regulation, crypto, insurance' },
  { name: 'Technology', pct: 14, color: 'bg-indigo-500', emoji: '💻', desc: 'AI regulation, data privacy, antitrust' },
  { name: 'Energy & Environment', pct: 12, color: 'bg-green-500', emoji: '⚡', desc: 'Oil/gas, renewables, climate policy' },
  { name: 'Defense & Security', pct: 10, color: 'bg-gray-500', emoji: '🛡️', desc: 'Military contracts, procurement' },
  { name: 'Transportation', pct: 7, color: 'bg-yellow-500', emoji: '✈️', desc: 'Airlines, shipping, infrastructure' },
  { name: 'Trade & Tariffs', pct: 6, color: 'bg-orange-500', emoji: '📦', desc: 'Import/export, trade agreements' },
  { name: 'Other', pct: 14, color: 'bg-gray-300', emoji: '🏷️', desc: 'Agriculture, education, labor, etc.' },
]

const funComparisons = [
  { amount: 4, label: 'coffees ☕' },
  { amount: 12, label: 'Netflix months 📺' },
  { amount: 25, label: 'gallons of gas ⛽' },
  { amount: 50, label: 'fast food meals 🍔' },
  { amount: 100, label: 'used textbooks 📚' },
]

function formatDollars(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)
}

export default function YourTaxDollarPage() {
  const [salary, setSalary] = useState(75000)

  const baseShare = LOBBYING_TOTAL / US_TAXPAYERS
  const personalShare = (salary / 75000) * baseShare
  const monthlyShare = personalShare / 12

  const breakdowns = useMemo(() => {
    return topIndustries.map(ind => ({
      ...ind,
      amount: personalShare * (ind.pct / 100),
    }))
  }, [personalShare])

  const comparison = funComparisons.find(c => personalShare >= c.amount) || funComparisons[0]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Your Tax Dollar & Lobbying' }]} />

      <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
        What Does Lobbying Cost <span className="text-amber-500">You</span>?
      </h1>
      <p className="text-gray-600 mb-10 max-w-3xl text-lg">
        In 2025, organizations spent a record <strong className="text-indigo-700">$6.0 billion</strong> lobbying Congress.
        That money shapes the laws governing your taxes, healthcare, and daily life.
        Drag the slider to see your share.
      </p>

      {/* Interactive Calculator */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl p-8 mb-10 border border-indigo-100 shadow-lg">
        <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          💰 Your Personal Lobbying Share
        </h2>
        <p className="text-sm text-gray-500 mb-6">Adjust your annual income to see your proportional share</p>

        {/* Slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">Annual Income</label>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-indigo-700">$</span>
              <input
                type="number"
                value={salary}
                onChange={e => setSalary(Math.max(0, Number(e.target.value) || 0))}
                className="px-3 py-1.5 border border-gray-300 rounded-lg w-36 text-lg font-semibold text-right focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none"
              />
            </div>
          </div>
          <input
            type="range"
            min={10000}
            max={500000}
            step={5000}
            value={salary}
            onChange={e => setSalary(Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-500 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-3 [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-grab"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>$10K</span>
            <span>$100K</span>
            <span>$250K</span>
            <span>$500K</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-indigo-100 text-center">
            <div className="text-4xl font-black text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>
              {formatDollars(personalShare)}
            </div>
            <p className="text-sm text-gray-600 mt-1">Your annual lobbying share</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-indigo-100 text-center">
            <div className="text-4xl font-black text-purple-600" style={{ fontFamily: 'var(--font-serif)' }}>
              {formatDollars(monthlyShare)}
            </div>
            <p className="text-sm text-gray-600 mt-1">Per month of corporate influence</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-amber-100 text-center">
            <div className="text-2xl font-bold text-amber-600">
              ≈ {Math.round(personalShare / comparison.amount)} {comparison.label}
            </div>
            <p className="text-sm text-gray-600 mt-1">That&apos;s what your share could buy</p>
          </div>
        </div>
      </div>

      {/* Industry Breakdown - Visual */}
      <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Where Your Share Goes
      </h2>
      <p className="text-gray-500 mb-6 text-sm">Your {formatDollars(personalShare)} broken down by industry</p>

      <div className="grid sm:grid-cols-2 gap-3 mb-10">
        {breakdowns.map(ind => (
          <div key={ind.name} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="text-2xl flex-shrink-0">{ind.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-800">{ind.name}</span>
                <span className="text-sm font-bold text-indigo-600">{formatDollars(ind.amount)}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mt-1.5 overflow-hidden">
                <div className={`h-full ${ind.color} rounded-full`} style={{ width: `${ind.pct * 1.5}%` }} />
              </div>
              <p className="text-xs text-gray-400 mt-1">{ind.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Perspective Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-6">
          <h3 className="font-bold mb-2 text-red-800" style={{ fontFamily: 'var(--font-serif)' }}>🎯 The ROI Problem</h3>
          <p className="text-sm text-gray-600 mb-3">
            For every $1 spent lobbying, corporations get back <strong className="text-red-700">$220 in tax benefits</strong>.
            McKesson spent $1.45M and received $11.8B in government contracts — an <strong>8,187x return</strong>.
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Your {formatDollars(personalShare)} share? Companies turn that into <strong className="text-red-700">{formatDollars(personalShare * 220)}</strong> in benefits.
          </p>
          <Link href="/lobbying-roi" className="text-sm text-indigo-600 hover:underline font-semibold">See the ROI Calculator →</Link>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-6">
          <h3 className="font-bold mb-2 text-amber-800" style={{ fontFamily: 'var(--font-serif)' }}>🚪 The Revolving Door</h3>
          <p className="text-sm text-gray-600 mb-3">
            <strong>5,000+</strong> former government officials now work as lobbyists. They charge
            <strong className="text-amber-700"> 369% more</strong> than non-government lobbyists, using insider knowledge
            and relationships to influence the same agencies they once served.
          </p>
          <Link href="/revolving-door" className="text-sm text-indigo-600 hover:underline font-semibold">See the Revolving Door →</Link>
        </div>
      </div>

      {/* The Big Picture */}
      <div className="bg-indigo-950 text-white rounded-2xl p-8 mb-10">
        <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>⚖️ The Playing Field</h3>
        <div className="grid sm:grid-cols-3 gap-6 mb-4">
          <div className="text-center">
            <div className="text-3xl font-black text-amber-400" style={{ fontFamily: 'var(--font-serif)' }}>$6.0B</div>
            <p className="text-indigo-300 text-sm mt-1">Corporate lobbying (2025)</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-amber-400" style={{ fontFamily: 'var(--font-serif)' }}>$0</div>
            <p className="text-indigo-300 text-sm mt-1">Your lobbying budget</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-amber-400" style={{ fontFamily: 'var(--font-serif)' }}>∞:1</div>
            <p className="text-indigo-300 text-sm mt-1">The influence gap</p>
          </div>
        </div>
        <p className="text-indigo-200 text-sm text-center max-w-2xl mx-auto">
          Lobbying is legal. But when corporations spend billions influencing Congress while citizens spend nothing,
          the playing field isn&apos;t level. The first step to accountability is <strong className="text-white">transparency</strong>.
        </p>
      </div>

      {/* CTAs */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>🔎 Take Action</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/tools/your-rep" className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm">
            🏛️ Find Your Rep
          </Link>
          <Link href="/investigations" className="px-5 py-2.5 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-400 transition-colors text-sm">
            📰 Read Investigations
          </Link>
          <Link href="/search" className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm">
            🔍 Search the Data
          </Link>
          <Link href="/downloads" className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm">
            📥 Download Raw Data
          </Link>
        </div>
      </div>
    </div>
  )
}
