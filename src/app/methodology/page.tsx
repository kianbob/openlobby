import { Metadata } from 'next'
import Link from 'next/link'
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

        {/* Additional methodology sections */}
        <div className="space-y-6 mt-8">
          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🔗</div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Entity Resolution</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>One of the biggest challenges in lobbying data is that the same entity can appear under different names across filings. &quot;Alphabet Inc.&quot;, &quot;Google LLC&quot;, and &quot;Google Inc.&quot; might all refer to the same parent organization. Similarly, lobbying firms may change names after mergers.</p>
                  <p className="mt-3">We use a combination of exact matching, fuzzy string matching (Levenshtein distance), and manual review to link related entities. Our client database consolidates <strong>46,000+ unique client names</strong> into normalized profiles, though some edge cases may remain.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-pink-200 bg-pink-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🤖</div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>AI-Generated Content</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>AI-generated summaries and analysis appear on client pages, industry overviews, and investigation articles. These are clearly labeled and are generated from the underlying data — not from external sources. All factual claims in AI summaries are verifiable against the raw filing data available on each page.</p>
                  <p className="mt-3">Our AI analysis uses Claude (Anthropic) to generate narrative context for lobbying trends, spending patterns, and revolving door connections. These summaries help make complex data accessible but should not be treated as legal or investigative conclusions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📅</div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Update Frequency</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>Lobbying filings are due quarterly: January 20 (Q4 of prior year), April 20 (Q1), July 20 (Q2), and October 20 (Q3). Filers often submit late — some filings trickle in weeks or months after the deadline.</p>
                  <p className="mt-3">We process new filings in batches as they become available through the Senate API. Our database typically reflects filings within 2-4 weeks of their publication. Historical data is periodically reprocessed to incorporate amendments and corrections filed by lobbyists.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🛡️</div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Editorial Standards</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>OpenLobby is a data journalism project, not a legal or investigative authority. We present publicly available data in accessible formats with contextual analysis. Our investigations highlight patterns and correlations but do not accuse any individual or organization of wrongdoing.</p>
                  <p className="mt-3">All lobbying activity shown on this site is <strong>legal</strong> and <strong>disclosed under federal law</strong>. High spending does not imply corruption. Our goal is transparency — giving citizens the tools to understand who is trying to influence their government.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Where does OpenLobby data come from?", acceptedAnswer: { "@type": "Answer", text: "All data comes from the U.S. Senate Lobbying Disclosure Act (LDA) API, which provides machine-readable access to all lobbying registrations and quarterly activity reports. Our dataset covers 2018-2025, comprising 726,000+ filings totaling $37.7 billion." } },
            { "@type": "Question", name: "How is the Influence Score calculated?", acceptedAnswer: { "@type": "Answer", text: "The Influence Score combines five dimensions: spending (total lobbying expenditure), lobbyist count, revolving door connections (former government officials), issue breadth (number of different issue categories), and longevity (years of continuous activity). Each is normalized using a power curve and averaged into a 0-100 score." } },
            { "@type": "Question", name: "How does the Lobbying ROI Calculator work?", acceptedAnswer: { "@type": "Answer", text: "The ROI Calculator cross-references lobbying spending with government contract data from USASpending.gov. ROI = Total Contracts Received / Total Lobbying Spent. This is correlational, not causal — lobbying doesn't guarantee contracts." } },
            { "@type": "Question", name: "How accurate is the lobbying data?", acceptedAnswer: { "@type": "Answer", text: "LDA filings are self-reported by lobbyists. Accuracy depends on filer compliance. Income/expense amounts are often rounded or estimated. Some filings report $0 (amendment or termination filings). Entity matching for ROI uses name similarity and may have false positives/negatives." } },
          ]
        }) }} />

        {/* Related Links */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
              <div className="text-xs text-gray-500 mt-1">See all top lobbying spenders</div>
            </Link>
            <Link href="/firms" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">🏢 Top Firms</div>
              <div className="text-xs text-gray-500 mt-1">Leading lobbying firms</div>
            </Link>
            <Link href="/revolving-door" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">🚪 Revolving Door</div>
              <div className="text-xs text-gray-500 mt-1">Former officials now lobbying</div>
            </Link>
            <Link href="/lobbying-vs-contracts" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">💰 ROI Calculator</div>
              <div className="text-xs text-gray-500 mt-1">Lobbying spend vs. contracts received</div>
            </Link>
            <Link href="/downloads" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">📥 Download Data</div>
              <div className="text-xs text-gray-500 mt-1">Get the raw datasets</div>
            </Link>
            <Link href="/investigations" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">📰 Investigations</div>
              <div className="text-xs text-gray-500 mt-1">Data-driven articles</div>
            </Link>
          </div>
        </div>

        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Freshness and Update Schedule</h2>
          <div className="prose prose-lg max-w-none">
            <p>Lobbying filings are due quarterly: January 20 (Q4 of prior year), April 20 (Q1), July 20 (Q2), and October 20 (Q3). OpenLobby ingests new filings within hours of their appearance in the Senate&apos;s system. Late filings and amendments are captured in subsequent processing runs. Our database reflects the most current available data at all times.</p>
            <p>Federal contract data from USASpending.gov is updated monthly. ROI calculations on the <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:underline">lobbying vs. contracts page</Link> use the latest available contract data paired with cumulative lobbying disclosures.</p>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How does OpenLobby process lobbying data?", acceptedAnswer: { "@type": "Answer", text: "OpenLobby ingests official Senate LDA filings through automated pipelines, normalizes organization names and issue codes, calculates spending aggregates, and cross-references with federal contract data from USASpending.gov. The database contains 726,000+ filings from 2018-2026." } },
            { "@type": "Question", name: "How often is the lobbying data updated?", acceptedAnswer: { "@type": "Answer", text: "Lobbying filings are due quarterly (January, April, July, October). OpenLobby processes new filings within hours of their appearance in the Senate system. Late filings and amendments are captured in subsequent runs." } },
            { "@type": "Question", name: "What are the limitations of LDA data?", acceptedAnswer: { "@type": "Answer", text: "LDA data captures only registered lobbying above disclosure thresholds. Shadow lobbying (strategic consulting below the 20% time threshold), grassroots campaigns, and think tank funding are not captured. Spending figures are self-reported and rounded to the nearest $10,000." } },
          ]
        }) }} />

        <div className="mt-12">
          <SourceCitation
            sources={['Senate LDA Filings (lda.senate.gov)', 'USASpending.gov (contract data)', 'Lobbying Disclosure Act Reports']}
            lastUpdated="February 2026"
          />
        </div>
      </div>
          {/* Data Notes */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Notes &amp; Methodology</h2>
        <p className="text-gray-600 mb-3">
          All data on this page is sourced from Senate Office of Public Records lobbying disclosure filings
          under the Lobbying Disclosure Act of 1995. Figures reflect reported spending as filed and may be
          subject to amendment. Quarterly totals are annualized where noted.
        </p>
        <p className="text-gray-600 mb-3">
          Industry classifications follow the Center for Responsive Politics methodology. Where companies
          operate across multiple sectors, spending is attributed to the primary business classification.
          Foreign entity designations follow FARA and LDA Section 4 definitions.
        </p>
        <p className="text-gray-600 mb-3">
          Year-over-year comparisons use inflation-adjusted figures (2026 dollars) unless otherwise noted.
          Historical data extends back to 1998 when electronic filing became mandatory.
        </p>
        <p className="text-gray-600">
          For questions about our data or methodology, see our{' '}
          <a href="/methodology" className="text-blue-600 hover:underline">full methodology page</a> or{' '}
          <a href="/about" className="text-blue-600 hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  )
}
