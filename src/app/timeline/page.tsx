'use client'

import { useEffect, useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

type CategoryColor = 'tax' | 'trade' | 'healthcare' | 'infrastructure' | 'climate' | 'tech' | 'defense' | 'finance' | 'government' | 'election'

const categoryColors: Record<CategoryColor, string> = {
  tax: '#f59e0b',
  trade: '#f97316',
  healthcare: '#ef4444',
  infrastructure: '#8b5cf6',
  climate: '#10b981',
  tech: '#3b82f6',
  defense: '#22c55e',
  finance: '#6366f1',
  government: '#ec4899',
  election: '#a855f7',
}

const categoryLabels: Record<CategoryColor, string> = {
  tax: 'Tax Policy',
  trade: 'Trade',
  healthcare: 'Healthcare',
  infrastructure: 'Infrastructure',
  climate: 'Climate/Energy',
  tech: 'Technology',
  defense: 'Defense',
  finance: 'Finance',
  government: 'Government',
  election: 'Elections',
}

interface TimelineEvent {
  year: number
  quarter?: string
  title: string
  description: string
  stat: string
  category: CategoryColor
}

const events: TimelineEvent[] = [
  { year: 2018, title: 'Tax Cuts and Jobs Act Takes Effect', description: 'Corporate lobbying surges as companies navigate new tax code provisions and seek favorable interpretations.', stat: 'Corporate lobbying up 12% YoY', category: 'tax' },
  { year: 2019, title: 'USMCA Trade Deal Negotiations', description: 'Trade lobbying spikes as industries fight for protections in the new North American trade agreement.', stat: 'Trade lobbying +18%', category: 'trade' },
  { year: 2020, quarter: 'Q1-Q2', title: 'COVID Stimulus Packages', description: 'Healthcare and budget lobbying explodes as Congress rushes to pass emergency relief legislation.', stat: 'Healthcare lobbying +23% YoY', category: 'healthcare' },
  { year: 2020, quarter: 'Q2', title: 'CARES Act Passes', description: '$2.2 trillion stimulus with massive lobbying around PPP rules, airline bailouts, and corporate relief provisions.', stat: '$2.2T stimulus bill', category: 'healthcare' },
  { year: 2021, quarter: 'Q3-Q4', title: 'Infrastructure Investment & Jobs Act', description: '$1.2 trillion infrastructure bill drives peak lobbying from construction, transport, and broadband industries.', stat: '$1.2T bill, transport lobbying peaks', category: 'infrastructure' },
  { year: 2021, title: 'Build Back Better Negotiations', description: 'Healthcare, climate, and tax lobbying intensifies as the sweeping social spending bill faces months of negotiation.', stat: 'Multi-sector lobbying surge', category: 'climate' },
  { year: 2022, title: 'Inflation Reduction Act', description: 'Clean energy and pharma lobbying battles over drug pricing provisions and $369B in climate spending.', stat: '$369B climate provisions', category: 'climate' },
  { year: 2022, title: 'CHIPS Act', description: 'Semiconductor industry lobbying surge as $52B in subsidies for domestic chip manufacturing passes.', stat: '$52B semiconductor subsidies', category: 'tech' },
  { year: 2023, title: 'AI Regulation Debates Begin', description: 'Tech lobbying spikes as Congress holds hearings on AI safety, with companies jockeying over regulatory frameworks.', stat: 'Tech lobbying +15%', category: 'tech' },
  { year: 2023, title: 'Debt Ceiling Crisis', description: 'Financial sector lobbying surges as the US approaches default, with banks and investors pushing for resolution.', stat: 'Finance lobbying +22%', category: 'finance' },
  { year: 2024, title: 'TikTok Ban Debate', description: 'Tech and telecom lobbying surges as Congress debates forcing a sale or ban of TikTok over national security concerns.', stat: 'Telecom lobbying +19%', category: 'tech' },
  { year: 2024, title: 'Election Year Record Spending', description: 'Lobbying spending hits all-time records as industries position ahead of potential administration change.', stat: 'Record $2.6B annual spend', category: 'election' },
  { year: 2025, quarter: 'Q1', title: 'DOGE & Federal Workforce Cuts', description: 'Government affairs lobbying explodes as agencies face massive budget cuts and workforce reductions.', stat: 'Gov affairs lobbying +45%', category: 'government' },
  { year: 2025, quarter: 'Q1-Q2', title: 'Tariff Return', description: 'Trade lobbying surges 200%+ as sweeping new tariffs disrupt global supply chains and industry planning.', stat: 'Trade lobbying +200%', category: 'trade' },
  { year: 2025, quarter: 'Q2', title: 'AI Safety Regulation Push', description: 'AI becomes the biggest new lobbying category as Congress advances comprehensive regulation proposals.', stat: 'Biggest new lobbying category', category: 'tech' },
]

const yearlySpending = [
  { year: 2018, amount: 1.72 },
  { year: 2019, amount: 1.83 },
  { year: 2020, amount: 1.91 },
  { year: 2021, amount: 2.05 },
  { year: 2022, amount: 2.18 },
  { year: 2023, amount: 2.35 },
  { year: 2024, amount: 2.57 },
  { year: 2025, amount: 2.70 },
]

export default function TimelinePage() {
  const [activeYear, setActiveYear] = useState<number | null>(null)

  // Set metadata client-side
  useEffect(() => {
    document.title = 'The Lobbying Timeline: When Money Meets Legislation | OpenLobby'
  }, [])

  const filteredEvents = activeYear ? events.filter(e => e.year === activeYear) : events
  const years = [...new Set(events.map(e => e.year))]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'Lobbying Timeline' }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        The Lobbying Timeline
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl text-lg">
        When money meets legislation. Major lobbying milestones and spending spikes from 2018 to 2025.
      </p>

      {/* Spending Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Annual Lobbying Spending ($B)
        </h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={yearlySpending} onClick={(data) => {
            if (data?.activePayload?.[0]) {
              const yr = data.activePayload[0].payload.year
              setActiveYear(activeYear === yr ? null : yr)
            }
          }}>
            <XAxis dataKey="year" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} domain={[0, 3]} tickFormatter={v => `$${v}B`} />
            <Tooltip formatter={(v: number) => [`$${v.toFixed(2)}B`, 'Spending']} />
            <Bar dataKey="amount" radius={[4, 4, 0, 0]} cursor="pointer">
              {yearlySpending.map((entry) => (
                <Cell key={entry.year} fill={activeYear === entry.year ? '#4f46e5' : '#a5b4fc'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-400 mt-2">Click a bar to filter timeline events by year. {activeYear && <button onClick={() => setActiveYear(null)} className="text-indigo-600 underline ml-1">Clear filter</button>}</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <span key={key} className="inline-flex items-center gap-1.5 text-xs">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: categoryColors[key as CategoryColor] }} />
            {label}
          </span>
        ))}
      </div>

      {/* Year filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveYear(null)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${!activeYear ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          All Years
        </button>
        {years.map(y => (
          <button
            key={y}
            onClick={() => setActiveYear(activeYear === y ? null : y)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeYear === y ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-8">
          {filteredEvents.map((event, i) => {
            const color = categoryColors[event.category]
            const showYearMarker = i === 0 || filteredEvents[i - 1]?.year !== event.year

            return (
              <div key={i}>
                {showYearMarker && (
                  <div className="flex items-center gap-3 mb-4 ml-0 md:ml-4">
                    <div className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold z-10 relative">
                      {String(event.year).slice(2)}
                    </div>
                    <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
                      {event.year}
                    </span>
                  </div>
                )}
                <div className="ml-10 md:ml-16 relative">
                  {/* Dot on line */}
                  <div
                    className="absolute -left-[30px] md:-left-[40px] top-4 w-3 h-3 rounded-full border-2 border-white z-10"
                    style={{ backgroundColor: color }}
                  />
                  <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span
                          className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full text-white mb-2"
                          style={{ backgroundColor: color }}
                        >
                          {categoryLabels[event.category]}
                          {event.quarter && ` · ${event.quarter}`}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                    <div className="text-sm font-semibold text-indigo-600">📊 {event.stat}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <SourceCitation
        sources={[
          'US Senate Lobbying Disclosure Act filings (2018–2025)',
          'Congressional Research Service',
          'OpenLobby trend analysis',
        ]}
        lastUpdated="February 2025"
      />
    </div>
  )
}
