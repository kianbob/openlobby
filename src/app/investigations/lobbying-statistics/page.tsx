import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from "@/components/SourceCitation"
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'Federal Lobbying Statistics 2025: $37.7B Spent, 726K Filings — Complete Data',
  description: '$37.7B total spending. 726,000+ filings. 23,545 lobbyists. The most comprehensive federal lobbying statistics for 2025, with charts, trends, and downloadable data.',
}

export default function LobbyingStatisticsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Federal Lobbying Statistics 2025", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "Comprehensive federal lobbying statistics for 2025. Total spending, top clients, top firms, industry breakdowns, and historical trends from Senate LDA filings.", mainEntityOfPage: "https://www.openlobby.us/investigations/lobbying-statistics" }) }} />
      <Breadcrumbs items={[{ name: 'Investigations', href: '/investigations' }, { name: 'Lobbying Statistics' }]} />
      
      <article className="prose prose-lg max-w-none">
        <h1 style={{ fontFamily: 'var(--font-serif)' }}>Federal Lobbying Statistics 2025: The Complete Guide</h1>
        <p className="text-gray-500 text-sm">Updated February 2026 · 15 min read · Source: Senate LDA Filings</p>
        <ShareButtons url="https://www.openlobby.us/investigations/lobbying-statistics" title="Federal Lobbying Statistics 2025: Complete Guide" />

        <p className="text-xl text-gray-700 mt-6">The federal lobbying industry hit <strong>$6.0 billion in reported income in 2025</strong>, the highest single-year total in our dataset. Here&apos;s everything you need to know about who&apos;s lobbying, how much they&apos;re spending, and where the money goes.</p>

        <div className="bg-indigo-50 rounded-xl p-6 my-8 not-prose">
          <h2 className="text-lg font-bold text-indigo-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Key Statistics at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Total Lobbying (2018-2025)', value: '$37.7 Billion' },
              { label: '2025 Lobbying Income', value: '$6.0 Billion' },
              { label: '2024 Lobbying Income', value: '$2.0 Billion' },
              { label: 'Total Filings', value: '726,268' },
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

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>How Much Is Spent on Lobbying Each Year?</h2>
        <p>Federal lobbying spending has grown significantly over the past eight years:</p>
        <table>
          <thead><tr><th>Year</th><th>Total Income</th><th>Filings</th><th>YoY Change</th></tr></thead>
          <tbody>
            <tr><td>2025</td><td>$6.00B</td><td>107,600</td><td className="text-green-600">+15.6%</td></tr>
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

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>Who Spends the Most on Lobbying?</h2>
        <p>The top lobbying spenders include a mix of trade associations, pharmaceutical companies, tech giants, and defense contractors. See our full <Link href="/clients" className="text-indigo-600 hover:underline">client rankings</Link> for the complete list.</p>
        <p>Key industries by lobbying spend:</p>
        <ul>
          <li><strong><Link href="/industries">Healthcare &amp; Pharmaceuticals</Link></strong> — Consistently the largest lobbying sector, driven by drug pricing debates, Medicare/Medicaid policy, and FDA regulation</li>
          <li><strong>Technology</strong> — Rapidly growing, fueled by AI regulation, data privacy, antitrust, and content moderation debates</li>
          <li><strong>Defense &amp; Security</strong> — Steady spending tied to defense authorization and procurement</li>
          <li><strong>Finance &amp; Insurance</strong> — Banking regulation, fintech, cryptocurrency policy</li>
          <li><strong>Energy &amp; Environment</strong> — Climate policy, oil/gas regulation, renewable energy incentives</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Revolving Door</h2>
        <p>One of the most significant dynamics in federal lobbying is the &quot;revolving door&quot; — former government officials who become lobbyists. Our data identifies <strong>5,000 lobbyists with prior government positions</strong>, including former members of Congress, agency heads, White House staff, and military officials.</p>
        <p>See our full <Link href="/revolving-door" className="text-indigo-600 hover:underline">Revolving Door analysis</Link> and the <Link href="/investigations/revolving-door-exposed" className="text-indigo-600 hover:underline">investigation exposing the most egregious transitions</Link>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>Foreign Lobbying</h2>
        <p>Foreign governments and entities also lobby the U.S. Congress, primarily through American lobbying firms. Our data tracks <strong>1,000 foreign entities</strong> involved in lobbying, from allied nations like the UK and Canada to adversarial governments. See our <Link href="/foreign" className="text-indigo-600 hover:underline">foreign lobbying tracker</Link>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>What Issues Get Lobbied Most?</h2>
        <p>The Lobbying Disclosure Act requires filers to categorize their lobbying by issue area. The top issue categories by spending include:</p>
        <ul>
          <li><strong><Link href="/issues/HCR" className="text-indigo-600 hover:underline">Health Issues (HCR)</Link></strong> — Drug pricing, Medicare, Medicaid, FDA approvals</li>
          <li><strong>Budget/Appropriations (BUD)</strong> — Government spending priorities</li>
          <li><strong><Link href="/issues/TAX" className="text-indigo-600 hover:underline">Taxation (TAX)</Link></strong> — Corporate tax policy, individual tax reform</li>
          <li><strong><Link href="/issues/TRD" className="text-indigo-600 hover:underline">Trade (TRD)</Link></strong> — Tariffs, trade agreements, sanctions</li>
          <li><strong><Link href="/issues/DEF" className="text-indigo-600 hover:underline">Defense (DEF)</Link></strong> — Military contracts, weapons systems, veterans affairs</li>
          <li><strong><Link href="/issues/ENG" className="text-indigo-600 hover:underline">Energy (ENG)</Link></strong> — Oil/gas, renewables, climate policy</li>
          <li><strong><Link href="/issues/CPT" className="text-indigo-600 hover:underline">Technology (CPT)</Link></strong> — AI, data privacy, telecommunications</li>
        </ul>
        <p>Explore all <Link href="/issues" className="text-indigo-600 hover:underline">79 issue categories</Link> with spending data.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>How Does Lobbying Work?</h2>
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

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Revolving Door Premium</h2>
        <p>One of the most significant statistics in our dataset: lobbying firms that employ former government officials charge an average of <strong>369% more</strong> than firms without revolving-door lobbyists. This premium reflects the market value of insider knowledge, personal relationships, and institutional familiarity that former officials bring to lobbying.</p>
        <p>Among the 5,000+ former government officials now registered as lobbyists, former members of Congress command the highest premiums. Former committee chairs and ranking members are especially valuable, as their expertise and relationships center on the most consequential policy areas. See our full <Link href="/revolving-door" className="text-indigo-600 hover:underline">revolving door analysis</Link>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>Lobbying Growth by Sector (2018-2025)</h2>
        <p>Different industries have grown their lobbying presence at very different rates:</p>
        <ul>
          <li><strong>Technology:</strong> +340% growth — driven by antitrust, AI, and privacy regulation</li>
          <li><strong>Cryptocurrency:</strong> From near-zero to millions annually — the fastest new entrant</li>
          <li><strong>Education:</strong> +9%/year — student loans, Title IX, federal funding battles</li>
          <li><strong>Transportation:</strong> +7%/year — infrastructure, EVs, FAA reauthorization</li>
          <li><strong>Healthcare:</strong> +8%/year — consistently the largest sector at $4.4B+ total</li>
          <li><strong>Defense:</strong> +5%/year — steady growth tied to increasing defense budgets</li>
          <li><strong>Telecom:</strong> +2%/year — the slowest-growing major sector</li>
        </ul>
        <p>Compare any industries side-by-side with our <Link href="/tools/industry-compare" className="text-indigo-600 hover:underline">industry comparison tool</Link>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Tariff Lobbying Explosion</h2>
        <p>One of the most dramatic trends in 2025 was the explosion of tariff-related lobbying. As new trade policies introduced sweeping tariffs on imports from China, the EU, and other trading partners, industries scrambled to secure exemptions. Our analysis shows a <strong>561% increase</strong> in trade-related lobbying filings between 2023 and 2025.</p>
        <p>Companies that had never lobbied before suddenly registered lobbyists, and existing lobbying operations expanded dramatically. The retail, automotive, and manufacturing sectors were particularly active, with companies like Walmart, Toyota, and Caterpillar significantly increasing their DC presence. See our full <Link href="/investigations/tariff-lobbying-surge" className="text-indigo-600 hover:underline">tariff lobbying investigation</Link>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>AI Regulation: The Newest Lobbying Frontier</h2>
        <p>Artificial intelligence has emerged as one of the fastest-growing lobbying issues. AI-related mentions in lobbying filings surged over <strong>400% between 2022 and 2025</strong>, as tech companies, defense contractors, healthcare organizations, and financial institutions all rushed to shape emerging AI policy.</p>
        <p>The debate spans multiple issue areas — from data privacy and intellectual property to national security and workforce displacement. Companies like OpenAI, Anthropic, Google, Microsoft, and Meta are all actively lobbying on AI regulation, often with conflicting positions on how strict rules should be. Explore the <Link href="/momentum" className="text-indigo-600 hover:underline">momentum tracker</Link> to see which AI-related issues are surging right now.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>Lobbying by the Numbers: Key Ratios</h2>
        <p>Understanding the scale of lobbying requires context. Here are some key ratios from our data:</p>
        <ul>
          <li><strong>$11.2 million per member of Congress</strong> — total lobbying spending divided by 535 members</li>
          <li><strong>44 lobbyists per member of Congress</strong> — 23,545 registered lobbyists for 535 lawmakers</li>
          <li><strong>$52,000 average per filing</strong> — across all 726,000+ filings in our database</li>
          <li><strong>3.2 issues per filing</strong> — the average number of issue codes listed on each disclosure</li>
          <li><strong>$27,105 per DC resident</strong> — Washington DC&apos;s per-capita lobbying spending, the highest by far</li>
        </ul>
        <p>These ratios illustrate the sheer density of lobbying activity in Washington. For more geographic analysis, see our <Link href="/geographic" className="text-indigo-600 hover:underline">lobbying map</Link>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>About This Data</h2>
        <p>All statistics on OpenLobby come from the <a href="https://lda.senate.gov" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Senate Lobbying Disclosure Act (LDA) filing system</a>. We process every filing from 2018 through 2025, normalize entity names, and aggregate spending by client, firm, lobbyist, issue, and state.</p>
        <p>Our dataset includes <strong>726,000+ filings</strong> totaling <strong>$37.7 billion</strong> in reported lobbying income.</p>

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How much money is spent on lobbying each year?", acceptedAnswer: { "@type": "Answer", text: "In 2025, $6.0 billion was spent on federal lobbying — an all-time record. Between 2018 and 2025, total spending reached $37.7 billion across 726,000+ filings." } },
          { "@type": "Question", name: "What industries spend the most on lobbying?", acceptedAnswer: { "@type": "Answer", text: "Healthcare and pharmaceuticals consistently lead at $4.4B+ since 2018. Technology is the fastest-growing sector at 15% annual growth, followed by finance ($2.1B+), energy ($1.6B+), and defense ($1.2B+)." } },
          { "@type": "Question", name: "How many lobbyists are registered in Washington DC?", acceptedAnswer: { "@type": "Answer", text: "There are 23,545 unique lobbyists in our database covering 2018-2025. Over 5,000 of these are former government officials who moved through the revolving door." } },
          { "@type": "Question", name: "What is the most lobbied issue in Congress?", acceptedAnswer: { "@type": "Answer", text: "Budget/Appropriations (BUD) is the most lobbied issue by total spending at $2.63 billion, followed by Healthcare (HCR) at $2.30 billion and Taxation (TAX) at $1.8B+." } },
        ]
      }) }} />

      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="February 2026" />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/what-is-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📖 What Is Lobbying?</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
          </Link>
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Industry-by-Industry Spending Breakdown</h2>
        <p>Healthcare remains the undisputed heavyweight of federal lobbying, with the pharmaceutical and health products sector alone accounting for over $700 million annually. The industry&apos;s spending is driven by drug pricing legislation, Medicare reimbursement rates, and FDA regulatory policy. See our <Link href="/pharmaceutical-lobbying" className="text-indigo-600 hover:underline">pharmaceutical lobbying deep dive</Link> for the full analysis.</p>
        <p>Technology lobbying has seen the fastest growth rate, driven by AI regulation, data privacy, antitrust enforcement, and cryptocurrency policy. The <Link href="/tech-lobbying" className="text-indigo-600 hover:underline">tech lobbying overview</Link> covers the sector&apos;s rapid expansion in Washington.</p>
        <p>Defense spending, while consistently high, has taken on new urgency amid DOGE efficiency reviews and debates over legacy weapons programs versus next-generation systems. The <Link href="/defense-lobbying" className="text-indigo-600 hover:underline">defense lobbying page</Link> tracks these dynamics.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Quarterly Filing Patterns</h2>
        <p>Lobbying spending follows predictable seasonal patterns tied to the legislative calendar. Q1 filings spike as organizations engage on the President&apos;s budget proposal and new congressional session. Q3 sees elevated activity during NDAA markup and appropriations season. Q4 often brings a burst of year-end spending on must-pass legislation like omnibus spending bills.</p>
        <p>Our <Link href="/trends" className="text-indigo-600 hover:underline">spending trends page</Link> visualizes these patterns over multiple years, while the <Link href="/momentum" className="text-indigo-600 hover:underline">momentum tracker</Link> shows which issues are surging or declining right now.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Understanding the Data</h2>
        <p>All statistics on this page are derived from official Senate LDA filings. Organizations are required to file quarterly reports disclosing their lobbying expenditures, the issues they lobbied on, and the government entities they contacted. OpenLobby processes these filings to calculate totals, identify trends, and flag anomalies.</p>
        <p>It&apos;s important to note that disclosed lobbying represents only part of Washington&apos;s influence economy. &quot;Shadow lobbying&quot; — strategic consulting and advisory work that falls below LDA thresholds — is estimated to match or exceed disclosed spending. For a deeper understanding of our data processing approach, visit our <Link href="/methodology" className="text-indigo-600 hover:underline">methodology page</Link>.</p>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
          </Link>
          <Link href="/firms" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏢 Top Firms</div>
          </Link>
          <Link href="/industries" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏭 Industry Breakdown</div>
          </Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Key Lobbying Statistics at a Glance</h2>
        <div className="prose prose-lg max-w-none">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>$6.0 billion</strong> — total federal lobbying spending in 2025 (all-time record)</li>
            <li><strong>$37.7 billion</strong> — cumulative spending from 2018–2025</li>
            <li><strong>726,000+</strong> — lobbying filings in the OpenLobby database</li>
            <li><strong>12,000+</strong> — registered lobbyists active per quarter</li>
            <li><strong>5,000+</strong> — former government officials now registered as lobbyists</li>
            <li><strong>369%</strong> — fee premium charged by revolving-door lobbyists</li>
            <li><strong>22,000%</strong> — ROI for top defense contractors (contracts received vs. lobbying spent)</li>
            <li><strong>$607M+</strong> — U.S. Chamber of Commerce spending since 2018 (largest single spender)</li>
            <li><strong>400%+</strong> — growth in AI-related lobbying since 2022</li>
            <li><strong>561%</strong> — increase in tariff-related lobbying during trade policy escalation</li>
          </ul>
          <p>These figures are updated quarterly as new LDA filings become available. For the latest real-time data, explore our <Link href="/search" className="text-indigo-600 hover:underline">searchable database</Link> or browse by <Link href="/industries" className="text-indigo-600 hover:underline">industry</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door by the Numbers</h2>
        <div className="prose prose-lg max-w-none">
          <p>The revolving door between government and lobbying is one of the most consequential dynamics in American politics. Over 5,000 former government officials — including former members of Congress, White House staff, and agency officials — are currently registered as federal lobbyists. Firms employing these revolving-door lobbyists charge an average of 369% more than firms without them.</p>
          <p>The premium isn&apos;t arbitrary. Former officials bring institutional knowledge, personal relationships, and credibility that outside lobbyists simply cannot replicate. A former Senate staffer who helped draft healthcare legislation can navigate the process in ways that a newcomer cannot. Read our full <Link href="/investigations/revolving-door-exposed" className="text-indigo-600 hover:underline">revolving door investigation</Link> for detailed analysis.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">🔍 Search All Data</Link>
          <Link href="/downloads" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📥 Download Datasets</Link>
          <Link href="/methodology" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📚 Methodology</Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Spending by Government Branch</h2>
        <div className="prose prose-lg max-w-none">
          <p>While Congress receives the most lobbying attention, executive branch agencies are also major targets. The Department of Health and Human Services, the Department of Defense, and the Environmental Protection Agency are among the most lobbied federal agencies. Lobbying filings disclose which &quot;government entities&quot; were contacted, providing visibility into where influence efforts are directed.</p>
          <p>The White House and Executive Office of the President also appear frequently in lobbying disclosures, particularly around executive orders, regulatory actions, and budget proposals. Understanding which branches and agencies are being lobbied helps reveal where policy decisions are actually being made.</p>
          <p>For geographic patterns in lobbying activity, see our <Link href="/geographic" className="text-indigo-600 hover:underline">geographic analysis</Link>. For industry-level comparisons, use our <Link href="/tools/industry-compare" className="text-indigo-600 hover:underline">industry comparison tool</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Shadow Lobbying Gap</h2>
        <div className="prose prose-lg max-w-none">
          <p>The $6 billion in disclosed lobbying spending tells only part of the story. &quot;Shadow lobbying&quot; — strategic consulting, think tank funding, issue advertising, and advisory work below LDA thresholds — is estimated at $6 billion or more annually. Combined, the total influence industry may exceed $12 billion per year, making it one of Washington&apos;s largest economic sectors.</p>
          <p>Understanding this gap is essential for interpreting the statistics on this page. Disclosed lobbying is the floor, not the ceiling, of influence spending. Read our full explanation in the <Link href="/investigations/what-is-lobbying" className="text-indigo-600 hover:underline">comprehensive lobbying guide</Link>.</p>
        </div>
      </section>
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
