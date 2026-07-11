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

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Why Geography Matters in Lobbying</h3>
          <p className="text-gray-600">
            A state&apos;s lobbying footprint is largely determined by the industries headquartered there. <Link href="/states/CA" className="text-blue-600 hover:underline">California</Link>&apos;s
            lobbying spending is dominated by <Link href="/tech-lobbying" className="text-blue-600 hover:underline">technology companies</Link> like Google, Meta, Apple, and the dozens
            of AI startups now lobbying on <Link href="/investigations/ai-lobbying-boom-2026" className="text-blue-600 hover:underline">artificial intelligence regulation</Link>.
            <Link href="/states/CT" className="text-blue-600 hover:underline">Connecticut</Link>&apos;s profile is shaped by insurance and financial services giants.
            <Link href="/states/TX" className="text-blue-600 hover:underline">Texas</Link> reflects the energy industry&apos;s priorities, with oil and gas companies among the state&apos;s
            top lobbying <Link href="/clients" className="text-blue-600 hover:underline">clients</Link>.
          </p>
          <p className="text-gray-600">
            This geographic dimension reveals how federal lobbying amplifies certain regional economic interests over others. States with concentrated
            industry clusters — pharma in New Jersey, defense in Virginia, agriculture in Iowa — produce lobbying spending profiles that mirror their
            economic DNA. States with more diversified economies show more balanced lobbying portfolios across <Link href="/issues" className="text-blue-600 hover:underline">issue
            areas</Link>, but generally at lower overall spending levels.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The DC Anomaly: $27,105 Per Capita</h3>
          <p className="text-gray-600">
            Washington DC&apos;s per-capita lobbying spending of <strong>$27,105</strong> is an outlier by any measure — 89 times the national average.
            This figure reflects the concentration of trade associations, advocacy organizations, and lobbying-focused entities headquartered in the
            District precisely because of their proximity to Congress and federal agencies. Organizations like the U.S. Chamber of Commerce, the National
            Association of Realtors, PhRMA, and hundreds of industry trade groups list DC addresses on their filings, even though their members are
            nationwide. For a deeper exploration of this phenomenon, see our <Link href="/investigations/dc-lobbying-capital" className="text-blue-600 hover:underline">DC
            as the Lobbying Capital</Link> investigation.
          </p>
          <p className="text-gray-600">
            Excluding DC from state rankings reveals more meaningful geographic comparisons. Among actual states, the highest per-capita lobbying
            spending comes from states with large corporate headquarters relative to population size. Delaware, for instance, punches above its
            population weight because many corporations are incorporated there, though their operational headquarters may be elsewhere. Understanding
            these nuances is essential for accurate geographic analysis of lobbying data.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>2026 Geographic Shifts</h3>
          <p className="text-gray-600">
            Several geographic trends are accelerating in 2026. The <Link href="/investigations/tariff-lobbying-2026" className="text-blue-600 hover:underline">tariff
            and trade policy</Link> disruptions have activated lobbying from manufacturing-heavy states in the Midwest and Southeast, where companies directly
            affected by import duties are engaging Washington at unprecedented levels. <Link href="/investigations/crypto-ai-lobbying-surge" className="text-blue-600 hover:underline">Cryptocurrency
            lobbying</Link> has increased the profile of states hosting major crypto exchanges and blockchain companies.
          </p>
          <p className="text-gray-600">
            The <Link href="/investigations/midterm-lobbying-2026" className="text-blue-600 hover:underline">2026 midterm elections</Link> have also shifted
            geographic patterns, as organizations in competitive electoral states increase spending to influence candidates and policy platforms.
            Our <Link href="/geographic" className="text-blue-600 hover:underline">geographic heatmap</Link> visualizes these shifts, showing how lobbying
            spending concentrates in certain states and disperses across others. Combined with <Link href="/lobbying-by-state" className="text-blue-600 hover:underline">state-by-state
            rankings</Link>, this data paints a comprehensive picture of how geography shapes federal influence.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Corporate Relocations and Lobbying Impact</h3>
          <p className="text-gray-600">
            When major corporations relocate their headquarters, the lobbying data follows. Texas gained significant lobbying spending when companies
            like Tesla, Oracle, and Caterpillar moved operations to the state. Florida has seen similar growth driven by financial services and technology
            relocations. These corporate migrations don&apos;t change the actual lobbying activity — companies still hire the same Washington
            <Link href="/firms" className="text-blue-600 hover:underline">firms</Link> and deploy the same <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyists</Link> —
            but they shift the geographic attribution in filing data, making state-level trends a useful proxy for tracking broader economic migration patterns.
          </p>
          <p className="text-gray-600">
            The interplay between state economic policy and federal lobbying creates feedback loops. States that attract corporate headquarters gain both
            tax revenue and increased representation in Washington&apos;s lobbying ecosystem. This dynamic is particularly visible in the competition between
            California and Texas for tech company headquarters, a trend our <Link href="/trends" className="text-blue-600 hover:underline">trends
            analysis</Link> tracks over time.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>State-Specific Issue Profiles</h3>
          <p className="text-gray-600">
            Each state&apos;s lobbying profile reveals distinct policy priorities shaped by its dominant industries. New Jersey&apos;s
            lobbying footprint is heavily weighted toward <Link href="/pharmaceutical-lobbying" className="text-blue-600 hover:underline">pharmaceutical</Link>
            and healthcare issues, reflecting the concentration of major drug companies headquartered in the Garden State. Virginia&apos;s
            profile skews toward <Link href="/defense-lobbying" className="text-blue-600 hover:underline">defense</Link> and government
            contracting, driven by the Pentagon&apos;s proximity and the defense industry corridor in Northern Virginia.
          </p>
          <p className="text-gray-600">
            Michigan&apos;s lobbying priorities center on manufacturing, automotive policy, and trade agreements that affect the state&apos;s
            industrial base. Iowa and Nebraska focus on agricultural policy, farm bill provisions, and biofuel mandates. These state-level
            issue profiles provide a bottom-up view of American policy debates, revealing which economic interests drive political engagement
            in different parts of the country. Click any state in the directory above to see its complete issue breakdown and top lobbying
            <Link href="/clients" className="text-blue-600 hover:underline">clients</Link>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Per-Capita Lobbying: A Fairer Comparison</h3>
          <p className="text-gray-600">
            Raw spending totals can be misleading when comparing states of vastly different populations. Per-capita lobbying spending provides
            a more meaningful comparison by normalizing for population size. After DC&apos;s extreme outlier of $27,105 per capita, the next
            tier typically includes states like Connecticut, Delaware, and New Jersey — states with large corporate and financial sector
            presences relative to their populations. Large states like California, Texas, and New York rank high in absolute spending but
            fall to middle-of-the-pack on a per-capita basis, as their enormous populations dilute the per-person figure.
          </p>
          <p className="text-gray-600">
            Per-capita analysis also reveals surprising patterns. Several smaller states with specialized economic clusters punch well above
            their population weight in lobbying spending. States hosting major pharmaceutical operations, defense contractors, or energy
            producers tend to show elevated per-capita figures, reflecting the outsized political engagement of these high-stakes industries.
            Our <Link href="/geographic" className="text-blue-600 hover:underline">geographic heatmap</Link> visualizes these per-capita
            patterns, making it easy to identify which states are the most politically engaged relative to their size.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Federal vs. State-Level Lobbying</h3>
          <p className="text-gray-600">
            It&apos;s important to note that OpenLobby tracks only <strong>federal</strong> lobbying — organizations lobbying Congress and
            federal agencies. State-level lobbying of state legislatures and governors is tracked separately by each state&apos;s ethics
            commission and is not included in our database. In many states, state-level lobbying spending rivals or exceeds the federal
            lobbying associated with that state, particularly for industries heavily regulated at the state level like insurance, utilities,
            healthcare, and education.
          </p>
          <p className="text-gray-600">
            The relationship between federal and state lobbying is increasingly intertwined. As federal policy on
            <Link href="/investigations/ai-lobbying-boom-2026" className="text-blue-600 hover:underline">AI regulation</Link>, climate policy,
            and healthcare continues to evolve, states are simultaneously passing their own legislation — creating a two-front lobbying
            challenge for affected organizations. Companies with national operations must lobby at both levels, multiplying their government
            affairs costs and complexity. This federalism dynamic shapes not only how much organizations spend but where they allocate their
            <Link href="/lobbyists" className="text-blue-600 hover:underline">lobbyist</Link> resources across jurisdictions.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>How OpenLobby Assigns States to Clients</h3>
          <p className="text-gray-600">
            State attribution in lobbying data is based on the address reported by each client on their LDA filings. Most organizations
            report their principal office or headquarters address, which determines their state classification in our database. For trade
            associations and coalitions, the reported address is typically their Washington DC office or their operational headquarters,
            regardless of where their member organizations are located. This methodology means that DC and states hosting major trade
            association headquarters may show higher spending totals than the economic activity of their resident companies alone would suggest.
          </p>
          <p className="text-gray-600">
            Some organizations file from different addresses in different quarters, particularly during corporate relocations or mergers.
            OpenLobby normalizes these records to the most recently reported address, ensuring that current state assignments reflect the
            organization&apos;s latest filing. For detailed information about our data processing approach, see our
            <Link href="/methodology" className="text-blue-600 hover:underline">methodology page</Link>. For bulk access to state-level
            data, visit our <Link href="/downloads" className="text-blue-600 hover:underline">downloads section</Link> where you can
            retrieve the complete state index used to generate these rankings.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Explore More Lobbying Data</h3>
          <p className="text-gray-600">
            State-level data is one lens into the lobbying ecosystem. For other perspectives, explore lobbying by
            <Link href="/industries" className="text-blue-600 hover:underline"> industry</Link>,
            <Link href="/issues" className="text-blue-600 hover:underline"> issue area</Link>, or
            <Link href="/agencies" className="text-blue-600 hover:underline"> government agency</Link>. Our
            <Link href="/investigations" className="text-blue-600 hover:underline">investigations</Link> provide deep-dive analyses
            of specific lobbying phenomena, from the <Link href="/investigations/midterm-lobbying-2026" className="text-blue-600 hover:underline">2026
            midterm spending surge</Link> to the <Link href="/investigations/ai-lobbying-boom-2026" className="text-blue-600 hover:underline">AI
            lobbying boom</Link>. Use our <Link href="/tools/lobbying-search" className="text-blue-600 hover:underline">search tool</Link>
            to find specific organizations, or browse the <Link href="/lobbying-statistics-2026" className="text-blue-600 hover:underline">2026
            statistics overview</Link> for the latest aggregate data across all states and industries.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Understanding Your State&apos;s Influence</h3>
          <p className="text-gray-600">
            Every state has a unique lobbying profile shaped by its economic base, corporate headquarters, and political priorities.
            Whether you live in a major lobbying state like California or New York, or a smaller state where a single industry
            dominates the lobbying landscape, understanding who is lobbying from your state provides valuable insight into how
            local economic interests translate into federal policy influence. Click any state above to explore its complete
            lobbying profile, including spending trends, top clients, and issue area breakdowns.
          </p>
        </div>
      </div>
    </div>
  )
}
