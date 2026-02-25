import { Metadata } from 'next'
import IssuesPageClient from './IssuesPageClient'

export const metadata: Metadata = {
  title: 'Lobbying Issues — What Congress Gets Lobbied About Most',
  description: 'All 79 federal lobbying issue categories ranked by spending. Healthcare leads at $2.7B+, followed by taxation, budget, trade, and defense. See which industries dominate each issue. 2018-2025 data.',
}

export default function IssuesPage() {
  return (
    <div>
      <IssuesPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>About Lobbying Issues</h2>
          <p className="text-gray-600">
            The Lobbying Disclosure Act defines <strong>79 issue categories</strong> that lobbyists must select when filing their quarterly reports. 
            These categories reveal what industries care about most — and where the most money flows to influence policy.
          </p>
          <p className="text-gray-600">
            <strong>Healthcare (HCR)</strong> dominates all other categories, driven by pharmaceutical companies, hospital systems, and insurance giants 
            fighting over drug pricing, Medicare reimbursement, and regulatory policy. <strong>Taxation</strong> and <strong>Budget</strong> follow closely, 
            as virtually every industry has a stake in tax policy and government spending decisions.
          </p>
          <p className="text-gray-600">
            Click any issue to see top spenders, spending trends, related investigations, and sample lobbying descriptions 
            from actual quarterly filings.
          </p>
        </div>
      </div>
    </div>
  )
}
