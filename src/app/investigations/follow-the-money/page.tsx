import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'Follow the Money: The 8,187% Return on Lobbying Investment',
  description: 'Companies that lobby get billions in government contracts. McKesson spent $1.45M lobbying and received $11.8B in contracts — an 8,187x return. Here are the numbers.',
}

export default function FollowTheMoneyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Follow the Money: The 8,187% Return on Lobbying Investment", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "Companies that lobby get billions in government contracts. McKesson spent $1.45M lobbying and received $11.8B in contracts.", mainEntityOfPage: "https://www.openlobby.us/investigations/follow-the-money" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Follow the Money' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Analysis</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Follow the Money:{' '}
        <span className="text-indigo-600">The 8,187% Return</span>{' '}
        on Lobbying Investment
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/follow-the-money" title="Follow the Money: The 8,187% Return on Lobbying" />

      <div className="my-8 bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-indigo-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          We matched lobbying disclosure filings against federal contract data. The results are staggering: 
          14 companies that both lobby and receive government contracts spent a combined <strong>$20.9 million</strong> on 
          lobbying — and received <strong>$55.3 billion</strong> in government contracts. That&apos;s an average return 
          of <strong>$2,762 for every $1 spent lobbying</strong>. The top performer? McKesson Corporation, 
          with an <strong>8,187x return</strong>.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Most Profitable Investment in America</h2>

        <p>
          Forget the stock market. Forget real estate. Forget crypto. The highest return on investment 
          in America might be lobbying.
        </p>

        <p>
          We cross-referenced companies that appear in both federal lobbying disclosures and the 
          federal procurement database (USASpending.gov). The correlation between lobbying spending 
          and government contract awards is striking — and the implied returns are astronomical.
        </p>

        <p>
          <strong>A caveat upfront:</strong> correlation is not causation. Companies that receive large 
          government contracts have many reasons to lobby — to protect existing contracts, shape procurement rules, 
          and influence policy. The contracts aren&apos;t &quot;purchased&quot; through lobbying. But the numbers 
          do illustrate why lobbying is such a rational investment for government contractors.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The ROI Scoreboard</h2>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Spend vs. Government Contracts Received</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 pr-4 font-semibold">Company</th>
                  <th className="text-right py-2 px-3 font-semibold">Lobbying</th>
                  <th className="text-right py-2 px-3 font-semibold">Contracts</th>
                  <th className="text-right py-2 pl-3 font-semibold">ROI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'McKesson Corporation', lobbying: '$1.45M', contracts: '$11.87B', roi: '8,187x' },
                  { name: 'Booz Allen Hamilton', lobbying: '$1.15M', contracts: '$6.56B', roi: '5,708x' },
                  { name: 'RTX Corporation (Raytheon)', lobbying: '$1.67M', contracts: '$7.28B', roi: '4,360x' },
                  { name: 'Huntington Ingalls', lobbying: '$1.69M', contracts: '$4.37B', roi: '2,586x' },
                  { name: 'Accenture Federal Services', lobbying: '$1.28M', contracts: '$3.24B', roi: '2,528x' },
                  { name: 'Lockheed Martin', lobbying: '$1.15M', contracts: '$2.54B', roi: '2,208x' },
                  { name: 'Johns Hopkins APL', lobbying: '$1.14M', contracts: '$2.36B', roi: '2,070x' },
                  { name: 'BAE Systems', lobbying: '$1.14M', contracts: '$2.16B', roi: '1,899x' },
                  { name: 'Boeing', lobbying: '$1.34M', contracts: '$2.35B', roi: '1,756x' },
                  { name: 'Caltech (JPL)', lobbying: '$1.69M', contracts: '$2.30B', roi: '1,359x' },
                  { name: 'SpaceX', lobbying: '$2.55M', contracts: '$3.0B', roi: '1,176x' },
                ].map(item => (
                  <tr key={item.name} className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">{item.name}</td>
                    <td className="py-2 px-3 text-right text-gray-600">{item.lobbying}</td>
                    <td className="py-2 px-3 text-right font-semibold text-indigo-600">{item.contracts}</td>
                    <td className="py-2 pl-3 text-right font-bold text-indigo-700">{item.roi}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-gray-300 font-bold">
                  <td className="py-2 pr-4">Total (14 companies)</td>
                  <td className="py-2 px-3 text-right">$20.9M</td>
                  <td className="py-2 px-3 text-right text-indigo-600">$55.3B</td>
                  <td className="py-2 pl-3 text-right text-indigo-700">2,762x avg</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Source: OpenLobby analysis matching Senate LDA filings with USASpending.gov contract data
          </p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>McKesson: The $11.8 Billion Return</h2>

        <p>
          McKesson Corporation, the pharmaceutical distribution giant based in California, tops our ROI rankings. 
          The company spent <strong>$1.45 million</strong> on lobbying — focused on &quot;MMM&quot; (Medicare/Medicaid) issues — 
          and received <strong>$11.87 billion</strong> in federal contracts. That&apos;s a return of $8,187 
          for every dollar spent lobbying.
        </p>

        <p>
          McKesson is the largest pharmaceutical distributor in the US, and its federal contracts are primarily 
          for drug distribution to the VA, military hospitals, and other government healthcare facilities. 
          The company has lobbied consistently since 2018 with 29 filings across 7 years.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Defense Industrial Complex</h2>

        <p>
          Defense contractors dominate the ROI list — and for good reason. The Pentagon is the world&apos;s 
          largest customer, and the procurement process is heavily influenced by congressional appropriations, 
          which are in turn shaped by lobbying.
        </p>

        <ul>
          <li>
            <strong>RTX Corporation (Raytheon)</strong> — $1.67M lobbied, $7.28B in contracts (4,360x). 
            Lobbies on defense, aviation, trade, aerospace, and technology issues.
          </li>
          <li>
            <strong>Huntington Ingalls</strong> — $1.69M lobbied, $4.37B in contracts (2,586x). 
            America&apos;s largest military shipbuilder. Lobbies on defense and budget.
          </li>
          <li>
            <strong>Lockheed Martin</strong> — $1.15M lobbied, $2.54B in contracts (2,208x). 
            The world&apos;s largest defense contractor.
          </li>
          <li>
            <strong>Boeing</strong> — $1.34M lobbied, $2.35B in contracts (1,756x). 
            Defense, aviation, and space contracts.
          </li>
          <li>
            <strong>BAE Systems</strong> — $1.14M lobbied, $2.16B in contracts (1,899x). 
            UK-headquartered but a major US defense contractor.
          </li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The SpaceX Factor</h2>

        <p>
          SpaceX appears on the list with $2.55 million in lobbying and $3 billion in federal contracts — 
          a 1,176x return. Notably, SpaceX&apos;s lobbying spend is the highest of any company on our list, 
          reflecting its aggressive pursuit of NASA, military, and intelligence community launch contracts.
        </p>

        <p>
          The irony is rich: Elon Musk runs DOGE, which aims to cut government spending, 
          while his other company is one of the biggest beneficiaries of government contracts — 
          and lobbies to get more.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Booz Allen Hamilton: The Consulting Giant</h2>

        <p>
          The second-highest ROI belongs to Booz Allen Hamilton, the management consulting firm 
          that is essentially a shadow government. With $1.15 million in lobbying and $6.56 billion 
          in contracts (5,708x return), Booz Allen is the epitome of the government-contractor-lobbying nexus.
        </p>

        <p>
          Booz Allen lobbies on defense, budget, government operations, veterans affairs, intelligence, 
          and homeland security — essentially every area where the government outsources work to contractors. 
          The company has filed 23 lobbying reports since 2018.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What the Numbers Really Mean</h2>

        <p>
          We want to be clear: these numbers don&apos;t prove that lobbying &quot;buys&quot; contracts. 
          Government procurement follows (theoretically) competitive bidding processes, and these companies 
          win contracts because they provide goods and services the government needs.
        </p>

        <p>
          But lobbying shapes the <em>rules</em> of procurement. It influences which programs get funded, 
          which requirements get written into contracts, and which agencies get budget increases. 
          A company that lobbies on defense appropriations isn&apos;t buying a specific contract — 
          it&apos;s ensuring the <em>category</em> of contracts it competes for continues to exist and grow.
        </p>

        <p>
          And the numbers make the incentive crystal clear: when $1 of lobbying correlates with 
          thousands of dollars in contracts, the rational business decision is always to keep lobbying.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Self-Reinforcing Cycle</h2>

        <p>
          This creates a self-reinforcing cycle: companies win contracts → use contract revenue to fund lobbying → 
          lobbying helps shape future procurements → companies win more contracts. 
          The barrier to entry for competitors without lobbying operations grows higher every year.
        </p>

        <p>
          For taxpayers, the question isn&apos;t whether this is legal (it is) but whether it&apos;s efficient. 
          Does the government get the best value when contractors who lobby get preferential treatment? 
          Or does the lobbying-procurement nexus create an insiders&apos; market that costs taxpayers more?
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">See which companies lobby and receive government contracts — the full lobbying ROI dataset.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/investigations/follow-the-money" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Follow the Money →
            </Link>
            <Link href="/clients" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Top Clients →
            </Link>
            <Link href="/trends" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Spending Trends →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation 
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'USASpending.gov Federal Contract Data',
          'OpenLobby ROI Analysis (14 matched companies)',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
          </Link>
          <Link href="/investigations/lobbying-vs-contracts" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Lobbying vs. Contracts</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
          </Link>
          <Link href="/firms" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏢 Top Firms</div>
          </Link>
          <Link href="/concentration" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🎯 Market Concentration</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
