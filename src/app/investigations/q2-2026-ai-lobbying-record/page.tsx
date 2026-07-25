import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'Q2 2026 Lobbying: OpenAI and Anthropic Shatter Records While Big Tech Holds Steady | OpenLobby',
  description: 'OpenAI and Anthropic spent a combined $3.17M on federal lobbying in Q2 2026, up 23% from Q1. Anthropic alone outspent Nvidia. Defense contractors pulled back 3.3%. Full breakdown inside.',
  keywords: ['Q2 2026 lobbying', 'OpenAI lobbying', 'Anthropic lobbying', 'AI lobbying spending', 'federal lobbying Q2 2026', 'tech lobbying 2026'],
  openGraph: {
    title: 'Q2 2026 Lobbying: OpenAI and Anthropic Shatter Records',
    description: 'AI startups are outspending legacy defense and tech giants. Anthropic topped Nvidia in Q2 lobbying. We break down the numbers.',
    url: 'https://www.openlobby.us/investigations/q2-2026-ai-lobbying-record',
  },
  alternates: { canonical: 'https://www.openlobby.us/investigations/q2-2026-ai-lobbying-record' },
}

export default function Q22026AILobbyingRecordPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Q2 2026 Lobbying: OpenAI and Anthropic Shatter Records While Big Tech Holds Steady",
        author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" },
        publisher: { "@type": "Organization", name: "OpenLobby" },
        datePublished: "2026-07-25",
        dateModified: "2026-07-25",
        description: "OpenAI and Anthropic spent a combined $3.17M on federal lobbying in Q2 2026, up 23% from Q1. Anthropic outspent Nvidia. Defense contractors pulled back.",
        mainEntityOfPage: "https://www.openlobby.us/investigations/q2-2026-ai-lobbying-record",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much did OpenAI spend on lobbying in Q2 2026?",
            acceptedAnswer: { "@type": "Answer", text: "OpenAI spent $1.2 million on federal lobbying in Q2 2026, an increase of nearly 18% from Q1 2026. Its spending nearly doubled compared to Q2 2025." },
          },
          {
            "@type": "Question",
            name: "How much did Anthropic spend on lobbying in Q2 2026?",
            acceptedAnswer: { "@type": "Answer", text: "Anthropic spent $1.97 million on federal lobbying in Q2 2026, up 26% from Q1. Its first-half 2026 total of $3.5 million already exceeds all of 2025 ($3.1 million)." },
          },
          {
            "@type": "Question",
            name: "Did Anthropic outspend Nvidia on lobbying?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. In Q2 2026, Anthropic spent $1.97 million vs. Nvidia's $1.25 million on federal lobbying — a remarkable shift showing AI startups rivaling chipmakers in Washington influence." },
          },
          {
            "@type": "Question",
            name: "How much did the Magnificent Seven tech companies spend on lobbying in Q2 2026?",
            acceptedAnswer: { "@type": "Answer", text: "Meta, Amazon, Google, Microsoft, Apple, Nvidia, and Tesla spent a combined $21.25 million on federal lobbying in Q2 2026, essentially flat from Q1. Meta led at $5.99 million." },
          },
        ],
      }) }} />

      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Q2 2026 AI Lobbying Record' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">AI</span>
        <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">Breaking</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Q2 2026:{' '}
        <span className="text-cyan-700">OpenAI and Anthropic Shatter Records</span>{' '}
        While Big Tech Holds Steady
      </h1>

      <p className="text-gray-500 mb-4">Published July 25, 2026 · 11 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/q2-2026-ai-lobbying-record" title="Q2 2026: OpenAI and Anthropic Shatter Lobbying Records" />

      <div className="my-8 bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-cyan-800 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          OpenAI and Anthropic spent a combined <strong>$3.17 million</strong> on federal lobbying in Q2 2026 — up 23% from Q1.
          Anthropic alone outspent <strong>Nvidia</strong> and nearly matched Oracle. Meanwhile, the Magnificent Seven tech companies
          held steady at $21.25M, and defense contractors <em>pulled back</em> 3.3%. The balance of power in Washington lobbying
          is shifting from legacy incumbents to AI-native companies preparing for IPOs and midterm battles.
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {[
          { value: '$3.17M', label: 'OpenAI + Anthropic Q2', color: 'text-cyan-700' },
          { value: '+23%', label: 'Quarter-over-Quarter', color: 'text-green-700' },
          { value: '$21.25M', label: 'Mag 7 Tech Combined', color: 'text-indigo-700' },
          { value: '-3.3%', label: 'Defense Contractors', color: 'text-red-700' },
        ].map((s) => (
          <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
            <div className={`text-2xl md:text-3xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* AI Startups: The New Power Players */}
      <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        AI Startups: The New Power Players
      </h2>
      <p className="text-gray-700 mb-4">
        The most striking trend in Q2 2026 lobbying data isn&apos;t the total dollars — it&apos;s <em>who&apos;s spending them</em>.
        OpenAI and Anthropic, companies that barely existed in Washington five years ago, are now outgunning some of
        the most established corporate lobbying operations in America.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Anthropic</strong> spent <strong>$1.97 million</strong> in Q2, up 26% from Q1. That&apos;s more than Nvidia ($1.25M)
        and within striking distance of Oracle ($2M). For a company that was founded in 2021, this is a remarkable
        Washington footprint.
      </p>
      <p className="text-gray-700 mb-4">
        Even more notable: Anthropic&apos;s first-half 2026 total of approximately <strong>$3.5 million</strong> already
        exceeds the <strong>$3.1 million</strong> it spent in all of 2025, according to Bloomberg Government data. The company
        has essentially doubled its lobbying run rate in a single year.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>OpenAI</strong> spent <strong>$1.2 million</strong> in Q2, up 18% from Q1 and nearly double its Q2 2025 figure.
        Both companies reported lobbying on cybersecurity, copyright, cloud computing, and defense procurement — signaling
        they&apos;re not just fighting for favorable AI regulation but positioning for lucrative government contracts.
      </p>

      <div className="my-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-bold text-amber-800 mb-3">Q2 2026 Lobbying Spending: AI vs. Legacy Tech</h3>
        <div className="space-y-3 text-sm">
          {[
            { name: 'Meta', amount: '$5.99M', change: '↓ 15% from Q1', bar: 100 },
            { name: 'Amazon', amount: '$4.36M', change: 'Flat from Q1', bar: 73 },
            { name: 'Google', amount: '$3.57M', change: '↑ 25% from Q1', bar: 60 },
            { name: 'Microsoft', amount: '$2.69M', change: '↑ 13% from Q1', bar: 45 },
            { name: 'Anthropic', amount: '$1.97M', change: '↑ 26% from Q1', bar: 33 },
            { name: 'Nvidia', amount: '$1.25M', change: '—', bar: 21 },
            { name: 'OpenAI', amount: '$1.20M', change: '↑ 18% from Q1', bar: 20 },
          ].map((row) => (
            <div key={row.name} className="flex items-center gap-3">
              <span className="w-24 font-semibold text-gray-700">{row.name}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full" style={{ width: `${row.bar}%` }} />
              </div>
              <span className="w-20 text-right font-bold text-gray-800">{row.amount}</span>
              <span className="w-32 text-right text-gray-500 text-xs hidden md:block">{row.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The IPO Factor */}
      <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The IPO Factor
      </h2>
      <p className="text-gray-700 mb-4">
        The timing of OpenAI and Anthropic&apos;s lobbying surge is no coincidence. OpenAI confidentially filed for
        an IPO in June 2026, and both companies are racing to shape the regulatory environment before they go public.
        A favorable federal framework — especially one that preempts aggressive state-level AI laws — could be worth
        billions in market cap.
      </p>
      <p className="text-gray-700 mb-4">
        This is a playbook we&apos;ve seen before. Uber, Airbnb, and other tech companies dramatically increased their
        lobbying spend in the quarters before IPO. But the stakes for AI companies are higher: they&apos;re not just
        fighting local taxi commissions — they&apos;re trying to shape the foundational legal framework for a technology
        that will reshape the global economy.
      </p>

      {/* The Magnificent Seven: Holding Steady */}
      <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The Magnificent Seven: Holding Steady at $21.25M
      </h2>
      <p className="text-gray-700 mb-4">
        The established tech giants — Meta, Amazon, Google, Microsoft, Apple, Nvidia, and Tesla — spent a combined
        <strong> $21.25 million</strong> on federal lobbying in Q2, essentially unchanged from $21.27 million in Q1.
        But beneath the flat topline, there was significant churn.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Meta</strong> remained the biggest spender at $5.99M but cut its lobbying 15% from Q1 — possibly
        signaling confidence in its current regulatory position. <strong>Google</strong> moved in the opposite direction,
        boosting spending 25% to $3.57M as antitrust scrutiny intensified. <strong>Microsoft</strong> also increased
        13% to $2.69M.
      </p>
      <p className="text-gray-700 mb-4">
        Collectively, the Mag 7 boosted spending 7.7% compared to Q2 2025, with lobbying focused on trade, China policy,
        taxes, and export controls.
      </p>

      {/* Defense Contractors Pull Back */}
      <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Defense Contractors Pull Back
      </h2>
      <p className="text-gray-700 mb-4">
        In a notable counterpoint to the AI surge, the eight largest U.S. defense contractors reduced their combined
        lobbying spend to <strong>$19.68 million</strong> in Q2, down 3.3% from $20.36 million in Q1.
      </p>
      <p className="text-gray-700 mb-4">
        Lockheed Martin led at $4.18M, followed by RTX at $3.86M. The pullback may reflect confidence that the
        current defense budget trajectory — fueled by Iran operations and the $916B defense authorization — is
        already locked in, reducing the need for aggressive lobbying.
      </p>
      <p className="text-gray-700 mb-4">
        It&apos;s a telling shift: AI startups are <em>increasing</em> lobbying because their regulatory future is uncertain,
        while defense giants are <em>decreasing</em> because their funding is secure. Follow the anxiety, follow the money.
      </p>

      {/* What This Means */}
      <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        What This Means for H2 2026
      </h2>
      <p className="text-gray-700 mb-4">
        With Q1 spending already at a record <Link href="/investigations/q1-2026-lobbying-record" className="text-cyan-700 underline">$1.4 billion</Link>,
        and Q2 filings still being processed, 2026 is on pace to be the most expensive lobbying year in American history.
        The combination of midterm elections, AI regulation battles, ongoing defense spending, and trade policy uncertainty
        is creating a perfect storm.
      </p>
      <p className="text-gray-700 mb-4">
        Expect AI lobbying to accelerate further in Q3 and Q4 as:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
        <li>OpenAI&apos;s IPO roadshow intensifies pressure on favorable regulation</li>
        <li>Midterm campaign donations create new leverage points</li>
        <li>State-level AI laws continue proliferating, increasing demand for federal preemption</li>
        <li>Defense AI procurement contracts worth billions come up for bid</li>
      </ul>

      <div className="my-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-800 mb-2">2026 Lobbying Pace Check</h3>
        <p className="text-gray-600 text-sm mb-3">
          Q1 2026 set the all-time quarterly record at <strong>$1.4 billion</strong>. If Q2-Q4 maintain similar pace,
          total 2026 lobbying could reach <strong>$5.6 billion</strong>, surpassing 2025&apos;s record of $5.08B by 10%+.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">$0</span>
          <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full" style={{ width: '25%' }} />
          </div>
          <span className="text-xs text-gray-500">$5.6B projected</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">$1.4B reported (Q1) · Q2 filings in progress</p>
      </div>

      <SourceCitation
        sources={[
          'Senate Office of Public Records — Lobbying Disclosure Act filings (Q2 2026)',
          'CNBC analysis of Q2 2026 lobbying disclosures (July 21, 2026)',
          'Bloomberg Government — Anthropic lobbying spending analysis',
          'OpenSecrets — Federal lobbying trends and spending data',
        ]}
      />

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { slug: 'q1-2026-lobbying-record', title: 'Q1 2026: Record $1.4B as Iran War, AI, and Tariffs Collide', tag: 'Breaking' },
            { slug: 'ai-lobbying-boom-2026', title: 'The AI Lobbying Boom: Tech Giants Spending $900M to Shape Regulation', tag: 'AI' },
            { slug: 'defense-lobbying-2026', title: 'Defense Lobbying 2026: Contractors Cash In on Iran War', tag: 'Defense' },
            { slug: 'midterm-lobbying-2026', title: '2026 Midterm Lobbying: Who\'s Spending to Influence Key Races', tag: 'Elections' },
          ].map((r) => (
            <Link key={r.slug} href={`/investigations/${r.slug}`}
              className="group block bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md hover:border-cyan-300 transition-all">
              <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full">{r.tag}</span>
              <h4 className="text-sm font-bold mt-2 group-hover:text-cyan-700 transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>{r.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
