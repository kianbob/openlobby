import Link from 'next/link'
import { readFileSync } from 'fs'
import { join } from 'path'
import { formatCurrency, formatNumber } from '@/lib/format'
import ShockingStats from '@/components/ShockingStats'

function getStats() {
  try {
    const data = JSON.parse(readFileSync(join(process.cwd(), 'public', 'data', 'stats.json'), 'utf8'))
    return data
  } catch {
    return null
  }
}

export default function HomePage() {
  const stats = getStats()
  
  const totalSpending = stats ? formatCurrency(stats.totalIncome) : '$15.2B'
  const totalFilings = stats ? formatNumber(stats.totalFilings) : '650K+'
  const yearRange = stats?.yearRange || '2018–2025'

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-indigo-300 text-sm font-medium tracking-wider uppercase mb-4">
              Data through 2025 · Updated from Senate LDA filings
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              {totalSpending} Buys a Lot of{' '}
              <span className="text-amber-400">Influence</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-200 mb-4 max-w-2xl mx-auto">
              Every lobbying dollar. Every client. Every lobbyist. Every issue.
            </p>
            <p className="text-base text-indigo-300 mb-8 max-w-2xl mx-auto">
              We analyzed {totalFilings} federal lobbying filings from {yearRange} — 
              who&apos;s paying, who&apos;s lobbying, and what they want. 
              All from public Senate LDA disclosures.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto mb-8">
              <Link href="/search" className="block w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl px-6 py-4 text-left text-indigo-200 hover:bg-white/15 transition-colors">
                🔍 Search clients, firms, lobbyists, or issues...
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/clients" className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors">
                Top Clients →
              </Link>
              <Link href="/revolving-door" className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 transition-colors">
                Revolving Door →
              </Link>
              <Link href="/investigations" className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 transition-colors">
                Read Investigations →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ShockingStats />

      {/* What You'll Find */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-serif)' }}>What You&apos;ll Find</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Follow the Money', desc: 'Track $15.2 billion in federal lobbying spending from 2018-2025. See which corporations, trade groups, and foreign entities spend the most to influence Congress.', href: '/clients' },
            { title: 'The Revolving Door', desc: 'Over 5,000 former government officials now work as lobbyists. See who left public service to profit from their connections and insider knowledge.', href: '/revolving-door' },
            { title: 'Industry Analysis', desc: 'Healthcare, defense, tech, and finance dominate lobbying spending. See which industries are fighting hardest to shape the laws that affect your life.', href: '/industries' },
            { title: 'Investigation Articles', desc: '12 data-driven investigations exposing the biggest lobbying stories — from Big Pharma\'s $4.4B spend to crypto\'s K Street invasion to the 2025 tariff lobbying explosion.', href: '/investigations' },
            { title: 'Interactive Tools', desc: 'Calculate lobbying ROI, score political influence, compare entities side-by-side, and search across all 650,000+ filings.', href: '/lobbying-roi' },
            { title: 'Open Data', desc: 'All our processed data is freely downloadable. We believe transparency data should be accessible to everyone — journalists, researchers, and citizens.', href: '/downloads' },
          ].map(item => (
            <a key={item.href} href={item.href} className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: totalSpending, label: 'Total Lobbying (2018–2025)', color: 'text-red-600', href: '/trends' },
              { value: totalFilings, label: 'Total Filings', color: 'text-indigo-600', href: '/trends' },
              { value: stats ? formatNumber(stats.totalClients) : '5,000+', label: 'Top Clients Tracked', color: 'text-indigo-600', href: '/clients' },
              { value: stats ? formatNumber(stats.totalLobbyists) : '5,000+', label: 'Lobbyists Tracked', color: 'text-indigo-600', href: '/lobbyists' },
              { value: stats ? formatNumber(stats.totalRevolvingDoor) : '5,000+', label: 'Revolving Door', color: 'text-indigo-600', href: '/revolving-door' },
            ].map((stat) => (
              <a key={stat.label} href={stat.href} className="text-center hover:opacity-80 transition-opacity">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color}`} style={{ fontFamily: 'var(--font-serif)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What We Track */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-serif)' }}>
            Follow the Money
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Who Pays',
                desc: 'From Amazon to the NRA — every organization that pays lobbyists to influence Congress. Searchable by name, industry, and spending.',
                href: '/clients',
                icon: '💰',
              },
              {
                title: 'Who Lobbies',
                desc: 'Former senators, congressional staffers, and agency officials now working K Street. The revolving door, exposed.',
                href: '/revolving-door',
                icon: '🚪',
              },
              {
                title: 'What They Want',
                desc: `${stats?.totalIssues || 79} issue categories from healthcare to defense. See which industries spend the most lobbying on which policies.`,
                href: '/issues',
                icon: '📋',
              },
              {
                title: 'Spending Trends',
                desc: `${totalSpending} in 2024. Lobbying spending has grown every year since 2016. See the full picture.`,
                href: '/trends',
                icon: '📈',
              },
              {
                title: 'Foreign Influence',
                desc: 'Foreign governments and corporations spending millions to lobby the U.S. government. All disclosed, all searchable.',
                href: '/foreign',
                icon: '🌍',
              },
              {
                title: 'Deep-Dive Investigations',
                desc: 'Data-driven investigations into the lobbying industry. Who spends, who benefits, and what it means for you.',
                href: '/investigations',
                icon: '🔍',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Investigations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Latest Investigations
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Deep-dive data journalism about federal lobbying — who spends, who benefits, and what it means.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                slug: 'doge-vs-lobbying',
                title: 'DOGE vs. The Lobbying Machine',
                desc: 'What happens when DOGE comes for the agencies that lobbyists depend on?',
                tag: 'DOGE',
              },
              {
                slug: 'follow-the-money',
                title: 'The 8,187x Return on Lobbying',
                desc: 'Companies spend millions lobbying and get billions in contracts. We calculated the ROI.',
                tag: 'Analysis',
              },
              {
                slug: 'revolving-door-exposed',
                title: '5,000 Former Officials Now Lobby Congress',
                desc: 'From White House advisors to congressional chiefs of staff — the revolving door exposed.',
                tag: 'Revolving Door',
              },
            ].map(inv => (
              <Link
                key={inv.slug}
                href={`/investigations/${inv.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">{inv.tag}</span>
                <h3 className="text-lg font-bold mt-3 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{inv.title}</h3>
                <p className="text-sm text-gray-600">{inv.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/investigations" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
              View All Investigations →
            </Link>
          </div>
        </div>
      </section>

      {/* Surging This Quarter */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: 'var(--font-serif)' }}>🔥 Surging This Quarter</h2>
        <p className="text-gray-500 text-center mb-8">Issues with the biggest lobbying increases in Q4 2025</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'Constitution', change: '+2,485%', code: 'CON' },
            { name: 'Accounting', change: '+1,557%', code: 'ACC' },
            { name: 'Civil Rights', change: '+744%', code: 'CIV' },
            { name: 'Tariffs', change: '+561%', code: 'TAR' },
            { name: 'Firearms', change: '+457%', code: 'FIR' },
          ].map(item => (
            <a key={item.code} href={`/issues/${item.code}`} className="text-center p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
              <div className="text-2xl font-bold text-red-600" style={{ fontFamily: 'var(--font-serif)' }}>{item.change}</div>
              <div className="text-sm text-gray-700 mt-1">{item.name}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Unique Analysis Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Analysis Tools Nobody Else Has
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            We built unique tools that no other lobbying transparency site offers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { href: '/lobbying-roi', title: 'Lobbying ROI Calculator', desc: 'Companies spend millions lobbying and get billions in contracts. See the return on investment.', icon: '💵' },
              { href: '/influence-score', title: 'Influence Score Rankings', desc: 'Our composite score ranking the most influential lobbying clients across 5 dimensions.', icon: '⚡' },
              { href: '/arms-race', title: 'The Lobbying Arms Race', desc: 'Real-time tracker of which issues are surging in lobbying spend right now.', icon: '🔥' },
              { href: '/text-analysis', title: 'What Are They Lobbying About?', desc: 'NLP analysis of lobbying descriptions — trending words, top bills, language patterns.', icon: '📝' },
              { href: '/cross-reference', title: 'Cross-Dataset Intelligence', desc: 'Connecting lobbying to government contracts, Medicare spending, and federal workforce data.', icon: '🔗' },
              { href: '/compare', title: 'Compare Tool', desc: 'Compare any two clients or firms side by side — spending, filings, and influence.', icon: '⚖️' },
            ].map(tool => (
              <Link key={tool.href} href={tool.href}
                className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="text-2xl mb-2">{tool.icon}</div>
                <h3 className="font-bold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{tool.title}</h3>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Stay Updated</h2>
        <p className="text-gray-600 mb-4">Follow OpenLobby for new investigations and data updates.</p>
        <div className="flex justify-center gap-4">
          <a href="https://www.openlobby.us/feed.xml" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors text-sm font-medium">📡 RSS Feed</a>
          <a href="https://thedataproject.ai" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-medium">🌐 TheDataProject</a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            This Data Belongs to You
          </h2>
          <p className="text-indigo-200 mb-8">
            Every lobbying filing shown here is a public record, required by the Lobbying Disclosure Act. 
            We just made it searchable, analyzable, and understandable. No paywall. No login. No ads.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
              About This Project
            </Link>
            <Link href="/downloads" className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
              Download the Data
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
