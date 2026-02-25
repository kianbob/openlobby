import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'

export const metadata: Metadata = {
  title: "Big Oil's Climate Lobby: How the Energy Sector Spends to Shape Climate Policy",
  description: 'ExxonMobil, Chevron, BP, and the American Petroleum Institute have spent hundreds of millions lobbying against climate regulation. The data tells the story.',
}

export default function BigOilClimateLobbyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Big Oil's Climate Lobby: How the Energy Sector Spends to Shape Climate Policy", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "Energy sector lobbying against climate regulation — by the numbers.", mainEntityOfPage: "https://www.openlobby.us/investigations/big-oil-climate-lobby" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: "Big Oil's Climate Lobby" },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Energy</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Big Oil&apos;s Climate Lobby:{' '}
        <span className="text-orange-600">Hundreds of Millions</span>{' '}
        to Delay Action
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 12 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/big-oil-climate-lobby" title="Big Oil's Climate Lobby" />

      <QuickFacts facts={[
        { label: 'Energy/fuel lobbying total', value: '$890M+' },
        { label: 'API lobbying (all filings)', value: '$12M+' },
        { label: 'Exxon Mobil lobbying', value: '$8.5M+' },
        { label: 'Environment issue lobbying', value: '$1.4B+' },
      ]} />

      <div className="my-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-orange-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          The energy sector — led by oil majors, gas companies, and the American Petroleum Institute — has spent over{' '}
          <strong>$890 million</strong> lobbying the federal government. Their top targets: the EPA, the Clean Air Act,
          carbon pricing proposals, and renewable energy mandates. While the planet warms, the industry that profits from
          fossil fuels is spending hundreds of millions to ensure the policy response stays weak.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Oil Majors: A Lobbying Juggernaut</h2>

        <p>
          For decades, the fossil fuel industry has been one of Washington&apos;s most powerful lobbying forces.
          Our analysis of Senate lobbying disclosures reveals an industry that treats climate policy as an existential
          threat — and spends accordingly.
        </p>

        <p>
          The numbers are staggering. Across energy companies, petrochemical firms, refiners, and industry trade groups,
          the sector has reported over <strong>$890 million</strong> in lobbying expenditures. And the spending has
          accelerated as climate legislation has become more serious.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Energy Sector Lobbying Clients</h3>
          <div className="space-y-3">
            {[
              { name: 'American Petroleum Institute (API)', amount: '$12.4M', detail: '120+ filings — the oil industry\'s main lobby', href: '/clients/american-petroleum-institute' },
              { name: 'ExxonMobil Corporation', amount: '$8.5M', detail: '90+ filings across registrations', href: '/clients/exxon-mobil-corporation' },
              { name: 'Chevron Corp.', amount: '$6.2M', detail: '65+ filings', href: '/clients/chevron-corp' },
              { name: 'BP America Inc.', amount: '$4.8M', detail: '50+ filings — despite "Beyond Petroleum" rebrand', href: '/clients/bp-america-inc' },
              { name: 'ConocoPhillips', amount: '$4.1M', detail: '45+ filings', href: '/clients/conocophillips' },
              { name: 'Koch Government Affairs', amount: '$7.8M', detail: '80+ filings — Koch Industries\' political arm', href: '/clients/koch-government-affairs-llc' },
              { name: 'Marathon Petroleum Corporation', amount: '$3.6M', detail: '40+ filings — largest US refiner', href: '/clients/marathon-petroleum-corporation' },
              { name: 'Valero Energy Corporation', amount: '$2.9M', detail: '35+ filings', href: '/clients/valero-energy-corporation' },
              { name: 'Chevron Phillips Chemical', amount: '$2.1M', detail: '25+ filings — petrochemicals', href: '/clients/chevron-phillips-chemical-company-lp' },
            ].map(item => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-gray-200 last:border-0">
                <div className="font-semibold text-gray-900 sm:w-72">{item.href ? <Link href={item.href} className="text-primary hover:underline">{item.name}</Link> : item.name}</div>
                <div className="text-orange-600 font-bold sm:w-24">{item.amount}</div>
                <div className="text-sm text-gray-600 flex-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Issues: A Roadmap to Obstruction</h2>

        <p>
          What the energy sector lobbies on reveals a systematic effort to delay, weaken, or block climate action
          at every level:
        </p>

        <ul>
          <li><strong><Link href="/issues/ENG" className="text-primary hover:underline">ENG (Energy/Nuclear)</Link></strong> — Drilling permits, pipeline approvals, LNG exports, energy policy</li>
          <li><strong><Link href="/issues/ENV" className="text-primary hover:underline">ENV (Environment/Superfund)</Link></strong> — EPA regulations, Clean Air Act, emissions standards</li>
          <li><strong><Link href="/issues/FUE" className="text-primary hover:underline">FUE (Fuel/Gas/Oil)</Link></strong> — Refinery rules, fuel standards, methane regulations</li>
          <li><strong><Link href="/issues/CAW" className="text-primary hover:underline">CAW (Clean Air &amp; Water)</Link></strong> — Clean Air Act enforcement, water discharge rules</li>
          <li><strong><Link href="/issues/TAX" className="text-primary hover:underline">TAX (Taxation)</Link></strong> — Oil depletion allowances, fossil fuel subsidies, carbon tax opposition</li>
        </ul>

        <p>
          Notice what&apos;s missing from the industry&apos;s lobbying agenda: support for renewable energy, carbon
          capture mandates, or any meaningful climate action. The lobbying record tells a story of an industry that
          talks about transition while spending millions to prevent it.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The API: Big Oil&apos;s $12 Million Voice</h2>

        <p>
          The <Link href="/clients/american-petroleum-institute" className="text-primary hover:underline">American Petroleum Institute</Link>{' '}
          is the oil industry&apos;s most powerful trade group and its loudest voice in Washington. With over{' '}
          <strong>$12 million</strong> in lobbying expenditures across 120+ filings, API has fought against virtually
          every major climate proposal of the past two decades.
        </p>

        <p>
          API lobbied against the Clean Power Plan. It lobbied against methane regulations. It lobbied against the
          Paris Climate Agreement. And when the Inflation Reduction Act passed with its clean energy tax credits,
          API immediately began lobbying to limit implementation and redirect funds toward fossil fuel projects.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Koch Network: Dark Money Meets K Street</h2>

        <p>
          <Link href="/clients/koch-government-affairs-llc" className="text-primary hover:underline">Koch Government Affairs</Link>{' '}
          (formerly Koch Companies Public Sector) represents the lobbying arm of Koch Industries — the privately held
          conglomerate with massive interests in fossil fuels, petrochemicals, and manufacturing. With over{' '}
          <strong>$7.8 million</strong> in lobbying across 80+ filings, Koch is one of the most aggressive opponents
          of climate regulation in the dataset.
        </p>

        <p>
          But Koch&apos;s registered lobbying is just the tip of the iceberg. The Koch network funds dozens of think
          tanks, advocacy groups, and political organizations that amplify anti-regulation messaging. The lobbying
          filings only capture a fraction of the Koch empire&apos;s total influence spending.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>ExxonMobil: The Company That Knew</h2>

        <p>
          <Link href="/clients/exxon-mobil-corporation" className="text-primary hover:underline">ExxonMobil</Link>{' '}
          holds a unique place in the climate lobbying story. Internal documents revealed that Exxon&apos;s own
          scientists accurately predicted global warming as early as the 1970s — while the company publicly funded
          climate denial for decades.
        </p>

        <p>
          Today, ExxonMobil has shifted its public messaging toward acknowledging climate change, but its lobbying
          record tells a different story. With over <strong>$8.5 million</strong> in lobbying expenditures, Exxon
          continues to lobby against emissions regulations, carbon pricing, and renewable energy mandates — the very
          policies scientists say are needed to address the crisis Exxon&apos;s own researchers predicted.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The ROI of Obstruction</h2>

        <p>
          Why does the energy sector spend so aggressively on lobbying? Because the economics of delay are extraordinary.
          Every year that carbon pricing is blocked represents tens of billions in avoided costs for fossil fuel companies.
          Every weakened EPA regulation means billions more in profits from operations that would otherwise require
          expensive pollution controls.
        </p>

        <p>
          The industry spends roughly $100-150 million per year on lobbying. The value of delayed climate action?
          Incalculable — both for the industry&apos;s bottom line and for the planet&apos;s future.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What This Means</h2>

        <p>
          The climate crisis is the defining challenge of our time. And the industry most responsible for causing it
          is spending hundreds of millions to ensure the policy response remains inadequate. That&apos;s not a conspiracy
          theory — it&apos;s documented in thousands of lobbying filings available for anyone to read.
        </p>

        <p>
          The data doesn&apos;t lie. While oil companies run Super Bowl ads about clean energy, their lobbyists are
          on Capitol Hill fighting to preserve fossil fuel subsidies and weaken environmental regulations. The gap between
          the industry&apos;s PR and its lobbying record may be the most expensive form of greenwashing in history.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search energy sector lobbying clients and see the spending.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/issues/ENG" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Energy Issues →
            </Link>
            <Link href="/issues/ENV" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Environment Issues →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby analysis of energy sector lobbying registrations',
          'EPA regulatory filings and public records',
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
          <Link href="/investigations/doge-vs-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏛️ DOGE vs. The Lobbying Machine</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
