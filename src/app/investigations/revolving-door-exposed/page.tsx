import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'The Revolving Door Exposed: From Government Power to K Street Profits',
  description: 'Thousands of former government officials now lobby their old colleagues. We found the most egregious examples — from White House advisors to congressional chiefs of staff.',
}

export default function RevolvingDoorExposedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "The Revolving Door Exposed: From Government Power to K Street Profits", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "Thousands of former government officials now lobby their old colleagues.", mainEntityOfPage: "https://www.openlobby.us/investigations/revolving-door-exposed" }) }} />
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'The Revolving Door Exposed' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Revolving Door</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        The Revolving Door Exposed:{' '}
        <span className="text-amber-600">5,000 Former Officials</span>{' '}
        Now Lobby Their Old Colleagues
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 11 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/revolving-door-exposed" title="The Revolving Door Exposed: 5,000 Former Officials Now Lobbying" />

      <div className="my-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-amber-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Our database contains <strong>5,000 lobbyists</strong> who disclosed former government positions — 
          from chiefs of staff to senators, from White House advisors to Pentagon officials. The most connected 
          among them represent <strong>200+ clients each</strong>, selling access to the institutions they once ran. 
          The revolving door isn&apos;t a metaphor. It&apos;s a business model.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Influence Brokers</h2>

        <p>
          Federal law requires lobbyists to disclose their former government positions. The idea is transparency — 
          let the public know when someone is leveraging government connections for private gain. 
          What the disclosures reveal is a system where government service is, for many, 
          a stepping stone to a far more lucrative career on K Street.
        </p>

        <p>
          We analyzed all 5,000 revolving door lobbyists in our database. The patterns are striking: 
          the most successful lobbyists aren&apos;t policy experts or subject matter specialists. 
          They&apos;re the people who had the most powerful rolodexes in government.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Most Connected Lobbyists in Washington</h2>

        <p>
          The lobbyists with the most clients tend to cluster at a handful of mega-firms. 
          Mehlman Consulting alone employs many of the most connected revolving door lobbyists in the business:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Revolving Door Lobbyists by Client Count</h3>
          <div className="space-y-4">
            {[
              { name: 'David Thomas', clients: 224, firm: 'Mehlman Consulting', position: 'Chief of Staff, Rep. Zoe Lofgren; Director of Congressional Relations, FTC' },
              { name: 'Bruce Mehlman', clients: 223, firm: 'Mehlman Consulting', position: 'Assistant Secretary of Commerce for Tech Policy; General Counsel, House Republican Conference' },
              { name: 'Sage Eastman', clients: 221, firm: 'Mehlman Consulting', position: 'Strategy Director, Committee on Ways & Means; Senior Advisor, Committee on Energy & Commerce' },
              { name: 'Michael Robinson', clients: 220, firm: 'Mehlman Consulting', position: 'Coalitions Director, House Appropriations Committee; Deputy Chief of Staff, House Majority Leader' },
              { name: 'Elise Finley Pickering', clients: 219, firm: 'Mehlman Consulting', position: 'Executive Director, House Republican Policy Committee; Chief of Staff, Rep. John Shadegg' },
              { name: 'Helen Tolar', clients: 212, firm: 'Mehlman Consulting', position: 'Chief of Staff, Senator John Boozman; Staff Director, House Veterans Affairs Committee' },
              { name: 'Lauren Aronson', clients: 208, firm: 'Mehlman Consulting', position: 'Director, Office of Legislation, Centers for Medicare & Medicaid Services (CMS)' },
              { name: 'Nadeam Elshami', clients: 197, firm: 'Brownstein Hyatt Farber Schreck', position: 'Chief of Staff, Democratic Leader Nancy Pelosi' },
              { name: 'Daniel McFaul', clients: 189, firm: 'Ballard Partners', position: 'Legislative Director, Cong. Scarborough; Chief of Staff, Cong. Miller/Gaetz' },
              { name: 'Marc Lampkin', clients: 184, firm: 'Brownstein Hyatt Farber Schreck', position: 'Policy Director, Senate Republican Conference; General Counsel, House Republican Conference' },
            ].map(item => (
              <div key={item.name} className="py-3 border-b border-gray-200 last:border-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-bold text-gray-900">{item.name}</span>
                  <span className="text-amber-600 font-semibold text-sm">{item.clients} clients</span>
                  <span className="text-xs text-gray-400">@ {item.firm}</span>
                </div>
                <p className="text-sm text-gray-600">Former: {item.position}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Mehlman Machine</h2>

        <p>
          One firm dominates the revolving door rankings: <strong><Link href="/firms/mehlman-consulting-inc" className="text-primary hover:underline">Mehlman Consulting</Link></strong>. 
          The top six lobbyists by client count all work there. The firm&apos;s founder, Bruce Mehlman, 
          served as Assistant Secretary of Commerce for Technology Policy under George W. Bush and 
          as General Counsel for the House Republican Conference.
        </p>

        <p>
          Mehlman&apos;s model is straightforward: hire people who held senior positions across both parties, 
          cover every major committee, and offer clients access to a bipartisan network that spans 
          the entire federal government. It&apos;s remarkably effective — each of their top lobbyists 
          represents more than 200 clients simultaneously.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>From the White House to K Street</h2>

        <p>
          Some of the most notable revolving door transitions involve the highest levels of government:
        </p>

        <ul>
          <li>
            <strong>Paul Thornell</strong> (206 clients) — Former Deputy Director of Legislative Affairs 
            in the Office of Vice President Al Gore. Now at Mehlman Consulting, lobbying for over 200 corporations 
            and trade associations.
          </li>
          <li>
            <strong>Constantine Hingson</strong> (206 clients) — Former Chief of Staff to Senator Dan Coats 
            (who later became Director of National Intelligence). Also served as General Counsel to Senator Elizabeth Dole 
            and Counsel to Senator Judd Gregg.
          </li>
          <li>
            <strong>Dean Rosen</strong> (206 clients) — Former Health Policy Director for Senate Majority Leader Bill Frist 
            and Staff Director of the Senate Subcommittee on Public Health. Now one of the most connected health policy 
            lobbyists in Washington.
          </li>
          <li>
            <strong>Nadeam Elshami</strong> (197 clients) — Former Chief of Staff to Speaker Nancy Pelosi. 
            Now at <Link href="/firms/brownstein-hyatt-farber-schreck-llp" className="text-primary hover:underline">Brownstein Hyatt Farber Schreck</Link>, one of the largest lobbying firms in the country.
          </li>
          <li>
            <strong>David Castagnetti</strong> (161 clients) — Former Chief of Staff to Senator Max Baucus, 
            who chaired the powerful Senate Finance Committee that oversees tax and trade policy.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Bipartisan Business</h2>

        <p>
          One of the most striking patterns: the revolving door is thoroughly bipartisan. Former staffers 
          to Nancy Pelosi work alongside former aides to Republican leaders. Former Democratic Senate staffers 
          lobby the same committees as former Republican ones.
        </p>

        <p>
          This makes sense from a business perspective. Clients want lobbyists who can work both sides of the aisle. 
          A firm that employs former chiefs of staff to both Democratic and Republican leaders can promise access 
          regardless of which party controls Congress.
        </p>

        <p>
          For the lobbyists, the message is clear: partisan loyalty in government becomes bipartisan access in the private sector.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Scale of the Problem</h2>

        <p>
          Five thousand revolving door lobbyists. That&apos;s roughly <strong>nine for every member of Congress</strong>. 
          And these are just the ones who disclosed former government positions — the actual number of 
          former officials in the influence industry is likely much higher, since many work as 
          &quot;strategic advisors&quot; or &quot;consultants&quot; who don&apos;t technically register as lobbyists.
        </p>

        <p>
          The revolving door creates a self-reinforcing cycle: government officials know that a lucrative 
          lobbying career awaits if they maintain good relationships with colleagues and industry. 
          That knowledge inevitably shapes how they govern — even if unconsciously.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>Can It Be Fixed?</h2>

        <p>
          Various proposals have attempted to slow the revolving door: cooling-off periods that prevent 
          former officials from lobbying for one to two years, restrictions on which agencies they can contact, 
          and enhanced disclosure requirements. But the fundamental incentive remains: a congressional staffer 
          making $80,000 a year can multiply their salary several times over by moving to K Street.
        </p>

        <p>
          Until that calculus changes, the revolving door will keep spinning. The best we can do is make it visible. 
          Every name, every former position, every client — searchable, sortable, and public.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search all 5,000 revolving door lobbyists — see their former positions, current clients, and firms.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/revolving-door" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Revolving Door →
            </Link>
            <Link href="/firms" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Top Firms →
            </Link>
            <Link href="/lobbyists" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Top Lobbyists →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation 
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby Revolving Door Database (5,000 lobbyists)',
        ]}
        lastUpdated="February 2026"
      />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/the-revolving-door-premium" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💵 The Revolving Door Premium</div>
          </Link>
          <Link href="/investigations/dc-lobbying-capital" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏛️ DC: The Lobbying Capital</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
          </Link>
        </div>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/revolving-door" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 Revolving Door Data</div>
          </Link>
          <Link href="/lobbyists" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🧑‍💼 Top Lobbyists</div>
          </Link>
          <Link href="/network" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🕸️ Network Analysis</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
