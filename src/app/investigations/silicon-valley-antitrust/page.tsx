import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'
import QuickFacts from '@/components/QuickFacts'

export const metadata: Metadata = {
  title: "Silicon Valley vs. Antitrust: Big Tech's Fight to Stay Big",
  description: 'Google, Apple, Amazon, Meta, and Microsoft have spent over $150M lobbying against antitrust regulation. How tech giants fight to preserve their monopolies.',
}

export default function SiliconValleyAntitrustPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Silicon Valley vs. Antitrust: Big Tech's Fight to Stay Big", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "How tech giants spend millions lobbying against antitrust enforcement.", mainEntityOfPage: "https://www.openlobby.us/investigations/silicon-valley-antitrust" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Silicon Valley vs. Antitrust' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">Tech</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Silicon Valley vs. Antitrust:{' '}
        <span className="text-cyan-600">$150M+</span>{' '}
        to Stay Big
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 11 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/silicon-valley-antitrust" title="Silicon Valley vs. Antitrust" />

      <QuickFacts facts={[
        { label: 'Big 5 tech lobbying combined', value: '$150M+' },
        { label: 'Google/Alphabet lobbying', value: '$50M+' },
        { label: 'Amazon lobbying', value: '$30M+' },
        { label: 'Meta/Facebook lobbying', value: '$26M+' },
      ]} />

      <div className="my-8 bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-cyan-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          The five biggest tech companies — Google, Amazon, Meta, Apple, and Microsoft — have collectively spent over{' '}
          <strong>$150 million</strong> lobbying Congress and federal agencies. Their #1 priority? Stopping antitrust
          legislation that could break up their empires. As the FTC and DOJ have ramped up antitrust enforcement,
          Big Tech has ramped up its spending to match.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Five Giants</h2>

        <p>
          In 2010, Google spent modestly on lobbying. By 2024, it was one of the biggest corporate lobbying spenders
          in America. The same story played out at Amazon, Meta, Apple, and Microsoft. As Washington turned its attention
          toward tech regulation, the industry responded with a spending blitz unprecedented in its history.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Big Tech Lobbying Spending</h3>
          <div className="space-y-3">
            {[
              { name: 'Google/Alphabet (all entities)', amount: '$50M+', detail: '300+ filings across subsidiaries', href: '/clients/google-llc' },
              { name: 'Amazon (all entities)', amount: '$30M+', detail: '200+ filings — retail, cloud, devices', href: '/clients/amazon-com-services-llc' },
              { name: 'Meta Platforms (fka Facebook)', amount: '$26M+', detail: '150+ filings — $26M in 2024 alone', href: '/clients/meta-platforms-inc' },
              { name: 'Apple Inc.', amount: '$15M+', detail: '100+ filings', href: '/clients/apple-inc' },
              { name: 'Microsoft Corp.', amount: '$20M+', detail: '140+ filings', href: '/clients/microsoft-corp' },
              { name: 'Amazon Web Services', amount: '$8M+', detail: '60+ filings — cloud lobbying', href: '/clients/amazon-web-services-inc' },
            ].map(item => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-gray-200 last:border-0">
                <div className="font-semibold text-gray-900 sm:w-72">{item.href ? <Link href={item.href} className="text-primary hover:underline">{item.name}</Link> : item.name}</div>
                <div className="text-cyan-600 font-bold sm:w-24">{item.amount}</div>
                <div className="text-sm text-gray-600 flex-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Antitrust Threat</h2>

        <p>
          The tech industry&apos;s lobbying surge was triggered by something specific: the federal government started
          treating Big Tech the way it once treated Standard Oil. Starting around 2019, a bipartisan consensus emerged
          that the tech giants had grown too powerful, too dominant, and too unaccountable.
        </p>

        <p>
          The DOJ filed an antitrust lawsuit against Google in 2020 — the biggest monopoly case since Microsoft in 1998.
          The FTC sued Meta (then Facebook) over its acquisitions of Instagram and WhatsApp. Congress introduced a package
          of antitrust bills that would have banned tech platforms from favoring their own products, required data
          portability, and even forced structural separations.
        </p>

        <p>
          Not a single one of those bills passed. The tech lobby made sure of that.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What Tech Lobbies On</h2>

        <p>
          The issue codes in Big Tech&apos;s lobbying filings reveal a multi-front battle:
        </p>

        <ul>
          <li><strong><Link href="/issues/CPT" className="text-primary hover:underline">CPT (Computer Industry)</Link></strong> — Platform regulation, algorithm rules, app store policies</li>
          <li><strong><Link href="/issues/TEC" className="text-primary hover:underline">TEC (Telecom)</Link></strong> — Net neutrality, broadband regulation, Section 230</li>
          <li><strong><Link href="/issues/TRD" className="text-primary hover:underline">TRD (Trade)</Link></strong> — International data flows, digital trade agreements</li>
          <li><strong><Link href="/issues/TAX" className="text-primary hover:underline">TAX (Taxation)</Link></strong> — Global minimum tax, digital services taxes, R&amp;D credits</li>
          <li><strong><Link href="/issues/CDT" className="text-primary hover:underline">CDT (Copyright/Patent)</Link></strong> — IP protection, safe harbor provisions, AI training data</li>
        </ul>

        <p>
          But the biggest lobbying priority — often disclosed in the &quot;specific issues&quot; field of lobbying reports —
          is antitrust. Bills like the American Innovation and Choice Online Act, the Open App Markets Act, and the
          Platform Competition and Opportunity Act all triggered massive lobbying campaigns.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Google: The $50 Million Defense</h2>

        <p>
          <Link href="/clients/google-llc" className="text-primary hover:underline">Google</Link> is the single biggest
          tech lobbying spender — and the most legally exposed. With antitrust cases pending over its search monopoly
          and ad tech dominance, Google has a lot to lose.
        </p>

        <p>
          In January 2025, a federal judge ruled that Google illegally monopolized the search market, finding that the
          company paid <strong>$26 billion</strong> annually to be the default search engine on browsers and phones.
          The remedies phase could force Google to stop these payments, open up its search index, or even divest Chrome.
        </p>

        <p>
          Google&apos;s response? More lobbying. The company&apos;s DC office has expanded dramatically, and its lobbying
          filings show a relentless focus on antitrust legislation, FTC enforcement powers, and DOJ authority.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Meta: From &quot;Move Fast&quot; to &quot;Lobby Hard&quot;</h2>

        <p>
          <Link href="/clients/meta-platforms-inc" className="text-primary hover:underline">Meta</Link> spent{' '}
          <strong>$26 million</strong> on lobbying in 2024 alone — making it one of the top corporate lobbying spenders
          in America in a single year. The company faces its own antitrust suit from the FTC, which alleges that
          Facebook&apos;s acquisitions of Instagram and WhatsApp were illegal monopoly maintenance.
        </p>

        <p>
          But Meta&apos;s lobbying goes far beyond antitrust. The company lobbies aggressively on AI regulation (it wants
          minimal rules for its LLaMA models), privacy legislation (it prefers federal preemption of stricter state laws),
          and content moderation rules (Section 230 reform terrifies the company).
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Amazon: Lobbying Across Every Business</h2>

        <p>
          <Link href="/clients/amazon-com-services-llc" className="text-primary hover:underline">Amazon</Link> lobbies
          across a remarkable range of issues because it operates in a remarkable range of industries: retail, cloud
          computing, entertainment, groceries, healthcare, logistics, and defense contracting.
        </p>

        <p>
          Amazon&apos;s lobbying filings reference antitrust, labor law (the company fiercely opposes unionization efforts),
          delivery regulations, drone policy, healthcare licensing, and defense procurement. Its cloud division,{' '}
          <Link href="/clients/amazon-web-services-inc" className="text-primary hover:underline">AWS</Link>, lobbies
          separately on government cloud contracts, data sovereignty, and cybersecurity rules.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Strategy: Death by Lobbying</h2>

        <p>
          Big Tech&apos;s antitrust lobbying strategy isn&apos;t to win the argument — it&apos;s to prevent the vote.
          The industry has perfected a playbook: hire lobbyists from both parties, fund think tanks that produce
          favorable research, run grassroots campaigns warning that antitrust reform will hurt small businesses and
          consumers, and — most effectively — make sure that no antitrust bill ever reaches the floor for a vote.
        </p>

        <p>
          It worked. Despite bipartisan support, the major tech antitrust bills of the 117th Congress died without a
          floor vote. The tech lobby didn&apos;t need to defeat the bills — it just needed to delay them past the end
          of the session. Mission accomplished.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What This Means</h2>

        <p>
          The tech industry was born in garages and dorm rooms. It now spends more on lobbying than most industries
          that have been in Washington for a century. The transformation of Silicon Valley from scrappy disruptors to
          entrenched incumbents lobbying to protect their market position is one of the great ironies of modern capitalism.
        </p>

        <p>
          As AI becomes the next frontier of both innovation and regulation, tech lobbying is poised to grow even further.
          The companies that dominate today&apos;s internet are spending furiously to ensure they dominate tomorrow&apos;s
          AI landscape too — and they&apos;re using the same playbook that worked against antitrust reform.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search Big Tech lobbying and see exactly what they&apos;re spending.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/clients" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Top Clients →
            </Link>
            <Link href="/issues/CPT" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Computer Industry Issues →
            </Link>
            <Link href="/investigations/tech-lobbying-war" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Tech Lobbying War →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby analysis of tech sector lobbying registrations',
          'DOJ and FTC antitrust case filings',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/tech-lobbying-war" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Big Tech&apos;s $150M Lobbying War</div>
          </Link>
          <Link href="/investigations/ai-regulation-fight" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🤖 Who&apos;s Lobbying to Shape AI Policy</div>
          </Link>
          <Link href="/investigations/the-22000-percent-roi" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 The 22,000% ROI</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
