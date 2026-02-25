import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pharmaceutical Lobbying: By the Numbers | OpenLobby',
  description: 'Comprehensive data on pharmaceutical and healthcare lobbying spending. See how much Big Pharma spends on lobbying, which companies lead, and what issues they target.',
  keywords: ['pharmaceutical lobbying', 'big pharma lobbying', 'drug company lobbying', 'pharma lobbying spending', 'healthcare lobbying'],
  openGraph: {
    title: 'Pharmaceutical Lobbying: By the Numbers',
    description: 'Data-driven analysis of pharmaceutical industry lobbying — who spends, what they lobby on, and how much influence they buy.',
    url: 'https://www.openlobby.us/pharmaceutical-lobbying',
  },
}

export default function PharmaceuticalLobbyingPage() {
  const pharmaCompanies = [
    { name: 'Pharmaceutical Research & Manufacturers of America (PhRMA)', annualSpend: '$27.5M+', focus: 'Drug pricing, patents, FDA regulation' },
    { name: 'Pfizer Inc.', annualSpend: '$11M+', focus: 'Drug pricing, COVID response, patents' },
    { name: 'Johnson & Johnson', annualSpend: '$8M+', focus: 'Medical devices, drug pricing, product liability' },
    { name: 'Amgen Inc.', annualSpend: '$9M+', focus: 'Biologics, biosimilars, drug pricing' },
    { name: 'AbbVie Inc.', annualSpend: '$7M+', focus: 'Drug pricing, patents, Medicare Part D' },
    { name: 'Merck & Co.', annualSpend: '$7M+', focus: 'Vaccines, drug pricing, FDA regulation' },
    { name: 'Bristol-Myers Squibb', annualSpend: '$7M+', focus: 'Drug pricing, oncology, patents' },
    { name: 'Eli Lilly & Co.', annualSpend: '$6M+', focus: 'Insulin pricing, drug costs, patents' },
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Industry Analysis</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          Pharmaceutical Lobbying: By the Numbers
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          The pharmaceutical industry is consistently the largest lobbying force in Washington.
          Here&apos;s what the data reveals about Big Pharma&apos;s influence machine.
        </p>
      </header>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '$4.4B+', label: 'Total Pharma Lobbying (2018-2025)' },
          { value: '#1', label: 'Highest-Spending Industry' },
          { value: '86,000+', label: 'Healthcare-Related Filings' },
          { value: '7,329', label: 'Healthcare Clients' },
        ].map(s => (
          <div key={s.label} className="bg-blue-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-blue-700" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
            <div className="text-xs text-gray-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Why Pharma Spends More Than Anyone
        </h2>
        <p>
          Healthcare regulation directly impacts pharmaceutical company revenues in ways few other industries experience.
          Drug pricing legislation, FDA approval processes, Medicare/Medicaid reimbursement rates, patent protections,
          and import regulations all have multi-billion-dollar implications for drug makers.
        </p>
        <p>
          The Pharmaceutical Research & Manufacturers of America (PhRMA), the industry&apos;s main trade association,
          alone spends over $27 million annually on lobbying — making it one of the single biggest lobbying entities
          in the entire country. But PhRMA is just the tip of the iceberg.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Top Pharmaceutical Lobbying Spenders
        </h2>
      </div>

      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold">Organization</th>
              <th className="text-right py-3 px-4 font-bold">Annual Spend</th>
              <th className="text-left py-3 px-4 font-bold">Key Focus Areas</th>
            </tr>
          </thead>
          <tbody>
            {pharmaCompanies.map((c) => (
              <tr key={c.name} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{c.name}</td>
                <td className="py-3 px-4 text-right font-bold text-blue-700">{c.annualSpend}</td>
                <td className="py-3 px-4 text-gray-600">{c.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          What Pharma Lobbies On
        </h2>
        <p>
          Using the LDA issue code system, pharmaceutical lobbying filings primarily fall under:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>PHA (Pharmacy):</strong> Drug pricing, prescription costs, pharmacy benefit managers (PBMs)</li>
          <li><strong>HCR (Healthcare):</strong> Medicare, Medicaid, ACA provisions, insurance coverage requirements</li>
          <li><strong>BUD (Budget/Appropriations):</strong> NIH funding, FDA budget, research grants</li>
          <li><strong>MED (Medical Research):</strong> Clinical trials, rare diseases, research funding</li>
          <li><strong>TRD (Trade):</strong> Drug importation, international trade agreements, IP protections</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          The Drug Pricing Battle
        </h2>
        <p>
          The single biggest lobbying issue for pharmaceutical companies has been drug pricing reform.
          When Congress considers legislation to allow Medicare to negotiate drug prices, cap insulin costs,
          or enable drug importation from Canada, pharmaceutical lobbying spending surges dramatically.
        </p>
        <p>
          The Inflation Reduction Act of 2022, which allowed Medicare to negotiate prices on some drugs for the first time,
          triggered one of the most intense lobbying campaigns in recent history. Our data shows significant spending spikes
          in the quarters surrounding the bill&apos;s passage.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Pharma&apos;s Revolving Door
        </h2>
        <p>
          The pharmaceutical industry is one of the heaviest users of the revolving door. Former FDA officials,
          HHS staffers, and congressional health committee aides frequently move to lobbying roles at drug companies
          and trade associations. Our data tracks these movements across the industry — see the{' '}
          <Link href="/revolving-door" className="text-indigo-600 hover:text-indigo-800 font-semibold">full revolving door analysis</Link>.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Explore the Data Yourself
        </h2>
        <p>
          All of the data behind this analysis is available on OpenLobby. Search for any pharmaceutical company,
          view their lobbying filings quarter by quarter, see which lobbyists work for them, and track their spending over time.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        <Link href="/issues/PHA" className="block p-5 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition-colors">
          <div className="font-bold text-blue-700" style={{ fontFamily: 'var(--font-serif)' }}>Pharmacy Issue</div>
          <p className="text-sm text-gray-600 mt-1">All PHA-coded filings</p>
        </Link>
        <Link href="/issues/HCR" className="block p-5 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition-colors">
          <div className="font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>Healthcare Issue</div>
          <p className="text-sm text-gray-600 mt-1">All HCR-coded filings</p>
        </Link>
        <Link href="/investigations/big-pharma-lobbying" className="block p-5 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors">
          <div className="font-bold text-amber-700" style={{ fontFamily: 'var(--font-serif)' }}>Full Investigation</div>
          <p className="text-sm text-gray-600 mt-1">Big Pharma deep-dive</p>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Dive Deeper</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/investigations/healthcare-3-billion-bet" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏥 Healthcare&apos;s $3B Bet</div>
            <div className="text-xs text-gray-500 mt-1">The healthcare industry&apos;s massive investment</div>
          </Link>
          <Link href="/investigations/lobbying-vs-contracts" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Lobbying vs. Contracts</div>
            <div className="text-xs text-gray-500 mt-1">Does lobbying translate to government contracts?</div>
          </Link>
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
            <div className="text-xs text-gray-500 mt-1">Is pharma lobbying surging or declining?</div>
          </Link>
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
            <div className="text-xs text-gray-500 mt-1">Compare pharma to other industries</div>
          </Link>
          <Link href="/industries" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏭 All Industries</div>
            <div className="text-xs text-gray-500 mt-1">Cross-industry comparison</div>
          </Link>
          <Link href="/how-lobbying-works" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📖 How Lobbying Works</div>
            <div className="text-xs text-gray-500 mt-1">The complete guide</div>
          </Link>
        </div>
      </div>
    </article>
  )
}
