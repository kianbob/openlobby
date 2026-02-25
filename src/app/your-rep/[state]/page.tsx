import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import { formatCurrency, formatNumber } from '@/lib/format'

const STATES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
  DC: 'District of Columbia',
}

const SLUG_TO_ABBREV: Record<string, string> = Object.fromEntries(
  Object.entries(STATES).map(([abbrev, name]) => [name.toLowerCase().replace(/\s+/g, '-'), abbrev])
)

const ISSUE_NAMES: Record<string, string> = {
  BUD: 'Budget/Appropriations', HCR: 'Health Issues', TAX: 'Taxation', DEF: 'Defense',
  TRD: 'Trade', MMM: 'Medicare/Medicaid', ENG: 'Energy/Nuclear', TRA: 'Transportation',
  FIN: 'Financial Institutions', ENV: 'Environment', TEC: 'Telecommunications',
  AGR: 'Agriculture', LBR: 'Labor Issues', GOV: 'Government Issues', SCI: 'Science/Technology',
  EDU: 'Education', NAT: 'Natural Resources', BAN: 'Banking', HOM: 'Homeland Security',
  CSP: 'Consumer Issues', CPT: 'Copyright/Patent', AVI: 'Aviation', CPI: 'Computer Industry',
  MAN: 'Manufacturing', IMM: 'Immigration', FOR: 'Foreign Relations', HOU: 'Housing',
  ECN: 'Economics', LAW: 'Law Enforcement', PHA: 'Pharmacy', INS: 'Insurance',
  IND: 'Native American Affairs', VET: 'Veterans', COM: 'Communications',
  MAR: 'Marine/Maritime', CAW: 'Clean Air & Water', MED: 'Media', DIS: 'Disaster Planning',
  FUE: 'Fuel/Gas/Oil', FOO: 'Food Industry', SMB: 'Small Business', RET: 'Retirement',
  UTI: 'Utilities', AUT: 'Automotive', AER: 'Aerospace', URB: 'Urban Development',
}

interface StateData {
  abbreviation: string
  name: string
  totalSpending: number
  totalFilings: number
  clientCount: number
  topClients: { name: string; income: number }[]
  topIssues: { code: string; income: number }[]
  perCapita: number
  population: number
  nationalRank: number
  perCapitaRank: number
}

function getStateData(slug: string): StateData | null {
  const abbrev = SLUG_TO_ABBREV[slug]
  if (!abbrev) return null
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'states', `${abbrev}.json`)
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function getNationalAvgPerCapita(): number {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'geographic-heatmap.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(raw)
    const states = data.states || []
    const totalIncome = states.reduce((s: number, h: { totalIncome: number }) => s + h.totalIncome, 0)
    const totalPop = states.reduce((s: number, h: { population: number }) => s + h.population, 0)
    return totalPop > 0 ? totalIncome / totalPop : 0
  } catch {
    return 0
  }
}

export function generateStaticParams() {
  return Object.values(STATES).map(name => ({
    state: name.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: slug } = await params
  const abbrev = SLUG_TO_ABBREV[slug]
  const name = abbrev ? STATES[abbrev] : null
  if (!name) return { title: 'State Not Found' }
  return {
    title: `Who's Lobbying ${name}? Top Lobbying Clients & Issues`,
    description: `See which companies headquartered in ${name} spend the most lobbying Congress. Explore top clients, issues, and per-capita spending data from Senate LDA filings.`,
    alternates: { canonical: `/your-rep/${slug}` },
  }
}

function titleCase(str: string) {
  return str.toLowerCase().replace(/(?:^|\s|[-/])\w/g, m => m.toUpperCase())
}

export default async function StateRepPage({ params }: { params: Promise<{ state: string }> }) {
  const { state: slug } = await params
  const stateData = getStateData(slug)
  if (!stateData) notFound()

  const nationalAvgPerCapita = getNationalAvgPerCapita()
  const maxPerCapita = Math.max(stateData.perCapita, nationalAvgPerCapita) * 1.2

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Lookup Your Rep', href: '/your-rep' },
        { name: stateData.name },
      ]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Who&apos;s Lobbying {stateData.name}?
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Companies headquartered in {stateData.name} spent {formatCurrency(stateData.totalSpending)} lobbying
        Congress from 2018–2025, with {formatNumber(stateData.clientCount)} unique clients
        filing {formatNumber(stateData.totalFilings)} disclosure reports.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Lobbying" value={formatCurrency(stateData.totalSpending)} />
        <StatCard label="Clients" value={formatNumber(stateData.clientCount)} />
        <StatCard label="Per Capita" value={`$${stateData.perCapita.toFixed(2)}`} />
        <StatCard label="National Rank" value={`#${stateData.nationalRank}`} />
      </div>

      {/* Top Clients */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Top Lobbying Clients from {stateData.name}
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-2 font-medium text-gray-600">#</th>
                <th className="text-left px-4 py-2 font-medium text-gray-600">Client</th>
                <th className="text-right px-4 py-2 font-medium text-gray-600">Total Spending</th>
              </tr>
            </thead>
            <tbody>
              {stateData.topClients.slice(0, 20).map((client, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="px-4 py-2 text-gray-400">{i + 1}</td>
                  <td className="px-4 py-2 font-medium">{titleCase(client.name)}</td>
                  <td className="px-4 py-2 text-right text-indigo-700 font-medium">{formatCurrency(client.income)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Issues */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Top Lobbying Issues in {stateData.name}
        </h2>
        <div className="space-y-3">
          {stateData.topIssues.slice(0, 10).map((issue, i) => {
            const maxIncome = stateData.topIssues[0]?.income || 1
            const pct = (issue.income / maxIncome) * 100
            return (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{ISSUE_NAMES[issue.code] || issue.code}</span>
                  <span className="text-gray-600">{formatCurrency(issue.income)}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-indigo-500 rounded-full h-3" style={{ width: `${pct}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Comparison */}
      {nationalAvgPerCapita > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            How {stateData.name} Compares
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{stateData.name}</span>
                <span className="text-gray-600">${stateData.perCapita.toFixed(2)} per capita</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-indigo-500 rounded-full h-4" style={{ width: `${(stateData.perCapita / maxPerCapita) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">National Average</span>
                <span className="text-gray-600">${nationalAvgPerCapita.toFixed(2)} per capita</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gray-400 rounded-full h-4" style={{ width: `${(nationalAvgPerCapita / maxPerCapita) * 100}%` }} />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {stateData.perCapita > nationalAvgPerCapita
                ? `${stateData.name} spends ${((stateData.perCapita / nationalAvgPerCapita - 1) * 100).toFixed(0)}% more per capita on lobbying than the national average.`
                : `${stateData.name} spends ${((1 - stateData.perCapita / nationalAvgPerCapita) * 100).toFixed(0)}% less per capita on lobbying than the national average.`
              }
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-8 text-white text-center mt-8">
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          Want to know more?
        </h3>
        <p className="text-indigo-100 mb-4">
          Search our database of 27,000+ clients, 2,000+ lobbying firms, and 12,000+ lobbyists.
        </p>
        <Link
          href="/search"
          className="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
        >
          Search the Database →
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/your-rep" className="text-indigo-600 hover:underline text-sm">← All States</Link>
        <span className="text-gray-300">|</span>
        <Link href={`/states/${slug}`} className="text-indigo-600 hover:underline text-sm">
          Full {stateData.name} Profile →
        </Link>
      </div>

      <div className="mt-8">
        <ShareButtons url={`https://www.openlobby.us/your-rep/${slug}`} title={`Who's Lobbying ${stateData.name}? | OpenLobby`} />
      </div>

      <SourceCitation />
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
      <div className="text-2xl font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  )
}
