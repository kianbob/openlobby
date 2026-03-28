import { Metadata } from 'next'
import IssuesPageClient from './IssuesPageClient'

export const metadata: Metadata = {
  title: 'The 79 Issues Congress Gets Lobbied On Most — Healthcare Leads at $2.7B',
  description: 'Every issue lobbied in Congress, ranked by spending. Healthcare: $2.7B. Taxation: $2.1B. Defense: $1.8B. See which corporations dominate each policy battle (2018-2025).',
}

export default function IssuesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbying Issues Database","description":"79 lobbying issue categories ranked by spending, with industry breakdowns and trend data (2018-2025).","url":"https://www.openlobby.us/issues","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2025","variableMeasured":"Federal lobbying spending"}) }} />
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
