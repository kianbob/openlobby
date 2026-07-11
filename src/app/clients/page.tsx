import { Metadata } from 'next'
import Link from 'next/link'
import ClientsPageClient from './ClientsPageClient'

export const metadata: Metadata = {
  title: 'Lobbying Clients Database: 37,994 Organizations Exposed',
  description: 'Search 37,994 lobbying clients ranked by spending. US Chamber of Commerce leads at $608M. Browse Big Pharma, Big Tech, and every organization lobbying Congress (2018-2026).',
}

export default function ClientsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Who are the biggest lobbying clients in America?","acceptedAnswer":{"@type":"Answer","text":"The U.S. Chamber of Commerce is the top lobbying client at over $608M spent since 2018. Other top spenders include the National Association of Realtors, Blue Cross Blue Shield, the American Hospital Association, and the Pharmaceutical Research and Manufacturers of America (PhRMA)."}},{"@type":"Question","name":"How many organizations lobby the federal government?","acceptedAnswer":{"@type":"Answer","text":"OpenLobby tracks 37,994 organizations that have filed lobbying disclosures with the U.S. Senate since 2018, spending a combined $37.7 billion across 726,000+ filings."}},{"@type":"Question","name":"How much does the average lobbying client spend?","acceptedAnswer":{"@type":"Answer","text":"Spending varies enormously. The median client spends around $120,000-$200,000 per year, while the top 100 clients each spend over $10 million annually. The U.S. Chamber of Commerce alone spends more than $75 million per year."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbying Clients Database","description":"37,994 organizations that lobby Congress, with spending data, filing history, and issue breakdowns (2018-2026).","url":"https://www.openlobby.us/clients","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2026","variableMeasured":"Federal lobbying spending"}) }} />
      <ClientsPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Understanding Lobbying Clients</h2>
          <p className="text-gray-600">
            OpenLobby tracks <strong>37,994 organizations</strong> that have filed lobbying disclosures with the U.S. Senate since 2018. 
            These clients collectively spent <strong>$37.7 billion</strong> on federal lobbying across 726,000+ quarterly filings.
          </p>
          <p className="text-gray-600">
            The top spender, the U.S. Chamber of Commerce, has invested over $607 million in lobbying — more than three times the next largest client. 
            Trade associations like the Chamber pool money from thousands of member companies, amplifying their collective influence far beyond what any single company could achieve.
          </p>
          <p className="text-gray-600">
            Click any client to see their full lobbying profile: spending trends, lobbying firms hired, individual lobbyists deployed, 
            issue areas targeted, government agencies contacted, and actual descriptions from their quarterly filings.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Who Lobbies the Federal Government?</h3>
          <p className="text-gray-600">
            Federal lobbying clients span nearly every sector of the American economy. The 37,994 organizations in our 
            database include Fortune 500 corporations, small businesses, trade associations, labor unions, universities, 
            hospitals, state and local governments, foreign governments, nonprofits, and even individual wealthy citizens. 
            The common thread is that each has a stake in federal policy and has chosen to invest in professional advocacy 
            to advance its interests. Some clients lobby continuously, maintaining year-round retainers with multiple 
            <Link href="/firms" className="text-blue-600 hover:underline">lobbying firms</Link>, while others engage 
            only when a specific bill or regulation threatens their operations. Roughly <strong>8,500 clients</strong> filed 
            lobbying reports in every single year from 2018 through 2025, representing the core of Washington&apos;s 
            permanent influence class.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Industry Breakdown: Where the Money Flows</h3>
          <p className="text-gray-600">
            The <Link href="/issues/HCR" className="text-blue-600 hover:underline">healthcare industry</Link> is far and 
            away the largest source of lobbying spending, with pharmaceutical companies, hospital systems, health insurers, 
            and medical device manufacturers collectively spending over <strong>$700 million annually</strong>. The 
            Pharmaceutical Research and Manufacturers of America (PhRMA) alone has spent more than $250 million since 
            2018, making it the single most aggressive industry lobby after the U.S. Chamber of Commerce. 
            <Link href="/issues/CPT" className="text-blue-600 hover:underline">Technology</Link> companies have rapidly 
            increased their spending, with the sector now ranking third overall at approximately <strong>$450 million per year</strong>. 
            Meta, Amazon, Apple, Google, and Microsoft each spend $15–25 million annually on federal lobbying, while newer 
            entrants like OpenAI, Anthropic, and cryptocurrency exchanges have dramatically scaled their Washington 
            presence since 2023. The <Link href="/issues/FIN" className="text-blue-600 hover:underline">financial services</Link> sector, 
            the <Link href="/issues/DEF" className="text-blue-600 hover:underline">defense industry</Link>, and 
            <Link href="/issues/ENG" className="text-blue-600 hover:underline">energy companies</Link> round out the 
            top five spending sectors.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Spending Trends: 2018–2026</h3>
          <p className="text-gray-600">
            Total federal lobbying spending has grown every year since 2018, rising from <strong>$3.46 billion in 2018</strong> to 
            an estimated <strong>$4.7 billion in 2025</strong> — a 36% increase. This growth has been driven by several 
            factors: increased regulatory activity across administrations, major legislative battles over infrastructure, 
            climate policy, and healthcare reform, and the emergence of entirely new policy domains like artificial 
            intelligence and cryptocurrency regulation. The COVID-19 pandemic triggered a particular surge, as industries 
            from airlines to restaurants to pharmaceuticals mobilized to secure relief funding and shape public health 
            policy. Spending in 2020 jumped <strong>7.4%</strong> year-over-year, the largest single-year increase in a 
            decade. The trend shows no signs of slowing in 2026, with first-quarter filings suggesting another record year.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The ROI of Lobbying</h3>
          <p className="text-gray-600">
            Academic research consistently finds that lobbying delivers extraordinary returns on investment for clients 
            who engage strategically. A landmark study by researchers at the University of Kansas found that firms 
            lobbying for a specific tax provision received a <strong>22,000% return</strong> on their lobbying investment 
            — $220 in tax benefits for every $1 spent on lobbying. While such extreme returns are not universal, the 
            broader evidence suggests that lobbying is among the highest-ROI investments a corporation can make. Companies 
            that lobby tend to pay lower effective tax rates, receive more government contracts, face fewer regulatory 
            penalties, and secure more favorable legislative outcomes than comparable non-lobbying peers. This helps 
            explain why lobbying spending continues to grow: for the <Link href="/clients" className="text-blue-600 hover:underline">37,994 
            organizations</Link> in our database, the cost of lobbying is small relative to the policy stakes involved.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Top Spenders: A Deep Dive</h3>
          <p className="text-gray-600">
            The concentration of lobbying spending at the top is remarkable. The <strong>top 100 clients</strong> account 
            for approximately <strong>25% of all federal lobbying spending</strong>, while the top 1,000 account for 
            nearly 60%. The U.S. Chamber of Commerce leads with over $607 million since 2018, followed by the National 
            Association of Realtors ($500M+), the American Hospital Association, Blue Cross Blue Shield, PhRMA, and the 
            American Medical Association. Among individual corporations, Amazon, Meta, Comcast, AT&amp;T, and Boeing are 
            perennial top spenders, each investing $10–20 million annually. These top spenders typically retain 
            <strong>5–15 outside lobbying firms</strong> simultaneously while also maintaining large in-house government 
            affairs teams, deploying dozens of <Link href="/lobbyists" className="text-blue-600 hover:underline">individual 
            lobbyists</Link> across multiple <Link href="/issues" className="text-blue-600 hover:underline">issue areas</Link>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Trade Associations vs. Direct Corporate Lobbying</h3>
          <p className="text-gray-600">
            One of the most important distinctions in lobbying data is between <strong>trade associations</strong> (which 
            represent entire industries) and <strong>individual companies</strong> (which lobby on their own behalf). 
            Trade associations like the Chamber of Commerce, the Business Roundtable, and the National Association of 
            Manufacturers pool dues from hundreds or thousands of member companies, allowing industries to present a 
            unified voice on shared priorities. However, individual companies also lobby extensively on issues specific 
            to their business — a pharmaceutical company might lobby through PhRMA on industry-wide drug pricing issues 
            while simultaneously lobbying directly on FDA approval timelines for its own products. This dual-track 
            approach means that the true lobbying footprint of major industries is often significantly larger than what 
            any single filing reveals. OpenLobby helps users trace these connections by linking 
            <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> to their 
            <Link href="/firms" className="text-blue-600 hover:underline">firms</Link>, 
            <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyists</Link>, and 
            <Link href="/issues" className="text-blue-600 hover:underline">issues</Link>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Foreign Entities and FARA</h3>
          <p className="text-gray-600">
            Not all lobbying clients are American. Foreign governments, state-owned enterprises, and multinational 
            corporations also lobby the U.S. government, though they are subject to additional disclosure requirements 
            under the <strong>Foreign Agents Registration Act (FARA)</strong>. Countries like Japan, South Korea, Saudi 
            Arabia, and the UAE spend millions annually on Washington representation, typically hiring elite 
            <Link href="/firms" className="text-blue-600 hover:underline">K Street firms</Link> to advocate on trade, 
            defense, and diplomatic issues. In our database, foreign-connected lobbying accounts for an estimated 
            <strong>$350 million annually</strong>, though the actual figure is likely higher due to the complex 
            corporate structures that can obscure foreign ownership.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>How to Use the Clients Directory</h3>
          <p className="text-gray-600">
            Search for any organization by name, or sort by total spending to see the biggest players. Each client 
            profile provides comprehensive data: annual and quarterly spending trends, every 
            <Link href="/firms" className="text-blue-600 hover:underline">lobbying firm</Link> retained, every 
            <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyist</Link> deployed, 
            <Link href="/issues" className="text-blue-600 hover:underline">issue areas</Link> lobbied, government 
            agencies contacted, and the actual text descriptions from quarterly filings that reveal exactly what each 
            client was lobbying for. You can also explore clients by 
            <Link href="/states" className="text-blue-600 hover:underline">state</Link> to see which organizations 
            are headquartered in your area. All data is sourced directly from filings submitted to the U.S. Senate 
            Office of Public Records and updated quarterly.
          </p>
        </div>
      </div>
    </div>
  )
}
