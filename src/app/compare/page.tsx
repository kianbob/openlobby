'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatCurrency, slugify } from '@/lib/format'

interface Entity {
  name: string
  totalIncome: number
  filings: number
  slug?: string
}

export default function ComparePage() {
  const [mode, setMode] = useState<'clients' | 'firms'>('clients')
  const [entities, setEntities] = useState<Entity[]>([])
  const [search1, setSearch1] = useState('')
  const [search2, setSearch2] = useState('')
  const [entity1, setEntity1] = useState<Entity | null>(null)
  const [entity2, setEntity2] = useState<Entity | null>(null)
  const [showDropdown1, setShowDropdown1] = useState(false)
  const [showDropdown2, setShowDropdown2] = useState(false)

  useEffect(() => {
    const file = mode === 'clients' ? '/data/client-index.json' : '/data/firm-index.json'
    fetch(file).then(r => r.json()).then(d => setEntities(d)).catch(() => [])
    setEntity1(null)
    setEntity2(null)
    setSearch1('')
    setSearch2('')
  }, [mode])

  const filtered1 = useMemo(() => {
    if (search1.length < 2) return []
    const q = search1.toLowerCase()
    return entities.filter(e => e.name.toLowerCase().includes(q)).slice(0, 10)
  }, [search1, entities])

  const filtered2 = useMemo(() => {
    if (search2.length < 2) return []
    const q = search2.toLowerCase()
    return entities.filter(e => e.name.toLowerCase().includes(q)).slice(0, 10)
  }, [search2, entities])

  const maxSpending = Math.max(entity1?.totalIncome || 0, entity2?.totalIncome || 0) || 1
  const maxFilings = Math.max(entity1?.filings || 0, entity2?.filings || 0) || 1

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Compare' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Compare</h1>
      <p className="text-gray-600 mb-8">Compare lobbying spending between two clients or firms side by side.</p>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setMode('clients')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'clients' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
          Compare Clients
        </button>
        <button onClick={() => setMode('firms')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'firms' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
          Compare Firms
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Entity 1 */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">First {mode === 'clients' ? 'Client' : 'Firm'}</label>
          <input
            type="text"
            value={entity1 ? entity1.name : search1}
            onChange={e => { setSearch1(e.target.value); setEntity1(null); setShowDropdown1(true) }}
            onFocus={() => setShowDropdown1(true)}
            placeholder={`Search ${mode}...`}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          {showDropdown1 && filtered1.length > 0 && !entity1 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filtered1.map(e => (
                <button key={e.name} onClick={() => { setEntity1(e); setShowDropdown1(false) }}
                  className="w-full text-left px-3 py-2 hover:bg-indigo-50 text-sm">
                  <div className="font-medium">{e.name}</div>
                  <div className="text-xs text-gray-500">{formatCurrency(e.totalIncome)} · {e.filings} filings</div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Entity 2 */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Second {mode === 'clients' ? 'Client' : 'Firm'}</label>
          <input
            type="text"
            value={entity2 ? entity2.name : search2}
            onChange={e => { setSearch2(e.target.value); setEntity2(null); setShowDropdown2(true) }}
            onFocus={() => setShowDropdown2(true)}
            placeholder={`Search ${mode}...`}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          {showDropdown2 && filtered2.length > 0 && !entity2 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filtered2.map(e => (
                <button key={e.name} onClick={() => { setEntity2(e); setShowDropdown2(false) }}
                  className="w-full text-left px-3 py-2 hover:bg-indigo-50 text-sm">
                  <div className="font-medium">{e.name}</div>
                  <div className="text-xs text-gray-500">{formatCurrency(e.totalIncome)} · {e.filings} filings</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {entity1 && entity2 && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Total Lobbying Spending</h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-indigo-700">{entity1.name}</span>
                  <span>{formatCurrency(entity1.totalIncome)}</span>
                </div>
                <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: `${(entity1.totalIncome / maxSpending) * 100}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-purple-700">{entity2.name}</span>
                  <span>{formatCurrency(entity2.totalIncome)}</span>
                </div>
                <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full transition-all" style={{ width: `${(entity2.totalIncome / maxSpending) * 100}%` }} />
                </div>
              </div>
            </div>
            {entity1.totalIncome > entity2.totalIncome ? (
              <p className="mt-3 text-sm text-gray-600">{entity1.name} spends <strong>{(entity1.totalIncome / entity2.totalIncome).toFixed(1)}x</strong> more than {entity2.name}.</p>
            ) : (
              <p className="mt-3 text-sm text-gray-600">{entity2.name} spends <strong>{(entity2.totalIncome / entity1.totalIncome).toFixed(1)}x</strong> more than {entity1.name}.</p>
            )}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Filing Activity</h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-indigo-700">{entity1.name}</span>
                  <span>{entity1.filings.toLocaleString()} filings</span>
                </div>
                <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: `${(entity1.filings / maxFilings) * 100}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-purple-700">{entity2.name}</span>
                  <span>{entity2.filings.toLocaleString()} filings</span>
                </div>
                <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full transition-all" style={{ width: `${(entity2.filings / maxFilings) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Link href={`/${mode}/${slugify(entity1.name)}`} className="block p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors text-center">
              <div className="font-medium text-indigo-700">View {entity1.name} →</div>
            </Link>
            <Link href={`/${mode}/${slugify(entity2.name)}`} className="block p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors text-center">
              <div className="font-medium text-purple-700">View {entity2.name} →</div>
            </Link>
          </div>
        </div>
      )}

      {(!entity1 || !entity2) && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">Select two {mode} above to compare them</p>
        </div>
      )}
    </div>
  )
}
