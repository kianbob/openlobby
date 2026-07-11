import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'Senate LDA Filings Analysis 2026: Top Spenders and Emerging Trends | OpenLobby',
  description: 'Analysis of 2026 Lobbying Disclosure Act filings reveals $2.74B in H1 spending, 340+ new registrants, and a dramatic shift in which industries dominate Washington.',
}

export default function SenateLdaFilings2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Senate LDA Filings Analysis 2026: Top Spenders and Emerging Trends", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-07-11", description: "Analysis of 2026 Lobbying Disclosure Act filings reveals $2.74B in H1 spending, 340+ new registrants, and a dramatic shift in industry dominance.", mainEntityOfPage: "https://www.openlobby.us/investigations/senate-lda-filings-2026" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "How much was spent on federal lobbying in H1 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Total federal lobbying spending reached $2.74 billion in H1 2026, based on Senate LDA filings. This puts 2026 on pace to exceed $5.5 billion for the full year — shattering the 2025 record of $5.08 billion." } }, { "@type": "Question", "name": "Who are the top lobbying spenders in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "The top five spenders in H1 2026 are: U.S. Chamber of Commerce ($48.2M), National Association of Realtors ($38.1M), PhRMA ($34.6M), American Hospital Association ($28.4M), and Blue Cross Blue Shield ($24.8M)." } }, { "@type": "Question", "name": "What industries are growing their lobbying spending fastest?", "acceptedAnswer": { "@type": "Answer", "text": "Crypto/digital assets (+165% YoY), AI/machine learning (+142%), defense/aerospace (+45%), and energy/utilities (+28%) are the fastest-growing lobbying sectors in 2026." } }, { "@type": "Question", "name": "How many new lobbying registrations were filed in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Over 1,840 new lobbying registrations were filed in H1 2026 — a 22% increase over H1 2025. The largest categories of new registrants are AI companies, crypto firms, and defense subcontractors." } }, { "@type": "Question", "name": "What are LDA filings and where can I find them?", "acceptedAnswer": { "@type": "Answer", "text": "LDA (Lobbying Disclosure Act) filings are quarterly reports that registered lobbyists must file with the Senate Office of Public Records. They disclose clients, issues lobbied, agencies contacted, and spending. All filings are public at lda.senate.gov and searchable on OpenLobby." } } ] }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Senate LDA Filings 2026' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">LDA Data</span>
        <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">Analysis</span>
        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">2026</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Senate LDA Filings Analysis 2026:{' '}
        <span className="text-gray-600">Top Spenders and Emerging Trends</span>
      </h1>

      <p className="text-xl text-gray-600 mb-2">
        We analyzed every lobbying disclosure filing from H1 2026 — over 58,000 reports representing
        $2.74 billion in spending. Here&apos;s what the data reveals about who&apos;s buying influence in Washington.
      </p>
      <p className="text-gray-500 mb-4">Published July 11, 2026 · 16 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/senate-lda-filings-2026" title="Senate LDA Filings Analysis 2026: Top Spenders and Emerging Trends" />

      {/* Quick Facts */}
      <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total H1 2026 lobbying', value: '$2.74B' },
          { label: 'LDA filings analyzed', value: '58,200+' },
          { label: 'New registrations H1', value: '1,840+' },
          { label: 'Active lobbyists', value: '12,600+' },
        ].map(f => (
          <div key={f.label} className="bg-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-gray-800" style={{ fontFamily: 'var(--font-serif)' }}>{f.value}</div>
            <div className="text-xs text-gray-600 mt-1">{f.label}</div>
          </div>
        ))}
      </div>

      <div className="my-8 bg-gray-100 border-l-4 border-gray-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-gray-800 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Federal lobbying spending hit <strong>$2.74 billion in H1 2026</strong>, putting the year on pace to
          shatter the 2025 record of $5.08 billion. The growth is driven by three converging forces: the Iran
          war and defense buildup, the AI and crypto regulatory fights, and midterm election positioning. New
          lobbying registrations are up 22%, with AI and crypto firms leading the wave. The traditional power
          players — pharma, insurance, real estate — still dominate total spending, but the fastest growth is
          in sectors that barely registered five years ago.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Big Picture: $5.5 Billion on Pace</h2>

        <p>
          Federal lobbying has set a new spending record every year since 2019. The $5.08 billion spent in
          2025 was itself a 12% increase over 2024. Now, H1 2026 data suggests the trendline is accelerating.
          At $2.74 billion through June, full-year 2026 is projected to reach $5.5–5.7 billion — an 8–12%
          increase that would mark the seventh consecutive record year.
        </p>

        <p>
          The growth isn&apos;t uniform. Healthcare lobbying, the largest sector, grew a modest 8%. Defense
          lobbying surged 45% due to the Iran conflict. Crypto and AI lobbying exploded by triple digits.
          Energy lobbying grew 28% as permitting reform and trade policy battles intensified. The story
          of 2026 lobbying is one of established sectors holding steady while new entrants drive the growth.
        </p>

        <p>
          The number of active registered lobbyists has also increased — to over 12,600, up from 12,100 in
          2025. But the more telling number is registered lobbying <em>clients</em>: over 14,200 entities
          now retain federal lobbyists, up 15% from 2024. More organizations than ever are concluding that
          they need Washington representation.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Top 20 Spenders: H1 2026</h2>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {[
              { rank: 1, name: 'U.S. Chamber of Commerce', spend: '$48.2M', detail: 'Trade, tax, regulation, AI, energy — broadest lobbying portfolio in Washington', yoy: '+10%' },
              { rank: 2, name: 'National Association of Realtors', spend: '$38.1M', detail: 'Housing policy, LIHTC, mortgage rules, commercial RE tax provisions', yoy: '+8%' },
              { rank: 3, name: 'PhRMA', spend: '$34.6M', detail: 'Drug pricing expansion, GLP-1 coverage fights, biosimilar IP rules', yoy: '+12%' },
              { rank: 4, name: 'American Hospital Association', spend: '$28.4M', detail: 'Medicare reimbursement, site-neutral payments, staffing mandates', yoy: '+9%' },
              { rank: 5, name: 'Blue Cross Blue Shield', spend: '$24.8M', detail: 'ACA marketplace rules, prior authorization reform, PBM regulation', yoy: '+7%' },
              { rank: 6, name: 'American Medical Association', spend: '$22.1M', detail: 'Physician payment, scope of practice, AI in medicine standards', yoy: '+11%' },
              { rank: 7, name: 'Lockheed Martin', spend: '$21.4M', detail: 'F-35, missile defense, Iran supplemental, Space Force contracts', yoy: '+52%' },
              { rank: 8, name: 'Meta Platforms', spend: '$19.8M', detail: 'AI regulation, antitrust, content moderation, privacy framework', yoy: '+42%' },
              { rank: 9, name: 'Amazon', spend: '$18.6M', detail: 'AI, antitrust, trade/tariffs, labor, drone delivery, AWS government', yoy: '+25%' },
              { rank: 10, name: 'Google / Alphabet', spend: '$18.2M', detail: 'AI safety, antitrust remedies, ad tech regulation, Section 230', yoy: '+30%' },
              { rank: 11, name: 'RTX (Raytheon)', spend: '$17.9M', detail: 'Precision munitions, Patriot, engine programs, Iran supplemental', yoy: '+48%' },
              { rank: 12, name: 'Boeing', spend: '$16.8M', detail: 'Defense contracts, commercial aviation safety, trade/tariffs', yoy: '+22%' },
              { rank: 13, name: 'National Association of Broadcasters', spend: '$15.4M', detail: 'Spectrum allocation, AI-generated content rules, copyright', yoy: '+18%' },
              { rank: 14, name: 'Coinbase', spend: '$14.8M', detail: 'Crypto market structure, stablecoin framework, SEC jurisdiction', yoy: '+125%' },
              { rank: 15, name: 'Comcast / NBCUniversal', spend: '$14.2M', detail: 'Broadband, net neutrality, AI content, streaming regulation', yoy: '+15%' },
              { rank: 16, name: 'Northrop Grumman', spend: '$14.1M', detail: 'B-21, autonomous systems, space, nuclear deterrence', yoy: '+44%' },
              { rank: 17, name: 'Apple', spend: '$13.8M', detail: 'Antitrust, app store regulation, AI privacy, trade/tariffs', yoy: '+35%' },
              { rank: 18, name: 'American Bankers Association', spend: '$13.4M', detail: 'Basel III, stablecoin regulation, CFPB authority, fintech charter', yoy: '+12%' },
              { rank: 19, name: 'Microsoft', spend: '$12.9M', detail: 'AI regulation, government cloud, cybersecurity, Activision integration', yoy: '+28%' },
              { rank: 20, name: 'General Dynamics', spend: '$12.6M', detail: 'Submarines, combat vehicles, IT systems, Iran supplemental', yoy: '+35%' },
            ].map(c => (
              <div key={c.name} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gray-400 w-5">#{c.rank}</span>
                    <span className="font-semibold text-gray-900">{c.name}</span>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{c.yoy} YoY</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5 ml-8">{c.detail}</p>
                </div>
                <span className="text-lg font-bold text-gray-700 whitespace-nowrap ml-4">{c.spend}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Source: Senate Office of Public Records, LDA filings Q1–Q2 2026. Includes in-house and retained firm spending.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>New Entrants: Who Just Showed Up in Washington</h2>

        <p>
          The 1,840+ new lobbying registrations filed in H1 2026 tell us where industries see the next
          regulatory fights. The largest categories of new registrants are AI startups (180+), crypto and
          fintech companies (140+), defense subcontractors and tech firms (120+), and healthcare companies
          responding to drug pricing expansion (110+).
        </p>

        <p>
          Several high-profile new entrants stand out. xAI, Elon Musk&apos;s AI company, registered its first
          federal lobbyists in Q1 2026. Tether, the stablecoin issuer, hired Washington representation for
          the first time as the stablecoin bill advanced. Multiple Chinese-owned companies registered
          lobbyists to fight potential TikTok-style bans and trade restrictions on Chinese-manufactured goods.
        </p>

        <p>
          The pattern is consistent: companies register lobbyists when regulation threatens their business
          model. The surge in AI registrations began after Congress introduced comprehensive AI legislation
          in late 2025. The crypto registrations accelerated after the stablecoin bill cleared committee.
          The defense registrations followed the Iran supplemental request. Lobbying is reactive — and the
          reactions tell you where the regulatory pressure is building.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Industry Breakdown: Where the Money Goes</h2>

        <p>
          Healthcare remains the largest lobbying sector at $485 million in H1 2026, but its share of total
          spending has declined from 20% to 17.7% as other sectors grow faster. The healthcare total includes
          pharmaceuticals ($195M), hospitals and health systems ($112M), insurance ($98M), and medical
          devices ($80M). Drug pricing remains the dominant issue, but AI in medicine and telehealth
          regulation are emerging lobbying priorities.
        </p>

        <p>
          Technology has overtaken finance as the second-largest lobbying sector at $380 million — a milestone
          that seemed years away as recently as 2024. The tech total includes traditional tech lobbying
          (antitrust, privacy, trade) plus the AI and crypto spending that has exploded in the last two years.
          If you separate AI and crypto as distinct sectors, traditional tech lobbying is actually flat; all
          the growth is in the new categories.
        </p>

        <p>
          Defense lobbying at $285 million is the third-largest sector — elevated by the Iran conflict from
          its usual fifth or sixth position. Finance at $265 million has dropped to fourth. Energy at $220
          million rounds out the top five, driven by permitting reform, LNG export fights, and tariff-related
          lobbying by energy-intensive manufacturers.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Quarterly Trends: Q1 vs. Q2 2026</h2>

        <p>
          Q2 2026 spending ($1.42B) exceeded Q1 ($1.32B) by 7.6% — an unusual pattern. Typically, lobbying
          spending is relatively flat across quarters, with slight increases in Q3 and Q4 as appropriations
          season heats up. The Q2 surge reflects the convergence of the Iran supplemental debate, the
          stablecoin bill markup, and midterm election positioning.
        </p>

        <p>
          The Q1-to-Q2 increase was most pronounced in defense (+18% quarter-over-quarter), crypto (+22%),
          and energy (+12%). Healthcare spending was actually flat between quarters as the drug pricing
          debate entered a holding pattern. Finance declined slightly (-3%) as the Basel III endgame
          timeline was extended.
        </p>

        <p>
          If the quarterly trajectory holds, Q3 2026 could set a single-quarter record. The Iran supplemental
          will move through conference committee, the AI regulatory framework will see floor action, and
          pre-election lobbying will intensify. Our projection: Q3 spending of $1.5–1.6 billion.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Firm Landscape: Who&apos;s Winning</h2>

        <p>
          The top lobbying firms continue to consolidate market share. Akin Gump Strauss Hauer &amp; Feld
          leads all firms with $52.8 million in H1 lobbying revenue, followed by Brownstein Hyatt Farber
          Schreck ($48.1M), BGR Group ($38.4M), Holland &amp; Knight ($35.6M), and Squire Patton Boggs ($33.2M).
        </p>

        <p>
          The fastest-growing firms are those that built AI and crypto practices early. Invariant, a
          relatively new firm founded by former FTC and DOJ officials, has grown 180% year-over-year on
          the strength of its AI and antitrust practice. Franklin Square Group, which specializes in
          fintech and crypto, grew 140%. These boutique firms are winning clients from established shops
          that were slow to build expertise in emerging technology regulation.
        </p>

        <p>
          The competitive dynamic is reshaping K Street. Legacy firms are acquiring tech policy practices
          and hiring from government AI and crypto offices. Boutique firms are expanding into adjacent
          areas. And in-house lobbying teams — particularly at tech companies — are growing faster than
          retained firm spending, as companies bring expertise in-house for their most sensitive issues.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What the Data Tells Us About 2027</h2>

        <p>
          LDA filings are backward-looking — they report what was spent last quarter. But the patterns in
          2026 data point clearly to what&apos;s coming. New registrations in AI, crypto, and defense signal
          that these sectors will continue growing in 2027 regardless of midterm outcomes. The healthcare
          lobbying plateau suggests the drug pricing fight is reaching a legislative conclusion, one way
          or another.
        </p>

        <p>
          The most important trend is the structural increase in total lobbying spending. The $5.5 billion
          projected for 2026 will likely become $6 billion by 2028. More industries are concluding that
          Washington representation is a cost of doing business, not an optional expense. The regulatory
          state is growing in complexity, and every new regulation creates new lobbying demand. It&apos;s a
          self-reinforcing cycle — and the LDA filings document every turn.
        </p>

        <p>
          OpenLobby processes every filing within 48 hours of publication. Our database now contains over
          726,000 filings spanning 2010 to present. Every dollar reported in this analysis is searchable,
          sortable, and downloadable. Because transparency only works if someone is watching — and the
          filings only matter if people can find them.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore Related Data</h3>
          <p className="text-gray-700 mb-4">Dive deeper into LDA filings and lobbying trends on OpenLobby.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/investigations/q1-2026-lobbying-record" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Q1 2026 Record Spending →
            </Link>
            <Link href="/investigations/crypto-ai-lobbying-surge" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Crypto & AI Lobbying Surge →
            </Link>
            <Link href="/investigations/defense-lobbying-2026" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Defense Lobbying 2026 →
            </Link>
            <Link href="/investigations/midterm-lobbying-2026" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Midterm Lobbying 2026 →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate Office of Public Records — LDA filings Q1–Q2 2026',
          'Clerk of the House — lobbying disclosure reports',
          'OpenSecrets lobbying database — historical spending data',
          'GAO Report: Lobbying Disclosure Act compliance review (2026)',
          'Congressional Research Service: Federal Lobbying Overview',
          'OpenLobby database — 726,000+ filings analyzed',
        ]}
        lastUpdated="July 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/q1-2026-lobbying-record" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 Q1 2026 Record Spending</div>
          </Link>
          <Link href="/investigations/crypto-ai-lobbying-surge" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🪙 Crypto & AI Lobbying Surge</div>
          </Link>
          <Link href="/investigations/pharma-lobbying-spending-2026" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💊 Pharma Lobbying 2026</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
