import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Federal Lobbying Works: A Complete Guide',
  description: 'Learn how federal lobbying works in the United States. Understand the Lobbying Disclosure Act, lobbyist registration, quarterly reports, the revolving door, and how $37.7 billion flows through Washington.',
  keywords: ['how lobbying works', 'what is lobbying', 'lobbying disclosure act', 'federal lobbying', 'lobbyist registration', 'K Street'],
  openGraph: {
    title: 'How Federal Lobbying Works: A Complete Guide',
    description: 'Everything you need to know about federal lobbying — from registration to disclosure, the revolving door to quarterly reports.',
    url: 'https://www.openlobby.us/how-lobbying-works',
  },
}

export default function HowLobbyingWorksPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is lobbying?', acceptedAnswer: { '@type': 'Answer', text: 'Lobbying is the act of attempting to influence government officials on behalf of an organization. In the US, professional lobbyists must register under the Lobbying Disclosure Act and file quarterly reports detailing their activities, clients, issues, and income.' } },
      { '@type': 'Question', name: 'How much money is spent on lobbying?', acceptedAnswer: { '@type': 'Answer', text: 'Between 2018 and 2025, organizations spent $37.7 billion on federal lobbying. In 2025 alone, spending hit $6.0 billion — an all-time record driven by tariff fights, AI regulation, and healthcare policy battles.' } },
      { '@type': 'Question', name: 'Who are the biggest lobbying spenders?', acceptedAnswer: { '@type': 'Answer', text: 'The U.S. Chamber of Commerce is the largest lobbying spender at over $607 million since 2018. Other top spenders include Business Roundtable, Meta Platforms, and major pharmaceutical and defense companies.' } },
      { '@type': 'Question', name: 'What is the revolving door in lobbying?', acceptedAnswer: { '@type': 'Answer', text: 'The revolving door refers to the movement of government officials into lobbying careers. Over 5,000 former government officials are now registered lobbyists. Firms employing these former officials charge 369% more than those without, reflecting the value of insider access.' } },
      { '@type': 'Question', name: 'Is lobbying legal?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lobbying is protected by the First Amendment right to petition the government. However, the Lobbying Disclosure Act of 1995 requires lobbyists to register and file quarterly reports disclosing their clients, issues, and income. These public filings are what OpenLobby analyzes.' } },
    ],
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="mb-12">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Complete Guide</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          How Federal Lobbying Works
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Every year, thousands of organizations spend billions of dollars trying to influence Congress and federal agencies.
          Here&apos;s how the system works, who the players are, and what the data reveals.
        </p>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '$37.7B', label: 'Total Lobbying (2018-2025)' },
          { value: '726,000+', label: 'Filings in Our Database' },
          { value: '23,545', label: 'Registered Lobbyists' },
          { value: '79', label: 'Issue Categories' },
        ].map(s => (
          <div key={s.label} className="bg-indigo-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
            <div className="text-xs text-gray-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-bold" style={{ fontFamily: 'inherit' }}>
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What Is Lobbying?</h2>
        <p>
          Lobbying is the act of attempting to influence decisions made by government officials — most commonly legislators
          and members of regulatory agencies. In the United States, lobbying is a constitutionally protected activity under
          the First Amendment&apos;s right to &quot;petition the Government for a redress of grievances.&quot;
        </p>
        <p>
          In practice, federal lobbying involves paid professionals (lobbyists) who contact members of Congress, their staff,
          and executive branch officials on behalf of clients — corporations, trade associations, nonprofits, foreign governments,
          and other organizations.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Disclosure Act (LDA)</h2>
        <p>
          The <strong>Lobbying Disclosure Act of 1995</strong> (amended in 2007 by the Honest Leadership and Open Government Act)
          requires lobbyists to register with the Secretary of the Senate and the Clerk of the House if they meet certain thresholds:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>They make more than one lobbying contact</li>
          <li>They spend at least 20% of their time on lobbying activities for a particular client</li>
          <li>The client spends more than $14,000 on lobbying in a quarter (if using outside firms) or $14,000 on in-house lobbying activities</li>
        </ul>
        <p>
          Registered lobbyists must file quarterly reports (LD-2 forms) disclosing their clients, the issues they lobbied on,
          the government entities they contacted, and how much they were paid. This is the data that powers OpenLobby —
          we&apos;ve analyzed <strong>over 726,000 of these filings</strong> from 2018 to 2025.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How Lobbying Actually Happens</h2>
        <p>Lobbying takes many forms:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Direct lobbying:</strong> Meeting with members of Congress or their staff, testifying at hearings, providing policy expertise</li>
          <li><strong>Grassroots lobbying:</strong> Organizing constituent campaigns, email drives, and public pressure</li>
          <li><strong>Coalition building:</strong> Forming alliances with other organizations around shared policy goals</li>
          <li><strong>Issue advertising:</strong> Running ads to shape public opinion on policy issues</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door</h2>
        <p>
          One of the most consequential aspects of the lobbying industry is the &quot;revolving door&quot; — the movement of
          individuals between government positions and lobbying jobs. Our data shows that <strong>over 5,000 former government
          officials</strong> are currently registered as federal lobbyists.
        </p>
        <p>
          These ex-government lobbyists command a significant premium. Our analysis found that lobbying firms with former
          government officials charge <Link href="/revolving-door-premium" className="text-indigo-600 hover:text-indigo-800 font-semibold">369% more</Link> than
          firms without them — a clear market signal of the value of insider connections.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Quarterly Reporting</h2>
        <p>
          Lobbying firms and in-house lobbyists must file LD-2 reports every quarter with the Senate Office of Public Records.
          These reports include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Client name and description</li>
          <li>Income received (or expenses for in-house lobbyists)</li>
          <li>Specific lobbying issues (using 79 standardized issue codes like HCR for healthcare, DEF for defense)</li>
          <li>Names of lobbyists who worked on the matter</li>
          <li>Government entities contacted (Senate, House, specific agencies)</li>
          <li>Specific bills lobbied on</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Who Spends the Most?</h2>
        <p>
          The biggest lobbying spenders are typically large corporations, industry trade associations, and major advocacy groups.
          The top lobbying issues by total spending include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Budget/Appropriations (BUD):</strong> $2.6 billion — the single largest issue, as organizations fight for federal funding</li>
          <li><strong>Healthcare (HCR):</strong> $2.3 billion — driven by pharmaceutical companies, hospitals, and insurers</li>
          <li><strong>Defense (DEF):</strong> Billions in defense contractor lobbying, with some firms seeing <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:text-indigo-800 font-semibold">49,536:1 ROI</Link> on their lobbying investment</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Why Lobbying Transparency Matters</h2>
        <p>
          In a democracy, citizens have a right to know who is trying to influence their government and how much they&apos;re spending.
          While lobbying is legal and often serves important functions — providing expertise to lawmakers, representing diverse interests —
          the scale and opacity of the industry raises serious concerns about whose voices are heard in Washington.
        </p>
        <p>
          That&apos;s why we built OpenLobby: to make this public data truly accessible, analyzable, and understandable. Every filing
          shown on this site is a public record, required by law. We just made it searchable.
        </p>
      </div>

      {/* CTAs */}
      <div className="mt-16 grid sm:grid-cols-3 gap-4">
        <Link href="/clients" className="block p-5 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition-colors">
          <div className="font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>See Top Clients</div>
          <p className="text-sm text-gray-600 mt-1">Who spends the most</p>
        </Link>
        <Link href="/revolving-door" className="block p-5 bg-red-50 rounded-xl text-center hover:bg-red-100 transition-colors">
          <div className="font-bold text-red-700" style={{ fontFamily: 'var(--font-serif)' }}>Revolving Door</div>
          <p className="text-sm text-gray-600 mt-1">Former officials now lobbying</p>
        </Link>
        <Link href="/investigations" className="block p-5 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors">
          <div className="font-bold text-amber-700" style={{ fontFamily: 'var(--font-serif)' }}>Investigations</div>
          <p className="text-sm text-gray-600 mt-1">Deep-dive articles</p>
        </Link>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Who Hires Lobbyists?</h2>
        <p>Lobbying clients span an enormous range of organizations, all with different motivations and resources:</p>
        <ul>
          <li><strong>Fortune 500 companies:</strong> Hire both in-house government affairs teams and multiple outside firms. May spend $10M+ annually covering dozens of issues.</li>
          <li><strong>Trade associations:</strong> The U.S. Chamber of Commerce, PhRMA, American Bankers Association, and similar groups pool resources from member companies to amplify industry voices.</li>
          <li><strong>Nonprofits and advocacy groups:</strong> ACLU, Sierra Club, AARP, and thousands of others lobby on behalf of their members and causes, often with far smaller budgets than corporate clients.</li>
          <li><strong>State and local governments:</strong> Cities, counties, and states hire lobbyists to secure federal funding and influence policies affecting their jurisdictions.</li>
          <li><strong>Foreign governments:</strong> Over 100 countries lobby the U.S. government through American lobbying firms. See our <Link href="/foreign" className="text-indigo-600 hover:text-indigo-800 font-semibold">foreign lobbying tracker</Link>.</li>
          <li><strong>Universities:</strong> Harvard, MIT, Stanford, and other universities lobby on research funding, student loans, immigration, and intellectual property.</li>
          <li><strong>Small businesses and startups:</strong> Sometimes band together through industry groups or hire firms for specific battles affecting their markets.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Economics of Lobbying</h2>
        <p>Lobbying isn&apos;t charity — it&apos;s an investment with measurable returns. Academic research by Raquel Alexander, Stephen Mazza, and Susan Scholz found that firms lobbying on the American Jobs Creation Act of 2004 received a <strong>return of $220 for every $1 spent on lobbying</strong>. Other studies have found more modest but still significant returns of $6-$20 per dollar spent.</p>
        <p>Our own <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:text-indigo-800 font-semibold">Lobbying ROI Calculator</Link> cross-references lobbying spending with federal contract data and finds even more dramatic returns in specific sectors. Defense contractors routinely see thousand-to-one returns, making lobbying one of the most profitable investments a company can make.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>K Street: The Geography of Influence</h2>
        <p>K Street in Washington, DC has become synonymous with lobbying, though most major lobbying firms are actually scattered throughout downtown DC and Northern Virginia. The geographic concentration of lobbying is striking: our <Link href="/geographic" className="text-indigo-600 hover:text-indigo-800 font-semibold">geographic analysis</Link> shows that DC has $27,105 in per-capita lobbying spending, dwarfing every state by orders of magnitude.</p>
        <p>This concentration creates a self-reinforcing ecosystem. Former government officials don&apos;t need to relocate to become lobbyists. Clients can meet multiple lobbying firms in a single trip. And the proximity to Capitol Hill and executive branch agencies makes in-person meetings — still the most effective lobbying tool — easy to arrange.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What Lobbying Doesn&apos;t Include</h2>
        <p>The LDA only captures a specific slice of influence activities. Several significant categories fall outside its scope:</p>
        <ul>
          <li><strong>Campaign contributions:</strong> Regulated separately under federal election law, not the LDA</li>
          <li><strong>Grassroots lobbying:</strong> Organizing public pressure campaigns doesn&apos;t require LDA registration unless the organizer also conducts direct lobbying</li>
          <li><strong>State and local lobbying:</strong> Separate state-level disclosure requirements apply</li>
          <li><strong>Strategic consulting:</strong> &quot;Advisors&quot; who don&apos;t directly contact officials may avoid registration</li>
          <li><strong>Think tank funding:</strong> Funding research organizations that influence policy indirectly</li>
        </ul>
        <p>The total universe of influence spending is estimated to be 2-3 times larger than what LDA filings capture. This &quot;shadow lobbying&quot; is explored in our <Link href="/analysis" className="text-indigo-600 hover:text-indigo-800 font-semibold">analysis section</Link>.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Enforcement and Compliance</h2>
        <p>While the LDA requires disclosure, enforcement has historically been weak. The Government Accountability Office (GAO) has repeatedly found that a significant percentage of lobbyists fail to register, file late, or underreport their activities. Penalties for non-compliance can reach $200,000 in civil fines, but enforcement actions are rare.</p>
        <p>The Honest Leadership and Open Government Act of 2007 strengthened disclosure requirements and increased penalties, but critics argue that the system still relies heavily on self-reporting with limited verification. This means that the data on OpenLobby — while the most comprehensive public source available — likely understates the true scale of lobbying activity.</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Dive Deeper</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/investigations/what-is-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📖 What Is Lobbying?</div>
            <div className="text-xs text-gray-500 mt-1">The complete explainer guide</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
            <div className="text-xs text-gray-500 mt-1">Where lobbying dollars actually go</div>
          </Link>
          <Link href="/tech-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Tech Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Industry overview</div>
          </Link>
          <Link href="/pharmaceutical-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💊 Pharma Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Industry overview</div>
          </Link>
          <Link href="/defense-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ Defense Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Industry overview</div>
          </Link>
        </div>
      </div>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Economics of Lobbying</h2>
        <div className="prose prose-lg max-w-none">
          <p>Why do organizations spend billions on lobbying? Because it works. Academic research consistently finds that lobbying delivers exceptional returns on investment. In the defense sector, top contractors receive <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:underline">$22,000 in federal contracts for every $1 spent on lobbying</Link>. Even in less contract-heavy industries, lobbying can prevent costly regulations, secure favorable tax provisions, or shape market rules to benefit incumbents.</p>
          <p>The economics create a self-reinforcing cycle. Once one company in an industry starts lobbying, competitors must follow or risk being disadvantaged. This &quot;lobbying arms race&quot; is a key driver of the industry&apos;s growth from $1.4 billion in 1998 to $6.0 billion in 2025. Industries where government decisions have outsized financial impact — healthcare, defense, finance, energy — consistently lead in lobbying expenditure.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Common Lobbying Strategies</h2>
        <div className="prose prose-lg max-w-none">
          <p><strong>Direct lobbying</strong> involves meetings with members of Congress, their staff, and executive branch officials. This is the core of most lobbying activity and is what LDA filings primarily capture.</p>
          <p><strong>Grassroots lobbying</strong> mobilizes constituents to contact their representatives. Trade associations often fund campaigns encouraging members to call or write their senators about pending legislation.</p>
          <p><strong>Coalition building</strong> brings together diverse organizations around a shared policy goal. A tech company might join forces with civil liberties groups to oppose surveillance legislation, or pharmaceutical firms might align with patient advocacy groups on FDA reform.</p>
          <p><strong>Strategic communications</strong> includes issue advertising, op-eds, and media engagement designed to shape public opinion and create a favorable environment for policy change.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Reform Debates</h2>
        <div className="prose prose-lg max-w-none">
          <p>Several reform proposals are perennially debated in Washington. Lowering the 20% time threshold for lobbyist registration would capture more influence activity. Extending cooling-off periods for former government officials (currently 1-2 years depending on position) would slow the <Link href="/investigations/revolving-door-exposed" className="text-indigo-600 hover:underline">revolving door</Link>. And requiring real-time electronic filing (rather than quarterly paper-based reports) would make lobbying data more timely and accessible.</p>
          <p>Ironically, the lobbying industry itself lobbies against stricter disclosure rules. Track these efforts on our <Link href="/issues/LOB" className="text-indigo-600 hover:underline">lobbying regulation issues page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Calendar</h2>
        <div className="prose prose-lg max-w-none">
          <p>Federal lobbying follows a predictable calendar tied to congressional and budgetary cycles:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>January-February:</strong> President&apos;s budget request sets the agenda. Industries lobby to protect or increase their funding levels.</li>
            <li><strong>March-June:</strong> Committee markups and hearings. The most intense period for direct lobbying as legislation takes shape.</li>
            <li><strong>July-September:</strong> NDAA and appropriations markup. Defense and security lobbying peaks.</li>
            <li><strong>October-December:</strong> Year-end legislation and omnibus spending bills. Last-chance lobbying for provisions that didn&apos;t make earlier bills.</li>
          </ul>
          <p>See how these patterns play out in the data on our <Link href="/trends" className="text-indigo-600 hover:underline">spending trends page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>K Street: The Center of the Lobbying Universe</h2>
        <div className="prose prose-lg max-w-none">
          <p>K Street in Washington, DC is synonymous with lobbying, though many lobbying firms have since moved to other parts of the city. The original concentration of lobbying firms along K Street gave rise to the term &quot;K Street lobbyist&quot; as shorthand for the entire industry. Today, the major lobbying firms include Akin Gump Strauss Hauer &amp; Feld, Brownstein Hyatt Farber Schreck, Holland &amp; Knight, and Squire Patton Boggs — each representing dozens of clients across multiple industries.</p>
          <p>Browse the top lobbying firms on our <Link href="/firms" className="text-indigo-600 hover:underline">firms ranking page</Link> to see which firms dominate the industry and which clients they represent.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How does someone become a federal lobbyist?", acceptedAnswer: { "@type": "Answer", text: "Anyone can become a lobbyist by registering with the Secretary of the Senate and the Clerk of the House. Registration is required when a person makes more than one lobbying contact and spends at least 20% of their time on lobbying activities for a client over a three-month period. Many lobbyists are former congressional staffers or executive branch officials." } },
          { "@type": "Question", name: "How much does lobbying cost?", acceptedAnswer: { "@type": "Answer", text: "Lobbying costs vary widely. Small organizations may spend $50,000-$200,000 per year on a single lobbying firm. Major corporations spend $10-25 million annually. The U.S. Chamber of Commerce, the top spender, has spent over $607 million since 2018. Firms with revolving-door lobbyists charge 369% more than those without." } },
          { "@type": "Question", name: "Is lobbying the same as bribery?", acceptedAnswer: { "@type": "Answer", text: "No. Lobbying is the legal, constitutionally protected act of petitioning the government. Bribery involves offering something of value in exchange for an official act. Lobbying is regulated under the Lobbying Disclosure Act and involves advocacy, information-sharing, and relationship-building — not payments for votes." } },
        ]
      }) }} />
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
