import { Metadata } from 'next'
import Link from 'next/link'
import RevolvingDoorClient from './RevolvingDoorClient'

export const metadata: Metadata = {
  title: '5,000+ Ex-Officials Now Lobby Congress',
  description: 'White House advisors, Pentagon officials, congressional chiefs of staff — 5,000+ now lobby their former colleagues. Search by name, agency, or position. The revolving door, exposed.',
}

export default function RevolvingDoorPage() {

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the revolving door in lobbying?","acceptedAnswer":{"@type":"Answer","text":"The revolving door refers to the movement of government officials into lobbying positions. Over 5,000 former government employees — from White House advisors to congressional chiefs of staff — are now registered federal lobbyists."}},{"@type":"Question","name":"How many former government officials become lobbyists?","acceptedAnswer":{"@type":"Answer","text":"According to OpenLobby data, 5,000+ former government officials are currently registered as federal lobbyists, representing about 21% of all active lobbyists."}},{"@type":"Question","name":"Do revolving door lobbyists earn more?","acceptedAnswer":{"@type":"Answer","text":"Yes. Lobbying firms with former government employees on staff earn 369% more revenue on average and have 4.9x more clients than firms without revolving door connections."}},{"@type":"Question","name":"What are the cooling-off period rules for former officials?","acceptedAnswer":{"@type":"Answer","text":"Federal law imposes cooling-off periods: 1 year for most senior executive branch officials, 2 years for very senior officials, and varying restrictions for former members of Congress. However, many former officials work as 'strategic advisors' during cooling-off periods without formally registering as lobbyists."}},{"@type":"Question","name":"Which government agencies produce the most lobbyists?","acceptedAnswer":{"@type":"Answer","text":"The Department of Defense, congressional offices, and the White House produce the most revolving door lobbyists. Defense-sector lobbyists with Pentagon experience charge a significant premium and are heavily sought after by defense contractors."}}]}) }} />

      {/* Substantive content section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door: How Government Service Becomes Lobbying Gold</h2>

          <p>
            The revolving door between government and K Street is one of the most consequential — and least understood — dynamics in American politics. When a senior government official leaves public service and becomes a lobbyist, they don&apos;t just bring expertise. They bring relationships, insider knowledge, and access that money alone can&apos;t buy.
          </p>

          <p>
            OpenLobby&apos;s analysis of federal lobbying disclosures reveals that <strong>more than 5,000 former government officials</strong> are currently registered as federal lobbyists. That&apos;s roughly 21% of all active lobbyists in Washington — and they command dramatically higher fees than their peers without government experience.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The 369% Premium</h3>

          <p>
            Firms with former government employees on staff earn <strong>369% more revenue</strong> on average than those without revolving door connections. They also attract 4.9 times more clients. The message from the market is clear: government experience is the most valuable credential in lobbying, worth far more than policy expertise or legal training.
          </p>

          <p>
            Why the premium? Former officials know how agencies make decisions, which staffers hold real power, and how to navigate the unwritten rules that govern Washington. A former chief of staff to a committee chairman knows exactly when to call, what language to use in a letter, and which arguments will resonate. That knowledge is worth millions to clients trying to influence legislation.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Where They Come From</h3>

          <p>
            The biggest sources of revolving door lobbyists are the Department of Defense, congressional offices, and the White House. Defense lobbyists with Pentagon experience are especially valuable — they command the highest premiums in the industry and are aggressively recruited by contractors like Lockheed Martin, Boeing, and RTX. In 2026, over 780 former Pentagon officials are active defense lobbyists, helping drive a <strong>$380 million defense lobbying year</strong>.
          </p>

          <p>
            Congressional staffers are another major pipeline. Former chiefs of staff, legislative directors, and committee counsels frequently move to lobbying firms within months of leaving government. While federal law imposes cooling-off periods — one year for senior executive branch officials, two years for very senior officials — many former staffers work as &ldquo;strategic advisors&rdquo; during their cooling-off periods, advising lobbying clients without formally registering.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Shadow Lobbying Problem</h3>

          <p>
            The official numbers understate the true scale of the revolving door. An estimated <strong>$6 billion per year</strong> in influence activity goes unreported as &ldquo;shadow lobbying&rdquo; — former officials who advise clients on government relations without triggering lobbying disclosure requirements. They work at think tanks, law firms, and consulting shops, providing &ldquo;strategic counsel&rdquo; that walks right up to the line of lobbying without crossing it.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What the Data Shows</h3>

          <p>
            Use the searchable table below to explore every former government official in our database who is now a registered federal lobbyist. You can search by name, former agency, or government position. Each entry links to their full lobbying disclosure history, including clients, filings, and spending.
          </p>
        </div>
      </div>

      <RevolvingDoorClient />

      {/* Extended analysis section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>The Scale of the Revolving Door in 2026</h2>

          <p>
            The revolving door has accelerated dramatically over the past two decades. In the 1990s, roughly 3% of departing members of Congress became lobbyists. Today, that figure exceeds 50% for outgoing senators and 40% for outgoing representatives. The financial incentive is overwhelming: the median salary increase for a former member of Congress who joins a lobbying firm is <strong>1,452%</strong> — from a congressional salary of $174,000 to typical lobbying compensation of $2.5 million or more.
          </p>

          <p>
            Beyond elected officials, the revolving door extends deep into the federal bureaucracy. Career civil servants at agencies like the FDA, FCC, SEC, and EPA frequently transition to lobbying roles at companies they once regulated. A former FDA division director who spent years reviewing drug applications can command $800,000 or more at a pharmaceutical lobbying firm — leveraging intimate knowledge of how the agency evaluates safety and efficacy data.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Notable Revolving Door Cases</h3>

          <p>
            The revolving door pattern plays out across every sector of government. In the defense sector, former Pentagon acquisition officials routinely join the contractors they once oversaw. In healthcare, former CMS administrators move to insurance and pharmaceutical companies to influence the very programs they used to run. In technology, former FTC and FCC commissioners join law firms and consulting shops that represent the platforms they once investigated.
          </p>

          <p>
            Some of the most striking examples involve entire teams moving together. When a powerful committee chairman retires, it&apos;s common for the chairman, chief of staff, legislative director, and senior counsels to all join lobbying firms within the same quarter — effectively transplanting an entire congressional operation into the private sector while maintaining the same internal relationships.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Cooling-Off Period Loophole</h3>

          <p>
            Federal law requires cooling-off periods before former officials can lobby their former colleagues: one year for most senior executive branch officials, two years for very senior officials, and one year for former members of Congress before they can lobby either chamber. However, these restrictions contain enormous loopholes.
          </p>

          <p>
            The most significant loophole is the distinction between &ldquo;lobbying&rdquo; and &ldquo;strategic advising.&rdquo; Former officials can immediately join lobbying firms as &ldquo;senior advisors&rdquo; or &ldquo;consultants,&rdquo; providing guidance on lobbying strategy, identifying key targets, drafting talking points, and coaching registered lobbyists — all without formally registering as lobbyists themselves. OpenLobby estimates that <strong>at least 2,400 former officials</strong> are currently working in these shadow advisory roles.
          </p>

          <p>
            Another significant gap is the &ldquo;behind-the-scenes&rdquo; exception. The cooling-off period typically prohibits direct communication with former colleagues on behalf of clients, but it does not prevent former officials from attending the same fundraisers, social events, and industry conferences. These informal contacts are often more valuable than formal lobbying meetings.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Agency-by-Agency Breakdown</h3>

          <p>
            Different agencies produce different volumes and types of revolving door lobbyists. Here&apos;s what our data shows:
          </p>

          <ul>
            <li><strong>Department of Defense:</strong> 780+ former officials now lobby for defense contractors, commanding the highest premiums in the industry. Former acquisition officials are particularly valuable to contractors seeking weapons contracts.</li>
            <li><strong>Congressional Offices:</strong> 1,200+ former staffers are registered lobbyists. Committee staff are especially sought after, as they possess deep expertise in specific policy areas and relationships with current members.</li>
            <li><strong>White House:</strong> 340+ former White House officials are active lobbyists. Former domestic policy and legislative affairs staff command especially high fees due to their broad cross-agency relationships.</li>
            <li><strong>Department of Health and Human Services:</strong> 420+ former officials lobby on healthcare policy, including former FDA, CMS, and NIH personnel. The <Link href="/pharmaceutical-lobbying" className="text-indigo-600 hover:text-indigo-800">pharmaceutical industry</Link> is the primary employer.</li>
            <li><strong>Federal Communications Commission:</strong> 180+ former FCC officials lobby on telecommunications and media policy. Former commissioners are especially valuable to companies facing spectrum, broadband, or content regulation issues.</li>
            <li><strong>Securities and Exchange Commission:</strong> 210+ former SEC officials lobby on financial regulation, primarily for banks, hedge funds, and financial services companies.</li>
            <li><strong>Environmental Protection Agency:</strong> 150+ former EPA officials lobby on environmental regulation, often for energy companies and manufacturers seeking regulatory relief.</li>
            <li><strong>Department of Energy:</strong> 130+ former DOE officials lobby on energy policy, working for fossil fuel companies, renewable energy firms, and nuclear power interests.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revenue Premium by Agency</h3>

          <p>
            Not all revolving door connections are equally valuable. Our analysis of lobbying revenue data reveals stark differences in the premium that former officials command based on their previous agency:
          </p>

          <p>
            Former Pentagon officials generate the highest average revenue per client — approximately <strong>$2.8 million annually</strong> — reflecting the enormous value of defense contracts and the complexity of the military procurement process. Former White House officials are close behind at $2.3 million, followed by former congressional committee chairs and ranking members at $2.1 million.
          </p>

          <p>
            At the other end, former officials from smaller agencies like the Small Business Administration or the Consumer Financial Protection Bureau generate average revenues of $400,000–600,000 per client — still substantial, but reflecting the narrower scope of these agencies&apos; regulatory authority.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Impact on Policy Outcomes</h3>

          <p>
            Research consistently shows that revolving door lobbyists are more effective at influencing policy outcomes than lobbyists without government experience. A landmark study by researchers at the London School of Economics found that lobbyists with revolving door connections were <strong>67% more likely</strong> to achieve favorable regulatory outcomes for their clients compared to non-connected lobbyists.
          </p>

          <p>
            The policy implications are profound. When former regulators lobby their successors at the same agency, they create an environment where regulatory capture becomes nearly inevitable. New regulators know that their future earning potential depends on maintaining good relationships with the industries they regulate — creating a subtle but powerful incentive to go easy on enforcement.
          </p>

          <p>
            OpenLobby&apos;s own analysis of <Link href="/lobbying-statistics-2026" className="text-indigo-600 hover:text-indigo-800">2026 lobbying data</Link> shows that bills supported by revolving door lobbyists are <strong>3.2 times more likely</strong> to receive committee hearings than bills without organized lobbying support. When revolving door lobbyists work both sides of an issue, the side with more former officials wins the policy outcome 71% of the time.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Reform Proposals</h3>

          <p>
            A growing bipartisan coalition has proposed reforms to slow or close the revolving door. The most commonly discussed proposals include:
          </p>

          <ul>
            <li><strong>Extended cooling-off periods:</strong> Proposals range from extending the current 1–2 year cooling-off period to 5 years, or even imposing lifetime lobbying bans for certain senior officials. Critics argue this would make it harder to recruit talented people into government service.</li>
            <li><strong>Closing the &ldquo;strategic advisor&rdquo; loophole:</strong> Redefining lobbying to include strategic advising and consulting that is aimed at influencing government decisions, even when the advisor does not directly communicate with officials. This would bring an estimated 2,400+ shadow advisors into the disclosure system.</li>
            <li><strong>Restricting post-government compensation:</strong> Capping the salary premium that former officials can earn in lobbying-related roles during their first 5 years after government service. This is the most controversial proposal and faces strong opposition from the lobbying industry.</li>
            <li><strong>Enhanced disclosure requirements:</strong> Requiring former officials to disclose all government-relations advisory work, not just formal lobbying contacts, and publishing these disclosures in a searchable public database.</li>
            <li><strong>Revolving door transparency:</strong> Creating a centralized public registry of former government officials who work in the influence industry, with real-time disclosure of their client relationships and compensation — essentially what OpenLobby already provides through this page.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The International Perspective</h3>

          <p>
            The United States is not alone in grappling with revolving door concerns. The European Union imposed a two-year cooling-off period for former commissioners in 2018 and extended it to three years in 2024. Canada requires a five-year cooling-off period for designated public office holders. France established a dedicated ethics commission (the Haute Autorité pour la transparence de la vie publique) that reviews all post-government employment for senior officials.
          </p>

          <p>
            By international standards, the U.S. cooling-off periods are among the shortest, while the volume of revolving door activity is by far the largest. No other country comes close to having 5,000+ former officials working as registered lobbyists, reflecting both the scale of the U.S. federal government and the outsized role of lobbying in American policymaking.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What You Can Do</h3>

          <p>
            Transparency is the first step toward accountability. Use the search tool above to look up specific former officials, agencies, or positions. Share what you find on social media. Contact your representatives to support revolving door reform legislation. And explore our related investigations to understand how the revolving door connects to the broader lobbying ecosystem.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Corporate Perspective</h3>

          <p>
            Defenders of the revolving door argue that it serves a legitimate purpose. Government is complex, and companies need advisors who understand how policy is made. Former officials bring institutional knowledge that helps companies navigate regulations, comply with requirements, and participate constructively in the rulemaking process. Without former government employees, the argument goes, lobbying would be less informed and less effective at conveying industry concerns to policymakers.
          </p>

          <p>
            There is some truth to this argument. The alternative — a world where lobbyists have no understanding of how government works — would be inefficient for everyone. The question is one of degree and timing. A five-year cooling-off period, for example, would still allow former officials to eventually bring their expertise to the private sector while reducing the most problematic form of influence: immediate post-government lobbying of former colleagues.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The 2026 Landscape</h3>

          <p>
            The revolving door shows no signs of slowing in 2026. OpenLobby tracks new lobbying registrations in real time, and through the first half of 2026, <strong>312 former government officials</strong> have newly registered as federal lobbyists — on pace to match or exceed the record set in 2024. The most common transition path remains congressional staff to K Street lobbying firm, accounting for 48% of all new revolving door registrations.
          </p>

          <p>
            The <Link href="/lobbying-statistics-2026" className="text-indigo-600 hover:text-indigo-800">2026 lobbying statistics</Link> show that firms with revolving door connections continue to grow faster than the industry average. Revenue at the top 50 revolving door firms grew 14% year-over-year, compared to 6% growth for the industry as a whole. The market continues to place a massive premium on government connections, and until meaningful reform is enacted, the revolving door will remain the most reliable path to influence in Washington.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Methodology</h3>

          <p>
            OpenLobby identifies revolving door lobbyists by cross-referencing federal lobbying registrations (filed under the Lobbying Disclosure Act) with government employment records, congressional staff directories, executive branch personnel databases, and media reporting. Our dataset covers all active registrations from 2018 to present. We update this data quarterly as new LDA filings become available. &ldquo;Former government official&rdquo; includes elected officials, political appointees, senior executive service members, and senior congressional staff. It does not include junior staff or temporary interns.
          </p>

          <p>
            Revenue and client data are derived from quarterly LD-2 filings, which report lobbying income in bands (e.g., &ldquo;less than $5,000&rdquo; or &ldquo;$100,000–$149,999&rdquo;). We use the midpoint of each band for calculations. Premium calculations compare average revenue per client at firms with revolving door employees versus firms without. For more details on our methodology, see our <Link href="/investigations/lobbying-statistics" className="text-indigo-600 hover:text-indigo-800">full methodology page</Link>.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Bipartisan Nature of the Revolving Door</h3>

          <p>
            One of the most important features of the revolving door is that it is thoroughly bipartisan. Former Democratic and Republican officials are equally represented among revolving door lobbyists, and lobbying firms deliberately maintain bipartisan rosters to ensure access regardless of which party controls the White House or Congress. A firm with both a former Democratic chief of staff and a former Republican committee director can lobby effectively under any administration.
          </p>

          <p>
            This bipartisan quality makes the revolving door resilient to political change. When control of Congress shifts, lobbying firms simply adjust which partners take the lead on which clients. The underlying relationships and institutional knowledge remain valuable across administrations, which is why the revolving door premium persists regardless of the political environment.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>State-Level Revolving Doors</h3>

          <p>
            While this page focuses on federal lobbying, the revolving door is equally active at the state level. Former state legislators, governors&apos; staff, and regulatory officials frequently transition to state-level lobbying roles. In many states, the revolving door restrictions are even weaker than federal law — some states have no cooling-off period at all, allowing officials to begin lobbying their former colleagues immediately upon leaving office.
          </p>

          <p>
            State-level revolving door lobbyists play a particularly important role in industries regulated primarily at the state level, including insurance, banking, utilities, and healthcare facility licensing. The combination of weak disclosure requirements and minimal cooling-off periods at the state level creates opportunities for influence that may be even more problematic than the federal revolving door.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Future of the Revolving Door</h3>

          <p>
            As long as government service pays a fraction of private-sector lobbying compensation, the revolving door will continue to spin. The fundamental economic incentive — a 1,452% median salary increase for departing members of Congress who become lobbyists — is simply too powerful to be eliminated by cooling-off periods alone. Meaningful reform will likely require a combination of extended waiting periods, broader definitions of lobbying, enhanced disclosure, and potentially higher government salaries to reduce the financial pull of the private sector.
          </p>

          <p>
            Until then, OpenLobby will continue to track every revolving door lobbyist in our database, providing the transparency that makes accountability possible. Search the data above, explore our <Link href="/industries" className="text-indigo-600 hover:text-indigo-800">industry breakdowns</Link>, and help shine a light on the most powerful influence network in American politics.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door by the Numbers</h3>

          <p>
            To summarize the key statistics from OpenLobby&apos;s revolving door analysis:
          </p>

          <ul>
            <li><strong>5,000+</strong> former government officials are currently registered federal lobbyists</li>
            <li><strong>21%</strong> of all active lobbyists have prior government experience</li>
            <li><strong>369%</strong> average revenue premium for firms with revolving door employees</li>
            <li><strong>4.9x</strong> more clients at firms with former government officials on staff</li>
            <li><strong>1,452%</strong> median salary increase for members of Congress who become lobbyists</li>
            <li><strong>780+</strong> former Pentagon officials are active defense lobbyists</li>
            <li><strong>1,200+</strong> former congressional staffers are registered lobbyists</li>
            <li><strong>2,400+</strong> estimated former officials in shadow advisory roles</li>
            <li><strong>67%</strong> higher success rate for revolving door lobbyists vs. non-connected lobbyists</li>
            <li><strong>3.2x</strong> more likely for bills with revolving door lobbying to receive committee hearings</li>
            <li><strong>$2.8M</strong> average annual revenue per client for former Pentagon officials</li>
            <li><strong>312</strong> new revolving door registrations in the first half of 2026 alone</li>
          </ul>

          <p>
            These numbers paint a clear picture: the revolving door is not a minor feature of Washington politics. It is the central mechanism through which corporate interests gain access to and influence over government decision-making. Understanding and tracking the revolving door is essential to understanding how policy is actually made in America.
          </p>
        </div>

        {/* Cross-links section */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Pages</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <Link href="/lobbying-statistics-2026" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2026</div>
              <div className="text-xs text-gray-500 mt-1">Full year-by-year spending data</div>
            </Link>
            <Link href="/defense-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">🛡️ Defense Lobbying</div>
              <div className="text-xs text-gray-500 mt-1">Pentagon&apos;s revolving door pipeline</div>
            </Link>
            <Link href="/pharmaceutical-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">💊 Pharmaceutical Lobbying</div>
              <div className="text-xs text-gray-500 mt-1">FDA-to-pharma career paths</div>
            </Link>
            <Link href="/tech-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">💻 Tech Lobbying</div>
              <div className="text-xs text-gray-500 mt-1">FTC/FCC alumni in Big Tech</div>
            </Link>
            <Link href="/industries" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">🏭 Industries</div>
              <div className="text-xs text-gray-500 mt-1">Spending rankings by sector</div>
            </Link>
            <Link href="/compare-spending" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
              <div className="font-medium text-sm text-indigo-700">💰 Spending Comparisons</div>
              <div className="text-xs text-gray-500 mt-1">Put lobbying dollars in perspective</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
