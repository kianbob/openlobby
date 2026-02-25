import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Defense Industry Lobbying: Contractors and Influence | OpenLobby',
  description: 'Data-driven analysis of defense industry lobbying. See how much defense contractors spend lobbying Congress, their ROI on federal contracts, and the military revolving door.',
  keywords: ['defense lobbying', 'defense contractor lobbying', 'military lobbying', 'pentagon lobbying', 'defense spending lobbying'],
  openGraph: {
    title: 'Defense Industry Lobbying: Contractors and Influence',
    description: 'How defense contractors spend millions on lobbying and get billions in contracts. Complete data analysis.',
    url: 'https://www.openlobby.us/defense-lobbying',
  },
}

export default function DefenseLobbyingPage() {
  const contractors = [
    { name: 'RTX Corporation (Raytheon)', lobbying: '$2.8M', contracts: '$7.3B', roi: '2,624:1' },
    { name: 'Lockheed Martin', lobbying: '$12M+', contracts: '$50B+', roi: '4,000+:1' },
    { name: 'Boeing', lobbying: '$12M+', contracts: '$25B+', roi: '2,000+:1' },
    { name: 'Northrop Grumman', lobbying: '$10M+', contracts: '$20B+', roi: '2,000+:1' },
    { name: 'General Dynamics', lobbying: '$8M+', contracts: '$15B+', roi: '1,800+:1' },
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12">
        <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Industry Analysis</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          Defense Industry Lobbying: Contractors and Influence
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Defense contractors spend millions on lobbying and receive billions in federal contracts.
          Our cross-dataset analysis reveals the true return on defense lobbying investment.
        </p>
      </header>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '49,536:1', label: 'Highest Contractor ROI' },
          { value: '$50B+', label: 'Top Contractor Awards' },
          { value: '1,000+', label: 'Defense Lobbyists' },
          { value: '5,000+', label: 'Revolving Door Officials' },
        ].map(s => (
          <div key={s.label} className="bg-emerald-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-emerald-700" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
            <div className="text-xs text-gray-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          The Lobbying-to-Contracts Pipeline
        </h2>
        <p>
          Our unique cross-dataset analysis links lobbying disclosure data with federal contract awards.
          The results are staggering: the top defense contractor in our dataset — TriWest Healthcare Alliance —
          spent just $270,000 on lobbying over 8 years and received <strong>$13.4 billion</strong> in federal contracts.
          That&apos;s a <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:text-indigo-800 font-semibold">49,536:1 return on investment</Link>.
        </p>
      </div>

      {/* Contractor Table */}
      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold">Contractor</th>
              <th className="text-right py-3 px-4 font-bold">Lobbying Spend</th>
              <th className="text-right py-3 px-4 font-bold">Federal Contracts</th>
              <th className="text-right py-3 px-4 font-bold">ROI</th>
            </tr>
          </thead>
          <tbody>
            {contractors.map(c => (
              <tr key={c.name} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{c.name}</td>
                <td className="py-3 px-4 text-right">{c.lobbying}</td>
                <td className="py-3 px-4 text-right font-bold text-emerald-700">{c.contracts}</td>
                <td className="py-3 px-4 text-right font-bold text-red-600">{c.roi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          What Defense Contractors Lobby On
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>DEF (Defense):</strong> Military spending, weapons programs, base closures</li>
          <li><strong>BUD (Budget/Appropriations):</strong> Defense budget, NDAA provisions, supplemental funding</li>
          <li><strong>AER (Aerospace):</strong> Aircraft programs, space systems, missile defense</li>
          <li><strong>HOM (Homeland Security):</strong> Border technology, cybersecurity, surveillance</li>
          <li><strong>FOR (Foreign Relations):</strong> Arms sales, foreign military financing, allied partnerships</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          The Military Revolving Door
        </h2>
        <p>
          The defense industry has the most well-worn revolving door in Washington. Former Pentagon officials,
          military officers, and Armed Services Committee staffers move to defense contractor lobbying shops
          at remarkable rates. These former insiders bring invaluable knowledge of acquisition processes,
          budget timelines, and personal relationships with current decision-makers.
        </p>
        <p>
          Our analysis found that firms with former defense officials charge significantly more and win
          more contracts — the{' '}
          <Link href="/revolving-door-premium" className="text-indigo-600 hover:text-indigo-800 font-semibold">revolving door premium</Link>{' '}
          is especially pronounced in defense.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          NDAA Season: The Annual Lobbying Surge
        </h2>
        <p>
          Every year, the National Defense Authorization Act (NDAA) triggers a massive lobbying surge.
          Defense contractors, subcontractors, and military communities lobby intensely over which
          programs get funded, which bases stay open, and which weapon systems advance.
          Our{' '}
          <Link href="/investigations/seasonal-lobbying" className="text-indigo-600 hover:text-indigo-800 font-semibold">seasonal lobbying analysis</Link>{' '}
          shows clear spending spikes during NDAA markup season.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        <Link href="/lobbying-vs-contracts" className="block p-5 bg-emerald-50 rounded-xl text-center hover:bg-emerald-100 transition-colors">
          <div className="font-bold text-emerald-700" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying vs. Contracts</div>
          <p className="text-sm text-gray-600 mt-1">Full ROI analysis</p>
        </Link>
        <Link href="/investigations/defense-contractor-lobbying" className="block p-5 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition-colors">
          <div className="font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>Full Investigation</div>
          <p className="text-sm text-gray-600 mt-1">Defense lobbying deep-dive</p>
        </Link>
        <Link href="/issues/DEF" className="block p-5 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors">
          <div className="font-bold text-amber-700" style={{ fontFamily: 'var(--font-serif)' }}>Defense Issue</div>
          <p className="text-sm text-gray-600 mt-1">All DEF-coded filings</p>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Dive Deeper</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/investigations/doge-vs-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🐕 DOGE vs. Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Government efficiency meets defense spending</div>
          </Link>
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
            <div className="text-xs text-gray-500 mt-1">Defense contractors&apos; lobbying returns</div>
          </Link>
          <Link href="/investigations/revolving-door-exposed" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 Revolving Door</div>
            <div className="text-xs text-gray-500 mt-1">Pentagon officials who became lobbyists</div>
          </Link>
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
            <div className="text-xs text-gray-500 mt-1">See all top lobbying spenders</div>
          </Link>
          <Link href="/geographic" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🗺️ Geographic Analysis</div>
            <div className="text-xs text-gray-500 mt-1">Where defense lobbying concentrates</div>
          </Link>
          <Link href="/how-lobbying-works" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📖 How Lobbying Works</div>
            <div className="text-xs text-gray-500 mt-1">The complete guide</div>
          </Link>
        </div>
      </div>
    </article>
  )
}
