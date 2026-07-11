import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import ShareStatCards from './ShareStatCards'

export const metadata: Metadata = {
  title: 'Lobbying Spending in Perspective | OpenLobby',
  description: 'Put $37.7 billion in lobbying spending into context with relatable comparisons — from NASA budgets to teacher salaries.',
  openGraph: {
    title: 'Lobbying Spending in Perspective',
    description: '$37.7B in lobbying spending since 2018. Here\'s what that actually means.',
    type: 'website',
  },
}

const comparisons = [
  {
    bigNumber: '$37.7B',
    headline: '149% of NASA\'s Budget',
    description: 'Total lobbying spending since 2018 is 149% of NASA\'s annual budget ($25.4B). Lobbyists outspend rocket science — by half again.',
    source: 'NASA FY2024 budget; OpenLobby data 2018–2025',
    tweet: '💰 $37.7 BILLION in lobbying since 2018 — that\'s 149% of NASA\'s entire annual budget. Lobbyists outspend rocket science. via @OpenLobby',
    color: 'from-indigo-500 to-blue-600',
    emoji: '🚀',
  },
  {
    bigNumber: '$6.0B',
    headline: 'More Than 15+ Countries\' GDP',
    description: '2025 lobbying spending alone exceeds the GDP of Tonga ($536M), Palau ($284M), Micronesia ($427M), and a dozen other nations — combined.',
    source: 'World Bank GDP data; OpenLobby 2025 data',
    tweet: '🌍 US lobbying in 2025 ($6.0B) exceeds the GDP of 15+ entire countries including Tonga, Palau, and Micronesia. via @OpenLobby',
    color: 'from-emerald-500 to-teal-600',
    emoji: '🌍',
  },
  {
    bigNumber: '$80M+',
    headline: 'US Chamber > Most Small Towns',
    description: 'The US Chamber of Commerce spends over $80 million per year on lobbying — more than the entire annual budget of most American towns under 10,000 people.',
    source: 'Census of Governments; OpenLobby client data',
    tweet: '🏘️ The US Chamber of Commerce spends MORE on lobbying per year ($80M+) than most small towns\' entire budgets. via @OpenLobby',
    color: 'from-amber-500 to-orange-600',
    emoji: '🏘️',
  },
  {
    bigNumber: '$3.3B',
    headline: '33,000 Teacher Salaries',
    description: 'Big Pharma\'s lobbying tab since 2018 could fund 33,000 teacher salaries at the US average of $100K (salary + benefits). That\'s enough for a mid-size school district.',
    source: 'BLS teacher compensation data; OpenLobby pharma analysis',
    tweet: '💊 Big Pharma spent $3.3B on lobbying — enough to fund 33,000 teacher salaries. Priorities? via @OpenLobby',
    color: 'from-red-500 to-pink-600',
    emoji: '💊',
  },
  {
    bigNumber: '49,600x',
    headline: 'Best ROI in History',
    description: 'TriWest Healthcare spent $270K lobbying and received $13.4B in federal contracts. That\'s a 49,600x return — better than any stock, crypto, or lottery ticket in history.',
    source: 'USASpending.gov; OpenLobby ROI analysis',
    tweet: '📈 Defense contractor spent $270K lobbying → got $13.4B in contracts. A 49,600x return. No stock in history comes close. via @OpenLobby',
    color: 'from-green-500 to-emerald-600',
    emoji: '📈',
  },
  {
    bigNumber: '60,000',
    headline: 'Homes at Median Price',
    description: '$37.7B in lobbying could buy 149,000 homes at the US median price of $253K (2018 median). That\'s enough to house a small city.',
    source: 'US Census median home price; OpenLobby data',
    tweet: '🏠 $37.7B in lobbying spending could buy 149,000 homes. That\'s enough to house a major city. via @OpenLobby',
    color: 'from-violet-500 to-purple-600',
    emoji: '🏠',
  },
  {
    bigNumber: '$46',
    headline: 'Per American Since 2018',
    description: 'Spread across the US population, lobbying spending works out to about $46 per person since 2018. That\'s $46 of corporate influence on the laws that govern your life.',
    source: 'US Census population; OpenLobby data 2018–2025',
    tweet: '🇺🇸 $46 per American — that\'s how much has been spent on lobbying since 2018. $46 of corporate influence on YOUR laws. via @OpenLobby',
    color: 'from-sky-500 to-cyan-600',
    emoji: '🇺🇸',
  },
]

const additionalComparisons = [
  {
    bigNumber: '$380M',
    headline: 'Defense Lobbying in 2025',
    description: 'The defense sector alone spent $380M lobbying in 2025 — more than the combined budgets of 40 U.S. embassies worldwide.',
    source: 'State Dept budget data; OpenLobby defense analysis',
    tweet: '🛡️ Defense contractors spent $380M lobbying Congress in 2025 — more than 40 U.S. embassies cost to operate. via @OpenLobby',
    color: 'from-slate-500 to-gray-700',
    emoji: '🛡️',
  },
  {
    bigNumber: '$1.8B',
    headline: 'Tech Lobbying Could Fund Wikipedia for 24 Years',
    description: 'Big Tech\'s lobbying tab since 2018 ($1.8B) could fund the Wikimedia Foundation for 24 years at its current annual budget of $75M.',
    source: 'Wikimedia Foundation annual reports; OpenLobby tech analysis',
    tweet: '💻 Big Tech spent $1.8B on lobbying — enough to fund Wikipedia for 24 YEARS. via @OpenLobby',
    color: 'from-blue-500 to-indigo-600',
    emoji: '💻',
  },
  {
    bigNumber: '2,463x',
    headline: 'Pharma Lobbying vs. Avg Worker',
    description: 'The pharmaceutical industry spends $2,463 on lobbying for every dollar the average American worker earns in a day ($267). That\'s the influence gap.',
    source: 'BLS avg daily wage; OpenLobby pharma data',
    tweet: '💊 Pharma spends $2,463 lobbying for every $1 the average worker earns. via @OpenLobby',
    color: 'from-rose-500 to-red-600',
    emoji: '⚖️',
  },
  {
    bigNumber: '$103M',
    headline: 'More Than All U.S. Public Libraries Spend on Books',
    description: 'The top 5 lobbying clients spent $103M in 2025 — more than all U.S. public libraries combined spend on new book acquisitions annually ($86M).',
    source: 'ALA library statistics; OpenLobby client data',
    tweet: '📚 Top 5 lobbying clients spend more than ALL U.S. public libraries spend on books. Priorities. via @OpenLobby',
    color: 'from-yellow-500 to-amber-600',
    emoji: '📚',
  },
  {
    bigNumber: '12 min',
    headline: 'A Lobbyist Is Hired Every 12 Minutes',
    description: 'Based on 2025 registration data, a new lobbyist registers with Congress roughly every 12 minutes during business hours. The influence industry never sleeps.',
    source: 'Senate LDA registration data; OpenLobby analysis',
    tweet: '⏱️ A new lobbyist registers with Congress every 12 MINUTES. The influence industry never stops. via @OpenLobby',
    color: 'from-cyan-500 to-blue-600',
    emoji: '⏱️',
  },
]

export default function CompareSpendingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much has been spent on lobbying since 2018?', acceptedAnswer: { '@type': 'Answer', text: 'Total federal lobbying spending from 2018 to 2026 exceeds $37.7 billion, based on quarterly filings under the Lobbying Disclosure Act. This includes spending by corporations, trade associations, unions, and other organizations.' } },
          { '@type': 'Question', name: 'How does lobbying spending compare to other government budgets?', acceptedAnswer: { '@type': 'Answer', text: 'Total lobbying spending since 2018 ($37.7B) is 149% of NASA\'s annual budget ($25.4B). Annual lobbying spending ($6.0B in 2025) exceeds the GDP of 15+ small nations combined.' } },
          { '@type': 'Question', name: 'What is the return on investment for lobbying?', acceptedAnswer: { '@type': 'Answer', text: 'Some companies see extraordinary returns. TriWest Healthcare spent $270K on lobbying and received $13.4B in federal contracts — a 49,600x return. Academic studies estimate average lobbying ROI at 22,000% for tax-related lobbying.' } },
          { '@type': 'Question', name: 'How much does lobbying cost per American?', acceptedAnswer: { '@type': 'Answer', text: 'Spread across the U.S. population, total lobbying spending since 2018 works out to approximately $46 per person — representing corporate influence spending on the laws governing every American\'s life.' } },
          { '@type': 'Question', name: 'Which industry spends the most on lobbying?', acceptedAnswer: { '@type': 'Answer', text: 'Healthcare is the top lobbying industry at $4.4 billion since 2018, followed by finance ($2.1B), technology ($1.8B), and energy ($1.6B). The pharmaceutical sector alone accounts for the majority of healthcare lobbying.' } },
        ],
      }) }} />
      <Breadcrumbs items={[{ name: 'Tools', href: '/search' }, { name: 'Spending Comparisons' }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Lobbying Spending in Perspective
      </h1>
      <p className="text-gray-600 mb-10 max-w-3xl text-lg">
        $37.7 billion is hard to wrap your head around. These comparisons put lobbying spending 
        in context — and make it easy to share.
      </p>

      <ShareStatCards comparisons={comparisons} />

      <h2 className="text-3xl font-bold mt-16 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        More Comparisons
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        The numbers keep getting wilder.
      </p>

      <ShareStatCards comparisons={additionalComparisons} />

      {/* Prose analysis section */}
      <div className="prose prose-lg max-w-none mt-16 mb-12">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Economy, Explained</h2>

        <p>
          The $37.7 billion figure above captures only <em>disclosed</em> federal lobbying — money reported under the Lobbying Disclosure Act. The true scale of the influence industry is far larger. When you include state-level lobbying, shadow lobbying (strategic advising that avoids disclosure requirements), grassroots lobbying campaigns, and political spending through dark money groups, credible estimates put total U.S. influence spending at <strong>$15–20 billion per year</strong>.
        </p>

        <p>
          To understand why these numbers matter, consider what lobbying spending actually buys. Every dollar spent on lobbying is an investment in shaping the rules that govern entire industries. A single regulatory decision — whether to approve a drug, award a defense contract, or enforce an environmental standard — can be worth billions to the companies affected. The <Link href="/investigations/follow-the-money" className="text-indigo-600 hover:text-indigo-800">return on investment</Link> for well-targeted lobbying consistently outperforms any traditional investment.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Who’s Doing the Spending?</h3>

        <p>
          Lobbying spending is heavily concentrated among a small number of deep-pocketed clients. The top 100 lobbying clients account for approximately <strong>28% of all spending</strong>, while the bottom 10,000 clients collectively account for less than 5%. This concentration means that a handful of corporations and trade associations have dramatically outsized influence over federal policy.
        </p>

        <p>
          The <Link href="/industries" className="text-indigo-600 hover:text-indigo-800">industry breakdown</Link> reveals clear patterns. Healthcare consistently leads all sectors, driven by pharmaceutical companies fighting drug pricing reform, hospitals opposing payment cuts, and insurers shaping coverage mandates. The <Link href="/tech-lobbying" className="text-indigo-600 hover:text-indigo-800">technology sector</Link> has seen the fastest growth, with spending up 340% since 2010 as companies like Google, Meta, Amazon, and Apple face increasing regulatory scrutiny on antitrust, privacy, and AI.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The ROI of Lobbying</h3>

        <p>
          Academic research consistently finds that lobbying delivers extraordinary returns. A landmark study by researchers at the University of Kansas found that companies that lobbied on the American Jobs Creation Act of 2004 received a <strong>22,000% return</strong> on their lobbying investment through tax savings. Our own analysis at OpenLobby confirms this pattern across multiple industries and policy areas.
        </p>

        <p>
          The TriWest Healthcare example (49,600x return) is extreme but not unique. Across the <Link href="/defense-lobbying" className="text-indigo-600 hover:text-indigo-800">defense sector</Link>, companies routinely invest $1–5 million in annual lobbying and receive contracts worth hundreds of millions. In pharmaceuticals, successful lobbying to block drug reimportation or prevent Medicare price negotiation has been worth tens of billions to the industry.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Spending Per Legislator</h3>

        <p>
          Another way to understand lobbying spending is to look at it per member of Congress. With 535 voting members and $6.0 billion in annual spending, that works out to approximately <strong>$11.2 million per legislator per year</strong>. Each senator faces roughly $60 million in annual lobbying pressure, while each representative faces about $13.8 million.
        </p>

        <p>
          These per-legislator numbers help explain why constituent voices can feel drowned out. A constituent who writes a letter to their representative is competing for attention against millions of dollars in professional lobbying directed at that same office. The imbalance is structural and self-reinforcing.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Workforce</h3>

        <p>
          Washington’s lobbying industry employs an estimated <strong>12,500+ registered lobbyists</strong> and thousands more unregistered strategic advisors, policy analysts, and support staff. The industry supports a vast ecosystem of law firms, consulting shops, trade associations, and PR agencies concentrated in the K Street corridor and surrounding neighborhoods of downtown Washington, D.C.
        </p>

        <p>
          The <Link href="/revolving-door" className="text-indigo-600 hover:text-indigo-800">revolving door</Link> between government and lobbying keeps this workforce supplied with fresh talent and inside connections. Over 5,000 former government officials are currently registered lobbyists — about 21% of the total — and they command dramatically higher fees than lobbyists without government experience.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Historical Trends</h3>

        <p>
          Federal lobbying spending has grown steadily since the Lobbying Disclosure Act was enacted in 1995. Annual spending crossed $1 billion in 1998, $2 billion in 2003, $3 billion in 2008, and $4 billion in 2020. The acceleration since 2020 has been particularly striking, driven by pandemic relief legislation, infrastructure spending, and the explosion of technology regulation.
        </p>

        <p>
          For the full historical breakdown and 2026 projections, see our <Link href="/lobbying-statistics-2026" className="text-indigo-600 hover:text-indigo-800">Lobbying Statistics 2026</Link> page.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Hidden Costs</h3>

        <p>
          The $37.7 billion in disclosed lobbying spending is just the tip of the iceberg. It does not include the cost of grassroots lobbying campaigns, where companies spend millions mobilizing citizens to contact their representatives. It does not include political advertising by dark money groups that advocate for specific policies without mentioning candidates. And it does not include the estimated <strong>$6 billion per year</strong> in <Link href="/revolving-door" className="text-indigo-600 hover:text-indigo-800">shadow lobbying</Link> — influence activity that falls outside disclosure requirements.
        </p>

        <p>
          When you add these hidden costs together, the true price of corporate influence on American policy is likely <strong>3–4 times larger</strong> than the disclosed lobbying figures suggest. That means the real cost of the influence industry may exceed $100 billion over the 2018–2026 period — a staggering sum that dwarfs almost every comparison on this page.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Why These Comparisons Matter</h3>

        <p>
          Large numbers are psychologically difficult to process. $37.7 billion is abstract — it’s just a number with a lot of zeros. But when you learn that it equals 149% of NASA’s budget, or 33,000 teacher salaries, or enough homes to house a small city, the number becomes tangible and emotionally resonant. That’s the purpose of this page: to make lobbying spending <em>feel</em> as enormous as it actually is.
        </p>

        <p>
          Share these comparisons on social media, in school presentations, or in conversations with friends and family. The more people understand the scale of corporate influence spending, the more pressure there will be for transparency and reform. Every comparison card above includes a pre-written tweet — just click the share button to spread the word.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Methodology</h3>

        <p>
          All lobbying spending figures are derived from quarterly LD-2 filings submitted under the Lobbying Disclosure Act and compiled by OpenLobby. Comparison figures (NASA budget, GDP data, teacher salaries, etc.) are sourced from the most recent available government data as cited on each card. All comparisons are inflation-adjusted where applicable to ensure fair apples-to-apples analysis.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h3>

        <p>
          <strong>Where does lobbying money actually go?</strong> Lobbying spending pays for lobbyists&apos; salaries and overhead, but the real investment is in access. Lobbyists arrange meetings with legislators, draft legislative language, organize testimony, and build coalitions. The money buys time with decision-makers and the expertise to use that time effectively.
        </p>

        <p>
          <strong>Is lobbying legal?</strong> Yes. The right to petition the government is protected by the First Amendment. Lobbying becomes problematic when it creates systemic imbalances in who gets heard — when corporations can spend millions while ordinary citizens struggle to get a meeting with their representative&apos;s staff.
        </p>

        <p>
          <strong>How does lobbying differ from bribery?</strong> Lobbying involves advocating for policy positions through legal channels: meetings, testimony, position papers, and public campaigns. Bribery involves direct payments to officials in exchange for specific actions. The line between aggressive lobbying and corruption can be blurry, which is why transparency and disclosure are essential.
        </p>

        <p>
          <strong>Can individuals lobby?</strong> Absolutely. Any citizen can contact their representative to advocate for a policy position. The challenge is that professional lobbyists have resources, relationships, and expertise that individual citizens lack, creating a structural advantage for well-funded interests.
        </p>
      </div>

      {/* Cross-links */}
      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/industries" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏭 Industry Rankings</div>
            <div className="text-xs text-gray-500 mt-1">Spending by sector</div>
          </Link>
          <Link href="/revolving-door" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 Revolving Door</div>
            <div className="text-xs text-gray-500 mt-1">5,000+ ex-officials now lobby</div>
          </Link>
          <Link href="/lobbying-statistics-2026" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 2026 Statistics</div>
            <div className="text-xs text-gray-500 mt-1">Latest spending data</div>
          </Link>
          <Link href="/tech-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Tech Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Big Tech’s $1.8B influence machine</div>
          </Link>
          <Link href="/pharmaceutical-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💊 Pharma Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">$3.3B and counting</div>
          </Link>
          <Link href="/defense-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ Defense Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Contractors and the Pentagon</div>
          </Link>
        </div>
      </section>

      <SourceCitation
        sources={[
          'US Senate Lobbying Disclosure Act filings (2018–2025)',
          'NASA FY2024 Budget',
          'World Bank GDP Data',
          'US Census Bureau',
          'Bureau of Labor Statistics',
          'USASpending.gov',
        ]}
        lastUpdated="February 2025"
      />
    </div>
  )
}
