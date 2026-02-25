'use client'
import Link from 'next/link'
import SourceCitation from '@/components/SourceCitation'
import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatNumber, toTitleCase, slugify } from '@/lib/format'

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

  // Count by country for top countries
  const countryCounts: Record<string, number> = {}
  entities.forEach(e => {
    if (e.country) countryCounts[e.country] = (countryCounts[e.country] || 0) + 1
  })
  const topCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Foreign Lobbying' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Foreign Lobbying in Washington</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        Foreign governments, companies, and organizations that lobby the US Congress.
        Disclosed on LDA filings when a lobbying client has foreign entity affiliations.
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">Foreign governments and corporations spend millions lobbying the U.S. Congress — and it&apos;s perfectly legal. The UK leads with hundreds of filings, followed by Canada, Japan, and South Korea. But the most controversial foreign lobbying comes from adversarial nations: Chinese companies like Huawei and TikTok, Saudi Arabian interests, and Russian-linked entities. This data shows which countries are most actively trying to shape American policy.</p>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(entities.length)}</div>
          <div className="text-xs text-gray-500">Foreign Entities</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{Object.keys(countryCounts).length}</div>
          <div className="text-xs text-gray-500">Countries Represented</div>
        </div>
        <div className="bg-amber-50 rounded-xl p-4">
          <div className="text-sm text-amber-800 leading-relaxed">
            <strong>💡 Did you know?</strong> Foreign lobbying is legal under FARA (Foreign Agents Registration Act). Countries like Saudi Arabia, Japan, and South Korea spend millions yearly to influence US policy.
          </div>
        </div>
      </div>

      {/* Top Countries */}
      {topCountries.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Countries by Entity Count</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {topCountries.map(([country, count]) => (
              <button
                key={country}
                onClick={() => setSearch(country)}
                className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>{count}</div>
                <div className="text-sm text-gray-600">{country}</div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Search */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>All Foreign Entities</h2>
        <input type="text" placeholder="Search by entity name or country..." value={search}
          onChange={e => { setSearch(e.target.value); setShown(50) }}
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none mb-4" />
        <p className="text-sm text-gray-500 mb-4">{formatNumber(filtered.length)} foreign entities{search ? ` matching "${search}"` : ''}</p>
      </section>

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
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Clients</th>
                </tr>
              </thead>
              <tbody>
                {filtered.slice(0, shown).map((e, i) => (
                  <tr key={e.name} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/clients/${slugify(e.name)}`} className="font-medium text-primary hover:underline">{toTitleCase(e.name)}</Link>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => setSearch(e.country)} className="text-gray-600 hover:text-primary hover:underline cursor-pointer">{e.country || 'Unknown'}</button>
                    </td>
                    <td className="px-4 py-3 text-right">{formatNumber(e.filings)}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {(e.clients || []).slice(0, 3).map(c => (
                          <Link key={c} href={`/clients/${slugify(c)}`} className="text-xs bg-indigo-50 px-2 py-0.5 rounded text-indigo-600 hover:bg-indigo-100 transition-colors">{toTitleCase(c)}</Link>
                        ))}
                        {(e.clients || []).length > 3 && <span className="text-xs text-gray-400">+{e.clients.length - 3}</span>}
                      </div>
                    </td>
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

      {/* Related */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/foreign-influence" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🌍 Foreign Influence</div>
            <div className="text-xs text-gray-500 mt-1">1,000+ entities from 50+ countries</div>
          </Link>
          <Link href="/investigations/tariff-lobbying-surge" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📦 The Tariff Panic</div>
            <div className="text-xs text-gray-500 mt-1">Trade lobbying and foreign interests</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/geographic" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🗺️ Geographic Analysis</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/issues/FOR" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📋 Foreign Relations Issues</Link>
        </div>
      </section>

      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="February 2026" />
    </div>
  )
}
