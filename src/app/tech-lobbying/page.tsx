import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tech Lobbying: Google, Meta, Amazon, Apple Data',
  description: 'How much do tech companies spend on lobbying? Detailed spending data for Google, Meta, Amazon, Apple, and Microsoft. Issues, trends, and influence in Washington (2018-2026).',
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

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Evolution of Big Tech's DC Strategy</h2>
        <p>Silicon Valley's relationship with Washington has undergone a dramatic transformation. In the early 2000s, tech companies famously avoided DC, viewing government as slow, bureaucratic, and irrelevant to innovation. Google didn't open a DC office until 2005. Facebook's first Washington lobbyist wasn't hired until 2009.</p>
        <p>This hands-off approach ended abruptly when tech companies realized that government could dramatically impact their business models. Privacy regulations threatened advertising revenue. Antitrust enforcement threatened business acquisitions and platform power. Content moderation became a political battlefield. And suddenly, not lobbying was riskier than lobbying.</p>
        <p>Today, every major tech company maintains extensive Washington operations with dozens of lobbyists, dedicated government relations teams, and close ties to both parties. The transformation is complete: Big Tech now lobbies like Big Oil, Big Pharma, and Big Defense have for decades.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Tech's Lobbying Tactics</h2>
        <p>Tech companies employ several distinctive lobbying strategies:</p>
        <ul>
          <li><strong>Technical expertise positioning:</strong> Tech lobbyists emphasize their role as educators, offering to explain complex technology to lawmakers and their staff</li>
          <li><strong>Innovation framing:</strong> Positioning regulation as a threat to American innovation and competitiveness with China</li>
          <li><strong>Coalition fragmentation:</strong> Preventing unified tech regulation by highlighting differences between platforms, hardware makers, and service providers</li>
          <li><strong>State preemption:</strong> Lobbying for federal legislation to preempt stricter state laws (particularly California's privacy rules)</li>
          <li><strong>Academic partnerships:</strong> Funding university research centers and think tanks that produce friendly policy recommendations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Crypto and Fintech: Tech&apos;s Lobbying Allies</h2>
        <p>The cryptocurrency industry has emerged as a powerful new lobbying force closely aligned with Big Tech interests. Companies like Coinbase, Ripple, and the Blockchain Association have ramped from near-zero lobbying presence to millions in annual spending since 2021. Their primary issues — SEC oversight, stablecoin regulation, and digital asset classification — overlap with Big Tech&apos;s broader fight against regulatory expansion.</p>
        <p>Fintech companies like Stripe, Square (Block), and PayPal also contribute to the tech lobbying ecosystem, pushing for modernized payment regulations and opposing traditional banking-style compliance requirements.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The State-Level Dimension</h2>
        <p>While federal lobbying captures the most attention, tech companies are simultaneously fighting regulatory battles at the state level. California&apos;s AI transparency laws, Texas and Florida&apos;s content moderation requirements, and multiple state privacy laws (following the CCPA model) have created a patchwork of regulations that tech companies are lobbying both to shape and, in some cases, to preempt with federal legislation.</p>
        <p>This dual-front strategy means that total tech influence spending is significantly higher than federal lobbying disclosures alone suggest. See our <Link href="/geographic" className="text-indigo-600 hover:text-indigo-800 font-semibold">geographic analysis</Link> for state-by-state lobbying patterns.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Tech Lobbying vs. Campaign Contributions</h2>
        <p>Lobbying is just one channel of tech industry influence. Big Tech companies and their executives are also major political donors. While campaign contributions and lobbying serve different purposes — contributions build relationships; lobbying delivers specific policy asks — they work synergistically. A member of Congress who received significant campaign support from a tech company is more likely to take a meeting with that company&apos;s lobbyist.</p>
        <p>Our sister site <a href="https://www.election-money.thedataproject.ai" className="text-indigo-600 hover:text-indigo-800">Election Money Explorer</a> tracks campaign finance data that complements the lobbying data shown here.</p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How much do Big Tech companies spend on lobbying?", acceptedAnswer: { "@type": "Answer", text: "The five largest tech companies — Amazon, Meta, Alphabet (Google), Apple, and Microsoft — collectively spend over $70 million per year on federal lobbying. Amazon leads at $20M+/year, followed by Meta at $19M+/year." } },
          { "@type": "Question", name: "What do tech companies lobby for?", acceptedAnswer: { "@type": "Answer", text: "Tech companies lobby on antitrust enforcement, AI regulation, data privacy legislation, Section 230 content moderation protections, defense contracts (cloud computing), H-1B immigration visas, corporate taxation, trade policy and data localization rules, and more." } },
          { "@type": "Question", name: "How fast is tech lobbying growing?", acceptedAnswer: { "@type": "Answer", text: "Technology lobbying is growing at approximately 15% annually — the fastest of any sector. Big Tech lobbying spending has more than quadrupled since 2015, with over 500 registered tech lobbyists now operating in Washington." } },
          { "@type": "Question", name: "Why did tech lobbying increase so much?", acceptedAnswer: { "@type": "Answer", text: "Several converging forces drove the increase: DOJ/FTC antitrust investigations, proposed privacy legislation, the rush to shape AI regulation, threats to Section 230 content moderation protections, and competition for multi-billion-dollar defense cloud contracts." } },
        ]
      }) }} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>AI Regulation: The Defining Battle of 2026</h2>
        <p className="text-gray-700 leading-relaxed mb-4">AI-related lobbying has surged over 400% since 2022, making it the fastest-growing lobbying subcategory in the technology sector. Every major tech company — from Google and Microsoft to OpenAI and Anthropic — has dramatically expanded its Washington presence to shape the regulatory framework for artificial intelligence. The debate centers on whether to pursue comprehensive federal AI legislation or continue with the current patchwork of executive orders and agency guidance.</p>
        <p className="text-gray-700 leading-relaxed mb-4">What makes AI lobbying unique is the breadth of industries involved. It&apos;s not just tech companies — healthcare firms, financial institutions, defense contractors, and automakers are all lobbying on AI policy because the technology touches every sector. Track AI-related filings on our <Link href="/issues/CPT" className="text-indigo-600 hover:underline">technology issues page</Link>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Crypto and Fintech: A New Lobbying Powerhouse</h2>
        <p className="text-gray-700 leading-relaxed mb-4">The cryptocurrency industry went from near-zero lobbying presence in 2018 to spending over $80 million annually by 2025. Coinbase, Ripple, the Blockchain Association, and a16z Crypto have built sophisticated Washington operations. The passage of stablecoin legislation and ongoing SEC regulatory battles have driven this <Link href="/investigations/crypto-lobbying-explosion" className="text-indigo-600 hover:underline">crypto lobbying explosion</Link>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Tech Lobbying by the Numbers</h2>
        <p className="text-gray-700 leading-relaxed mb-4">The technology sector&apos;s lobbying footprint in 2026:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li><strong>$800M+</strong> annual lobbying spending across all tech subcategories</li>
          <li><strong>2,500+</strong> registered lobbyists working on tech issues</li>
          <li><strong>Top spenders:</strong> Amazon, Meta, Google, Apple, Microsoft — each spending $15-25M annually</li>
          <li><strong>Fastest growth:</strong> AI policy, data privacy, and cryptocurrency regulation</li>
          <li><strong>Key committees:</strong> Senate Commerce, House Energy &amp; Commerce, Senate Judiciary</li>
        </ul>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How much does Big Tech spend on lobbying?", acceptedAnswer: { "@type": "Answer", text: "The top five tech companies — Amazon, Meta, Google, Apple, and Microsoft — collectively spend over $80 million per year on federal lobbying. The broader technology sector, including telecom and internet companies, exceeds $800 million annually." } },
            { "@type": "Question", name: "What tech issues generate the most lobbying?", acceptedAnswer: { "@type": "Answer", text: "AI regulation, data privacy, antitrust enforcement, cryptocurrency regulation, and content moderation (Section 230) are the top tech lobbying issues in 2026. AI has seen the fastest growth, with lobbying spending up 400%+ since 2022." } },
            { "@type": "Question", name: "Is crypto lobbying effective?", acceptedAnswer: { "@type": "Answer", text: "The crypto industry's lobbying has shown measurable results. Stablecoin legislation has advanced through Congress, and several proposed regulatory frameworks have been softened after industry engagement. The sector went from near-zero presence to $80M+ in annual spending in just five years." } },
          ]
        }) }} />

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Dive Deeper</h2>
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

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Antitrust Lobbying Battle</h2>
        <div className="prose prose-lg max-w-none">
          <p>Big Tech&apos;s most expensive lobbying battle centers on antitrust enforcement. Google, Apple, Amazon, and Meta have collectively spent hundreds of millions lobbying against proposed legislation that would restrict self-preferencing, mandate interoperability, or break up integrated platforms. The American Innovation and Choice Online Act and similar bills have generated intense lobbying on both sides — with smaller tech companies and competitors lobbying <em>for</em> antitrust action.</p>
          <p>This battle illustrates a key dynamic in tech lobbying: the industry is not monolithic. Big Tech incumbents and smaller challengers often lobby on opposite sides of the same issue. Track these dynamics on our <Link href="/issue-battles" className="text-indigo-600 hover:underline">issue battles page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Privacy: The Next Frontier</h2>
        <div className="prose prose-lg max-w-none">
          <p>Federal data privacy legislation remains one of the most lobbied tech issues. With no comprehensive federal privacy law, the patchwork of state laws (led by California&apos;s CCPA/CPRA) creates compliance headaches that make industry <em>supportive</em> of federal legislation — as long as it preempts stricter state laws. Consumer advocacy groups lobby for the opposite: a federal floor, not a ceiling.</p>
          <p>The advertising and data broker industries are particularly active on privacy lobbying, as their business models depend on data collection practices that proposed legislation could curtail. Explore the full landscape on our <Link href="/trends" className="text-indigo-600 hover:underline">spending trends page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Section 230 and Content Moderation</h2>
        <div className="prose prose-lg max-w-none">
          <p>Section 230 of the Communications Decency Act — which shields platforms from liability for user-generated content — remains one of the most lobbied provisions in U.S. law. Social media companies lobby to preserve it, while publishers, child safety advocates, and some lawmakers push for reform or repeal. The debate has intensified as AI-generated content blurs the line between platform curation and editorial decision-making.</p>
          <p>Track all technology-related lobbying on our <Link href="/issues/CPT" className="text-indigo-600 hover:underline">technology issues page</Link> or compare tech spending to other sectors on the <Link href="/tools/industry-compare" className="text-indigo-600 hover:underline">industry comparison tool</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Tech Lobbying Data</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">🔍 Search Tech Filings</Link>
          <Link href="/downloads" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📥 Download Datasets</Link>
          <Link href="/investigations/lobbying-statistics" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📊 Full Statistics</Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Telecom: The Original Tech Lobby</h2>
        <div className="prose prose-lg max-w-none">
          <p>Before Big Tech dominated headlines, telecommunications companies were the technology sector&apos;s biggest lobbying force. AT&amp;T, Comcast, Verizon, and T-Mobile continue to spend heavily on spectrum policy, net neutrality, broadband subsidies, and merger approvals. Telecom lobbying predates the modern tech sector and provides important context for understanding how technology companies approach Washington.</p>
          <p>Today, the lines between tech and telecom are blurring. Cloud providers compete with cable companies for enterprise connectivity. Streaming services challenge traditional broadcast models. And 5G/6G spectrum allocation affects both sectors. These converging interests mean that &quot;tech lobbying&quot; is broader than Silicon Valley alone. Explore the full landscape on our <Link href="/industries" className="text-indigo-600 hover:underline">industry breakdown page</Link>.</p>
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
