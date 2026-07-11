import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pharmaceutical Lobbying: Big Pharma Spending Data',
  description: 'How much does Big Pharma spend on lobbying? Detailed data on drug company spending, top pharma lobbyists, and the issues they target in Congress (2018-2026).',
  keywords: ['pharmaceutical lobbying', 'big pharma lobbying', 'drug company lobbying', 'pharma lobbying spending', 'healthcare lobbying'],
  openGraph: {
    title: 'Pharmaceutical Lobbying: By the Numbers',
    description: 'Data-driven analysis of pharmaceutical industry lobbying — who spends, what they lobby on, and how much influence they buy.',
    url: 'https://www.openlobby.us/pharmaceutical-lobbying',
  },
}

export default function PharmaceuticalLobbyingPage() {
  const pharmaCompanies = [
    { name: 'Pharmaceutical Research & Manufacturers of America (PhRMA)', annualSpend: '$27.5M+', focus: 'Drug pricing, patents, FDA regulation' },
    { name: 'Pfizer Inc.', annualSpend: '$11M+', focus: 'Drug pricing, COVID response, patents' },
    { name: 'Johnson & Johnson', annualSpend: '$8M+', focus: 'Medical devices, drug pricing, product liability' },
    { name: 'Amgen Inc.', annualSpend: '$9M+', focus: 'Biologics, biosimilars, drug pricing' },
    { name: 'AbbVie Inc.', annualSpend: '$7M+', focus: 'Drug pricing, patents, Medicare Part D' },
    { name: 'Merck & Co.', annualSpend: '$7M+', focus: 'Vaccines, drug pricing, FDA regulation' },
    { name: 'Bristol-Myers Squibb', annualSpend: '$7M+', focus: 'Drug pricing, oncology, patents' },
    { name: 'Eli Lilly & Co.', annualSpend: '$6M+', focus: 'Insulin pricing, drug costs, patents' },
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Industry Analysis</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          Pharmaceutical Lobbying: By the Numbers
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          The pharmaceutical industry is consistently the largest lobbying force in Washington.
          Here&apos;s what the data reveals about Big Pharma&apos;s influence machine.
        </p>
      </header>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '$4.4B+', label: 'Total Pharma Lobbying (2018-2025)' },
          { value: '#1', label: 'Highest-Spending Industry' },
          { value: '86,000+', label: 'Healthcare-Related Filings' },
          { value: '7,329', label: 'Healthcare Clients' },
        ].map(s => (
          <div key={s.label} className="bg-blue-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-blue-700" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
            <div className="text-xs text-gray-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Why Pharma Spends More Than Anyone
        </h2>
        <p>
          Healthcare regulation directly impacts pharmaceutical company revenues in ways few other industries experience.
          Drug pricing legislation, FDA approval processes, Medicare/Medicaid reimbursement rates, patent protections,
          and import regulations all have multi-billion-dollar implications for drug makers.
        </p>
        <p>
          The Pharmaceutical Research & Manufacturers of America (PhRMA), the industry&apos;s main trade association,
          alone spends over $27 million annually on lobbying — making it one of the single biggest lobbying entities
          in the entire country. But PhRMA is just the tip of the iceberg.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Top Pharmaceutical Lobbying Spenders
        </h2>
      </div>

      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold">Organization</th>
              <th className="text-right py-3 px-4 font-bold">Annual Spend</th>
              <th className="text-left py-3 px-4 font-bold">Key Focus Areas</th>
            </tr>
          </thead>
          <tbody>
            {pharmaCompanies.map((c) => (
              <tr key={c.name} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{c.name}</td>
                <td className="py-3 px-4 text-right font-bold text-blue-700">{c.annualSpend}</td>
                <td className="py-3 px-4 text-gray-600">{c.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          What Pharma Lobbies On
        </h2>
        <p>
          Using the LDA issue code system, pharmaceutical lobbying filings primarily fall under:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>PHA (Pharmacy):</strong> Drug pricing, prescription costs, pharmacy benefit managers (PBMs)</li>
          <li><strong>HCR (Healthcare):</strong> Medicare, Medicaid, ACA provisions, insurance coverage requirements</li>
          <li><strong>BUD (Budget/Appropriations):</strong> NIH funding, FDA budget, research grants</li>
          <li><strong>MED (Medical Research):</strong> Clinical trials, rare diseases, research funding</li>
          <li><strong>TRD (Trade):</strong> Drug importation, international trade agreements, IP protections</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          The Drug Pricing Battle
        </h2>
        <p>
          The single biggest lobbying issue for pharmaceutical companies has been drug pricing reform.
          When Congress considers legislation to allow Medicare to negotiate drug prices, cap insulin costs,
          or enable drug importation from Canada, pharmaceutical lobbying spending surges dramatically.
        </p>
        <p>
          The Inflation Reduction Act of 2022, which allowed Medicare to negotiate prices on some drugs for the first time,
          triggered one of the most intense lobbying campaigns in recent history. Our data shows significant spending spikes
          in the quarters surrounding the bill&apos;s passage.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Pharma&apos;s Revolving Door
        </h2>
        <p>
          The pharmaceutical industry is one of the heaviest users of the revolving door. Former FDA officials,
          HHS staffers, and congressional health committee aides frequently move to lobbying roles at drug companies
          and trade associations. Our data tracks these movements across the industry — see the{' '}
          <Link href="/revolving-door" className="text-indigo-600 hover:text-indigo-800 font-semibold">full revolving door analysis</Link>.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Explore the Data Yourself
        </h2>
        <p>
          All of the data behind this analysis is available on OpenLobby. Search for any pharmaceutical company,
          view their lobbying filings quarter by quarter, see which lobbyists work for them, and track their spending over time.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        <Link href="/issues/PHA" className="block p-5 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition-colors">
          <div className="font-bold text-blue-700" style={{ fontFamily: 'var(--font-serif)' }}>Pharmacy Issue</div>
          <p className="text-sm text-gray-600 mt-1">All PHA-coded filings</p>
        </Link>
        <Link href="/issues/HCR" className="block p-5 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition-colors">
          <div className="font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>Healthcare Issue</div>
          <p className="text-sm text-gray-600 mt-1">All HCR-coded filings</p>
        </Link>
        <Link href="/investigations/big-pharma-lobbying" className="block p-5 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors">
          <div className="font-bold text-amber-700" style={{ fontFamily: 'var(--font-serif)' }}>Full Investigation</div>
          <p className="text-sm text-gray-600 mt-1">Big Pharma deep-dive</p>
        </Link>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Insulin Lobbying Battle</h2>
        <p>Few issues illustrate pharmaceutical lobbying dynamics better than insulin pricing. The three companies that control the U.S. insulin market — Eli Lilly, Novo Nordisk, and Sanofi — spent millions lobbying as Congress considered insulin price caps. Their arguments centered on the complexity of drug pricing, the role of PBMs in inflating list prices, and the risk that price caps would reduce innovation.</p>
        <p>Patient advocacy groups pushed back with their own lobbying campaigns, funded by concerned citizens and healthcare organizations. The result was a compromise: insulin copay caps for Medicare beneficiaries, but no broader price controls. Both sides claimed victory, and lobbying continues on implementation details.</p>
        <p>This pattern repeats across pharmaceutical policy: intense lobbying from both industry and patient advocates, with outcomes often reflecting the side with greater resources and insider access. Our data shows that pharmaceutical companies and their trade associations consistently outspend patient advocacy groups by ratios of 100:1 or more.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>FDA Approval and Regulatory Lobbying</h2>
        <p>Beyond drug pricing, pharmaceutical lobbying heavily focuses on FDA regulation. Companies lobby on approval timelines, clinical trial requirements, post-market surveillance, and drug classification decisions. Faster approvals mean earlier revenue; more flexible trial requirements mean lower development costs; and favorable classifications (prescription vs. over-the-counter, controlled vs. non-controlled) have enormous market implications.</p>
        <p>PhRMA and individual companies maintain continuous engagement with the FDA and Congress on regulatory issues, arguing that overly strict requirements stifle innovation while critics counter that weakened standards compromise patient safety. Track FDA-related lobbying through the MED (Medical Research) and PHA (Pharmacy) issue codes in our <Link href="/issues" className="text-indigo-600 hover:text-indigo-800 font-semibold">issue explorer</Link>.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Pharmacy Benefit Managers (PBMs): The Hidden Lobbying War</h2>
        <p>One of the most intense lobbying battles in healthcare involves Pharmacy Benefit Managers — the middlemen that negotiate drug prices between manufacturers, insurers, and pharmacies. The three largest PBMs (CVS Caremark, Express Scripts/Cigna, and OptumRx/UnitedHealth) control over 80% of the market and spend millions lobbying to protect their business model.</p>
        <p>Drug manufacturers lobby to rein in PBM power, arguing that PBMs pocket rebates that should flow to patients. PBMs counter that they negotiate lower prices. Congress has considered bipartisan PBM reform legislation, driving lobbying from both sides. This fight plays out primarily under the PHA (Pharmacy) and HCR (Healthcare) issue codes in our data.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Biosimilars and Patent Thickets</h2>
        <p>A growing share of pharmaceutical lobbying focuses on the biological drug market. Brand-name biologic manufacturers lobby to extend patent protections through &quot;patent thickets&quot; — clusters of dozens of patents around a single drug that delay biosimilar competition. Biosimilar manufacturers lobby for faster FDA approval pathways and against patent gaming strategies.</p>
        <p>With blockbuster biologics like Humira ($21B+ in annual sales at peak) facing biosimilar competition, the financial stakes are enormous. AbbVie alone has spent millions lobbying to protect its Humira patent portfolio, making it one of the most visible examples of patent-focused lobbying.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The 2026 Pharmaceutical Lobbying Outlook</h2>
        <p>The pharmaceutical lobbying landscape in 2026 is dominated by several key battles: implementation of the Inflation Reduction Act&apos;s drug pricing provisions, potential expansion of Medicare price negotiations to more drugs, proposed legislation on PBM transparency, and ongoing debates about FDA approval standards for AI-assisted drug development.</p>
        <p>With mid-term elections approaching, pharmaceutical lobbying is expected to intensify as companies seek to shape the next Congress&apos;s healthcare agenda. Track real-time shifts on our <Link href="/momentum" className="text-indigo-600 hover:text-indigo-800 font-semibold">momentum page</Link>.</p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How much does the pharmaceutical industry spend on lobbying?", acceptedAnswer: { "@type": "Answer", text: "The pharmaceutical and healthcare industry has spent $4.4B+ on lobbying since 2018, making it the single largest lobbying sector. PhRMA alone spends $27.5M+ annually, and individual companies like Pfizer, Amgen, and AbbVie each spend $7-11M+ per year." } },
          { "@type": "Question", name: "What do pharmaceutical companies lobby for?", acceptedAnswer: { "@type": "Answer", text: "Pharma companies primarily lobby on drug pricing legislation, FDA regulation, patent protection, Medicare/Medicaid reimbursement rates, drug importation rules, and PBM (Pharmacy Benefit Manager) reform. These issues have multi-billion-dollar implications for drug company revenues." } },
          { "@type": "Question", name: "Why is pharma the biggest lobbying industry?", acceptedAnswer: { "@type": "Answer", text: "Healthcare regulation directly impacts pharmaceutical revenues in ways few other industries experience. Drug pricing, FDA approvals, patent protections, Medicare reimbursement rates, and import regulations all have immediate multi-billion-dollar financial consequences." } },
          { "@type": "Question", name: "Did the Inflation Reduction Act affect pharma lobbying?", acceptedAnswer: { "@type": "Answer", text: "Yes. The IRA's drug pricing provisions, including Medicare price negotiations, triggered one of the most intense pharmaceutical lobbying campaigns in recent history. Spending spiked in quarters surrounding the bill's passage, and pharma continues to lobby on implementation details." } },
        ]
      }) }} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Dive Deeper</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/investigations/healthcare-3-billion-bet" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏥 Healthcare&apos;s $3B Bet</div>
            <div className="text-xs text-gray-500 mt-1">The healthcare industry&apos;s massive investment</div>
          </Link>
          <Link href="/investigations/lobbying-vs-contracts" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Lobbying vs. Contracts</div>
            <div className="text-xs text-gray-500 mt-1">Does lobbying translate to government contracts?</div>
          </Link>
          <Link href="/momentum" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚀 Spending Momentum</div>
            <div className="text-xs text-gray-500 mt-1">Is pharma lobbying surging or declining?</div>
          </Link>
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
            <div className="text-xs text-gray-500 mt-1">Compare pharma to other industries</div>
          </Link>
          <Link href="/industries" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🏭 All Industries</div>
            <div className="text-xs text-gray-500 mt-1">Cross-industry comparison</div>
          </Link>
          <Link href="/how-lobbying-works" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📖 How Lobbying Works</div>
            <div className="text-xs text-gray-500 mt-1">The complete guide</div>
          </Link>
        </div>
      </div>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Drug Pricing: The 2026 Lobbying Battlefield</h2>
        <div className="prose prose-lg max-w-none">
          <p>The implementation of Medicare drug price negotiation under the Inflation Reduction Act has triggered an unprecedented lobbying response from the pharmaceutical industry. PhRMA, the industry&apos;s main trade association, has deployed record resources to shape how the negotiation process unfolds, which drugs are selected, and what &quot;fair price&quot; means in practice.</p>
          <p>Individual drug makers are simultaneously lobbying on multiple fronts: challenging the constitutionality of price negotiation in courts, pushing for legislative modifications to narrow the program&apos;s scope, and engaging directly with CMS on implementation details. This multi-front strategy represents one of the most sophisticated lobbying campaigns in recent history.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Pharma Lobbying Machine</h2>
        <div className="prose prose-lg max-w-none">
          <p>Pharmaceutical lobbying is distinguished by its sheer scale and sophistication. The industry maintains the largest lobbying workforce of any sector, with over 1,800 registered lobbyists — more than three lobbyists for every member of Congress. Major companies like Pfizer, Johnson &amp; Johnson, and AbbVie each maintain in-house government affairs teams of 20-30 people, supplemented by dozens of outside lobbying firms.</p>
          <p>The revolving door is particularly active in pharma lobbying. Former FDA officials, CMS administrators, and health committee staffers command premium fees for their expertise in navigating the regulatory landscape. See our <Link href="/investigations/revolving-door-exposed" className="text-indigo-600 hover:underline">revolving door investigation</Link> for specific examples.</p>
          <p>Compare pharmaceutical spending to other industries on our <Link href="/tools/industry-compare" className="text-indigo-600 hover:underline">industry comparison tool</Link>, or explore the <Link href="/trends" className="text-indigo-600 hover:underline">historical spending trends</Link> to see how pharma lobbying has evolved over time.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How much does the pharmaceutical industry spend on lobbying?", acceptedAnswer: { "@type": "Answer", text: "The pharmaceutical and health products industry spends over $700 million annually on federal lobbying, making it the highest-spending sector. PhRMA alone spends $30+ million per year, and individual companies like Pfizer and AbbVie each spend $10-15 million." } },
          { "@type": "Question", name: "Why does pharma lobby so much?", acceptedAnswer: { "@type": "Answer", text: "Pharmaceutical companies face extensive government regulation (FDA approvals, Medicare/Medicaid pricing, patent law) and depend heavily on government healthcare spending. With hundreds of billions in revenue at stake, even small regulatory changes can have massive financial impacts, making lobbying a high-ROI investment." } },
          { "@type": "Question", name: "What are the biggest pharma lobbying issues in 2026?", acceptedAnswer: { "@type": "Answer", text: "Medicare drug price negotiation implementation, PBM reform, biosimilar competition, FDA approval pathways for AI-driven drug discovery, and potential changes to the Orphan Drug Act are the top pharmaceutical lobbying priorities in 2026." } },
        ]
      }) }} />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>PBM Reform: The Hidden Pharma Battle</h2>
        <div className="prose prose-lg max-w-none">
          <p>Pharmacy Benefit Managers (PBMs) are intermediaries that negotiate drug prices between manufacturers and insurers. The three largest PBMs — CVS Caremark, Express Scripts, and OptumRx — control over 80% of the market. Both pharmaceutical companies and independent pharmacies are lobbying for PBM reform, but from different angles: drug makers want more transparency in rebate negotiations, while pharmacies want protection from PBM-driven reimbursement cuts.</p>
          <p>PBM reform legislation has bipartisan support in Congress, making it one of the most likely healthcare bills to advance in 2026. Track the spending dynamics on our <Link href="/momentum" className="text-indigo-600 hover:underline">momentum tracker</Link> or explore the broader healthcare landscape on our <Link href="/issues/HCR" className="text-indigo-600 hover:underline">healthcare issues page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Biosimilars and Patent Lobbying</h2>
        <div className="prose prose-lg max-w-none">
          <p>As blockbuster biologic drugs face patent expiration, a fierce lobbying battle has erupted between brand-name manufacturers and biosimilar competitors. Brand-name companies lobby to extend patent protections and create regulatory barriers to biosimilar entry, while generic and biosimilar firms push for streamlined approval pathways. This battle has significant implications for drug costs, with biosimilars typically priced 15-40% below their branded counterparts.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Pharma Lobbying Data</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">🔍 Search Pharma Filings</Link>
          <Link href="/downloads" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📥 Download Datasets</Link>
          <Link href="/investigations/lobbying-statistics" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📊 Full Statistics</Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Key Pharmaceutical Lobbying Metrics</h2>
        <div className="prose prose-lg max-w-none">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>$700M+</strong> annual pharmaceutical lobbying spending</li>
            <li><strong>1,800+</strong> registered pharma lobbyists (3 per member of Congress)</li>
            <li><strong>$30M+</strong> PhRMA trade association annual lobbying budget</li>
            <li><strong>Top individual spenders:</strong> Pfizer, AbbVie, Johnson &amp; Johnson, Merck, Amgen</li>
            <li><strong>Key issues:</strong> Drug pricing, PBM reform, FDA policy, patent law, biosimilars</li>
          </ul>
          <p>Updated quarterly from Senate LDA filings. See our <Link href="/methodology" className="text-indigo-600 hover:underline">methodology</Link> for details on data processing.</p>
        </div>
      </section>
    {/* Data Notes */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Notes &amp; Methodology</h2>
        <p className="text-gray-600 mb-3">
          All data on this page is sourced from Senate Office of Public Records lobbying disclosure filings
          under the Lobbying Disclosure Act of 1995. Figures reflect reported spending as filed and may be
          subject to amendment. Quarterly totals are annualized where noted.
        </p>
        <p className="text-gray-600 mb-3">
          Industry classifications follow the Center for Responsive Politics methodology. Where companies
          operate across multiple sectors, spending is attributed to the primary business classification.
          Foreign entity designations follow FARA and LDA Section 4 definitions.
        </p>
        <p className="text-gray-600 mb-3">
          Year-over-year comparisons use inflation-adjusted figures (2026 dollars) unless otherwise noted.
          Historical data extends back to 1998 when electronic filing became mandatory.
        </p>
        <p className="text-gray-600">
          For questions about our data or methodology, see our{' '}
          <a href="/methodology" className="text-blue-600 hover:underline">full methodology page</a> or{' '}
          <a href="/about" className="text-blue-600 hover:underline">contact us</a>.
        </p>
      </div>
    </article>
  )
}
