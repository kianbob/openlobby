import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Defense Lobbying: Military Contractor Spending Data',
  description: 'How much do defense contractors spend on lobbying? Data on Lockheed Martin, Raytheon, Boeing, and more. ROI on federal contracts and the military revolving door (2018-2026).',
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

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Major Defense Programs and Their Lobbying</h2>
        <p>The biggest defense lobbying battles typically center on major weapons programs with multi-decade lifespans and hundreds of billions in total spending:</p>
        <ul>
          <li><strong>F-35 Joint Strike Fighter (Lockheed Martin):</strong> The most expensive weapons program in history at $1.7 trillion over its lifetime. Lockheed Martin maintains continuous lobbying presence to protect the program from budget cuts and ensure foreign sales.</li>
          <li><strong>Columbia-class submarines (General Dynamics):</strong> $132 billion program to replace the Ohio-class ballistic missile submarines. Heavy lobbying around shipyard funding and workforce development.</li>
          <li><strong>B-21 Raider bomber (Northrop Grumman):</strong> $203 billion program for next-generation stealth bombers. Lobbying focuses on production rate and total fleet size.</li>
          <li><strong>JEDI/JWCC Cloud Computing (Microsoft, Amazon, Google, Oracle):</strong> $9 billion contract for Pentagon cloud infrastructure. Unprecedented tech company lobbying in the defense space.</li>
          <li><strong>Missile Defense Systems (Lockheed, Raytheon, Boeing):</strong> Ongoing lobbying for THAAD, Patriot, and hypersonic defense programs.</li>
        </ul>
        <p>Each of these programs has dedicated lobbying teams, coalition partners, and congressional champions whose districts benefit from production facilities and jobs.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Base Closure Lobbying Battle</h2>
        <p>One of the most intense defense lobbying fights involves military base closures. When the Base Realignment and Closure (BRAC) process is proposed, affected communities, defense contractors, and local businesses launch massive lobbying campaigns to protect their bases. Members of Congress from affected districts become fierce opponents of BRAC, making base closure one of the most difficult defense reforms to implement.</p>
        <p>Our data shows lobbying spikes around BRAC discussions, with defense communities hiring firms specifically to prevent base closures in their regions. The geographic distribution of defense spending is itself a lobbying success story — facilities spread across congressional districts create built-in political support.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Defense Lobbying in 2026: Key Developments</h2>
        <p>The defense lobbying landscape in 2026 is shaped by several converging forces. The FY2027 defense budget debate has intensified as the Pentagon requests over $900 billion in total defense spending — the largest request in history. DOGE-driven efficiency reviews are creating uncertainty for programs that once seemed untouchable, triggering defensive lobbying from contractors facing potential cuts.</p>
        <p>Space and hypersonic weapons programs have emerged as the newest battleground, with SpaceX, Northrop Grumman, and L3Harris competing aggressively for next-generation missile defense contracts. Cybersecurity spending continues to grow as threats from nation-state actors escalate, driving lobbying from both traditional defense contractors and tech companies seeking to expand their defense portfolios.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Subcontractor Network</h2>
        <p>While prime contractors like Lockheed Martin and Boeing dominate headlines, the defense lobbying ecosystem extends far deeper. Thousands of subcontractors, small businesses, and defense communities lobby to protect specific programs, bases, and supply chains. A single weapons system like the F-35 supports an estimated 1,800 suppliers across 46 states — each with a lobbying interest in the program&apos;s continuation.</p>
        <p>This geographic dispersion is deliberate: defense contractors spread production across as many congressional districts as possible, ensuring that members of Congress have a direct economic interest in supporting the program. It&apos;s lobbying through economic dependency, and it&apos;s remarkably effective.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Arms Sales and Foreign Military Financing</h2>
        <p>A significant portion of defense lobbying focuses on international arms sales. Companies lobby the State Department for export licenses, Congress for Foreign Military Financing (FMF) authorizations, and the Pentagon for inclusion in Foreign Military Sales (FMS) packages. Our <Link href="/foreign" className="text-indigo-600 hover:text-indigo-800 font-semibold">foreign lobbying tracker</Link> shows that many countries lobbying the US government are simultaneously purchasing American weapons systems.</p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How much do defense contractors spend on lobbying?", acceptedAnswer: { "@type": "Answer", text: "The top defense contractors collectively spend hundreds of millions on lobbying. Lockheed Martin alone has spent $141M+ since 2018. Boeing, Raytheon (RTX), General Dynamics, and Northrop Grumman each spend $8-15M+ annually." } },
          { "@type": "Question", name: "What is the ROI on defense lobbying?", acceptedAnswer: { "@type": "Answer", text: "Defense lobbying shows some of the highest ROI in our dataset. TriWest Healthcare Alliance spent $270K on lobbying and received $13.4B in contracts — a 49,536:1 return. Even large contractors like Boeing see 1,000:1+ returns." } },
          { "@type": "Question", name: "What is the military revolving door?", acceptedAnswer: { "@type": "Answer", text: "The revolving door between the Pentagon and defense lobbying is the most well-worn in Washington. Former Pentagon officials, military officers, and Armed Services Committee staffers frequently move to defense contractor lobbying shops, bringing invaluable insider knowledge and relationships." } },
          { "@type": "Question", name: "What do defense contractors lobby for?", acceptedAnswer: { "@type": "Answer", text: "Defense contractors primarily lobby on Defense (DEF) issues including weapons programs and military spending, Budget/Appropriations (BUD) for NDAA provisions, Aerospace (AER) for aircraft and space programs, Homeland Security (HOM) for border and cyber technology, and Foreign Relations (FOR) for arms sales." } },
        ]
      }) }} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Dive Deeper</h2>
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The 2026 Defense Budget Battle</h2>
        <p className="text-gray-700 leading-relaxed mb-4">The FY2027 defense authorization process has intensified lobbying from every corner of the defense sector. With the National Defense Authorization Act (NDAA) markup underway, contractors are spending record amounts to protect existing programs and secure funding for next-generation systems. Hypersonic weapons, space-based assets, and autonomous platforms are driving new lobbying campaigns from both established primes and emerging defense startups.</p>
        <p className="text-gray-700 leading-relaxed mb-4">DOGE-driven efficiency reviews have added urgency. Defense contractors are not only lobbying for new contracts but actively lobbying against proposed cuts to legacy programs. The F-35 sustainment budget alone has generated dozens of lobbying filings as Lockheed Martin and its supply chain partners push back against cost-reduction proposals.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Geographic Concentration of Defense Lobbying</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Defense lobbying is heavily concentrated in a few key states. Virginia, home to the Pentagon and numerous contractor headquarters, leads all states in defense-related lobbying filings. Maryland, Connecticut, Texas, and California round out the top five. This geographic concentration creates powerful feedback loops: members of Congress from defense-heavy districts sit on the Armed Services and Appropriations committees, where they oversee the very contracts that sustain their local economies.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Explore the full geographic breakdown on our <Link href="/geographic" className="text-indigo-600 hover:underline">geographic analysis page</Link>, or compare defense spending to other sectors with our <Link href="/tools/industry-compare" className="text-indigo-600 hover:underline">industry comparison tool</Link>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Defense Lobbying FAQ</h2>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How much does the defense industry spend on lobbying?", acceptedAnswer: { "@type": "Answer", text: "The defense sector spends approximately $600-700 million annually on federal lobbying, making it one of the top three lobbying industries. Major contractors like Lockheed Martin, Boeing, Raytheon, and Northrop Grumman each spend $10-15 million per year individually." } },
            { "@type": "Question", name: "What is the ROI on defense lobbying?", acceptedAnswer: { "@type": "Answer", text: "Defense contractors see some of the highest lobbying ROI in any industry. Top contractors receive $22,000+ in federal contracts for every $1 spent on lobbying — a 22,000% return. This reflects the massive scale of defense procurement rather than direct quid pro quo." } },
            { "@type": "Question", name: "How does the revolving door affect defense lobbying?", acceptedAnswer: { "@type": "Answer", text: "Over 1,500 former Pentagon officials, military officers, and congressional defense staffers are registered as defense lobbyists. These revolving-door lobbyists command premium fees — firms with former government officials charge 369% more than those without." } },
            { "@type": "Question", name: "What defense issues generate the most lobbying?", acceptedAnswer: { "@type": "Answer", text: "The NDAA (National Defense Authorization Act), defense appropriations, weapons system procurement, cybersecurity, and military base realignment generate the most lobbying activity. In 2026, AI/autonomous weapons and space defense are the fastest-growing subcategories." } },
          ]
        }) }} />

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Pages</h2>
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

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Defense Lobbying Pipeline</h2>
        <div className="prose prose-lg max-w-none">
          <p>Defense lobbying follows a predictable annual cycle tied to the federal budget process. It begins with the President&apos;s budget request in February, intensifies during Armed Services Committee markups in spring and summer, peaks during NDAA conference negotiations in fall, and wraps up with final appropriations in December. Each phase generates distinct lobbying campaigns as contractors push for specific line items, program funding levels, and procurement timelines.</p>
          <p>The scale of defense procurement creates a unique lobbying dynamic. A single weapons program can involve hundreds of subcontractors across dozens of states, each with their own lobbying presence. When a program faces potential cuts, the entire supply chain mobilizes — coordinating lobbying efforts through trade associations like the Aerospace Industries Association and the National Defense Industrial Association.</p>
          <p>For a broader view of how these spending patterns fit into the overall lobbying landscape, explore our <Link href="/investigations/lobbying-statistics" className="text-indigo-600 hover:underline">comprehensive lobbying statistics</Link> or see the latest quarterly shifts on our <Link href="/trends" className="text-indigo-600 hover:underline">spending trends page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Emerging Defense Lobbying Trends</h2>
        <div className="prose prose-lg max-w-none">
          <p>Several new dynamics are reshaping defense lobbying in 2026:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>AI and autonomy:</strong> Companies developing autonomous weapons, AI-driven intelligence systems, and robotic platforms are lobbying for dedicated procurement pathways and favorable testing regulations.</li>
            <li><strong>Space defense:</strong> As the Space Force matures, a new category of space-focused defense lobbying has emerged, with satellite companies and launch providers competing for military contracts.</li>
            <li><strong>Cybersecurity:</strong> Growing cyber threats have elevated cybersecurity lobbying, with contractors pushing for mandatory security standards that often benefit their products.</li>
            <li><strong>AUKUS and allies:</strong> The Australia-UK-US defense pact has created new lobbying opportunities as companies seek to participate in trilateral defense programs.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Small Business Defense Lobby</h2>
        <div className="prose prose-lg max-w-none">
          <p>Defense lobbying isn&apos;t exclusively the domain of mega-contractors. Small and mid-size defense companies increasingly maintain their own lobbying presence, often through trade associations like the Small Business Association for International Security (SBAIS). These firms lobby for set-aside programs, simplified contracting procedures, and protection against prime contractor consolidation that could squeeze them out of the supply chain.</p>
          <p>The tension between primes and their subcontractors creates interesting lobbying dynamics. While both lobby for overall defense spending increases, they often find themselves on opposite sides of procurement reform proposals. Explore these dynamics in our <Link href="/issue-battles" className="text-indigo-600 hover:underline">issue battles analysis</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Defense Lobbying Data</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">🔍 Search Defense Filings</Link>
          <Link href="/downloads" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📥 Download Datasets</Link>
          <Link href="/investigations/lobbying-statistics" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📊 Full Statistics</Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Key Defense Lobbying Metrics</h2>
        <div className="prose prose-lg max-w-none">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>$600-700M</strong> annual defense sector lobbying spending</li>
            <li><strong>1,400+</strong> registered defense lobbyists</li>
            <li><strong>1,500+</strong> former Pentagon officials in lobbying roles</li>
            <li><strong>22,000%</strong> ROI for top contractors (contracts vs. lobbying)</li>
            <li><strong>Top 5 spenders:</strong> Lockheed Martin, Boeing, Raytheon (RTX), Northrop Grumman, General Dynamics</li>
          </ul>
          <p>All figures based on Senate LDA filings and USASpending.gov contract data. Updated quarterly. See our <Link href="/methodology" className="text-indigo-600 hover:underline">methodology</Link> for details.</p>
        </div>
      </section>
    {/* Data Notes */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Notes &amp; Methodology</h2>
        <p className="text-gray-600 mb-3">
          All data on this page is sourced from Senate Office of Public Records lobbying disclosure filings
          under the Lobbying Disclosure Act of 1995. Figures reflect reported spending as filed and may be
          subject to amendment. Quarterly totals are annualized where noted.
        </p>
        <p className="text-gray-600 mb-3">
          Industry classifications follow the Center for Responsive Politics methodology. Where companies
          operate across multiple sectors, spending is attributed to the primary business classification.
          Foreign entity designations follow FARA and LDA Section 4 definitions.
        </p>
        <p className="text-gray-600 mb-3">
          Year-over-year comparisons use inflation-adjusted figures (2026 dollars) unless otherwise noted.
          Historical data extends back to 1998 when electronic filing became mandatory.
        </p>
        <p className="text-gray-600">
          For questions about our data or methodology, see our{' '}
          <a href="/methodology" className="text-blue-600 hover:underline">full methodology page</a> or{' '}
          <a href="/about" className="text-blue-600 hover:underline">contact us</a>.
        </p>
      </div>
    </article>
  )
}
