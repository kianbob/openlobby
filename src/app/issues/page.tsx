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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Dataset","name":"Federal Lobbying Issues Database","description":"79 lobbying issue categories ranked by spending, with industry breakdowns and trend data (2018-2025).","url":"https://www.openlobby.us/issues","license":"https://creativecommons.org/publicdomain/zero/1.0/","creator":{"@type":"Organization","name":"OpenLobby","url":"https://www.openlobby.us"},"temporalCoverage":"2018/2025","variableMeasured":"Federal lobbying spending"}) }} />
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
        </div>
      </div>
    </div>
  )
}
