import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: "Defense Lobby Surges as Pentagon Seeks $200B for Iran War | OpenLobby",
  description: 'The Pentagon wants $200 billion for the Iran war. Defense contractors are spending millions to make sure they get the contracts. We follow the money.',
}

export default function IranWarDefenseLobbyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Defense Lobby Surges as Pentagon Seeks $200B for Iran War", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-04-17", description: "The Pentagon wants $200 billion for the Iran war. Defense contractors are spending millions to make sure they get the contracts.", mainEntityOfPage: "https://www.openlobby.us/investigations/iran-war-defense-lobby" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Iran War Defense Lobby' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Defense</span>
        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">Breaking</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Defense Lobby Surges as Pentagon Seeks{' '}
        <span className="text-red-700">$200 Billion</span>{' '}
        for Iran War
      </h1>

      <p className="text-gray-500 mb-4">Published April 17, 2026 · 10 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/iran-war-defense-lobby" title="Defense Lobby Surges as Pentagon Seeks $200B for Iran War" />

      <div className="my-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-red-800 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          The Pentagon&apos;s $200 billion supplemental request for the Iran war represents the largest wartime spending
          ask since Iraq and Afghanistan. Defense contractors who have already spent tens of millions lobbying Congress
          are now positioning to capture a massive wave of new contracts — and <strong>lobbying spending on defense issues
          is on pace to hit record highs in 2026</strong>.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>$200 Billion Up for Grabs</h2>

        <p>
          On March 18, 2026, the Pentagon sent the White House a request for more than $200 billion in supplemental
          funding to finance military operations against Iran. The request — first reported by <em>The Washington Post</em> —
          represents the largest single wartime funding ask since the height of the Iraq and Afghanistan wars.
        </p>

        <p>
          At $11 billion per week in estimated operating costs, the Iran campaign is burning through money at a pace
          that dwarfs recent military operations. And where there&apos;s $200 billion in government spending, there&apos;s
          a lobbying industry ready to fight for every contract.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Who&apos;s Already Positioned</h2>

        <p>
          The defense contractors best positioned to capture Iran war contracts are the same ones who have spent
          the most on lobbying over the past decade. Our analysis of{' '}
          <Link href="/investigations/defense-contractor-lobbying" className="text-primary hover:underline">defense contractor lobbying data</Link>{' '}
          shows that the &ldquo;Big Five&rdquo; — Lockheed Martin, Boeing, RTX (Raytheon), Northrop Grumman, and
          General Dynamics — have collectively spent tens of millions lobbying Congress on defense and budget issues.
        </p>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {[
              { name: 'Lockheed Martin', focus: 'F-35 parts, missile systems, air defense', warAngle: 'Primary fighter jet and missile supplier' },
              { name: 'RTX / Raytheon', focus: 'Precision munitions, radar, Patriot systems', warAngle: 'Patriot missile batteries critical to Iran theater' },
              { name: 'Boeing', focus: 'KC-46 tankers, F/A-18, satellite systems', warAngle: 'Aerial refueling and naval aviation' },
              { name: 'Northrop Grumman', focus: 'B-21 bomber, Global Hawk drones, cyber', warAngle: 'Stealth bomber and ISR operations' },
              { name: 'General Dynamics', focus: 'Submarines, armored vehicles, IT systems', warAngle: 'Naval operations in Persian Gulf' },
            ].map(c => (
              <div key={c.name} className="px-6 py-4 border-b border-gray-100 last:border-0">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-900">{c.name}</span>
                  <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full">{c.warAngle}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Lobbying focus: {c.focus}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Q1 2026: Lobbying Filings Tell the Story</h2>

        <p>
          With first-quarter 2026 lobbying disclosures due April 20, early indicators suggest a significant uptick
          in defense-related lobbying. The pattern is familiar from the post-9/11 era: when Congress debates a massive
          military supplemental, every defense contractor, subcontractor, and industry association floods K Street
          with lobbyists to ensure their products make the cut.
        </p>

        <p>
          Bloomberg Government&apos;s April 15 report found that total lobbying spending hit approximately <strong>$5.3 billion
          in 2025</strong> — and the Iran war is poised to push 2026 even higher. Defense lobbying, which already
          accounts for one of the largest issue categories in our database, is surging.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Munitions Gold Rush</h2>

        <p>
          The Iran campaign has consumed precision-guided munitions at an extraordinary rate. At $11 billion per week,
          the military is burning through cruise missiles, JDAM kits, and air-defense interceptors faster than they
          can be manufactured. This creates a lobbying gold rush: every munitions manufacturer wants a piece of the
          replenishment contracts.
        </p>

        <p>
          RTX (Raytheon) — maker of Tomahawk cruise missiles and Patriot interceptors — is perhaps the most
          directly positioned. Our{' '}
          <Link href="/investigations/follow-the-money" className="text-primary hover:underline">Follow the Money analysis</Link>{' '}
          already showed RTX earning thousands-to-one returns on lobbying through federal contracts. The Iran war
          could multiply that dramatically.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Congressional Battle Lines</h2>

        <p>
          The $200 billion request faces bipartisan skepticism. Democrats have questioned the president&apos;s authority
          to launch the campaign without congressional authorization. Some Republicans, despite supporting the
          military action, have pushed back on the price tag amid ongoing deficit concerns.
        </p>

        <p>
          This creates an unusual lobbying dynamic: defense contractors must lobby not just for their specific
          programs, but for the overall supplemental to pass in the first place. Industry associations like the
          Aerospace Industries Association and the National Defense Industrial Association are working overtime to
          frame the spending as essential to national security and American manufacturing jobs.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What to Watch</h2>

        <p>
          The Q1 2026 lobbying disclosures — due April 20 — will be the first filings to capture the full impact
          of the Iran war on lobbying activity. We&apos;ll be analyzing them as soon as they&apos;re available. Key things
          to watch:
        </p>

        <ul>
          <li><strong>New registrations</strong> — Are defense subcontractors and munitions suppliers filing new lobbying registrations?</li>
          <li><strong>Spending spikes</strong> — How much has defense lobbying spending increased from Q4 2025?</li>
          <li><strong>Issue codes</strong> — Are more filings listing DEF (Defense) and BUD (Budget) as primary issues?</li>
          <li><strong>Revolving door</strong> — Are former Pentagon officials being hired as lobbyists to push the supplemental?</li>
        </ul>

        <p>
          The Iran war has already reshaped American foreign policy. Now it&apos;s reshaping K Street. When $200 billion
          is on the table, the lobbying industry doesn&apos;t just respond — it mobilizes.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Dig into defense contractor lobbying spending, contracts, and the revolving door.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/investigations/defense-contractor-lobbying" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Defense Contractor Lobbying →
            </Link>
            <Link href="/investigations/follow-the-money" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Follow the Money →
            </Link>
            <Link href="/issues/DEF" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Defense Issue Data →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'Pentagon $200B supplemental request (Washington Post, March 18, 2026)',
          'Bloomberg Government Top Lobbying Firms Report (April 15, 2026)',
          'POLITICO defense funding coverage (March 2026)',
          'OpenLobby analysis of defense lobbying filings',
        ]}
        lastUpdated="April 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/defense-contractor-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ The Pentagon&apos;s Lobbying Machine</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
          </Link>
          <Link href="/investigations/revolving-door-exposed" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 The Revolving Door</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
