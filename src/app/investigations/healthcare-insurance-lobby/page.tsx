import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'

export const metadata: Metadata = {
  title: "The Health Insurance Lobby: Fighting Medicare Expansion and Drug Pricing Reform",
  description: 'UnitedHealth, Cigna, Elevance, and AHIP have spent tens of millions lobbying against Medicare expansion and drug pricing reform. Inside the health insurance lobby.',
}

export default function HealthcareInsuranceLobbyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "The Health Insurance Lobby: Fighting Medicare Expansion and Drug Pricing Reform", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "How health insurance companies lobby to protect their profits from Medicare expansion and drug pricing reform.", mainEntityOfPage: "https://www.openlobby.us/investigations/healthcare-insurance-lobby" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'The Health Insurance Lobby' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Healthcare</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The Health Insurance Lobby:{' '}
        <span className="text-emerald-600">Tens of Millions</span>{' '}
        to Block Reform
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/healthcare-insurance-lobby" title="The Health Insurance Lobby" />

      <QuickFacts facts={[
        { label: 'Health insurer lobbying total', value: '$45M+' },
        { label: 'UnitedHealth Group', value: '$4.7M' },
        { label: 'AHIP (trade group)', value: '$8M+' },
        { label: 'Health issues lobbying (all)', value: '$2.7B' },
      ]} />

      <div className="my-8 bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-emerald-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          America&apos;s health insurance giants — UnitedHealth Group, Cigna, Elevance Health, Centene, and their trade group
          AHIP — have spent over <strong>$45 million</strong> lobbying the federal government. Their top priorities: protecting
          Medicare Advantage payment rates, blocking public option proposals, and shaping drug pricing reform to benefit insurers
          rather than patients. In an industry that made <strong>$37 billion</strong> in profit in 2023, lobbying is a rounding error
          with an extraordinary return.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Insurers: Profit Machines with a Lobbying Habit</h2>

        <p>
          UnitedHealth Group is the largest health company in America by revenue — over <strong>$370 billion</strong> in 2023.
          It insures more Americans than any other company, processes more claims, and employs more people. It also runs
          one of the most effective lobbying operations in Washington.
        </p>

        <p>
          But UnitedHealth is just the biggest player in an industry that lobbies collectively and aggressively. Every major
          health insurer maintains a permanent DC lobbying presence, and their trade group AHIP (America&apos;s Health Insurance
          Plans) coordinates industry-wide strategy.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Health Insurance Lobbying Clients</h3>
          <div className="space-y-3">
            {[
              { name: 'AHIP (America\'s Health Insurance Plans)', amount: '$8.2M', detail: '80+ filings — the industry\'s main trade group', href: '/clients/ahip' },
              { name: 'UnitedHealth Group', amount: '$4.68M', detail: '52 filings — largest US health insurer', href: '/clients/unitedhealth-group' },
              { name: 'Cigna Corporation', amount: '$4.66M', detail: '52 filings across registrations', href: '/clients/cigna-corporation' },
              { name: 'Blue Cross Blue Shield Association', amount: '$2.93M', detail: '27 filings — 35 BCBS companies', href: '/clients/blue-cross-blue-shield-association' },
              { name: 'Elevance Health (fka Anthem)', amount: '$2.28M', detail: '27 filings', href: '/clients/elevance-health-inc' },
              { name: 'Centene Corporation', amount: '$2.1M', detail: '25+ filings — largest Medicaid insurer', href: '/clients/centene-corporation' },
              { name: 'Kaiser Permanente', amount: '$1.8M', detail: '20+ filings — integrated health system', href: '/clients/kaiser-permanente' },
              { name: 'Humana', amount: '$2.0M', detail: '25 filings — Medicare Advantage focus', href: '/clients/humana' },
              { name: 'Molina Healthcare', amount: '$1.4M', detail: '18+ filings — Medicaid managed care', href: '/clients/molina-healthcare-inc' },
              { name: 'Aetna Inc.', amount: '$1.2M', detail: '15+ filings (now part of CVS Health)', href: '/clients/aetna-inc' },
            ].map(item => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-gray-200 last:border-0">
                <div className="font-semibold text-gray-900 sm:w-72">{item.href ? <Link href={item.href} className="text-primary hover:underline">{item.name}</Link> : item.name}</div>
                <div className="text-emerald-600 font-bold sm:w-24">{item.amount}</div>
                <div className="text-sm text-gray-600 flex-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Medicare Advantage: The $400 Billion Cash Cow</h2>

        <p>
          No issue matters more to health insurers than Medicare Advantage — the privatized version of Medicare that now
          covers over 30 million seniors and generates <strong>$400 billion</strong> in annual government payments to
          insurance companies.
        </p>

        <p>
          The insurance lobby fights ferociously to protect Medicare Advantage payment rates. When CMS proposed modest
          rate adjustments, AHIP mobilized an army of lobbyists and a grassroots campaign featuring seniors warning that
          their benefits would be cut. The strategy works every time: Congress routinely overrides CMS rate reductions
          under pressure from the insurer lobby.
        </p>

        <p>
          The irony: Medicare Advantage costs the government <strong>6% more per beneficiary</strong> than traditional
          Medicare, according to the Medicare Payment Advisory Commission. The insurance industry is being overpaid — and
          lobbying to keep it that way.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What Insurers Lobby On</h2>

        <ul>
          <li><strong><Link href="/issues/HCR" className="text-primary hover:underline">HCR (Health Issues)</Link></strong> — ACA marketplace rules, public option proposals, coverage mandates</li>
          <li><strong><Link href="/issues/MMM" className="text-primary hover:underline">MMM (Medicare/Medicaid)</Link></strong> — Medicare Advantage rates, Medicaid managed care, dual-eligible programs</li>
          <li><strong><Link href="/issues/INS" className="text-primary hover:underline">INS (Insurance)</Link></strong> — Prior authorization rules, network adequacy, claims processing</li>
          <li><strong><Link href="/issues/BUD" className="text-primary hover:underline">BUD (Budget/Appropriations)</Link></strong> — Healthcare spending levels, program funding</li>
          <li><strong><Link href="/issues/TAX" className="text-primary hover:underline">TAX (Taxation)</Link></strong> — Health insurance tax, employer mandate, premium subsidies</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Killing the Public Option</h2>

        <p>
          Every Democratic president since Bill Clinton has proposed some version of a public health insurance option —
          a government-run plan that would compete with private insurers on the ACA marketplace. Every time, the insurance
          lobby has killed it.
        </p>

        <p>
          The public option is an existential threat to the insurance industry. If a government plan could offer lower
          premiums (by cutting out insurance company profits and administrative overhead), millions of customers could
          switch — threatening the industry&apos;s entire business model.
        </p>

        <p>
          AHIP&apos;s lobbying against the public option is well-documented in our data. The trade group consistently
          reports lobbying on &quot;health reform,&quot; &quot;government-run health insurance,&quot; and &quot;competition
          in health insurance markets&quot; — industry code for fighting the public option.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Drug Pricing: The Insurance Angle</h2>

        <p>
          Health insurers and drug companies are natural adversaries — insurers want lower drug prices, drug makers want
          higher ones. But the relationship is more complicated than it appears. Insurers actually benefit from high drug
          prices in some ways: pharmacy benefit managers (PBMs), many owned by insurance companies, negotiate rebates
          from drug makers that they don&apos;t always pass through to patients.
        </p>

        <p>
          <Link href="/clients/unitedhealth-group" className="text-primary hover:underline">UnitedHealth Group</Link>{' '}
          owns Optum Rx, one of the three largest PBMs. <Link href="/clients/cigna-corporation" className="text-primary hover:underline">Cigna</Link>{' '}
          owns Express Scripts, another giant PBM. These vertically integrated companies profit from drug pricing complexity —
          which is why their lobbying on drug pricing reform focuses on protecting the PBM model rather than truly lowering
          costs for patients.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The UnitedHealth Empire</h2>

        <p>
          <Link href="/clients/unitedhealth-group" className="text-primary hover:underline">UnitedHealth Group</Link>{' '}
          deserves special attention because of its sheer scale. The company insures 50+ million Americans, owns the
          largest PBM, runs one of the biggest healthcare analytics firms, and employs 70,000+ physicians through Optum Health.
        </p>

        <p>
          With <strong>$4.68 million</strong> in lobbying across 52 filings, UnitedHealth lobbies on everything from
          Medicare Advantage rates to data privacy rules to telehealth regulations. The company&apos;s lobbying priorities
          mirror its business interests: protect Medicare Advantage revenue, preserve the PBM model, and prevent any
          regulation that could limit its vertical integration.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What This Means</h2>

        <p>
          Americans pay more for health insurance than any other developed country — and get worse outcomes. The industry
          that profits from this system spends tens of millions lobbying to preserve it. Every public option proposal killed,
          every Medicare expansion blocked, every PBM reform watered down represents billions in preserved profits for insurers.
        </p>

        <p>
          The health insurance lobby isn&apos;t spending $45 million because it&apos;s ineffective. It&apos;s spending
          $45 million because the return — measured in hundreds of billions of preserved revenue — makes it one of the
          best investments in corporate America.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search health insurance lobbying clients and follow the money.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/issues/HCR" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Health Issues →
            </Link>
            <Link href="/investigations/big-pharma-lobbying" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Big Pharma Investigation →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby analysis of health insurance lobbying registrations',
          'CMS Medicare Advantage payment data',
          'MedPAC reports on Medicare Advantage spending',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/big-pharma-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💊 Big Pharma&apos;s $452M Machine</div>
          </Link>
          <Link href="/investigations/healthcare-3-billion-bet" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏥 Healthcare&apos;s $3 Billion Bet</div>
          </Link>
          <Link href="/investigations/the-revolving-door-premium" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 The 369% Revolving Door Premium</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
