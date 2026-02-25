import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: "The Battle to Shape AI Policy — Tech Lobbying on Artificial Intelligence",
  description: 'Google, Microsoft, Meta, Amazon, Apple, and NVIDIA are spending millions lobbying to shape AI regulation. Here are the numbers.',
}

interface Client {
  id: number
  name: string
  totalIncome: number
  filings: number
  years: number[]
  issues: string[]
}

interface Issue {
  code: string
  totalIncome: number
  filings: number
  clients: number
}

export default function AIRegulationFightPage() {
  const dataDir = path.join(process.cwd(), 'public', 'data')
  const clients: Client[] = JSON.parse(fs.readFileSync(path.join(dataDir, 'top-clients.json'), 'utf-8'))
  const issues: Issue[] = JSON.parse(fs.readFileSync(path.join(dataDir, 'issues.json'), 'utf-8'))

  const techMap: Record<string, string[]> = {
    'Google': ['google client services', 'google public sector', 'google cloud'],
    'Apple': ['apple inc', 'apple '],
    'Microsoft': ['microsoft'],
    'Meta': ['meta platforms', 'facebook'],
    'Amazon': ['amazon.com', 'amazon '],
    'NVIDIA': ['nvidia'],
  }

  const grouped: Record<string, { total: number; entries: number }> = {}
  Object.entries(techMap).forEach(([label, terms]) => {
    const matches = clients.filter(c => terms.some(t => c.name.toLowerCase().includes(t)))
    grouped[label] = {
      total: matches.reduce((s, c) => s + c.totalIncome, 0),
      entries: matches.length,
    }
  })

  const sciIssue = issues.find(i => i.code === 'SCI')
  const cptIssue = issues.find(i => i.code === 'CPT')
  const comIssue = issues.find(i => i.code === 'COM')

  const fmt = (n: number) => {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`
    if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`
    return `$${(n / 1e3).toFixed(0)}K`
  }

  const totalTechLobbying = Object.values(grouped).reduce((s, g) => s + g.total, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'The Battle to Shape AI Policy' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">AI</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The Battle to Shape AI Policy:{' '}
        <span className="text-cyan-700">{fmt(totalTechLobbying)}</span>{' '}
        and Counting
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/ai-regulation-fight" title="The Battle to Shape AI Policy" />

      <div className="my-8 bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-cyan-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          The six biggest tech companies have spent a combined <strong>{fmt(totalTechLobbying)}</strong> lobbying
          the federal government. As Congress debates how to regulate artificial intelligence, these companies are
          deploying massive lobbying operations to ensure the rules are written in their favor.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Most Important Lobbying Battle of the Decade</h2>

        <p>
          Artificial intelligence is transforming everything — from how we work to how wars are fought. And in
          Washington, a fierce lobbying battle is underway to determine who gets to write the rules. On one side:
          tech companies spending millions to prevent heavy-handed regulation. On the other: a growing coalition
          of advocacy groups, labor unions, and even some tech insiders warning that AI poses existential risks.
        </p>

        <p>
          The stakes are enormous. The companies building the most powerful AI systems are also the ones spending
          the most to influence how those systems will be regulated. Our analysis of federal lobbying data reveals
          just how much money is flowing into this fight.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Who&apos;s Spending What</h2>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {Object.entries(grouped)
              .sort((a, b) => b[1].total - a[1].total)
              .map(([name, data]) => (
                <div key={name} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0">
                  <div>
                    <span className="font-semibold text-gray-900">{name}</span>
                    <span className="text-sm text-gray-500 ml-2">({data.entries} registrations)</span>
                  </div>
                  <span className="text-lg font-bold text-cyan-700">{fmt(data.total)}</span>
                </div>
              ))}
          </div>
        </div>

        <p>
          Google leads all tech companies with approximately <strong>{fmt(grouped['Google']?.total || 0)}</strong> across
          multiple lobbying registrations — including Google Client Services, Google Public Sector (formerly Google Cloud),
          and related entities. Apple follows closely at <strong>{fmt(grouped['Apple']?.total || 0)}</strong>, with
          Microsoft at <strong>{fmt(grouped['Microsoft']?.total || 0)}</strong>.
        </p>

        <p>
          Even NVIDIA, a company most people associate with graphics cards, has entered the lobbying arena
          with <strong>{fmt(grouped['NVIDIA']?.total || 0)}</strong> — reflecting the chip maker&apos;s critical role
          as the supplier of AI training hardware. When your GPUs are the backbone of every major AI system,
          you have a lot at stake in how AI gets regulated.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Issues at Stake</h2>

        <p>
          Tech companies aren&apos;t just lobbying on AI — they&apos;re lobbying on a sprawling set of overlapping
          issues. Three issue codes in the federal lobbying database tell the story:
        </p>

        <ul>
          <li>
            <strong>SCI (Science & Technology)</strong> — {fmt(sciIssue?.totalIncome || 0)} in total lobbying
            across {sciIssue?.filings?.toLocaleString()} filings from {sciIssue?.clients?.toLocaleString()} clients.
            This covers AI research funding, NIST standards, and technology policy broadly.
          </li>
          <li>
            <strong>CPT (Computer Industry)</strong> — {fmt(cptIssue?.totalIncome || 0)} in total lobbying
            across {cptIssue?.filings?.toLocaleString()} filings from {cptIssue?.clients?.toLocaleString()} clients.
            This captures lobbying on semiconductors, software regulation, and computing infrastructure.
          </li>
          <li>
            <strong>COM (Communications)</strong> — {fmt(comIssue?.totalIncome || 0)} across {comIssue?.filings?.toLocaleString()} filings.
            Covers telecom, internet regulation, and digital infrastructure — all intertwined with AI deployment.
          </li>
        </ul>

        <p>
          Combined, these three issue areas represent over <strong>{fmt((sciIssue?.totalIncome || 0) + (cptIssue?.totalIncome || 0) + (comIssue?.totalIncome || 0))}</strong> in
          total lobbying expenditures. AI touches all of them.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>What Big Tech Wants</h2>

        <p>
          The tech industry&apos;s lobbying message on AI has been remarkably consistent: regulate, but not too much.
          Companies publicly support &ldquo;responsible AI&rdquo; frameworks while lobbying against specific proposals
          that would impose strict liability, mandatory testing requirements, or algorithmic transparency rules.
        </p>

        <p>
          Key lobbying priorities include:
        </p>

        <ul>
          <li><strong>Preempting state laws</strong> — Tech companies want federal AI legislation that overrides a patchwork of state regulations, particularly California&apos;s aggressive proposals</li>
          <li><strong>Voluntary standards over mandates</strong> — Industry-led guidelines rather than binding rules</li>
          <li><strong>Safe harbor protections</strong> — Legal shields for companies that follow &ldquo;best practices&rdquo;</li>
          <li><strong>Export controls</strong> — Shaping rules on AI chip exports to China, where NVIDIA has billions at stake</li>
          <li><strong>Government procurement</strong> — Winning federal AI contracts while influencing the standards those contracts require</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Open Source Divide</h2>

        <p>
          One of the most fascinating lobbying battles is playing out over open-source AI. Meta, which released its
          Llama models as open source, has lobbied aggressively for policies that protect open-source development.
          Meanwhile, competitors like Google and OpenAI have pushed for safety requirements that critics say would
          effectively ban open-source frontier models.
        </p>

        <p>
          This isn&apos;t altruism — it&apos;s strategy. Meta&apos;s open-source approach lets it build an ecosystem
          around its models while avoiding the infrastructure costs of serving them. Regulations that restrict
          open-source AI would disproportionately benefit companies with closed, proprietary systems.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The NVIDIA Factor</h2>

        <p>
          NVIDIA occupies a unique position in the AI lobbying landscape. The company doesn&apos;t build AI models —
          it builds the hardware that everyone else needs to train them. With {fmt(grouped['NVIDIA']?.total || 0)} in
          lobbying expenditures, NVIDIA&apos;s focus is laser-targeted on export controls and semiconductor policy.
        </p>

        <p>
          The Biden administration&apos;s restrictions on AI chip exports to China directly threatened NVIDIA&apos;s
          revenue. The company has lobbied intensely to shape these rules, arguing that overly broad restrictions
          will push customers to foreign competitors while doing little to slow China&apos;s AI development.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why It Matters</h2>

        <p>
          The rules written today will shape AI development for decades. When the companies building the most powerful
          AI systems are also the ones spending the most to influence regulation, the public should pay attention.
          The lobbying data reveals a clear pattern: every major AI company is investing heavily in Washington,
          and they&apos;re not doing it out of civic duty.
        </p>

        <p>
          The question isn&apos;t whether AI will be regulated — it&apos;s whether the regulations will protect the
          public or protect the companies. With {fmt(totalTechLobbying)} on the table, the tech industry is betting
          it can shape the answer.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search tech companies and see exactly what they&apos;re spending on lobbying.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/issues" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Issues Lobbied →
            </Link>
            <Link href="/investigations/tech-lobbying-war" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Big Tech Lobbying →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby analysis of tech company lobbying registrations',
          'Federal issue code data from lobbying disclosure filings',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/tech-lobbying-war" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Big Tech's $150M Lobbying War</div>
          </Link>
          <Link href="/investigations/crypto-lobbying-explosion" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">₿ The Crypto Lobbying Explosion</div>
          </Link>
          <Link href="/investigations/issue-arms-race" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">⚔️ The Issue Arms Race</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/issues/CPT" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📋 Copyright/Patent Issue Data</div>
          </Link>
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
          </Link>
          <Link href="/tech-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Tech Lobbying Overview</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
