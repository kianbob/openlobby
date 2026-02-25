'use client'
import { useState, useEffect } from 'react'

const facts = [
  { stat: '$2,101', label: 'Average return for every $1 spent on lobbying' },
  { stat: '5,000+', label: 'Former government officials now work as lobbyists' },
  { stat: '$2.7B', label: 'Record lobbying spending in 2025 alone' },
  { stat: '2,485%', label: 'Surge in Constitution lobbying (2025 vs 2024)' },
  { stat: '561%', label: 'Increase in tariff lobbying after 2025 tariffs' },
  { stat: '8,187x', label: 'McKesson\'s return: $1.45M lobbied → $11.8B in contracts' },
  { stat: '$4.5B', label: 'Lobbying from Washington DC alone' },
  { stat: '100,909', label: 'Filings on health issues — the most lobbied category' },
]

export default function ShockingStats() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % facts.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-900 text-white py-3 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 transition-opacity duration-500">
          <span className="text-2xl font-bold text-amber-400" style={{ fontFamily: 'var(--font-serif)' }}>{facts[current].stat}</span>
          <span className="text-gray-300 text-sm">{facts[current].label}</span>
        </div>
      </div>
    </div>
  )
}
