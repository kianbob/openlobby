import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'

export const metadata: Metadata = {
  title: "The Lobbying Industrial Complex: 726,000 Filings, $37.7 Billion, and the Machine That Runs Washington",
  description: 'A comprehensive look at the scale of federal lobbying: 726K+ filings, $37.7B in spending, 29,000+ lobbyists, and the growth trends reshaping American democracy.',
}

export default function TheLobbyingIndustrialComplexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "The Lobbying Industrial Complex: 726,000 Filings, $37.7 Billion, and the Machine That Runs Washington", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "A comprehensive look at the full scale of federal lobbying in America.", mainEntityOfPage: "https://www.openlobby.us/investigations/the-lobbying-industrial-complex" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'The Lobbying Industrial Complex' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Analysis</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The Lobbying Industrial Complex:{' '}
        <span className="text-indigo-600">$37.7 Billion</span>{' '}
        and 726,000 Filings
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 14 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/the-lobbying-industrial-complex" title="The Lobbying Industrial Complex: $37.7B and 650K Filings" />

      <QuickFacts facts={[
        { label: 'Total lobbying filings', value: '726,268' },
        { label: 'Total reported income', value: '$37.7B' },
        { label: 'Registered lobbyists', value: '29,754' },
        { label: 'Unique clients', value: '1,591+' },
      ]} />

      <div className="my-8 bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-indigo-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Federal lobbying in America is a <strong>$37.7 billion</strong> industry. Our dataset contains{' '}
          <strong>726,000+ filings</strong> from <strong>29,754 lobbyists</strong> working for <strong>7,746 firms</strong>{' '}
          representing thousands of clients. Lobbying spending has grown every single year since 2018, reaching nearly{' '}
          <strong>$2 billion</strong> in 2024 alone. This is the machine that really runs Washington — and it&apos;s
          bigger than most people imagine.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>By the Numbers: The Full Picture</h2>

        <p>
          We built OpenLobby to make federal lobbying data accessible to everyone. In the process, we assembled one of the
          most comprehensive lobbying datasets ever created. Here&apos;s what the numbers reveal about the scale of influence
          in American politics.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Industry at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Filings', value: '726,268', sub: '2018–2025' },
              { label: 'Total Spending', value: '$37.7B', sub: 'Reported income' },
              { label: 'Lobbyists', value: '29,754', sub: 'Unique registered' },
              { label: 'Lobbying Firms', value: '7,746', sub: 'Active firms' },
              { label: 'Clients', value: '1,591+', sub: 'Top indexed' },
              { label: 'Issues Tracked', value: '79', sub: 'Issue categories' },
              { label: 'Revolving Door', value: '5,000+', sub: 'Former officials' },
              { label: 'Foreign Entities', value: '1,000+', sub: 'Countries lobbying US' },
            ].map(item => (
              <div key={item.label} className="text-center p-3">
                <div className="text-2xl font-bold text-indigo-600">{item.value}</div>
                <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                <div className="text-xs text-gray-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Growth Curve: More Money Every Year</h2>

        <p>
          One of the most striking patterns in the data is relentless growth. Lobbying spending has increased every year
          in our dataset, from <strong>$1.4 billion</strong> in 2018 to nearly <strong>$2 billion</strong> in 2024.
          The number of filings has grown from 66,516 to over 100,000 per year.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Spending by Year</h3>
          <div className="space-y-2">
            {[
              { year: '2018', amount: '$1.40B', filings: '66,516' },
              { year: '2019', amount: '$1.47B', filings: '68,815' },
              { year: '2020', amount: '$1.62B', filings: '75,360' },
              { year: '2021', amount: '$1.73B', filings: '81,242' },
              { year: '2022', amount: '$1.82B', filings: '87,105' },
              { year: '2023', amount: '$1.91B', filings: '92,880' },
              { year: '2024', amount: '$1.98B', filings: '98,415' },
            ].map(item => (
              <div key={item.year} className="flex items-center gap-4">
                <div className="font-mono text-sm w-12">{item.year}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                  <div
                    className="bg-indigo-500 rounded-full h-6"
                    style={{ width: `${(parseFloat(item.amount.replace('$', '').replace('B', '')) / 2) * 100}%` }}
                  />
                </div>
                <div className="font-bold text-sm w-20 text-right">{item.amount}</div>
                <div className="text-xs text-gray-500 w-24 text-right">{item.filings} filings</div>
              </div>
            ))}
          </div>
        </div>

        <p>
          What&apos;s driving the growth? Every major policy debate attracts more lobbying. The pandemic brought healthcare
          and pharma lobbyists. AI regulation brought tech lobbyists. Trade wars brought manufacturing lobbyists. Climate
          policy brought energy lobbyists. The lobbying industry grows because government keeps making decisions that
          affect billions of dollars — and corporations keep paying to influence those decisions.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Who Spends the Most?</h2>

        <p>
          The top lobbying clients are a who&apos;s who of American corporate power. Healthcare and pharma lead,
          followed by tech, finance, defense, and energy. Our{' '}
          <Link href="/clients" className="text-primary hover:underline">Top Clients page</Link>{' '}
          shows the full rankings, but the pattern is clear: the industries with the most to gain (or lose) from
          government decisions spend the most on lobbying.
        </p>

        <p>
          Trade groups and industry associations are particularly effective lobbying vehicles. Organizations like{' '}
          PhRMA, the American Petroleum Institute, AHIP, and SIFMA allow entire industries to pool resources and
          lobby collectively — often outspending any individual company.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The 79 Battlegrounds</h2>

        <p>
          Federal lobbying covers <Link href="/issues" className="text-primary hover:underline">79 issue categories</Link>,
          from healthcare to defense to taxation. But spending is heavily concentrated in a handful of areas:
        </p>

        <ul>
          <li><strong><Link href="/issues/HCR" className="text-primary hover:underline">Health Issues (HCR)</Link></strong> — The #1 most-lobbied issue, with $2.7B+ in total spending</li>
          <li><strong><Link href="/issues/TAX" className="text-primary hover:underline">Taxation (TAX)</Link></strong> — Every industry lobbies on taxes. Every budget cycle triggers a spending surge.</li>
          <li><strong><Link href="/issues/BUD" className="text-primary hover:underline">Budget/Appropriations (BUD)</Link></strong> — Appropriations bills are where the money flows — and where lobbyists fight hardest</li>
          <li><strong><Link href="/issues/DEF" className="text-primary hover:underline">Defense (DEF)</Link></strong> — The military-industrial complex is alive and well-funded</li>
          <li><strong><Link href="/issues/TRD" className="text-primary hover:underline">Trade (TRD)</Link></strong> — Tariffs, trade agreements, and market access</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door: 5,000 Former Officials</h2>

        <p>
          Our <Link href="/revolving-door" className="text-primary hover:underline">Revolving Door tracker</Link>{' '}
          identifies over <strong>5,000 former government officials</strong> now registered as lobbyists. These aren&apos;t
          random bureaucrats — they&apos;re former chiefs of staff, committee directors, White House advisors, and
          agency heads who trade on their government connections.
        </p>

        <p>
          As we documented in our{' '}
          <Link href="/investigations/the-revolving-door-premium" className="text-primary hover:underline">Revolving Door Premium investigation</Link>,
          firms that employ former government officials earn <strong>369% more revenue</strong> and attract{' '}
          <strong>4.9x more clients</strong> than firms without revolving door connections. The message is clear:
          in the lobbying business, who you know is worth far more than what you know.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Firms: K Street&apos;s Power Brokers</h2>

        <p>
          The <strong>7,746 lobbying firms</strong> in our dataset range from one-person shops to massive multi-practice
          operations. The top firms —{' '}
          <Link href="/firms" className="text-primary hover:underline">see the full rankings</Link>{' '}
          — handle hundreds of clients each and generate tens of millions in annual revenue.
        </p>

        <p>
          Many of these firms are clustered on K Street in Washington, DC — the avenue that has become synonymous with
          lobbying. As we documented in our{' '}
          <Link href="/investigations/dc-lobbying-capital" className="text-primary hover:underline">DC lobbying geography piece</Link>,
          the District of Columbia has <strong>$27,105</strong> in lobbying spending per capita — 89x the national average.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Foreign Influence: 1,000+ Entities</h2>

        <p>
          Lobbying isn&apos;t just domestic. Over <strong>1,000 foreign entities</strong> from dozens of countries
          lobby the US government, as we detailed in our{' '}
          <Link href="/investigations/foreign-influence" className="text-primary hover:underline">Foreign Influence investigation</Link>.
          Countries like the UK, Japan, South Korea, and China all maintain significant lobbying operations in Washington.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The ROI That Makes It All Worth It</h2>

        <p>
          Why does the lobbying industry keep growing? Because it works. Our analyses have documented extraordinary
          returns on lobbying investment:
        </p>

        <ul>
          <li>Companies that lobby receive <Link href="/investigations/lobbying-vs-contracts" className="text-primary hover:underline">$49,536 in government contracts for every $1 spent on lobbying</Link></li>
          <li>Academic research shows lobbying for tax provisions can yield a <Link href="/investigations/the-22000-percent-roi" className="text-primary hover:underline">22,000% return</Link></li>
          <li>The <Link href="/investigations/follow-the-money" className="text-primary hover:underline">8,187x return</Link> documented by cross-referencing lobbying with contract data</li>
        </ul>

        <p>
          When the return on investment is this high, the rational economic decision is always to lobby more.
          That&apos;s why the industry keeps growing — and why it will continue to grow unless the rules change.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What This Means for Democracy</h2>

        <p>
          The lobbying industrial complex is legal. It&apos;s protected by the First Amendment&apos;s right to petition
          the government. And in many cases, lobbyists provide genuine expertise that helps lawmakers make better
          decisions.
        </p>

        <p>
          But the scale matters. When industries spend $37.7 billion on lobbying while individual citizens have no
          lobbyist, the playing field isn&apos;t level. When 5,000 former officials monetize their government service
          by lobbying their old colleagues, the revolving door undermines public trust. When the industries that spend
          the most on lobbying consistently get the policies they want, it&apos;s hard to argue that the system is
          working for everyone.
        </p>

        <p>
          We built OpenLobby because we believe transparency is the first step toward accountability. Every filing in
          our database is public record. Every dollar disclosed. Every lobbyist named. The information has always been
          available — we just made it accessible.
        </p>

        <p>
          The lobbying industrial complex thrives in darkness. Sunlight is the best disinfectant.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Full Dataset</h3>
          <p className="text-gray-700 mb-4">Dive into 726,000+ filings, search any client, firm, or lobbyist.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/firms" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Top Firms →
            </Link>
            <Link href="/issues" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              All Issues →
            </Link>
            <Link href="/revolving-door" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Revolving Door →
            </Link>
            <Link href="/search" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Search Everything →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby dataset — 726,000+ filings analyzed',
          'USASpending.gov contract data',
          'Academic research on lobbying ROI (Raquel Alexander et al., 2009)',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Read More Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
          </Link>
          <Link href="/investigations/revolving-door-exposed" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 The Revolving Door Exposed</div>
          </Link>
          <Link href="/investigations/doge-vs-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏛️ DOGE vs. The Lobbying Machine</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
