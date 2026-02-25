import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: "Big Tech&apos;s Lobbying War: $150 Million to Shape the Rules",
  description: 'Google, Meta, Amazon, Apple, and Microsoft have spent over $150 million lobbying Congress on AI, antitrust, privacy, and trade. Here are the real numbers.',
}

export default function TechLobbyingWarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: "Big Tech&apos;s Lobbying War" },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Tech</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Big Tech&apos;s Lobbying War:{' '}
        <span className="text-blue-600">$150 Million</span>{' '}
        to Shape the Rules
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/tech-lobbying-war" title="Big Tech&apos;s $150M Lobbying War" />

      <div className="my-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-blue-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          The biggest names in tech — Google, Meta, Amazon, Apple, Microsoft, Qualcomm, and Oracle — have collectively 
          spent over <strong>$150 million</strong> on federal lobbying. Qualcomm alone leads with <strong>$43.3 million</strong> across 
          its registrations. The issues? AI regulation, antitrust, data privacy, trade policy, immigration (H-1B visas), 
          and increasingly, defense contracts.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Silicon Valley Goes to Washington</h2>

        <p>
          A decade ago, Big Tech had a minimal presence in Washington. Google&apos;s DC office was an afterthought. 
          Facebook didn&apos;t even have a lobbying team. The industry prided itself on disrupting the world 
          from California, far from the swamp of Beltway politics.
        </p>

        <p>
          Those days are over. Today, tech companies are among the most aggressive lobbyists in Washington, 
          spending tens of millions annually to shape the rules that govern artificial intelligence, 
          data privacy, antitrust enforcement, content moderation, and international trade.
        </p>

        <p>
          Our analysis of lobbying disclosure filings reveals just how much Silicon Valley now spends 
          to influence the government it once ignored.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Spending Scoreboard</h2>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Big Tech Lobbying Spending (All Registrations)</h3>
          <div className="space-y-3">
            {[
              { name: 'Qualcomm', amount: '$43.3M', filings: '74 filings', issues: 'Trade, telecom, tech standards, tax, aviation' },
              { name: 'Microsoft', amount: '$19.1M', filings: '72 filings', issues: 'AI, cybersecurity, immigration, trade, defense, privacy' },
              { name: 'Amazon', amount: '$18.5M', filings: '68 filings', issues: 'Tax, trade, labor, transportation, small business' },
              { name: 'Google / Alphabet', amount: '$16.3M', filings: '76 filings', issues: 'Privacy, homeland security, defense, science, budget' },
              { name: 'Meta Platforms', amount: '$15.1M', filings: '278 filings', issues: 'Privacy, content moderation, trade, cybersecurity' },
              { name: 'Apple', amount: '$9.3M', filings: '66 filings', issues: 'Trade, privacy, labor, civil rights, immigration' },
              { name: 'Oracle', amount: '$5.8M', filings: '68 filings', issues: 'Defense, veterans, cybersecurity, healthcare, trade' },
            ].map(item => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-gray-200 last:border-0">
                <div className="font-bold text-gray-900 sm:w-40">{item.name}</div>
                <div className="text-blue-600 font-bold sm:w-24">{item.amount}</div>
                <div className="text-sm text-gray-500 sm:w-20">{item.filings}</div>
                <div className="text-sm text-gray-600 flex-1">{item.issues}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Note: Companies appear under multiple registrations with different lobbying firms. Totals reflect all registrations found in our database.
          </p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Qualcomm Surprise</h2>

        <p>
          The biggest tech spender isn&apos;t a household name — it&apos;s <strong>Qualcomm</strong>, 
          the San Diego chipmaker, with an astonishing <strong>$43.3 million</strong> across three separate 
          lobbying registrations. Qualcomm&apos;s lobbying focuses on trade policy (particularly with China), 
          telecommunications standards, and semiconductor policy.
        </p>

        <p>
          This makes sense when you understand Qualcomm&apos;s business: the company&apos;s entire revenue 
          depends on patent licensing and chip sales that are heavily influenced by government trade policy, 
          spectrum allocation, and technology standards. When the US restricted chip exports to China, 
          Qualcomm had billions on the line.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What Are They Lobbying On?</h2>

        <p>
          The issue codes in tech lobbying filings reveal a shifting landscape:
        </p>

        <ul>
          <li>
            <strong>CPT (Computers/IT)</strong> — The core issue for all tech companies. Covers AI regulation, 
            cybersecurity mandates, and data center policy.
          </li>
          <li>
            <strong>TRD (Trade)</strong> — Tariffs, export controls (especially to China), and international 
            data transfer rules. Every major tech company lobbies heavily on trade.
          </li>
          <li>
            <strong>CPI (Consumer Privacy)</strong> — As Congress debates a federal privacy law, 
            tech companies are fighting to shape the rules — often lobbying for weaker requirements 
            than what states like California have enacted.
          </li>
          <li>
            <strong>IMM (Immigration)</strong> — H-1B visa policy is existential for tech companies 
            that depend on foreign engineering talent. Apple, Microsoft, and Amazon all lobby on immigration.
          </li>
          <li>
            <strong>DEF (Defense)</strong> — Increasingly, tech companies want Pentagon contracts. 
            Google, Oracle, Microsoft, and Amazon all lobby on defense issues as cloud computing 
            and AI become military priorities.
          </li>
          <li>
            <strong>TAX (Taxation)</strong> — International tax rules, R&amp;D credits, and the 
            ongoing debate over how to tax digital services globally.
          </li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Meta: The Filing Machine</h2>

        <p>
          Meta Platforms (formerly Facebook) stands out for the sheer volume of its lobbying activity: 
          <strong>278 filings</strong> across 13 separate registrations, totaling <strong>$15.1 million</strong>. 
          That&apos;s more filings than any other tech company — reflecting Meta&apos;s unique regulatory exposure 
          on content moderation, privacy, antitrust, and now AI.
        </p>

        <p>
          Meta&apos;s lobbying intensified after the Cambridge Analytica scandal in 2018 and has stayed elevated 
          through ongoing antitrust litigation, the debate over children&apos;s online safety, and the company&apos;s 
          pivot to AI and the metaverse. When regulators are constantly at your door, 
          you invest in lobbyists to manage the conversation.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The AI Lobbying Surge</h2>

        <p>
          The newest battleground is artificial intelligence regulation. As Congress considers frameworks 
          for AI governance, every major tech company is spending aggressively to influence the outcome. 
          The stakes are enormous: overly strict regulation could hamper American competitiveness, 
          while too-loose rules could allow harmful AI systems to proliferate unchecked.
        </p>

        <p>
          Tech companies generally lobby for &quot;innovation-friendly&quot; regulation — industry speak for 
          lighter-touch rules. They argue that heavy regulation would benefit Chinese AI companies 
          that face no such constraints. Critics counter that self-regulation has failed in every 
          previous tech domain, from social media to data privacy.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Defense Pivot</h2>

        <p>
          Perhaps the most significant shift in tech lobbying is the growing focus on defense. 
          A decade ago, Google employees protested the company&apos;s involvement in Project Maven, 
          a Pentagon AI program. Today, Google, Microsoft, Amazon, and Oracle are all aggressively 
          pursuing Defense Department contracts — and lobbying to win them.
        </p>

        <p>
          The Pentagon&apos;s cloud computing contracts alone are worth tens of billions. 
          Amazon (through AWS) and Microsoft (through Azure) have fought bitter battles 
          over the JEDI and subsequent cloud contracts, with lobbying playing a significant role 
          in the procurement process.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What This Means for Tech Policy</h2>

        <p>
          The $150 million question: is Big Tech&apos;s lobbying spending paying off? 
          Congress has debated — and failed to pass — comprehensive privacy legislation, 
          AI regulation, and antitrust reform for years. Whether that gridlock reflects 
          genuine policy complexity or successful industry lobbying is the central debate.
        </p>

        <p>
          What&apos;s clear is that the era of tech companies ignoring Washington is over. 
          The industry that once saw government as irrelevant now sees it as existential — 
          and is spending accordingly.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search tech company lobbying filings and see exactly what they&apos;re spending on.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/issues" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Issues Lobbied →
            </Link>
            <Link href="/trends" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Spending Trends →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation 
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby analysis of tech company lobbying registrations',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/ai-regulation-fight" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🤖 The AI Regulation Fight</div>
          </Link>
          <Link href="/investigations/crypto-lobbying-explosion" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">₿ Crypto Lobbying Explosion</div>
          </Link>
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/tech-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Tech Lobbying Overview</div>
          </Link>
          <Link href="/issues/CPT" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📋 Copyright/Patent Issues</div>
          </Link>
          <Link href="/client-trajectories" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 Client Trajectories</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
