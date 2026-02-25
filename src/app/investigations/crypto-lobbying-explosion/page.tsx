import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: "Crypto&apos;s K Street Invasion — The Lobbying Explosion",
  description: 'Coinbase, Ripple, and the Blockchain Association have spent millions building a crypto lobbying machine in Washington.',
}

interface Client {
  id: number
  name: string
  totalIncome: number
  filings: number
  years: number[]
  issues: string[]
}

export default function CryptoLobbyingExplosionPage() {
  const clients: Client[] = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'top-clients.json'), 'utf-8'))

  const cryptoTerms = ['coinbase', 'ripple', 'blockchain', 'crypto', 'digital currency', 'bitcoin']
  const cryptoClients = clients.filter(c => cryptoTerms.some(t => c.name.toLowerCase().includes(t)))

  const grouped: Record<string, { total: number; entries: number; filings: number }> = {}
  cryptoClients.forEach(c => {
    const low = c.name.toLowerCase()
    let key = c.name
    if (low.includes('coinbase')) key = 'Coinbase'
    else if (low.includes('ripple')) key = 'Ripple Labs'
    else if (low.includes('blockchain association')) key = 'Blockchain Association'
    else if (low.includes('riot') && low.includes('blockchain')) key = 'Riot Platforms'
    else if (low.includes('crypto')) key = c.name

    if (!grouped[key]) grouped[key] = { total: 0, entries: 0, filings: 0 }
    grouped[key].total += c.totalIncome
    grouped[key].entries += 1
    grouped[key].filings += c.filings
  })

  const fmt = (n: number) => {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
    return `$${(n / 1e3).toFixed(0)}K`
  }

  const totalCryptoLobbying = cryptoClients.reduce((s, c) => s + c.totalIncome, 0)
  const sortedGroups = Object.entries(grouped).sort((a, b) => b[1].total - a[1].total)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Crypto's K Street Invasion — The Lobbying Explosion", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "Coinbase, Ripple, and the Blockchain Association have spent millions building a crypto lobbying machine in Washington.", mainEntityOfPage: "https://www.openlobby.us/investigations/crypto-lobbying-explosion" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: "Crypto\u2019s K Street Invasion" },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">Crypto</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Crypto&apos;s K Street Invasion:{' '}
        <span className="text-yellow-600">{fmt(totalCryptoLobbying)}</span>{' '}
        and Growing
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/crypto-lobbying-explosion" title="Crypto&apos;s K Street Invasion" />

      <div className="my-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-yellow-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          The cryptocurrency industry has spent <strong>{fmt(totalCryptoLobbying)}</strong> lobbying the federal
          government across {cryptoClients.length} separate registrations. From Coinbase to Ripple to the Blockchain
          Association, crypto has gone from a fringe technology to one of the fastest-growing lobbying forces in Washington.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>From Cypherpunks to K Street</h2>

        <p>
          A decade ago, the idea of cryptocurrency lobbyists would have been laughable. Bitcoin was created
          specifically to circumvent government control. The original crypto community was deeply skeptical of
          Washington — and Washington was deeply skeptical of crypto.
        </p>

        <p>
          That era is over. Today, the crypto industry maintains a permanent lobbying presence in Washington that
          rivals traditional financial services firms. Our analysis of federal lobbying disclosures
          shows <strong>{fmt(totalCryptoLobbying)}</strong> in total crypto-related lobbying expenditures — and the
          number is growing fast.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Money Players</h2>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {sortedGroups.slice(0, 8).map(([name, data]) => (
              <div key={name} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0">
                <div>
                  <span className="font-semibold text-gray-900">{name}</span>
                  <span className="text-sm text-gray-500 ml-2">({data.entries} registration{data.entries > 1 ? 's' : ''})</span>
                </div>
                <span className="text-lg font-bold text-yellow-700">{fmt(data.total)}</span>
              </div>
            ))}
          </div>
        </div>

        <p>
          Ripple Labs and Coinbase lead the pack. Ripple — the company behind the XRP token — has spent
          approximately <strong>{fmt(grouped['Ripple Labs']?.total || 0)}</strong> on federal lobbying, much of it
          focused on its existential battle with the SEC over whether XRP is a security. Coinbase, the largest
          US crypto exchange, follows with <strong>{fmt(grouped['Coinbase']?.total || 0)}</strong>, lobbying on
          everything from stablecoin regulation to tax reporting requirements.
        </p>

        <p>
          The Blockchain Association, the industry&apos;s primary trade group, has spent <strong>{fmt(grouped['Blockchain Association']?.total || 0)}</strong> representing
          the collective interests of crypto companies — from DeFi protocols to mining operations to NFT marketplaces.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>What Crypto Is Lobbying For</h2>

        <p>
          The crypto industry&apos;s lobbying priorities have evolved dramatically. In the early days, the focus was
          simply on preventing an outright ban. Today, the industry is pushing for specific regulatory frameworks
          that would legitimize crypto while keeping the most restrictive regulations at bay:
        </p>

        <ul>
          <li><strong>Market structure legislation</strong> — Crypto companies want Congress to clarify which agency regulates digital assets: the SEC or the CFTC. The industry strongly prefers the CFTC, which has a lighter regulatory touch.</li>
          <li><strong>Stablecoin regulation</strong> — Companies like Circle (USDC) and Tether are lobbying for a federal stablecoin framework that would preempt state-by-state regulation.</li>
          <li><strong>Tax clarity</strong> — The industry is fighting IRS reporting requirements that would treat DeFi protocols as &ldquo;brokers&rdquo; required to collect customer information.</li>
          <li><strong>Banking access</strong> — Crypto firms have lobbied against &ldquo;Operation Chokepoint 2.0&rdquo; — alleged efforts by banking regulators to cut off crypto companies from the traditional banking system.</li>
          <li><strong>Self-custody rights</strong> — Protecting users&apos; ability to hold their own crypto without intermediaries.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Political Transformation</h2>

        <p>
          Crypto&apos;s lobbying operation has been accompanied by an aggressive political strategy. The industry&apos;s
          super PACs spent over $130 million in the 2024 election cycle, making crypto one of the largest corporate
          donors in American politics. The strategy was bipartisan — funding both Republican and Democratic candidates
          who supported crypto-friendly regulation.
        </p>

        <p>
          The results were immediate. Several vocal crypto critics lost their seats, and the new Congress includes
          dozens of members who have publicly embraced digital assets. The lobbying and political spending work in
          tandem: campaign contributions open doors, and lobbyists walk through them.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Ripple Effect</h2>

        <p>
          Ripple Labs deserves special attention. The company&apos;s multi-year legal battle with the SEC — which
          alleged that XRP was an unregistered security — has been one of the defining regulatory fights in crypto
          history. Ripple didn&apos;t just fight in court; it simultaneously built a lobbying operation to shape the
          legislative landscape.
        </p>

        <p>
          With {fmt(grouped['Ripple Labs']?.total || 0)} in lobbying expenditures, Ripple has pushed for legislation
          that would create a clear framework for classifying digital assets — one that would likely benefit XRP.
          The company&apos;s approach illustrates a broader trend: crypto firms using both litigation and lobbying as
          complementary strategies to shape regulation.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Issue Code Trail</h2>

        <p>
          Crypto lobbying shows up across multiple issue codes in the federal database:
        </p>

        <ul>
          <li><strong><Link href="/issues/BAN" className="text-primary hover:underline">BAN (Banking)</Link></strong> — Stablecoin regulation, banking access, and financial services rules</li>
          <li><strong><Link href="/issues/FIN" className="text-primary hover:underline">FIN (Financial Institutions)</Link></strong> — SEC and CFTC jurisdiction, market structure</li>
          <li><strong><Link href="/issues/TAX" className="text-primary hover:underline">TAX (Taxation)</Link></strong> — IRS reporting requirements, tax treatment of digital assets</li>
          <li><strong><Link href="/issues/MON" className="text-primary hover:underline">MON (Minting/Money/Gold Standard)</Link></strong> — Digital currency policy and monetary system reform</li>
          <li><strong><Link href="/issues/TEC" className="text-primary hover:underline">TEC (Technology)</Link></strong> — Blockchain technology, DeFi protocols, and Web3 infrastructure</li>
        </ul>

        <p>
          The MON issue code — covering minting, money, and gold standard issues — has seen a <strong>54.5%</strong> surge
          in lobbying, driven largely by crypto and digital currency advocacy.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>Why It Matters</h2>

        <p>
          The crypto industry&apos;s transformation from an anti-establishment movement into a Washington lobbying
          powerhouse is one of the most remarkable political stories of the decade. An industry built on the
          premise of decentralization and disintermediation is now playing the most centralized game in
          America: influencing Congress.
        </p>

        <p>
          The {fmt(totalCryptoLobbying)} in crypto lobbying spending represents a bet that Washington will
          ultimately determine the industry&apos;s future — and that the companies spending the most on influence
          will shape the rules in their favor. For an industry that once promised to make government irrelevant,
          it&apos;s a striking irony.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search crypto lobbying clients and track the money flowing through K Street.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/issues" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Issues Lobbied →
            </Link>
            <Link href="/investigations/follow-the-money" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Follow the Money →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby analysis of crypto/blockchain lobbying registrations',
          'Federal Election Commission super PAC data',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/tech-lobbying-war" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Big Tech's $150M Lobbying War</div>
          </Link>
          <Link href="/investigations/ai-regulation-fight" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🤖 The AI Regulation Fight</div>
          </Link>
          <Link href="/investigations/first-time-filers-2024" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🆕 First-Time Filers 2024</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
          </Link>
          <Link href="/new-entrants" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🆕 New Entrants</div>
          </Link>
          <Link href="/tech-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Tech Lobbying Overview</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
