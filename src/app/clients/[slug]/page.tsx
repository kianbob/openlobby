import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, toTitleCase } from '@/lib/format'
import { resolveClientSlug, resolveFirmSlug, resolveLobbyistSlug } from '@/lib/resolveSlug'
import ClientSpendingChart from './ClientCharts'

const articleMap: Record<string, { href: string; title: string; desc: string }[]> = {
  HCR: [{ href: '/investigations/big-pharma-lobbying', title: 'Big Pharma\'s $452M Lobbying Machine', desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }, { href: '/investigations/healthcare-3-billion-bet', title: 'Healthcare\'s $3 Billion Bet', desc: 'The healthcare industry\'s massive lobbying investment.' }],
  PHA: [{ href: '/investigations/big-pharma-lobbying', title: 'Big Pharma\'s $452M Lobbying Machine', desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }],
  MIA: [{ href: '/investigations/big-pharma-lobbying', title: 'Big Pharma\'s $452M Lobbying Machine', desc: 'How pharmaceutical companies spend hundreds of millions to influence health policy.' }],
  DEF: [{ href: '/investigations/defense-contractor-lobbying', title: 'The Defense Lobby', desc: 'Defense contractors spend millions lobbying for contracts worth billions.' }, { href: '/investigations/lobbying-vs-contracts', title: 'Lobbying vs. Federal Contracts', desc: 'How lobbying spending correlates with contract awards.' }],
  CPT: [{ href: '/investigations/tech-lobbying-war', title: 'Big Tech\'s $150M Lobbying War', desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }, { href: '/investigations/ai-regulation-fight', title: 'Who\'s Lobbying to Shape AI Policy', desc: 'The AI regulation fight is the biggest lobbying battle of the decade.' }],
  SCI: [{ href: '/investigations/tech-lobbying-war', title: 'Big Tech\'s $150M Lobbying War', desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }],
  COM: [{ href: '/investigations/tech-lobbying-war', title: 'Big Tech\'s $150M Lobbying War', desc: 'Tech giants battle over AI, antitrust, privacy, and trade.' }],
  TRD: [{ href: '/investigations/tariff-lobbying-surge', title: 'The 2025 Tariff Panic', desc: 'As tariffs return, lobbying on trade surges.' }],
  TAR: [{ href: '/investigations/tariff-lobbying-surge', title: 'The 2025 Tariff Panic', desc: 'As tariffs return, lobbying on trade surges.' }],
  FOR: [{ href: '/investigations/foreign-influence', title: 'Foreign Governments Are Lobbying Congress', desc: '1,000+ foreign entities from 50+ countries lobby the US government.' }],
  FIN: [{ href: '/investigations/follow-the-money', title: 'Follow the Money', desc: 'Tracking lobbying dollars through the financial system.' }],
  BNK: [{ href: '/investigations/follow-the-money', title: 'Follow the Money', desc: 'Tracking lobbying dollars through the financial system.' }],
  CPI: [{ href: '/investigations/crypto-lobbying-explosion', title: 'The Crypto Lobbying Explosion', desc: 'How crypto went from zero to massive lobbying presence.' }],
  GOV: [{ href: '/investigations/doge-vs-lobbying', title: 'DOGE vs. the Lobbying Machine', desc: 'Government efficiency meets the lobbying industrial complex.' }],
  BUD: [{ href: '/investigations/the-22000-percent-roi', title: 'The 22,000% ROI', desc: 'When lobbying spending yields outsized returns.' }],
  TAX: [{ href: '/investigations/the-22000-percent-roi', title: 'The 22,000% ROI', desc: 'When lobbying spending yields outsized returns.' }],
  ENE: [{ href: '/investigations/follow-the-money', title: 'Follow the Money', desc: 'Tracking energy lobbying dollars and their impact.' }],
}

const issueCodeToIndustry: Record<string, { page: string; label: string }> = {
  CPT: { page: '/tech-lobbying', label: 'Tech Lobbying' },
  SCI: { page: '/tech-lobbying', label: 'Tech Lobbying' },
  COM: { page: '/tech-lobbying', label: 'Tech Lobbying' },
  HCR: { page: '/pharmaceutical-lobbying', label: 'Pharma Lobbying' },
  PHA: { page: '/pharmaceutical-lobbying', label: 'Pharma Lobbying' },
  MIA: { page: '/pharmaceutical-lobbying', label: 'Pharma Lobbying' },
  DEF: { page: '/defense-lobbying', label: 'Defense Lobbying' },
}

const issueCodeToName: Record<string, string> = {
  ACC: 'Accounting', ADV: 'Advertising', AER: 'Aerospace', AGR: 'Agriculture', ALC: 'Alcohol & Drug Abuse',
  ANI: 'Animals', APP: 'Apparel', ART: 'Arts/Entertainment', AUT: 'Automotive', AVI: 'Aviation',
  BAN: 'Banking', BEV: 'Beverage', BNK: 'Banking', BUD: 'Budget/Appropriations', CAW: 'Clean Air & Water',
  CDT: 'Commodities', CHM: 'Chemicals', CIV: 'Civil Rights', COM: 'Communications', CPI: 'Computer Industry',
  CPT: 'Copyright/Patent', CSP: 'Consumer Issues', DEF: 'Defense', DIS: 'Disaster Planning', DOC: 'District of Columbia',
  ECN: 'Economics', EDU: 'Education', ENG: 'Energy', ENV: 'Environment', FAM: 'Family Issues',
  FIN: 'Financial', FIR: 'Firearms', FOO: 'Food Industry', FOR: 'Foreign Relations', FUE: 'Fuel/Gas/Oil',
  GAM: 'Gaming', GOV: 'Government Issues', HCR: 'Health Issues', HOM: 'Homeland Security', HOU: 'Housing',
  IMM: 'Immigration', IND: 'Indian/Native American', INS: 'Insurance', INT: 'Intelligence', LAW: 'Law Enforcement',
  LBR: 'Labor Issues', MAN: 'Manufacturing', MAR: 'Marine/Maritime', MIA: 'Media/Information', MMM: 'Medicare/Medicaid',
  MON: 'Minting/Money', NAT: 'Natural Resources', PHA: 'Pharmacy', POS: 'Postal', RES: 'Real Estate',
  RET: 'Retirement', ROD: 'Roads/Highway', SCI: 'Science/Technology', SMB: 'Small Business', SPO: 'Sports',
  TAR: 'Tariffs', TAX: 'Taxation', TEC: 'Telecommunications', TOR: 'Torts', TOU: 'Tourism',
  TRA: 'Transportation', TRD: 'Trade', TRU: 'Trucking/Shipping', URB: 'Urban Development', UNM: 'Unemployment',
  UTI: 'Utilities', VET: 'Veterans', WAS: 'Waste', WEL: 'Welfare',
}

const alwaysArticles = [
  { href: '/investigations/lobbying-statistics', title: 'Federal Lobbying Statistics 2025', desc: 'The definitive stats — $37.7B total, industry breakdowns, and trends.' },
  { href: '/investigations/what-is-lobbying', title: 'What Is Lobbying? A Complete Guide', desc: 'How lobbying works, who does it, and why it matters.' },
]

const defenseContractors = ['lockheed martin', 'raytheon', 'boeing', 'northrop grumman', 'general dynamics', 'bae systems', 'l3harris', 'leidos', 'huntington ingalls', 'general electric', 'honeywell', 'textron', 'united technologies']

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function getRelatedArticles(issues: string[]) {
  const seen = new Set<string>()
  const articles: { href: string; title: string; desc: string }[] = []
  for (const issue of issues) {
    if (!issue) continue
    const mapped = articleMap[issue]
    if (mapped) {
      for (const a of mapped) {
        if (!seen.has(a.href)) {
          seen.add(a.href)
          articles.push(a)
        }
      }
    }
  }
  for (const a of alwaysArticles) {
    if (!seen.has(a.href)) {
      seen.add(a.href)
      articles.push(a)
    }
  }
  return articles
}

function getIndustryPages(issues: string[]) {
  const seen = new Set<string>()
  const pages: { page: string; label: string }[] = []
  for (const issue of issues) {
    if (!issue) continue
    const mapped = issueCodeToIndustry[issue]
    if (mapped && !seen.has(mapped.page)) {
      seen.add(mapped.page)
      pages.push(mapped)
    }
  }
  return pages
}

interface ClientData {
  name: string
  slug: string
  state: string
  description: string
  totalSpending: number
  filings: number
  yearlySpending: { year: number; income: number }[]
  firms: string[]
  lobbyists: string[]
  issues: string[]
  sampleDescriptions: string[]
  years: number[]
}

interface ClientIndexEntry {
  slug: string
  name: string
  totalIncome?: number
  spending?: number
  state?: string
  issues?: string[]
}

function getClient(slug: string): ClientData | null {
  const resolved = resolveClientSlug(slug)
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'clients', `${resolved}.json`)
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  } catch {
    return null
  }
}

function getSimilarClients(client: ClientData): ClientIndexEntry[] {
  try {
    const index: ClientIndexEntry[] = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'client-index.json'), 'utf-8'))
    const clientIssues = new Set(client.issues?.filter(Boolean) || [])
    const scored = index
      .filter(c => c.slug !== client.slug)
      .map(c => {
        let score = 0
        if (c.state && c.state === client.state) score += 2
        const overlap = (c.issues || []).filter(i => clientIssues.has(i)).length
        score += overlap
        return { ...c, score }
      })
      .filter(c => c.score > 0)
      .sort((a, b) => b.score - a.score)
    return scored.slice(0, 5)
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const client = getClient(slug)
  if (!client) return { title: 'Client Not Found' }
  return {
    title: `${toTitleCase(client.name)} — Lobbying Spending & Activity`,
    description: `${toTitleCase(client.name)} has spent ${formatCurrency(client.totalSpending || (client as any).totalSpend || 0)} on federal lobbying across ${client.filings || 0} filings. See firms, lobbyists, issues, spending trends, and related investigations.`,
  }
}

export async function generateStaticParams() {
  try {
    const index = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'client-index.json'), 'utf-8'))
    return index.slice(0, 200).map((c: { slug: string }) => ({ slug: c.slug }))
  } catch {
    return []
  }
}

export const dynamicParams = true

export default async function ClientDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const client = getClient(slug)

  if (!client) {
    notFound()
  }

  // Normalize field names — generated files may use alternate keys
  const totalSpending = client.totalSpending || (client as any).totalSpend || 0
  const firms = client.firms || []
  const lobbyists = client.lobbyists || []
  const yearlySpending = client.yearlySpending || (client as any).yearly || []
  const sampleDescriptions = client.sampleDescriptions || (client as any).descriptions || []
  const years = client.years || []
  const issues = client.issues || []

  const similarClients = getSimilarClients(client)
  const relatedArticles = getRelatedArticles(issues)
  const industryPages = getIndustryPages(issues)
  const isContractor = defenseContractors.some(dc => client.name.toLowerCase().includes(dc))
  const validIssues = issues.filter(Boolean).map((i: any) => typeof i === 'object' ? (i.code || '') : String(i)).filter(Boolean)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbJsonLd items={[{ name: 'Clients', href: '/clients' }, { name: toTitleCase(client.name) }]} />
      <Breadcrumbs items={[{ name: 'Clients', href: '/clients' }, { name: toTitleCase(client.name) }]} />
      
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{toTitleCase(client.name)}</h1>
      {client.description && <p className="text-gray-600 mb-2">{client.description}</p>}
      {client.state && (
        <p className="text-sm text-gray-500 mb-6">
          Based in <Link href={`/states/${client.state}`} className="text-primary hover:underline">{client.state}</Link>
        </p>
      )}
      
      <ShareButtons url={`https://www.openlobby.us/clients/${slug}`} title={`${toTitleCase(client.name)} spent ${formatCurrency(totalSpending)} on lobbying`} />

      {/* AI Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8 mt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              With {formatCurrency(totalSpending)} in lobbying spend across {client.filings} quarterly filings, {toTitleCase(client.name).replace(/\.$/, '')} is {totalSpending > 5000000 ? 'one of the biggest lobbying spenders in Washington' : totalSpending > 1000000 ? 'a significant lobbying presence' : 'an active lobbying client'}.{lobbyists?.length > 10 ? ` They deploy ${lobbyists.length} individual lobbyists` : ''}{firms?.length > 1 ? ` across ${firms.length} different lobbying firms.` : ''}
              {validIssues.length > 0 && ` Their lobbying covers ${validIssues.length} issue area${validIssues.length > 1 ? 's' : ''}.`}
              {years?.length > 1 && ` Active from ${Math.min(...years)} to ${Math.max(...years)}.`}
            </p>
          </div>
        </div>
      </div>

      {/* At a Glance */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(totalSpending)}</div>
          <div className="text-xs text-gray-500">Total Spend</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{years?.length || '—'}</div>
          <div className="text-xs text-gray-500">Years Active</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{firms.length}</div>
          <div className="text-xs text-gray-500">Firms Hired</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{lobbyists.length}</div>
          <div className="text-xs text-gray-500">Lobbyists Deployed</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{validIssues.length}</div>
          <div className="text-xs text-gray-500">Issues Lobbied</div>
        </div>
      </div>

      {/* Spending Chart */}
      {yearlySpending.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending Trend</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <ClientSpendingChart data={yearlySpending} />
          </div>
          {/* Keep the table too for accessibility / SEO */}
          <details className="mt-3">
            <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">View as table</summary>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mt-2">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Year</th>
                    <th className="px-4 py-3 text-right font-semibold">Lobbying Spend</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlySpending.map(ys => (
                    <tr key={ys.year} className="border-t border-gray-100">
                      <td className="px-4 py-3">{ys.year}</td>
                      <td className="px-4 py-3 text-right font-medium">{formatCurrency(ys.income)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </section>
      )}

      {/* Issue Badges with Links */}
      {validIssues.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Issues Lobbied</h2>
          <div className="flex flex-wrap gap-2">
            {validIssues.map(code => (
              <Link key={code} href={`/issues/${code}`} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors border border-indigo-200">
                {issueCodeToName[code] || code}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Lobbying Firms with Links */}
      {firms.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Firms</h2>
          <div className="flex flex-wrap gap-2">
            {firms.map(firm => (
              <Link key={firm} href={`/firms/${resolveFirmSlug(firm)}`} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                {toTitleCase(firm)}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Lobbyists with Links */}
      {lobbyists.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbyists</h2>
          <div className="flex flex-wrap gap-2">
            {lobbyists.map(name => (
              <Link key={name} href={`/lobbyists/${resolveLobbyistSlug(name)}`} className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors border border-gray-200">
                {toTitleCase(name)}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Government Agencies Targeted */}
      {(client as any).govEntities?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Government Agencies Targeted</h2>
          <p className="text-gray-600 text-sm mb-4">These are the government entities that {toTitleCase(client.name)} disclosed contacting in their lobbying filings.</p>
          <div className="flex flex-wrap gap-2">
            {((client as any).govEntities as string[]).slice(0, 20).map((entity: string) => (
              <span key={entity} className="px-3 py-1.5 bg-indigo-50 text-indigo-800 rounded-lg text-sm border border-indigo-100">
                {entity}
              </span>
            ))}
            {(client as any).govEntities.length > 20 && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm">
                +{(client as any).govEntities.length - 20} more
              </span>
            )}
          </div>
          <Link href="/agencies" className="inline-block mt-3 text-sm text-indigo-600 hover:underline">View all agency pressure data →</Link>
        </section>
      )}

      {/* What They Lobby About */}
      {(() => {
        const uniqueDescs = [...new Map(sampleDescriptions.map(d => [d.toLowerCase().trim(), d])).values()]
        // Link bill numbers like H.R. 4007, S. 1234
        function linkBills(text: string) {
          return text.replace(/\b(H\.?\s*R\.?\s*\d+|S\.?\s*\d+|H\.?\s*Res\.?\s*\d+|S\.?\s*Res\.?\s*\d+)/gi, (match) => {
            const q = encodeURIComponent(match.replace(/\s+/g, ' '))
            return `<a href="https://www.congress.gov/bill/search?q=${q}" target="_blank" rel="noopener" class="text-primary hover:underline font-medium">${match}</a>`
          })
        }
        return uniqueDescs.length > 0 ? (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What They Lobby About</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800">
              These are actual descriptions from their quarterly lobbying disclosure filings, summarizing what they lobbied Congress and federal agencies about.
              {validIssues.length > 0 && (
                <span className="block mt-2">
                  <strong>Issue areas:</strong>{' '}
                  {validIssues.slice(0, 5).map(code => issueCodeToName[code] || code).join(', ')}
                  {validIssues.length > 5 && ` and ${validIssues.length - 5} more`}
                </span>
              )}
            </p>
          </div>
          <div className="space-y-3">
            {uniqueDescs.slice(0, 8).map((desc, i) => (
              <div key={i} className="text-gray-700 text-sm pl-4 border-l-2 border-primary/30 leading-relaxed">
                {desc.split('\n').map((line, j) => (
                  <p key={j} className={j > 0 ? 'mt-1' : ''} dangerouslySetInnerHTML={{ __html: linkBills(line) }} />
                ))}
              </div>
            ))}
          </div>
          {uniqueDescs.length > 8 && (
            <p className="text-xs text-gray-400 mt-3">Showing 8 of {uniqueDescs.length} unique descriptions from filings.</p>
          )}
        </section>
        ) : null
      })()}

      {/* Cross-links to Related Analysis */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Analysis</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/client-trajectories" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">📈 Client Trajectories</div>
            <div className="text-xs text-gray-500 mt-1">See how this client compares to others over time</div>
          </Link>
          <Link href="/concentration" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🎯 Market Concentration</div>
            <div className="text-xs text-gray-500 mt-1">How concentrated is the lobbying market?</div>
          </Link>
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
            <div className="text-xs text-gray-500 mt-1">Which issues are surging right now?</div>
          </Link>
          {isContractor && (
            <Link href="/lobbying-vs-contracts" className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <div className="font-medium text-sm text-emerald-700">💰 Lobbying vs. Contracts</div>
              <div className="text-xs text-gray-500 mt-1">Compare lobbying spend to federal contract awards</div>
            </Link>
          )}
          {industryPages.map(ip => (
            <Link key={ip.page} href={ip.page} className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <div className="font-medium text-sm text-purple-700">🏭 {ip.label}</div>
              <div className="text-xs text-gray-500 mt-1">Industry overview and top spenders</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Investigations */}
      {relatedArticles.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {relatedArticles.slice(0, 6).map(a => (
              <Link key={a.href} href={a.href} className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                <div className="font-medium text-sm text-indigo-700">{a.title}</div>
                <div className="text-xs text-gray-500 mt-1">{a.desc}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Similar Clients */}
      {similarClients.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Similar Clients</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {similarClients.map(c => (
              <Link key={c.slug} href={`/clients/${c.slug}`} className="block p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                <div className="font-medium text-sm text-gray-900">{toTitleCase(c.name)}</div>
                <div className="text-xs text-gray-500 mt-1">{formatCurrency(c.spending || c.totalIncome || 0)} total spend</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Explore More */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">← All Clients</Link>
          <Link href="/compare" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">⚖️ Compare Clients</Link>
          <Link href="/lobbying-roi" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">💵 ROI Calculator</Link>
          <Link href="/investigations" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🔍 Investigations</Link>
          <Link href="/how-lobbying-works" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📖 How Lobbying Works</Link>
          <Link href="/network" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🕸️ Network Analysis</Link>
        </div>
      </section>

      <SourceCitation sources={['Senate LDA Filings']} lastUpdated="February 2026" />
    </div>
  )
}
