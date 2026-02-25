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


const topSpenders = [
  { name: 'US Chamber', total: 591.9, trajectory: 'Growing (+46%)' },
  { name: 'NAR', total: 516.7, trajectory: 'Stable' },
  { name: 'PhRMA', total: 213.2, trajectory: 'Growing (+38%)' },
  { name: 'Business Roundtable', total: 198.2, trajectory: 'Growing (+84%)' },
  { name: 'AHA', total: 178.1, trajectory: 'Growing (+63%)' },
  { name: 'Meta', total: 154.9, trajectory: 'Exploding (+244%)' },
  { name: 'SAP America', total: 153.6, trajectory: 'Declining (-48%)' },
  { name: 'Amazon', total: 147.1, trajectory: 'Exploding (+105%)' },
]

const yearlyData = [
  { year: '2018', spending: 1398 },
  { year: '2019', spending: 1466 },
  { year: '2020', spending: 1624 },
  { year: '2021', spending: 1756 },
  { year: '2022', spending: 2047 },
  { year: '2023', spending: 2240 },
  { year: '2024', spending: 1981 },
  { year: '2025', spending: 2702 },
]

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'The 22,000% ROI' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Analysis</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The 22,000% ROI:{' '}
        <span className="text-indigo-600">How Lobbying Became America&apos;s Best Investment</span>
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 12 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/the-22000-percent-roi" title="The 22,000% ROI: How Lobbying Became America's Best Investment" />

      <div className="my-8 bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-indigo-700 mb-2">Key Finding</h2>
        <p className="text-gray-700">
          In 2004, 93 firms spent <strong>$282.7 million</strong> lobbying Congress for a tax repatriation holiday.
          They got it — and saved an estimated <strong>$62.5 billion</strong> in taxes. That&apos;s a <strong>22,000% return</strong>.
          Our analysis of 650,333 lobbying filings and $15.2 billion in disclosed spending confirms what the academics
          already knew: lobbying is the most profitable investment in America.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Academic Proof</h2>

        <p>
          In 2009, researchers Raquel Alexander, Susan Scholz, and Stephen Mazza published a landmark study
          in the <em>Journal of the American Taxation Association</em>. They tracked 93 corporations that lobbied
          for the American Jobs Creation Act of 2004 — a bill that created a one-time &quot;tax holiday&quot; allowing
          companies to repatriate overseas profits at a 5.25% rate instead of the standard 35%.
        </p>

        <p>
          The numbers were staggering. Those 93 firms spent $282.7 million on lobbying between 2003 and 2004.
          They collectively brought home $312 billion in offshore profits and saved an estimated $62.5 billion in taxes.
          The implied return on their lobbying investment: <strong>22,000%</strong>.
        </p>

        <p>
          To put that in perspective: if you invested $1,000 in the S&P 500 in 2004, you&apos;d have roughly $5,600 today.
          If you&apos;d spent that $1,000 on lobbying for the tax holiday, you&apos;d have gotten $220,000 back. In one year.
        </p>

        <p>
          Forbes later expanded the analysis. In a 2011 article, they found that Fortune 100 companies had collectively
          turned $2 billion in lobbying spending into $400 billion in government benefits — a 200:1 return. Whether it&apos;s
          tax breaks, no-bid contracts, favorable regulations, or killed bills, the math always points the same direction:
          lobbying pays.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What Our Data Shows</h2>

        <p>
          OpenLobby tracks every federal lobbying disclosure filed under the Lobbying Disclosure Act since 2018.
          That&apos;s <strong>650,333 filings</strong> disclosing a total of <strong>$15.2 billion</strong> in lobbying income.
          And the trend line only goes up.
        </p>

        <div className="not-prose my-8">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Federal Lobbying Spending by Year ($M)
          </h3>
          <div className="bg-gray-50 rounded-xl p-4" style={{ height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearlyData}>
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(v: any) => `$${v}M`} />
                <Tooltip formatter={(v: any) => [`$${v}M`, 'Spending']} />
                <Bar dataKey="spending" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 mt-2">Source: OpenLobby analysis of LDA filings, 2018–2025</p>
        </div>

        <p>
          In 2025, lobbying spending hit <strong>$2.7 billion</strong> — a 93% increase from 2018&apos;s $1.4 billion.
          That&apos;s not inflation. That&apos;s rational actors recognizing that the more government controls, the more it
          pays to influence government.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Top Investors</h2>

        <p>
          The biggest lobbying spenders in our database read like a who&apos;s who of American business — and
          they&apos;re doubling down.
        </p>

        <div className="not-prose my-8 bg-gray-50 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Top Lobbying Spenders, 2018–2025
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4 font-semibold">Organization</th>
                  <th className="text-right py-2 px-3 font-semibold">Total ($M)</th>
                  <th className="text-right py-2 pl-3 font-semibold">Trajectory</th>
                </tr>
              </thead>
              <tbody>
                {topSpenders.map(s => (
                  <tr key={s.name} className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">{s.name}</td>
                    <td className="text-right py-2 px-3">${s.total}M</td>
                    <td className="text-right py-2 pl-3 text-gray-600">{s.trajectory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p>
          The <strong>US Chamber of Commerce</strong> leads at $591.9 million — nearly $600 million spent
          lobbying over just eight years. That sounds like a lot until you consider what they&apos;re protecting:
          their 300,000+ member companies collectively represent trillions in annual revenue. Even a marginal
          regulatory change — a delayed EPA rule, a tweaked tax provision — can be worth billions to those members.
          The Chamber&apos;s lobbying spend is a rounding error on the value it delivers.
        </p>

        <p>
          <strong>Meta Platforms</strong> is perhaps the most telling case. Their lobbying has <em>exploded</em> —
          up 244% over our tracking period, reaching $154.9 million total. Why? Because the threats have multiplied.
          Antitrust lawsuits. AI regulation. Privacy bills. Section 230 reform. Content moderation mandates.
          When government has the power to break up your company or regulate your core product, you spend
          whatever it takes to be heard.
        </p>

        <p>
          <strong>Amazon</strong> tells the same story — up 105% to $147.1 million. As the company expanded
          from e-commerce into cloud computing (AWS serves the Pentagon), healthcare, and logistics, its
          regulatory surface area grew. More government touchpoints means more lobbying.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Growth Trajectories Tell the Story</h2>

        <p>
          Our trajectory analysis categorizes every client in the database by their spending trend. The results
          are revealing:
        </p>

        <ul>
          <li><strong>4,627 clients</strong> have &quot;exploding&quot; lobbying trajectories (100%+ growth)</li>
          <li><strong>4,835 clients</strong> are &quot;growing&quot; (25–100% growth)</li>
          <li><strong>11,106 clients</strong> are stable</li>
          <li><strong>3,779 clients</strong> are reducing spending</li>
          <li><strong>9,919 clients</strong> are declining</li>
          <li><strong>4,415 clients</strong> are brand new entrants</li>
        </ul>

        <p>
          Nearly 10,000 organizations are <em>increasing</em> their lobbying investment — and 4,415 are
          entering the game for the first time. That&apos;s not a sign of a system that&apos;s working. It&apos;s
          a sign that the government has become so powerful that you can&apos;t afford <em>not</em> to lobby.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why 22,000% Returns Are Rational</h2>

        <p>
          The academic literature keeps confirming the same basic finding: lobbying works, and it works spectacularly well.
        </p>

        <p>
          A 2011 study by Igan, Mishra, and Tressel found that financial institutions that lobbied more
          aggressively were more likely to receive favorable regulatory treatment during the 2008 crisis.
          A 2014 study in the <em>American Economic Review</em> showed that firms that lobby pay lower
          effective tax rates. A 2016 study found that every $1 spent on tax lobbying returned $5.50 in
          reduced tax obligations.
        </p>

        <p>
          These returns vary by industry and issue, but they&apos;re consistently positive. And they create a
          self-reinforcing cycle: the more government has to give (or take), the higher the returns to
          lobbying, which attracts more lobbying, which gives government more incentive to expand its power
          (more petitioners = more importance = bigger budgets).
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Libertarian Diagnosis</h2>

        <p>
          There&apos;s a popular narrative that lobbying is the problem and we just need to regulate it harder.
          More disclosure. Lower contribution limits. Cooling-off periods. But this misses the point entirely.
        </p>

        <p>
          Lobbying exists because the federal government controls $6.75 trillion in annual spending, writes
          regulations that affect every industry, and has the power to make or break entire sectors with a
          single bill. As long as government has that power, people will spend money trying to influence how
          it&apos;s used. You can no more stop lobbying than you can stop water from flowing downhill.
        </p>

        <p>
          The real question isn&apos;t &quot;how do we stop lobbying?&quot; It&apos;s &quot;why does government
          control enough of the economy to make a 22,000% lobbying ROI possible?&quot;
        </p>

        <p>
          Consider: the 2004 tax holiday that generated that 22,000% return existed because the corporate tax
          rate was 35%. Companies had $312 billion trapped overseas specifically because bringing it home was
          punished by the tax code. The lobbying wasn&apos;t to get a special favor — it was to temporarily
          undo the damage of an existing policy. The 93 firms weren&apos;t seeking rent; they were paying a
          ransom.
        </p>

        <p>
          Every dollar spent lobbying is a dollar not spent on R&amp;D, hiring, or capital investment. It&apos;s
          a <em>deadweight loss</em> — pure friction in the economy created by the government&apos;s control over
          resources. Economists call it &quot;rent-seeking,&quot; and it&apos;s economically indistinguishable from theft.
          The money doesn&apos;t create value; it merely redirects existing value from the public to the connected.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Numbers Keep Growing</h2>

        <p>
          Our data shows that lobbying spending grew from $1.4 billion in 2018 to $2.7 billion in 2025 — virtually
          doubling. The number of filings rose from 66,516 to 95,275. And the number of new entrants — organizations
          lobbying for the first time — surged to <strong>6,997 in 2025</strong>, up from 3,796 in 2019.
        </p>

        <p>
          This isn&apos;t an industry in decline. It&apos;s an industry in a boom cycle, and every new regulation,
          every new government program, every expansion of federal authority creates new customers. The
          Inflation Reduction Act spawned an army of clean-energy lobbyists. AI regulation is doing the same
          for tech companies. Trade wars drive manufacturing lobbyists to K Street.
        </p>

        <p>
          The 22,000% ROI isn&apos;t an anomaly. It&apos;s the system working exactly as designed — if you understand
          that the system was designed by the people who benefit from it.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What You Can Do</h2>

        <p>
          Transparency is the first step. That&apos;s why OpenLobby exists — to make the lobbying data
          accessible, searchable, and understandable. When you can see who&apos;s spending what on which issues,
          you can start asking the right questions.
        </p>

        <p>
          Explore our <Link href="/clients" className="text-indigo-600 hover:underline">client database</Link> to
          see who&apos;s spending the most. Check the <Link href="/trends" className="text-indigo-600 hover:underline">trends page</Link> to
          watch spending trajectories in real time. And read our other investigations to understand how the
          <Link href="/investigations/the-revolving-door-premium" className="text-indigo-600 hover:underline"> revolving door</Link>,{' '}
          <Link href="/investigations/dc-lobbying-capital" className="text-indigo-600 hover:underline">geographic concentration</Link>, and{' '}
          <Link href="/investigations/issue-arms-race" className="text-indigo-600 hover:underline">issue arms races</Link> make the
          lobbying machine even more powerful.
        </p>

        <p>
          The 22,000% ROI exists because information asymmetry lets the connected profit at the expense of
          everyone else. The antidote is sunlight.
        </p>

      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/investigations/the-revolving-door-premium" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-xs text-indigo-600 font-semibold">Revolving Door</span>
            <p className="font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>The 369% Premium: Hard Proof That the Revolving Door Pays</p>
          </Link>
          <Link href="/investigations/follow-the-money" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
            <span className="text-xs text-indigo-600 font-semibold">Analysis</span>
            <p className="font-bold mt-1" style={{ fontFamily: 'var(--font-serif)' }}>Follow the Money: The 8,187x Return on Lobbying</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
