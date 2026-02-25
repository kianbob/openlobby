import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Big Tech Lobbying: Google, Meta, Amazon, Apple, Microsoft',
  description: 'How much do tech companies spend on lobbying? Detailed data on Google, Meta, Amazon, Apple, and Microsoft lobbying spending, issues, and influence in Washington.',
  keywords: ['tech lobbying', 'google lobbying', 'meta lobbying', 'amazon lobbying', 'apple lobbying', 'microsoft lobbying', 'big tech lobbying'],
  openGraph: {
    title: 'Big Tech Lobbying: Google, Meta, Amazon, Apple, Microsoft',
    description: 'Data-driven analysis of Big Tech\'s lobbying spending — who spends the most, what they lobby on, and how their influence has grown.',
    url: 'https://www.openlobby.us/tech-lobbying',
  },
}

export default function TechLobbyingPage() {
  const techCompanies = [
    { name: 'Amazon.com', annualSpend: '$20M+', trend: '↑', focus: 'Antitrust, labor, trade, cloud/defense contracts', icon: '📦' },
    { name: 'Meta Platforms (Facebook)', annualSpend: '$19M+', trend: '↑', focus: 'Privacy, content moderation, antitrust, AI', icon: '👤' },
    { name: 'Alphabet (Google)', annualSpend: '$13M+', trend: '→', focus: 'Antitrust, privacy, AI, advertising regulation', icon: '🔍' },
    { name: 'Apple Inc.', annualSpend: '$9M+', trend: '↑', focus: 'Privacy, app store, encryption, right-to-repair', icon: '🍎' },
    { name: 'Microsoft Corp.', annualSpend: '$10M+', trend: '↑', focus: 'AI, cloud, cybersecurity, defense contracts', icon: '💻' },
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12">
        <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Industry Analysis</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          Big Tech Lobbying: Google, Meta, Amazon, Apple, Microsoft
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          The five largest tech companies collectively spend over $70 million per year lobbying Congress
          and federal agencies. Here&apos;s a data-driven look at Big Tech&apos;s influence in Washington.
        </p>
      </header>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '$70M+', label: 'Big 5 Annual Lobbying' },
          { value: '500+', label: 'Tech Lobbyists in DC' },
          { value: '340%', label: 'Growth Since 2018' },
          { value: '40+', label: 'Issue Categories' },
        ].map(s => (
          <div key={s.label} className="bg-purple-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-purple-700" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
            <div className="text-xs text-gray-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Company Cards */}
      <div className="space-y-4 mb-12">
        {techCompanies.map(c => (
          <div key={c.name} className="flex items-center gap-5 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all">
            <div className="text-4xl flex-shrink-0">{c.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-serif)' }}>{c.name}</h3>
                <span className="text-sm text-gray-500">{c.trend}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{c.focus}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-xl font-black text-purple-700" style={{ fontFamily: 'var(--font-serif)' }}>{c.annualSpend}</div>
              <div className="text-xs text-gray-500">per year</div>
            </div>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Why Tech Lobbying Has Exploded
        </h2>
        <p>
          A decade ago, Silicon Valley was famously skeptical of Washington. Today, tech companies are among the
          biggest lobbying spenders in the country. Several converging forces drove this transformation:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Antitrust scrutiny:</strong> DOJ and FTC investigations into Google, Meta, Amazon, and Apple</li>
          <li><strong>Privacy regulation:</strong> GDPR fallout and proposed US federal privacy laws</li>
          <li><strong>AI regulation:</strong> The rush to shape rules around artificial intelligence before Congress acts</li>
          <li><strong>Section 230:</strong> Repeated threats to reform content moderation liability protections</li>
          <li><strong>Defense contracts:</strong> Cloud computing contracts (JEDI/JWCC) worth billions</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          What They Lobby On
        </h2>
        <p>
          Tech company lobbying filings span an enormous range of issues, reflecting these companies&apos; reach
          into nearly every sector of the economy:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>CPT (Computers/IT):</strong> Core technology regulation, cybersecurity standards</li>
          <li><strong>TEC (Telecommunications):</strong> Broadband, net neutrality, spectrum allocation</li>
          <li><strong>TAX (Taxation):</strong> Corporate tax rates, international tax, R&D credits</li>
          <li><strong>TRD (Trade):</strong> Data localization, international trade agreements, tariffs</li>
          <li><strong>DEF (Defense):</strong> Cloud contracts, cybersecurity, surveillance technology</li>
          <li><strong>IMM (Immigration):</strong> H-1B visas, skilled worker immigration</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          The AI Lobbying Gold Rush
        </h2>
        <p>
          Since 2023, AI-related lobbying has surged dramatically. Every major tech company has expanded its
          lobbying operation to shape AI regulation. Our{' '}
          <Link href="/investigations/ai-regulation-fight" className="text-indigo-600 hover:text-indigo-800 font-semibold">investigation into the AI regulation fight</Link>{' '}
          found that AI-related lobbying mentions increased over 400% between 2022 and 2024.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Tech&apos;s Revolving Door
        </h2>
        <p>
          Big Tech companies actively hire former congressional staffers, FTC officials, and DOJ antitrust lawyers.
          This revolving door gives them insider knowledge of regulatory processes and personal relationships
          with current officials. Our data tracks these connections across the industry.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Explore Tech Lobbying Data
        </h2>
        <p>
          Search for any tech company on OpenLobby to see their full lobbying history — quarterly spending,
          the lobbyists they employ, the issues they target, and how their spending has changed over time.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        <Link href="/search" className="block p-5 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors">
          <div className="font-bold text-purple-700" style={{ fontFamily: 'var(--font-serif)' }}>Search Companies</div>
          <p className="text-sm text-gray-600 mt-1">Look up any tech company</p>
        </Link>
        <Link href="/investigations/tech-lobbying-war" className="block p-5 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition-colors">
          <div className="font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>Full Investigation</div>
          <p className="text-sm text-gray-600 mt-1">Tech lobbying deep-dive</p>
        </Link>
        <Link href="/industries" className="block p-5 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors">
          <div className="font-bold text-amber-700" style={{ fontFamily: 'var(--font-serif)' }}>All Industries</div>
          <p className="text-sm text-gray-600 mt-1">Compare across sectors</p>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Dive Deeper</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/investigations/ai-regulation-fight" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🤖 The AI Regulation Fight</div>
            <div className="text-xs text-gray-500 mt-1">Who&apos;s lobbying to shape AI policy</div>
          </Link>
          <Link href="/investigations/crypto-lobbying-explosion" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">₿ Crypto Lobbying Explosion</div>
            <div className="text-xs text-gray-500 mt-1">From zero to massive lobbying presence</div>
          </Link>
          <Link href="/issues/CPT" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📋 Copyright/Patent Issues</div>
            <div className="text-xs text-gray-500 mt-1">All CPT-coded lobbying filings</div>
          </Link>
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
            <div className="text-xs text-gray-500 mt-1">Which tech issues are surging?</div>
          </Link>
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
            <div className="text-xs text-gray-500 mt-1">See all top lobbying spenders</div>
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
