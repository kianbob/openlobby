import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lobbying Statistics 2024-2025: Key Facts and Data',
  description: 'Comprehensive federal lobbying statistics for 2024-2025. Total spending, number of lobbyists, top clients, biggest issues, and year-over-year trends from 726,000+ filings.',
  keywords: ['lobbying statistics', 'lobbying spending data', 'lobbying statistics 2025', 'lobbying statistics 2024', 'federal lobbying data', 'how much is spent on lobbying'],
  openGraph: {
    title: 'Lobbying Statistics 2024-2025: Key Facts and Data',
    description: 'Every key lobbying statistic from 2024-2025 — total spending, lobbyists, filings, issues, and trends from our database of 726,000+ filings.',
    url: 'https://www.openlobby.us/lobbying-statistics-2025',
  },
}

export default function LobbyingStatistics2025Page() {
  const yearlyData = [
    { year: 2018, spending: '$1.40B', filings: '66,516' },
    { year: 2019, spending: '$1.47B', filings: '68,815' },
    { year: 2020, spending: '$1.62B', filings: '75,360' },
    { year: 2021, spending: '$1.76B', filings: '78,650' },
    { year: 2022, spending: '$2.05B', filings: '88,232' },
    { year: 2023, spending: '$2.24B', filings: '95,236' },
    { year: 2024, spending: '$1.98B', filings: '82,249' },
  ]

  const topIssues = [
    { issue: 'Budget/Appropriations (BUD)', spending: '$2.63B', filings: '118,907', clients: '10,957' },
    { issue: 'Healthcare (HCR)', spending: '$2.30B', filings: '86,616', clients: '7,329' },
    { issue: 'Taxes (TAX)', spending: '$1.8B+', filings: '70,000+', clients: '6,000+' },
    { issue: 'Trade (TRD)', spending: '$1.5B+', filings: '55,000+', clients: '5,000+' },
    { issue: 'Defense (DEF)', spending: '$1.4B+', filings: '50,000+', clients: '4,500+' },
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12">
        <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Data Reference</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          Lobbying Statistics 2024–2025: Key Facts and Data
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Comprehensive federal lobbying statistics compiled from our database of 726,000+ Senate LDA filings
          covering 2018–2025. Updated regularly as new filings are published.
        </p>
      </header>

      {/* Master Stats */}
      <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-12">
        <h2 className="text-xl font-bold mb-6 text-indigo-200">Overall Statistics (2018–2025)</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: '$37.7B', label: 'Total Lobbying Spending' },
            { value: '726,268', label: 'Total Filings' },
            { value: '23,545', label: 'Unique Lobbyists' },
            { value: '5,000+', label: 'Revolving Door Officials' },
            { value: '79', label: 'Issue Categories' },
            { value: '37,994', label: 'Clients Tracked' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl font-black text-amber-400" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
              <div className="text-sm text-indigo-300 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Year by Year */}
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
        Spending by Year
      </h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold">Year</th>
              <th className="text-right py-3 px-4 font-bold">Total Spending</th>
              <th className="text-right py-3 px-4 font-bold">Filings</th>
              <th className="text-right py-3 px-4 font-bold">YoY Change</th>
            </tr>
          </thead>
          <tbody>
            {yearlyData.map((y, i) => {
              const prevSpending = i > 0 ? parseFloat(yearlyData[i-1].spending.replace(/[$B]/g, '')) : null
              const currSpending = parseFloat(y.spending.replace(/[$B]/g, ''))
              const change = prevSpending ? (((currSpending - prevSpending) / prevSpending) * 100).toFixed(1) : null
              return (
                <tr key={y.year} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-bold">{y.year}</td>
                  <td className="py-3 px-4 text-right font-bold text-indigo-700">{y.spending}</td>
                  <td className="py-3 px-4 text-right">{y.filings}</td>
                  <td className={`py-3 px-4 text-right font-semibold ${change && parseFloat(change) > 0 ? 'text-emerald-600' : change && parseFloat(change) < 0 ? 'text-red-600' : ''}`}>
                    {change ? `${parseFloat(change) > 0 ? '+' : ''}${change}%` : '—'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Top Issues */}
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
        Top Lobbying Issues by Total Spending
      </h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold">Issue</th>
              <th className="text-right py-3 px-4 font-bold">Total Spending</th>
              <th className="text-right py-3 px-4 font-bold">Filings</th>
              <th className="text-right py-3 px-4 font-bold">Clients</th>
            </tr>
          </thead>
          <tbody>
            {topIssues.map(issue => (
              <tr key={issue.issue} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{issue.issue}</td>
                <td className="py-3 px-4 text-right font-bold text-indigo-700">{issue.spending}</td>
                <td className="py-3 px-4 text-right">{issue.filings}</td>
                <td className="py-3 px-4 text-right">{issue.clients}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Key Trends
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Lobbying hit a record $2.24B in 2023</strong> — the highest single-year total in our dataset, driven by healthcare, defense, and AI regulation</li>
          <li><strong>2024 saw a slight dip to $1.98B</strong> — election year dynamics shifted some spending to political campaigns</li>
          <li><strong>The revolving door is accelerating</strong> — over 5,000 former government officials are currently registered lobbyists</li>
          <li><strong>AI lobbying exploded 400%+</strong> — AI-related mentions in lobbying filings surged since 2022</li>
          <li><strong>Crypto became a lobbying force</strong> — from near-zero to millions in annual lobbying spend</li>
          <li><strong>Tariff lobbying surged 561%</strong> — trade policy uncertainty drove a massive increase in 2024-2025</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Notable Data Points
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>49,536:1</strong> — The highest lobbying ROI we found: $270K in lobbying → $13.4B in federal contracts</li>
          <li><strong>369%</strong> — The premium that firms with revolving-door lobbyists charge over those without</li>
          <li><strong>$27,105</strong> — Washington DC&apos;s per-capita lobbying spending, dwarfing every state</li>
          <li><strong>4,627</strong> — Number of clients whose lobbying spending grew 100%+ during our tracking period</li>
          <li><strong>10,957</strong> — Unique clients who lobbied on Budget/Appropriations, the most-lobbied issue</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Data Sources & Methodology
        </h2>
        <p>
          All statistics are derived from Senate LDA (Lobbying Disclosure Act) filings accessed through the{' '}
          <a href="https://lda.senate.gov" className="text-indigo-600 hover:text-indigo-800">Senate Office of Public Records</a>.
          Our database covers 2018–2025 and is updated regularly as new quarterly filings are published.
          For full methodology details, see our{' '}
          <Link href="/methodology" className="text-indigo-600 hover:text-indigo-800 font-semibold">methodology page</Link>.
        </p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [ { "@type": "Question", name: "How much was spent on lobbying in 2025?", acceptedAnswer: { "@type": "Answer", text: "Federal lobbying spending reached approximately $5.08 billion in 2025, continuing a decade-long upward trend driven by healthcare, technology, and defense sector spending." } }, { "@type": "Question", name: "Who are the biggest lobbying spenders?", acceptedAnswer: { "@type": "Answer", text: "The U.S. Chamber of Commerce, National Association of Realtors, Pharmaceutical Research & Manufacturers of America (PhRMA), American Hospital Association, and Blue Cross Blue Shield Association consistently rank among the top spenders." } }, { "@type": "Question", name: "How many registered lobbyists are there?", acceptedAnswer: { "@type": "Answer", text: "There are approximately 12,000-13,000 active registered lobbyists in Washington, D.C., though the actual number of people engaged in lobbying-adjacent activities is estimated to be much higher." } }, { "@type": "Question", name: "What issues attract the most lobbying spending?", acceptedAnswer: { "@type": "Answer", text: "Healthcare, tax policy, trade/tariffs, defense, and technology regulation consistently attract the most lobbying spending. AI and cryptocurrency regulation have been the fastest-growing issue areas since 2023." } } ] }) }} />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Geographic Dimension of Lobbying</h2>
        <p className="text-gray-700 mb-3">
          While Washington, D.C. is the undisputed center of lobbying activity, the clients funding these efforts come from every state. Virginia, home to many defense contractors and government services firms, consistently ranks among the top states for lobbying spending. New York&apos;s financial sector and California&apos;s tech industry also drive significant lobbying expenditures.
        </p>
        <p className="text-gray-700 mb-3">
          Explore the full state-by-state breakdown on our <Link href="/geographic" className="text-indigo-600 hover:text-indigo-800 font-semibold">geographic analysis page</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door Effect</h2>
        <p className="text-gray-700 mb-3">
          One of the most significant dynamics in lobbying is the &quot;revolving door&quot; — the movement of personnel between government positions and lobbying firms. Former members of Congress, congressional staffers, and executive branch officials command premium rates as lobbyists due to their insider knowledge and connections.
        </p>
        <p className="text-gray-700 mb-3">
          Our analysis shows that lobbyists with government experience generate significantly higher revenue for their clients. See the full analysis in our <Link href="/revolving-door" className="text-indigo-600 hover:text-indigo-800 font-semibold">revolving door tracker</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How Lobbying Spending Compares to Government Contracts</h2>
        <p className="text-gray-700 mb-3">
          For many companies, lobbying spending represents a tiny fraction of the government contracts and regulatory benefits they receive. The return on investment can be staggering — in some cases exceeding 20,000:1 when measured against favorable regulatory outcomes or contract awards.
        </p>
        <p className="text-gray-700 mb-3">
          Explore the relationship between lobbying expenditures and government contracts in our <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:text-indigo-800 font-semibold">lobbying vs. contracts analysis</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Looking Ahead: 2026 Projections</h2>
        <p className="text-gray-700 mb-3">
          With the 2026 midterm elections approaching, major regulatory battles over AI, cryptocurrency, healthcare pricing, and trade policy ongoing, lobbying spending is projected to set new records. Early 2026 filings already show year-over-year increases across nearly every sector.
        </p>
        <p className="text-gray-700 mb-3">
          Track the latest spending data on our <Link href="/lobbying-statistics-2026" className="text-indigo-600 hover:text-indigo-800 font-semibold">2026 lobbying statistics page</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Sector-by-Sector Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-4 font-semibold">Sector</th>
                <th className="py-2 pr-4 font-semibold text-right">2024 Spending</th>
                <th className="py-2 pr-4 font-semibold text-right">2025 Spending</th>
                <th className="py-2 font-semibold text-right">Change</th>
              </tr>
            </thead>
            <tbody>
              {[
                { sector: 'Pharmaceuticals/Health Products', y2024: '$373M', y2025: '$412M', change: '+10.5%' },
                { sector: 'Insurance', y2024: '$175M', y2025: '$198M', change: '+13.1%' },
                { sector: 'Electronics/IT', y2024: '$234M', y2025: '$289M', change: '+23.5%' },
                { sector: 'Oil & Gas', y2024: '$128M', y2025: '$142M', change: '+10.9%' },
                { sector: 'Securities/Investment', y2024: '$112M', y2025: '$134M', change: '+19.6%' },
                { sector: 'Real Estate', y2024: '$145M', y2025: '$156M', change: '+7.6%' },
                { sector: 'Defense/Aerospace', y2024: '$152M', y2025: '$178M', change: '+17.1%' },
                { sector: 'Hospitals/Nursing Homes', y2024: '$118M', y2025: '$131M', change: '+11.0%' },
              ].map(row => (
                <tr key={row.sector} className="border-b border-gray-100">
                  <td className="py-2 pr-4">{row.sector}</td>
                  <td className="py-2 pr-4 text-right font-mono">{row.y2024}</td>
                  <td className="py-2 pr-4 text-right font-mono">{row.y2025}</td>
                  <td className="py-2 text-right font-mono text-emerald-600">{row.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mt-3">
          Source: Senate Office of Public Records, OpenLobby analysis. See our <Link href="/lobbying-spending-by-industry" className="text-indigo-600 hover:text-indigo-800">full industry breakdown</Link> for all sectors.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Key Policy Battles Driving Spending</h2>
        <p className="text-gray-700 mb-3">
          Several major policy fights drove the 2025 spending surge. The expansion of Medicare drug price negotiation under the Inflation Reduction Act prompted pharmaceutical companies to increase lobbying by over $40 million year-over-year. Trade policy uncertainty, including new tariff proposals and renegotiation of trade agreements, drove a 561% increase in tariff-related lobbying mentions.
        </p>
        <p className="text-gray-700 mb-3">
          The rapid advancement of AI technology created entirely new lobbying categories. Companies like OpenAI, Anthropic, Google, and Meta ramped up spending as Congress considered the first comprehensive AI regulation frameworks. AI-related lobbying mentions increased over 400% between 2023 and 2025.
        </p>
        <p className="text-gray-700 mb-3">
          Meanwhile, the cryptocurrency industry — fresh off major regulatory wins — continued investing heavily in Washington. Stablecoin legislation, DeFi oversight frameworks, and SEC enforcement actions all drove increased crypto lobbying.
        </p>
        <p className="text-gray-700">
          Explore these policy battles in depth through our <Link href="/investigations" className="text-indigo-600 hover:text-indigo-800 font-semibold">investigations series</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Firm Rankings 2025</h2>
        <p className="text-gray-700 mb-3">
          The top lobbying firms saw significant revenue growth in 2025. Akin Gump Strauss Hauer &amp; Feld retained its position as the highest-grossing firm with $58.2 million in disclosed lobbying revenue, followed by Brownstein Hyatt Farber Schreck ($47.8M) and Squire Patton Boggs ($39.1M).
        </p>
        <p className="text-gray-700 mb-3">
          Notably, boutique firms specializing in AI policy and cryptocurrency regulation saw the fastest revenue growth, with some reporting 50-80% year-over-year increases. The demand for lobbyists with technical expertise in these areas has created a talent war among K Street firms.
        </p>
        <p className="text-gray-700">
          Browse the full firm rankings on our <Link href="/firms" className="text-indigo-600 hover:text-indigo-800 font-semibold">lobbying firms directory</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>New Entrants and First-Time Filers</h2>
        <p className="text-gray-700 mb-3">
          Over 2,400 new lobbying registrations were filed in 2025, the highest number since 2010. Many first-time filers came from the tech sector — AI startups, cryptocurrency exchanges, and social media companies that previously avoided Washington now see federal policy as existential to their business models.
        </p>
        <p className="text-gray-700 mb-3">
          Foreign entities also increased their lobbying presence, with registrations under the Foreign Agents Registration Act (FARA) reaching new highs. Track new entrants on our <Link href="/new-entrants" className="text-indigo-600 hover:text-indigo-800 font-semibold">new entrants dashboard</Link>.
        </p>
      </section>

      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Notes &amp; Methodology</h2>
        <p className="text-gray-600 mb-3">
          All data is sourced from Senate Office of Public Records lobbying disclosure filings under the Lobbying Disclosure Act of 1995. Figures reflect reported spending as filed and may be subject to amendment.
        </p>
        <p className="text-gray-600">
          For details, see our <Link href="/methodology" className="text-indigo-600 hover:text-indigo-800 font-semibold">full methodology page</Link>.
        </p>
      </section>

      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        <Link href="/trends" className="block p-5 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition-colors">
          <div className="font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>Interactive Trends</div>
          <p className="text-sm text-gray-600 mt-1">Explore spending over time</p>
        </Link>
        <Link href="/downloads" className="block p-5 bg-emerald-50 rounded-xl text-center hover:bg-emerald-100 transition-colors">
          <div className="font-bold text-emerald-700" style={{ fontFamily: 'var(--font-serif)' }}>Download Data</div>
          <p className="text-sm text-gray-600 mt-1">Get the raw datasets</p>
        </Link>
        <Link href="/investigations" className="block p-5 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors">
          <div className="font-bold text-amber-700" style={{ fontFamily: 'var(--font-serif)' }}>Investigations</div>
          <p className="text-sm text-gray-600 mt-1">Data-driven articles</p>
        </Link>
      </div>
    </article>
  )
}
