'use client'
import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatNumber, toTitleCase } from '@/lib/format'
import dynamic from 'next/dynamic'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })

interface Entrant {
  id: number; name: string; state: string; desc: string; year: number; period: string; firstFirm: string; posted: string
}
interface YearCount { year: number; count: number }
interface Data {
  recentEntrants: Entrant[]; entrantsByYear: YearCount[]; totalNewClients: number; totalNewFirms: number
}

export default function NewEntrantsPage() {
  const [data, setData] = useState<Data | null>(null)
  const [search, setSearch] = useState('')
  const [stateFilter, setStateFilter] = useState('')
  const [yearFilter, setYearFilter] = useState('')

  useEffect(() => { fetch('/data/new-entrants.json').then(r => r.json()).then(setData).catch(() => {}) }, [])

  const states = useMemo(() => {
    if (!data) return []
    return [...new Set(data.recentEntrants.map(e => e.state))].sort()
  }, [data])

  const years = useMemo(() => {
    if (!data) return []
    return [...new Set(data.recentEntrants.map(e => e.year))].sort((a, b) => b - a)
  }, [data])

  const filtered = useMemo(() => {
    if (!data) return []
    return data.recentEntrants.filter(e => {
      if (search && !e.name.toLowerCase().includes(search.toLowerCase()) && !e.desc.toLowerCase().includes(search.toLowerCase())) return false
      if (stateFilter && e.state !== stateFilter) return false
      if (yearFilter && e.year !== Number(yearFilter)) return false
      return true
    })
  }, [data, search, stateFilter, yearFilter])

  const latestYear = data?.entrantsByYear?.[data.entrantsByYear.length - 1]

  if (!data) return <div className="max-w-7xl mx-auto px-4 py-8"><div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">Loading...</div></div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis', href: '/trends' }, { name: 'First-Time Filers' }]} />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>First-Time Filers</h1>
          <p className="text-gray-600 max-w-3xl">Tracking new organizations that start lobbying Washington for the first time.</p>
        </div>
        <ShareButtons url="https://www.openlobby.us/new-entrants" title="First-Time Lobbying Filers — OpenLobby" />
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🆕</span>
          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              {latestYear ? formatNumber(latestYear.count) : '—'} new organizations started lobbying Washington in {latestYear?.year || '—'}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Every year, thousands of organizations register to lobby Congress for the first time. These first-time filers reveal which industries and causes are newly entering the influence game — and what policy battles are pulling in new players.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.totalNewClients)}</div>
          <div className="text-xs text-gray-500">Total New Clients (All Time)</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(data.totalNewFirms)}</div>
          <div className="text-xs text-gray-500">Total New Firms</div>
        </div>
        {latestYear && (
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(latestYear.count)}</div>
            <div className="text-xs text-gray-500">{latestYear.year} New Entrants</div>
          </div>
        )}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{data.entrantsByYear.length}</div>
          <div className="text-xs text-gray-500">Years Tracked</div>
        </div>
      </div>

      {/* Bar Chart */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>New Entrants by Year</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-4" style={{ height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.entrantsByYear}>
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v: any) => formatNumber(v)} />
              <Bar dataKey="count" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Searchable Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Recent First-Time Filers</h2>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text" placeholder="Search by name or description..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={search} onChange={e => setSearch(e.target.value)}
          />
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm" value={stateFilter} onChange={e => setStateFilter(e.target.value)}>
            <option value="">All States</option>
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm" value={yearFilter} onChange={e => setYearFilter(e.target.value)}>
            <option value="">All Years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Organization</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">State</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Description</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">First Firm</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.slice(0, 100).map(e => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{toTitleCase(e.name)}</td>
                  <td className="px-4 py-3 text-gray-600">{e.state}</td>
                  <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{e.desc}</td>
                  <td className="px-4 py-3 text-gray-600">{toTitleCase(e.firstFirm)}</td>
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{new Date(e.posted).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length > 100 && <div className="text-center py-3 text-sm text-gray-500">Showing 100 of {formatNumber(filtered.length)} results</div>}
          {filtered.length === 0 && <div className="text-center py-8 text-gray-500">No results found</div>}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
        <h2 className="text-xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>💡 Why It Matters</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          First-time filers are a leading indicator of where policy battles are headed. When a wave of AI companies suddenly registers lobbyists, it signals that regulation is coming. When healthcare startups flood K Street, it means the industry sees both threat and opportunity in upcoming legislation. Tracking new entrants reveals the future of lobbying before the spending numbers catch up.
        </p>
      </section>

      <SourceCitation sources={['Senate LDA Filings', 'Lobbying Disclosure Act Reports']} lastUpdated="February 2026" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/first-time-filers-2024" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🆕 First-Time Filers 2024</div>
            <div className="text-xs text-gray-500 mt-1">Who just entered the lobbying game?</div>
          </Link>
          <Link href="/investigations/crypto-lobbying-explosion" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">₿ Crypto Lobbying Explosion</div>
            <div className="text-xs text-gray-500 mt-1">From zero to massive presence</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/client-trajectories" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📈 Client Trajectories</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/momentum" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚀 Momentum</Link>
        </div>
      </section>

      <section className="mb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Why Organizations Start Lobbying</h2>
          <p className="text-gray-600">
            The decision to begin lobbying the federal government is rarely made lightly. Organizations typically enter the lobbying ecosystem
            in response to one of several catalysts: new legislation that threatens their business model, regulatory actions by federal agencies,
            competitive pressure from rivals who already lobby, or strategic opportunities to shape emerging policy frameworks. In 2026, the most
            common triggers for first-time lobbying include AI regulation, tariff and trade policy changes, cryptocurrency oversight proposals,
            and healthcare reimbursement reforms.
          </p>
          <p className="text-gray-600">
            The cost barrier to entry has remained relatively stable. A modest federal lobbying engagement costs between $60,000 and $120,000
            per quarter, though organizations facing existential regulatory threats often commit $500,000 or more annually. For companies with
            billions in revenue at stake, lobbying represents a remarkably inexpensive form of risk management — a dynamic our
            <Link href="/lobbying-roi" className="text-blue-600 hover:underline">ROI analysis</Link> explores in detail.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>2026 New Entrant Trends</h2>
          <p className="text-gray-600">
            The first half of 2026 has seen a notable surge in new lobbying registrations from technology companies, particularly those in the
            AI and machine learning space. Startups that previously focused exclusively on product development are now hiring Washington
            <Link href="/firms" className="text-blue-600 hover:underline">lobbying firms</Link> to influence how Congress regulates AI training
            data, algorithmic decision-making, and automated content generation. This represents a fundamental shift: companies are engaging with
            the political process much earlier in their lifecycle than in previous technology waves.
          </p>
          <p className="text-gray-600">
            Trade-sensitive companies are another major category of 2026 new entrants. The tariff and trade policy disruptions have forced
            manufacturers, importers, and retailers that never previously engaged with Washington to quickly establish lobbying operations.
            Many of these organizations are mid-market companies with limited government affairs experience, making them heavy users of external
            lobbying firms rather than building in-house capabilities.
          </p>
          <p className="text-gray-600">
            Healthcare organizations continue to enter the lobbying system at steady rates, driven by ongoing debates over drug pricing,
            telehealth regulation, and Medicaid funding. New entrants in healthcare tend to be smaller specialty providers, digital health
            companies, and medical device startups seeking to influence FDA pathways and Medicare coverage decisions. The
            <Link href="/pharmaceutical-lobbying" className="text-blue-600 hover:underline">pharmaceutical lobbying</Link> landscape, already
            one of Washington&apos;s most expensive, continues to attract new participants.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The First-Time Filer Experience</h2>
          <p className="text-gray-600">
            For organizations new to federal lobbying, the process begins with selecting a lobbying firm or hiring in-house
            <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyists</Link>. Most first-time filers opt for external firms,
            which provide turnkey lobbying services including strategic planning, relationship mapping, congressional meeting scheduling, and
            quarterly filing compliance. The typical new entrant starts with a single firm and a narrowly defined set of
            <Link href="/issues" className="text-blue-600 hover:underline">issues</Link>, expanding their lobbying scope only after seeing
            initial results.
          </p>
          <p className="text-gray-600">
            Registration requirements under the Lobbying Disclosure Act mandate that lobbyists register within 45 days of making or being
            employed to make a lobbying contact. Quarterly reports (LD-2 filings) must detail the specific issues lobbied, government agencies
            contacted, and income or expenses associated with lobbying activities. OpenLobby makes all of this data searchable and cross-referenced,
            so you can track any new entrant&apos;s lobbying evolution from their very first filing.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>From New Entrant to Major Spender</h2>
          <p className="text-gray-600">
            Some of today&apos;s biggest lobbying <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> were new entrants
            just a few years ago. The cryptocurrency industry provides the most dramatic example: virtually nonexistent in federal lobbying
            data before 2020, <Link href="/investigations/crypto-ai-lobbying-surge" className="text-blue-600 hover:underline">crypto companies</Link>
            now collectively spend tens of millions annually on Washington influence. AI companies are following a similar trajectory, moving
            from zero lobbying presence to substantial spending in under two years.
          </p>
          <p className="text-gray-600">
            Tracking new entrants over time reveals which industries are gaining political sophistication and which policy debates are drawing
            in new stakeholders. Organizations that begin lobbying during periods of regulatory uncertainty — like the current AI governance
            debate — often become permanent participants in the influence ecosystem. Our
            <Link href="/client-trajectories" className="text-blue-600 hover:underline">client trajectories</Link> tool shows how spending
            patterns evolve from initial engagement through long-term lobbying commitments, while our
            <Link href="/investigations/senate-lda-filings-2026" className="text-blue-600 hover:underline">quarterly filings analysis</Link>
            provides the latest data on new registrations and spending trends.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Geographic Patterns Among New Entrants</h2>
          <p className="text-gray-600">
            New lobbying entrants cluster geographically in ways that mirror broader economic patterns.
            <Link href="/states/CA" className="text-blue-600 hover:underline">California</Link> produces the most tech-sector new
            entrants, as AI startups and software companies establish their first Washington lobbying operations. Texas and the
            Southeast have contributed growing numbers of energy and manufacturing new entrants, particularly in response to trade
            policy changes. <Link href="/states/DC" className="text-blue-600 hover:underline">Washington DC</Link> itself generates
            new entrants primarily in the form of newly created trade associations and advocacy coalitions that form around specific
            policy debates.
          </p>
          <p className="text-gray-600">
            International companies establishing U.S. lobbying operations represent another growing category of new entrants.
            <Link href="/foreign" className="text-blue-600 hover:underline">Foreign-connected entities</Link> from Europe, Asia,
            and the Middle East regularly appear as first-time filers, typically in response to trade disputes, sanctions policy,
            or regulatory frameworks that affect their U.S. operations. These international new entrants often hire the most
            established <Link href="/firms" className="text-blue-600 hover:underline">K Street firms</Link> to navigate
            an unfamiliar political landscape.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What New Entrant Data Tells Us</h2>
          <p className="text-gray-600">
            The flow of new entrants into the lobbying system serves as a leading indicator of policy disruption. When large
            numbers of organizations from a particular sector begin lobbying for the first time, it typically signals that the
            sector faces imminent regulatory changes or legislative threats. The surge in crypto lobbying registrations in
            2021-2022 preceded the major congressional push for digital asset regulation. The wave of AI company registrations
            in 2025-2026 anticipates the comprehensive AI governance frameworks currently being debated.
          </p>
          <p className="text-gray-600">
            By monitoring new entrant patterns, OpenLobby provides early warning of which industries are bracing for Washington
            attention. Track the latest arrivals in the table above, or explore related analyses including our
            <Link href="/lobbying-statistics-2026" className="text-blue-600 hover:underline">2026 statistics overview</Link>,
            <Link href="/investigations/q1-2026-lobbying-record" className="text-blue-600 hover:underline">Q1 2026 record spending</Link>,
            and the <Link href="/investigations/midterm-lobbying-2026" className="text-blue-600 hover:underline">midterm lobbying surge</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
