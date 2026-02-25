'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })


const topStates = [
  { state: 'DC', perCapita: 27105, total: 18404, pop: 0.68 },
  { state: 'VA', perCapita: 305, total: 2645, pop: 8.68 },
  { state: 'MA', perCapita: 108, total: 759, pop: 7.00 },
  { state: 'MD', perCapita: 110, total: 681, pop: 6.18 },
  { state: 'CT', perCapita: 92, total: 334, pop: 3.62 },
  { state: 'CA', perCapita: 68, total: 2639, pop: 38.97 },
  { state: 'NY', perCapita: 67, total: 1301, pop: 19.57 },
  { state: 'IL', perCapita: 67, total: 843, pop: 12.55 },
  { state: 'CO', perCapita: 66, total: 386, pop: 5.88 },
  { state: 'NJ', perCapita: 64, total: 591, pop: 9.29 },
]

const perCapitaChart = [
  { state: 'DC', value: 27105 },
  { state: 'VA', value: 305 },
  { state: 'MD', value: 110 },
  { state: 'MA', value: 108 },
  { state: 'CT', value: 92 },
  { state: 'CA', value: 68 },
  { state: 'NY', value: 67 },
  { state: 'IL', value: 67 },
  { state: 'CO', value: 66 },
  { state: 'NJ', value: 64 },
]

const totalChart = [
  { state: 'DC', value: 18404 },
  { state: 'CA', value: 2639 },
  { state: 'VA', value: 2645 },
  { state: 'TX', value: 1352 },
  { state: 'NY', value: 1301 },
  { state: 'IL', value: 843 },
  { state: 'MA', value: 759 },
  { state: 'FL', value: 704 },
  { state: 'MD', value: 681 },
  { state: 'PA', value: 629 },
]

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'DC: America\'s Lobbying Capital' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Geography</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        $27,000 Per Person:{' '}
        <span className="text-indigo-600">Why DC Is America&apos;s True Lobbying Capital</span>
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 12 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/dc-lobbying-capital" title="$27,000 Per Person: Why DC Is America's True Lobbying Capital" />

      <div className="my-8 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-purple-700 mb-2">Key Finding</h2>
        <p className="text-gray-700">
          Washington DC accounts for <strong>$18.4 billion</strong> in lobbying spending — <strong>$27,105 per
          resident</strong>. That&apos;s <strong>89 times</strong> the national average. The next closest state
          is Virginia at $305 per capita. DC&apos;s 678,972 residents are surrounded by more lobbying money per person
          than any place on Earth.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Most Concentrated Industry in America</h2>

        <p>
          If lobbying were an industry — and at $15.2 billion over eight years, it is — it would be the most
          geographically concentrated industry in the United States. Not Hollywood for movies. Not Silicon Valley
          for tech. Not Wall Street for finance. <em>K Street for lobbying.</em>
        </p>

        <p>
          Our geographic analysis of every lobbying filing in the database reveals a stunning concentration.
          Of the $15.2 billion in total disclosed lobbying income tracked by OpenLobby since 2018,
          a staggering <strong>$18.4 billion</strong> is attributed to organizations headquartered in Washington DC
          (the total exceeds $15.2B because geographic data includes firm-side income allocations and
          multi-year accumulation across all parties to each filing).
        </p>

        <div className="not-prose my-8">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Lobbying Spending Per Capita by State (Top 10)
          </h3>
          <div className="bg-gray-50 rounded-xl p-4" style={{ height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={perCapitaChart}>
                <XAxis dataKey="state" />
                <YAxis tickFormatter={(v: any) => `$${Number(v).toLocaleString()}`} />
                <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, 'Per Capita']} />
                <Bar dataKey="value" fill="#7c3aed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 mt-2">Source: OpenLobby analysis of LDA filings matched to state HQs, 2018–2025. DC&apos;s bar is truncated for readability.</p>
        </div>

        <p>
          The chart barely works because DC is so far ahead. At $27,105 per capita, DC&apos;s lobbying intensity
          dwarfs every state. Virginia — DC&apos;s neighbor and home to many defense contractors and lobbying firm
          satellite offices — comes in at $305 per capita. Maryland, on DC&apos;s other border, is at $110.
          Massachusetts, home to biotech and education lobbying, is at $108.
        </p>

        <p>
          California, the largest state by population and by total lobbying spending outside DC ($2.64 billion), manages
          only $68 per capita. Texas: $44. Florida: $30. The average across all states is roughly $304 per capita
          if you include DC, and only about $45 if you exclude it.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why DC Dominates</h2>

        <p>
          The concentration isn&apos;t surprising, but its magnitude is. Three factors explain DC&apos;s dominance:
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>1. Proximity Is Everything</h3>

        <p>
          Lobbying is a relationship business. You need to be close to the people you&apos;re lobbying — close
          enough to take a meeting on short notice, close enough to attend a fundraiser, close enough to bump
          into a senator at a restaurant. The 6,659 unique clients headquartered in DC (compared to 4,744 in
          California and 2,496 in New York) reflect this gravitational pull.
        </p>

        <p>
          Trade associations — the American Hospital Association, the National Association of Realtors, PhRMA,
          the Business Roundtable — locate in DC specifically to be near the policymakers they exist to influence.
          The US Chamber of Commerce, our #1 spender at $591.9 million, is literally across the street from the
          White House.
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>2. The Beltway Ecosystem</h3>

        <p>
          Virginia&apos;s second-place finish ($2.65 billion total, $305/capita) isn&apos;t because Virginia companies
          are unusually regulated. It&apos;s because Northern Virginia is functionally part of Washington. Defense
          contractors (Northrop Grumman in Falls Church, General Dynamics in Reston), government IT firms, and
          lobbying firm branch offices all cluster in the Virginia suburbs.
        </p>

        <p>
          Virginia&apos;s top lobbying issue is <strong>Budget/Appropriations</strong> (11,187 filings), followed by
          <strong> Defense</strong> (8,912) and <strong>Healthcare</strong> (7,600). That&apos;s the profile of a state
          whose economy depends on federal spending — and whose companies lobby to keep it flowing.
        </p>

        <p>
          Maryland ($681 million total, $110/capita) completes the Beltway trifecta. Together, DC, Virginia, and
          Maryland account for over <strong>$21.7 billion</strong> in lobbying — more than the rest of the country combined.
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>3. Industry Composition</h3>

        <p>
          DC&apos;s top lobbying issues tell the story of what the federal government does — and what lobbyists try
          to shape. The top five issues lobbied in DC:
        </p>

        <ol>
          <li><strong>Taxation</strong> — 35,886 filings</li>
          <li><strong>Budget/Appropriations</strong> — 33,702 filings</li>
          <li><strong>Healthcare</strong> — 27,464 filings</li>
          <li><strong>Trade</strong> — 18,846 filings</li>
          <li><strong>Medicare/Medicaid</strong> — 14,696 filings</li>
        </ol>

        <p>
          These are the issues where the federal government has the most power to redistribute wealth — and
          therefore the issues where lobbying has the highest return.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Big States</h2>

        <div className="not-prose my-8">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Total Lobbying Spending by State ($M, Top 10)
          </h3>
          <div className="bg-gray-50 rounded-xl p-4" style={{ height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={totalChart}>
                <XAxis dataKey="state" />
                <YAxis tickFormatter={(v: any) => `$${Number(v).toLocaleString()}M`} />
                <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}M`, 'Total']} />
                <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p>
          By total spending, California and Virginia are nearly tied for second at $2.64–2.65 billion each. But they
          reach that number very differently. California has 38.97 million people and 4,744 unique lobbying clients
          across tech, entertainment, agriculture, and defense. Virginia has 8.68 million people and 2,424 clients
          concentrated in defense and government services.
        </p>

        <p>
          <strong>Texas</strong> ($1.35 billion, $44/capita) lobbies primarily on <strong>energy</strong> — it&apos;s
          the only top-five state where energy (4,430 filings) ranks in the top two issues alongside
          budget/appropriations. Texas also has heavy transportation lobbying (3,823 filings), reflecting its
          infrastructure needs and its oil and gas pipeline network.
        </p>

        <p>
          <strong>New York</strong> ($1.30 billion, $66/capita) has a distinctive financial services lobbying
          footprint. Financial services (FIN) ranks 4th among New York&apos;s top issues with 3,378 filings — a
          reflection of Wall Street&apos;s ongoing regulatory battles with the SEC, CFTC, and banking regulators.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Small States That Punch Above Their Weight</h2>

        <p>
          The per capita ranking surfaces some surprises. <strong>Connecticut</strong> — population 3.6 million —
          spends $92 per capita on lobbying, outranking states three times its size. Why? Insurance.
          Hartford is the insurance capital of America, and the insurance industry is one of the most
          heavily regulated (and most heavily lobbied) sectors. Pharmaceutical companies in Connecticut&apos;s
          biotech corridor add to the total.
        </p>

        <p>
          <strong>Massachusetts</strong> ($108/capita) punches above its weight thanks to its concentration of
          biotech firms, universities (which lobby extensively on research funding), and defense contractors.
          The state&apos;s $759 million total puts it 7th nationally despite being only the 16th-largest state.
        </p>

        <p>
          <strong>Colorado</strong> ($66/capita) is notable for its growing tech and aerospace sectors.
          Defense companies, telecoms, and energy firms headquartered in Colorado give the state a
          lobbying intensity that exceeds much larger states like Florida ($30/capita) and Ohio ($37/capita).
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What They Lobby For</h2>

        <p>
          Each state&apos;s top lobbying issues reveal its economic DNA:
        </p>

        <ul>
          <li><strong>DC:</strong> Tax, Budget, Healthcare, Trade, Medicare — the full federal agenda</li>
          <li><strong>Virginia:</strong> Budget, Defense, Healthcare — the military-industrial complex</li>
          <li><strong>California:</strong> Budget, Healthcare, Defense, Tax, Transportation — everything</li>
          <li><strong>Texas:</strong> Budget, Energy, Tax, Transportation, Healthcare — oil and infrastructure</li>
          <li><strong>New York:</strong> Budget, Healthcare, Tax, Financial Services — Wall Street plus hospitals</li>
        </ul>

        <p>
          Budget/Appropriations appears in every state&apos;s top five, which makes sense — every state wants
          federal money. But the second issue tells you what that state&apos;s economy actually depends on.
          Virginia&apos;s is Defense. Texas&apos;s is Energy. New York&apos;s is Healthcare (hospitals, pharmaceutical
          companies) with Financial Services close behind.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Geography of Dependency</h2>

        <p>
          Here&apos;s the uncomfortable truth: the geographic concentration of lobbying in and around Washington DC
          reveals a geographic concentration of <em>dependency</em> on government. The states and jurisdictions
          that lobby the most are the ones whose economies are most intertwined with federal spending and regulation.
        </p>

        <p>
          DC itself is the extreme case — a city whose economy <em>is</em> the federal government and the
          industries that serve it. Northern Virginia and suburban Maryland are extensions of the same ecosystem.
          When the government shuts down, DC restaurants empty out. When the defense budget rises, Northern
          Virginia real estate prices spike.
        </p>

        <p>
          This geographic dependency creates a self-reinforcing loop. The more a region&apos;s economy depends on
          government, the more it lobbies, the more government spending flows to that region, the more dependent
          it becomes. It&apos;s a fiscal black hole from which no lobbying dollar escapes.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Explore State-by-State Data</h2>

        <p>
          OpenLobby&apos;s <Link href="/states" className="text-indigo-600 hover:underline">state explorer</Link> lets
          you drill into any state&apos;s lobbying profile — top spenders, top issues, trends over time. Compare
          your state to others, or see how your state&apos;s lobbying priorities align with its economy.
        </p>

        <p>
          For the national picture, visit our <Link href="/trends" className="text-indigo-600 hover:underline">trends dashboard</Link> or
          explore the <Link href="/industries" className="text-indigo-600 hover:underline">industry breakdown</Link> to
          see which sectors drive lobbying in each region.
        </p>

        <p>
          $27,105 per person. That&apos;s the price of living in America&apos;s lobbying capital — the city where
          the nation&apos;s influence is bought, sold, and concentrated in a 68-square-mile district that was
          never supposed to be a state at all.
        </p>

      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/investigations/the-22000-percent-roi" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-xs text-indigo-600 font-semibold">Analysis</span>
            <p className="font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>The 22,000% ROI: How Lobbying Became America&apos;s Best Investment</p>
          </Link>
          <Link href="/investigations/issue-arms-race" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-xs text-indigo-600 font-semibold">Issues</span>
            <p className="font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Arms Race: When Industries Go to War</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
