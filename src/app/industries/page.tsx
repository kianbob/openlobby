import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ShareButtons from '@/components/ShareButtons'
import { formatCurrency, formatNumber } from '@/lib/format'

export const metadata: Metadata = {
  title: 'Lobbying Spending by Industry: Rankings & Data',
  description: 'Compare lobbying spending across every industry. Healthcare leads at $4.4B, finance $2.1B, tech $1.8B, energy $1.6B. Interactive charts from 726K+ filings (2018-2026).',
}

const INDUSTRY_LABELS: Record<string, string> = {
  technology: 'Technology',
  healthcare: 'Healthcare',
  defense: 'Defense',
  energy: 'Energy',
  finance: 'Finance',
  agriculture: 'Agriculture',
  transportation: 'Transportation',
  telecom: 'Telecommunications',
  'real-estate': 'Real Estate',
  education: 'Education',
}

const INDUSTRY_ICONS: Record<string, string> = {
  technology: '💻', healthcare: '🏥', defense: '🛡️', energy: '⚡',
  finance: '🏦', agriculture: '🌾', transportation: '🚛', telecom: '📡',
  'real-estate': '🏠', education: '🎓',
}

interface IndustrySummary {
  industry: string
  totalSpending: number
  clientCount: number
  filings: number
}

function getData(): IndustrySummary[] {
  try {
    const data: IndustrySummary[] = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'industry-summary.json'), 'utf-8'))
    return data.sort((a, b) => b.totalSpending - a.totalSpending)
  } catch { return [] }
}

export default function IndustriesPage() {
  const industries = getData()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Which industry spends the most on lobbying?', acceptedAnswer: { '@type': 'Answer', text: 'Healthcare is the top lobbying industry at $4.4 billion since 2018, followed by finance ($2.1B), technology ($1.8B), and energy ($1.6B). Healthcare lobbying covers drug pricing, insurance regulation, and Medicare/Medicaid policy.' } },
      { '@type': 'Question', name: 'How much does the tech industry spend on lobbying?', acceptedAnswer: { '@type': 'Answer', text: 'The technology industry has spent approximately $1.8 billion on federal lobbying since 2018. Major spenders include Google, Meta, Amazon, Apple, and Microsoft, lobbying on issues like antitrust, AI regulation, and data privacy.' } },
      { '@type': 'Question', name: 'How much total lobbying spending is there by industry?', acceptedAnswer: { '@type': 'Answer', text: 'Total federal lobbying spending across all industries exceeds $37.7 billion from 2018-2026. This covers 726,000+ quarterly filings from 37,994 clients across healthcare, finance, technology, energy, defense, and dozens of other sectors.' } },
    ],
  }

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadcrumbJsonLd items={[{ name: 'Industries' }]} />
      <Breadcrumbs items={[{ name: 'Industries' }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by Industry</h1>
      <p className="text-gray-500 mb-4">Which sectors spend the most to influence Washington?</p>

      <ShareButtons url="https://www.openlobby.us/industries" title="Federal lobbying spending by industry — OpenLobby" />

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8 mt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Federal lobbying is dominated by a handful of industries with the most at stake in government policy. Healthcare and technology lead all sectors, each spending over $6 billion on lobbying. These 10 industry categories cover the major sectors actively working to shape federal legislation and regulation.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {industries.map((ind, i) => {
          const slug = ind.industry
          const label = INDUSTRY_LABELS[slug] || slug
          const icon = INDUSTRY_ICONS[slug] || '🏢'
          return (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="text-3xl">{icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 font-mono">#{i + 1}</span>
                  <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{label}</h2>
                </div>
                <div className="flex gap-4 mt-1 text-sm text-gray-500">
                  <span>{formatNumber(ind.clientCount)} clients</span>
                  <span>{formatNumber(ind.filings)} filings</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatCurrency(ind.totalSpending)}</div>
                <div className="text-xs text-gray-400">total spending</div>
              </div>
            </Link>
          )
        })}
      </div>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">Industry-by-industry breakdown</div>
          </Link>
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
            <div className="text-xs text-gray-500 mt-1">Industries battling over the same issues</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
            <div className="text-xs text-gray-500 mt-1">Where industry lobbying dollars go</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/tech-lobbying" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">💻 Tech Lobbying</Link>
          <Link href="/pharmaceutical-lobbying" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">💊 Pharma Lobbying</Link>
          <Link href="/defense-lobbying" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🛡️ Defense Lobbying</Link>
          <Link href="/issues" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📋 All Issues</Link>
          <Link href="/revolving-door" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🚪 Revolving Door</Link>
          <Link href="/compare-spending" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">💰 Spending Comparisons</Link>
          <Link href="/lobbying-statistics-2026" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📊 2026 Statistics</Link>
        </div>
      </section>

      {/* Extended prose content */}
      <div className="prose prose-lg max-w-none mt-8 mb-12">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Industry Lobbying Trends in 2026</h2>

        <p>
          Federal lobbying spending continues to set records in 2026, driven by a convergence of regulatory pressure, legislative battles, and economic uncertainty. Through the first half of 2026, total lobbying spending is on pace to exceed <strong>$6.4 billion</strong> for the year — the highest annual total in the history of the Lobbying Disclosure Act.
        </p>

        <p>
          The growth is not uniform across industries. While healthcare and technology continue to dominate total spending, the fastest growth rates are coming from newer lobbying categories: artificial intelligence companies, cryptocurrency firms, and electric vehicle manufacturers are all dramatically expanding their Washington presence. AI-related lobbying alone has grown <strong>780% since 2022</strong>, as companies race to shape the regulatory framework that will govern this transformative technology.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Healthcare: The Perennial Leader</h3>

        <p>
          Healthcare has been the top lobbying industry for over two decades, and 2026 is no exception. With $4.4 billion in cumulative spending since 2018, the healthcare sector lobbies on everything from drug pricing and Medicare reimbursement rates to telehealth regulations and clinical trial requirements. The <Link href="/pharmaceutical-lobbying" className="text-indigo-600 hover:text-indigo-800">pharmaceutical industry</Link> accounts for the largest share, but hospitals, insurers, medical device manufacturers, and physician groups all maintain significant lobbying operations.
        </p>

        <p>
          The healthcare lobbying surge in 2026 is driven by several active legislative battles: proposed drug pricing reforms, Medicaid work requirements, insurance marketplace subsidies, and FDA approval pathway changes. Each of these issues has billions of dollars at stake for affected companies, making aggressive lobbying a rational investment.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Technology: The Fastest-Growing Sector</h3>

        <p>
          The <Link href="/tech-lobbying" className="text-indigo-600 hover:text-indigo-800">technology industry</Link> has undergone a remarkable transformation in Washington. A decade ago, Silicon Valley was known for its disdain of politics. Today, tech companies are among the most sophisticated and well-funded lobbying operations in the capital. Google, Meta, Amazon, Apple, and Microsoft each maintain lobbying budgets exceeding $15 million annually, with additional spending through trade associations like the Internet Association, TechNet, and the Chamber of Progress.
        </p>

        <p>
          The issues driving tech lobbying in 2026 include AI regulation, data privacy legislation (the American Data Privacy and Protection Act remains in active negotiation), antitrust enforcement, Section 230 reform, and content moderation standards. Tech companies are also heavily engaged on immigration policy, supporting H-1B visa programs that supply their workforce, and on international trade, opposing restrictions on data flows and technology exports.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Defense: The Revolving Door Industry</h3>

        <p>
          <Link href="/defense-lobbying" className="text-indigo-600 hover:text-indigo-800">Defense lobbying</Link> is unique in its reliance on the <Link href="/revolving-door" className="text-indigo-600 hover:text-indigo-800">revolving door</Link>. Over 780 former Pentagon officials are active defense lobbyists, and the sector’s spending in 2026 is on pace to hit $380 million. Defense lobbying is highly concentrated among a handful of prime contractors — Lockheed Martin, RTX (Raytheon), Boeing, Northrop Grumman, and General Dynamics — who collectively account for over 40% of sector spending.
        </p>

        <p>
          The defense lobbying landscape is shaped by the annual National Defense Authorization Act (NDAA) and defense appropriations bills, which together determine hundreds of billions in military spending. Individual weapons programs, base realignments, and foreign military sales are all intensely lobbied, with contractors deploying teams of former generals, admirals, and senior Pentagon civilians to make their case.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Energy: The Climate Battleground</h3>

        <p>
          Energy industry lobbying reflects the ongoing clash between fossil fuel interests and clean energy advocates. Oil and gas companies, led by ExxonMobil, Chevron, and the American Petroleum Institute, lobby to preserve favorable tax treatment, oppose emissions regulations, and expand drilling access on federal lands. Meanwhile, renewable energy companies, EV manufacturers, and clean energy trade associations lobby for tax credits, grid modernization funding, and emissions standards.
        </p>

        <p>
          In 2026, energy lobbying is intensified by debates over the future of the Inflation Reduction Act’s clean energy tax credits, proposed EPA emissions standards for power plants and vehicles, and permitting reform that affects both fossil fuel and renewable energy projects. The sector spent $1.6 billion on lobbying from 2018–2025, with 2026 spending on pace to set a new annual record.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Finance: Regulation and Deregulation</h3>

        <p>
          The financial services industry — banks, insurers, asset managers, private equity firms, and fintech companies — has spent $2.1 billion on lobbying since 2018. Financial lobbying ebbs and flows with regulatory cycles: spending surges when new regulations are proposed and decreases during periods of deregulation.
        </p>

        <p>
          In 2026, financial industry lobbying is focused on capital requirements (the Basel III Endgame rules), cryptocurrency regulation, climate-related financial disclosure rules, and consumer lending standards. The rise of fintech and digital assets has brought a wave of new lobbying clients into Washington, including crypto exchanges, stablecoin issuers, and decentralized finance protocols.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Emerging Sectors</h3>

        <p>
          Several emerging sectors are rapidly scaling their Washington operations. Artificial intelligence companies — including OpenAI, Anthropic, Google DeepMind, and numerous AI startups — have collectively increased lobbying spending from under $5 million in 2022 to over $44 million in 2026, as Congress considers comprehensive AI legislation.
        </p>

        <p>
          The cannabis industry, as legalization spreads at the state level, has expanded federal lobbying to push for banking access (the SAFE Banking Act), descheduling, and interstate commerce rules. Space and satellite companies, including SpaceX, Blue Origin, and satellite internet providers, lobby on spectrum allocation, launch licensing, and space debris regulations.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Concentration Problem</h3>

        <p>
          Across every industry, lobbying spending is highly concentrated. In healthcare, the top 20 clients account for 35% of sector spending. In technology, the top 5 companies (Google, Meta, Amazon, Apple, Microsoft) account for over 40%. In defense, the top 5 contractors account for over 40%. This concentration means that industry lobbying agendas are often set by the largest companies, whose interests may diverge significantly from smaller firms in the same sector.
        </p>

        <p>
          The <Link href="/compare-spending" className="text-indigo-600 hover:text-indigo-800">spending comparisons</Link> page puts these numbers in context — comparing industry lobbying spending to teacher salaries, NASA’s budget, and small-town budgets to illustrate the scale of corporate influence on American policy.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How to Use This Data</h3>

        <p>
          Click any industry card above to see detailed spending breakdowns, top clients, lobbying issues, and historical trends for that sector. Each industry page includes searchable data, downloadable datasets, and links to individual client profiles and lobbying filings. Use the <Link href="/investigations/lobbying-statistics" className="text-indigo-600 hover:text-indigo-800">Lobbying Statistics</Link> investigation for cross-industry analysis, or explore the <Link href="/investigations/issue-arms-race" className="text-indigo-600 hover:text-indigo-800">Issue Arms Race</Link> to see which industries are battling over the same policy questions.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Cross-Industry Dynamics</h3>

        <p>
          Industries don’t lobby in isolation. Many of the most consequential policy battles involve multiple industries lobbying on the same issue from different sides. Data privacy legislation pits the technology industry against consumer advocacy groups, publishers, and telecommunications companies. Drug pricing reform creates tensions between pharmaceutical companies, insurers, hospitals, and pharmacy benefit managers — all within the broader healthcare sector.
        </p>

        <p>
          The <Link href="/investigations/issue-arms-race" className="text-indigo-600 hover:text-indigo-800">Issue Arms Race</Link> investigation tracks these multi-industry policy battles, showing which sectors are spending the most on competing lobbying campaigns and how policy outcomes correlate with relative spending levels.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Small Business Gap</h3>

        <p>
          One of the most striking patterns in industry lobbying data is the gap between large corporations and small businesses. The top 100 lobbying clients — all large corporations or major trade associations — account for roughly <strong>28% of all federal lobbying spending</strong>. Small businesses, which employ nearly half of the private-sector workforce, are almost entirely absent from the lobbying landscape. The National Federation of Independent Business (NFIB) is the only major small business lobbying group, and its annual spending of approximately $8 million is dwarfed by individual Fortune 500 companies.
        </p>

        <p>
          This imbalance means that federal policy is disproportionately shaped by the interests of large corporations. Tax policy, regulatory standards, trade agreements, and government procurement rules are all influenced by lobbying spending that overwhelmingly represents big business. For a deeper look at how spending translates to policy outcomes, explore our <Link href="/investigations/follow-the-money" className="text-indigo-600 hover:text-indigo-800">Follow the Money</Link> investigation.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Methodology and Data Sources</h3>

        <p>
          Industry classifications on this page are derived from OpenLobby’s proprietary taxonomy, which maps each lobbying client to a primary industry based on their business activities, SIC/NAICS codes, and the issues they lobby on. Spending totals are aggregated from quarterly LD-2 filings submitted under the Lobbying Disclosure Act for the period 2018–2026. Client counts reflect unique organizations that have filed at least one lobbying disclosure during this period. Filing counts represent individual quarterly LD-2 submissions. For questions about our methodology or to request custom industry analyses, visit our <Link href="/lobbying-statistics-2026" className="text-indigo-600 hover:text-indigo-800">2026 Statistics page</Link>.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Agriculture and Food: The Quiet Giant</h3>

        <p>
          Agricultural lobbying receives less media attention than healthcare or technology, but it represents a substantial and influential sector. Farm organizations, food processors, pesticide manufacturers, seed companies, and agricultural commodity groups collectively spend hundreds of millions on federal lobbying. Key issues include farm bill reauthorization, crop insurance subsidies, trade agreements affecting agricultural exports, and environmental regulations on water use, pesticide application, and livestock operations.
        </p>

        <p>
          The agricultural lobby is notable for its geographic concentration. Unlike tech or finance lobbying, which is dominated by a handful of coastal companies, agricultural lobbying draws from rural districts across the country. This geographic breadth gives the farm lobby disproportionate influence in the Senate, where rural states have equal representation, and in the House, where agricultural districts span both parties.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Transportation and Infrastructure</h3>

        <p>
          The transportation sector — including airlines, railroads, trucking companies, automakers, and infrastructure firms — lobbies heavily on appropriations bills, safety regulations, and environmental standards. The 2021 Infrastructure Investment and Jobs Act triggered a surge in transportation lobbying as companies competed for project funding and sought favorable regulatory interpretations. In 2026, ongoing implementation of that law continues to drive lobbying spending, with companies lobbying for favorable grant criteria, permitting timelines, and Buy America waiver decisions.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Telecommunications: Spectrum and Broadband</h3>

        <p>
          Telecom lobbying is dominated by a small number of major carriers — AT&amp;T, Verizon, T-Mobile, and Comcast — along with cable companies, satellite operators, and broadband providers. Key issues include spectrum allocation, broadband deployment subsidies, net neutrality rules, and universal service fund reform. The telecom sector’s lobbying is notable for its technical complexity: many of the issues require specialized knowledge of radio engineering, network architecture, and regulatory precedent that few non-industry participants possess.
        </p>

        <p>
          For a comprehensive look at how lobbying spending translates into policy outcomes across all industries, visit our <Link href="/compare-spending" className="text-indigo-600 hover:text-indigo-800">Spending Comparisons</Link> page, which puts these billions in relatable context.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Real Estate and Construction</h3>

        <p>
          The real estate industry lobbies on tax policy (particularly the mortgage interest deduction, 1031 exchanges, and opportunity zones), housing finance reform, zoning and land-use regulations, and environmental compliance. The National Association of Realtors (NAR) is consistently among the top 10 lobbying spenders in Washington, investing over $40 million annually to protect favorable tax treatment and oppose regulations that could increase housing costs.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Education: A Growing Voice</h3>

        <p>
          Education lobbying encompasses universities, for-profit colleges, student loan servicers, textbook publishers, and education technology companies. Key issues include federal student aid policy, Title IX regulations, research funding, and accreditation standards. Higher education institutions lobby heavily during appropriations season to protect federal research grants, which fund a significant share of academic research. The for-profit college sector has also been a major lobbying force, spending tens of millions to oppose regulations targeting predatory enrollment practices.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Industry Lobbying and the Public Interest</h3>

        <p>
          The question underlying all industry lobbying data is whether this spending serves the public interest. Industry advocates argue that lobbying provides essential information to lawmakers who cannot be experts in every field. Critics counter that the sheer scale of corporate lobbying drowns out the voices of ordinary citizens and public interest groups, creating a policy environment that systematically favors wealthy, organized interests over the general public.
        </p>

        <p>
          OpenLobby takes no position on whether lobbying is good or bad. Our mission is transparency: providing the data that allows citizens, journalists, researchers, and policymakers to see who is spending what to influence which decisions. Informed democracy requires informed citizens, and informed citizens need access to lobbying data. That&apos;s what this page — and every page on OpenLobby — is designed to provide.
        </p>
      </div>
    </div>
    </>
  )
}
