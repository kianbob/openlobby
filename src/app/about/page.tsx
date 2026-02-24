import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'About OpenLobby',
  description: 'OpenLobby is an independent data journalism project making federal lobbying data accessible, searchable, and understandable.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'About' }]} />
      <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>About OpenLobby</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>OpenLobby is an independent data journalism project that makes federal lobbying data accessible, searchable, and understandable.</p>
        
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Problem</h2>
        <p>The Lobbying Disclosure Act requires lobbyists to file quarterly reports with the Senate. These filings are public record — but they&apos;re buried in a government database with a terrible interface. Most people have no idea who&apos;s lobbying their representatives, how much they&apos;re spending, or what they want.</p>
        
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What We Do</h2>
        <p>We download every lobbying filing from the Senate LDA database, process it, and present it in a way that&apos;s actually useful. You can search by client, firm, lobbyist, issue, or keyword. You can track spending trends over time. And you can read our investigations into the most interesting patterns we find.</p>
        
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Data</h2>
        <ul>
          <li><strong>726,000+</strong> lobbying filings (2018–2025)</li>
          <li><strong>133,000+</strong> unique clients</li>
          <li><strong>87,000+</strong> individual lobbyists</li>
          <li><strong>17,000+</strong> lobbying firms</li>
          <li><strong>$4.4 billion</strong> spent on lobbying in 2024 alone</li>
        </ul>
        
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Part of TheDataProject</h2>
        <p>OpenLobby is part of <a href="https://thedataproject.ai">TheDataProject.ai</a>, a portfolio of data journalism sites that make public government data accessible. Our sister sites include:</p>
        <ul>
          <li><a href="https://www.openmedicaid.org">OpenMedicaid</a> — $1.09T in Medicaid spending</li>
          <li><a href="https://www.openmedicare.us">OpenMedicare</a> — $854B in Medicare payments + AI fraud detection</li>
          <li><a href="https://www.openfeds.org">OpenFeds</a> — Federal workforce data + DOGE impact</li>
          <li><a href="https://www.openspending.us">OpenSpending</a> — Federal budget and contractor data</li>
        </ul>
      </div>

      <SourceCitation 
        sources={['Senate LDA Filings (lda.senate.gov)', 'Lobbying Disclosure Act Reports']}
        lastUpdated="February 2026"
      />
    </div>
  )
}
