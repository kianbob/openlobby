'use client'
import SourceCitation from '@/components/SourceCitation'
import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatNumber, toTitleCase } from '@/lib/format'

interface ForeignEntity {
  name: string
  country: string
  filings: number
  clientCount: number
  clients: string[]
}

export default function ForeignPage() {
  const [entities, setEntities] = useState<ForeignEntity[]>([])
  const [search, setSearch] = useState('')
  const [shown, setShown] = useState(50)

  useEffect(() => {
    fetch('/data/foreign-entities.json').then(r => r.json()).then(setEntities).catch(() => {})
  }, [])

  const filtered = entities.filter(e => !search ||
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.country?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Foreign Lobbying' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Foreign Lobbying in Washington</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        Foreign governments, companies, and organizations that lobby the US Congress. 
        Disclosed on LDA filings when a lobbying client has foreign entity affiliations.
      </p>

      <input type="text" placeholder="Search by entity name or country..." value={search}
        onChange={e => { setSearch(e.target.value); setShown(50) }}
        className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none mb-6" />

      <p className="text-sm text-gray-500 mb-4">{formatNumber(filtered.length)} foreign entities</p>

      {entities.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Entity</th>
                  <th className="px-4 py-3 text-left font-semibold">Country</th>
                  <th className="px-4 py-3 text-right font-semibold">Filings</th>
                  <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Clients</th>
                </tr>
              </thead>
              <tbody>
                {filtered.slice(0, shown).map((e, i) => (
                  <tr key={e.name} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3 font-medium">{toTitleCase(e.name)}</td>
                    <td className="px-4 py-3 text-gray-600">{e.country || 'Unknown'}</td>
                    <td className="px-4 py-3 text-right">{formatNumber(e.filings)}</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden sm:table-cell">{e.clientCount || e.clients?.length || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
