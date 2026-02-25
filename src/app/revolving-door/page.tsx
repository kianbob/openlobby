'use client'
import SourceCitation from '@/components/SourceCitation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatNumber, slugify, toTitleCase } from '@/lib/format'

interface RevDoorLobbyist {
  id: number
  name: string
  positions: string[]
  firms: string[]
  clients: string[]
  filings: number
}

const dedupePositions = (positions: string[]) => {
  return positions.filter((pos, i, arr) => {
    const normalized = pos.toLowerCase().replace(/[^a-z]/g, '').slice(0, 40)
    return !arr.slice(0, i).some(p => p.toLowerCase().replace(/[^a-z]/g, '').slice(0, 40) === normalized)
  })
}

export default function RevolvingDoorPage() {
  const [lobbyists, setLobbyists] = useState<RevDoorLobbyist[]>([])
  const [search, setSearch] = useState('')
  const [shown, setShown] = useState(50)

  useEffect(() => {
    fetch('/data/revolving-door.json').then(r => r.json()).then(setLobbyists).catch(() => {})
  }, [])

  const filtered = lobbyists.filter(l => !search ||
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.positions?.some(p => p.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Revolving Door' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        Former government officials who now lobby their old colleagues. These lobbyists disclosed prior government positions 
        on their LDA filings — the pipeline from public service to K Street.
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">The revolving door between government and K Street is one of the most powerful — and troubling — dynamics in Washington. These 5,000 former officials bring insider knowledge of how agencies work, personal relationships with decision-makers, and expertise that money alone can&apos;t buy. When a former White House advisor or congressional chief of staff becomes a lobbyist, their old colleagues take their calls. This is how influence really works.</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
        <p className="text-amber-800 text-sm">
          <strong>🏛️ {formatNumber(lobbyists.length)} lobbyists</strong> in our data disclosed previous government positions. 
          They leverage inside knowledge and relationships to influence the same agencies they once served.
        </p>
      </div>

      <input type="text" placeholder="Search by name or government position..." value={search}
        onChange={e => { setSearch(e.target.value); setShown(50) }}
        className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none mb-6" />

      <p className="text-sm text-gray-500 mb-4">{formatNumber(filtered.length)} lobbyists with government experience</p>

      {lobbyists.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <>
          <div className="space-y-4">
            {filtered.slice(0, shown).map(l => (
              <div key={l.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link href={`/lobbyists/${slugify(l.name)}`} className="text-lg font-semibold text-primary hover:underline">{toTitleCase(l.name)}</Link>
                    <div className="mt-1 space-y-1">
                      {dedupePositions(l.positions).slice(0, 1).map((pos, i) => (
                        <p key={i} className="text-sm text-amber-700 bg-amber-50 inline-block px-2 py-0.5 rounded mr-2">🏛️ {pos}</p>
                      ))}
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      {l.filings} filings · {l.firms?.length || 0} firms · {l.clients?.length || 0} clients
                    </div>
                  </div>
                </div>
                {l.firms?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {l.firms.slice(0, 5).map(f => (
                      <span key={f} className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">{f}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {shown < filtered.length && (
            <div className="text-center mt-6">
              <button onClick={() => setShown(s => s + 50)} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Show More ({formatNumber(filtered.length - shown)} remaining)
              </button>
            </div>
          )}
        </>
      )}
      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="2025" />
    </div>
  )
}
