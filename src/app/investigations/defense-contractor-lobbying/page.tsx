import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: "The Pentagon&apos;s Lobbying Machine — Defense Contractor Spending",
  description: 'Boeing, Lockheed Martin, RTX, Northrop Grumman, and General Dynamics spend tens of millions lobbying Congress — and get billions in contracts back.',
}

interface Client {
  id: number
  name: string
  totalIncome: number
  filings: number
  years: number[]
  issues: string[]
}

interface ContractEntry {
  name: string
  lobbying: number
  contracts: number
  roi: number
  roiLabel: string
}

export default function DefenseContractorLobbyingPage() {
  const dataDir = path.join(process.cwd(), 'public', 'data')
  const clients: Client[] = JSON.parse(fs.readFileSync(path.join(dataDir, 'top-clients.json'), 'utf-8'))
  const contracts: ContractEntry[] = JSON.parse(fs.readFileSync(path.join(dataDir, 'follow-the-money.json'), 'utf-8'))

  const defenseTerms = ['boeing', 'lockheed', 'rtx', 'raytheon', 'northrop', 'general dynamics', 'bae systems', 'huntington ingalls']
  const defenseClients = clients.filter(c => defenseTerms.some(t => c.name.toLowerCase().includes(t)))

  const grouped: Record<string, number> = {}
  defenseClients.forEach(c => {
    const low = c.name.toLowerCase()
    let key = 'Other'
    if (low.includes('boeing')) key = 'Boeing'
    else if (low.includes('lockheed')) key = 'Lockheed Martin'
    else if (low.includes('rtx') || low.includes('raytheon')) key = 'RTX / Raytheon'
    else if (low.includes('northrop')) key = 'Northrop Grumman'
    else if (low.includes('general dynamics')) key = 'General Dynamics'
    else if (low.includes('bae')) key = 'BAE Systems'
    else if (low.includes('huntington')) key = 'Huntington Ingalls'
    grouped[key] = (grouped[key] || 0) + c.totalIncome
  })

  const defenseContracts = contracts.filter(c => defenseTerms.some(t => c.name.toLowerCase().includes(t)))

  const fmt = (n: number) => {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
    return `$${(n / 1e3).toFixed(0)}K`
  }

  const totalDefenseLobbying = Object.values(grouped).reduce((a, b) => a + b, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: "The Pentagon\u2019s Lobbying Machine" },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">Defense</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The Pentagon&apos;s Lobbying Machine:{' '}
        <span className="text-gray-700">{fmt(totalDefenseLobbying)}</span>{' '}
        to Win Billions
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/defense-contractor-lobbying" title="The Pentagon&apos;s Lobbying Machine" />

      <div className="my-8 bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-gray-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          America&apos;s top seven defense contractors have spent a combined <strong>{fmt(totalDefenseLobbying)}</strong> lobbying
          the federal government across dozens of separate registrations. In return, they&apos;ve received tens of billions
          in government contracts — a return on investment that dwarfs anything on Wall Street.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Military-Industrial Lobbying Complex</h2>

        <p>
          When President Eisenhower warned about the &ldquo;military-industrial complex&rdquo; in 1961, he could hardly
          have imagined the lobbying apparatus that would grow around the Pentagon. Today, defense contractors don&apos;t
          just build weapons — they maintain some of the most sophisticated influence operations in Washington, D.C.
        </p>

        <p>
          Our analysis of Senate lobbying disclosure filings reveals the staggering scale: the top seven defense
          contractors — Boeing, Lockheed Martin, RTX (formerly Raytheon), Northrop Grumman, General Dynamics,
          BAE Systems, and Huntington Ingalls — have reported a combined <strong>{fmt(totalDefenseLobbying)}</strong> in
          lobbying expenditures across multiple filings in the federal database.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Big Seven: Who Spends What</h2>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {Object.entries(grouped)
              .sort((a, b) => b[1] - a[1])
              .map(([name, total]) => (
                <div key={name} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0">
                  <span className="font-semibold text-gray-900">{name}</span>
                  <span className="text-lg font-bold text-gray-700">{fmt(total)}</span>
                </div>
              ))}
          </div>
        </div>

        <p>
          Boeing leads the pack with over <strong>{fmt(grouped['Boeing'] || 0)}</strong> spread across numerous
          separate lobbying registrations — a common strategy that allows companies to deploy multiple lobbying
          firms on different issues simultaneously. General Dynamics follows with approximately <strong>{fmt(grouped['General Dynamics'] || 0)}</strong>,
          while RTX / Raytheon totals around <strong>{fmt(grouped['RTX / Raytheon'] || 0)}</strong>.
        </p>

        <p>
          These aren&apos;t companies writing occasional checks to lobbyists. Each maintains a permanent Washington
          presence with dedicated government affairs teams, supplemented by dozens of outside lobbying firms. Boeing
          alone appears in {defenseClients.filter(c => c.name.toLowerCase().includes('boeing')).length} separate
          lobbying registrations in our dataset.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Return on Investment</h2>

        <p>
          The real story isn&apos;t how much defense contractors spend on lobbying — it&apos;s what they get back.
          Using federal contract data, we can calculate the extraordinary return on lobbying investment:
        </p>

        {defenseContracts.length > 0 && (
          <div className="not-prose my-6">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              {defenseContracts
                .sort((a, b) => b.roi - a.roi)
                .slice(0, 7)
                .map(c => (
                  <div key={c.name} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0">
                    <div>
                      <span className="font-semibold text-gray-900">{c.name}</span>
                      <span className="text-sm text-gray-500 ml-2">Lobbied: {fmt(c.lobbying)}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-700">{fmt(c.contracts)} in contracts</div>
                      <div className="text-xs text-gray-500">{c.roiLabel}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        <p>
          RTX Corporation tops the list with <strong>{fmt(defenseContracts.find(c => c.name.toLowerCase().includes('rtx'))?.contracts || 0)}</strong> in
          federal contracts against a lobbying spend of just {fmt(defenseContracts.find(c => c.name.toLowerCase().includes('rtx'))?.lobbying || 0)} — a
          return of over 3,000x. Huntington Ingalls, which builds the Navy&apos;s aircraft carriers and submarines,
          turned a $2M lobbying investment into $4.4B in contracts.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What They&apos;re Lobbying For</h2>

        <p>
          Defense lobbying isn&apos;t just about winning new contracts. These companies lobby on a wide range of issues:
        </p>

        <ul>
          <li><strong>DEF (Defense)</strong> — The obvious one: appropriations, weapons systems, base closures, and force structure</li>
          <li><strong>BUD (Budget)</strong> — Fighting for higher defense spending and against sequestration cuts</li>
          <li><strong>FOR (Foreign Relations)</strong> — Arms export approvals, foreign military sales, and sanctions policy</li>
          <li><strong>TRD (Trade)</strong> — International defense trade regulations and export controls</li>
          <li><strong>GOV (Government Issues)</strong> — Procurement reform, contractor regulations, and workforce rules</li>
        </ul>

        <p>
          The lobbying intensifies every year during the National Defense Authorization Act (NDAA) markup, when
          Congress decides which weapons systems to fund, which bases to keep open, and which programs to cut.
          Defense contractors deploy their full lobbying apparatus during this period, targeting members of the
          Armed Services and Appropriations committees.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door Factor</h2>

        <p>
          Defense lobbying is supercharged by the revolving door. Former Pentagon officials, retired generals, and
          ex-congressional staffers from defense committees regularly join lobbying firms representing the very
          contractors they once oversaw. This gives defense companies something money alone can&apos;t buy: insider
          knowledge and personal relationships with decision-makers.
        </p>

        <p>
          Our <Link href="/investigations/revolving-door-exposed" className="text-primary hover:underline">revolving door analysis</Link> found
          thousands of former government officials now registered as lobbyists — and the defense sector employs a
          disproportionate share of them.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why It Matters</h2>

        <p>
          The United States spends more on defense than the next ten countries combined. The Pentagon&apos;s annual
          budget exceeds $800 billion. Defense contractors argue that their lobbying ensures America maintains
          technological superiority and supports millions of jobs. Critics counter that the lobbying creates
          perverse incentives — weapons systems that Congress funds not because the military needs them, but
          because they create jobs in the right congressional districts.
        </p>

        <p>
          The numbers don&apos;t lie: when companies can spend a few million on lobbying and receive billions in
          contracts, the incentive to lobby is overwhelming. As long as the return on investment remains this
          extraordinary, the Pentagon&apos;s lobbying machine will keep running.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search defense contractors and see their lobbying spending and government contracts.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/investigations/follow-the-money" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Follow the Money →
            </Link>
            <Link href="/investigations/revolving-door-exposed" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Revolving Door →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'USASpending.gov Federal Contract Data',
          'OpenLobby analysis of defense contractor lobbying registrations',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/lobbying-vs-contracts" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Lobbying vs. Contracts</div>
          </Link>
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
          </Link>
          <Link href="/investigations/doge-vs-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🐕 DOGE vs. Lobbying</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/defense-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ Defense Lobbying Overview</div>
          </Link>
          <Link href="/issues/DEF" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📋 Defense Issue Data</div>
          </Link>
          <Link href="/lobbying-vs-contracts" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Lobbying vs. Contracts Data</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
