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
const Cell = dynamic(() => import('recharts').then(m => m.Cell), { ssr: false })


const comparisonData = [
  { metric: 'Avg Revenue', withRD: 8.25, withoutRD: 1.76, unit: '$M' },
  { metric: 'Avg Clients', withRD: 11.8, withoutRD: 2.4, unit: '' },
]

const topFirms = [
  { firm: 'BGR Government Affairs', income: 294.8, clients: 522, label: 'Pentagon advisors, Senate staffers' },
  { firm: 'Cornerstone Government Affairs', income: 276.8, clients: 601, label: 'House chiefs of staff, committee staff' },
  { firm: 'Alpine Group Partners', income: 122.6, clients: 226, label: 'Congressional leadership staff' },
  { firm: 'Williams and Jensen', income: 109.9, clients: 257, label: 'Majority Whip COS, Commerce Dept.' },
  { firm: 'S-3 Group', income: 94.0, clients: 195, label: 'Approps staff, Senate committee dirs.' },
  { firm: 'Harbinger Strategies', income: 86.6, clients: 104, label: 'White House, agency leadership' },
]

const premiumChart = [
  { name: 'With Ex-Gov', revenue: 8255, fill: '#4f46e5' },
  { name: 'Without', revenue: 1760, fill: '#d1d5db' },
]

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'The Revolving Door Premium' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">Revolving Door</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The 369% Premium:{' '}
        <span className="text-indigo-600">Hard Proof That the Revolving Door Pays</span>
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 11 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/the-revolving-door-premium" title="The 369% Premium: Hard Proof That the Revolving Door Pays" />

      <div className="my-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-amber-700 mb-2">Key Finding</h2>
        <p className="text-gray-700">
          Lobbying firms that employ former government officials earn <strong>369% more revenue</strong> and
          attract <strong>4.9 times more clients</strong> than firms without revolving door connections.
          Of the 7,746 firms in our database, <strong>3,656 (47%)</strong> employ at least one ex-government lobbyist.
          Those firms average <strong>$8.25 million</strong> in revenue versus <strong>$1.76 million</strong> for
          firms without. This is, to our knowledge, the largest empirical quantification of the revolving door
          premium ever published.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Measuring What Everyone Already Knew</h2>

        <p>
          Everyone in Washington knows the revolving door matters. Former congressional staffers become lobbyists.
          Former agency officials join K Street firms. Former White House advisors cash in. It&apos;s the
          worst-kept secret in American politics.
        </p>

        <p>
          But until now, quantifying the <em>exact value</em> of that revolving door has been difficult. Academic
          studies have approached it from various angles — Blanes i Vidal, Draca, and Fons-Rosen (2012) found
          that lobbyists who previously worked for a senator experienced a <strong>24% drop in revenue</strong> when
          that senator left office. The implication: a significant chunk of a lobbyist&apos;s value comes not from
          expertise, but from <em>who they know</em>.
        </p>

        <p>
          We can now quantify it across the entire industry. OpenLobby&apos;s database contains 7,746 lobbying firms
          with detailed information about their employees&apos; prior government service. Here&apos;s what the data shows.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Revenue Gap</h2>

        <div className="not-prose my-8">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Average Revenue: Firms With vs. Without Ex-Government Lobbyists ($K)
          </h3>
          <div className="bg-gray-50 rounded-xl p-4" style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={premiumChart} layout="vertical">
                <XAxis type="number" tickFormatter={(v: any) => `$${(v/1000).toFixed(1)}M`} />
                <YAxis type="category" dataKey="name" width={100} />
                <Tooltip formatter={(v: any) => [`$${(v/1000).toFixed(2)}M`, 'Avg Revenue']} />
                <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                  {premiumChart.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 mt-2">Source: OpenLobby analysis of 7,746 lobbying firms, 2018–2025</p>
        </div>

        <p>
          The gap is massive. Firms with at least one revolving door lobbyist average <strong>$8.25 million</strong> in
          total revenue across our tracking period. Firms without average just <strong>$1.76 million</strong>. That&apos;s
          a <strong>369% premium</strong>.
        </p>

        <p>
          The client gap is even more dramatic. Revolving door firms average <strong>11.8 clients</strong> versus
          just <strong>2.4 clients</strong> for firms without government connections — a <strong>4.9x multiplier</strong>.
          Clients are paying for access, and they know exactly what they&apos;re buying.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Firms Cashing In</h2>

        <p>
          The top revolving door firms in our database are a masterclass in monetizing government service:
        </p>

        <div className="not-prose my-8 bg-gray-50 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Top Revolving Door Lobbying Firms
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4 font-semibold">Firm</th>
                  <th className="text-right py-2 px-3 font-semibold">Revenue ($M)</th>
                  <th className="text-right py-2 px-3 font-semibold">Clients</th>
                  <th className="text-left py-2 pl-3 font-semibold">Notable Backgrounds</th>
                </tr>
              </thead>
              <tbody>
                {topFirms.map(f => (
                  <tr key={f.firm} className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">{f.firm}</td>
                    <td className="text-right py-2 px-3">${f.income}M</td>
                    <td className="text-right py-2 px-3">{f.clients}</td>
                    <td className="py-2 pl-3 text-gray-600 text-xs">{f.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>BGR Government Affairs — $294.8M</h3>

        <p>
          BGR tops the revenue chart at nearly $295 million and 522 clients. Their revolving door roster reads
          like a Washington org chart. <strong>Pete Landrum</strong> served as Senior Defense Policy Advisor to
          Senator Jeff Sessions. <strong>Mark Tavlarides</strong> was Director for Legislative Affairs at the
          National Security Council and Senior Special Assistant in the Office of the Secretary of Defense.
          <strong> David Boyer</strong> held positions at the FDA, HHS, the White House Liaison office at DoD,
          and the Department of Labor. <strong>Brent Del Monte</strong> was Legislative Director for
          Representative Tom Bliley and Senior Counsel on the House Energy and Commerce Committee.
        </p>

        <p>
          That&apos;s not a lobbying firm. That&apos;s a shadow government.
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>Cornerstone Government Affairs — $276.8M</h3>

        <p>
          Cornerstone has the most extensive revolving door network, with 601 clients. <strong>Tony Essalih</strong> served
          as Chief of Staff and Legislative Director for multiple House members, including Representatives
          Culberson, Archer, and Hastings. <strong>Laura Bozell</strong> was Legislative Assistant to
          Representative McCrery and Professional Staff on the Ways and Means Committee under Chairman Camp.
        </p>

        <p>
          The Ways and Means Committee writes tax law. If you were a company trying to get a tax provision
          changed, who would you hire — a lobbyist who once <em>wrote</em> tax provisions on that committee,
          or someone who didn&apos;t?
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>Williams and Jensen — $109.9M</h3>

        <p>
          <strong>Susan Hirschmann</strong> was Chief of Staff to the House Majority Whip — one of the most
          powerful positions in Congress. She now lobbies. <strong>Eric Stewart</strong> was Chief of Staff
          and Deputy Assistant Secretary at the Department of Commerce. <strong>Joel Oswald</strong> served
          as Legislative Assistant to Senator Enzi and Professional Staff on two Senate Banking subcommittees.
        </p>

        <p>
          These aren&apos;t junior staffers who spent a summer interning. These are people who sat in the rooms
          where deals were made, who have the personal phone numbers of the people who still sit in those rooms.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Academic Evidence</h2>

        <p>
          Our findings align with — and dramatically extend — the academic literature:
        </p>

        <ul>
          <li>
            <strong>Blanes i Vidal et al. (2012):</strong> When a lobbyist&apos;s former senator boss leaves office,
            that lobbyist&apos;s revenue drops 24%. The authors concluded that &quot;ichkonnections to powerful
            politicians are a major driver of the returns to lobbying.&quot;
          </li>
          <li>
            <strong>LaPira and Thomas (2017):</strong> Found that revolving door lobbyists are more likely to
            lobby on issues related to their former government service, and command higher fees for doing so.
          </li>
          <li>
            <strong>Bertrand, Bombardini, and Trebbi (2014):</strong> Showed that lobbyists&apos; political
            connections — measured by campaign contribution networks — are a stronger predictor of revenue
            than issue expertise.
          </li>
        </ul>

        <p>
          Our 369% premium finding suggests the gap is even larger than prior studies estimated, likely because
          we&apos;re measuring at the <em>firm</em> level across all issues, rather than at the individual lobbyist level
          on specific legislation.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why the Premium Exists</h2>

        <p>
          The revolving door premium isn&apos;t mysterious. It&apos;s straightforward economics. Ex-government lobbyists
          provide three things that are genuinely valuable:
        </p>

        <ol>
          <li>
            <strong>Access:</strong> They can get meetings that others can&apos;t. A former Chief of Staff to the
            Majority Whip can call current leadership staff directly. A former Senate committee staffer can
            walk into a member&apos;s office and be seen immediately.
          </li>
          <li>
            <strong>Intelligence:</strong> They know how the legislative and regulatory process actually works
            — not in theory, but in practice. They know which staffers draft which provisions, which members
            care about which issues, and where the real decisions are made.
          </li>
          <li>
            <strong>Credibility:</strong> When a former senior government official advocates a position, it
            carries weight that a hired consultant&apos;s advocacy doesn&apos;t. &quot;I used to work on this issue at
            the agency&quot; is a powerful opener.
          </li>
        </ol>

        <p>
          All of this is legal. All of it is disclosed. And all of it is deeply corrosive to democratic governance.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Libertarian Diagnosis</h2>

        <p>
          Reformers typically propose solutions like longer cooling-off periods (currently 1–2 years for most
          officials), stricter lobbying bans, or even lifetime bans on lobbying for certain positions. These
          proposals miss the forest for the trees.
        </p>

        <p>
          The revolving door exists because government officials have enormous power to allocate. The former
          Chief of Staff to the House Majority Whip is valuable as a lobbyist because the Majority Whip
          controls the legislative calendar and shapes every bill that reaches the floor. The former Defense
          Policy Advisor is valuable because the Pentagon spends $886 billion a year.
        </p>

        <p>
          You can ban every former official from lobbying for life, and you&apos;ll achieve two things: (1) making
          it harder to recruit talented people into government service, and (2) driving the influence industry
          into less transparent channels. The connections don&apos;t disappear because you pass a law. They go
          underground — into &quot;strategic consulting&quot; firms that technically don&apos;t &quot;lobby&quot; but accomplish
          the same goals.
        </p>

        <p>
          The only way to reduce the value of the revolving door is to reduce the value of what government
          officials control. If the government spent less, regulated less, and had less discretionary power,
          the connections of former officials would be worth proportionally less. The revolving door is a
          symptom, not the disease.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>47% of All Firms</h2>

        <p>
          Perhaps the most striking number in our analysis: <strong>3,656 of 7,746 lobbying firms — 47%</strong> —
          employ at least one lobbyist with prior government service. Nearly half the industry is built on
          government connections. And those 47% of firms capture a wildly disproportionate share of revenue.
        </p>

        <p>
          The remaining 4,090 firms — the ones without revolving door employees — split the leftover market at
          an average of $1.76 million each. They survive on expertise, relationships built from the outside,
          and lower-margin work. They are, in effect, the minor leagues of lobbying.
        </p>

        <p>
          The message to every congressional staffer, every agency official, every White House advisor is clear:
          your government service is an investment. Put in your years, learn the system, build your contacts,
          and then monetize it all on K Street. The data proves the payoff.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h2>

        <p>
          OpenLobby&apos;s <Link href="/revolving-door" className="text-indigo-600 hover:underline">revolving door tracker</Link> lets
          you search every lobbyist&apos;s prior government service. See which firms hire the most ex-officials,
          which government positions are most common, and how the revolving door connects to spending on
          specific <Link href="/issues" className="text-indigo-600 hover:underline">issues</Link>.
        </p>

        <p>
          Our <Link href="/firms" className="text-indigo-600 hover:underline">firm directory</Link> includes
          revolving door counts for every firm, so you can compare firms with and without government connections yourself.
        </p>

        <p>
          The revolving door will keep spinning as long as government power makes it profitable. Our job is
          to make sure you can see it spinning.
        </p>

      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/investigations/revolving-door-exposed" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-xs text-amber-600 font-semibold">Revolving Door</span>
            <p className="font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door Exposed: 5,000 Former Officials</p>
          </Link>
          <Link href="/investigations/the-22000-percent-roi" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-xs text-indigo-600 font-semibold">Analysis</span>
            <p className="font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>The 22,000% ROI: How Lobbying Became America&apos;s Best Investment</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
