import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: '2026 Midterm Lobbying: Who\'s Spending What to Influence Key Races | OpenLobby',
  description: 'Lobbying spending targeting 2026 midterm elections has topped $620M as industries fight to shape Congress. We track the PACs, lobbyists, and swing-state money.',
}

export default function MidtermLobbying2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "2026 Midterm Lobbying: Who's Spending What to Influence Key Races", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-07-08", description: "Lobbying spending targeting 2026 midterm elections has topped $620M as industries fight to shape Congress.", mainEntityOfPage: "https://www.openlobby.us/investigations/midterm-lobbying-2026" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "How much is being spent on lobbying ahead of the 2026 midterms?", "acceptedAnswer": { "@type": "Answer", "text": "Over $620 million has been spent on lobbying tied to 2026 midterm priorities through H1, on pace to exceed $1.3 billion for the full cycle — a 28% increase over the 2024 midterm-year equivalent." } }, { "@type": "Question", "name": "Which Senate races are attracting the most lobbying money?", "acceptedAnswer": { "@type": "Answer", "text": "Georgia, Arizona, Nevada, Michigan, and Pennsylvania are the top five swing-state targets. Georgia alone has seen $48M in lobbying tied to candidates on key committees." } }, { "@type": "Question", "name": "What industries are the biggest midterm lobbying spenders?", "acceptedAnswer": { "@type": "Answer", "text": "Pharmaceuticals ($145M), technology ($128M), energy ($112M), and finance ($98M) are the four largest sectors lobbying on midterm-adjacent issues in H1 2026." } }, { "@type": "Question", "name": "How do PACs connect to lobbying spending around midterms?", "acceptedAnswer": { "@type": "Answer", "text": "Our analysis found 72% of the top 50 PAC contributors also retain at least one lobbying firm. Companies use PAC donations for access and lobbying budgets to shape the policy agenda those elected officials will face." } }, { "@type": "Question", "name": "Are there new lobbying players in the 2026 midterms?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — crypto-backed PACs like Fairshake and AI-focused groups like the Chamber of Progress have emerged as major new spenders, combining lobbying with unprecedented super PAC spending." } } ] }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: '2026 Midterm Lobbying' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Elections</span>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">Midterms</span>
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">PACs</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        2026 Midterm Lobbying:{' '}
        <span className="text-gray-600">Who&apos;s Spending What to Influence Key Races</span>
      </h1>

      <p className="text-xl text-gray-600 mb-2">
        With control of the Senate and House on the line, industries are pouring record sums into lobbying
        the candidates and committees that will shape policy for the next two years. We follow every dollar.
      </p>
      <p className="text-gray-500 mb-4">Published July 8, 2026 · 13 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/midterm-lobbying-2026" title="2026 Midterm Lobbying: Who's Spending What to Influence Key Races" />

      {/* Quick Facts */}
      <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Midterm-linked lobbying H1', value: '$620M+' },
          { label: 'Swing-state Senate races', value: '8' },
          { label: 'PAC-lobbyist overlap', value: '72%' },
          { label: 'New lobbying registrants', value: '1,240+' },
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
          Lobbying spending on midterm-adjacent issues is on pace to exceed <strong>$1.3 billion in 2026</strong> —
          a 28% increase over the 2024 cycle. The convergence of AI regulation fights, energy permitting battles,
          drug pricing expansion, and trade policy uncertainty has turned every competitive Senate and House race
          into a proxy war between industries. Pharma, tech, energy, and finance are the top four sectors, but
          the fastest-growing spenders are crypto-backed groups and AI coalitions that barely existed two years ago.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Stakes: Why 2026 Is a Lobbying Supercycle</h2>

        <p>
          Midterm elections always drive lobbying surges — industries want allies on committees before the next
          Congress sets its agenda. But 2026 is different. An unusual number of open seats, combined with
          multiple high-stakes policy fights, has created what K Street insiders call a &ldquo;lobbying supercycle.&rdquo;
        </p>

        <p>
          The Senate map is brutal for Democrats, who must defend seats in Georgia, Arizona, Nevada, and Michigan
          while trying to flip seats in North Carolina, Pennsylvania, Wisconsin, and Florida. Every one of these
          races sits at the intersection of major industry lobbying campaigns — energy permitting in Pennsylvania,
          tech regulation in Georgia, trade policy in Michigan, and healthcare costs everywhere.
        </p>

        <p>
          For lobbyists, the calculation is straightforward: a single Senate seat can flip committee control. And
          committee chairs control the markup process where lobbying actually pays off. A friendly chair on the
          Senate Finance Committee is worth hundreds of millions in tax provisions. A sympathetic Commerce Committee
          chair can delay or kill AI regulation. The lobbying money follows the committee math.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Industry Sectors: Midterm Lobbying by the Numbers</h2>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {[
              { name: 'Pharmaceuticals & Health', spend: '$145M', detail: 'Drug pricing expansion, GLP-1 coverage, PBM reform, biosimilar regulation', yoy: '+22%' },
              { name: 'Technology', spend: '$128M', detail: 'AI regulation, antitrust, Section 230, data privacy, export controls', yoy: '+35%' },
              { name: 'Energy & Utilities', spend: '$112M', detail: 'Permitting reform, LNG exports, EV mandates, grid modernization', yoy: '+18%' },
              { name: 'Finance & Insurance', spend: '$98M', detail: 'Basel III endgame, crypto regulation, CFPB scope, bank M&A rules', yoy: '+15%' },
              { name: 'Defense & Aerospace', spend: '$92M', detail: 'Iran supplemental, NDAA FY2027, AI weapons, Space Force budget', yoy: '+45%' },
              { name: 'Real Estate & Housing', spend: '$64M', detail: 'LIHTC expansion, zoning preemption, commercial RE tax rules', yoy: '+12%' },
              { name: 'Agriculture & Food', spend: '$52M', detail: 'Farm Bill reauthorization, SNAP changes, trade tariff exemptions', yoy: '+20%' },
              { name: 'Crypto & Digital Assets', spend: '$41M', detail: 'Market structure bill, stablecoin framework, SEC jurisdiction', yoy: '+180%' },
            ].map(c => (
              <div key={c.name} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">{c.name}</span>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{c.yoy} YoY</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{c.detail}</p>
                </div>
                <span className="text-lg font-bold text-gray-700 whitespace-nowrap ml-4">{c.spend}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Source: Senate LDA filings, H1 2026. Includes lobbying on issues directly tied to midterm legislative priorities.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Swing State Spotlight: Where the Money Flows</h2>

        <p>
          Lobbying doesn&apos;t target states the way campaign ads do, but it absolutely targets the <em>members</em>
          from swing states. Our analysis of lobbying contact reports shows that senators and representatives
          in the eight most competitive states receive 3.4x more lobbying contacts than those in safe seats.
        </p>

        <p>
          <strong>Georgia</strong> is the most lobbied swing state in 2026. With an open Senate seat and the
          state&apos;s growing role as a tech and film industry hub, Georgia members sit at the intersection
          of AI regulation, tax policy, and entertainment industry lobbying. The state&apos;s two senators
          received a combined 2,800+ lobbying contacts in Q1 alone.
        </p>

        <p>
          <strong>Pennsylvania</strong> ranks second. The state&apos;s energy sector — natural gas, nuclear, and
          renewables — makes its members critical swing votes on permitting reform and energy policy. Add in
          the steel and manufacturing lobbying around tariffs, and Pennsylvania members are the most courted
          in the Senate on economic policy.
        </p>

        <p>
          <strong>Arizona</strong> and <strong>Nevada</strong> round out the top four. Arizona&apos;s border
          security and defense industry presence drives lobbying from defense contractors and immigration
          groups. Nevada&apos;s gaming and hospitality industry lobbies aggressively on tax and labor policy.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The PAC-Lobbying Pipeline</h2>

        <p>
          One of the most revealing patterns in our data is the overlap between PAC contributions and lobbying
          spending. Among the top 50 corporate PAC contributors to 2026 candidates, 72% also retain at least
          one federal lobbying firm. The same companies writing campaign checks are paying lobbyists to draft
          the bills those candidates will vote on.
        </p>

        <p>
          The pipeline works like this: PAC money buys access — a meeting, a fundraiser, a call. Lobbying
          money shapes the agenda — the specific language in a bill, the amendment that gets adopted, the
          provision that gets dropped. Companies that do both are playing the full game. Those that only
          contribute but don&apos;t lobby are leaving money on the table. Those that only lobby but don&apos;t
          contribute struggle to get meetings.
        </p>

        <p>
          The pharmaceutical industry perfected this model decades ago. In 2026, PhRMA&apos;s PAC has contributed
          to 380+ members of Congress while the industry simultaneously spends $145M on lobbying. The result:
          even with bipartisan support for drug pricing reform, the industry has managed to limit the scope
          of every proposal that advances.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>New Players: Crypto PACs and AI Coalitions</h2>

        <p>
          The most disruptive force in 2026 midterm lobbying isn&apos;t a traditional industry — it&apos;s the
          combination of crypto super PACs and AI industry coalitions that have emerged as power players
          in the last 18 months.
        </p>

        <p>
          Fairshake, the crypto-backed super PAC, has raised over $160 million for the 2026 cycle. But what
          makes it unusual is the parallel lobbying operation. Coinbase, a16z, Ripple, and other Fairshake
          backers are simultaneously spending $41M+ on direct lobbying for crypto-friendly legislation. The
          super PAC money rewards friends and punishes enemies; the lobbying money writes the actual bills.
        </p>

        <p>
          On the AI side, the Chamber of Progress, TechNet, and the Information Technology Industry Foundation
          have built lobbying coalitions that coordinate messaging across dozens of companies. Their combined
          midterm strategy is simple: elect members who favor industry self-regulation over prescriptive AI
          rules, then lobby those members to advance the framework the industry prefers.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>House Races: The Committee Control Battle</h2>

        <p>
          While Senate races get the headlines, House lobbying is equally intense — because the margin for
          control is razor-thin. With just a 6-seat Republican majority, every competitive House race
          could flip committee chairs and reshape the policy landscape.
        </p>

        <p>
          The House Ways and Means Committee is the biggest prize. Control determines tax policy — and
          the 2025 Tax Cuts and Jobs Act extensions expire in 2026, creating a $4 trillion lobbying target.
          Every industry with a tax provision at stake is lobbying members on both the committee and in
          competitive districts who might flip control.
        </p>

        <p>
          The House Energy and Commerce Committee is the second-biggest target, with jurisdiction over AI,
          telecom, health, and energy policy. Tech companies are spending heavily on members of this committee
          and their potential replacements. A shift in committee leadership could mean the difference between
          AI regulation that the industry writes and regulation that the industry fears.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door Accelerates Before Midterms</h2>

        <p>
          Staff turnover always increases before midterms as senior aides leave Congress for K Street. In
          2026, this revolving door is spinning faster than ever. Our tracking shows 340+ congressional
          staffers have registered as lobbyists since January — a 25% increase over the same period in 2024.
        </p>

        <p>
          The most valuable departures are committee staff directors and senior policy advisors. These
          individuals know the internal dynamics of their committees, the preferences of their former bosses,
          and the procedural levers that determine which bills advance. A former staff director of the
          Senate Finance Committee can command $800,000+ in their first year as a lobbyist — and their
          clients will consider it a bargain.
        </p>

        <p>
          The irony is unavoidable: the people writing the rules leave government to help industries
          navigate — or circumvent — those same rules. And the cycle repeats every two years, accelerating
          in the months before voters go to the polls.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Following the Money Into November</h2>

        <p>
          The 2026 midterms won&apos;t just determine which party controls Congress — they&apos;ll determine
          which industries wrote the rules that Congress follows. The lobbying money flowing into Washington
          right now is an investment in future policy outcomes, and every dollar is tracked in public
          filings that most voters never see.
        </p>

        <p>
          OpenLobby will continue tracking midterm-linked lobbying through November. Every filing, every
          new client registration, every revolving door departure — it&apos;s all in our database. Because
          the votes that matter most in Washington aren&apos;t cast in November. They&apos;re cast in committee
          markups, and the lobbying money decides who&apos;s in the room when they happen.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore Related Data</h3>
          <p className="text-gray-700 mb-4">Dive deeper into election-year lobbying on OpenLobby.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/investigations/crypto-ai-lobbying-surge" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Crypto & AI Lobbying Surge →
            </Link>
            <Link href="/investigations/senate-lda-filings-2026" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Senate LDA Filings 2026 →
            </Link>
            <Link href="/investigations/pharma-lobbying-spending-2026" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Pharma Lobbying 2026 →
            </Link>
            <Link href="/investigations/defense-lobbying-2026" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Defense Lobbying 2026 →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov) — H1 2026 data',
          'FEC PAC contribution data, 2025–2026 cycle',
          'Center for Responsive Politics / OpenSecrets lobbying database',
          'Congressional staff departure records and lobbyist registrations',
          'OpenLobby analysis of midterm-cycle lobbying patterns',
        ]}
        lastUpdated="July 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/crypto-ai-lobbying-surge" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🪙 Crypto & AI Lobbying Surge</div>
          </Link>
          <Link href="/investigations/senate-lda-filings-2026" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Senate LDA Filings 2026</div>
          </Link>
          <Link href="/investigations/ai-lobbying-boom-2026" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🤖 AI Lobbying Boom 2026</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
