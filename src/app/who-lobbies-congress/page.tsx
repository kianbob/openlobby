import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

const stats = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/stats.json'), 'utf-8'))

const breadcrumbs = [{ name: 'Who Lobbies Congress?' }]

export const metadata: Metadata = {
  title: 'Who Lobbies Congress? A Complete Guide to Washington Influence | OpenLobby',
  description: 'Learn who lobbies Congress, how lobbying works, and who spends the most. 37,994 clients, 23,545 lobbyists, and $37.7B in spending — explained.',
  keywords: ['who lobbies congress', 'lobbying congress', 'how lobbying works', 'congressional lobbying', 'who hires lobbyists', 'K street'],
  openGraph: {
    title: 'Who Lobbies Congress? A Complete Guide to Washington Influence',
    description: '37,994 organizations lobby Congress. Here\'s who they are, what they want, and how much they spend.',
    url: 'https://www.openlobby.us/who-lobbies-congress',
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.openlobby.us/who-lobbies-congress' },
}

export default function WhoLobbiesCongressPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Who Lobbies Congress? A Complete Guide to Washington Influence',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    publisher: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
    datePublished: '2026-01-15',
    mainEntityOfPage: 'https://www.openlobby.us/who-lobbies-congress',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who lobbies Congress?',
        acceptedAnswer: { '@type': 'Answer', text: 'Corporations, trade associations, nonprofits, universities, state and local governments, foreign governments, and individuals all lobby Congress. Since 2018, 37,994 unique clients have filed lobbying disclosures.' },
      },
      {
        '@type': 'Question',
        name: 'Is lobbying legal?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lobbying is protected by the First Amendment\'s right to petition the government. The Lobbying Disclosure Act of 1995 requires lobbyists to register and report their activities.' },
      },
      {
        '@type': 'Question',
        name: 'How much do companies spend on lobbying?',
        acceptedAnswer: { '@type': 'Answer', text: 'It varies enormously. The biggest spenders (like the US Chamber of Commerce and National Association of Realtors) spend $50M+ per year. Most clients spend under $200K per filing.' },
      },
      {
        '@type': 'Question',
        name: 'What do lobbyists actually do?',
        acceptedAnswer: { '@type': 'Answer', text: 'Lobbyists meet with lawmakers and staff, provide research and policy analysis, draft legislation, organize grassroots campaigns, testify at hearings, and build coalitions to advance their clients\' interests.' },
      },
    ],
  }

  const playerTypes = [
    { name: 'Corporations', pct: '45%', desc: 'Fortune 500 companies and major businesses lobby on taxes, regulations, trade, and industry-specific policy.', examples: 'Amazon, Google, Pfizer, Boeing, JPMorgan Chase', color: 'indigo' },
    { name: 'Trade Associations', pct: '25%', desc: 'Industry groups pool resources from member companies to lobby collectively on shared interests.', examples: 'US Chamber of Commerce, PhRMA, American Hospital Association', color: 'purple' },
    { name: 'Nonprofits & Advocacy', pct: '12%', desc: 'Issue-focused organizations lobby on everything from healthcare access to gun rights to environmental protection.', examples: 'AARP, NRA, Sierra Club, Planned Parenthood', color: 'blue' },
    { name: 'Universities & Hospitals', pct: '8%', desc: 'Higher education and healthcare institutions lobby for research funding, student aid, and healthcare reimbursement.', examples: 'Harvard, Johns Hopkins, Mayo Clinic', color: 'green' },
    { name: 'State & Local Governments', pct: '5%', desc: 'States, cities, and counties lobby Congress for federal funding, infrastructure projects, and policy waivers.', examples: 'State of California, City of New York, Cook County', color: 'amber' },
    { name: 'Foreign Governments & Entities', pct: '5%', desc: 'Foreign nations and companies hire lobbyists to influence US trade, sanctions, and foreign policy.', examples: 'Saudi Arabia, Japan, South Korea, Airbus', color: 'red' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">Explainer</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Who Lobbies Congress? A Complete Guide to Washington Influence
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every year, thousands of organizations spend billions of dollars trying to influence what Congress does.
            From the world&apos;s largest corporations to small-town mayors, lobbying touches almost every aspect of
            American policy. Here&apos;s who&apos;s doing it, how it works, and what it costs.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-6 text-indigo-200">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-black text-amber-400">{stats.totalClients.toLocaleString()}</div>
              <div className="text-sm text-indigo-300 mt-1">Organizations Lobby</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{stats.totalLobbyists.toLocaleString()}</div>
              <div className="text-sm text-indigo-300 mt-1">Registered Lobbyists</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{stats.totalFirms.toLocaleString()}</div>
              <div className="text-sm text-indigo-300 mt-1">Lobbying Firms</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400">{stats.totalIssues}</div>
              <div className="text-sm text-indigo-300 mt-1">Issue Categories</div>
            </div>
          </div>
        </div>

        {/* Who Lobbies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>The 6 Types of Organizations That Lobby Congress</h2>
          <div className="space-y-4">
            {playerTypes.map((p) => (
              <div key={p.name} className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">~{p.pct} of all lobbying</span>
                </div>
                <p className="text-gray-600 mb-2">{p.desc}</p>
                <p className="text-sm text-gray-500"><strong>Examples:</strong> {p.examples}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Lobbying Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>How Lobbying Actually Works</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Lobbying isn&apos;t just about meeting with politicians. It&apos;s a sophisticated, multi-layered process:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-2">📋</div>
                <h3 className="font-bold text-gray-900 mb-1">1. Hire a Firm</h3>
                <p className="text-gray-600 text-sm">Clients hire a lobbying firm (or use in-house lobbyists). The firm assigns lobbyists who specialize in relevant policy areas.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-2">🏛️</div>
                <h3 className="font-bold text-gray-900 mb-1">2. Contact Officials</h3>
                <p className="text-gray-600 text-sm">Lobbyists meet with members of Congress, their staff, and executive branch officials. They provide information, research, and talking points.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-2">📝</div>
                <h3 className="font-bold text-gray-900 mb-1">3. Shape Legislation</h3>
                <p className="text-gray-600 text-sm">Lobbyists may draft bill language, propose amendments, organize committee testimony, or build coalitions with other interest groups.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-gray-900 mb-1">4. File Disclosures</h3>
                <p className="text-gray-600 text-sm">By law, lobbyists must file quarterly reports disclosing who they lobbied for, how much they were paid, and what issues they covered.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Revolving Door */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
            <p className="text-amber-900 font-semibold text-lg mb-2">~{stats.totalRevolvingDoor.toLocaleString()} lobbyists have prior government experience</p>
            <p className="text-amber-800">
              The &quot;revolving door&quot; between government and lobbying is one of the most powerful dynamics in
              Washington. Former Congressional staffers, agency officials, and even former members of Congress
              become lobbyists — using their insider knowledge and personal relationships to influence policy.
            </p>
          </div>
          <p className="text-gray-600">
            Research shows that lobbyists with government experience command premium fees and are more effective
            at securing favorable outcomes for their clients. A former Senate staffer who becomes a lobbyist may
            still have the personal cell numbers of sitting Senators.
          </p>
        </section>

        {/* What Gets Lobbied On */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>What Do They Lobby About?</h2>
          <p className="text-gray-600 mb-6">
            Lobbying spans {stats.totalIssues} official issue categories. The most lobbied topics reflect where the most
            money and regulatory stakes are:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { name: 'Budget & Appropriations', desc: 'Who gets federal funding — the single biggest lobbying battleground' },
              { name: 'Healthcare', desc: 'Drug pricing, Medicare, insurance regulation, medical device approval' },
              { name: 'Taxes', desc: 'Corporate tax rates, credits, deductions, and international tax policy' },
              { name: 'Trade & Tariffs', desc: 'Import/export policy, trade agreements, sanctions, tariffs' },
              { name: 'Defense', desc: 'Military contracts, base closures, weapons systems, veteran affairs' },
              { name: 'Technology', desc: 'AI regulation, data privacy, antitrust, Section 230, crypto' },
              { name: 'Energy & Environment', desc: 'Climate policy, oil & gas, renewables, EPA regulations' },
              { name: 'Financial Services', desc: 'Banking regulation, SEC rules, cryptocurrency oversight' },
            ].map((issue) => (
              <div key={issue.name} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900">{issue.name}</h3>
                <p className="text-gray-600 text-sm">{issue.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Is lobbying legal?</h3>
              <p className="text-gray-600">Yes. The First Amendment protects the right to &quot;petition the Government for a redress of grievances.&quot; The Lobbying Disclosure Act of 1995 requires transparency through registration and reporting.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How is lobbying different from bribery?</h3>
              <p className="text-gray-600">Lobbying involves advocating for a position through information, persuasion, and relationship-building. Bribery involves exchanging money or favors for specific official actions. The line can be blurry, but legally they are distinct.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Do lobbyists write laws?</h3>
              <p className="text-gray-600">Sometimes, yes. Lobbyists frequently draft bill language, propose amendments, and provide legislative text to Congressional offices. Studies have found that some bills contain language written nearly verbatim by lobbyists.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Can regular citizens lobby?</h3>
              <p className="text-gray-600">Absolutely. Contacting your representatives is a form of lobbying. Professional lobbyists are distinguished by doing it as a paid occupation and being required to register and file disclosures.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">See Who&apos;s Lobbying Right Now</h2>
          <p className="text-indigo-200 mb-6">
            OpenLobby makes federal lobbying data accessible and searchable. Browse {stats.totalClients.toLocaleString()} clients,
            {' '}{stats.totalFirms.toLocaleString()} firms, and {stats.totalLobbyists.toLocaleString()} lobbyists.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/clients" className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Browse Clients
            </Link>
            <Link href="/investigations" className="bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              Read Investigations
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
