import Link from 'next/link'
import { readFileSync } from 'fs'
import { join } from 'path'
import { formatCurrency, formatNumber } from '@/lib/format'

function getStats() {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'public', 'data', 'stats.json'), 'utf8'))
  } catch {
    return null
  }
}

export default function HomePage() {
  const stats = getStats()
  const totalSpending = stats ? formatCurrency(stats.totalIncome) : '$37.7B'
  const totalFilings = stats ? formatNumber(stats.totalFilings) : '726,000+'
  const totalLobbyists = stats ? formatNumber(stats.totalLobbyists) : '29,754'

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              <span className="text-amber-400">{totalSpending}</span> in Lobbying.{' '}
              <span className="text-amber-400">{totalFilings}</span> Filings.{' '}
              <span className="text-amber-400">{totalLobbyists}</span> Lobbyists.
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 mb-4 font-medium">
              {totalSpending} Spent Buying Policy. We Tracked Every Dollar.
            </p>
            <p className="text-base text-indigo-300 mb-10 max-w-2xl mx-auto">
              The only platform that cross-references lobbying filings with federal contracts, Medicare spending, and workforce data.
              Every filing. Every connection. Every dollar. All from public Senate LDA disclosures.
            </p>

            {/* Quick Search */}
            <div className="max-w-xl mx-auto mb-10">
              <Link href="/search" className="flex items-center w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-left text-indigo-200 hover:bg-white/15 hover:border-white/30 transition-all group">
                <svg className="w-5 h-5 mr-3 text-indigo-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search clients, firms, lobbyists, or issues...
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/investigations" className="px-8 py-3.5 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-colors text-lg">
                Read Our Investigations →
              </Link>
              <Link href="/clients" className="px-8 py-3.5 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-colors font-semibold">
                Explore the Data →
              </Link>
            </div>

            <p className="mt-8 text-xs text-indigo-400/70">
              Data current through 2025 · Senate LDA filings · Updated February 2026
            </p>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Key Findings</h2>
            <p className="text-gray-600 text-lg">Numbers that reveal how influence really works in Washington</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '369%',
                label: 'Premium',
                desc: 'Firms with ex-government lobbyists charge dramatically more than those without',
                href: '/revolving-door-premium',
                color: 'from-red-500 to-rose-600',
                bg: 'bg-red-50',
              },
              {
                stat: '$27,105',
                label: 'Per Person',
                desc: 'DC\'s per-capita lobbying spending — more than any state by orders of magnitude',
                href: '/geographic',
                color: 'from-indigo-500 to-blue-600',
                bg: 'bg-indigo-50',
              },
              {
                stat: '49,536:1',
                label: 'ROI',
                desc: 'The return on lobbying investment for the top federal contractor — $270K in, $13.4B out',
                href: '/lobbying-vs-contracts',
                color: 'from-emerald-500 to-green-600',
                bg: 'bg-emerald-50',
              },
              {
                stat: '4,627',
                label: 'Exploding Clients',
                desc: 'Organizations whose lobbying spending grew 100%+ — the new influence gold rush',
                href: '/client-trajectories',
                color: 'from-amber-500 to-orange-600',
                bg: 'bg-amber-50',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`block ${card.bg} rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 border border-gray-100`}
              >
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${card.color} bg-clip-text text-transparent`} style={{ fontFamily: 'var(--font-serif)' }}>
                  {card.stat}
                </div>
                <div className="text-sm font-bold text-gray-900 mt-1 uppercase tracking-wide">{card.label}</div>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tool */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/lobbying-roi" className="block bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-8 md:p-12 hover:shadow-lg transition-shadow group">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">Featured Tool</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                  The Lobbying ROI Calculator
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  For every $1 spent lobbying, companies received an average of $2,101 back in federal contracts. 
                  TriWest Healthcare spent $270K and got $13.4B — a 49,536:1 return.
                </p>
                <span className="text-indigo-600 font-semibold group-hover:text-indigo-800 transition-colors">
                  Calculate the ROI →
                </span>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-indigo-600" style={{ fontFamily: 'var(--font-serif)' }}>49,536:1</div>
                <div className="text-sm text-gray-500 mt-1">Highest ROI in our database</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Investigations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Featured Investigations</h2>
            <p className="text-gray-600 text-lg">Data-driven journalism that follows the money</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                slug: 'the-22000-percent-roi',
                title: 'The 22,000% Return on Lobbying',
                desc: 'Companies spend millions lobbying and get billions in federal contracts. We calculated exactly how much they get back.',
                tag: 'ROI Analysis',
                tagColor: 'bg-emerald-100 text-emerald-800',
              },
              {
                slug: 'revolving-door-exposed',
                title: '5,000 Former Officials Now Lobby Congress',
                desc: 'From White House advisors to congressional chiefs of staff — the revolving door exposed with every name and salary.',
                tag: 'Revolving Door',
                tagColor: 'bg-red-100 text-red-800',
              },
              {
                slug: 'big-pharma-lobbying',
                title: 'Big Pharma\'s $4.4 Billion Bet',
                desc: 'The pharmaceutical industry outspends every other sector on lobbying. Here\'s exactly where all that money goes.',
                tag: 'Healthcare',
                tagColor: 'bg-blue-100 text-blue-800',
              },
              {
                slug: 'doge-vs-lobbying',
                title: 'DOGE vs. The Lobbying Machine',
                desc: 'What happens when government efficiency meets the $38 billion lobbying industry? A collision course analysis.',
                tag: 'DOGE',
                tagColor: 'bg-amber-100 text-amber-800',
              },
              {
                slug: 'crypto-lobbying-explosion',
                title: 'Crypto\'s K Street Invasion',
                desc: 'How the crypto industry went from zero lobbyists to one of the fastest-growing lobbying forces in Washington.',
                tag: 'Crypto',
                tagColor: 'bg-purple-100 text-purple-800',
              },
            ].map(inv => (
              <Link
                key={inv.slug}
                href={`/investigations/${inv.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-200"
              >
                <div className="p-7">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${inv.tagColor}`}>{inv.tag}</span>
                  <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-indigo-700 transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>{inv.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{inv.desc}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-indigo-600 group-hover:text-indigo-800">Read Investigation →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/investigations" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
              View All 25+ Investigations →
            </Link>
          </div>
        </div>
      </section>

      {/* Explore the Data */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h2>
            <p className="text-gray-600 text-lg">Interactive tools and analyses you won&apos;t find anywhere else</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/clients', title: 'Top Clients', desc: 'Who spends the most to influence Congress', icon: '💰' },
              { href: '/revolving-door', title: 'Revolving Door', desc: 'Government officials turned K Street lobbyists', icon: '🚪' },
              { href: '/lobbying-roi', title: 'Lobbying ROI Calculator', desc: 'Calculate return on lobbying investment', icon: '📊' },
              { href: '/influence-score', title: 'Influence Score', desc: 'Composite ranking of the most influential clients', icon: '⚡' },
              { href: '/trends', title: 'Spending Trends', desc: 'How lobbying spending has changed over time', icon: '📈' },
              { href: '/industries', title: 'Industry Breakdown', desc: 'Which sectors dominate the lobbying game', icon: '🏭' },
              { href: '/network', title: 'Influence Network', desc: 'Map the connections between lobbyists and firms', icon: '🕸️' },
              { href: '/foreign', title: 'Foreign Lobbying', desc: 'Foreign governments lobbying the US', icon: '🌍' },
              { href: '/text-analysis', title: 'What Lobbyists Actually Write', desc: 'The language of influence — trending words, bills, and lobbying descriptions', icon: '📝' },
              { href: '/arms-race', title: 'The Arms Race', desc: 'Which issues are surging in lobbying spend', icon: '🔥' },
              { href: '/geographic', title: 'Geographic Analysis', desc: 'Where lobbying money comes from', icon: '🗺️' },
              { href: '/compare', title: 'Compare Tool', desc: 'Compare any clients or firms side by side', icon: '⚖️' },
            ].map(tool => (
              <Link key={tool.href} href={tool.href}
                className="group flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-indigo-200 transition-all duration-200">
                <div className="text-3xl flex-shrink-0">{tool.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>{tool.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-indigo-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>What Makes Us Different</h2>
            <p className="text-indigo-300 text-lg">Not just another database — we do the analysis others don&apos;t</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Original Investigations', desc: '25+ data-driven articles that connect lobbying data to real-world outcomes — contracts, regulations, and policy changes.' },
              { title: 'Cross-Dataset Intelligence', desc: 'We link lobbying filings to federal contracts, Medicare spending, and government workforce data. Nobody else does this.' },
              { title: 'Revolving Door Tracking', desc: 'We track 5,000+ former government officials now working as lobbyists, including the premium they charge.' },
              { title: 'ROI Calculations', desc: 'We calculated the actual return on lobbying investment — how much companies spend vs. what they get in contracts.' },
              { title: 'Influence Scoring', desc: 'Our composite influence score ranks clients across 5 dimensions: spending, connections, issues, growth, and network.' },
              { title: '100% Free & Open', desc: 'No paywall. No login. No ads. All processed data is freely downloadable for journalists, researchers, and citizens.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                  <p className="text-indigo-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From TheDataProject.ai */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">From TheDataProject.ai</p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Our Family of Transparency Sites</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'OpenMedicaid', url: 'https://www.openmedicaid.org', desc: 'Track Medicaid spending across all 50 states' },
              { name: 'OpenMedicare', url: 'https://www.openmedicare.us', desc: 'Medicare provider payments and trends' },
              { name: 'OpenFeds', url: 'https://www.openfeds.org', desc: 'Federal workforce data and analysis' },
              { name: 'OpenSpending', url: 'https://www.openspending.us', desc: 'Federal contracts and spending data' },
            ].map((site) => (
              <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer"
                className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-indigo-200 transition-all text-center">
                <div className="font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>{site.name}</div>
                <p className="text-sm text-gray-500 mt-2">{site.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            This Data Belongs to You
          </h2>
          <p className="text-indigo-200 text-lg mb-10">
            Every lobbying filing shown here is a public record required by the Lobbying Disclosure Act.
            We just made it searchable, analyzable, and understandable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/search" className="px-8 py-3.5 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors text-lg">
              Start Searching →
            </Link>
            <Link href="/downloads" className="px-8 py-3.5 border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors font-semibold">
              Download the Data
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
