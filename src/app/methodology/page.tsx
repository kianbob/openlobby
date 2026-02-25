import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Methodology — How We Process the Data | OpenLobby',
  description: 'How OpenLobby collects, processes, and presents federal lobbying data from Senate LDA filings.',
}

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Methodology' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Methodology</h1>
      <p className="text-gray-600 mb-8">How we collect, process, and present federal lobbying data.</p>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Data Source</h2>
          <p>All data comes from the <a href="https://lda.senate.gov/api/v1/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Senate Lobbying Disclosure Act (LDA) API</a>, which provides machine-readable access to all lobbying registrations and quarterly activity reports filed since 1999.</p>
          <p>Our dataset covers <strong>2018–2025</strong>, comprising <strong>650,333 filings</strong> with a total of <strong>$15.2 billion</strong> in reported lobbying income/expenses.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Data Collection</h2>
          <p>We pull all filings from the Senate LDA API in annual batches. Each filing includes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Client name, state, and description</li>
            <li>Lobbying firm name</li>
            <li>Individual lobbyist names and former government positions</li>
            <li>Issue categories (79 LDA-defined codes)</li>
            <li>Reported income or expenses</li>
            <li>Foreign entity affiliations</li>
            <li>Filing type (registration or quarterly report)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Processing</h2>
          <p>Raw filings are processed into aggregated datasets:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Client aggregation:</strong> Total spending, yearly trends, associated firms and lobbyists</li>
            <li><strong>Firm aggregation:</strong> Total income, client lists, lobbyist rosters</li>
            <li><strong>Lobbyist profiles:</strong> Filing counts, client coverage, government positions</li>
            <li><strong>Issue analysis:</strong> Spending by issue code, yearly trends, top clients per issue</li>
            <li><strong>State analysis:</strong> Spending by client headquarters state</li>
            <li><strong>Revolving door:</strong> Lobbyists who disclosed prior government positions</li>
            <li><strong>Foreign entities:</strong> Non-US entities disclosed in lobbying filings</li>
            <li><strong>Text analysis:</strong> Word frequency and bill mention extraction from lobbying descriptions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Influence Score</h2>
          <p>Our composite Influence Score combines five dimensions:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Spending:</strong> Total lobbying expenditure</li>
            <li><strong>Lobbyist count:</strong> Number of individual lobbyists deployed</li>
            <li><strong>Revolving door:</strong> Former government officials on the team</li>
            <li><strong>Issue breadth:</strong> Number of different issue categories lobbied on</li>
            <li><strong>Longevity:</strong> Years of continuous lobbying activity</li>
          </ol>
          <p>Each dimension is normalized using a power curve (exponent 0.35) against the maximum in the dataset, then averaged into a 0–100 score.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>ROI Calculation</h2>
          <p>The Lobbying ROI Calculator cross-references lobbying spending with government contract data from <a href="https://www.usaspending.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">USASpending.gov</a>. ROI is calculated as: (Total Contracts Received) / (Total Lobbying Spent). This is correlational, not causal — lobbying doesn&apos;t guarantee contracts.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Limitations</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>LDA filings are self-reported by lobbyists. Accuracy depends on filer compliance.</li>
            <li>Income/expense amounts are often rounded or estimated.</li>
            <li>Some filings report $0 income (amendment or termination filings).</li>
            <li>Our entity matching (for ROI) uses name similarity and may have false positives/negatives.</li>
            <li>This is journalism, not legal accusation. Being a top spender doesn&apos;t imply wrongdoing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Open Data</h2>
          <p>All processed data is freely available on our <a href="/downloads" className="text-primary hover:underline">Downloads page</a>. We encourage journalists, researchers, and citizens to use it for their own analysis.</p>
        </section>
      </div>
    </div>
  )
}
