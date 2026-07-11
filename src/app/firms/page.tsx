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
        </div>
      </div>
    </div>
  )
}
