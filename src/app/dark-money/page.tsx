import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

const stats = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/stats.json'), 'utf-8'))

function fmt(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`
  return `$${n.toLocaleString()}`
}

const breadcrumbs = [{ name: 'Dark Money' }]

export const metadata: Metadata = {
  title: 'Dark Money in Politics: What Lobbying Hides',
  description: 'Dark money in US politics: how undisclosed spending influences policy beyond the $37.7B in lobbying. PACs, 501(c)(4)s, shadow lobbying, and the gaps in disclosure.',
  keywords: ['dark money politics', 'dark money lobbying', 'undisclosed political spending', 'shadow lobbying', '501c4 dark money', 'political spending transparency'],
  openGraph: {
    title: 'Dark Money in Politics: What Lobbying Doesn\'t Show',
    description: 'The $37.7B in disclosed lobbying is just the tip of the iceberg. Here\'s what the system doesn\'t reveal.',
    url: 'https://www.openlobby.us/dark-money',
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.openlobby.us/dark-money' },
}

export default function DarkMoneyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dark Money in Politics: What Lobbying Doesn\'t Show',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    publisher: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    datePublished: '2026-01-15',
    mainEntityOfPage: 'https://www.openlobby.us/dark-money',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is dark money in politics?',
        acceptedAnswer: { '@type': 'Answer', text: 'Dark money refers to political spending by organizations that are not required to disclose their donors. This includes spending by 501(c)(4) nonprofits, certain PACs, and shadow lobbying activities that fall outside disclosure requirements.' },
      },
      {
        '@type': 'Question',
        name: 'How much dark money is there in US politics?',
        acceptedAnswer: { '@type': 'Answer', text: 'Estimates suggest dark money in politics exceeds disclosed lobbying spending by 2-3x. With $37.7B in disclosed lobbying from 2018-2025, total political influence spending likely exceeds $100 billion when including dark money channels.' },
      },
      {
        '@type': 'Question',
        name: 'What is shadow lobbying?',
        acceptedAnswer: { '@type': 'Answer', text: 'Shadow lobbying is influence activity that falls below the legal threshold for disclosure. If a professional spends less than 20% of their time on direct lobbying contacts, they don\'t have to register — even if they\'re deeply involved in strategy and influence campaigns.' },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Investigation</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Dark Money in Politics: What Lobbying Doesn&apos;t Show
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The {fmt(stats.totalIncome)} in disclosed lobbying spending is remarkable — but it&apos;s just the tip of the
            iceberg. For every dollar disclosed in lobbying reports, an estimated $2–3 flows through channels
            with little or no transparency. Welcome to the world of dark money.
          </p>
        </header>

        {/* The Iceberg */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-6 text-gray-300">The Influence Iceberg</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-semibold text-green-400 uppercase mb-1">What We Can See</div>
              <div className="text-3xl font-black text-green-400 mb-2">{fmt(stats.totalIncome)}</div>
              <p className="text-gray-400 text-sm">
                Disclosed lobbying income from {stats.totalFilings.toLocaleString()} Senate LDA filings.
                This covers registered lobbyists making direct contacts with federal officials.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-red-400 uppercase mb-1">What We Can&apos;t See</div>
              <div className="text-3xl font-black text-red-400 mb-2">$100B+ (est.)</div>
              <p className="text-gray-400 text-sm">
                Shadow lobbying, 501(c)(4) spending, grassroots campaigns, think tank funding,
                strategic consulting, and political advertising — none of which appear in lobbying disclosures.
              </p>
            </div>
          </div>
        </div>

        {/* Types of Dark Money */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>5 Channels of Dark Money</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 text-lg mb-2">1. Shadow Lobbying</h3>
              <p className="text-gray-600 mb-2">
                The Lobbying Disclosure Act has a critical loophole: professionals who spend less than 20% of their time
                on direct lobbying contacts don&apos;t have to register. This means former Senators, top strategists,
                and influence professionals can shape legislation without appearing in any disclosure.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Scale estimate:</strong> Researchers believe shadow lobbying may equal or exceed disclosed lobbying.
                Former officials who technically &quot;advise&quot; rather than directly lobby are the biggest beneficiaries.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 text-lg mb-2">2. 501(c)(4) &quot;Social Welfare&quot; Organizations</h3>
              <p className="text-gray-600 mb-2">
                These tax-exempt nonprofits can engage in unlimited lobbying and political advertising without
                disclosing their donors. They&apos;re the primary vehicle for anonymous political spending.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Scale estimate:</strong> $1–2 billion annually in political spending. Groups like Crossroads GPS,
                Americans for Prosperity, and Sixteen Thirty Fund channel hundreds of millions anonymously.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 text-lg mb-2">3. Think Tank Funding</h3>
              <p className="text-gray-600 mb-2">
                Corporations and wealthy donors fund think tanks that produce &quot;independent research&quot; supporting
                their policy positions. This research then gets cited by lawmakers and media as objective analysis.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Scale estimate:</strong> Top DC think tanks have combined budgets exceeding $2 billion annually.
                Donor influence over research agendas is rarely disclosed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 text-lg mb-2">4. Grassroots Manufacturing</h3>
              <p className="text-gray-600 mb-2">
                &quot;Astroturfing&quot; creates the appearance of grassroots support for corporate-backed positions.
                PR firms organize letter-writing campaigns, social media movements, and constituent pressure —
                all funded by undisclosed corporate clients.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Scale estimate:</strong> Difficult to quantify, but major grassroots campaigns can cost
                $10–50M each. The pharmaceutical industry alone has spent hundreds of millions on these efforts.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 text-lg mb-2">5. Strategic Consulting & Advisory</h3>
              <p className="text-gray-600 mb-2">
                Major consulting firms offer &quot;government affairs advisory&quot; services that influence policy
                without meeting the legal definition of lobbying. This includes regulatory strategy,
                coalition building, and stakeholder management.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Scale estimate:</strong> The Big 4 consulting firms alone earn billions from government-adjacent
                advisory work. McKinsey, BCG, and others operate massive public sector practices.
              </p>
            </div>
          </div>
        </section>

        {/* The Disclosure Gap */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Why Disclosure Falls Short</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 mb-2">The 20% Loophole</h3>
              <p className="text-amber-800 text-sm">
                Lobbyists only register if they spend 20%+ of their time on direct contacts. Strategic advisors
                who shape campaigns but don&apos;t make the calls remain invisible.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 mb-2">Self-Reporting</h3>
              <p className="text-amber-800 text-sm">
                Lobbying spending is self-reported with minimal auditing. Enforcement is weak —
                the Government Accountability Office has repeatedly flagged compliance issues.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 mb-2">Coalition Masking</h3>
              <p className="text-amber-800 text-sm">
                Companies can fund lobbying through trade associations, obscuring individual corporate
                contributions. A filing by &quot;the XYZ Coalition&quot; may represent dozens of hidden funders.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 mb-2">State-Level Gaps</h3>
              <p className="text-amber-800 text-sm">
                Federal lobbying disclosure is the most transparent in the US. State-level disclosure
                varies wildly — some states require almost nothing.
              </p>
            </div>
          </div>
        </section>

        {/* What OpenLobby Shows */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>What OpenLobby Can (and Can&apos;t) Show</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-3">✅ What We Show</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Every registered lobbyist&apos;s filings</li>
                <li>• Client spending amounts per filing</li>
                <li>• Issues lobbied on</li>
                <li>• Government entities contacted</li>
                <li>• Firm-client relationships</li>
                <li>• Historical trends (2018–2025)</li>
                <li>• Revolving door connections</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-900 mb-3">❌ What&apos;s Hidden</h3>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Shadow lobbying by unregistered advisors</li>
                <li>• 501(c)(4) anonymous political spending</li>
                <li>• Think tank donor influence</li>
                <li>• Grassroots manufacturing campaigns</li>
                <li>• Strategic consulting fees</li>
                <li>• State and local lobbying (separate systems)</li>
                <li>• Campaign contributions (separate FEC data)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What is dark money in politics?</h3>
              <p className="text-gray-600">
                Dark money refers to political spending by organizations not required to disclose their donors.
                This includes 501(c)(4) nonprofits, certain PACs, and shadow lobbying activities outside disclosure requirements.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Is dark money legal?</h3>
              <p className="text-gray-600">
                Yes. Most dark money channels are legal under current law. The Supreme Court&apos;s Citizens United
                decision (2010) expanded the ability of nonprofits and corporations to spend on political activities
                without disclosing donors.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How much dark money is there?</h3>
              <p className="text-gray-600">
                By definition, it&apos;s hard to measure. Estimates suggest total political influence spending
                (including dark money) is 2–3x larger than disclosed lobbying, potentially exceeding $100 billion
                over the 2018–2025 period.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Start With What We Can See</h2>
          <p className="text-gray-300 mb-6">
            While dark money remains hidden, {fmt(stats.totalIncome)} in disclosed lobbying is fully transparent
            and searchable. Start exploring the influence that is on the record.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/clients" className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Browse Clients
            </Link>
            <Link href="/investigations" className="bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              Read Investigations
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
