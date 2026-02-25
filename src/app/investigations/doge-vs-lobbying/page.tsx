import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'

export const metadata: Metadata = {
  title: 'DOGE Wants to Cut Government. $4.4 Billion in Lobbying Wants to Keep It.',
  description: 'The Department of Government Efficiency wants to slash federal spending. But the lobbying industry spent a record $4.4 billion in 2024 to keep the money flowing. Here\'s who\'s fighting back.',
}

export default function DogeVsLobbyingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "DOGE Wants to Cut Government. $4.4 Billion in Lobbying Wants to Keep It.", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "The Department of Government Efficiency wants to slash federal spending. But the lobbying industry spent a record $4.4 billion in 2024.", mainEntityOfPage: "https://www.openlobby.us/investigations/doge-vs-lobbying" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'DOGE vs. The Lobbying Machine' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">Investigation</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        DOGE Wants to Cut Government.{' '}
        <span className="text-red-600">$4.4 Billion in Lobbying</span>{' '}
        Wants to Keep It.
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 12 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/doge-vs-lobbying" title="DOGE wants to cut government. $4.4 billion in lobbying wants to keep it." />

      <QuickFacts facts={[
        { label: 'Total lobbying in 2025', value: '$2.7B' },
        { label: 'Agencies targeted by DOGE', value: '15+' },
        { label: 'Lobbying on government issues', value: '$1.2B' },
        { label: 'New clients lobbying in 2025', value: '500+' },
      ]} />

      {/* The Bottom Line */}
      <div className="my-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-red-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          The Department of Government Efficiency (DOGE) has promised to slash federal spending and eliminate waste. 
          But the lobbying industry — which spent a record <strong>$4.4 billion in 2024 alone</strong> — exists specifically 
          to keep government money flowing. Every contract DOGE tries to cut has a lobbyist fighting to save it. 
          Every agency DOGE targets has an industry that depends on it. This is the story of an unstoppable force 
          meeting an extremely well-funded immovable object.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The $4.4 Billion Machine</h2>
        
        <p>
          In 2024, federal lobbying hit an all-time record: <strong>$4.4 billion</strong>. That&apos;s $150 million more than 2023, 
          continuing an upward trend that started in 2016. The number of registered lobbyists, the amount of money flowing 
          through K Street, and the scope of issues being lobbied on — all at historic highs.
        </p>

        <p>
          This isn&apos;t a coincidence. Lobbying spending tracks government spending. The bigger the federal budget, 
          the more there is to fight over. When the government spends $6.7 trillion a year, every dollar becomes 
          someone&apos;s revenue — and someone&apos;s lobbyist&apos;s job to protect.
        </p>

        <p>
          Enter DOGE. Elon Musk&apos;s Department of Government Efficiency has promised to find and eliminate waste 
          across the federal government. They&apos;ve targeted agencies, contracts, grants, and headcount. 
          It&apos;s the most aggressive push to reduce government spending in decades.
        </p>

        <p>
          But here&apos;s what DOGE is up against: <strong>every line item in the federal budget has a constituency</strong>. 
          And that constituency has lobbyists.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Who Spends the Most — And Why They Care</h2>

        <p>
          The top lobbying spenders in America aren&apos;t abstract interest groups. They&apos;re the companies 
          and industries that depend most heavily on federal spending, regulation, and contracts:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Lobbying Sectors (2024)</h3>
          <div className="space-y-3">
            {[
              { sector: 'Healthcare & Pharma', amount: '$740M+', why: 'Medicare/Medicaid reimbursement rates, drug pricing, FDA regulations' },
              { sector: 'Technology', amount: '$200M+', why: 'AI regulation, antitrust, Section 230, data privacy' },
              { sector: 'Finance & Insurance', amount: '$550M+', why: 'Banking regulations, crypto policy, insurance mandates' },
              { sector: 'Energy & Natural Resources', amount: '$400M+', why: 'Oil leases, renewable subsidies, EPA regulations, pipeline permits' },
              { sector: 'Defense & Aerospace', amount: '$150M+', why: 'Pentagon contracts, base closures, weapons programs' },
              { sector: 'Real Estate & Construction', amount: '$130M+', why: 'Housing subsidies, zoning, infrastructure spending' },
            ].map(item => (
              <div key={item.sector} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-gray-200 last:border-0">
                <div className="font-semibold text-gray-900 sm:w-56">{item.sector}</div>
                <div className="text-primary font-bold sm:w-24">{item.amount}</div>
                <div className="text-sm text-gray-600 flex-1">{item.why}</div>
              </div>
            ))}
          </div>
        </div>

        <p>
          Notice a pattern? These are the same sectors that receive the most federal spending. 
          Healthcare lobbies because Medicare and Medicaid are $1.5 trillion programs. Defense lobbies 
          because the Pentagon budget is $886 billion. Energy lobbies because federal land leases 
          and subsidies are worth hundreds of billions.
        </p>

        <p>
          <strong>Lobbying isn&apos;t about ideology. It&apos;s about revenue protection.</strong>
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The DOGE Paradox</h2>

        <p>
          Here&apos;s the fundamental tension: DOGE&apos;s mission is to cut government waste. 
          But &quot;waste&quot; is a matter of perspective. One person&apos;s waste is another person&apos;s contract. 
          One agency&apos;s redundancy is an industry&apos;s lifeline.
        </p>

        <p>
          Consider some of the programs DOGE has targeted:
        </p>

        <ul>
          <li>
            <strong>USAID foreign aid programs</strong> — Cut or frozen by DOGE. But foreign aid contractors 
            spent millions lobbying to keep those programs funded. Every dollar of foreign aid flows through 
            contractors, consultants, and NGOs — all of which have lobbyists.
          </li>
          <li>
            <strong>Federal workforce reductions</strong> — DOGE has pushed for mass layoffs and hiring freezes. 
            But federal employee unions and the industries that serve government workers (IT contractors, 
            office space, healthcare providers) are lobbying hard against cuts.
          </li>
          <li>
            <strong>Regulatory agencies</strong> — DOGE wants to streamline or eliminate agencies. 
            But industries that benefit from regulation (compliance firms, consultants, law firms) 
            lobby to keep the regulatory apparatus intact. Even industries that <em>complain</em> about 
            regulation often prefer the devil they know.
          </li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door Makes It Worse</h2>

        <p>
          There&apos;s another layer to this: the revolving door between government and K Street. 
          Thousands of lobbyists are former congressional staffers, agency officials, and even 
          former members of Congress. They know the system intimately because they built it.
        </p>

        <p>
          When DOGE tries to cut a program, the lobbyist defending it may be the person who wrote 
          the legislation creating it. When DOGE targets an agency, the lobbyist fighting back 
          may be the former deputy director. The institutional knowledge advantage is enormous.
        </p>

        <p>
          Our <Link href="/revolving-door" className="text-primary hover:underline">Revolving Door tracker</Link> shows 
          thousands of lobbyists who disclosed former government positions — from congressional schedulers 
          to senior White House advisors — now working to influence the very institutions they used to run.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Numbers Tell the Story</h2>

        <p>
          Lobbying spending has increased every single year since 2016:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <div className="space-y-2">
            {[
              { year: 2018, amount: 3.46 },
              { year: 2019, amount: 3.51 },
              { year: 2020, amount: 3.53 },
              { year: 2021, amount: 3.73 },
              { year: 2022, amount: 4.09 },
              { year: 2023, amount: 4.24 },
              { year: 2024, amount: 4.40 },
            ].map(item => (
              <div key={item.year} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 w-12">{item.year}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${(item.amount / 4.4) * 100}%` }}
                  >
                    <span className="text-xs font-bold text-white">${item.amount}B</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">Source: OpenSecrets analysis of Senate LDA filings</p>
        </div>

        <p>
          Even in 2020 — during a global pandemic that shut down much of the economy — lobbying spending 
          <em>increased</em>. When there&apos;s $2 trillion in emergency stimulus to fight over, lobbyists work overtime.
        </p>

        <p>
          The question isn&apos;t whether DOGE can identify waste. It&apos;s whether any reform effort can overcome 
          a $4.4 billion industry whose entire purpose is preventing exactly that.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What This Means for Taxpayers</h2>

        <p>
          Whether you support DOGE or oppose it, the lobbying numbers reveal an uncomfortable truth: 
          <strong>the federal government has become so large that the industry of influencing it 
          is itself a major economic force</strong>.
        </p>

        <p>
          $4.4 billion a year isn&apos;t spent on lobbying because it doesn&apos;t work. It&apos;s spent because 
          the return on investment is extraordinary. Studies have found that for every dollar spent 
          on lobbying, companies see returns of $200 or more in tax benefits, contracts, and favorable regulation.
        </p>

        <p>
          That&apos;s the real story: not that lobbying exists, but that it&apos;s so profitable. 
          As long as the federal government controls $6.7 trillion in annual spending, 
          there will always be someone willing to spend billions to influence where it goes.
        </p>

        <p>
          DOGE may cut some programs. It may eliminate some agencies. But the lobbying machine 
          will adapt, redirect, and find new levers to pull. It always does.
        </p>

        <p>
          The question for taxpayers: <strong>is transparency the answer?</strong> If everyone can see 
          who&apos;s lobbying for what, maybe the sunlight itself becomes the disinfectant. 
          That&apos;s what we&apos;re building here.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Every lobbying dollar disclosed to the Senate is searchable on this site.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/trends" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Spending Trends →
            </Link>
            <Link href="/revolving-door" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Revolving Door →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation 
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenSecrets Federal Lobbying Data',
          'Congressional Research Service',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/defense-contractor-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ The Defense Lobby</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
          </Link>
          <Link href="/investigations/seasonal-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📅 Seasonal Lobbying Patterns</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
          </Link>
          <Link href="/issues/GOV" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📋 Government Issues Data</div>
          </Link>
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
