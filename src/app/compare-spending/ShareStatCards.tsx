'use client'

import { useState } from 'react'

interface Comparison {
  bigNumber: string
  headline: string
  description: string
  source: string
  tweet: string
  color: string
  emoji: string
}

export default function ShareStatCards({ comparisons }: { comparisons: Comparison[] }) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)

  const copyTweet = async (tweet: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(tweet)
      setCopiedIdx(idx)
      setTimeout(() => setCopiedIdx(null), 2000)
    } catch {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = tweet
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedIdx(idx)
      setTimeout(() => setCopiedIdx(null), 2000)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {comparisons.map((c, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className={`bg-gradient-to-br ${c.color} px-6 py-8 text-white`}>
            <div className="text-5xl mb-2">{c.emoji}</div>
            <div className="text-5xl font-black mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
              {c.bigNumber}
            </div>
            <div className="text-xl font-bold opacity-95">{c.headline}</div>
          </div>
          <div className="bg-white px-6 py-5">
            <p className="text-gray-700 mb-3">{c.description}</p>
            <p className="text-xs text-gray-400 mb-4">{c.source}</p>
            <button
              onClick={() => copyTweet(c.tweet, i)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
            >
              {copiedIdx === i ? (
                <>✅ Copied!</>
              ) : (
                <>📋 Share This Stat</>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
