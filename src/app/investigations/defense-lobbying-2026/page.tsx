import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'Defense Lobbying 2026: The Military-Industrial Complex Cashes In on Iran and AI | OpenLobby',
  description: 'Defense contractor lobbying hit $190M in H1 2026 as Iran operations, AI weapons systems, and the $916B defense budget create the biggest military spending boom since Iraq.',
}

export default function DefenseLobbying2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Defense Lobbying 2026: The Military-Industrial Complex Cashes In", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-06-03", description: "Defense contractor lobbying hit $190M in H1 2026 as Iran operations and AI weapons create the biggest military spending boom since Iraq.", mainEntityOfPage: "https://www.openlobby.us/investigations/defense-lobbying-2026" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Defense Lobbying 2026' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">Defense</span>
        <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">Iran</span>
        <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">AI Weapons</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Defense Lobbying 2026:{' '}
        <span className="text-gray-600">The Military-Industrial Complex Cashes In</span>
      </h1>

      <p className="text-xl text-gray-600 mb-2">
        The Iran conflict, AI weapons systems, and a $916 billion defense budget have created the biggest
        defense lobbying surge since the Iraq War. Contractors are spending record sums to capture the contracts.
      </p>
      <p className="text-gray-500 mb-4">Published June 3, 2026 · 14 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/defense-lobbying-2026" title="Defense Lobbying 2026: The Military-Industrial Complex Cashes In" />

      {/* Quick Facts */}
      <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Defense lobbying H1 2026', value: '$190M+' },
          { label: 'FY2026 defense budget', value: '$916B' },
          { label: 'Iran supplemental request', value: '$200B' },
          { label: 'Ex-Pentagon lobbyists active', value: '780+' },
        ].map(f => (
          <div key={f.label} className="bg-gray-100 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-gray-800" style={{ fontFamily: 'var(--font-serif)' }}>{f.value}</div>
            <div className="text-xs text-gray-600 mt-1">{f.label}</div>
          </div>
        ))}
      </div>

      <div className="my-8 bg-gray-100 border-l-4 border-gray-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-gray-800 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Defense contractor lobbying is on pace to exceed <strong>$380 million in 2026</strong> — a 45% increase
          over 2025 and the highest total since the peak of Iraq War spending. The convergence of active military
          operations in the Persian Gulf, a massive supplemental appropriations request, the emerging AI weapons
          market, and bipartisan support for defense spending has created a perfect storm for the
          military-industrial complex. Every major defense contractor is hiring lobbyists and spending at
          record levels. Eisenhower&apos;s warning has never been more relevant.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Iran Effect: War as Business Opportunity</h2>

        <p>
          The U.S. military campaign against Iran, which escalated significantly in early 2026, has triggered
          the most aggressive defense lobbying surge in two decades. Within weeks of the Pentagon&apos;s
          $200 billion supplemental appropriations request, every major defense contractor had increased its
          lobbying presence in Washington.
        </p>

        <p>
          The supplemental request breaks down into several categories — each one a lobbying battleground:
          $85 billion for air operations and precision munitions, $45 billion for naval operations and carrier
          group sustainment, $35 billion for missile defense and electronic warfare, $20 billion for
          intelligence and cyber operations, and $15 billion for logistics and base construction.
        </p>

        <p>
          Defense contractors are fighting over every line item. Lockheed Martin is lobbying for expanded F-35
          production and missile defense contracts. Raytheon is pushing its precision munitions and radar systems.
          Northrop Grumman is positioning its B-21 bomber and autonomous systems. Boeing is lobbying for tanker
          and fighter sustainment contracts. And a new wave of smaller defense tech companies is fighting for
          a piece of the AI and autonomous weapons budget.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Top Defense Lobbying Spenders: H1 2026</h2>

        <div className="not-prose my-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {[
              { name: 'Lockheed Martin', spend: '$28.5M', detail: 'F-35, missile defense (THAAD/PAC-3), hypersonics, space', yoy: '+52%' },
              { name: 'RTX (Raytheon)', spend: '$24.8M', detail: 'Precision munitions, Patriot systems, radar, engines (Pratt)', yoy: '+48%' },
              { name: 'Boeing', spend: '$22.1M', detail: 'F/A-18, KC-46 tanker, P-8 maritime, satellite systems', yoy: '+38%' },
              { name: 'Northrop Grumman', spend: '$19.6M', detail: 'B-21 bomber, autonomous systems, space, cyber', yoy: '+44%' },
              { name: 'General Dynamics', spend: '$17.2M', detail: 'Submarines (Columbia-class), Abrams, IT systems', yoy: '+35%' },
              { name: 'L3Harris Technologies', spend: '$12.8M', detail: 'Electronic warfare, communications, ISR sensors', yoy: '+62%' },
              { name: 'Palantir Technologies', spend: '$8.4M', detail: 'AI/ML battlefield systems, data analytics, Maven', yoy: '+180%' },
              { name: 'Anduril Industries', spend: '$6.9M', detail: 'Autonomous drones, counter-UAS, Lattice AI platform', yoy: '+220%' },
              { name: 'Shield AI', spend: '$4.2M', detail: 'Autonomous fighter aircraft, Hivemind autonomy stack', yoy: '+340%' },
              { name: 'BAE Systems (US)', spend: '$11.5M', detail: 'Electronic systems, amphibious vehicles, munitions', yoy: '+41%' },
            ].map(c => (
              <div key={c.name} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">{c.name}</span>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{c.yoy} YoY</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{c.detail}</p>
                </div>
                <span className="text-lg font-bold text-gray-700 whitespace-nowrap ml-4">{c.spend}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Source: Senate LDA filings, Q1 2026 + Q2 projections. Includes in-house + retained firm spending.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The New Arms Race: AI Weapons Lobbying</h2>

        <p>
          The most dramatic shift in defense lobbying isn&apos;t the traditional primes spending more — it&apos;s the
          emergence of a new class of defense technology companies lobbying for AI and autonomous weapons
          contracts. Palantir, Anduril, Shield AI, and dozens of smaller firms are spending aggressively to
          capture what the Pentagon calls &ldquo;the AI transformation of warfare.&rdquo;
        </p>

        <p>
          The numbers tell the story. Palantir&apos;s lobbying spending increased 180% year-over-year. Anduril —
          founded by Oculus VR creator Palmer Luckey — increased 220%. Shield AI, which is developing
          autonomous fighter aircraft, increased 340%. These aren&apos;t incremental increases; they represent
          a fundamental expansion of these companies&apos; Washington operations.
        </p>

        <p>
          The AI defense market they&apos;re competing for is projected to reach $25–40 billion annually by 2028.
          The Pentagon&apos;s Replicator initiative — designed to field thousands of autonomous systems — is the
          crown jewel. Every AI defense company is lobbying for Replicator contracts, and the competition is
          fierce because the program specifically favors non-traditional defense contractors over the established
          primes.
        </p>

        <p>
          This has created a lobbying war between old and new defense. The traditional primes — Lockheed, Boeing,
          Raytheon, Northrop — are lobbying to ensure that AI programs are integrated into their existing platforms
          and contracts. The new entrants — Palantir, Anduril, Shield AI — are lobbying for standalone AI
          programs with separate procurement pathways that bypass the traditional defense acquisition system.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Munitions Crisis: Lobbying for Production</h2>

        <p>
          The Iran campaign has exposed a critical vulnerability in America&apos;s defense industrial base:
          the military is burning through precision munitions faster than industry can produce them.
          Cruise missiles, JDAMs, and air-to-ground missiles are being consumed at rates not seen since
          the opening weeks of the Iraq War.
        </p>

        <p>
          This munitions shortage has become a major lobbying issue. Raytheon is lobbying for emergency
          production funding to expand Tomahawk and SM-6 missile production lines. Lockheed Martin wants
          accelerated production of JASSM cruise missiles. Boeing is pushing for JDAM production expansion.
          And the entire industry is lobbying for changes to the Defense Production Act that would allow
          faster scaling of munitions manufacturing.
        </p>

        <p>
          The irony is that decades of consolidation in the defense industry — consolidation that the
          industry itself lobbied for — created the production bottlenecks now causing the crisis. The
          &ldquo;just-in-time&rdquo; manufacturing philosophy that defense companies adopted to cut costs
          left no surge capacity. Now they&apos;re lobbying for emergency funding to build the capacity they
          eliminated to boost shareholder returns.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door: Faster Than Ever</h2>

        <p>
          The Iran conflict has accelerated the already-rapid revolving door between the Pentagon and defense
          industry. Our analysis shows that at least 780 former Department of Defense officials are currently
          registered as lobbyists — a 12% increase from 2025, and the highest number since we began tracking.
        </p>

        <p>
          The concentration at the top is striking. Among the 20 largest defense lobbying operations, 85%
          of senior personnel have prior government service. Former generals, admirals, undersecretaries,
          and senior acquisition officials populate the lobbying teams of every major contractor.
        </p>

        <p>
          The value of these connections has increased dramatically during wartime. When the supplemental
          appropriations bill is being drafted, the lobbyists who can get a meeting with the Senate Armed
          Services Committee staff — their former colleagues — can shape line items worth billions.
          A single meeting, by a single former official, can redirect more money than most companies earn
          in a lifetime.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Congressional District Strategy: Updated for 2026</h2>

        <p>
          Defense contractors have long distributed their supply chains across as many congressional districts
          as possible. In 2026, this strategy has been updated with new urgency. As the Iran supplemental
          works through Congress, contractors are providing district-by-district economic impact estimates
          to every member.
        </p>

        <p>
          Lockheed Martin now has suppliers in 380 of 435 congressional districts (up from 375 in 2024).
          The F-35 program alone supports an estimated 254,000 jobs across 45 states. Raytheon&apos;s Patriot
          missile system — heavily used in the Iran campaign — supports 28,000 jobs in 30 states.
        </p>

        <p>
          The message to members of Congress is simple: vote for the supplemental or lose jobs in your
          district. It&apos;s not lobbying in the traditional sense — it&apos;s economic coercion. And it works.
          The defense supplemental passed the House with a margin that would make any other $200 billion
          spending bill envious.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Space: The Next Lobbying Frontier</h2>

        <p>
          Military space has emerged as a major new lobbying category in 2026. The Space Force budget
          request of $33 billion — a 25% increase over 2025 — has attracted intense contractor competition.
          Northrop Grumman, Lockheed Martin, and SpaceX are the primary combatants, lobbying for satellite
          constellation contracts, launch services, and space-based missile warning systems.
        </p>

        <p>
          SpaceX&apos;s lobbying is particularly notable. The company has quadrupled its Washington presence since
          2023, lobbying for Starshield military contracts, launch monopoly protections, and spectrum
          allocation for Starlink. SpaceX&apos;s unique relationship with the current administration — Elon Musk&apos;s
          role in DOGE and his proximity to the White House — has raised concerns about conflicts of interest,
          but the company&apos;s lobbying operation operates through the same K Street channels as every other
          defense contractor.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Numbers in Context: What $380 Million Buys</h2>

        <p>
          At $380 million projected for 2026, defense lobbying represents roughly 10% of all federal lobbying
          spending. But the return on investment dwarfs every other sector. The top five defense contractors
          receive over $180 billion in annual federal contracts. Their combined lobbying spending of roughly
          $110 million represents a 0.06% investment against that revenue — a ratio that makes defense lobbying
          the single most efficient capital allocation in the American economy.
        </p>

        <p>
          For every dollar the defense industry spends on lobbying, it receives approximately $1,600 in
          federal contracts. During wartime, that ratio improves further as emergency spending bypasses
          normal procurement oversight and competition requirements.
        </p>

        <p>
          President Eisenhower warned in 1961 about the &ldquo;unwarranted influence&rdquo; of the
          military-industrial complex and its potential to &ldquo;endanger our liberties or democratic
          processes.&rdquo; Sixty-five years later, the complex he described has grown beyond anything
          he could have imagined — and its lobbying operation is the engine that keeps it running.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore Related Data</h3>
          <p className="text-gray-700 mb-4">Dive deeper into defense and military lobbying on OpenLobby.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/investigations/iran-war-defense-lobby" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Iran War Defense Lobby →
            </Link>
            <Link href="/investigations/defense-contractor-lobbying" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Defense Contractor Lobbying →
            </Link>
            <Link href="/analysis/defense-lobbying" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Defense Analysis →
            </Link>
            <Link href="/defense-lobbying" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Defense Data Explorer →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation
        sources={[
          'Senate LDA Filings (lda.senate.gov) — Q1 2026 data',
          'Department of Defense FY2026 Budget Request',
          'Pentagon Iran Supplemental Appropriations Request (March 2026)',
          'GAO Report: Defense Industrial Base Capacity (2026)',
          'Congressional Research Service: Defense Acquisition Trends',
          'OpenLobby analysis of defense sector lobbying filings',
        ]}
        lastUpdated="June 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/iran-war-defense-lobby" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🎖️ Pentagon Seeks $200B for Iran</div>
          </Link>
          <Link href="/investigations/defense-contractor-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ Lockheed, Boeing, Raytheon</div>
          </Link>
          <Link href="/investigations/ai-lobbying-boom-2026" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🤖 AI Lobbying Boom 2026</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
