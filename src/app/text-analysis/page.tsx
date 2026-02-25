'use client'
import Link from 'next/link'

import { useState, useEffect, useMemo } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber } from '@/lib/format'

interface WordEntry {
  word: string
  count: number
}

interface TrendingWord {
  word: string
  latestCount: number
  avgPrior: number
  growthPercent: number
}

interface BillEntry {
  bill: string
  count: number
  years: number[]
}

interface YearlyTopWord {
  word: string
  count: number
}

interface ClientWord {
  word: string
  clients: string[]
  clientCount: number
}

interface TextData {
  totalDescriptions: number
  topWords: WordEntry[]
  trendingWords: TrendingWord[]
  topBills: BillEntry[]
  yearlyTopWords: Record<string, YearlyTopWord[]>
  latestYear: number
}

export default function TextAnalysisPage() {
  const [data, setData] = useState<TextData | null>(null)
  const [selectedWord, setSelectedWord] = useState<string | null>(null)
  const [wordClients, setWordClients] = useState<ClientWord | null>(null)

  useEffect(() => {
    fetch('/data/text-analysis.json').then(r => r.json()).then(setData)
  }, [])

  // When user clicks a word in topWords, try to find it in yearlyTopWords to show usage
  useEffect(() => {
    if (!data || !selectedWord) {
      setWordClients(null)
      return
    }
    // Search through the data for client associations — for now show yearly breakdown
    setWordClients(null)
  }, [data, selectedWord])

  const maxCount = useMemo(() => {
    if (!data) return 1
    return data.topWords[0]?.count || 1
  }, [data])

  if (!data) {
    return <div className="max-w-7xl mx-auto px-4 py-12"><p className="text-gray-500">Loading text analysis…</p></div>
  }

  const top50Words = data.topWords.slice(0, 50)
  const trendingTop20 = data.trendingWords.slice(0, 20)
  const topBills = data.topBills.slice(0, 20)

  // Get yearly count for selected word
  const yearlyBreakdown = selectedWord
    ? Object.entries(data.yearlyTopWords || {}).map(([year, words]) => {
        const found = words.find(w => w.word === selectedWord)
        return { year, count: found?.count || 0 }
      }).filter(e => e.count > 0)
    : []

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Text Analysis' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        What Are They Lobbying About?
      </h1>
      <p className="text-lg text-gray-600 mb-2">
        Language analysis of {data.totalDescriptions.toLocaleString()} lobbying activity descriptions
      </p>
      <p className="text-sm text-gray-500 mb-8">
        Click any word to see its yearly breakdown
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">By analyzing the text of 650,000+ lobbying disclosures, we can see exactly what lobbyists are telling Congress. The most frequently mentioned bills, the buzzwords that signal industry priorities, and the specific policy language that reveals what companies really want. This is the closest thing to reading lobbyists&apos; playbooks.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Words - Left Column (2/3) */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Most Frequent Words in Lobbying Descriptions
            </h2>
            <div className="space-y-1">
              {top50Words.map((w, i) => (
                <button
                  key={w.word}
                  onClick={() => setSelectedWord(selectedWord === w.word ? null : w.word)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selectedWord === w.word ? 'bg-indigo-50 ring-1 ring-indigo-200' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xs text-gray-400 font-mono w-6 text-right">{i + 1}</span>
                  <span className="font-medium text-gray-900 w-32 truncate">{w.word}</span>
                  <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(w.count / maxCount) * 100}%`,
                        backgroundColor: selectedWord === w.word ? '#4f46e5' : '#818cf8',
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-20 text-right">{formatNumber(w.count)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Selected Word Detail */}
          {selectedWord && yearlyBreakdown.length > 0 && (
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                &ldquo;{selectedWord}&rdquo; by Year
              </h3>
              <div className="space-y-2">
                {yearlyBreakdown.map(({ year, count }) => (
                  <div key={year} className="flex items-center gap-2">
                    <span className="text-sm text-indigo-700 w-12">{year}</span>
                    <div className="flex-1 h-4 bg-indigo-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${(count / Math.max(...yearlyBreakdown.map(e => e.count))) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-indigo-600 w-16 text-right">{formatNumber(count)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trending Words */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              🔥 Trending Words
            </h2>
            <p className="text-xs text-gray-500 mb-3">Fastest growing in usage</p>
            <div className="space-y-2">
              {trendingTop20.map((w, i) => (
                <div key={w.word} className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono w-5 text-right">{i + 1}</span>
                  <span className="text-sm font-medium text-gray-900 flex-1 truncate">{w.word}</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    +{w.growthPercent > 10000 ? `${(w.growthPercent / 1000).toFixed(0)}K` : w.growthPercent.toLocaleString()}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Bills */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              📋 Most Mentioned Bills
            </h2>
            <div className="space-y-2">
              {topBills.map((b, i) => {
                // Extract bill type and number for congress.gov link (e.g., "H.R. 1234" -> hr1234)
                const billMatch = b.bill.match(/^(H\.?R\.?|S\.?|H\.?J\.?\s*RES\.?|S\.?J\.?\s*RES\.?|H\.?\s*CON\.?\s*RES\.?|S\.?\s*CON\.?\s*RES\.?)\s*(\d+)/i)
                const congressUrl = billMatch
                  ? `https://www.congress.gov/bill/118th-congress/${billMatch[1].replace(/\./g, '').replace(/\s+/g, '-').toLowerCase()}-bill/${billMatch[2]}`
                  : null
                return (
                  <div key={b.bill} className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-mono w-5 text-right">{i + 1}</span>
                    {congressUrl ? (
                      <a href={congressUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-700 hover:underline flex-1">{b.bill} ↗</a>
                    ) : (
                      <span className="text-sm font-medium text-indigo-700 flex-1">{b.bill}</span>
                    )}
                    <span className="text-xs text-gray-500">{formatNumber(b.count)} mentions</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="2025" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
            <div className="text-xs text-gray-500 mt-1">How lobbying language reveals strategy</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers</div>
          </Link>
          <Link href="/investigations/what-is-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📖 What Is Lobbying?</div>
            <div className="text-xs text-gray-500 mt-1">The complete guide</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/issues" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📋 All Issues</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/issue-battles" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">⚔️ Issue Battles</Link>
        </div>
      </section>
    </div>
  )
}
