import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Federal Lobbying Statistics 2025: Complete Guide | OpenLobby',
  description: 'Comprehensive federal lobbying statistics for 2025. Total spending, top clients, top firms, industry breakdowns, and historical trends from Senate LDA filings.',
}

export default function LobbyingStatisticsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Investigations', href: '/investigations' }, { name: 'Lobbying Statistics' }]} />
      
      <article className="prose prose-lg max-w-none">
        <h1 style={{ fontFamily: 'var(--font-serif)' }}>Federal Lobbying Statistics 2025: The Complete Guide</h1>
        <p className="text-gray-500 text-sm">Updated February 2026 · Source: Senate LDA Filings</p>

        <p className="text-xl text-gray-700 mt-6">The federal lobbying industry hit <strong>$2.7 billion in reported income in 2025</strong>, the highest single-year total in our dataset. Here&apos;s everything you need to know about who&apos;s lobbying, how much they&apos;re spending, and where the money goes.</p>

        <div className="bg-indigo-50 rounded-xl p-6 my-8 not-prose">
          <h2 className="text-lg font-bold text-indigo-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Key Statistics at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Total Lobbying (2018-2025)', value: '$15.2 Billion' },
              { label: '2025 Lobbying Income', value: '$2.7 Billion' },
              { label: '2024 Lobbying Income', value: '$2.0 Billion' },
              { label: 'Total Filings', value: '650,333' },
              { label: 'Year-over-Year Growth', value: '+36%' },
              { label: 'Years of Data', value: '2018–2025' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-lg p-3">
                <div className="text-2xl font-bold text-indigo-700">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>How Much Is Spent on Lobbying Each Year?</h2>
        <p>Federal lobbying spending has grown significantly over the past eight years:</p>
        <table>
          <thead><tr><th>Year</th><th>Total Income</th><th>Filings</th><th>YoY Change</th></tr></thead>
          <tbody>
            <tr><td>2025</td><td>$2.70B</td><td>95,275</td><td className="text-green-600">+36.3%</td></tr>
            <tr><td>2024</td><td>$1.98B</td><td>82,249</td><td className="text-red-600">−11.5%</td></tr>
            <tr><td>2023</td><td>$2.24B</td><td>95,236</td><td className="text-green-600">+9.4%</td></tr>
            <tr><td>2022</td><td>$2.05B</td><td>88,232</td><td className="text-green-600">+16.5%</td></tr>
            <tr><td>2021</td><td>$1.76B</td><td>78,650</td><td className="text-green-600">+8.1%</td></tr>
            <tr><td>2020</td><td>$1.62B</td><td>75,360</td><td className="text-green-600">+10.7%</td></tr>
            <tr><td>2019</td><td>$1.47B</td><td>68,815</td><td className="text-green-600">+4.9%</td></tr>
            <tr><td>2018</td><td>$1.40B</td><td>66,516</td><td>—</td></tr>
          </tbody>
        </table>
        <p>The 2025 spike is notable — a 36% increase over 2024, driven largely by tariff-related lobbying, AI regulation debates, and continued healthcare policy fights.</p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Who Spends the Most on Lobbying?</h2>
        <p>The top lobbying spenders include a mix of trade associations, pharmaceutical companies, tech giants, and defense contractors. See our full <Link href="/clients" className="text-indigo-600 hover:underline">client rankings</Link> for the complete list.</p>
        <p>Key industries by lobbying spend:</p>
        <ul>
          <li><strong><Link href="/industries">Healthcare &amp; Pharmaceuticals</Link></strong> — Consistently the largest lobbying sector, driven by drug pricing debates, Medicare/Medicaid policy, and FDA regulation</li>
          <li><strong>Technology</strong> — Rapidly growing, fueled by AI regulation, data privacy, antitrust, and content moderation debates</li>
          <li><strong>Defense &amp; Security</strong> — Steady spending tied to defense authorization and procurement</li>
          <li><strong>Finance &amp; Insurance</strong> — Banking regulation, fintech, cryptocurrency policy</li>
          <li><strong>Energy &amp; Environment</strong> — Climate policy, oil/gas regulation, renewable energy incentives</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door</h2>
        <p>One of the most significant dynamics in federal lobbying is the &quot;revolving door&quot; — former government officials who become lobbyists. Our data identifies <strong>5,000 lobbyists with prior government positions</strong>, including former members of Congress, agency heads, White House staff, and military officials.</p>
        <p>See our full <Link href="/revolving-door" className="text-indigo-600 hover:underline">Revolving Door analysis</Link> and the <Link href="/investigations/revolving-door-exposed" className="text-indigo-600 hover:underline">investigation exposing the most egregious transitions</Link>.</p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Foreign Lobbying</h2>
        <p>Foreign governments and entities also lobby the U.S. Congress, primarily through American lobbying firms. Our data tracks <strong>1,000 foreign entities</strong> involved in lobbying, from allied nations like the UK and Canada to adversarial governments. See our <Link href="/foreign" className="text-indigo-600 hover:underline">foreign lobbying tracker</Link>.</p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What Issues Get Lobbied Most?</h2>
        <p>The Lobbying Disclosure Act requires filers to categorize their lobbying by issue area. The top issue categories by spending include:</p>
        <ul>
          <li><strong>Health Issues (HCR)</strong> — Drug pricing, Medicare, Medicaid, FDA approvals</li>
          <li><strong>Budget/Appropriations (BUD)</strong> — Government spending priorities</li>
          <li><strong>Taxation (TAX)</strong> — Corporate tax policy, individual tax reform</li>
          <li><strong>Trade (TRD)</strong> — Tariffs, trade agreements, sanctions</li>
          <li><strong>Defense (DEF)</strong> — Military contracts, weapons systems, veterans affairs</li>
          <li><strong>Energy (ENG)</strong> — Oil/gas, renewables, climate policy</li>
          <li><strong>Technology (CPT)</strong> — AI, data privacy, telecommunications</li>
        </ul>
        <p>Explore all <Link href="/issues" className="text-indigo-600 hover:underline">79 issue categories</Link> with spending data.</p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>How Does Lobbying Work?</h2>
        <p>Under the <strong>Lobbying Disclosure Act of 1995</strong> (amended 2007), any individual or organization that spends more than $14,000 per quarter on lobbying activities must register with the Senate and file quarterly disclosure reports. These reports include:</p>
        <ul>
          <li>Income received (for lobbying firms) or expenses (for in-house lobbying)</li>
          <li>Names of specific lobbyists involved</li>
          <li>Issue areas lobbied</li>
          <li>Specific bills or executive branch actions targeted</li>
          <li>Whether any lobbyists held prior government positions</li>
          <li>Any foreign entity involvement</li>
        </ul>
        <p>For a deeper explainer, read our guide: <Link href="/investigations/what-is-lobbying" className="text-indigo-600 hover:underline">What Is Lobbying?</Link></p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>About This Data</h2>
        <p>All statistics on OpenLobby come from the <a href="https://lda.senate.gov" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Senate Lobbying Disclosure Act (LDA) filing system</a>. We process every filing from 2018 through 2025, normalize entity names, and aggregate spending by client, firm, lobbyist, issue, and state.</p>
        <p>Our dataset includes <strong>650,333 filings</strong> totaling <strong>$15.2 billion</strong> in reported lobbying income.</p>

        <div className="mt-8 p-6 bg-gray-50 rounded-xl not-prose">
          <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { label: 'Top Clients', href: '/clients' },
              { label: 'Top Firms', href: '/firms' },
              { label: 'Lobbyists', href: '/lobbyists' },
              { label: 'Issues', href: '/issues' },
              { label: 'Trends', href: '/trends' },
              { label: 'Revolving Door', href: '/revolving-door' },
              { label: 'Foreign Lobbying', href: '/foreign' },
              { label: 'Industries', href: '/industries' },
              { label: 'By State', href: '/states' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="block p-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded transition-colors">
                → {l.label}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
