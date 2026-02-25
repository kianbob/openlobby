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

// metadata moved to layout.tsx

const issueNames: Record<string, string> = {
  HCR: 'Healthcare', MMM: 'Medicare/Medicaid', BUD: 'Budget', DEF: 'Defense',
  TRA: 'Transportation', TAX: 'Taxation', TRD: 'Trade', ENG: 'Energy',
  EDU: 'Education', ENV: 'Environment', LBR: 'Labor', AGR: 'Agriculture',
  FIN: 'Financial Services', NAT: 'Natural Resources', CON: 'Constitution',
  MON: 'Money/Inflation', ECN: 'Economics', DOC: 'District of Columbia',
  WAS: 'Waste', SPO: 'Sports', CIV: 'Civil Rights', UTI: 'Utilities',
  BNK: 'Banking', MIA: 'Media/Information', ANI: 'Animals', ACC: 'Accounting',
  APP: 'Apparel', GOV: 'Government',
}

const topPairs = [
  { pair: 'Healthcare + Medicare', count: 31240, jaccard: 0.434 },
  { pair: 'Budget + Healthcare', count: 27272, jaccard: 0.174 },
  { pair: 'Budget + Defense', count: 23981, jaccard: 0.178 },
  { pair: 'Budget + Transportation', count: 23909, jaccard: 0.175 },
  { pair: 'Budget + Tax', count: 23490, jaccard: 0.139 },
  { pair: 'Tax + Trade', count: 19506, jaccard: 0.203 },
  { pair: 'Energy + Tax', count: 17417, jaccard: 0.184 },
  { pair: 'Budget + Education', count: 15423, jaccard: 0.124 },
  { pair: 'Healthcare + Tax', count: 14226, jaccard: 0.111 },
  { pair: 'Tax + Transportation', count: 13590, jaccard: 0.129 },
]

const pairChart = topPairs.map(p => ({ name: p.pair, filings: p.count }))

const surgingIssues = [
  { issue: 'Constitution (CON)', growth: '+500%', context: 'DOGE, executive power debates' },
  { issue: 'Money/Inflation (MON)', growth: '+79%', context: 'Fed policy, crypto regulation' },
  { issue: 'Economics (ECN)', growth: '+49%', context: 'Trade wars, tariff uncertainty' },
  { issue: 'District of Columbia (DOC)', growth: '+45%', context: 'DC statehood, local governance' },
  { issue: 'Waste Management (WAS)', growth: '+22%', context: 'Environmental regulation' },
]

const decliningIssues = [
  { issue: 'Civil Rights (CIV)', growth: '-71%', context: 'Post-2020 cooling' },
  { issue: 'Utilities (UTI)', growth: '-58%', context: 'Regulatory stabilization' },
  { issue: 'Banking (BNK)', growth: '-52%', context: 'Post-SVB calming' },
  { issue: 'Media/Information (MIA)', growth: '-48%', context: 'Shifting to AI/tech codes' },
  { issue: 'Animals (ANI)', growth: '-47%', context: 'Lower legislative priority' },
]

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'The Lobbying Arms Race' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Issue Analysis</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The Lobbying Arms Race:{' '}
        <span className="text-indigo-600">When Industries Go to War Over the Same Issues</span>
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 13 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/issue-arms-race" title="The Lobbying Arms Race: When Industries Go to War Over the Same Issues" />

      <div className="my-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-red-700 mb-2">Key Finding</h2>
        <p className="text-gray-700">
          Of 650,333 lobbying filings in our database, <strong>287,262 (44%)</strong> mention multiple issues —
          averaging <strong>1.94 issues per filing</strong>. The #1 issue co-occurrence? <strong>Healthcare +
          Medicare/Medicaid</strong> with 31,240 joint filings and a Jaccard similarity of 0.434, meaning
          these issues appear together more often than apart. When one industry lobbies on an issue, opponents
          respond on the same issue — creating permanent lobbying arms races.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Permanent Battlegrounds</h2>

        <p>
          American lobbying isn&apos;t a set of isolated campaigns. It&apos;s an interconnected web of overlapping
          conflicts where industries, sectors, and interest groups collide on the same issues from
          opposite sides. When hospitals lobby on healthcare, insurers lobby back. When defense contractors
          push for bigger budgets, deficit hawks push against. When energy companies fight environmental
          rules, green groups fight for them.
        </p>

        <p>
          We mapped this warfare by analyzing which issues appear together in the same lobbying filings —
          what we call &quot;issue co-occurrence.&quot; The results reveal the permanent battlegrounds of
          American policy.
        </p>

        <div className="not-prose my-8">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Top Issue Pairs by Co-occurrence (Number of Joint Filings)
          </h3>
          <div className="bg-gray-50 rounded-xl p-4" style={{ height: 420 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pairChart} layout="vertical" margin={{ left: 40 }}>
                <XAxis type="number" tickFormatter={(v: any) => v.toLocaleString()} />
                <YAxis type="category" dataKey="name" width={170} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v: any) => [v.toLocaleString(), 'Co-filings']} />
                <Bar dataKey="filings" fill="#ef4444" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 mt-2">Source: OpenLobby co-occurrence analysis of 287,262 multi-issue filings, 2018–2025</p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Healthcare + Medicare: The Eternal War (31,240 Filings)</h2>

        <p>
          The most tightly coupled issue pair in all of lobbying is Healthcare (HCR) and Medicare/Medicaid (MMM).
          With 31,240 co-occurrences and a Jaccard similarity of 0.434, these two issues appear together in
          nearly half of all filings that mention either one. No other pair comes close to this level of
          co-occurrence.
        </p>

        <p>
          This isn&apos;t surprising. Medicare and Medicaid represent over $1.5 trillion in annual federal spending —
          the single largest pot of money in the federal budget after Social Security. Every hospital,
          pharmaceutical company, medical device maker, insurance company, and physician group has a stake in
          how that money flows. When CMS proposes new reimbursement rates, the entire healthcare ecosystem
          mobilizes simultaneously.
        </p>

        <p>
          The arms race dynamic is clear: when pharmaceutical companies lobby to maintain drug prices under
          Medicare Part D, patient advocacy groups lobby to lower them. When hospitals lobby for higher
          reimbursement rates, insurers lobby for cost controls. When device manufacturers seek faster FDA
          approval pathways, safety advocates push back. Every action provokes a reaction, and the filings
          pile up on both sides.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Budget + Everything: The $6.75 Trillion Magnet</h2>

        <p>
          Budget/Appropriations (BUD) appears in four of the top five co-occurrence pairs:
        </p>

        <ul>
          <li>Budget + Healthcare: 27,272 filings</li>
          <li>Budget + Defense: 23,981 filings</li>
          <li>Budget + Transportation: 23,909 filings</li>
          <li>Budget + Tax: 23,490 filings</li>
        </ul>

        <p>
          This makes Budget the &quot;universal solvent&quot; of lobbying — it dissolves into every other issue because
          every other issue ultimately involves federal money. Healthcare lobbying is budget lobbying. Defense
          lobbying is budget lobbying. Transportation lobbying is budget lobbying. The annual appropriations
          process is the Super Bowl of K Street, and everyone has a team in the game.
        </p>

        <p>
          The Budget + Defense pairing (23,981 filings, Jaccard 0.178) reflects the perennial battle over
          the $886 billion defense budget. Every weapons system, every base, every procurement contract is
          an appropriations line item — and every one has lobbyists on every side. (See our investigation
          into <Link href="/investigations/defense-contractor-lobbying" className="text-indigo-600 hover:underline">defense contractor lobbying</Link>.)
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Tax + Trade: The Tariff Battleground (19,506 Filings)</h2>

        <p>
          The Tax + Trade pairing (19,506 filings, Jaccard 0.203) is one of the most intensely contested
          arenas in current lobbying. Tariffs are simultaneously a tax issue (they&apos;re literally taxes on
          imports) and a trade issue (they reshape international commerce). When the Trump administration
          imposed tariffs on Chinese goods, steel, and aluminum, every affected industry had to lobby on
          <em>both</em> codes simultaneously.
        </p>

        <p>
          The 2025 tariff resurgence has supercharged this pairing. Companies that import goods lobby for
          exemptions. Domestic manufacturers lobby to keep tariffs in place. Agricultural exporters lobby
          against retaliatory tariffs. The arms race on Tax + Trade is intensifying with every new tariff
          announcement. (Read more in our <Link href="/investigations/tariff-lobbying-surge" className="text-indigo-600 hover:underline">tariff lobbying surge</Link> analysis.)
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Energy + Environment: The Climate Proxy War (11,232 Filings)</h2>

        <p>
          Energy (ENG) and Environment (ENV) co-occur in 11,232 filings with a Jaccard similarity of 0.201 —
          the highest among non-Budget pairings after Healthcare + Medicare and Tax + Trade. This is the
          lobbying proxy war over climate policy.
        </p>

        <p>
          On one side: fossil fuel companies, utilities, and manufacturers lobbying on Energy issues to
          preserve their business models. On the other: renewable energy companies, environmental groups,
          and clean-tech firms lobbying on Environment issues to accelerate the transition. Both sides
          lobby on both codes because every energy regulation has environmental implications and every
          environmental regulation has energy implications.
        </p>

        <p>
          Energy + Tax (17,417 filings) is the other dimension of this war — fought over tax credits for
          renewables, deductions for fossil fuel exploration, carbon pricing proposals, and the Inflation
          Reduction Act&apos;s massive clean energy subsidies.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What&apos;s Surging Now</h2>

        <p>
          Our quarterly momentum analysis reveals which issues are seeing the fastest growth in lobbying
          activity. The surging issues tell you where the next policy battles will be fought:
        </p>

        <div className="not-prose my-8 bg-gray-50 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Fastest-Growing Lobbying Issues (Quarter-over-Quarter)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4 font-semibold">Issue</th>
                  <th className="text-right py-2 px-3 font-semibold">Growth</th>
                  <th className="text-left py-2 pl-3 font-semibold">What&apos;s Driving It</th>
                </tr>
              </thead>
              <tbody>
                {surgingIssues.map(i => (
                  <tr key={i.issue} className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">{i.issue}</td>
                    <td className="text-right py-2 px-3 text-green-600 font-bold">{i.growth}</td>
                    <td className="py-2 pl-3 text-gray-600">{i.context}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>Constitution Lobbying: +500%</h3>

        <p>
          The most dramatic surge is in Constitution (CON) lobbying — up <strong>500%</strong> quarter-over-quarter,
          from $971K to $5.8 million. This reflects the constitutional battles raging over executive power,
          DOGE&apos;s authority to cut agencies, and fundamental questions about the separation of powers. When
          the government&apos;s structure itself is contested, lobbyists don&apos;t just fight over policy — they
          fight over the rules of the game.
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>Money/Inflation: +79%</h3>

        <p>
          Lobbying on monetary policy (MON) surged 79%, reflecting battles over Federal Reserve independence,
          cryptocurrency regulation, and inflation&apos;s ongoing impact on industry. The crypto industry&apos;s push
          for stablecoin legislation and SEC oversight reform is a major driver.
        </p>

        <h3 style={{ fontFamily: 'var(--font-serif)' }}>Economics: +49%</h3>

        <p>
          Economic policy lobbying (ECN) is up 49% as trade wars, tariff uncertainty, and competing visions
          for industrial policy drive more organizations to Washington. The DOGE initiative — which aims to
          fundamentally reshape federal economic intervention — has made &quot;economics&quot; a live lobbying issue
          in a way it hasn&apos;t been since the 2008 financial crisis.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What&apos;s Declining</h2>

        <div className="not-prose my-8 bg-gray-50 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Fastest-Declining Lobbying Issues
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4 font-semibold">Issue</th>
                  <th className="text-right py-2 px-3 font-semibold">Change</th>
                  <th className="text-left py-2 pl-3 font-semibold">Context</th>
                </tr>
              </thead>
              <tbody>
                {decliningIssues.map(i => (
                  <tr key={i.issue} className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">{i.issue}</td>
                    <td className="text-right py-2 px-3 text-red-600 font-bold">{i.growth}</td>
                    <td className="py-2 pl-3 text-gray-600">{i.context}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p>
          Civil Rights lobbying is down 71% — a dramatic cooling from the post-2020 surge when corporate America
          scrambled to demonstrate social responsibility. Banking (BNK) is down 52%, likely reflecting the
          calming after the 2023 Silicon Valley Bank crisis. Media/Information lobbying (MIA) dropped 48%,
          but this is partially misleading — much of that lobbying has shifted to technology and AI codes as
          the definition of &quot;media&quot; blurs.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The AI and Crypto Frontiers</h2>

        <p>
          The newest arms races are forming around AI regulation and cryptocurrency. These issues don&apos;t yet
          have the filing volumes of healthcare or defense, but their growth trajectories are steep.
        </p>

        <p>
          AI lobbying cuts across multiple issue codes — Technology, Science, Commerce, and increasingly
          Defense (for military AI applications) and Healthcare (for AI in diagnostics). The same fragmentation
          across codes makes it harder to track but reflects AI&apos;s cross-cutting impact on every industry.
          (See our <Link href="/investigations/ai-regulation-fight" className="text-indigo-600 hover:underline">AI regulation investigation</Link>.)
        </p>

        <p>
          Crypto lobbying primarily shows up under Financial Services (FIN), Banking (BNK), and Money (MON).
          The 79% surge in monetary policy lobbying is largely crypto-driven, as the industry pushes for
          stablecoin legislation and clearer SEC jurisdiction. (More in our{' '}
          <Link href="/investigations/crypto-lobbying-explosion" className="text-indigo-600 hover:underline">crypto lobbying investigation</Link>.)
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Arms Race Logic</h2>

        <p>
          Lobbying arms races follow a predictable pattern. An industry perceives a regulatory threat or
          opportunity. It hires lobbyists. Opposing interests, seeing the lobbying, hire their own lobbyists
          in response. Neither side can afford to unilaterally disarm, because doing so would cede the
          policy battlefield. The result is an escalating equilibrium where both sides spend more and more
          to maintain the status quo.
        </p>

        <p>
          This is the classic prisoner&apos;s dilemma applied to politics. Both sides would be better off if
          neither lobbied, but neither can afford to stop because the other side might not. The only entities
          that reliably benefit are the lobbying firms themselves — which collect fees from both sides of
          every fight.
        </p>

        <p>
          The 287,262 multi-issue filings in our database — averaging 1.94 issues per filing — represent
          the paper trail of these perpetual conflicts. They are, in a very real sense, the sound of
          American industries fighting each other through the medium of government.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Libertarian Insight</h2>

        <p>
          The arms race metaphor is revealing because it highlights the waste. In a genuine arms race,
          both sides spend resources on weapons that, if they&apos;re lucky, are never used. In a lobbying arms
          race, both sides spend resources trying to influence government decisions that, in many cases,
          wouldn&apos;t need to be made if government weren&apos;t involved.
        </p>

        <p>
          Healthcare + Medicare wouldn&apos;t be a 31,240-filing battleground if the government didn&apos;t control
          $1.5 trillion in healthcare spending. Energy + Environment wouldn&apos;t generate an arms race if
          energy policy were left to market forces rather than regulatory mandates. Tax + Trade wouldn&apos;t
          be a perpetual conflict if the government didn&apos;t impose tariffs and complex tax preferences.
        </p>

        <p>
          Every lobbying arms race is, at its core, evidence that the government is making a decision that
          the market could make more efficiently. The filings are the receipts for that inefficiency.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Track the Arms Race</h2>

        <p>
          Explore our <Link href="/arms-race" className="text-indigo-600 hover:underline">arms race visualization</Link> to
          see which issues are most tightly linked. Use the <Link href="/issues" className="text-indigo-600 hover:underline">issue explorer</Link> to
          drill into any specific issue area. And visit the{' '}
          <Link href="/trends" className="text-indigo-600 hover:underline">trends dashboard</Link> to watch
          surging and declining issues in real time.
        </p>

        <p>
          The arms race never ends. But at least now you can see the battlefield.
        </p>

      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/investigations/dc-lobbying-capital" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-xs text-purple-600 font-semibold">Geography</span>
            <p className="font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>$27,000 Per Person: Why DC Is America&apos;s True Lobbying Capital</p>
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
