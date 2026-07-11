import { Metadata } from 'next'
import Link from 'next/link'
import LobbyistsPageClient from './LobbyistsPageClient'

export const metadata: Metadata = {
  title: 'Federal Lobbyists Directory: 23,545 Registered Lobbyists',
  description: 'Search all 23,545 registered federal lobbyists. 5,000+ are ex-government officials. See their clients, firms, issues, and complete filing history (2018-2026).',
}

export default function LobbyistsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many registered lobbyists are there in the US?","acceptedAnswer":{"@type":"Answer","text":"There are 23,545 registered federal lobbyists tracked by OpenLobby since 2018. These individuals are named on quarterly lobbying disclosure filings submitted to the U.S. Senate."}},{"@type":"Question","name":"What is the revolving door in lobbying?","acceptedAnswer":{"@type":"Answer","text":"The revolving door refers to the movement of personnel between government positions and lobbying jobs. Over 5,000 of the 23,545 registered lobbyists disclosed prior government positions, bringing insider knowledge to their lobbying work."}},{"@type":"Question","name":"How do I find a specific federal lobbyist?","acceptedAnswer":{"@type":"Answer","text":"Use the search bar on this page to find any of the 23,545 registered federal lobbyists by name. Each profile shows their clients, firms, issue areas, and complete filing history."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbyists Directory","description":"23,545 registered federal lobbyists with client lists, firm affiliations, and government position history (2018-2026).","url":"https://www.openlobby.us/lobbyists","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2026","variableMeasured":"Federal lobbying spending"}) }} />
      <LobbyistsPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>About Registered Lobbyists</h2>
          <p className="text-gray-600">
            OpenLobby profiles <strong>23,545 individual lobbyists</strong> who have been named on federal lobbying disclosure filings since 2018. 
            Over <strong>5,000 of these lobbyists</strong> disclosed prior government positions — the revolving door between public service and K Street.
          </p>
          <p className="text-gray-600">
            Lobbyists marked with the 🏛️ badge held government positions before entering the private sector. 
            These former officials — from White House advisors to congressional chiefs of staff — bring insider knowledge and personal relationships 
            that command premium rates. Click any lobbyist to see their full profile, including clients served and firms they work for.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>How Federal Lobbying Works</h3>
          <p className="text-gray-600">
            Federal lobbying in the United States is governed by the <strong>Lobbying Disclosure Act of 1995</strong> (LDA), 
            which requires anyone who is paid to influence legislation, executive action, or federal contracts to register 
            with the Secretary of the Senate and the Clerk of the House. Lobbyists must file quarterly activity reports 
            disclosing their clients, the issues they lobbied on, the agencies or chambers of Congress they contacted, 
            and the income they received. In 2025, lobbyists filed over <strong>94,000 quarterly reports</strong>, generating 
            a rich public record of who is trying to influence which decisions in Washington. OpenLobby parses every one of 
            these filings to build the most comprehensive, searchable database of lobbying activity available to the public.
          </p>
          <p className="text-gray-600">
            The registration threshold is relatively low: any individual who spends more than 20% of their time on lobbying 
            activities for a particular client during a quarterly period, and whose client spends more than $14,000 on lobbying 
            in that quarter, must register. This captures a wide range of professionals — from dedicated government affairs 
            specialists at <Link href="/firms" className="text-blue-600 hover:underline">lobbying firms</Link> to in-house 
            lobbyists employed directly by <Link href="/clients" className="text-blue-600 hover:underline">corporations and trade associations</Link>. 
            However, many influence professionals structure their work to stay below these thresholds, meaning the 23,545 
            lobbyists tracked here represent a floor, not a ceiling, of Washington&apos;s influence industry.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door: Government to K Street</h3>
          <p className="text-gray-600">
            One of the most important dynamics in lobbying is the <strong>revolving door</strong> — the movement of personnel 
            between government service and private-sector lobbying. Of the 23,545 lobbyists in our database, more than 
            <strong>5,000 (roughly 21%)</strong> disclosed prior positions in the federal government. These former officials 
            include ex-members of Congress, senior White House staff, agency administrators, congressional committee counsels, 
            and Pentagon officials. Their government experience gives them deep knowledge of legislative and regulatory 
            processes, personal relationships with current officeholders, and subject-matter expertise that is difficult to 
            replicate. Studies consistently show that lobbyists with revolving-door backgrounds generate significantly 
            more revenue for their <Link href="/firms" className="text-blue-600 hover:underline">firms</Link> — in our data, 
            firms employing ex-government lobbyists earn <strong>369% more</strong> on average than those without.
          </p>
          <p className="text-gray-600">
            The revolving door operates in both directions. Former lobbyists frequently return to government in appointed 
            positions, bringing industry perspectives to regulatory agencies and the White House. In the 119th Congress 
            (2025–2026), at least <strong>78 senior staffers</strong> previously worked as registered lobbyists before 
            joining congressional offices. Critics argue this creates conflicts of interest, while defenders contend that 
            policy expertise developed in the private sector improves government decision-making. Regardless of one&apos;s view, 
            understanding who has passed through the revolving door is essential context for evaluating policy outcomes — 
            which is why OpenLobby flags every lobbyist with disclosed government experience.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Career Paths Into Lobbying</h3>
          <p className="text-gray-600">
            There is no single career path into federal lobbying. The most common backgrounds include former congressional 
            staff (particularly legislative directors and chiefs of staff), attorneys at Washington law firms, former 
            executive-branch officials, retired military officers, and trade association executives. Many lobbyists hold 
            law degrees — an estimated <strong>62% of top-billing lobbyists</strong> attended law school — though legal 
            licensure is not required. The median lobbyist in our database first appears on filings around age 35, 
            suggesting most enter the profession after building expertise in government, law, or a specific policy domain. 
            Compensation varies widely: entry-level lobbyists at mid-size firms typically earn $90,000–$130,000, while 
            senior partners at elite firms can command $1 million or more annually. The highest-paid lobbyists are almost 
            invariably those with the most significant government credentials.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Top Lobbyists by Activity</h3>
          <p className="text-gray-600">
            Some lobbyists appear on hundreds of quarterly filings, representing dozens of 
            <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> simultaneously across a wide 
            range of <Link href="/issues" className="text-blue-600 hover:underline">issue areas</Link>. The most active 
            lobbyists in our database have been named on <strong>500+ filings</strong> since 2018, typically working for 
            large multi-service firms like Akin Gump, Brownstein Hyatt, or Holland &amp; Knight. These high-volume lobbyists 
            tend to specialize in broad areas like appropriations, tax policy, or healthcare regulation, where their 
            relationships with key committee chairs and ranking members provide leverage across many clients. At the other 
            end of the spectrum, thousands of lobbyists appear on just a handful of filings, often representing a single 
            employer on a narrow set of issues.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Regulation and Ethics</h3>
          <p className="text-gray-600">
            Federal lobbyists are subject to several layers of regulation beyond the LDA. The <strong>Honest Leadership and 
            Open Government Act of 2007</strong> (HLOGA) imposed additional restrictions, including a two-year "cooling off" 
            period for former senators and a one-year period for former House members before they can lobby their former 
            colleagues. Senior executive-branch officials face similar cooling-off requirements. Lobbyists are also prohibited 
            from making gifts to members of Congress exceeding $50 in value and must disclose campaign contributions 
            bundled on behalf of candidates. Violations can result in civil penalties of up to $200,000 per offense and, in 
            cases of willful noncompliance, criminal prosecution. Despite these rules, enforcement has historically been 
            limited — the Government Accountability Office has repeatedly found that compliance rates for timely and 
            accurate filing hover around <strong>75–80%</strong>, with many lobbyists filing late or failing to disclose 
            all required information.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Lobbyist Demographics and Trends in 2026</h3>
          <p className="text-gray-600">
            The lobbying workforce has evolved significantly in recent years. The total number of active registered lobbyists 
            (those appearing on at least one filing in a given year) declined from a peak of roughly 14,800 in 2007 to 
            around <strong>12,600 in 2020</strong>, as many practitioners de-registered in response to heightened public 
            scrutiny and the Obama-era restrictions on lobbyist participation in government. Since then, the numbers have 
            rebounded, with approximately <strong>13,200 active lobbyists</strong> filing in 2025. The profession remains 
            heavily concentrated in the Washington metropolitan area — over <strong>85% of lobbyists</strong> list addresses 
            in <Link href="/states/DC" className="text-blue-600 hover:underline">DC</Link>, 
            <Link href="/states/VA" className="text-blue-600 hover:underline">Virginia</Link>, or 
            <Link href="/states/MD" className="text-blue-600 hover:underline">Maryland</Link>. However, the rise of remote 
            work has enabled a small but growing cohort of lobbyists to operate from other 
            <Link href="/states" className="text-blue-600 hover:underline">states</Link>, particularly 
            <Link href="/states/TX" className="text-blue-600 hover:underline">Texas</Link> and 
            <Link href="/states/FL" className="text-blue-600 hover:underline">Florida</Link>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>How to Use the Lobbyists Directory</h3>
          <p className="text-gray-600">
            Use the search bar above to find any lobbyist by name. You can also filter by issue area, firm, or government 
            background. Each lobbyist profile page provides a complete picture: every client they&apos;ve represented, every 
            firm they&apos;ve worked for, every issue they&apos;ve lobbied on, and a timeline of their quarterly filings. Lobbyists 
            with the 🏛️ badge have disclosed prior government service. Revenue figures shown on lobbyist profiles are 
            derived from the income reported by their firms on quarterly filings — since multiple lobbyists may work on a 
            single filing, these figures represent the filing-level revenue associated with each lobbyist rather than their 
            individual compensation. For deeper analysis, explore our <Link href="/firms" className="text-blue-600 hover:underline">firms directory</Link> to 
            see how lobbyists are organized, or our <Link href="/issues" className="text-blue-600 hover:underline">issues breakdown</Link> to 
            understand which policy areas attract the most lobbying activity.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by the Numbers: 2026 Statistics</h3>
          <p className="text-gray-600">
            The federal lobbying workforce reflects a mature, highly professionalized industry with deep roots in 
            Washington&apos;s political ecosystem. Here are the key statistics that define the profession in 2026:
          </p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2">
            <li><strong>23,545 total registered lobbyists</strong> have appeared on filings since 2018</li>
            <li><strong>~13,200 active lobbyists</strong> filed at least one report in 2025</li>
            <li><strong>5,000+ revolving-door lobbyists</strong> disclosed prior government positions</li>
            <li><strong>21% of all lobbyists</strong> have government backgrounds</li>
            <li><strong>369% revenue premium</strong> for firms employing ex-government staff</li>
            <li><strong>85% of lobbyists</strong> are based in the DC metropolitan area</li>
            <li><strong>62% of top-billing lobbyists</strong> hold law degrees</li>
            <li><strong>94,000+ quarterly filings</strong> were submitted in 2025</li>
            <li><strong>$4.7 billion</strong> in total lobbying spending in 2025</li>
            <li><strong>79 issue categories</strong> defined by the Lobbying Disclosure Act</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Bipartisan Nature of Lobbying</h3>
          <p className="text-gray-600">
            Unlike many aspects of Washington politics, lobbying is deeply bipartisan. Major 
            <Link href="/firms" className="text-blue-600 hover:underline">lobbying firms</Link> deliberately hire 
            lobbyists from both sides of the aisle, ensuring they can effectively advocate with whichever party 
            controls Congress, the White House, or key committee chairs. The most valuable lobbying teams pair a 
            former Democratic chief of staff with a former Republican leadership aide, creating access across the 
            political spectrum. This bipartisan structure means that changes in party control shift which lobbyists 
            are most in demand, but rarely reduce overall lobbying spending. When power changes hands, firms simply 
            elevate different team members — a dynamic that helps explain why lobbying revenue has grown 
            continuously regardless of which party holds the majority.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Specialization and Expertise</h3>
          <p className="text-gray-600">
            While some lobbyists are generalists who work across many 
            <Link href="/issues" className="text-blue-600 hover:underline">issue areas</Link>, the trend in the 
            profession is toward increasing specialization. The most effective lobbyists develop deep expertise in 
            specific policy domains — a former FDA official who lobbies on pharmaceutical regulation, a retired 
            Army general who advocates for defense contractors, or a former tax counsel who navigates the Internal 
            Revenue Code for corporate clients. This specialization creates a market where 
            <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> often hire multiple 
            lobbyists, each bringing expertise in different areas relevant to their business. A major healthcare 
            company might retain one lobbyist for Medicare reimbursement issues, another for FDA regulatory affairs, 
            a third for tax policy, and a fourth for appropriations — each selected for their specific relationships 
            and knowledge base.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Shadow Lobbying and Unregistered Influence</h3>
          <p className="text-gray-600">
            The 23,545 lobbyists in our database represent only the registered portion of Washington&apos;s influence 
            industry. A significant amount of influence activity occurs below the registration threshold or is 
            structured to avoid triggering disclosure requirements. Former officials who provide "strategic advice" 
            rather than direct congressional contact, consultants who lobby executive-branch agencies through informal 
            channels, and organizations that characterize their advocacy as "grassroots" rather than direct lobbying 
            all operate outside the LDA&apos;s disclosure framework. Various estimates suggest that the true influence 
            industry is <strong>2–3 times larger</strong> than what appears in official lobbying filings. This 
            shadow lobbying makes the registered lobbyists in OpenLobby&apos;s database all the more valuable as a 
            data source — they represent the most transparent slice of a much larger influence ecosystem.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying and Democracy</h3>
          <p className="text-gray-600">
            The role of lobbyists in American democracy is a subject of ongoing debate. Proponents argue that 
            lobbying is a form of constitutionally protected petitioning of the government, and that lobbyists 
            provide lawmakers with crucial technical expertise and real-world perspectives on how legislation 
            affects businesses, communities, and individuals. Critics counter that the lobbying system 
            disproportionately amplifies the voices of wealthy corporations and industries at the expense of 
            ordinary citizens who cannot afford professional representation. Both perspectives contain truth: 
            lobbying does provide valuable information to policymakers, but the massive spending disparities 
            documented in our data — where the top 100 <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> outspend 
            the bottom 30,000 combined — raise legitimate questions about equality of access and influence. 
            OpenLobby exists to make this system transparent, so that citizens, journalists, researchers, and 
            policymakers can see exactly who is lobbying whom, on which 
            <Link href="/issues" className="text-blue-600 hover:underline">issues</Link>, and for how much money.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Notable Lobbying Controversies</h3>
          <p className="text-gray-600">
            The lobbying profession has been marked by several high-profile scandals that have shaped public 
            perception and regulatory responses. The Jack Abramoff scandal of the mid-2000s revealed systematic 
            corruption involving gifts, trips, and campaign contributions to lawmakers in exchange for legislative 
            favors, leading to the Honest Leadership and Open Government Act of 2007. More recently, the rapid 
            growth of foreign lobbying — particularly from authoritarian governments seeking to influence U.S. 
            policy — has drawn scrutiny from both parties in Congress. In 2023–2024, several lobbying investigations 
            focused on undisclosed foreign lobbying by former senior officials, resulting in FARA enforcement actions 
            and renewed calls for stricter disclosure requirements. These controversies have not reduced lobbying 
            activity but have shifted some practitioners toward more careful compliance and others toward 
            unregistered "strategic advisory" roles that avoid disclosure entirely.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h3>
          <p className="text-gray-600">
            <strong>How often is this data updated?</strong> OpenLobby updates its lobbyist database quarterly, 
            following each filing deadline with the Senate Office of Public Records. New filings typically appear 
            in our system within 2–4 weeks of the deadline.
          </p>
          <p className="text-gray-600">
            <strong>What does the revenue figure on a lobbyist profile mean?</strong> Revenue figures represent the 
            income reported on filings where that lobbyist was named. Since multiple lobbyists often appear on a 
            single filing, these figures reflect filing-level revenue associated with each lobbyist, not individual 
            compensation.
          </p>
          <p className="text-gray-600">
            <strong>Why are some lobbyists listed without a firm?</strong> Some lobbyists work in-house for their 
            <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> rather than through 
            external <Link href="/firms" className="text-blue-600 hover:underline">lobbying firms</Link>. In these 
            cases, the client itself appears as both the registrant and the client on the filing.
          </p>
          <p className="text-gray-600">
            <strong>How do I find lobbyists focused on a specific issue?</strong> Visit our 
            <Link href="/issues" className="text-blue-600 hover:underline">issues directory</Link> and click on any 
            issue category to see the lobbyists, firms, and clients most active in that policy area.
          </p>
        </div>
      </div>
    </div>
  )
}
