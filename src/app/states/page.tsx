import { Metadata } from 'next'
import Link from 'next/link'
import StatesPageClient from './StatesPageClient'

export const metadata: Metadata = {
  title: 'Lobbying by State: All 50 States Ranked (2018-2026)',
  description: 'How much lobbying comes from your state? DC leads at $27,105 per capita — 89x the national average. All 50 states ranked by total spend and clients.',
}

export default function StatesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which state spends the most on lobbying?","acceptedAnswer":{"@type":"Answer","text":"Washington DC leads all jurisdictions in lobbying spending at $27,105 per capita — 89x the national average. Among states, New York, California, and Texas have the highest total lobbying expenditures."}},{"@type":"Question","name":"How much does lobbying cost per capita by state?","acceptedAnswer":{"@type":"Answer","text":"Lobbying spending per capita varies dramatically. DC leads at $27,105 per capita. Most states fall between $10-$100 per capita, with variation driven by the concentration of corporate headquarters and trade associations."}},{"@type":"Question","name":"Can I look up lobbying spending for my state?","acceptedAnswer":{"@type":"Answer","text":"Yes. OpenLobby provides lobbying data for all 50 states plus DC. Click any state to see total spending, top clients, per capita figures, and trends from 2018-2026."}}]}) }} />
      <StatesPageClient />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by State</h2>
          <p className="text-gray-600">
            Lobbying clients must disclose their headquarters state on every filing. This data reveals striking geographic patterns: 
            <strong>Washington DC</strong> leads with $27,105 in lobbying spending per capita — 89 times the national average — 
            because many trade associations and lobbying-focused organizations are headquartered there.
          </p>
          <p className="text-gray-600">
            Among actual states, <strong>New York</strong>, <strong>Texas</strong>, and <strong>California</strong> lead in total spending, 
            while <strong>Connecticut</strong> and <strong>New Jersey</strong> punch above their weight on a per-capita basis due to 
            pharmaceutical and financial services companies headquartered there.
          </p>
          <p className="text-gray-600">
            Click any state to see its top lobbying clients, issue breakdown, spending trends, and per-capita analysis.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Washington DC: The Lobbying Capital</h3>
          <p className="text-gray-600">
            <Link href="/states/DC" className="text-blue-600 hover:underline">Washington, DC</Link> is in a class by 
            itself when it comes to lobbying. With <strong>$27,105 in lobbying spending per capita</strong>, the District 
            outspends every state by an enormous margin. This extraordinary figure reflects the concentration of trade 
            associations, advocacy organizations, and corporate government affairs offices that choose to headquarter 
            in the nation&apos;s capital for proximity to Congress and federal agencies. Organizations like the U.S. Chamber 
            of Commerce, the National Association of Realtors, the American Hospital Association, and hundreds of other 
            major <Link href="/clients" className="text-blue-600 hover:underline">lobbying clients</Link> list DC addresses 
            on their filings. Of the <strong>37,994 clients</strong> in our database, approximately 6,200 are 
            headquartered in DC, accounting for roughly <strong>$18.9 billion</strong> of the $37.7 billion in total 
            lobbying spending since 2018 — a remarkable 50% share from a jurisdiction with fewer than 700,000 residents.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Top States by Total Lobbying Spending</h3>
          <p className="text-gray-600">
            After DC, the states with the highest total lobbying expenditures are driven by their concentrations of 
            major corporate headquarters. <Link href="/states/NY" className="text-blue-600 hover:underline">New York</Link> ranks 
            first among states with over <strong>$3.2 billion</strong> in cumulative spending since 2018, fueled by 
            Wall Street financial institutions, major pharmaceutical companies, and media conglomerates. 
            <Link href="/states/CA" className="text-blue-600 hover:underline">California</Link> follows at approximately 
            <strong>$2.4 billion</strong>, driven by Silicon Valley tech giants (Google, Apple, Meta, Intel), Hollywood 
            entertainment companies, and the state&apos;s massive agricultural sector. 
            <Link href="/states/TX" className="text-blue-600 hover:underline">Texas</Link> ranks third at <strong>$1.8 
            billion</strong>, dominated by energy companies (ExxonMobil, ConocoPhillips, Valero), defense contractors, 
            and an increasingly prominent technology sector. 
            <Link href="/states/IL" className="text-blue-600 hover:underline">Illinois</Link> and 
            <Link href="/states/PA" className="text-blue-600 hover:underline">Pennsylvania</Link> round out the top five, 
            with major insurance companies, pharmaceutical manufacturers, and diversified industrial conglomerates 
            driving their totals.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Per-Capita Analysis: Which States Punch Above Their Weight?</h3>
          <p className="text-gray-600">
            Per-capita lobbying spending reveals a different picture than raw totals. After DC&apos;s extreme outlier status, 
            <Link href="/states/CT" className="text-blue-600 hover:underline">Connecticut</Link> stands out with 
            approximately <strong>$430 per capita</strong> in lobbying spending since 2018, driven by the concentration 
            of insurance giants (Cigna, Aetna/CVS Health, Hartford Financial) and hedge funds in the state. 
            <Link href="/states/NJ" className="text-blue-600 hover:underline">New Jersey</Link> ranks similarly high 
            at <strong>$380 per capita</strong>, reflecting its role as a pharmaceutical corridor — Johnson &amp; Johnson, 
            Merck, Bristol-Myers Squibb, and Becton Dickinson are all headquartered there. 
            <Link href="/states/DE" className="text-blue-600 hover:underline">Delaware</Link> also shows elevated 
            per-capita figures thanks to its status as the incorporation state for many Fortune 500 companies, though 
            not all of these companies list Delaware as their lobbying address. Meanwhile, large-population states like 
            <Link href="/states/CA" className="text-blue-600 hover:underline">California</Link> and 
            <Link href="/states/TX" className="text-blue-600 hover:underline">Texas</Link>, despite their massive total 
            spending, rank in the middle of the pack on a per-capita basis because their populations dilute the 
            per-resident figures.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The Corporate Headquarters Effect</h3>
          <p className="text-gray-600">
            A state&apos;s lobbying footprint is largely determined by which companies and organizations choose to 
            headquarter there. This creates a <strong>"corporate headquarters effect"</strong> where a single major 
            company relocating can measurably shift a state&apos;s lobbying profile. When Boeing moved its headquarters 
            from Chicago to Arlington, Virginia in 2022, it shifted roughly $15 million per year in lobbying spending 
            from <Link href="/states/IL" className="text-blue-600 hover:underline">Illinois</Link> to 
            <Link href="/states/VA" className="text-blue-600 hover:underline">Virginia</Link> in our data. Similarly, 
            the wave of corporate relocations to <Link href="/states/TX" className="text-blue-600 hover:underline">Texas</Link> and 
            <Link href="/states/FL" className="text-blue-600 hover:underline">Florida</Link> in recent years has 
            gradually increased those states&apos; shares of total lobbying spending. Trade associations are particularly 
            influential in state-level data because they tend to concentrate in DC, inflating the District&apos;s numbers 
            while potentially understating the lobbying activity of the industries and member companies located in 
            other states.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>State-Level Industry Concentrations</h3>
          <p className="text-gray-600">
            Each state&apos;s lobbying profile reflects its dominant industries. 
            <Link href="/states/TX" className="text-blue-600 hover:underline">Texas</Link> lobbying is dominated by 
            <Link href="/issues/ENG" className="text-blue-600 hover:underline">energy</Link> and 
            <Link href="/issues/DEF" className="text-blue-600 hover:underline">defense</Link>; 
            <Link href="/states/CA" className="text-blue-600 hover:underline">California</Link> by 
            <Link href="/issues/CPT" className="text-blue-600 hover:underline">technology</Link> and entertainment; 
            <Link href="/states/NY" className="text-blue-600 hover:underline">New York</Link> by 
            <Link href="/issues/FIN" className="text-blue-600 hover:underline">financial services</Link> and media; 
            <Link href="/states/MI" className="text-blue-600 hover:underline">Michigan</Link> by automotive manufacturing; 
            <Link href="/states/WA" className="text-blue-600 hover:underline">Washington State</Link> by technology 
            (Microsoft, Amazon) and aerospace (Boeing&apos;s manufacturing operations); and 
            <Link href="/states/NJ" className="text-blue-600 hover:underline">New Jersey</Link> by 
            <Link href="/issues/HCR" className="text-blue-600 hover:underline">pharmaceuticals</Link>. These industry 
            concentrations mean that a single regulatory decision — like drug pricing legislation or energy permitting 
            reform — can disproportionately affect lobbying patterns from specific states. You can explore each 
            state&apos;s issue breakdown on its individual page to see exactly which policy areas drive its lobbying activity.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Geographic Trends: 2018–2026</h3>
          <p className="text-gray-600">
            Several geographic trends have emerged in lobbying data over the past eight years. The share of total 
            lobbying spending from <Link href="/states/CA" className="text-blue-600 hover:underline">California</Link> has 
            grown by approximately <strong>2.5 percentage points</strong> since 2018, reflecting the tech industry&apos;s 
            increasing engagement with federal policy on AI, data privacy, antitrust, and content moderation. 
            <Link href="/states/TX" className="text-blue-600 hover:underline">Texas</Link>&apos;s share has similarly grown, 
            driven by corporate relocations and the energy transition debate. Meanwhile, 
            <Link href="/states/DC" className="text-blue-600 hover:underline">DC</Link>&apos;s share has slightly declined as 
            more organizations adopt hybrid models with smaller Washington offices. The Sunbelt states broadly have 
            gained lobbying share at the expense of the traditional Northeastern corridor, mirroring broader economic 
            and demographic shifts. These trends are visible in the spending charts on each state&apos;s individual page.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>How to Use the States Directory</h3>
          <p className="text-gray-600">
            Click any state on the list above to see a comprehensive breakdown of its lobbying activity. Each state 
            page includes total spending, per-capita figures, top <Link href="/clients" className="text-blue-600 hover:underline">clients</Link> headquartered 
            there, <Link href="/issues" className="text-blue-600 hover:underline">issue area</Link> breakdown, spending 
            trends over time, and rankings among all states. You can compare states to understand how economic geography 
            shapes political influence. The data here represents only federal lobbying — state-level lobbying of state 
            legislatures is tracked separately by state ethics commissions and is not included in these figures. For 
            a complete picture of how lobbying works at the federal level, explore our 
            <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyist directory</Link>, 
            <Link href="/firms" className="text-blue-600 hover:underline">firm rankings</Link>, and 
            <Link href="/clients" className="text-blue-600 hover:underline">client spending database</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
