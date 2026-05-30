import { Metadata } from 'next'
import ClientsPageClient from './ClientsPageClient'

export const metadata: Metadata = {
  title: 'Lobbying Clients Database: 37,994 Organizations Exposed',
  description: 'Search 37,994 lobbying clients ranked by spending. US Chamber of Commerce leads at $608M. Browse Big Pharma, Big Tech, and every organization lobbying Congress (2018-2026).',
}

export default function ClientsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Who are the biggest lobbying clients in America?","acceptedAnswer":{"@type":"Answer","text":"The U.S. Chamber of Commerce is the top lobbying client at over $608M spent since 2018. Other top spenders include the National Association of Realtors, Blue Cross Blue Shield, the American Hospital Association, and the Pharmaceutical Research and Manufacturers of America (PhRMA)."}},{"@type":"Question","name":"How many organizations lobby the federal government?","acceptedAnswer":{"@type":"Answer","text":"OpenLobby tracks 37,994 organizations that have filed lobbying disclosures with the U.S. Senate since 2018, spending a combined $37.7 billion across 726,000+ filings."}},{"@type":"Question","name":"How much does the average lobbying client spend?","acceptedAnswer":{"@type":"Answer","text":"Spending varies enormously. The median client spends around $120,000-$200,000 per year, while the top 100 clients each spend over $10 million annually. The U.S. Chamber of Commerce alone spends more than $75 million per year."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbying Clients Database","description":"37,994 organizations that lobby Congress, with spending data, filing history, and issue breakdowns (2018-2026).","url":"https://www.openlobby.us/clients","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2026","variableMeasured":"Federal lobbying spending"}) }} />
      <ClientsPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Understanding Lobbying Clients</h2>
          <p className="text-gray-600">
            OpenLobby tracks <strong>37,994 organizations</strong> that have filed lobbying disclosures with the U.S. Senate since 2018. 
            These clients collectively spent <strong>$37.7 billion</strong> on federal lobbying across 726,000+ quarterly filings.
          </p>
          <p className="text-gray-600">
            The top spender, the U.S. Chamber of Commerce, has invested over $607 million in lobbying — more than three times the next largest client. 
            Trade associations like the Chamber pool money from thousands of member companies, amplifying their collective influence far beyond what any single company could achieve.
          </p>
          <p className="text-gray-600">
            Click any client to see their full lobbying profile: spending trends, lobbying firms hired, individual lobbyists deployed, 
            issue areas targeted, government agencies contacted, and actual descriptions from their quarterly filings.
          </p>
        </div>
      </div>
    </div>
  )
}
