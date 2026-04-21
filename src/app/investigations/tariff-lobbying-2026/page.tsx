import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: "Tariff Lobbying 2026: Who's Fighting Trump's Trade War | OpenLobby",
  description: 'From copper fabricators to automakers, industries are spending millions lobbying for tariff exemptions. We track who\'s spending what to survive Trump\'s trade war.',
}

export default function TariffLobbying2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Tariff Lobbying 2026: Who's Fighting Trump's Trade War", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-04-17", description: "Industries are spending millions lobbying for tariff exemptions as Trump's trade war escalates.", mainEntityOfPage: "https://www.openlobby.us/investigations/tariff-lobbying-2026" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Tariff Lobbying 2026' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">Trade</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Tariff Lobbying 2026:{' '}
        <span className="text-orange-700">Who&apos;s Fighting</span>{' '}
        Trump&apos;s Trade War
      </h1>

      <p className="text-gray-500 mb-4">Published April 17, 2026 · Updated April 21, 2026 · 9 min read</p>

      <div className="my-4 bg-amber-50 border border-amber-300 rounded-xl p-4">
        <p className="text-sm font-bold text-amber-800">🔥 April 21, 2026 Update: $166 Billion Refund Sparks New Lobbying Wave</p>
        <p className="text-sm text-amber-700 mt-1">
          The Trump administration announced steps to refund <strong>$166 billion in tariffs</strong> collected under the paused
          &ldquo;reciprocal tariffs&rdquo; program. The refund process is triggering a new round of lobbying as companies
          fight to be included. See: <Link href="/investigations/q1-2026-lobbying-record" className="underline font-semibold">Q1 2026 Lobbying Record →</Link>
        </p>
      </div>

      <ShareButtons url="https://www.openlobby.us/investigations/tariff-lobbying-2026" title="Tariff Lobbying 2026: Who's Fighting Trump's Trade War" />

      <div className="my-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-orange-800 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Trump&apos;s sweeping tariff regime — from the 10% baseline &ldquo;import surcharge&rdquo; to targeted
          Section 232 duties on metals — has triggered a <strong>lobbying arms race</strong>. Industries that never
          had a Washington presence are hiring lobbyists for the first time. Established players are doubling
          their spending. The goal: exemptions, refunds, and carve-outs that can mean billions in savings.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Tariff Landscape in April 2026</h2>

        <p>
          The scope of Trump&apos;s second-term tariff regime is unprecedented in modern history. Since February 2026,
          the administration has imposed:
        </p>

        <ul>
          <li>A <strong>10% baseline import surcharge</strong> on virtually all imports (February 20, 2026)</li>
          <li><strong>Section 232 tariffs</strong> on steel, aluminum, copper, and other metals</li>
          <li><strong>Country-specific tariffs</strong> on Canada, Mexico, China, and the EU</li>
          <li>A complex system of exemptions, refunds, and &ldquo;tariff stacking&rdquo; that has created massive uncertainty</li>
        </ul>

        <p>
          The result: an enormous incentive for every affected industry to hire lobbyists. When a single tariff
          exemption can save a company millions (or billions), the ROI on lobbying becomes astronomical.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Who&apos;s Lobbying Hardest</h2>

        <p>
          The tariff lobbying surge is coming from every direction — but some industries are fighting harder than others:
        </p>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {[
              { industry: 'Automotive', detail: 'Big Three lobbying for USMCA exemptions; tariffs threaten cross-border supply chains', urgency: 'Critical' },
              { industry: 'Copper Fabricators', detail: 'New coalition formed April 2026 to lobby on Section 232 copper tariffs', urgency: 'New entrant' },
              { industry: 'Agriculture', detail: 'Retaliatory tariffs from China/EU hitting exports; farm lobby in full mobilization', urgency: 'High' },
              { industry: 'Retail & Consumer Goods', detail: 'Import surcharge hitting margins; NRF and trade associations lobbying for exemptions', urgency: 'High' },
              { industry: 'Electronics & Tech', detail: 'Consumer electronics, semiconductors, and component imports affected', urgency: 'High' },
              { industry: 'Steel & Aluminum Users', detail: 'Manufacturers who use imported metals pushing for downstream exemptions', urgency: 'Ongoing' },
            ].map(c => (
              <div key={c.industry} className="px-6 py-4 border-b border-gray-100 last:border-0">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-900">{c.industry}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${c.urgency === 'Critical' ? 'bg-red-50 text-red-700' : c.urgency === 'New entrant' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>{c.urgency}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Exemption Economy</h2>

        <p>
          Perhaps the most consequential aspect of the tariff regime is the exemption and refund process. POLITICO
          reported on April 13 that Trump&apos;s &ldquo;refund rollout&rdquo; is leaving many companies out — creating
          winners and losers based on who has the best lobbyists rather than the best business case.
        </p>

        <p>
          This is the tariff lobbying playbook: companies that can&apos;t get an across-the-board exemption for their
          industry lobby for product-specific carve-outs. Companies that can&apos;t get product carve-outs lobby for
          refund eligibility. Companies that can&apos;t get refunds lobby for delayed implementation dates. Every layer
          of the tariff regime creates a new lobbying opportunity.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>New Entrants: First-Time Lobbyers</h2>

        <p>
          One of the most striking effects of the tariff regime is how many companies and industries are lobbying
          Washington for the first time. The copper fabricators&apos; new coalition — formed just this month — is
          a perfect example. These are companies that never needed a Washington presence before. Now tariffs are
          an existential threat, and hiring a lobbyist is a survival strategy.
        </p>

        <p>
          Our{' '}
          <Link href="/investigations/first-time-filers-2024" className="text-primary hover:underline">first-time filers analysis</Link>{' '}
          found nearly 7,000 organizations that filed lobbying disclosures for the first time in 2025. Trade
          issues were a major driver — and 2026 is on pace to break that record as the tariff regime expands.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Legal Front</h2>

        <p>
          Lobbying isn&apos;t the only tool companies are using. As of April 10, 2026, the Court of International
          Trade heard oral arguments in <em>Oregon v. Trump</em> and <em>Burlap &amp; Barrel, Inc.</em> — cases
          challenging the president&apos;s authority to impose tariffs under IEEPA (the International Emergency
          Economic Powers Act). If the courts strike down some tariffs, the lobbying landscape shifts dramatically.
        </p>

        <p>
          Smart companies are doing both: lobbying for exemptions while simultaneously funding legal challenges.
          It&apos;s a belt-and-suspenders approach to a tariff regime that has created more uncertainty than any
          trade policy in decades.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What the Data Will Show</h2>

        <p>
          Our{' '}
          <Link href="/investigations/tariff-lobbying-surge" className="text-primary hover:underline">2025 tariff lobbying analysis</Link>{' '}
          already showed trade-related lobbying surging as tariffs returned. The Q1 2026 filings (due April 20) will
          capture the full impact of the February import surcharge and the ongoing exemption battles.
        </p>

        <p>
          We expect to see: massive increases in filings listing TRD (Trade) as a primary issue code, new lobbying
          registrations from industries that never lobbied before, and a spike in overall spending as companies
          calculate that a few hundred thousand in lobbying fees is nothing compared to millions in tariff costs.
        </p>

        <p>
          In Trump&apos;s trade war, the real winners aren&apos;t the industries that get protected — they&apos;re
          the K Street firms collecting fees from everyone scrambling for an exemption.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">See which industries are lobbying on trade and tariff issues.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/investigations/tariff-lobbying-surge" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              2025 Tariff Lobbying Surge →
            </Link>
            <Link href="/issues/TRD" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Trade Issue Data →
            </Link>
            <Link href="/investigations/first-time-filers-2024" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              First-Time Filers →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'Tax Foundation: Trump Tariffs & Trade War Tracker (April 2026)',
          'POLITICO: Tariff refund rollout (April 13, 2026)',
          'POLITICO: Copper fabricators coalition (April 13, 2026)',
          'Court of International Trade: Oregon v. Trump oral arguments (April 10, 2026)',
          'USTR: Presidential Tariff Actions (2026)',
          'OpenLobby analysis of trade lobbying filings',
        ]}
        lastUpdated="April 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/tariff-lobbying-surge" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📦 The 2025 Tariff Panic</div>
          </Link>
          <Link href="/investigations/first-time-filers-2024" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🆕 First-Time Filers</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
