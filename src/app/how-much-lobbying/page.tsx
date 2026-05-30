import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

const stats = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/stats.json'), 'utf-8'))

function fmt(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`
  return `$${n.toLocaleString()}`
}

const breadcrumbs = [{ name: 'How Much Does Lobbying Cost?' }]

export const metadata: Metadata = {
  title: 'How Much Does Lobbying Cost? Price of Influence',
  description: 'What does lobbying actually cost? From $10K quarterly filings to $100M+ annual budgets. Real data from 726,000+ filings on the price of influence in Washington.',
  keywords: ['how much does lobbying cost', 'lobbying cost', 'price of lobbying', 'lobbying fees', 'how much to hire a lobbyist', 'lobbying budget'],
  openGraph: {
    title: 'How Much Does Lobbying Cost? The Real Price of Influence',
    description: 'From $10K retainers to $100M+ budgets — what lobbying actually costs in Washington.',
    url: 'https://www.openlobby.us/how-much-lobbying',
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.openlobby.us/how-much-lobbying' },
}

export default function HowMuchLobbyingPage() {
  const yearly = stats.yearlyTrends as { year: number; income: number; filings: number }[]
  const latest = yearly[yearly.length - 1]
  const avgPerFiling = stats.totalIncome / stats.totalFilings
  const avgPerClient = stats.totalIncome / stats.totalClients

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does Lobbying Cost? The Real Price of Influence',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    publisher: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    datePublished: '2026-01-15',
    mainEntityOfPage: 'https://www.openlobby.us/how-much-lobbying',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does it cost to hire a lobbyist?',
        acceptedAnswer: { '@type': 'Answer', text: `Lobbying costs range enormously. A small retainer might cost $10,000-$30,000 per quarter, while major corporations spend $5M-$50M+ annually. The average across all ${stats.totalFilings.toLocaleString()} filings is ${fmt(avgPerFiling)} per filing.` },
      },
      {
        '@type': 'Question',
        name: 'How much is spent on lobbying each year?',
        acceptedAnswer: { '@type': 'Answer', text: `In ${latest.year}, ${fmt(latest.income)} was spent on federal lobbying — the highest on record. Annual spending has grown every year since 2018.` },
      },
      {
        '@type': 'Question',
        name: 'Is lobbying worth the money?',
        acceptedAnswer: { '@type': 'Answer', text: 'Research suggests lobbying has an extremely high ROI. Studies have found returns of 22,000% on certain tax lobbying efforts. A $1M lobbying investment can protect or secure billions in revenue through favorable legislation.' },
      },
      {
        '@type': 'Question',
        name: 'Who are the biggest lobbying spenders?',
        acceptedAnswer: { '@type': 'Answer', text: 'Trade associations like the US Chamber of Commerce, National Association of Realtors, and PhRMA are consistently the top spenders, along with corporations like Amazon, Meta, and major defense contractors.' },
      },
    ],
  }

  const priceTiers = [
    { tier: 'Startup / Small Nonprofit', quarterly: '$10K–$30K', annual: '$40K–$120K', desc: 'Basic representation on a single issue. One lobbyist, limited Congressional contacts.' },
    { tier: 'Mid-Size Company', quarterly: '$30K–$100K', annual: '$120K–$400K', desc: 'Dedicated team coverage on 2-3 issues. Regular meetings with key committee staff.' },
    { tier: 'Large Corporation', quarterly: '$100K–$500K', annual: '$400K–$2M', desc: 'Full-service lobbying across multiple issues. Senior lobbyists with deep relationships.' },
    { tier: 'Fortune 500', quarterly: '$500K–$3M', annual: '$2M–$12M', desc: 'Multiple firms, in-house team, comprehensive coverage. Lobbying on dozens of issues simultaneously.' },
    { tier: 'Trade Association', quarterly: '$1M–$10M+', annual: '$5M–$50M+', desc: 'Massive operations representing entire industries. Dozens of lobbyists, grassroots campaigns, PAC activity.' },
    { tier: 'Top 10 Spenders', quarterly: '$10M+', annual: '$50M+', desc: 'The elite tier. Year-round, full-spectrum influence operations spanning lobbying, advertising, and grassroots.' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Explainer</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            How Much Does Lobbying Cost? The Real Price of Influence
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From a $10,000 quarterly retainer to a $50 million annual campaign, the cost of lobbying
            varies wildly. Here&apos;s what it actually costs to influence Congress — backed by real data
            from {stats.totalFilings.toLocaleString()} disclosure filings.
          </p>
        </header>

        {/* Quick Numbers */}
        <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-6 text-indigo-200">The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(stats.totalIncome)}</div>
              <div className="text-sm text-indigo-300 mt-1">Total Spent (2018–2025)</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(latest.income)}</div>
              <div className="text-sm text-indigo-300 mt-1">{latest.year} Spending</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(avgPerFiling)}</div>
              <div className="text-sm text-indigo-300 mt-1">Avg. Per Filing</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{fmt(avgPerClient)}</div>
              <div className="text-sm text-indigo-300 mt-1">Avg. Per Client (Total)</div>
            </div>
          </div>
        </div>

        {/* Price Tiers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>What Lobbying Costs: A Tier Guide</h2>
          <div className="space-y-4">
            {priceTiers.map((t) => (
              <div key={t.tier} className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{t.tier}</h3>
                <div className="flex gap-6 mb-2">
                  <div>
                    <span className="text-xs text-gray-500 uppercase">Quarterly</span>
                    <div className="font-bold text-indigo-700">{t.quarterly}</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase">Annual</span>
                    <div className="font-bold text-indigo-700">{t.annual}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Ranges based on analysis of {stats.totalFilings.toLocaleString()} filings. Actual costs vary by issue complexity, firm prestige, and lobbyist seniority.
          </p>
        </section>

        {/* What You Get */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>What Does Your Money Buy?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold text-gray-900 mb-1">$10K–$50K/quarter</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Monitoring legislation on your issue</li>
                <li>• Quarterly strategy calls</li>
                <li>• Basic Hill meetings (1-3 per quarter)</li>
                <li>• Filing compliance handled</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-2">💰💰</div>
              <h3 className="font-bold text-gray-900 mb-1">$50K–$200K/quarter</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Active advocacy on 2-5 issues</li>
                <li>• Regular meetings with committee staff</li>
                <li>• Coalition building with allies</li>
                <li>• Draft legislative language</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-2">💰💰💰</div>
              <h3 className="font-bold text-gray-900 mb-1">$200K–$1M/quarter</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Full-court press on priority legislation</li>
                <li>• Direct access to senior lawmakers</li>
                <li>• Grassroots campaign coordination</li>
                <li>• Media strategy and op-ed placement</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-2xl mb-2">💰💰💰💰</div>
              <h3 className="font-bold text-gray-900 mb-1">$1M+/quarter</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Multiple lobbying firms engaged</li>
                <li>• National advertising campaigns</li>
                <li>• Think tank research funding</li>
                <li>• Full-spectrum influence operation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>The Return on Lobbying</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-amber-900 text-lg mb-2">The 22,000% ROI</h3>
            <p className="text-amber-800">
              Academic research on the 2004 American Jobs Creation Act found that corporations that lobbied
              for a tax repatriation holiday earned a return of over 22,000% on their lobbying investment.
              A $1 million lobbying spend secured $220 million in tax benefits.
            </p>
          </div>
          <p className="text-gray-600 mb-4">
            While not every lobbying campaign achieves this kind of return, the economics are compelling:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-black text-green-700">$1M</div>
              <div className="text-xs text-green-600 mt-1">Typical corporate lobbying budget</div>
            </div>
            <div className="text-center flex items-center justify-center text-3xl text-gray-300">→</div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-black text-green-700">$100M+</div>
              <div className="text-xs text-green-600 mt-1">Potential regulatory/tax benefit</div>
            </div>
          </div>
        </section>

        {/* Year-over-Year */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Annual Spending Growth</h2>
          <div className="space-y-3">
            {yearly.map((y) => {
              const maxIncome = Math.max(...yearly.map(d => d.income))
              const pct = (y.income / maxIncome) * 100
              return (
                <div key={y.year} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-gray-600">{y.year}</div>
                  <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-end pr-3"
                      style={{ width: `${pct}%` }}
                    >
                      <span className="text-xs font-bold text-white">{fmt(y.income)}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How much does it cost to hire a lobbyist?</h3>
              <p className="text-gray-600">
                Entry-level lobbying retainers start around $10,000–$30,000 per quarter. Most mid-size companies
                spend $120K–$400K annually. The average across all {stats.totalClients.toLocaleString()} clients is {fmt(avgPerClient)} in total spending.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Is lobbying worth the investment?</h3>
              <p className="text-gray-600">
                For many organizations, yes. A favorable regulatory decision or tax provision can be worth hundreds
                of millions. The ROI on well-targeted lobbying is among the highest of any corporate expenditure.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Why is lobbying so expensive?</h3>
              <p className="text-gray-600">
                Top lobbyists are former senior government officials with deep relationships and specialized expertise.
                Like top lawyers or investment bankers, they command premium rates because access and influence are scarce.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Can small organizations afford to lobby?</h3>
              <p className="text-gray-600">
                Yes, though at a smaller scale. Many nonprofits and small businesses spend $40K–$120K annually
                on lobbying. Coalitions and trade associations allow smaller players to pool resources.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">See What Everyone Spends</h2>
          <p className="text-indigo-200 mb-6">
            Every dollar of disclosed lobbying is searchable on OpenLobby. Browse any client, firm, or industry
            to see exactly what they spend.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/biggest-lobbying-clients" className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Top 100 Spenders
            </Link>
            <Link href="/lobbying-statistics-2026" className="bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              2026 Statistics
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
