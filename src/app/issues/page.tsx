import { Metadata } from 'next'
import Link from 'next/link'
import IssuesPageClient from './IssuesPageClient'

export const metadata: Metadata = {
  title: 'Lobbying Issues: 79 Policy Areas Ranked by Spending',
  description: 'Every issue lobbied in Congress, ranked. Healthcare: $2.7B. Taxation: $2.1B. Defense: $1.8B. See which corporations dominate each policy battle (2018-2026).',
}

export default function IssuesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the most lobbied issues in Congress?","acceptedAnswer":{"@type":"Answer","text":"Healthcare (HCR) is the most lobbied issue at over $2.7 billion since 2018, followed by Taxation ($2.1B), Defense ($1.8B), and Trade ($1.5B). In 2026, AI and cryptocurrency regulation have emerged as fast-growing issue categories."}},{"@type":"Question","name":"How many lobbying issue categories exist?","acceptedAnswer":{"@type":"Answer","text":"The Lobbying Disclosure Act defines 79 issue categories that lobbyists must select when filing quarterly reports. These range from Healthcare (HCR) and Defense (DEF) to narrow categories like Torts (TOR) and Arts (ART)."}},{"@type":"Question","name":"Which issues are growing fastest in lobbying spending?","acceptedAnswer":{"@type":"Answer","text":"AI-related lobbying (filed under Computers/IT and Science) has seen the fastest growth, with multi-fold increases since 2023. Cryptocurrency lobbying and trade policy lobbying have also surged dramatically in 2025-2026."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbying Issues Database","description":"79 lobbying issue categories ranked by spending, with industry breakdowns and trend data (2018-2025).","url":"https://www.openlobby.us/issues","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2026","variableMeasured":"Federal lobbying spending"}) }} />
      <IssuesPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>About Lobbying Issues</h2>
          <p className="text-gray-600">
            The Lobbying Disclosure Act defines <strong>79 issue categories</strong> that lobbyists must select when filing their quarterly reports. 
            These categories reveal what industries care about most — and where the most money flows to influence policy.
          </p>
          <p className="text-gray-600">
            <strong>Healthcare (HCR)</strong> dominates all other categories, driven by pharmaceutical companies, hospital systems, and insurance giants 
            fighting over drug pricing, Medicare reimbursement, and regulatory policy. <strong>Taxation</strong> and <strong>Budget</strong> follow closely, 
            as virtually every industry has a stake in tax policy and government spending decisions.
          </p>
          <p className="text-gray-600">
            Click any issue to see top spenders, spending trends, related investigations, and sample lobbying descriptions 
            from actual quarterly filings.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Issue Category Breakdown</h3>
          <p className="text-gray-600">
            The 79 issue codes defined by the Lobbying Disclosure Act cover every major area of federal policy. When 
            <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyists</Link> file their quarterly 
            reports, they must select one or more of these codes to describe the subject matter of their advocacy. A 
            single filing can list multiple issue codes, which is common for <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> whose 
            interests span several policy areas. The most frequently cited issue codes since 2018, ranked by associated 
            lobbying spending, are: <strong>Healthcare/Pharmaceuticals (HCR)</strong> at $2.7 billion, 
            <strong>Taxation (TAX)</strong> at $2.1 billion, <strong>Federal Budget &amp; Appropriations (BUD)</strong> at 
            $1.9 billion, <strong>Defense (DEF)</strong> at $1.8 billion, <strong>Energy/Nuclear (ENG)</strong> at $1.5 
            billion, <strong>Transportation (TRA)</strong> at $1.4 billion, <strong>Trade (TRD)</strong> at $1.2 billion, 
            and <strong>Environment/Superfund (ENV)</strong> at $1.1 billion. These eight categories alone account for 
            over <strong>60% of all lobbying spending</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Healthcare: The $2.7 Billion Policy Battle</h3>
          <p className="text-gray-600">
            Healthcare has been the most heavily lobbied issue area in every single year since the Lobbying Disclosure 
            Act took effect. The dominance of healthcare lobbying reflects the enormous financial stakes involved: the 
            U.S. healthcare system represents <strong>18% of GDP</strong> (roughly $4.8 trillion in 2025), and federal 
            policy decisions on drug pricing, Medicare reimbursement rates, insurance regulations, and FDA approval 
            processes can shift billions of dollars between stakeholders. The pharmaceutical industry alone accounts for 
            a substantial portion of healthcare lobbying, with companies like Pfizer, Johnson &amp; Johnson, Merck, and 
            AbbVie each spending $8–15 million annually, supplemented by PhRMA&apos;s $30 million+ annual budget. Hospital 
            systems, health insurers, medical device companies, and patient advocacy groups also maintain major lobbying 
            operations. Key battles in 2025–2026 include Medicare Part D negotiation expansion, biosimilar competition 
            policies, telehealth reimbursement permanence, and AI-assisted diagnostic regulation.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Emerging Issues in 2026: AI, Crypto, and Trade</h3>
          <p className="text-gray-600">
            While traditional policy areas like healthcare and taxation continue to dominate, several emerging issues 
            have rapidly gained lobbying attention in 2025–2026. <strong>Artificial intelligence regulation</strong> has 
            become one of the fastest-growing lobbying categories, with AI companies, tech giants, and industry groups 
            spending an estimated <strong>$185 million</strong> in 2025 alone on issues related to AI safety frameworks, 
            liability standards, export controls, and workforce impacts. Companies like OpenAI, Google, Microsoft, Meta, 
            and Anthropic have dramatically expanded their Washington offices, while traditional industries from 
            healthcare to financial services lobby to shape how AI regulations affect their sectors. 
            <strong>Cryptocurrency and digital assets</strong> represent another surging category, with crypto exchanges, 
            DeFi protocols, and industry associations collectively spending over <strong>$75 million annually</strong> to 
            influence stablecoin legislation, SEC enforcement policy, and tax treatment of digital assets.
          </p>
          <p className="text-gray-600">
            <strong>Trade policy</strong> has also seen renewed intensity amid ongoing U.S.-China tensions, tariff 
            disputes, and industrial policy legislation. The CHIPS Act implementation, critical minerals supply chain 
            policy, and semiconductor export controls have triggered a wave of lobbying from technology manufacturers, 
            automakers, and energy companies. In 2025, trade-related lobbying spending exceeded <strong>$1.4 billion</strong>, 
            making it one of the top five issue areas for the first time since 2019. Climate and energy policy continues 
            to generate significant lobbying activity, with the implementation of Inflation Reduction Act tax credits 
            and permitting reform legislation attracting advocacy from both fossil fuel companies and renewable energy 
            developers.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Defense and National Security Lobbying</h3>
          <p className="text-gray-600">
            The <strong>defense sector</strong> consistently ranks among the top four lobbying issue areas, with 
            $1.8 billion in cumulative spending since 2018. Defense lobbying is dominated by the major prime contractors 
            — Lockheed Martin, Raytheon (RTX), Boeing, Northrop Grumman, and General Dynamics — which each spend 
            $12–18 million annually to influence procurement decisions, authorization bills, and appropriations 
            levels. The annual National Defense Authorization Act (NDAA) process, which sets Pentagon spending priorities, 
            triggers intense lobbying from hundreds of <Link href="/clients" className="text-blue-600 hover:underline">defense 
            clients</Link> competing for program funding. Defense <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyists</Link> are 
            disproportionately drawn from the revolving door, with former Pentagon officials, retired generals, and 
            ex-congressional defense committee staff commanding premium rates for their expertise and relationships.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Financial Services and Banking</h3>
          <p className="text-gray-600">
            Financial services lobbying encompasses banking regulation, securities law, insurance policy, consumer 
            finance, and cryptocurrency governance. Major banks like JPMorgan Chase, Bank of America, Citigroup, and 
            Goldman Sachs each maintain lobbying budgets of $6–10 million annually, supplemented by trade associations 
            like the American Bankers Association and the Securities Industry and Financial Markets Association (SIFMA). 
            Key policy fights in 2025–2026 include Basel III capital requirement implementation, SEC climate disclosure 
            rules, Consumer Financial Protection Bureau authority, and the regulatory framework for stablecoins and 
            decentralized finance. Financial services <Link href="/firms" className="text-blue-600 hover:underline">lobbying 
            firms</Link> tend to employ former Treasury officials, SEC commissioners, and banking committee staff, 
            reflecting the highly technical nature of financial regulation.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>How Issues Connect to the Broader Lobbying Ecosystem</h3>
          <p className="text-gray-600">
            Issue areas don&apos;t exist in isolation — they form a web of overlapping policy interests that connects 
            <Link href="/clients" className="text-blue-600 hover:underline">clients</Link>, 
            <Link href="/firms" className="text-blue-600 hover:underline">firms</Link>, and 
            <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyists</Link> in complex ways. A single 
            healthcare company might lobby on HCR (healthcare), TAX (taxation), TRD (trade), CPT (computers/technology), 
            and SCI (science) simultaneously, using different lobbyists with expertise in each domain. Understanding 
            which issues attract the most spending helps reveal the policy battles where the most is at stake — and 
            where corporate influence is most concentrated. Each issue page on OpenLobby shows the top spenders, 
            spending trends over time, and the actual lobbying descriptions from quarterly filings, giving you 
            granular insight into exactly what organizations are advocating for.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Understanding Issue Codes</h3>
          <p className="text-gray-600">
            The 79 issue codes used in lobbying disclosures were established by the Senate Office of Public Records and 
            have remained largely unchanged since 1995. Each code uses a three-letter abbreviation (e.g., HCR for 
            Healthcare, TAX for Taxation, DEF for Defense) and covers a broad policy domain. Lobbyists must select at 
            least one code per filing but may select as many as apply. Some codes are highly specific (like TOR for 
            Torts) while others are extremely broad (like GOV for Government Issues). The breadth of some categories 
            can make direct spending comparisons imprecise, but the overall rankings are robust indicators of where 
            lobbying attention is concentrated. OpenLobby enhances the raw filing data by linking issue codes to 
            the <Link href="/clients" className="text-blue-600 hover:underline">specific clients</Link> and 
            <Link href="/states" className="text-blue-600 hover:underline">geographic patterns</Link> driving spending 
            in each area.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Top Issues by Spending in 2026</h3>
          <p className="text-gray-600">
            Healthcare (HCR) remains the most heavily lobbied issue category, with over <strong>$2.7 billion</strong> in cumulative spending since 2018.
            The <Link href="/pharmaceutical-lobbying" className="text-blue-600 hover:underline">pharmaceutical industry</Link> drives much of this spending,
            as companies lobby on drug pricing legislation, FDA approval pathways, patent protections, and Medicare reimbursement rates. The stakes are
            enormous: a single regulatory decision can affect billions in pharmaceutical revenue, making healthcare lobbying a perennial priority for some of
            Washington&apos;s largest <Link href="/clients" className="text-blue-600 hover:underline">lobbying clients</Link>.
          </p>
          <p className="text-gray-600">
            Taxation (TAX) ranks second at over <strong>$2.1 billion</strong>, driven by ongoing debates over corporate tax rates, international tax
            structures, and individual tax provisions set to expire under the 2017 Tax Cuts and Jobs Act. <Link href="/defense-lobbying" className="text-blue-600 hover:underline">Defense</Link> (DEF)
            follows at <strong>$1.8 billion</strong>, with spending concentrated around appropriations cycles and weapons system procurement decisions.
            The <Link href="/tech-lobbying" className="text-blue-600 hover:underline">technology sector</Link> has pushed Computers/Information Technology (CPT)
            into the top five, reflecting Silicon Valley&apos;s dramatic expansion of its Washington lobbying operations.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Emerging Issues: AI, Crypto, and Trade Policy</h3>
          <p className="text-gray-600">
            The most dynamic growth in 2026 lobbying has been in issue areas connected to emerging technology. Filings mentioning artificial intelligence
            have surged dramatically, with our <Link href="/investigations/ai-lobbying-boom-2026" className="text-blue-600 hover:underline">AI lobbying analysis</Link>
            documenting a multi-fold increase in AI-related lobbying activity since 2023. Companies from OpenAI to Lockheed Martin now include AI provisions
            in their lobbying filings, spanning issues from algorithmic transparency to military AI applications.
          </p>
          <p className="text-gray-600">
            <Link href="/investigations/crypto-ai-lobbying-surge" className="text-blue-600 hover:underline">Cryptocurrency and digital asset lobbying</Link> has
            similarly exploded as Congress considers comprehensive digital asset legislation. Trade policy (TRD) has resurged as a top lobbying category amid
            <Link href="/investigations/tariff-lobbying-2026" className="text-blue-600 hover:underline">tariff and trade disruptions</Link>, with manufacturers,
            retailers, and agricultural exporters all escalating their Washington presence. These shifts demonstrate how lobbying spending serves as a real-time
            barometer of corporate America&apos;s policy anxieties.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Issue Arms Races: When Opposing Sides Escalate</h3>
          <p className="text-gray-600">
            Some of Washington&apos;s most expensive lobbying battles occur when industry groups on opposite sides of an issue escalate spending simultaneously.
            Our <Link href="/investigations/issue-arms-race" className="text-blue-600 hover:underline">issue arms race analysis</Link> identifies policy domains
            where competing interests have created spending spirals. Healthcare offers the clearest example: pharmaceutical manufacturers lobby against price
            controls while <Link href="/investigations/healthcare-insurance-lobby" className="text-blue-600 hover:underline">insurance companies</Link> and hospital
            systems lobby for reforms that would shift costs away from payers. Both sides spend tens of millions quarterly, creating a policy stalemate that
            favors the status quo.
          </p>
          <p className="text-gray-600">
            Energy policy exhibits similar dynamics, with <Link href="/investigations/big-oil-climate-lobby" className="text-blue-600 hover:underline">fossil fuel
            companies</Link> and renewable energy advocates competing for legislative attention. Defense spending battles pit contractors against fiscal
            hawks, while technology regulation pits Big Tech companies against consumer advocacy groups. These arms races make lobbying one of the most reliable
            indicators of which policy issues are most contested in Congress.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>How Issues Map to Government Agencies</h3>
          <p className="text-gray-600">
            Lobbying filings also disclose which government <Link href="/agencies" className="text-blue-600 hover:underline">agencies</Link> and congressional
            chambers were contacted. This creates a two-dimensional picture of influence: what issue was lobbied, and who was lobbied. Healthcare filings
            overwhelmingly target HHS, CMS, and the Senate Finance Committee. Defense filings target the Pentagon, Armed Services Committees, and
            Appropriations subcommittees. Technology filings increasingly target the FTC, FCC, NIST, and the Senate Commerce Committee.
          </p>
          <p className="text-gray-600">
            By combining issue-level and agency-level data, OpenLobby provides a comprehensive map of where corporate influence is directed. Visit any
            issue page to see the full breakdown of agencies contacted, top spending clients, quarterly trends, and the actual lobbying descriptions from
            filed reports. For comparative analysis across issue areas, try our <Link href="/tools/industry-compare" className="text-blue-600 hover:underline">industry
            comparison tool</Link> or explore <Link href="/issue-battles" className="text-blue-600 hover:underline">issue battles</Link> for head-to-head
            spending matchups.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Seasonal Patterns in Issue Lobbying</h3>
          <p className="text-gray-600">
            Lobbying activity on specific issues follows predictable seasonal rhythms tied to the congressional calendar. Budget and
            appropriations issues (BUD) spike during the fall, when Congress negotiates spending bills. Tax issues (TAX) surge around
            major tax legislation deadlines and expiration dates. <Link href="/investigations/defense-lobbying-2026" className="text-blue-600 hover:underline">Defense
            spending</Link> lobbying peaks during the National Defense Authorization Act (NDAA) markup cycle, typically in late spring
            and summer. Our <Link href="/investigations/seasonal-lobbying" className="text-blue-600 hover:underline">seasonal lobbying analysis</Link>
            charts these patterns across all 79 issue categories, revealing when different industries concentrate their Washington influence efforts.
          </p>
          <p className="text-gray-600">
            Understanding these cycles is valuable for researchers, journalists, and policymakers tracking corporate influence. A spike in
            healthcare lobbying during a particular quarter may simply reflect the annual Medicare payment rulemaking cycle rather than a
            new policy battle. Conversely, unexpected surges in lobbying on issues like trade (TRD) or computers/technology (CPT) often
            signal emerging legislative threats that haven&apos;t yet made headlines. OpenLobby&apos;s real-time tracking of
            <Link href="/recent" className="text-blue-600 hover:underline">recent filings</Link> helps identify these early signals.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Multi-Issue Strategy</h3>
          <p className="text-gray-600">
            Sophisticated lobbying <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> rarely limit themselves to a single
            issue category. A major pharmaceutical company might simultaneously lobby on healthcare reform (HCR), taxation (TAX), trade (TRD),
            intellectual property (CPT), and science/technology (SCI). This multi-issue approach reflects the interconnected nature of policy: a
            drug pricing bill might involve healthcare regulation, tax incentives for R&amp;D, international trade agreements affecting generic
            imports, and patent law provisions.
          </p>
          <p className="text-gray-600">
            The number of issue categories per filing has increased steadily over the past decade, suggesting that organizations view policy
            battles as increasingly interconnected. In 2018, the average filing listed 2.8 issue codes; by 2026, that figure has risen to 3.4.
            This expansion reflects both growing regulatory complexity and more strategic lobbying approaches that connect multiple policy levers
            to achieve business objectives. The <Link href="/text-analysis" className="text-blue-600 hover:underline">text analysis</Link> of
            lobbying descriptions reveals the specific bills and provisions being targeted within each issue category.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Tracking Issue Trends Over Time</h3>
          <p className="text-gray-600">
            OpenLobby&apos;s <Link href="/trends" className="text-blue-600 hover:underline">trends analysis</Link> tracks how spending on each
            issue category evolves year over year. Some issues show remarkable consistency: healthcare (HCR) and taxation (TAX) have been the top
            two lobbying categories in every year since 2018. Others show dramatic shifts: trade (TRD) lobbying surged during tariff disputes,
            declined during trade stability, and has surged again in 2026. Technology-related categories have shown the strongest growth trajectory,
            rising from middle-of-the-pack to top-five status as <Link href="/investigations/ai-lobbying-boom-2026" className="text-blue-600 hover:underline">AI</Link>,
            <Link href="/investigations/crypto-ai-lobbying-surge" className="text-blue-600 hover:underline">cryptocurrency</Link>, and data privacy
            have become dominant policy concerns.
          </p>
          <p className="text-gray-600">
            The rise and fall of issue categories tells the story of American policy priorities. Energy (FUE, ENV) lobbying reflects the ongoing
            tension between fossil fuel interests and climate policy. Financial services (BNK, FIN) lobbying tracks regulatory cycles from
            Dodd-Frank implementation through fintech disruption. Immigration (IMM) and labor (LBR) lobbying responds to workforce policy debates.
            Each issue page on OpenLobby provides year-by-year spending breakdowns and top client rankings, giving you the data to trace these
            policy narratives through the lens of lobbying expenditures. For the latest quarterly data, see our
            <Link href="/lobbying-statistics-2026" className="text-blue-600 hover:underline">2026 statistics overview</Link>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Under-Lobbied Issues: Policy Gaps and Blind Spots</h3>
          <p className="text-gray-600">
            Not all important policy areas attract proportionate lobbying attention. Issues like consumer protection (CSP), arts and
            humanities (ART), and disaster planning (DIS) receive minimal lobbying spending despite their significance to millions of
            Americans. This spending gap highlights a structural reality of the lobbying system: policy areas with concentrated corporate
            interests attract far more lobbying resources than those with diffuse public benefits. The result is that heavily lobbied issues
            receive disproportionate legislative attention, while under-funded policy areas may languish without sustained advocacy.
          </p>
          <p className="text-gray-600">
            Some advocates argue that this imbalance is precisely what makes lobbying disclosure so important. By making spending data
            transparent, OpenLobby enables citizens, journalists, and policymakers to see which interests are most aggressively pursuing
            their policy goals — and which are not. Understanding the issue landscape is the first step toward ensuring that legislative
            priorities reflect public needs rather than just corporate spending power.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Issue Data Methodology</h3>
          <p className="text-gray-600">
            Issue spending figures on OpenLobby represent the total lobbying expenditures associated with filings that selected each
            issue code. Because a single filing can list multiple issue codes, the same spending amount may be counted under several
            issues. This means that summing all issue-level spending would exceed total lobbying spending — the overlap reflects the
            multi-issue nature of modern lobbying engagements. Each issue page provides the raw filing counts and unique client counts
            alongside spending totals to give a more complete picture.
          </p>
          <p className="text-gray-600">
            All data is sourced from LD-2 quarterly lobbying disclosure filings submitted to the U.S. Senate Office of Public Records.
            OpenLobby processes and indexes these filings to create the searchable, cross-referenced issue database available here.
            For bulk data downloads, visit our <Link href="/downloads" className="text-blue-600 hover:underline">data downloads page</Link>.
            For details on how we process and normalize filing data, see our <Link href="/methodology" className="text-blue-600 hover:underline">methodology
            documentation</Link>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Full Lobbying Ecosystem</h3>
          <p className="text-gray-600">
            Issues are one dimension of OpenLobby&apos;s comprehensive lobbying database. To understand who is driving spending
            in each issue area, explore our <Link href="/clients" className="text-blue-600 hover:underline">clients directory</Link>,
            <Link href="/firms" className="text-blue-600 hover:underline"> firms rankings</Link>, and
            <Link href="/lobbyists" className="text-blue-600 hover:underline"> lobbyist profiles</Link>. For geographic patterns,
            see <Link href="/states" className="text-blue-600 hover:underline">lobbying by state</Link>. For the latest aggregate
            numbers, visit our <Link href="/lobbying-statistics-2026" className="text-blue-600 hover:underline">2026 statistics
            overview</Link> or browse <Link href="/investigations" className="text-blue-600 hover:underline">all investigations</Link>
            for narrative analyses of the trends shaping Washington&apos;s influence industry. Whether you&apos;re
            a journalist investigating corporate influence, a researcher studying policy dynamics, or a citizen wanting
            to understand how lobbying shapes the laws that affect your life, OpenLobby&apos;s issue data provides the
            foundation for informed analysis.
          </p>
        </div>
      </div>
    </div>
  )
}
