import Link from 'next/link'

// Will load from public/data/stats.json once data is processed
const stats = {
  totalSpending: '$4.4B',
  totalSpendingYear: '2024',
  totalFilings: '726K+',
  totalClients: '133K+',
  totalLobbyists: '87K+',
  totalFirms: '17K+',
  yearRange: '2018–2025',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-indigo-300 text-sm font-medium tracking-wider uppercase mb-4">
              Data through 2025 · Updated weekly
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              $4.4 Billion Buys a Lot of{' '}
              <span className="text-amber-400">Influence</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-200 mb-4 max-w-2xl mx-auto">
              Every lobbying dollar. Every client. Every lobbyist. Every issue.
            </p>
            <p className="text-base text-indigo-300 mb-8 max-w-2xl mx-auto">
              We analyzed {stats.totalFilings} federal lobbying filings from {stats.yearRange} — 
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

      {/* Key Numbers */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: stats.totalSpending, label: `Lobbying in ${stats.totalSpendingYear}`, color: 'text-red-600' },
              { value: stats.totalFilings, label: 'Total Filings', color: 'text-indigo-600' },
              { value: stats.totalClients, label: 'Unique Clients', color: 'text-indigo-600' },
              { value: stats.totalLobbyists, label: 'Individual Lobbyists', color: 'text-indigo-600' },
              { value: stats.totalFirms, label: 'Lobbying Firms', color: 'text-indigo-600' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color}`} style={{ fontFamily: 'var(--font-serif)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
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
                desc: '76 issue categories from healthcare to defense. See which industries spend the most lobbying on which policies.',
                href: '/issues',
                icon: '📋',
              },
              {
                title: 'Spending Trends',
                desc: '$4.4 billion in 2024 — a new record. Lobbying spending has grown every year since 2016. See the full picture.',
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
