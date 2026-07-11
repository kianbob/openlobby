import { Metadata } from 'next'
import Link from 'next/link'
import FirmsPageClient from './FirmsPageClient'

export const metadata: Metadata = {
  title: 'Lobbying Firms Ranked: 7,757 K Street Power Brokers',
  description: 'Every lobbying firm in Washington ranked by revenue. Firms with ex-government staff earn 369% more. Search all 7,757 firms in the $37.7B influence industry (2018-2026).',
}

export default function FirmsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the biggest lobbying firms in Washington DC?","acceptedAnswer":{"@type":"Answer","text":"The largest lobbying firms by revenue include Akin Gump Strauss Hauer & Feld, Brownstein Hyatt Farber Schreck, and Holland & Knight. Top firms earn $50M+ annually representing hundreds of clients across industries."}},{"@type":"Question","name":"Do lobbying firms with ex-government employees earn more?","acceptedAnswer":{"@type":"Answer","text":"Yes. OpenLobby data shows firms employing former government officials earn 369% more revenue on average than firms without revolving door connections, highlighting the premium placed on insider access."}},{"@type":"Question","name":"How many lobbying firms operate in the US?","acceptedAnswer":{"@type":"Answer","text":"OpenLobby tracks 7,757 lobbying firms that have filed disclosures with the U.S. Senate since 2018. These firms range from solo practitioners to multinational law firms with hundreds of lobbyists."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbying Firms Database","description":"7,757 lobbying firms ranked by revenue, with client lists, lobbyist rosters, and revolving door data (2018-2026).","url":"https://www.openlobby.us/firms","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2026","variableMeasured":"Federal lobbying spending"}) }} />
      <FirmsPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>About Lobbying Firms</h2>
          <p className="text-gray-600">
            Our database includes <strong>7,757 lobbying firms</strong> that have filed quarterly activity reports with the Senate. 
            These K Street firms serve as intermediaries between corporations and Congress, representing dozens of clients simultaneously 
            and deploying networks of lobbyists with specialized relationships and expertise.
          </p>
          <p className="text-gray-600">
            Firms with former government officials on staff command a <strong>369% revenue premium</strong> over those without — 
            demonstrating the quantifiable value of the revolving door. Click any firm to explore their client portfolio, 
            lobbyist roster, issue specializations, and revenue history.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The K Street Landscape in 2026</h3>
          <p className="text-gray-600">
            "K Street" has become shorthand for Washington&apos;s lobbying industry, even though most major firms have long 
            since moved to other addresses in downtown DC. The industry generates an estimated <strong>$4.7 billion annually</strong> in 
            disclosed federal lobbying revenue as of 2025, a figure that has grown steadily from $3.5 billion in 2018. 
            This growth reflects both rising lobbying activity and a shift toward higher-value, strategic advisory 
            engagements. The 7,757 firms in our database range from solo practitioners operating out of home offices 
            to massive multinational law firms and public affairs conglomerates with hundreds of 
            <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyists</Link> on staff. The top 50 firms 
            alone account for over <strong>35% of total industry revenue</strong>, illustrating the extreme concentration 
            of economic power at the top of the profession.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Firm Rankings and Revenue Models</h3>
          <p className="text-gray-600">
            OpenLobby ranks firms by their total disclosed lobbying revenue since 2018. The largest firms — including 
            Akin Gump Strauss Hauer &amp; Feld, Brownstein Hyatt Farber Schreck, and Holland &amp; Knight — each report 
            <strong>$50 million or more</strong> in annual lobbying income. These firms typically operate as full-service 
            practices, combining lobbying with legal, public relations, and strategic consulting services. Their revenue 
            models rely on monthly retainers from <Link href="/clients" className="text-blue-600 hover:underline">corporate 
            and association clients</Link>, typically ranging from $10,000 to $50,000 per month for standard engagements, 
            with premium clients paying $100,000 or more monthly for comprehensive government affairs representation. 
            Project-based fees for specific legislative campaigns can run into the millions for high-stakes issues like 
            <Link href="/issues/HCR" className="text-blue-600 hover:underline">healthcare reform</Link> or 
            <Link href="/issues/TAX" className="text-blue-600 hover:underline">tax policy</Link> battles.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Types of Lobbying Firms</h3>
          <p className="text-gray-600">
            Lobbying firms fall into several distinct categories. <strong>Contract lobbying firms</strong> represent 
            outside clients for a fee and make up the majority of firms in our database. <strong>Law firm lobbying 
            practices</strong> — like those at Akin Gump, Squire Patton Boggs, and Covington &amp; Burling — embed 
            lobbying teams within larger legal practices, allowing them to offer integrated legal-lobbying strategies. 
            <strong>Public affairs firms</strong> like APCO Worldwide and FTI Consulting combine lobbying with broader 
            communications and public relations work. Finally, <strong>in-house lobbying operations</strong> represent 
            a single employer; these appear in our data when corporations like Google, Amazon, or Pfizer file lobbying 
            reports directly rather than through outside firms. In-house operations account for roughly 
            <strong>40% of total lobbying spending</strong> but only about 15% of the firms in our database, since 
            each in-house operation represents just one <Link href="/clients" className="text-blue-600 hover:underline">client</Link>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Consolidation and Industry Trends</h3>
          <p className="text-gray-600">
            The lobbying industry has undergone significant consolidation over the past decade. Large firms have 
            acquired boutique practices to expand their issue coverage and client bases, while global advertising 
            and public relations holding companies — including WPP, Omnicom, and Interpublic — have built lobbying 
            capabilities through acquisitions. This consolidation has created a two-tier market: a small number of 
            mega-firms that dominate high-value clients and a long tail of smaller firms competing on specialization 
            and personal relationships. Between 2018 and 2025, the number of firms filing at least one lobbying 
            report declined by approximately <strong>8%</strong>, even as total industry revenue grew by over 30%, 
            suggesting that revenue is concentrating among fewer, larger players. The rise of technology-focused 
            lobbying — driven by <Link href="/issues/CPT" className="text-blue-600 hover:underline">AI regulation</Link>, 
            cryptocurrency policy, and data privacy legislation — has created opportunities for specialized boutiques 
            with deep tech expertise.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door Premium</h3>
          <p className="text-gray-600">
            Our data reveals a stark economic reality: <strong>firms that employ former government officials earn 
            dramatically more revenue</strong> than those without revolving-door connections. The average annual revenue 
            for firms with at least one ex-government <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyist</Link> is 
            <strong>$2.8 million</strong>, compared to just $600,000 for firms without any revolving-door staff — a 
            369% premium. This premium reflects the market value of insider relationships, institutional knowledge, 
            and the implicit signal that a firm&apos;s lobbyists can navigate the corridors of power effectively. Clients 
            are willing to pay significantly more for lobbyists who personally know the committee chairs, agency heads, 
            and White House officials making decisions on their issues. The premium is even more pronounced for lobbyists 
            who held senior positions: former members of Congress and senior White House staff generate an estimated 
            <strong>5–7x revenue premium</strong> over lobbyists without government backgrounds.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Geographic Distribution of Firms</h3>
          <p className="text-gray-600">
            While the vast majority of lobbying firms are headquartered in 
            <Link href="/states/DC" className="text-blue-600 hover:underline">Washington, DC</Link>, a growing number 
            operate from other cities. <Link href="/states/NY" className="text-blue-600 hover:underline">New York</Link>-based 
            law firms with Washington lobbying offices account for a significant share of top-tier revenue, while firms in 
            <Link href="/states/TX" className="text-blue-600 hover:underline">Texas</Link>, 
            <Link href="/states/CA" className="text-blue-600 hover:underline">California</Link>, and 
            <Link href="/states/IL" className="text-blue-600 hover:underline">Illinois</Link> serve regional client bases 
            with federal advocacy needs. The geographic concentration of lobbying firms in DC remains strong, however — 
            approximately <strong>72% of all firms</strong> list a DC-area address, reflecting the importance of proximity 
            to Congress, federal agencies, and the broader Washington influence ecosystem. Explore our 
            <Link href="/states" className="text-blue-600 hover:underline">state-by-state analysis</Link> to see how 
            lobbying activity varies across the country.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>How to Use the Firms Directory</h3>
          <p className="text-gray-600">
            Search for any firm by name using the search bar above, or sort by revenue to see the highest-earning firms. 
            Each firm profile includes a complete client roster, lobbyist team, 
            <Link href="/issues" className="text-blue-600 hover:underline">issue specializations</Link>, revenue history, 
            and revolving-door analysis. The revenue figures shown are derived directly from quarterly lobbying disclosure 
            filings — firms report the income received from each client, which OpenLobby aggregates to produce firm-level 
            totals. Note that these figures capture only disclosed lobbying income and do not include revenue from 
            non-lobbying services (legal work, public relations, strategic consulting) that many firms also provide. 
            For the most complete picture of Washington&apos;s influence industry, combine firm-level analysis with our 
            <Link href="/lobbyists" className="text-blue-600 hover:underline">individual lobbyist profiles</Link> and 
            <Link href="/clients" className="text-blue-600 hover:underline">client spending data</Link>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Firm Revenue: Key Statistics</h3>
          <p className="text-gray-600">
            The economics of K Street reveal a highly stratified industry where a small number of elite firms 
            capture the lion&apos;s share of revenue:
          </p>
          <ul className="text-gray-600 list-disc pl-6 space-y-2">
            <li><strong>7,757 total firms</strong> have filed lobbying disclosures since 2018</li>
            <li><strong>Top 50 firms</strong> account for 35%+ of total industry revenue</li>
            <li><strong>$4.7 billion</strong> in total annual lobbying revenue (2025)</li>
            <li><strong>369% revenue premium</strong> for firms with revolving-door staff</li>
            <li><strong>$2.8 million</strong> average annual revenue for firms with ex-government lobbyists</li>
            <li><strong>$600,000</strong> average annual revenue for firms without government connections</li>
            <li><strong>72% of firms</strong> headquartered in the DC metropolitan area</li>
            <li><strong>~8% decline</strong> in number of active firms since 2018 (consolidation)</li>
            <li><strong>30%+ growth</strong> in total industry revenue over same period</li>
            <li><strong>40% of spending</strong> flows through in-house lobbying operations</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Bipartisan Staffing Model</h3>
          <p className="text-gray-600">
            Successful lobbying firms maintain bipartisan teams to ensure effectiveness regardless of which party 
            controls Congress or the White House. This means actively recruiting former staffers from both Republican 
            and Democratic leadership offices, committee chairs, and ranking members. When control of the House or 
            Senate shifts, firms with deep benches on both sides of the aisle can seamlessly adjust their lobbying 
            strategies without losing access. The most sophisticated firms track political cycles and preemptively 
            hire outgoing staffers from the incoming majority party, creating a constant flow of 
            <Link href="/lobbyists" className="text-blue-600 hover:underline">revolving-door talent</Link>. This 
            bipartisan model is one reason why total lobbying spending rarely declines, even during transitions of 
            political power.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Boutique vs. Full-Service Firms</h3>
          <p className="text-gray-600">
            The lobbying industry supports two distinct business models. <strong>Boutique firms</strong> typically 
            employ 3–15 <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyists</Link> and focus 
            on a narrow set of <Link href="/issues" className="text-blue-600 hover:underline">issues</Link> where they 
            have deep expertise — defense procurement, healthcare regulation, financial services, or technology 
            policy. These firms compete on relationships and specialized knowledge, often charging premium rates for 
            niche expertise. <strong>Full-service firms</strong> like Akin Gump, Holland &amp; Knight, and Brownstein 
            Hyatt employ 50–200+ lobbyists covering nearly every policy area. They offer 
            <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> one-stop shopping for 
            government affairs, combining direct lobbying with strategic communications, grassroots advocacy, 
            coalition building, and regulatory compliance. While boutiques can be more agile, full-service firms 
            benefit from cross-selling opportunities and the ability to assemble large teams for major legislative 
            campaigns.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Technology&apos;s Impact on Lobbying Firms</h3>
          <p className="text-gray-600">
            The lobbying industry has been slower to adopt technology than many other professional services sectors, 
            but that is changing rapidly. Firms are increasingly using data analytics to track legislative movements, 
            identify swing votes, and measure the effectiveness of their advocacy campaigns. AI-powered tools now 
            help lobbyists monitor regulatory filings, analyze bill text for client impact, and generate policy 
            briefings. Some forward-looking firms have invested in proprietary databases that map relationships 
            between lawmakers, staffers, lobbyists, and industry stakeholders. OpenLobby itself represents a new 
            kind of transparency tool that firms, <Link href="/clients" className="text-blue-600 hover:underline">clients</Link>, 
            journalists, and researchers use to understand the competitive landscape and track industry trends.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Ethics and Compliance at Lobbying Firms</h3>
          <p className="text-gray-600">
            Lobbying firms operate under a complex web of federal regulations, including the Lobbying Disclosure Act, 
            the Honest Leadership and Open Government Act, gift rules, campaign finance laws, and (for firms 
            representing foreign entities) the Foreign Agents Registration Act. Larger firms typically employ 
            dedicated compliance officers to ensure that filings are accurate and timely, that gift rules are 
            observed, and that cooling-off periods for newly hired 
            <Link href="/lobbyists" className="text-blue-600 hover:underline">revolving-door lobbyists</Link> are 
            respected. Despite these structures, compliance remains imperfect — the Government Accountability Office 
            has found that roughly 20–25% of filings contain errors or omissions. Firms that repeatedly fail to 
            comply face reputational risk and potential enforcement actions, though criminal prosecution for lobbying 
            violations remains rare.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>International Comparisons</h3>
          <p className="text-gray-600">
            The U.S. lobbying industry is by far the largest and most transparent in the world. While countries like 
            Canada, the UK, and Australia have lobbying registries, none approaches the scope and detail of American 
            disclosure requirements. The EU&apos;s Transparency Register is voluntary, and most countries have no 
            lobbying disclosure requirements at all. This makes the U.S. system a global benchmark for transparency, 
            despite its acknowledged shortcomings. The 7,757 firms in OpenLobby&apos;s database represent a uniquely 
            rich dataset for understanding how organized interests interact with democratic government — a resource 
            that has no equivalent in any other country.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions About Lobbying Firms</h3>
          <p className="text-gray-600">
            <strong>What is the difference between a lobbying firm and a law firm?</strong> Many lobbying firms are 
            actually divisions of larger law firms. The key distinction is registration: any firm that employs 
            individuals who meet the LDA&apos;s lobbying activity thresholds must register and file quarterly reports. 
            Law firms with lobbying practices appear in our database alongside dedicated lobbying shops.
          </p>
          <p className="text-gray-600">
            <strong>How are firm revenues calculated?</strong> Revenue figures are reported directly by firms on 
            their quarterly LDA filings. Firms report the income received from each 
            <Link href="/clients" className="text-blue-600 hover:underline">client</Link> engagement. OpenLobby 
            aggregates these per-client figures to produce firm-level totals.
          </p>
          <p className="text-gray-600">
            <strong>Why do some firms show $0 in revenue?</strong> In-house lobbying operations report expenses 
            rather than revenue, since they are not receiving income from outside clients. Some firms also file 
            termination reports or "no activity" reports that reflect zero revenue for a given quarter.
          </p>
          <p className="text-gray-600">
            <strong>How can I compare firms?</strong> Use the sort and filter options above to rank firms by 
            revenue, client count, or lobbyist headcount. Each firm profile page provides detailed breakdowns 
            that enable direct comparisons across multiple dimensions of lobbying activity.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The K Street Landscape in 2026</h3>
          <p className="text-gray-600">
            Washington&apos;s lobbying industry continues to consolidate around a handful of powerhouse firms while simultaneously seeing growth from
            boutique specialists. The top 50 firms by revenue account for roughly 40% of all lobbying income, a concentration ratio that has
            increased steadily over the past decade. Major firms like Akin Gump Strauss Hauer &amp; Feld, Brownstein Hyatt Farber Schreck, and
            Holland &amp; Knight each represent hundreds of <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> across
            every major industry sector, generating annual revenues that exceed $50 million.
          </p>
          <p className="text-gray-600">
            At the same time, specialized boutique firms have carved out profitable niches in emerging policy areas. Firms focused on
            <Link href="/investigations/ai-lobbying-boom-2026" className="text-blue-600 hover:underline">artificial intelligence regulation</Link>,
            <Link href="/investigations/crypto-ai-lobbying-surge" className="text-blue-600 hover:underline">cryptocurrency policy</Link>, and
            <Link href="/investigations/tariff-lobbying-2026" className="text-blue-600 hover:underline">trade and tariff issues</Link> have seen
            explosive growth in 2026 as clients seek lobbyists with deep technical expertise in addition to Capitol Hill connections.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door Premium for Firms</h3>
          <p className="text-gray-600">
            OpenLobby&apos;s analysis reveals a striking revenue gap between firms that employ former government officials and those that don&apos;t.
            Firms with <Link href="/revolving-door" className="text-blue-600 hover:underline">revolving door</Link> lobbyists on staff earn
            an average of <strong>369% more revenue</strong> and serve <strong>4.9x more clients</strong> than firms without ex-government employees.
            This premium reflects the market value of insider access — clients are willing to pay significantly more for lobbyists who have personal
            relationships with decision-makers and understand the internal workings of federal agencies and congressional committees.
          </p>
          <p className="text-gray-600">
            The revolving door effect is particularly pronounced in <Link href="/defense-lobbying" className="text-blue-600 hover:underline">defense lobbying</Link>,
            where former Pentagon officials and military officers command the highest premiums. Defense-focused firms with ex-DOD staff earn substantially more
            per client engagement than comparable firms without military or intelligence community connections. For a detailed analysis, see our
            <Link href="/investigations/the-revolving-door-premium" className="text-blue-600 hover:underline">Revolving Door Premium investigation</Link>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Revenue Models and Client Dynamics</h3>
          <p className="text-gray-600">
            Lobbying firms operate under two primary models: external (hired gun) and in-house. External firms — the classic K Street model —
            represent multiple clients simultaneously, billing each for quarterly retainers plus activity-based fees. Top external firms maintain
            client rosters exceeding 200 organizations. In-house lobbying operations, by contrast, are departments within corporations or trade
            associations that employ their own registered <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyists</Link>.
            In-house operations report expenses rather than revenue, making direct comparisons between the two models challenging.
          </p>
          <p className="text-gray-600">
            Client retention rates vary significantly across the industry. The most established firms retain 70–80% of their client base year over
            year, while smaller firms experience higher turnover. Long-term client relationships are the backbone of firm profitability — a client
            that lobbies consistently over multiple years generates far more value than one-off engagements. Our
            <Link href="/client-trajectories" className="text-blue-600 hover:underline">client trajectories</Link> tool tracks how spending
            patterns evolve over time, revealing which organizations are ramping up and which are pulling back.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Industry Concentration and Competition</h3>
          <p className="text-gray-600">
            The lobbying industry exhibits moderate concentration, with a long tail of small firms competing against a handful of dominant players.
            Our <Link href="/concentration" className="text-blue-600 hover:underline">concentration analysis</Link> measures market structure using
            the Herfindahl-Hirschman Index (HHI) and other metrics. While the industry as a whole is not highly concentrated, specific
            <Link href="/issues" className="text-blue-600 hover:underline">issue areas</Link> often are — a small number of firms dominate
            lobbying on defense appropriations, pharmaceutical regulation, and energy policy, creating de facto oligopolies in the most lucrative
            policy domains.
          </p>
          <p className="text-gray-600">
            Competition for clients intensifies during periods of legislative activity. The <Link href="/investigations/midterm-lobbying-2026" className="text-blue-600 hover:underline">2026
            midterm cycle</Link> has been particularly active, with firms adding staff and expanding their issue portfolios to capture new business.
            Organizations that have never lobbied before are entering the system at record rates — see our
            <Link href="/new-entrants" className="text-blue-600 hover:underline">new entrants tracker</Link> for the latest data on first-time filers.
          </p>
        </div>
      </div>
    </div>
  )
}
