import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'Methodology — How We Process the Data',
  description: 'How OpenLobby collects, processes, and presents federal lobbying data from Senate LDA filings.',
}

const sections = [
  {
    title: 'Data Source',
    icon: '🏛️',
    color: 'border-indigo-200 bg-indigo-50',
    iconBg: 'bg-indigo-100',
    content: (
      <>
        <p>All data comes from the <a href="https://lda.senate.gov/api/v1/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">Senate Lobbying Disclosure Act (LDA) API</a>, which provides machine-readable access to all lobbying registrations and quarterly activity reports filed since 1999.</p>
        <p className="mt-3">Our dataset covers <strong>2018–2025</strong>, comprising <strong>726,000+ filings</strong> with a total of <strong>$37.7 billion</strong> in reported lobbying income/expenses.</p>
      </>
    ),
  },
  {
    title: 'Data Collection',
    icon: '📥',
    color: 'border-emerald-200 bg-emerald-50',
    iconBg: 'bg-emerald-100',
    content: (
      <>
        <p className="mb-3">We pull all filings from the Senate LDA API in annual batches. Each filing includes:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>Client name, state, and description</li>
          <li>Lobbying firm name</li>
          <li>Individual lobbyist names and former government positions</li>
          <li>Issue categories (79 LDA-defined codes)</li>
          <li>Reported income or expenses</li>
          <li>Foreign entity affiliations</li>
          <li>Filing type (registration or quarterly report)</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Processing Pipeline',
    icon: '⚙️',
    color: 'border-purple-200 bg-purple-50',
    iconBg: 'bg-purple-100',
    content: (
      <>
        <p className="mb-3">Raw filings are processed into aggregated datasets:</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            ['Client aggregation', 'Total spending, yearly trends, associated firms and lobbyists'],
            ['Firm aggregation', 'Total income, client lists, lobbyist rosters'],
            ['Lobbyist profiles', 'Filing counts, client coverage, government positions'],
            ['Issue analysis', 'Spending by issue code, yearly trends, top clients per issue'],
            ['State analysis', 'Spending by client headquarters state'],
            ['Revolving door', 'Lobbyists who disclosed prior government positions'],
            ['Foreign entities', 'Non-US entities disclosed in lobbying filings'],
            ['Text analysis', 'Word frequency and bill mention extraction from descriptions'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white/70 rounded-lg p-3 border border-purple-100">
              <div className="font-semibold text-sm text-gray-900">{title}</div>
              <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Influence Score',
    icon: '⚡',
    color: 'border-amber-200 bg-amber-50',
    iconBg: 'bg-amber-100',
    content: (
      <>
        <p className="mb-3">Our composite Influence Score combines five dimensions:</p>
        <ol className="list-decimal pl-6 space-y-1 text-gray-600">
          <li><strong>Spending:</strong> Total lobbying expenditure</li>
          <li><strong>Lobbyist count:</strong> Number of individual lobbyists deployed</li>
          <li><strong>Revolving door:</strong> Former government officials on the team</li>
          <li><strong>Issue breadth:</strong> Number of different issue categories lobbied on</li>
          <li><strong>Longevity:</strong> Years of continuous lobbying activity</li>
        </ol>
        <p className="mt-3 text-sm text-gray-500">Each dimension is normalized using a power curve (exponent 0.35) against the maximum in the dataset, then averaged into a 0–100 score.</p>
      </>
    ),
  },
  {
    title: 'ROI Calculation',
    icon: '📊',
    color: 'border-green-200 bg-green-50',
    iconBg: 'bg-green-100',
    content: (
      <p>The Lobbying ROI Calculator cross-references lobbying spending with government contract data from <a href="https://www.usaspending.gov" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">USASpending.gov</a>. ROI is calculated as: (Total Contracts Received) / (Total Lobbying Spent). This is <strong>correlational, not causal</strong> — lobbying doesn&apos;t guarantee contracts.</p>
    ),
  },
  {
    title: 'Limitations',
    icon: '⚠️',
    color: 'border-red-200 bg-red-50',
    iconBg: 'bg-red-100',
    content: (
      <ul className="list-disc pl-6 space-y-1 text-gray-600">
        <li>LDA filings are self-reported by lobbyists. Accuracy depends on filer compliance.</li>
        <li>Income/expense amounts are often rounded or estimated.</li>
        <li>Some filings report $0 income (amendment or termination filings).</li>
        <li>Our entity matching (for ROI) uses name similarity and may have false positives/negatives.</li>
        <li>This is journalism, not legal accusation. Being a top spender doesn&apos;t imply wrongdoing.</li>
      </ul>
    ),
  },
  {
    title: 'Open Data',
    icon: '🌐',
    color: 'border-blue-200 bg-blue-50',
    iconBg: 'bg-blue-100',
    content: (
      <p>All processed data is freely available on our <a href="/downloads" className="text-indigo-600 hover:underline font-medium">Downloads page</a>. We encourage journalists, researchers, and citizens to use it for their own analysis.</p>
    ),
  },
]

export default function MethodologyPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <Breadcrumbs items={[{ name: 'Methodology' }]} />
          <div className="text-center mt-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Methodology
            </h1>
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
              How we collect, process, and present federal lobbying data from 726,000+ Senate LDA filings.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className={`rounded-2xl border ${section.color} p-6 sm:p-8`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 ${section.iconBg} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                    {section.title}
                  </h2>
                  <div className="text-gray-700 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SourceCitation
            sources={['Senate LDA Filings (lda.senate.gov)', 'USASpending.gov (contract data)', 'Lobbying Disclosure Act Reports']}
            lastUpdated="February 2026"
          />
        </div>
      </div>
    </div>
  )
}
