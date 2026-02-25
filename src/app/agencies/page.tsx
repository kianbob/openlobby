import { Metadata } from 'next'
import Link from 'next/link'
import { readFileSync } from 'fs'
import { join } from 'path'
import { formatCurrency, formatNumber } from '@/lib/format'

function readJsonFile(filename: string) {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), 'public', 'data', filename), 'utf8'))
  } catch { return null }
}

export const metadata: Metadata = {
  title: 'Government Agencies Targeted by Lobbyists — Who Gets the Most Pressure?',
  description: 'See which federal agencies, departments, and congressional bodies receive the most lobbying pressure. 240 government entities tracked across 726,000+ filings.',
  openGraph: {
    title: 'Government Agencies Targeted by Lobbyists',
    description: '240 federal agencies and their lobbying pressure — from Congress to the EPA.',
  },
}

interface GovEntity {
  name: string
  filings: number
  spending: number
  topIssues: Array<{ code: string; count: number }>
  topClients: Array<{ name: string; spending: number }>
}

const ISSUE_NAMES: Record<string, string> = {
  HCR: 'Healthcare', TAX: 'Taxation', BUD: 'Budget', TRD: 'Trade', DEF: 'Defense',
  ENV: 'Environment', ENE: 'Energy', FIN: 'Finance', TEC: 'Technology', TRA: 'Transportation',
  AGR: 'Agriculture', EDU: 'Education', MMM: 'Medicare/Medicaid', LBR: 'Labor', IMM: 'Immigration',
  CPT: 'Intellectual Property', COM: 'Communications', BNK: 'Banking', CSP: 'Consumer Protection',
  GOV: 'Government Operations', AVI: 'Aviation', INS: 'Insurance', NAT: 'Natural Resources',
  MED: 'Medical Devices', FOO: 'Food', UTI: 'Utilities', HOU: 'Housing', SCI: 'Science',
  RET: 'Retirement', DIS: 'Disaster', SMB: 'Small Business', WAS: 'Waste', GAM: 'Gaming',
  ALC: 'Alcohol', TOB: 'Tobacco', CDT: 'Commodities', ACC: 'Accounting', ADV: 'Advertising',
  AER: 'Aerospace', ANI: 'Animals', APP: 'Apparel', ART: 'Arts', AUT: 'Automotive',
  CAW: 'Clean Air & Water', CIV: 'Civil Rights', DOC: 'District of Columbia',
  ECN: 'Economics', FAM: 'Family', FIR: 'Firearms', FOR: 'Foreign Relations',
  FUE: 'Fuel', IND: 'Indian Affairs', LAW: 'Law Enforcement', MAN: 'Manufacturing',
  MAR: 'Marine', MIA: 'Media', MON: 'Money', PHA: 'Pharmacy', POS: 'Postal',
  REL: 'Religion', ROD: 'Roads', SPO: 'Sports', TAR: 'Tariffs', TON: 'Torts',
  TOU: 'Tourism', URB: 'Urban Development', VET: 'Veterans', WEL: 'Welfare',
}

function slugifyClient(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 80)
}

export default function AgenciesPage() {
  const entities: GovEntity[] = readJsonFile('gov-entities.json') || []

  // Separate Congress from agencies
  const congress = entities.filter(e => 
    e.name === 'HOUSE OF REPRESENTATIVES' || e.name === 'SENATE'
  )
  const agencies = entities.filter(e => 
    e.name !== 'HOUSE OF REPRESENTATIVES' && e.name !== 'SENATE'
  )

  const totalFilings = entities.reduce((s, e) => s + e.filings, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-2">Agency Pressure Analysis</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
          Who Gets Lobbied the Most?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Every lobbying filing must disclose which government entities were contacted.
          Here are all <strong>240 agencies, departments, and offices</strong> that lobbyists
          targeted across {formatNumber(totalFilings)} activity disclosures.
        </p>
      </div>

      {/* Congress Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Congress</h2>
        <p className="text-gray-600 mb-6">
          Nearly every lobbying engagement targets Congress. The House and Senate appear
          in the vast majority of filings — they control legislation and the budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {congress.map(entity => (
            <div key={entity.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl">
                  🏛️
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{entity.name === 'HOUSE OF REPRESENTATIVES' ? 'House of Representatives' : 'Senate'}</h3>
                  <p className="text-sm text-gray-500">{formatNumber(entity.filings)} lobbying activities</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-gray-900">{formatCurrency(entity.spending)}</div>
                  <div className="text-xs text-gray-500">Associated spending</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-gray-900">{entity.topClients.length}+</div>
                  <div className="text-xs text-gray-500">Top clients tracked</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700 mb-2">Top Issues:</div>
                <div className="flex flex-wrap gap-1">
                  {entity.topIssues.slice(0, 6).map(issue => (
                    <Link
                      key={issue.code}
                      href={`/issues/${issue.code}`}
                      className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs hover:bg-indigo-100 transition-colors"
                    >
                      {ISSUE_NAMES[issue.code] || issue.code}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Branch Agencies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
          Executive Branch &amp; Federal Agencies
        </h2>
        <p className="text-gray-600 mb-6">
          Beyond Congress, lobbyists target {agencies.length} executive branch departments,
          independent agencies, and regulatory bodies. These entities write rules, enforce
          regulations, and award contracts.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 text-sm font-semibold text-gray-600">Agency</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 text-right">Lobbying Activities</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 text-right hidden md:table-cell">Associated Spending</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 hidden lg:table-cell">Top Issues</th>
                <th className="pb-3 text-sm font-semibold text-gray-600 hidden lg:table-cell">Top Client</th>
              </tr>
            </thead>
            <tbody>
              {agencies.map((entity, i) => (
                <tr key={entity.name} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 w-6">{i + 1}.</span>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{entity.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-right text-sm font-medium text-gray-900">
                    {formatNumber(entity.filings)}
                  </td>
                  <td className="py-3 text-right text-sm text-gray-600 hidden md:table-cell">
                    {formatCurrency(entity.spending)}
                  </td>
                  <td className="py-3 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {entity.topIssues.slice(0, 3).map(issue => (
                        <span key={issue.code} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                          {ISSUE_NAMES[issue.code] || issue.code}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 hidden lg:table-cell">
                    {entity.topClients[0] && (
                      <Link
                        href={`/clients/${slugifyClient(entity.topClients[0].name)}`}
                        className="text-xs text-amber-700 hover:text-amber-800 truncate block max-w-[200px]"
                      >
                        {entity.topClients[0].name}
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-amber-900 mb-2">💡 Key Insight</h3>
        <p className="text-amber-800 text-sm">
          The White House Office receives more lobbying pressure than any single federal department —
          {' '}{formatNumber(entities.find(e => e.name === 'White House Office')?.filings || 0)} activities
          with {formatCurrency(entities.find(e => e.name === 'White House Office')?.spending || 0)} in
          associated spending. This reflects the executive branch&apos;s growing role in policy through
          executive orders, regulatory guidance, and agency directives.
        </p>
      </div>

      {/* Related */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Related</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/issues" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="font-medium text-gray-900">Browse by Issue</div>
            <div className="text-sm text-gray-500">79 lobbying issue categories</div>
          </Link>
          <Link href="/investigations/doge-vs-lobbying" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="font-medium text-gray-900">DOGE vs. Lobbying</div>
            <div className="text-sm text-gray-500">Government efficiency meets lobbying</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="font-medium text-gray-900">Lobbying Statistics 2025</div>
            <div className="text-sm text-gray-500">The definitive numbers</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
