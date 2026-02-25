import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'Data Downloads',
  description: 'Download OpenLobby processed data files. Aggregated federal lobbying data from Senate LDA filings, 2018-2025.',
}

const dataFiles = [
  { name: 'Top Clients', file: 'top-clients.json', desc: 'Top 32,000+ lobbying clients by spending', size: '~4MB' },
  { name: 'Top Firms', file: 'top-firms.json', desc: 'Top 2,000 lobbying firms by income', size: '~500KB' },
  { name: 'Top Lobbyists', file: 'top-lobbyists.json', desc: 'Top 5,000 lobbyists by filing count', size: '~1MB' },
  { name: 'Revolving Door', file: 'revolving-door.json', desc: 'Lobbyists with prior government positions', size: '~1MB' },
  { name: 'Issues', file: 'issue-index.json', desc: 'All 79 LDA issue categories with spending totals', size: '~10KB' },
  { name: 'Industries', file: 'industries.json', desc: 'Spending aggregated by industry sector', size: '~20KB' },
  { name: 'Trends', file: 'trends.json', desc: 'Yearly lobbying totals 2018-2025', size: '~1KB' },
  { name: 'Foreign Entities', file: 'foreign-entities.json', desc: 'Foreign entities involved in US lobbying', size: '~200KB' },
  { name: 'States', file: 'state-index.json', desc: 'Lobbying spending by client state', size: '~5KB' },
  { name: 'Stats', file: 'stats.json', desc: 'Overall summary statistics', size: '~2KB' },
  { name: 'Government Entities', file: 'gov-entities.json', desc: '240 government agencies targeted by lobbyists', size: '~500KB' },
  { name: 'Surge Tracker', file: 'surge-tracker.json', desc: 'Quarter-over-quarter lobbying surges by issue', size: '~50KB' },
  { name: 'Text Analysis', file: 'text-analysis.json', desc: 'Word frequency and bill mentions from lobbying descriptions', size: '~100KB' },
  { name: 'Network Analysis', file: 'network-analysis.json', desc: 'Lobbyist network connections, multi-firm relationships', size: '~200KB' },
  { name: 'Revolving Door Premium', file: 'revolving-door-premium.json', desc: 'Revenue comparison: revolving door vs non-revolving door firms', size: '~20KB' },
  { name: 'Geographic Heatmap', file: 'geographic-heatmap.json', desc: 'Lobbying spending by state with per-capita analysis', size: '~10KB' },
  { name: 'Lobbying vs Contracts', file: 'lobbying-vs-contracts.json', desc: 'Cross-reference of lobbying spend vs federal contract awards', size: '~5KB' },
  { name: 'Client Trajectories', file: 'client-trajectories.json', desc: 'Spending growth paths: exploding, declining, steady clients', size: '~100KB' },
  { name: 'Firm Concentration', file: 'firm-concentration.json', desc: 'HHI analysis, client dependency, issue specialization', size: '~50KB' },
  { name: 'Filing Activity', file: 'filing-activity.json', desc: 'Monthly filing volumes and type breakdowns', size: '~20KB' },
]

export default function DownloadsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Downloads' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Data Downloads</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        All of our processed data is available for download. Built from Senate LDA filings, 2018–2025. 
        Use it for your own analysis — all we ask is a link back.
      </p>

      <div className="space-y-3">
        {dataFiles.map(df => (
          <a
            key={df.file}
            href={`/data/${df.file}`}
            download
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary/30 transition-colors group"
          >
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{df.name}</div>
              <div className="text-sm text-gray-500">{df.desc}</div>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
              <div className="text-xs text-gray-400">{df.size}</div>
              <div className="text-sm text-primary font-medium">⬇ JSON</div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-xl">
        <h2 className="font-semibold mb-2">Raw Source Data</h2>
        <p className="text-sm text-gray-600">
          The raw data comes from the{' '}
          <a href="https://lda.senate.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Senate Lobbying Disclosure Act (LDA)
          </a>{' '}
          filing system. We pull quarterly and semi-annual reports, normalize entity names, and aggregate spending.
        </p>
      </div>

      <SourceCitation sources={['Senate LDA Filings via lda.senate.gov API']} lastUpdated="February 2026" />
    </div>
  )
}
