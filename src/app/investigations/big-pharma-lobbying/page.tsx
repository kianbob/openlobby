import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: "Big Pharma's Lobbying Machine: $452 Million and Counting",
  description: 'The pharmaceutical and healthcare industry has spent over $452 million lobbying Congress. Here are the companies, the money, and the issues they're fighting over.',
}

export default function BigPharmaLobbyingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: "Big Pharma's Lobbying Machine" },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Pharma</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Big Pharma&apos;s Lobbying Machine:{' '}
        <span className="text-green-600">$452 Million</span>{' '}
        and Counting
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/big-pharma-lobbying" title="Big Pharma's $452M Lobbying Machine" />

      <div className="my-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-green-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Pharmaceutical and healthcare companies have spent over <strong>$452 million</strong> lobbying the federal government 
          across more than 350 separate lobbying registrations in our dataset. The biggest trade group — the Pharmaceutical Research 
          &amp; Manufacturers of America (PhRMA) — alone accounts for over <strong>$17 million</strong> across multiple filings. 
          Meanwhile, drug prices keep rising and Congress keeps debating — but never quite passing — meaningful reform.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Most Powerful Lobby in Washington</h2>

        <p>
          No industry spends more on lobbying than healthcare and pharmaceuticals. It&apos;s not even close. 
          While tech companies grab headlines and defense contractors dominate government contracts, 
          the pharma lobby has quietly built the most formidable influence operation in American politics.
        </p>

        <p>
          Our analysis of Senate lobbying disclosure filings reveals a staggering picture: across all pharmaceutical 
          companies, health insurers, hospital associations, and related trade groups, the industry has reported 
          over <strong>$452 million</strong> in lobbying expenditures — spanning 350+ separate client registrations 
          in the federal lobbying database.
        </p>

        <p>
          And that number almost certainly understates reality. It doesn&apos;t include the armies of consultants, 
          grassroots campaigns, and &quot;issue advocacy&quot; spending that falls outside lobbying disclosure requirements.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Follow the Money: Top Pharma Spenders</h2>

        <p>
          The single biggest spender is the industry&apos;s main trade group, PhRMA — which appears under multiple 
          registration names as it has reorganized over the years:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Pharmaceutical &amp; Healthcare Lobbying Clients</h3>
          <div className="space-y-3">
            {[
              { name: 'PhRMA (all registrations combined)', amount: '$17.3M', detail: '109 filings across multiple registrations' },
              { name: 'Alliance for Biopharmaceutical Competitiveness', amount: '$4.97M', detail: '24 filings' },
              { name: 'Pacira Pharmaceuticals', amount: '$3.08M', detail: '28 filings — specialty pain medications' },
              { name: 'Senior Care Pharmacy Coalition', amount: '$5.05M', detail: '53 filings — nursing home pharmacy interests' },
              { name: 'Blue Cross Blue Shield Association', amount: '$2.93M', detail: '27 filings — the largest health insurer network' },
              { name: 'Cigna Corporation', amount: '$4.66M', detail: '52 filings across registrations' },
              { name: 'UnitedHealth Group', amount: '$4.68M', detail: '52 filings — the largest health company by revenue' },
              { name: 'Gilead Sciences', amount: '$2.33M', detail: '31 filings — HIV and hepatitis drug maker' },
              { name: 'Johnson & Johnson', amount: '$2.29M', detail: '29 filings' },
              { name: 'Amgen Inc.', amount: '$2.14M', detail: '29 filings — biotech giant' },
              { name: 'Humana', amount: '$2.0M', detail: '25 filings — Medicare Advantage insurer' },
              { name: 'Elevance Health (fka Anthem)', amount: '$2.28M', detail: '27 filings' },
            ].map(item => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-gray-200 last:border-0">
                <div className="font-semibold text-gray-900 sm:w-72">{item.name}</div>
                <div className="text-green-600 font-bold sm:w-24">{item.amount}</div>
                <div className="text-sm text-gray-600 flex-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What Are They Lobbying On?</h2>

        <p>
          The issues pharma lobbies on reveal their priorities — and their fears. The most common issue codes 
          in pharmaceutical lobbying filings include:
        </p>

        <ul>
          <li><strong>HCR (Health Issues)</strong> — The catch-all for drug pricing, Medicare Part D, and ACA provisions</li>
          <li><strong>MMM (Medicare/Medicaid)</strong> — Reimbursement rates that directly affect pharma revenue</li>
          <li><strong>TAX (Taxation)</strong> — Corporate tax provisions, R&amp;D credits, and international tax structures</li>
          <li><strong>TRD (Trade)</strong> — Drug importation, international pricing, and patent protections</li>
          <li><strong>BUD (Budget/Appropriations)</strong> — NIH funding, FDA budget, and healthcare spending levels</li>
        </ul>

        <p>
          Translation: the pharma industry is spending hundreds of millions to influence every stage of the drug lifecycle — 
          from research funding (NIH budget) to approval (FDA), to pricing (Medicare/Medicaid reimbursement), 
          to market protection (trade and patent rules).
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Health Insurer Angle</h2>

        <p>
          It&apos;s not just drug makers. Health insurers are equally invested in the lobbying game. 
          UnitedHealth Group, Cigna, Blue Cross Blue Shield, Humana, and Elevance Health (formerly Anthem) 
          collectively account for over <strong>$16 million</strong> in lobbying expenditures in our dataset.
        </p>

        <p>
          Insurers lobby on different issues than drug makers — they focus on Medicare Advantage payment rates, 
          ACA marketplace rules, and prior authorization requirements. But the effect is the same: 
          an industry spending millions to shape the rules that determine its profits.
        </p>

        <p>
          The irony is that pharma and insurance companies are often on <em>opposite sides</em> of the same issues. 
          Drug makers want higher prices; insurers want lower ones. Both spend lavishly to influence Congress. 
          The only guaranteed winner? The lobbyists themselves.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Drug Pricing Stalemate</h2>

        <p>
          For decades, Congress has debated allowing Medicare to negotiate drug prices. For decades, 
          the pharma lobby has fought it tooth and nail. The Inflation Reduction Act of 2022 finally 
          allowed Medicare to negotiate prices on a small number of drugs — but the industry immediately 
          sued to block it, and is lobbying aggressively to limit its scope.
        </p>

        <p>
          When you understand the numbers, the stalemate makes sense. The pharmaceutical industry doesn&apos;t 
          spend $452 million on lobbying because it&apos;s ineffective. It spends that money because 
          the return on investment is extraordinary. Every year that drug pricing reform is delayed, 
          blocked, or watered down represents billions in preserved revenue.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door Feeds the Machine</h2>

        <p>
          Many of the lobbyists working for pharmaceutical clients are former congressional staffers 
          who once worked on health policy. Our{' '}
          <Link href="/revolving-door" className="text-primary hover:underline">Revolving Door tracker</Link>{' '}
          shows dozens of former health committee staffers, CMS officials, and FDA advisors now registered 
          as lobbyists for pharma companies.
        </p>

        <p>
          This isn&apos;t coincidence — it&apos;s strategy. A former Senate Health Committee staffer knows 
          exactly which arguments resonate with their old colleagues. A former CMS official understands 
          the regulatory levers that determine drug reimbursement rates. That institutional knowledge 
          is worth millions to an industry fighting to protect trillions in revenue.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What This Means</h2>

        <p>
          The pharmaceutical lobby is not a conspiracy. It&apos;s an industry exercising its legal right 
          to petition the government. But the scale of spending — and its effectiveness at blocking reform — 
          raises fundamental questions about whose interests Congress actually serves.
        </p>

        <p>
          When Americans pay the highest drug prices in the developed world, and the industry fighting 
          to keep it that way spends more on lobbying than any other sector, the connection is hard to ignore.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search pharmaceutical lobbying clients and see exactly what they&apos;re spending.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/issues" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Issues Lobbied →
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
          'OpenLobby analysis of 350+ pharma/healthcare lobbying registrations',
        ]}
        lastUpdated="February 2026"
      />
    </div>
  )
}
