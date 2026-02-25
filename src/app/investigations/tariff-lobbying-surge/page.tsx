import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: "The 2025 Tariff Lobbying Explosion — Trade Policy Spending Surges",
  description: 'Tariff lobbying surged 560% in 2025 as companies scrambled for exemptions. Total lobbying hit $2.7B — a 36% jump.',
}

interface SurgeItem {
  code: string
  name: string
  latestQuarter: string
  latestIncome: number
  latestFilings: number
  prevYearIncome: number
  prevYearFilings: number
  incomeChangePercent: number
  filingsChangePercent: number
  newClients: number
  trend: string
}

interface SurgeData {
  latestQuarter: string
  comparedTo: string
  surging: SurgeItem[]
  growing: SurgeItem[]
  stable: SurgeItem[]
  declining: SurgeItem[]
  allIssues: SurgeItem[]
}

interface TrendYear {
  year: number
  totalIncome: number
  totalExpenses: number
  filings: number
  registrations: number
}

export default function TariffLobbyingSurgePage() {
  const dataDir = path.join(process.cwd(), 'public', 'data')
  const surgeData: SurgeData = JSON.parse(fs.readFileSync(path.join(dataDir, 'surge-tracker.json'), 'utf-8'))
  const trends: TrendYear[] = JSON.parse(fs.readFileSync(path.join(dataDir, 'trends.json'), 'utf-8'))

  const tariffIssue = [...surgeData.surging, ...(surgeData.allIssues || [])].find(i => i.code === 'TAR')
  const tradeIssue = [...surgeData.surging, ...(surgeData.allIssues || [])].find(i => i.code === 'TRD')
  const tradeSurging = surgeData.surging.filter(i => ['TAR', 'TRD', 'FOR'].includes(i.code))

  const trend2025 = trends.find(t => t.year === 2025)
  const trend2024 = trends.find(t => t.year === 2024)

  const fmt = (n: number) => {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
    return `$${(n / 1e3).toFixed(0)}K`
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "The 2025 Tariff Lobbying Explosion", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "Tariff lobbying surged 560% in 2025 as companies scrambled for exemptions.", mainEntityOfPage: "https://www.openlobby.us/investigations/tariff-lobbying-surge" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'The 2025 Tariff Lobbying Explosion' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">Trade</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The 2025 Tariff Lobbying Explosion:{' '}
        <span className="text-orange-600">{tariffIssue ? `${tariffIssue.incomeChangePercent.toFixed(0)}%` : '560%'}</span>{' '}
        Surge
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/tariff-lobbying-surge" title="The 2025 Tariff Lobbying Explosion" />

      <QuickFacts facts={[
        { label: 'Tariff lobbying surge', value: '+561%' },
        { label: 'Trade lobbying (latest Q)', value: '$80.5M' },
        { label: 'New trade clients', value: '148' },
        { label: '2025 total lobbying', value: '$2.7B' },
      ]} />

      <div className="my-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-orange-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Tariff-related lobbying exploded by <strong>{tariffIssue?.incomeChangePercent.toFixed(0) || '561'}%</strong> in
          2025 as companies scrambled for exemptions from sweeping new trade policies. Total federal lobbying hit
          a record <strong>{fmt(trend2025?.totalIncome || 2700000000)}</strong> — a{' '}
          {trend2024 && trend2025 ? `${((trend2025.totalIncome / trend2024.totalIncome - 1) * 100).toFixed(0)}%` : '36%'} jump
          from the prior year.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>When Tariffs Return, Lobbyists Rejoice</h2>

        <p>
          The return of aggressive trade policy in 2025 triggered one of the most dramatic lobbying surges in recent
          history. As the administration imposed sweeping tariffs on imports from China, the EU, and other trading
          partners, companies rushed to hire lobbyists — many for the first time — to seek exemptions, delays, or
          carve-outs.
        </p>

        <p>
          The numbers tell a stark story. Lobbying on tariff-specific issues (issue code TAR) surged
          from <strong>{fmt(tariffIssue?.prevYearIncome || 1623729)}</strong> to <strong>{fmt(tariffIssue?.latestIncome || 10729000)}</strong> in
          the latest quarter — an increase of <strong>{tariffIssue?.incomeChangePercent.toFixed(0) || '561'}%</strong>.
          The number of filings mentioning tariffs jumped
          from {tariffIssue?.prevYearFilings || 119} to {tariffIssue?.latestFilings || 370}, with {tariffIssue?.newClients || 47} entirely
          new clients registering to lobby on trade for the first time.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Surge in Numbers</h2>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {tariffIssue && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div>
                  <span className="font-semibold text-gray-900">Tariffs (TAR)</span>
                  <span className="text-sm text-gray-500 ml-2">{tariffIssue.latestFilings} filings</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-orange-600">+{tariffIssue.incomeChangePercent.toFixed(0)}%</div>
                  <div className="text-xs text-gray-500">{fmt(tariffIssue.prevYearIncome)} → {fmt(tariffIssue.latestIncome)}</div>
                </div>
              </div>
            )}
            {tradeIssue && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div>
                  <span className="font-semibold text-gray-900">Trade (TRD)</span>
                  <span className="text-sm text-gray-500 ml-2">{tradeIssue.latestFilings} filings</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-orange-600">+{tradeIssue.incomeChangePercent.toFixed(0)}%</div>
                  <div className="text-xs text-gray-500">{fmt(tradeIssue.prevYearIncome)} → {fmt(tradeIssue.latestIncome)}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <p>
          Trade (Domestic &amp; Foreign) lobbying — the broader category encompassing tariffs, trade agreements, and
          export policy — reached <strong>{fmt(tradeIssue?.latestIncome || 80533646)}</strong> in the latest quarter
          across {tradeIssue?.latestFilings?.toLocaleString() || '2,266'} filings. That&apos;s
          an <strong>{tradeIssue?.incomeChangePercent.toFixed(0) || '86'}%</strong> increase, with {tradeIssue?.newClients || 151} new
          clients entering the lobbying arena specifically because of trade concerns.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Total Lobbying Hits Record $2.7 Billion</h2>

        <p>
          The tariff surge is part of a broader lobbying boom. Total federal lobbying income
          reached <strong>{fmt(trend2025?.totalIncome || 2700000000)}</strong> in 2025,
          up from {fmt(trend2024?.totalIncome || 1980000000)} the year before. That&apos;s a{' '}
          {trend2024 && trend2025 ? `${((trend2025.totalIncome / trend2024.totalIncome - 1) * 100).toFixed(0)}%` : '36%'} increase
          — the largest single-year jump in lobbying spending in over a decade.
        </p>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Spending by Year</h3>
            <div className="space-y-3">
              {trends.slice(-5).map(t => (
                <div key={t.year} className="flex items-center gap-4">
                  <span className="text-sm font-mono text-gray-600 w-12">{t.year}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${t.year === 2025 ? 'bg-orange-500' : 'bg-gray-400'}`}
                      style={{ width: `${(t.totalIncome / (trend2025?.totalIncome || 2700000000)) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-700 w-20 text-right">{fmt(t.totalIncome)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Who&apos;s Lobbying on Trade</h2>

        <p>
          The tariff lobbying explosion cuts across industries. Manufacturers, retailers, agriculture companies,
          and tech firms are all scrambling to influence trade policy. Some of the most intense lobbying comes from:
        </p>

        <ul>
          <li><strong>Automakers and parts suppliers</strong> — Tariffs on imported vehicles and components threaten supply chains built over decades of free trade</li>
          <li><strong>Retailers</strong> — Companies like Walmart and Target face higher costs on imported consumer goods</li>
          <li><strong>Agriculture</strong> — Farmers fear retaliatory tariffs from trading partners, particularly China</li>
          <li><strong>Tech companies</strong> — Semiconductor and electronics firms lobbying on chip tariffs and export controls</li>
          <li><strong>Steel and aluminum producers</strong> — Some domestic producers actually support tariffs, lobbying to keep them in place</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Exemption Game</h2>

        <p>
          Much of the tariff lobbying isn&apos;t about opposing tariffs broadly — it&apos;s about winning specific
          exemptions. Companies lobby to have their particular products excluded from tariff lists, creating a
          lucrative cottage industry for trade lobbyists who specialize in navigating the exemption process.
        </p>

        <p>
          This creates a perverse dynamic: tariffs generate lobbying, which generates revenue for K Street, which
          creates a constituency that benefits from trade uncertainty. Some former trade officials have noted that
          the exemption process itself becomes a form of industrial policy — with the most politically connected
          companies winning carve-outs while smaller firms bear the full cost.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Other Surging Issues</h2>

        <p>
          Tariffs aren&apos;t the only issue seeing explosive growth. Our surge tracker identified {surgeData.surging.length} issue
          categories with dramatic increases in 2025:
        </p>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {surgeData.surging
              .sort((a, b) => b.incomeChangePercent - a.incomeChangePercent)
              .slice(0, 6)
              .map(item => (
                <div key={item.code} className="flex items-center justify-between px-6 py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <span className="font-semibold text-gray-900">{item.name}</span>
                    <span className="text-xs text-gray-500 ml-2">({item.code})</span>
                  </div>
                  <span className="text-sm font-bold text-orange-600">+{item.incomeChangePercent.toFixed(0)}%</span>
                </div>
              ))}
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why It Matters</h2>

        <p>
          The 2025 tariff lobbying explosion reveals something fundamental about how Washington works: policy
          uncertainty is the lobbying industry&apos;s best friend. When rules change suddenly, companies that
          never needed lobbyists before rush to hire them. The result is a transfer of corporate resources from
          productive activity to political influence.
        </p>

        <p>
          Whether tariffs are good policy is debatable. What&apos;s not debatable is the enormous lobbying
          apparatus they&apos;ve created — and the billions of dollars now flowing through K Street as companies
          fight to shape trade policy in their favor.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Track lobbying surges and see which issues are exploding in real time.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/issues" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Issues Lobbied →
            </Link>
            <Link href="/clients" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Top Clients →
            </Link>
            <Link href="/investigations/lobbying-statistics" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Lobbying Statistics →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby Surge Tracker analysis (Q4 2025 vs Q4 2024)',
          'OpenLobby historical trends data (2018-2025)',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/foreign-influence" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🌍 Foreign Influence</div>
          </Link>
          <Link href="/investigations/seasonal-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📅 Seasonal Lobbying</div>
          </Link>
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/issues/TRD" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📋 Trade Issues Data</div>
          </Link>
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
          </Link>
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
