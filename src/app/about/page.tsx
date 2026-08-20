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
  { name: 'VaccineWatch', url: 'https://www.vaccinewatch.org', desc: '1.98M VAERS adverse event reports analyzed', emoji: '🛡️' },
  { name: 'PermitCore', url: 'https://permitcore.io', desc: 'Construction permit data & building activity intelligence', emoji: '🏗️' },
]

export default function AboutPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is OpenLobby?', acceptedAnswer: { '@type': 'Answer', text: 'OpenLobby is a free, independent data journalism platform that makes federal lobbying data accessible and searchable. We process 726,000+ Senate LDA filings covering $37.7 billion in lobbying spending from 2018-2025.' } },
      { '@type': 'Question', name: 'Where does OpenLobby data come from?', acceptedAnswer: { '@type': 'Answer', text: 'All data comes from the U.S. Senate Lobbying Disclosure Act (LDA) filings, which are public records. Lobbyists are required by law to file quarterly reports disclosing their clients, spending, issues, and activities.' } },
      { '@type': 'Question', name: 'Is OpenLobby free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. OpenLobby has no paywall, no login requirement, and no ads. All processed data is freely downloadable for journalists, researchers, and citizens.' } },
    ],
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

        {/* Our Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Our Mission</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>We believe that in a democracy, citizens have a right to know who is trying to influence their government and how much they&apos;re spending to do it. While lobbying disclosure filings are technically public records, they&apos;re buried in a government database with a terrible search interface that makes meaningful analysis nearly impossible for ordinary people.</p>
            <p>OpenLobby changes that. We download every filing, normalize the data (fixing inconsistent entity names, standardizing amounts, linking lobbyists to clients), and present it in a way that&apos;s genuinely useful. Whether you&apos;re a journalist investigating corporate influence, a researcher studying policy outcomes, or a citizen curious about who&apos;s lobbying your representative — this data is for you.</p>
          </div>
        </div>

        {/* How We're Different */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>How We&apos;re Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Cross-Dataset Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                We don&apos;t just show lobbying data in isolation. Our <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:underline">Lobbying ROI Calculator</Link> cross-references lobbying spending with federal contract awards from USASpending.gov, revealing staggering returns — like the contractor that spent $270K lobbying and received $13.4 billion in contracts.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>AI-Powered Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                We use AI to generate narrative summaries of lobbying trends, identify emerging patterns, and make complex data accessible. Every client, firm, and issue page includes AI-generated analysis that puts the numbers in context.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Influence Scoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Our proprietary <Link href="/methodology" className="text-indigo-600 hover:underline">Influence Score</Link> combines five dimensions — spending, lobbyist count, revolving door connections, issue breadth, and longevity — into a single 0-100 metric that captures total lobbying influence.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Open Data</h3>
              <p className="text-gray-600 leading-relaxed">
                No paywall, no login, no ads. All of our processed data is freely <Link href="/downloads" className="text-indigo-600 hover:underline">downloadable</Link>. We believe transparency tools should be transparent themselves.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>What You Can Do on OpenLobby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Search Clients', desc: 'Look up any company or organization to see their full lobbying history', href: '/clients', emoji: '🔍' },
              { title: 'Track Trends', desc: 'See how lobbying spending has changed over time by year, quarter, and issue', href: '/trends', emoji: '📈' },
              { title: 'Explore Industries', desc: 'Compare lobbying spending across healthcare, tech, defense, and more', href: '/industries', emoji: '🏭' },
              { title: 'Map the Revolving Door', desc: 'Find former government officials who became lobbyists', href: '/revolving-door', emoji: '🚪' },
              { title: 'Follow Foreign Money', desc: 'Track foreign governments and entities lobbying Congress', href: '/foreign', emoji: '🌍' },
              { title: 'Read Investigations', desc: '25+ data-driven articles exposing lobbying patterns', href: '/investigations', emoji: '📰' },
            ].map((f) => (
              <Link key={f.href} href={f.href} className="block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="text-2xl mb-2">{f.emoji}</div>
                <div className="font-bold text-gray-900">{f.title}</div>
                <div className="text-sm text-gray-500 mt-1">{f.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How often is the data updated?', a: 'We update our database as new quarterly filings are published by the Senate Office of Public Records. Most filings are available within a few weeks of the quarterly deadline.' },
              { q: 'Can I use OpenLobby data in my research or reporting?', a: 'Absolutely. All data is public record. We encourage journalists, researchers, and citizens to cite OpenLobby and link back to the relevant pages. Our processed datasets are freely downloadable.' },
              { q: 'How accurate is the lobbying data?', a: 'LDA filings are self-reported by lobbyists. While filing is required by law, the accuracy depends on filer compliance. Income and expense amounts are often rounded. See our methodology page for full details on how we process the data.' },
              { q: 'Does high lobbying spending mean corruption?', a: 'Not necessarily. Lobbying is a legal, constitutionally protected activity. High spending indicates strong interest in influencing policy, but being a top spender doesn\'t imply wrongdoing. Our job is to make the data transparent so citizens can draw their own conclusions.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Transparency */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Transparency About Our Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>No Corporate Funding</h3>
              <p className="text-gray-600 leading-relaxed">
                OpenLobby is not funded by any lobbying firm, trade association, or corporation that appears in our data. We are an independent project within <a href="https://thedataproject.ai" className="text-indigo-600 hover:underline">TheDataProject.ai</a> portfolio, sustained by organic traffic and data journalism.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Non-Partisan Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                We don&apos;t take sides in policy debates. Our job is to show who is lobbying, how much they&apos;re spending, and what they&apos;re lobbying on. Both parties and all industries are covered equally. The data speaks for itself.
              </p>
            </div>
          </div>
        </div>

        {/* Explore CTA */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Start Exploring</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Dive into the data yourself. Search for any company, lobbyist, or issue — or start with our investigations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/search" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">Search All Data →</Link>
            <Link href="/investigations" className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">Read Investigations →</Link>
            <Link href="/how-lobbying-works" className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">How Lobbying Works →</Link>
          </div>
        </div>

        <SourceCitation
          sources={['Senate LDA Filings (lda.senate.gov)', 'Lobbying Disclosure Act Reports']}
          lastUpdated="February 2026"
        />

        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Our Data Pipeline</h2>
          <p className="text-gray-700 leading-relaxed mb-4">OpenLobby ingests lobbying disclosures directly from the Senate&apos;s LDA filing system, processes them through automated pipelines, and makes the data searchable within hours of filing. Our database contains 726,000+ filings spanning 2018-2026, covering every registered lobbyist, client, and issue code in the federal lobbying ecosystem.</p>
          <p className="text-gray-700 leading-relaxed mb-4">We also cross-reference lobbying data with federal contract awards from USASpending.gov to calculate <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:underline">lobbying ROI metrics</Link>, and we track revolving-door connections between government service and lobbying careers. For full details on our data processing approach, see our <Link href="/methodology" className="text-indigo-600 hover:underline">methodology page</Link>.</p>
        </section>

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Why Transparency Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Federal lobbying is a $6 billion industry that shapes every major policy decision in Washington. Yet most citizens have no visibility into who is lobbying their representatives, how much is being spent, or which issues are driving the most activity. OpenLobby exists to close that gap.</p>
          <p className="text-gray-700 leading-relaxed mb-4">We believe that lobbying transparency is a prerequisite for informed citizenship. Whether you think lobbying is a healthy part of democracy or a corrupting influence, you deserve to see the data. Every analysis on this site is free, every dataset is downloadable, and every finding is sourced to official records.</p>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is OpenLobby?", acceptedAnswer: { "@type": "Answer", text: "OpenLobby is a free lobbying transparency platform that tracks federal lobbying activity using official Senate LDA filings. It provides searchable data on 726,000+ lobbying filings, industry analysis, revolving door tracking, and investigative reports — all without paywalls or ads." } },
            { "@type": "Question", name: "Where does OpenLobby get its data?", acceptedAnswer: { "@type": "Answer", text: "All data comes from official U.S. Senate Lobbying Disclosure Act (LDA) filings, supplemented by federal contract data from USASpending.gov. The data is public record and is processed through automated pipelines for accuracy and timeliness." } },
            { "@type": "Question", name: "Is OpenLobby free?", acceptedAnswer: { "@type": "Answer", text: "Yes. OpenLobby is completely free with no paywall, no login required, and no ads. Processed datasets are available for download by journalists, researchers, and citizens." } },
          ]
        }) }} />

        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Part of TheDataProject.ai</h2>
          <p className="text-gray-700 leading-relaxed mb-4">OpenLobby is part of <a href="https://www.thedataproject.ai" className="text-indigo-600 hover:underline">TheDataProject.ai</a>, a portfolio of 60+ data-driven websites aggregating public records across healthcare, transportation, finance, housing, education, and more. Our mission is to make public data accessible and useful for everyone.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Other projects in the portfolio include <a href="https://www.openspending.us" className="text-indigo-600 hover:underline">OpenSpending.us</a> (federal contract tracking), <a href="https://www.nationalhealthratings.com" className="text-indigo-600 hover:underline">NationalHealthRatings.com</a> (healthcare facility data), and <a href="https://www.ppploanlookup.com" className="text-indigo-600 hover:underline">PPPLoanLookup.com</a> (Paycheck Protection Program data).</p>
        </section>

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>For Journalists and Researchers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">OpenLobby is designed to be a resource for investigative journalism and academic research. Our <Link href="/downloads" className="text-indigo-600 hover:underline">downloadable datasets</Link> provide clean, structured data ready for analysis. Our <Link href="/methodology" className="text-indigo-600 hover:underline">methodology</Link> is fully documented so you can verify and extend our work. If you use OpenLobby data in your reporting or research, we&apos;d love to hear about it.</p>
        </section>

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What Makes OpenLobby Different</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Unlike legacy lobbying databases that require expensive subscriptions, OpenLobby is built on a simple principle: public data should be publicly accessible. We don&apos;t just mirror government filings — we process, normalize, and cross-reference them to reveal patterns that raw data cannot show. Our <Link href="/investigations/revolving-door-exposed" className="text-indigo-600 hover:underline">revolving door tracking</Link>, <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:underline">lobbying ROI calculations</Link>, and <Link href="/momentum" className="text-indigo-600 hover:underline">momentum analysis</Link> go beyond simple disclosure to provide genuine insight into how influence works in Washington.</p>
        </section>

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Contact and Feedback</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Found an error in our data? Have a tip for an investigation? Want to collaborate on a research project? We welcome feedback from journalists, researchers, advocacy organizations, and citizens. The best lobbying transparency comes from community engagement with the data.</p>
          <p className="text-gray-700 leading-relaxed mb-4">OpenLobby is continuously updated as new Senate LDA filings become available. Our goal is to be the most comprehensive, accessible, and up-to-date source for federal lobbying data anywhere. Help us get there by exploring, sharing, and building on our work.</p>
        </section>
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
