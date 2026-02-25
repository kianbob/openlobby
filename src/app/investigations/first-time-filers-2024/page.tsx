'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from "@/components/SourceCitation"
import ShareButtons from '@/components/ShareButtons'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })


const entrantsByYear = [
  { year: '2019', count: 3796 },
  { year: '2020', count: 4385 },
  { year: '2021', count: 5342 },
  { year: '2022', count: 4000 },
  { year: '2023', count: 4334 },
  { year: '2024', count: 4032 },
  { year: '2025', count: 6997 },
]

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "First-Time Filers: Meet the Companies That Just Started Lobbying", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "6,997 organizations filed lobbying disclosures for the first time in 2025 — from AI startups to hospital chains to wedding platforms.", mainEntityOfPage: "https://www.openlobby.us/investigations/first-time-filers-2024" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'First-Time Filers 2025' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">New Entrants</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        First-Time Filers:{' '}
        <span className="text-indigo-600">Meet the Companies That Just Started Lobbying Washington</span>
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 11 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/first-time-filers-2024" title="First-Time Filers: Meet the Companies That Just Started Lobbying Washington" />

      <div className="my-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-amber-700 mb-2">Key Finding</h2>
        <p className="text-gray-700">
          <strong>6,997 organizations</strong> filed federal lobbying disclosures for the first time in 2025 —
          an 84% surge from 2019. From AI policy startups to digital asset intelligence firms to hospital chains,
          the wave of first-time filers reveals an expanding regulatory state that&apos;s pulling ever more of the
          economy into Washington&apos;s orbit.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Surge Is Real</h2>

        <p>
          Every time Washington expands its reach — a new regulation, a new agency, a new spending program —
          it creates a new crop of organizations that suddenly need lobbyists. Our data tracks this phenomenon
          in real time by identifying every organization that appears in lobbying disclosures for the first time.
        </p>

        <p>
          The numbers tell a clear story: the regulatory state is expanding, and the private sector is being
          dragged to K Street whether it wants to be there or not.
        </p>

        <div className="not-prose my-8">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            First-Time Lobbying Filers by Year
          </h3>
          <div className="bg-gray-50 rounded-xl p-4" style={{ height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={entrantsByYear}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#d97706" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 mt-2">Source: OpenLobby analysis of LDA first-time filings. 2018 baseline (19,902) excluded as it represents the start of our tracking window.</p>
        </div>

        <p>
          From 3,796 new filers in 2019, the count jumped to 5,342 in 2021 (the Biden administration&apos;s
          first year, with massive new spending bills), dipped slightly through 2022–2024, then <em>exploded</em> to
          6,997 in 2025. That 2025 surge — an 84% increase over 2019 — coincides with the return of tariffs,
          the DOGE initiative threatening agency budgets, AI regulation proposals, and cryptocurrency legislation.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Who Are These New Filers?</h2>

        <p>
          Scrolling through the latest first-time filers is like reading a snapshot of every policy battle
          roiling Washington. Here are some of the most revealing recent entrants:
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>The AI Wave</h3>

        <p>
          <strong>AI Salon</strong> — self-described as &quot;a community small business that advocates shaping
          AI policy&quot; — filed its first lobbying disclosure in Q4 2025. It&apos;s a perfect symbol of the moment:
          even <em>small</em> AI businesses now feel they need a voice in Washington. When the government
          proposes to regulate your core technology, silence isn&apos;t an option.
        </p>

        <p>
          <strong>Data Recognition Corporation</strong>, a Minnesota-based education technology company, also
          appeared for the first time in Q4 2025. As AI transforms testing, grading, and educational assessment,
          companies that never needed lobbyists are suddenly discovering that the Department of Education has
          opinions about their products.
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>Crypto Keeps Coming</h3>

        <p>
          <strong>CYVL</strong>, a Massachusetts-based &quot;Digital Asset Intelligence&quot; firm, filed its
          first disclosure in Q4 2025 through Boundary Stone Partners. It joins a growing parade of crypto
          and fintech firms that have descended on Washington. The digital asset industry went from zero
          lobbying presence to one of the fastest-growing sectors in K Street in barely five years. (See our
          investigation into <Link href="/investigations/crypto-lobbying-explosion" className="text-indigo-600 hover:underline">the crypto lobbying explosion</Link>.)
        </p>

        <p>
          <strong>Phillip Frederick Camino</strong>, filing under &quot;Financial Services,&quot; represents the
          type of individual financial services provider that&apos;s increasingly feeling the squeeze of new
          SEC and CFPB rules.
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>Healthcare&apos;s Never-Ending Expansion</h3>

        <p>
          The healthcare sector dominates first-time filers, which tells you everything about the regulatory
          burden on American medicine. Recent new entrants include:
        </p>

        <ul>
          <li><strong>Restore First Health</strong> (FL) — a healthcare provider</li>
          <li><strong>GuideStar ElderCare</strong> (IN) — an elder care provider filing through Loper Consulting</li>
          <li><strong>Knox Community Hospital</strong> and <strong>Rhea Medical Center</strong> — small community hospitals that apparently now need lobbyists</li>
          <li><strong>Cochlear North America</strong> — a medical device manufacturer navigating FDA regulations</li>
          <li><strong>ByHeart, Inc.</strong> — an <em>infant formula manufacturer</em> that presumably discovered how regulated its industry became after the 2022 formula shortage</li>
          <li><strong>Haleon US Holdings</strong> — a consumer health company (formerly GSK Consumer Healthcare)</li>
        </ul>

        <p>
          When infant formula makers and community hospitals need lobbyists, the regulatory state has reached
          deep into every corner of American healthcare.
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>The Surprising Entries</h3>

        <p>
          <strong>The Knot Worldwide Inc.</strong> — an online wedding vendor marketplace — filed its first lobbying
          disclosure in Q1 2025. A <em>wedding website</em> now lobbies Congress. Let that sink in.
        </p>

        <p>
          <strong>Cinema United</strong>, a trade association for movie theater owners, appeared for the first time
          in Q4 2025. The theater industry is fighting for survival against streaming, and apparently part of
          that fight now takes place on Capitol Hill.
        </p>

        <p>
          <strong>Axiom Community of Recovery</strong> — a workforce development and addiction recovery
          organization — entered the lobbying rolls in Q4 2025. Even nonprofit addiction recovery programs
          now need K Street representation.
        </p>

        <p>
          <strong>The Responsible Online Commerce Coalition</strong>, a business league for third-party online
          sellers, filed through Cuneo Gilbert &amp; LaDuca. As the FTC and Congress take aim at Amazon marketplace
          practices, small sellers are banding together to be heard.
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>Cities and Transit Authorities</h3>

        <p>
          Municipal governments are increasingly entering the lobbying game. The <strong>City of New Orleans</strong> and
          the <strong>New Orleans Regional Transit Authority</strong> both filed for the first time in 2025
          through Thorn Run Partners. The <strong>City of Hallandale Beach</strong> (Florida) did the same.
          When cities need lobbyists to get their fair share of federal funds, something has gone wrong with
          the intergovernmental system.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Energy and Climate Scramble</h2>

        <p>
          The Inflation Reduction Act, tariffs on Chinese solar panels, and shifting energy policy have driven
          a wave of energy-sector first-timers:
        </p>

        <ul>
          <li><strong>General Matter</strong> (CA) — energy company filing for the first time</li>
          <li><strong>Illuminate USA</strong> (OH) — a solar panel manufacturer, likely navigating tariff exemptions</li>
          <li><strong>Zero Emission Transportation Association</strong> (DC) — an EV advocacy group filing through Kelley Drye &amp; Warren</li>
          <li><strong>Faraday Future</strong> (CA) — the embattled EV manufacturer, filing for the first time in Q3 2025</li>
        </ul>

        <p>
          When the government picks winners and losers in energy through tax credits, tariffs, and mandates,
          every energy company — from solar installers to EV startups — needs a Washington strategy.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Defense Sector Never Stops</h2>

        <p>
          <strong>Cascade Company LLC</strong>, a Texas-based defense contractor, filed its first lobbying
          disclosure in Q4 2025 through Ikon Public Affairs. Defense has always been lobbying-heavy, but the
          entry of new, smaller contractors reflects an expanding defense budget and the scramble for procurement
          dollars.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What the Surge Tells Us</h2>

        <p>
          The 2025 first-time filer surge — 6,997 new organizations, the most since our tracking began — is
          a leading indicator of regulatory expansion. Organizations don&apos;t hire lobbyists for fun. They hire
          them because the government is doing something that affects their business, and they can&apos;t afford
          to ignore it.
        </p>

        <p>
          The diversity of new filers is the most alarming signal. It&apos;s not just the usual suspects — defense
          contractors and pharmaceutical companies. It&apos;s wedding websites, community hospitals, infant formula
          makers, addiction recovery nonprofits, transit authorities, and movie theater chains. The regulatory
          state has metastasized to the point where <em>every</em> sector of the American economy feels the need
          for Washington representation.
        </p>

        <p>
          Critics of lobbying often call for stricter disclosure rules and longer cooling-off periods. But
          disclosure and cooling-off periods don&apos;t address why a community hospital in Indiana or a wedding
          marketplace needs a lobbyist in the first place. The problem isn&apos;t that these organizations are lobbying.
          The problem is that the federal government&apos;s reach has grown so vast that they have no choice.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Irony of DOGE</h2>

        <p>
          Here&apos;s the supreme irony: DOGE — the Department of Government Efficiency initiative aimed at cutting
          federal spending — has itself driven a wave of new lobbying. Organizations that never needed
          Washington representation are now filing disclosures because DOGE threatens their funding, their
          agency partners, or their regulatory certainty. The attempt to shrink government is, at least in
          the short term, expanding the lobbying industry.
        </p>

        <p>
          We&apos;re tracking this dynamic in real time. Check our <Link href="/investigations/doge-vs-lobbying" className="text-indigo-600 hover:underline">DOGE vs. The Lobbying Machine</Link> investigation
          for the full picture.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Track New Filers Yourself</h2>

        <p>
          OpenLobby updates first-time filer data as new disclosures are posted. Visit our{' '}
          <Link href="/clients" className="text-indigo-600 hover:underline">client database</Link> and sort by
          newest to see who just started lobbying. Use the <Link href="/search" className="text-indigo-600 hover:underline">search</Link> to
          find specific organizations, or browse by <Link href="/industries" className="text-indigo-600 hover:underline">industry</Link> and{' '}
          <Link href="/issues" className="text-indigo-600 hover:underline">issue</Link> to understand what&apos;s
          driving them to Washington.
        </p>

        <p>
          Because every new first-time filer is a data point in the same story: the federal government keeps
          growing, and the economy keeps being forced to respond.
        </p>

      </article>

      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="February 2026" />

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/investigations/the-22000-percent-roi" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-xs text-indigo-600 font-semibold">Analysis</span>
            <p className="font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>The 22,000% ROI: How Lobbying Became America&apos;s Best Investment</p>
          </Link>
          <Link href="/investigations/doge-vs-lobbying" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-xs text-red-600 font-semibold">DOGE</span>
            <p className="font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>DOGE vs. The Lobbying Machine</p>
          </Link>
        </div>
      </div>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/crypto-lobbying-explosion" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">₿ Crypto Lobbying Explosion</div>
          </Link>
          <Link href="/investigations/ai-regulation-fight" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🤖 The AI Regulation Fight</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/new-entrants" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🆕 New Entrants Analysis</div>
          </Link>
          <Link href="/client-trajectories" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 Client Trajectories</div>
          </Link>
          <Link href="/industries" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏭 Industry Breakdown</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
