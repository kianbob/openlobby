import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'OpenLobby is an independent data journalism project making federal lobbying data accessible, searchable, and understandable.',
}

const stats = [
  { value: '726,000+', label: 'Lobbying Filings' },
  { value: '$37.7B', label: 'Total Lobbying' },
  { value: '46,000+', label: 'Clients Tracked' },
  { value: '23,500+', label: 'Lobbyists Profiled' },
  { value: '7,700+', label: 'Firms Analyzed' },
  { value: '25+', label: 'Investigations' },
]

const sisterSites = [
  { name: 'OpenMedicaid', url: 'https://www.openmedicaid.org', desc: '$1.09T in Medicaid spending data', emoji: '🏥' },
  { name: 'OpenMedicare', url: 'https://www.openmedicare.us', desc: '$854B in Medicare payments + AI fraud detection', emoji: '💊' },
  { name: 'OpenFeds', url: 'https://www.openfeds.org', desc: 'Federal workforce data + DOGE impact tracking', emoji: '🏛️' },
  { name: 'OpenSpending', url: 'https://www.openspending.us', desc: 'Federal budget and contractor data', emoji: '💰' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <Breadcrumbs items={[{ name: 'About' }]} />
          <div className="text-center mt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              About OpenLobby
            </h1>
            <p className="text-lg sm:text-xl text-indigo-200 max-w-3xl mx-auto">
              An independent data journalism project making federal lobbying data accessible, searchable, and understandable.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
                <div className="text-indigo-300 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* The Problem */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Problem</h2>
            <p className="text-gray-600 leading-relaxed">
              The Lobbying Disclosure Act requires lobbyists to file quarterly reports with the Senate. These filings are public record — but they&apos;re buried in a government database with a terrible interface. Most people have no idea who&apos;s lobbying their representatives, how much they&apos;re spending, or what they want.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>What We Do</h2>
            <p className="text-gray-600 leading-relaxed">
              We download every lobbying filing from the Senate LDA database, process it, and present it in a way that&apos;s actually useful. Search by client, firm, lobbyist, issue, or keyword. Track spending trends over time. Read our investigations into the most interesting patterns.
            </p>
          </div>

          {/* The Data */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl mb-4">📊</div>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Data</h2>
            <ul className="text-gray-600 space-y-2 leading-relaxed">
              <li><strong>726,000+</strong> lobbying filings (2018–2025)</li>
              <li><strong>46,000+</strong> clients tracked</li>
              <li><strong>23,500+</strong> lobbyists profiled</li>
              <li><strong>7,700+</strong> firms analyzed</li>
              <li><strong>$37.7B</strong> total lobbying income</li>
              <li><strong>$6.0B</strong> spent in 2025 — a record</li>
            </ul>
          </div>
        </div>

        {/* Sister Sites */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: 'var(--font-serif)' }}>Part of TheDataProject</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            OpenLobby is part of <Link href="https://thedataproject.ai" className="text-indigo-600 hover:underline">TheDataProject.ai</Link>, a portfolio of data journalism sites making public government data accessible.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sisterSites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-3">{site.emoji}</div>
                <div className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{site.name}</div>
                <div className="text-sm text-gray-500 mt-1">{site.desc}</div>
              </a>
            ))}
          </div>
        </div>

        <SourceCitation
          sources={['Senate LDA Filings (lda.senate.gov)', 'Lobbying Disclosure Act Reports']}
          lastUpdated="February 2026"
        />
      </div>
    </div>
  )
}
