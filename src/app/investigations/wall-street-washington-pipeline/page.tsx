import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'

export const metadata: Metadata = {
  title: "The Wall Street–Washington Pipeline: How Finance Lobbies to Write Its Own Rules",
  description: 'Banks, hedge funds, and financial firms have spent billions lobbying Congress to shape regulation — from Dodd-Frank rollbacks to crypto policy battles.',
}

export default function WallStreetWashingtonPipelinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "The Wall Street–Washington Pipeline: How Finance Lobbies to Write Its Own Rules", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "Banks, hedge funds, and financial firms have spent billions lobbying Congress to shape regulation.", mainEntityOfPage: "https://www.openlobby.us/investigations/wall-street-washington-pipeline" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'The Wall Street–Washington Pipeline' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Finance</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The Wall Street–Washington Pipeline:{' '}
        <span className="text-blue-600">Billions</span>{' '}
        to Write Their Own Rules
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 11 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/wall-street-washington-pipeline" title="The Wall Street–Washington Pipeline" />

      <QuickFacts facts={[
        { label: 'Financial sector lobbying (BNK+FIN+INS)', value: '$1.8B+' },
        { label: 'Top spender (JPMorgan Chase)', value: '$10M+' },
        { label: 'Crypto lobbying growth since 2020', value: '400%+' },
        { label: 'Finance lobbyists in DC', value: '2,500+' },
      ]} />

      <div className="my-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-blue-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          The financial services industry — banks, hedge funds, insurance companies, and crypto firms — is one of the
          largest lobbying forces in Washington. Across banking, finance, and insurance issue codes, the sector has reported
          over <strong>$1.8 billion</strong> in lobbying expenditures in our dataset. From gutting Dodd-Frank to shaping
          crypto regulation, Wall Street doesn&apos;t just play the game — it writes the rules.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Banks That Own K Street</h2>

        <p>
          When the 2008 financial crisis nearly destroyed the global economy, Congress responded with Dodd-Frank — the most
          sweeping financial regulation in a generation. Wall Street responded with the most sweeping lobbying campaign in
          a generation. And Wall Street won.
        </p>

        <p>
          Our analysis of Senate lobbying disclosure filings reveals a financial sector that treats lobbying not as a cost
          center, but as a core business function. The biggest banks in America maintain permanent lobbying operations that
          rival the budgets of small federal agencies.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Financial Sector Lobbying Clients</h3>
          <div className="space-y-3">
            {[
              { name: 'JPMorgan Chase & Co.', amount: '$10.2M', detail: '100+ filings across registrations', href: '/clients/jpmorgan-chase-co' },
              { name: 'Goldman Sachs Group', amount: '$6.8M', detail: '70+ filings — investment banking giant', href: '/clients/goldman-sachs-group-inc' },
              { name: 'Bank of America Corporation', amount: '$5.4M', detail: '60+ filings', href: '/clients/bank-of-america-corporation' },
              { name: 'Citigroup', amount: '$4.9M', detail: '55+ filings across subsidiaries', href: '/clients/citigroup-washington-inc' },
              { name: 'Morgan Stanley', amount: '$4.1M', detail: '50+ filings', href: '/clients/morgan-stanley-co-llc' },
              { name: 'Wells Fargo', amount: '$3.8M', detail: '45+ filings', href: '/clients/wells-fargo-company' },
              { name: 'Capital One Financial', amount: '$3.2M', detail: '40+ filings', href: '/clients/capital-one-financial-corporation' },
              { name: 'BlackRock', amount: '$2.9M', detail: '35+ filings — world\'s largest asset manager', href: '/clients/blackrock-inc' },
              { name: 'SIFMA', amount: '$5.6M', detail: '60+ filings — Wall Street\'s main trade group', href: '/clients/securities-industry-and-financial-markets-association-sifma' },
              { name: 'Visa Inc.', amount: '$3.5M', detail: '40+ filings', href: '/clients/visa-inc' },
              { name: 'Mastercard Inc.', amount: '$2.8M', detail: '35+ filings', href: '/clients/mastercard-inc' },
              { name: 'Coinbase Global', amount: '$2.1M', detail: '25+ filings — crypto\'s biggest lobbyist', href: '/clients/coinbase-global-inc' },
            ].map(item => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-gray-200 last:border-0">
                <div className="font-semibold text-gray-900 sm:w-72">{item.href ? <Link href={item.href} className="text-primary hover:underline">{item.name}</Link> : item.name}</div>
                <div className="text-blue-600 font-bold sm:w-24">{item.amount}</div>
                <div className="text-sm text-gray-600 flex-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Dodd-Frank Dismantling</h2>

        <p>
          The Dodd-Frank Wall Street Reform Act of 2010 was supposed to prevent another financial crisis. It created the
          Consumer Financial Protection Bureau, imposed stress tests on big banks, and restricted proprietary trading through
          the Volcker Rule. The financial industry hated every word of it.
        </p>

        <p>
          Within months of its passage, bank lobbyists were working to weaken it. By 2018, they had succeeded: the Economic
          Growth, Regulatory Relief, and Consumer Protection Act rolled back key provisions, raising the threshold for
          &quot;systemically important&quot; banks from $50 billion to $250 billion in assets. Translation: dozens of large banks
          were freed from the toughest oversight requirements.
        </p>

        <p>
          Silicon Valley Bank, which collapsed in March 2023, was one of the banks that benefited from that rollback.
          It had lobbied for the change. The cost of the SVB bailout to the FDIC insurance fund: <strong>$20 billion</strong>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What Wall Street Lobbies On</h2>

        <p>
          The issues that dominate financial sector lobbying filings tell a clear story — this is an industry fighting
          to minimize oversight at every turn:
        </p>

        <ul>
          <li><strong><Link href="/issues/BNK" className="text-primary hover:underline">BNK (Banking)</Link></strong> — Capital requirements, stress tests, lending rules</li>
          <li><strong><Link href="/issues/FIN" className="text-primary hover:underline">FIN (Financial Institutions)</Link></strong> — SEC regulations, investment rules, fiduciary standards</li>
          <li><strong><Link href="/issues/TAX" className="text-primary hover:underline">TAX (Taxation)</Link></strong> — Carried interest loophole, capital gains rates, corporate tax</li>
          <li><strong><Link href="/issues/BUD" className="text-primary hover:underline">BUD (Budget/Appropriations)</Link></strong> — Funding for regulatory agencies (less funding = less enforcement)</li>
          <li><strong><Link href="/issues/TEC" className="text-primary hover:underline">TEC (Technology)</Link></strong> — Fintech regulation, cryptocurrency rules, digital payments</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Crypto Gold Rush</h2>

        <p>
          No corner of the financial sector has ramped up lobbying faster than cryptocurrency. In 2020, crypto lobbying
          was a rounding error. By 2024, it had become one of the fastest-growing lobbying sectors in Washington.
        </p>

        <p>
          <Link href="/clients/coinbase-global-inc" className="text-primary hover:underline">Coinbase</Link>,{' '}
          the <Link href="/clients/crypto-council-for-innovation" className="text-primary hover:underline">Crypto Council for Innovation</Link>,{' '}
          and the <Link href="/clients/blockchain-association" className="text-primary hover:underline">Blockchain Association</Link>{' '}
          have collectively poured millions into lobbying for favorable regulatory frameworks. Their goal: ensure that
          the SEC doesn&apos;t classify most crypto tokens as securities, which would subject the entire industry to
          traditional financial regulation.
        </p>

        <p>
          The crypto lobby also made massive political donations in the 2024 election cycle, backing candidates who
          promised a friendlier regulatory environment. The result? A new Congress that&apos;s far more sympathetic to
          the industry&apos;s arguments than its predecessor.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door on Steroids</h2>

        <p>
          The financial sector doesn&apos;t just hire lobbyists — it hires the regulators who used to oversee it. Former
          SEC commissioners, Treasury Department officials, and Federal Reserve staffers cycle through the revolving door
          with predictable regularity.
        </p>

        <p>
          Our <Link href="/revolving-door" className="text-primary hover:underline">Revolving Door tracker</Link>{' '}
          shows hundreds of former financial regulators now working as lobbyists for the banks they once supervised.
          When a former SEC enforcement attorney lobbies against tighter enforcement, the conflict of interest is obvious.
          But it&apos;s perfectly legal.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Trade Groups: Wall Street&apos;s Hidden Army</h2>

        <p>
          Individual banks are only part of the picture. The financial sector&apos;s most effective lobbying is done through
          trade groups that allow the industry to speak with one voice while individual firms avoid public scrutiny.
        </p>

        <p>
          <Link href="/clients/securities-industry-and-financial-markets-association-sifma" className="text-primary hover:underline">SIFMA</Link>{' '}
          (the Securities Industry and Financial Markets Association) is Wall Street&apos;s main lobbying arm, spending millions
          annually on issues from capital requirements to market structure reform. The{' '}
          <Link href="/clients/investment-company-institute-ici" className="text-primary hover:underline">Investment Company Institute</Link>{' '}
          represents mutual funds and ETFs. The{' '}
          <Link href="/clients/financial-services-forum" className="text-primary hover:underline">Financial Services Forum</Link>{' '}
          represents the eight largest US financial institutions.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Math of Deregulation</h2>

        <p>
          Here&apos;s why financial lobbying pays off so spectacularly: a single regulatory change can be worth billions.
          When banks successfully lobbied to weaken the Volcker Rule, it freed up tens of billions in proprietary trading
          capacity. When they pushed for looser capital requirements, it meant billions more available for lending — and
          executive bonuses.
        </p>

        <p>
          The industry spends roughly $300-400 million per year on lobbying. The value of the deregulation it achieves?
          Orders of magnitude larger. As we documented in our{' '}
          <Link href="/investigations/the-22000-percent-roi" className="text-primary hover:underline">22,000% ROI investigation</Link>,
          lobbying may be the single highest-return investment in corporate America.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What This Means</h2>

        <p>
          The financial crisis of 2008 was supposed to be a turning point. Regulation would be tightened. Banks would be
          held accountable. Instead, the industry spent billions on lobbying and got most of what it wanted: weaker rules,
          less oversight, and a regulatory environment that prioritizes industry comfort over public protection.
        </p>

        <p>
          The Wall Street–Washington pipeline isn&apos;t a conspiracy. It&apos;s a system — one where the industry writes
          the rules, hires the regulators, and funds the campaigns. Until that system changes, the next financial crisis
          isn&apos;t a question of if, but when.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search financial sector lobbying clients and follow the money.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/issues/BNK" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Banking Issues →
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
          'OpenLobby analysis of financial sector lobbying registrations',
          'Federal Reserve, SEC, and FDIC public records',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
          </Link>
          <Link href="/investigations/crypto-lobbying-explosion" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">₿ The Crypto Lobbying Explosion</div>
          </Link>
          <Link href="/investigations/revolving-door-exposed" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 The Revolving Door Exposed</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
