import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: "Q1 2026 Lobbying: Record Spending as Iran War, AI, and Tariffs Collide | OpenLobby",
  description: 'Q1 2026 saw record lobbying spending across defense, AI, and trade. Anthropic posted $1.6M — its biggest quarter ever. Total 2025 lobbying hit $5.08 billion. We break down the numbers.',
  openGraph: {
    title: "Q1 2026 Lobbying: Record Spending as Iran War, AI, and Tariffs Collide",
    description: 'Three simultaneous lobbying surges — defense, AI, and tariffs — are driving record spending in Washington.',
    url: 'https://www.openlobby.us/investigations/q1-2026-lobbying-record',
  },
}

export default function Q12026LobbyingRecordPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Q1 2026 Lobbying: Record Spending as Iran War, AI, and Tariffs Collide", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-04-21", dateModified: "2026-04-21", description: "Q1 2026 saw record lobbying spending across defense, AI, and trade. Three simultaneous crises are driving unprecedented influence spending.", mainEntityOfPage: "https://www.openlobby.us/investigations/q1-2026-lobbying-record" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Q1 2026 Lobbying Record' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Analysis</span>
        <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">Breaking</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Q1 2026 Lobbying:{' '}
        <span className="text-purple-700">Record Spending</span>{' '}
        as Iran War, AI, and Tariffs Collide
      </h1>

      <p className="text-gray-500 mb-4">Published April 21, 2026 · 12 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/q1-2026-lobbying-record" title="Q1 2026 Lobbying: Record Spending as Iran War, AI, and Tariffs Collide" />

      <div className="my-8 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-purple-800 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Three simultaneous crises — the <Link href="/investigations/iran-war-defense-lobby" className="text-purple-700 underline">Iran war</Link>,
          the <Link href="/investigations/ai-lobbying-blitz-2026" className="text-purple-700 underline">AI regulation battle</Link>,
          and <Link href="/investigations/tariff-lobbying-2026" className="text-purple-700 underline">Trump&apos;s tariff regime</Link> — have
          created a perfect storm for lobbying spending. Q1 2026 filings show record numbers across multiple sectors.
          After 2025 hit a <strong>record $5.08 billion</strong> (up 11% from 2024), 2026 is on pace to shatter that figure.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>2025 Set the Stage: $5.08 Billion</h2>

        <p>
          Before diving into Q1 2026, the backstory matters. According to{' '}
          <a href="https://www.opensecrets.org/news/2026/01/lobbying-firms-took-in-a-record-5-billion-in-2025/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenSecrets</a>,
          lobbying spending reached <strong>$5.08 billion in 2025</strong> — the highest annual total ever recorded. That&apos;s an 11%
          increase from 2024, after adjusting for inflation. Both the adjusted and non-adjusted increases represent the largest
          year-over-year jumps in recent memory.
        </p>

        <p>
          What drove that record? A combination of Trump&apos;s second-term policy agenda — tariffs, deregulation, defense spending,
          AI policy — created enormous uncertainty across every industry. And uncertainty is lobbying&apos;s best friend.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Q1 2026: The AI Lobbying Arms Race</h2>

        <p>
          The biggest story in Q1 2026 lobbying filings is the AI spending race. As <em>Axios</em> reported today (April 21, 2026),
          both Anthropic and OpenAI posted their biggest-ever lobbying quarters:
        </p>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {[
              { company: 'Anthropic', q1Spend: '$1.6 million', change: 'Biggest quarter ever', detail: 'Outspent OpenAI for the first time' },
              { company: 'OpenAI', q1Spend: '$1.0 million', change: 'Biggest quarter ever', detail: 'Rapidly scaling DC presence' },
              { company: 'Meta', q1Spend: 'TBD (filing pending)', change: 'Expected record', detail: 'AI + data privacy + kids safety + copyright' },
              { company: 'Google / Alphabet', q1Spend: 'TBD (filing pending)', change: 'Expected high', detail: 'AI + antitrust + kids safety + chips' },
            ].map(c => (
              <div key={c.company} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0">
                <div>
                  <span className="font-semibold text-gray-900">{c.company}</span>
                  <p className="text-sm text-gray-500 mt-0.5">{c.detail}</p>
                </div>
                <div className="text-right ml-4">
                  <span className="font-bold text-purple-700">{c.q1Spend}</span>
                  <p className="text-xs text-gray-400">{c.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p>
          What&apos;s driving this? Every major AI company is now fighting on multiple fronts: federal AI regulation,
          state-level AI bills (with over 400 introduced across the U.S.), data center energy policy, copyright law,
          and kids&apos; online safety legislation. As one lobbyist told <em>Axios</em>: &ldquo;Finance, health care,
          transportation, defense, education — everyone suddenly has to take a position on AI.&rdquo;
        </p>

        <p>
          For a deeper dive, see our full investigation:{' '}
          <Link href="/investigations/ai-lobbying-blitz-2026" className="text-primary hover:underline">
            Big Tech&apos;s AI Lobbying Blitz: Who&apos;s Spending What in 2026
          </Link>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Iran War Lobbying Boom</h2>

        <p>
          Five weeks into the U.S.-Israel military campaign against Iran, the defense lobbying machine is in overdrive.
          The Pentagon&apos;s $200 billion supplemental request is the largest wartime funding ask since Iraq and Afghanistan,
          and defense contractors are positioning to capture every contract.
        </p>

        <p>
          The stock market tells the story: Lockheed Martin jumped 3.4% when strikes began. RTX (Raytheon) surged 4.7%.
          Northrop Grumman posted a 6% increase. These aren&apos;t just market reactions — they reflect Wall Street&apos;s
          confidence that these companies&apos; lobbying operations will convert wartime spending into contracts.
        </p>

        <p>
          The Washington Examiner called it a &ldquo;lobbying gold rush,&rdquo; with traditional blue-chip firms —
          DLA Piper, Holland &amp; Knight, McGuireWoods, Squire Patton Boggs — all racing to sign defense and energy
          clients who want a piece of the wartime economy.
        </p>

        <p>
          Full investigation:{' '}
          <Link href="/investigations/iran-war-defense-lobby" className="text-primary hover:underline">
            Defense Lobby Surges as Pentagon Seeks $200B for Iran War
          </Link>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Tariffs: $166 Billion in Refunds and the Lobbying to Get Them</h2>

        <p>
          The tariff lobbying front got even more intense this week. On April 20, the <em>New York Times</em> reported that
          the Trump administration is taking steps to refund <strong>$166 billion in tariffs</strong> — the result of the
          pause-and-pivot strategy on &ldquo;reciprocal tariffs.&rdquo; The refund process has sparked a new wave of
          lobbying as companies fight to ensure they&apos;re included.
        </p>

        <p>
          Meanwhile, new entrants keep arriving. A coalition of copper fabricators formed in April 2026 specifically to
          lobby on Section 232 copper tariffs. The automotive industry is fighting for USMCA exemptions. Agriculture
          groups are mobilizing against retaliatory tariffs from China and the EU. Industries that never had a Washington
          presence are hiring lobbyists for the first time.
        </p>

        <p>
          Full investigation:{' '}
          <Link href="/investigations/tariff-lobbying-2026" className="text-primary hover:underline">
            Tariff Lobbying 2026: Who&apos;s Fighting Trump&apos;s Trade War
          </Link>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Healthcare Lobbying: The Quiet Giant</h2>

        <p>
          While defense, AI, and tariffs grab headlines, healthcare remains the single largest lobbying sector by total spending.
          Pharmaceutical and health insurance companies have spent billions over the past decade fighting drug pricing reforms,
          Medicare changes, and regulatory oversight.
        </p>

        <p>
          The healthcare lobbying machine doesn&apos;t just affect policy — it affects your wallet. To see how lobbying connects
          to the prices you actually pay, check out{' '}
          <a href="https://clearprices.thedataproject.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            ClearPrices
          </a>, which tracks hospital and insurance pricing transparency data. When pharmaceutical companies spend $4.4B+
          lobbying Congress, the result is the prices you see at the pharmacy counter.
        </p>

        <p>
          Related:{' '}
          <Link href="/investigations/big-pharma-lobbying" className="text-primary hover:underline">Big Pharma&apos;s $452M Lobbying Machine</Link>
          {' '}·{' '}
          <Link href="/investigations/healthcare-3-billion-bet" className="text-primary hover:underline">Healthcare&apos;s $3 Billion Bet</Link>
          {' '}·{' '}
          <Link href="/investigations/healthcare-insurance-lobby" className="text-primary hover:underline">The Health Insurance Lobby</Link>
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What to Watch in Q2 2026</h2>

        <ul>
          <li><strong>Iran supplemental vote:</strong> Congress will vote on the $200B+ supplemental request, triggering another wave of defense lobbying.</li>
          <li><strong>AI legislation:</strong> Multiple federal AI bills are expected to advance, with the lobbying battle intensifying between safety-focused (Anthropic) and innovation-focused (Meta, OpenAI) camps.</li>
          <li><strong>Tariff refund process:</strong> The $166B refund mechanism will create winners and losers — and a new round of lobbying to influence who gets what.</li>
          <li><strong>Bloomberg Government Top Lobbying Firms report:</strong> Released in April 2026, highlighting Cornerstone Government Affairs, Bose Public Affairs Group, and Innovative Federal Strategies among the top performers.</li>
          <li><strong>State-level AI bills:</strong> Over 400 AI-related bills have been introduced across state legislatures. Tech companies are fighting on 50 fronts simultaneously.</li>
        </ul>

        <div className="not-prose my-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• OpenSecrets: <a href="https://www.opensecrets.org/news/2026/01/lobbying-firms-took-in-a-record-5-billion-in-2025/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">&ldquo;Lobbying firms took in a record $5 billion in 2025&rdquo;</a> (Jan 2026)</li>
            <li>• Axios: <a href="https://www.axios.com/2026/04/21/anthropic-outspends-openai-biggest-lobbying-quarter" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">&ldquo;Anthropic outspends OpenAI in biggest-ever lobbying quarter&rdquo;</a> (Apr 21, 2026)</li>
            <li>• Axios: <a href="https://www.axios.com/2026/01/23/ai-tech-lobbying-2025" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">&ldquo;How AI swallowed tech lobbying in 2025&rdquo;</a> (Jan 2026)</li>
            <li>• Washington Examiner: <a href="https://www.washingtonexaminer.com/news/investigations/4503242/iran-war-sparks-lobbying-gold-rush-defense-energy-sectors/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">&ldquo;Iran war sparks lobbying gold rush&rdquo;</a> (Mar 2026)</li>
            <li>• Time: <a href="https://time.com/article/2026/03/19/trump-iran-war-set-to-boost-profits-for-these-defense-contractors/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">&ldquo;Iran War May Give Defense Contractors $200 Billion Windfall&rdquo;</a> (Mar 2026)</li>
            <li>• New York Times: <a href="https://www.nytimes.com/2026/04/20/us/politics/trump-administration-tariff-refunds.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">&ldquo;Trump Administration Takes Steps to Refund $166 Billion in Tariffs&rdquo;</a> (Apr 20, 2026)</li>
            <li>• Bloomberg Government: &ldquo;2026 Top Lobbying Firms&rdquo; report (Jan 2026)</li>
            <li>• Senate Office of Public Records: Federal lobbying disclosure filings</li>
          </ul>
        </div>

        <SourceCitation />
      </article>
    </div>
  )
}
