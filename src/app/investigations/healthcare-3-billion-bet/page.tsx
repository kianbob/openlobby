import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'

export const metadata: Metadata = {
  title: "The Healthcare Lobby's $3 Billion Bet",
  description: 'Healthcare is the #1 lobbied issue in America. $2.3B on healthcare reform, $1.2B on Medicare/Medicaid, $227M on pharmacy. Inside medicine\'s war for Washington.',
  openGraph: {
    title: "The Healthcare Lobby's $3 Billion Bet",
    description: 'Inside medicine\'s war for Washington — $3.7 billion spent lobbying on healthcare issues since 2018.',
  },
}

export default function Healthcare3BillionBetPage() {
  const healthcareIssues = [
    { code: 'HCR', name: 'Health Issues (General)', income: 2300765989, filings: 86616, clients: 7329 },
    { code: 'MMM', name: 'Medicare/Medicaid', income: 1170214506, filings: 41218, clients: 2964 },
    { code: 'PHA', name: 'Pharmacy/Drug Industry', income: 227124989, filings: 7855, clients: 774 },
  ]

  const totalHealthcare = healthcareIssues.reduce((s, i) => s + i.income, 0)
  const totalFilings = healthcareIssues.reduce((s, i) => s + i.filings, 0)

  const fmt = (n: number) => {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
    return `$${(n / 1e3).toFixed(0)}K`
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: "Healthcare's $3 Billion Bet" },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Healthcare</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The Healthcare Lobby&apos;s{' '}
        <span className="text-emerald-600">$3 Billion Bet</span>:{' '}
        Inside Medicine&apos;s War for Washington
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 11 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/healthcare-3-billion-bet" title="The Healthcare Lobby's $3 Billion Bet" />

      <QuickFacts facts={[
        { label: 'Total healthcare lobbying', value: `${fmt(totalHealthcare)}` },
        { label: 'Lobbying filings', value: totalFilings.toLocaleString() },
        { label: 'Unique clients', value: '7,300+' },
        { label: '#1 lobbied issue', value: 'Healthcare' },
      ]} />

      <div className="my-8 bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-emerald-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Healthcare isn&apos;t just the most lobbied issue in America — it&apos;s the most lobbied issue 
          <em> by a massive margin</em>. Since 2018, organizations have disclosed <strong>{fmt(totalHealthcare)}</strong> in 
          lobbying income on healthcare issues alone, across <strong>{totalFilings.toLocaleString()} filings</strong> from 
          over 7,300 unique clients. That&apos;s more than defense, technology, and energy combined. 
          When Congress debates drug pricing, Medicaid expansion, or Medicare reimbursement, 
          they&apos;re not just debating policy — they&apos;re deciding who gets a piece of a $4.5 trillion industry.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Three Pillars of Healthcare Lobbying</h2>
        
        <p>
          Healthcare lobbying breaks into three major issue codes in Senate disclosures, 
          each representing a distinct battleground:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Healthcare Lobbying by Issue (2018–2025)</h3>
          {healthcareIssues.map(issue => (
            <div key={issue.code} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <div>
                  <span className="font-bold text-gray-900">{issue.name}</span>
                  <span className="text-xs text-gray-500 ml-2">({issue.code})</span>
                </div>
                <span className="font-bold text-primary">{fmt(issue.income)}</span>
              </div>
              <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full flex items-center justify-end pr-3"
                  style={{ width: `${(issue.income / healthcareIssues[0].income) * 100}%` }}
                >
                  <span className="text-xs font-bold text-white">{issue.filings.toLocaleString()} filings</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">{issue.clients.toLocaleString()} unique clients</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>$2.3 Billion: The Healthcare Reform Battle</h2>

        <p>
          The <strong>HCR (Health Issues)</strong> code is the broadest — covering everything from the Affordable Care Act 
          to telehealth regulations to mental health parity. With <strong>$2.3 billion</strong> in disclosed lobbying income 
          and 7,329 unique clients, it&apos;s the single largest lobbying category in America.
        </p>

        <p>
          Who lobbies on HCR? Everyone. Hospital systems fighting reimbursement cuts. Insurance companies 
          opposing rate regulations. Pharmaceutical companies defending patent protections. Medical device 
          manufacturers seeking FDA approval pathways. Nursing homes fighting staffing mandates. 
          Telehealth companies pushing for permanent pandemic-era flexibilities.
        </p>

        <p>
          The ACA alone generated a lobbying bonanza that still hasn&apos;t subsided. Every year, Congress 
          debates subsidies, Medicaid expansion, marketplace rules, and employer mandates — 
          and every year, the healthcare lobby mobilizes.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>$1.2 Billion: The Medicare/Medicaid Money Machine</h2>

        <p>
          Medicare and Medicaid are the federal government&apos;s two largest healthcare programs, together 
          covering over 150 million Americans and spending <strong>$1.5 trillion annually</strong>. 
          The lobbying around these programs — coded as <strong>MMM</strong> — totals $1.2 billion since 2018.
        </p>

        <p>
          The stakes are obvious. When Congress adjusts Medicare reimbursement rates by even 1%, 
          it shifts billions of dollars between providers. When states expand or contract Medicaid, 
          entire hospital systems gain or lose their financial foundation. The lobbying is intense 
          because the dollars are enormous and the decisions are made in Washington.
        </p>

        <p>
          Key Medicare/Medicaid lobbying battles include:
        </p>

        <ul>
          <li><strong>Physician reimbursement rates</strong> — The annual &quot;doc fix&quot; fight, where the AMA and specialty societies lobby to prevent automatic payment cuts</li>
          <li><strong>Medicaid expansion</strong> — Hospitals in expansion states lobby to keep it; those in non-expansion states lobby for alternatives</li>
          <li><strong>Medicare Advantage</strong> — Private insurers like UnitedHealth and Humana spend heavily to protect the program&apos;s favorable payment structure</li>
          <li><strong>Drug pricing in Medicare</strong> — The Inflation Reduction Act&apos;s drug negotiation provisions triggered massive lobbying from PhRMA</li>
          <li><strong>Nursing home regulations</strong> — Staffing mandates, quality metrics, and reimbursement rates drive constant lobbying</li>
        </ul>

        <p>
          For a deeper dive into Medicare spending and policy, see our sister site{' '}
          <a href="https://www.openmedicare.us" className="text-primary hover:underline">OpenMedicare.us</a>, 
          which tracks Medicare spending, provider payments, and program outcomes.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>$227 Million: The Drug Industry&apos;s Defense</h2>

        <p>
          The <strong>PHA (Pharmacy/Drug Industry)</strong> code tracks lobbying specifically about pharmaceutical 
          regulation, drug pricing, and pharmacy benefit management. At $227 million, it&apos;s the &quot;smallest&quot; 
          of the three healthcare codes — but it punches far above its weight.
        </p>

        <p>
          The pharmaceutical industry is arguably the most effective lobbying force in Washington. 
          PhRMA, the industry trade group, consistently ranks among the top lobbying spenders. 
          Individual companies — Pfizer, Johnson &amp; Johnson, AbbVie, Merck — each spend millions more.
        </p>

        <p>
          Their primary goal: <strong>preventing government price controls</strong>. The Inflation Reduction Act&apos;s 
          Medicare drug negotiation provision was the first crack in decades of successful industry resistance. 
          The lobbying to limit, delay, and water down those provisions was extraordinary — 
          and the lobbying to prevent expansion to commercial insurance continues.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Current Momentum</h2>

        <p>
          Interestingly, healthcare lobbying is currently showing a <strong>slight decline</strong> in quarterly momentum. 
          Our latest data shows:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <div className="space-y-3">
            {[
              { name: 'Health Issues (HCR)', latest: '$122.9M/quarter', change: -3.8 },
              { name: 'Medicare/Medicaid (MMM)', latest: '$65.4M/quarter', change: -8.7 },
              { name: 'Pharmacy (PHA)', latest: '$17.1M/quarter', change: -0.1 },
            ].map(item => (
              <div key={item.name} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                <span className="font-medium">{item.name}</span>
                <div className="text-right">
                  <div className="font-semibold">{item.latest}</div>
                  <div className={`text-xs ${item.change < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {item.change > 0 ? '+' : ''}{item.change}% QoQ
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">Quarter-over-quarter growth based on latest filing data</p>
        </div>

        <p>
          This modest decline doesn&apos;t signal retreat — it likely reflects the post-election 
          policy uncertainty. Healthcare lobbyists are regrouping, waiting to see what the new 
          Congress and administration prioritize. When the next major healthcare bill surfaces, 
          expect these numbers to spike.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why Healthcare Lobbying Will Never Slow Down</h2>

        <p>
          Healthcare is <strong>18% of U.S. GDP</strong> — roughly $4.5 trillion annually. The federal government 
          directly pays for about half of that through Medicare, Medicaid, the VA, CHIP, and ACA subsidies. 
          Every regulation, every reimbursement decision, every coverage mandate shifts billions.
        </p>

        <p>
          As long as the government is the largest payer in American healthcare, the lobbying will continue. 
          It&apos;s not corruption — it&apos;s arithmetic. When a single CMS rule change can add or subtract 
          $10 billion from an industry&apos;s revenue, spending $100 million to influence that rule 
          is a rational investment.
        </p>

        <p>
          The question isn&apos;t whether healthcare will be the #1 lobbied issue. It&apos;s whether 
          the public can keep up with what&apos;s happening. That&apos;s what we&apos;re here to help with.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore Healthcare Lobbying</h3>
          <p className="text-gray-700 mb-4">Dive into the data behind healthcare influence in Washington.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/issues/HCR" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Health Issues Data →
            </Link>
            <Link href="/issues/MMM" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Medicare/Medicaid →
            </Link>
            <Link href="/issues/PHA" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Pharmacy Issues →
            </Link>
            <Link href="/investigations/big-pharma-lobbying" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Big Pharma Investigation →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation 
        sources={[
          'Senate LDA Filings (lda.senate.gov) — 2018–2025',
          'Issue codes: HCR (Health Issues), MMM (Medicare/Medicaid), PHA (Pharmacy)',
          'CMS.gov — Medicare & Medicaid program data',
          'OpenMedicare.us — Medicare spending analysis',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/big-pharma-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💊 Big Pharma's $452M Machine</div>
          </Link>
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/pharmaceutical-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💊 Pharma Lobbying Overview</div>
          </Link>
          <Link href="/issues/HCR" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📋 Healthcare Issues Data</div>
          </Link>
          <Link href="/industries" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏭 Industry Breakdown</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
