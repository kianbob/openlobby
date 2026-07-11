import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from "@/components/SourceCitation"
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'What Is Lobbying? The $37.7 Billion Industry Explained (2025 Guide)',
  description: 'Lobbying is a $37.7B industry with 23,545 registered lobbyists. How it works, who does it, and why it matters — the definitive guide to Washington\'s influence machine.',
}

export default function WhatIsLobbyingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "What Is Lobbying? A Complete Guide", author: { "@type": "Organization", name: "OpenLobby", url: "https://www.openlobby.us" }, publisher: { "@type": "Organization", name: "OpenLobby" }, datePublished: "2026-02-24", description: "What is lobbying, how does it work, and why does it matter? A comprehensive guide to federal lobbying and how money influences Washington.", mainEntityOfPage: "https://www.openlobby.us/investigations/what-is-lobbying" }) }} />
      <Breadcrumbs items={[{ name: 'Investigations', href: '/investigations' }, { name: 'What Is Lobbying?' }]} />
      
      <article className="prose prose-lg max-w-none">
        <h1 style={{ fontFamily: 'var(--font-serif)' }}>What Is Lobbying? A Complete Guide to How Money Influences Washington</h1>
        <p className="text-gray-500 text-sm">Updated February 2026 · 8 min read · OpenLobby Explainer</p>
        <ShareButtons url="https://www.openlobby.us/investigations/what-is-lobbying" title="What Is Lobbying? A Complete Guide" />

        <p className="text-xl text-gray-700 mt-6">In 2025, organizations spent <strong>$6.0 billion</strong> lobbying the federal government — more than ever before. But what exactly is lobbying, who does it, and how does it shape the laws that affect your life?</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Basics: What Is Lobbying?</h2>
        <p>Lobbying is the act of attempting to influence government decisions — legislation, regulation, or policy — on behalf of an organization, industry, or cause. It&apos;s protected by the First Amendment&apos;s right to &quot;petition the Government for a redress of grievances.&quot;</p>
        <p>In practice, lobbying means hiring people — often former government officials — to meet with members of Congress, their staff, and executive branch officials to advocate for specific policy positions.</p>
        <p>Lobbying is legal. But the scale of money involved raises serious questions about whose voices are heard in Washington.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>How Does Federal Lobbying Work?</h2>
        <h3>Step 1: A Client Wants Something</h3>
        <p>A company, trade association, nonprofit, or even a foreign government wants to influence federal policy. Maybe a pharmaceutical company wants to block drug pricing legislation. Maybe a tech company wants to shape AI regulation. Maybe a defense contractor wants a bigger procurement contract.</p>

        <h3>Step 2: They Hire Lobbyists</h3>
        <p>The client either uses in-house lobbyists (employees who lobby as part of their job) or hires an outside lobbying firm. The top lobbying firms — like <Link href="/firms" className="text-indigo-600 hover:underline">Brownstein Hyatt, Akin Gump, and BGR Group</Link> — represent dozens or hundreds of clients simultaneously.</p>

        <h3>Step 3: Lobbyists Meet with Officials</h3>
        <p>Lobbyists schedule meetings with members of Congress, congressional staff, and executive branch officials. They present arguments, data, and talking points in favor of their client&apos;s position. They attend hearings, draft proposed language for bills, and build relationships.</p>

        <h3>Step 4: They File Disclosure Reports</h3>
        <p>Under the <strong>Lobbying Disclosure Act (LDA)</strong>, any individual or organization spending more than $14,000 per quarter on lobbying must register with the Senate and file quarterly reports disclosing how much they spent, what issues they lobbied on, and which lobbyists were involved.</p>
        <p>These filings are public record — and they&apos;re what powers this entire site. We&apos;ve analyzed <strong>726,000+ filings</strong> from 2018 through 2025.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>Who Lobbies?</h2>
        <p>Almost every major industry lobbies Congress. The biggest spenders include:</p>
        <ul>
          <li><strong>Pharmaceutical companies</strong> — Fighting drug pricing regulation (<Link href="/investigations/big-pharma-lobbying" className="text-indigo-600 hover:underline">see our investigation</Link>)</li>
          <li><strong>Tech giants</strong> — Shaping AI, privacy, and antitrust policy (<Link href="/investigations/tech-lobbying-war" className="text-indigo-600 hover:underline">see our investigation</Link>)</li>
          <li><strong>Defense contractors</strong> — Securing military contracts and procurement</li>
          <li><strong>Financial institutions</strong> — Banking regulation, cryptocurrency policy</li>
          <li><strong>Trade associations</strong> — Groups like the <Link href="/clients/u-s-chamber-of-commerce-fka-u-s-chamber-of-commerce-institute-for-legal-reform" className="text-indigo-600 hover:underline">U.S. Chamber of Commerce</Link>, <Link href="/clients/pharmaceutical-research-and-manufacturers-of-america-phrma" className="text-indigo-600 hover:underline">PhRMA</Link>, and the American Medical Association</li>
          <li><strong>Foreign governments</strong> — Yes, foreign countries lobby Congress too (<Link href="/investigations/foreign-influence" className="text-indigo-600 hover:underline">see our investigation</Link>)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Revolving Door</h2>
        <p>One of the most controversial aspects of lobbying is the &quot;revolving door&quot; — the flow of people between government positions and lobbying jobs. A congressional staffer who spent years working on healthcare policy leaves government and immediately becomes a lobbyist for a pharmaceutical company. They already know the officials, the process, and the policy details.</p>
        <p>Our data identifies <strong>5,000 lobbyists with prior government positions</strong>, including former members of Congress, White House staff, agency officials, and military officers. Some are lobbying the very agencies they used to run.</p>
        <p><Link href="/revolving-door" className="text-indigo-600 hover:underline">Explore the revolving door data →</Link></p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>Does Lobbying Actually Work?</h2>
        <p>Academic research suggests the return on lobbying is enormous. Studies have estimated that companies earn anywhere from <strong>$6 to $220 for every $1 spent on lobbying</strong>, depending on the industry and the policy at stake.</p>
        <p>Our own analysis of lobbying spend vs. government contracts received shows staggering returns for some companies — lobbyists spending millions and receiving billions in federal contracts. <Link href="/investigations/follow-the-money" className="text-indigo-600 hover:underline">See our Follow the Money investigation →</Link></p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>What&apos;s the Lobbying Disclosure Act?</h2>
        <p>The <strong>Lobbying Disclosure Act of 1995</strong> (amended by the Honest Leadership and Open Government Act of 2007) is the federal law that requires lobbying disclosure. Key provisions:</p>
        <ul>
          <li><strong>Registration threshold:</strong> Must register if lobbying income exceeds $3,000/quarter (firms) or expenses exceed $14,000/quarter (in-house)</li>
          <li><strong>Quarterly reports:</strong> Filed with the Secretary of the Senate and Clerk of the House</li>
          <li><strong>Disclosure requirements:</strong> Income/expenses, issue areas, specific bills, lobbyist names, covered government positions, foreign entity involvement</li>
          <li><strong>Cooling-off period:</strong> Former senior officials must wait 1-2 years before lobbying their former agency (though enforcement is limited)</li>
          <li><strong>Penalties:</strong> Up to $200,000 in civil fines for violations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>The Problem with Lobbying</h2>
        <p>Lobbying itself isn&apos;t inherently bad — it&apos;s how organizations communicate with their representatives. The problem is one of scale and access. When a pharmaceutical company can spend $17 million a year on lobbying while individual citizens can spend nothing, the playing field isn&apos;t level.</p>
        <p>The revolving door amplifies this: former officials bring insider knowledge and personal relationships that money alone can&apos;t buy. Foreign governments gain influence that ordinary citizens of other countries could never achieve.</p>
        <p>That&apos;s why transparency matters. And that&apos;s why we built OpenLobby — to make this data accessible to everyone, not just the insiders.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: 'var(--font-serif)'  }}>79 Issue Categories</h2>
        <p>The LDA classifies lobbying into 79 issue categories, from <Link href="/issues/HCR" className="text-indigo-600 hover:underline">healthcare (HCR)</Link> to <Link href="/issues/DEF" className="text-indigo-600 hover:underline">defense (DEF)</Link> to telecommunications (TEC). Each filing can list multiple issue codes, giving us a detailed picture of what&apos;s being lobbied on.</p>
        <p><Link href="/issues" className="text-indigo-600 hover:underline">Explore all 79 issue categories →</Link></p>

        <div className="mt-8 p-6 bg-indigo-50 rounded-xl not-prose">
          <h3 className="font-bold text-indigo-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Start Exploring</h3>
          <p className="text-gray-700 mb-4">Dive into the data yourself. Search for any company, lobbyist, or issue.</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">Search All Data</Link>
            <Link href="/clients" className="px-4 py-2 bg-white text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors text-sm">Top Clients</Link>
            <Link href="/trends" className="px-4 py-2 bg-white text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors text-sm">Spending Trends</Link>
            <Link href="/investigations" className="px-4 py-2 bg-white text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors text-sm">All Investigations</Link>
          </div>
        </div>
      </article>

      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="February 2026" />

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
          </Link>
          <Link href="/investigations/revolving-door-exposed" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🚪 Revolving Door Exposed</div>
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [ { "@type": "Question", name: "What is lobbying?", acceptedAnswer: { "@type": "Answer", text: "Lobbying is the act of attempting to influence decisions made by government officials, most often legislators or members of regulatory agencies. In the United States, lobbying is a constitutionally protected activity under the First Amendment right to petition the government." } }, { "@type": "Question", name: "Is lobbying legal?", acceptedAnswer: { "@type": "Answer", text: "Yes, lobbying is legal in the United States and is protected by the First Amendment. However, lobbyists must register and file disclosure reports under the Lobbying Disclosure Act of 1995. These filings are public records that anyone can access." } }, { "@type": "Question", name: "How much money is spent on lobbying each year?", acceptedAnswer: { "@type": "Answer", text: "Federal lobbying spending has exceeded $4 billion annually since 2022, with 2025 reaching approximately $5.08 billion. The true cost of influence is likely much higher when accounting for grassroots lobbying and other activities not captured by disclosure requirements." } }, { "@type": "Question", name: "Who are the biggest lobbyists in Washington?", acceptedAnswer: { "@type": "Answer", text: "The U.S. Chamber of Commerce is consistently the top lobbying spender. Other major spenders include the National Association of Realtors, PhRMA, the American Hospital Association, and major corporations like Amazon, Meta, and Alphabet." } }, { "@type": "Question", name: "What is the revolving door in lobbying?", acceptedAnswer: { "@type": "Answer", text: "The revolving door refers to the movement of personnel between government roles and lobbying positions. Former members of Congress, congressional staffers, and executive branch officials often become lobbyists, leveraging their insider knowledge and connections." } } ] }) }} />

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Disclosure Act: What Gets Reported</h2>
        <p className="text-gray-700 mb-3">
          The Lobbying Disclosure Act (LDA) of 1995 requires lobbyists to register with the Secretary of the Senate and the Clerk of the House within 45 days of making a lobbying contact or being employed to make a lobbying contact. Registered lobbyists must file quarterly reports detailing their clients, the issues they lobbied on, the agencies they contacted, and their income or expenses.
        </p>
        <p className="text-gray-700 mb-3">
          However, the LDA has significant gaps. Grassroots lobbying, strategic consulting, and public affairs campaigns that don&apos;t involve direct contact with officials often go unreported. Many observers estimate that the true cost of influence in Washington is two to three times what appears in official filings.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Common Lobbying Tactics</h2>
        <p className="text-gray-700 mb-3">
          Lobbyists employ a range of strategies to influence policy outcomes. Direct lobbying involves meeting with legislators and their staff to present arguments, data, and proposed legislative language. Many lobbyists draft bill text or amendments that lawmakers introduce with minimal changes.
        </p>
        <p className="text-gray-700 mb-3">
          Coalition building brings together diverse organizations around shared policy goals, amplifying their collective influence. Industry trade associations like the Chamber of Commerce and PhRMA coordinate lobbying efforts across their membership, pooling resources for maximum impact.
        </p>
        <p className="text-gray-700 mb-3">
          Grassroots lobbying mobilizes constituents to contact their representatives, creating the appearance of organic public support for policy positions. In the digital age, these campaigns can generate millions of emails, calls, and social media posts within days.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Why Lobbying Transparency Matters</h2>
        <p className="text-gray-700 mb-3">
          Understanding who is spending money to influence government decisions is essential for democratic accountability. When pharmaceutical companies spend hundreds of millions lobbying against drug pricing reforms, or when tech giants invest heavily to shape AI regulation, citizens deserve to know.
        </p>
        <p className="text-gray-700 mb-3">
          OpenLobby exists to make this information accessible. We aggregate data from Senate Office of Public Records filings, clean and normalize it, and present it in ways that reveal patterns invisible in raw data. Whether you&apos;re a journalist investigating corporate influence, a researcher studying policy outcomes, or a citizen tracking what your government is doing, our tools help you follow the money.
        </p>
        <p className="text-gray-700 mb-3">
          Explore our <Link href="/investigations" className="text-indigo-600 hover:text-indigo-800 font-semibold">investigations</Link> for data-driven deep dives, or use our <Link href="/tools" className="text-indigo-600 hover:text-indigo-800 font-semibold">interactive tools</Link> to explore the data yourself.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Types of Lobbyists</h2>
        <p className="text-gray-700 mb-3">
          Not all lobbyists are created equal. The lobbying industry includes several distinct categories, each with different roles and levels of influence.
        </p>
        <div className="space-y-4 mb-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-1">In-House Lobbyists</h3>
            <p className="text-gray-600 text-sm">Employees of corporations, trade associations, or nonprofits who lobby on behalf of their employer. Major companies like Amazon, Google, and Pfizer employ dozens of in-house lobbyists. Their spending appears under the company name in LDA filings.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-1">Contract Lobbyists</h3>
            <p className="text-gray-600 text-sm">Hired guns at lobbying firms like Akin Gump, Brownstein Hyatt, or Squire Patton Boggs. Clients pay these firms to represent their interests. A single firm may represent dozens of clients across different industries.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-1">Revolving Door Lobbyists</h3>
            <p className="text-gray-600 text-sm">Former government officials who leverage their insider knowledge and connections. Ex-members of Congress, former agency heads, and senior congressional staff command premium rates. See our <Link href="/revolving-door" className="text-indigo-600 hover:text-indigo-800">revolving door tracker</Link>.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-1">Foreign Agents</h3>
            <p className="text-gray-600 text-sm">Individuals or firms representing foreign governments, political parties, or entities. They must register under the Foreign Agents Registration Act (FARA), which has stricter disclosure requirements than the LDA. Track foreign lobbying on our <Link href="/foreign" className="text-indigo-600 hover:text-indigo-800">foreign influence page</Link>.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by the Numbers: 2025 Snapshot</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {[
            { value: '$5.08B', label: 'Total 2025 spending' },
            { value: '12,800+', label: 'Active lobbyists' },
            { value: '726K+', label: 'Filings in database' },
            { value: '79', label: 'Issue categories' },
          ].map(stat => (
            <div key={stat.label} className="bg-indigo-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-indigo-800" style={{ fontFamily: 'var(--font-serif)' }}>{stat.value}</div>
              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 mb-3">
          These numbers only tell part of the story. Lobbying disclosure requirements have significant gaps — grassroots campaigns, strategic consulting, and public affairs efforts that don&apos;t involve direct official contact often go unreported. Many experts estimate the true cost of influence is two to three times what appears in official filings.
        </p>
        <p className="text-gray-700">
          Dive deeper into the data on our <Link href="/lobbying-statistics-2025" className="text-indigo-600 hover:text-indigo-800 font-semibold">2025 statistics page</Link> or explore <Link href="/lobbying-statistics-2026" className="text-indigo-600 hover:text-indigo-800 font-semibold">early 2026 trends</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The History of Lobbying Regulation</h2>
        <p className="text-gray-700 mb-3">
          Lobbying regulation in the United States has evolved significantly over the past century. The Federal Regulation of Lobbying Act of 1946 was the first federal law requiring lobbyist registration, but it was widely criticized for weak enforcement and narrow definitions.
        </p>
        <p className="text-gray-700 mb-3">
          The Lobbying Disclosure Act of 1995 (LDA) replaced the 1946 law with broader coverage and clearer reporting requirements. It defined &quot;lobbyist&quot; as anyone who spends at least 20% of their time on lobbying activities for a client and makes at least two lobbying contacts.
        </p>
        <p className="text-gray-700 mb-3">
          The Honest Leadership and Open Government Act of 2007 (HLOGA) strengthened the LDA following the Jack Abramoff scandal. It increased filing frequency from semi-annual to quarterly, enhanced penalties for non-compliance, and added disclosure requirements for campaign contributions by lobbyists.
        </p>
        <p className="text-gray-700 mb-3">
          Despite these reforms, significant gaps remain. The 20% time threshold means many influence professionals avoid registration. &quot;Shadow lobbying&quot; — where former officials advise on strategy without making direct contacts — has become increasingly common as a way to operate outside disclosure requirements.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying vs. Campaign Contributions</h2>
        <p className="text-gray-700 mb-3">
          Lobbying and campaign contributions are often conflated but are legally distinct activities. Lobbying involves direct advocacy to government officials on specific policy issues. Campaign contributions are financial donations to candidates, parties, or political action committees (PACs).
        </p>
        <p className="text-gray-700 mb-3">
          However, the two are deeply intertwined. Many lobbying clients also make significant campaign contributions, and bundling — where lobbyists aggregate donations from multiple sources — amplifies their influence. Our <Link href="/investigations/follow-the-money" className="text-indigo-600 hover:text-indigo-800 font-semibold">Follow the Money investigation</Link> traces these connections.
        </p>
        <p className="text-gray-700 mb-3">
          Explore how lobbying spending correlates with government contracts and regulatory outcomes in our <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:text-indigo-800 font-semibold">lobbying vs. contracts analysis</Link> and <Link href="/lobbying-roi" className="text-indigo-600 hover:text-indigo-800 font-semibold">lobbying ROI calculator</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How to Use OpenLobby</h2>
        <p className="text-gray-700 mb-3">
          OpenLobby provides several ways to explore lobbying data:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Search:</strong> Find any client, firm, lobbyist, or issue using our <Link href="/search" className="text-indigo-600 hover:text-indigo-800">search tool</Link></li>
          <li><strong>Compare:</strong> Compare lobbying spending across industries with our <Link href="/tools/industry-compare" className="text-indigo-600 hover:text-indigo-800">industry comparison tool</Link></li>
          <li><strong>Track your rep:</strong> See who&apos;s lobbying your elected officials with <Link href="/tools/your-rep" className="text-indigo-600 hover:text-indigo-800">Your Rep</Link></li>
          <li><strong>Download:</strong> Access raw datasets for your own analysis via our <Link href="/downloads" className="text-indigo-600 hover:text-indigo-800">downloads page</Link></li>
          <li><strong>Investigate:</strong> Read our <Link href="/investigations" className="text-indigo-600 hover:text-indigo-800">30+ data-driven investigations</Link></li>
        </ul>
        <p className="text-gray-700 mb-3">
          All of our data is free and open. We believe that lobbying transparency is essential for a functioning democracy, and that citizens should be able to see who is spending money to influence their government without paywalls or barriers.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Future of Lobbying</h2>
        <p className="text-gray-700 mb-3">
          The lobbying industry is evolving rapidly. AI-powered advocacy tools, social media influence campaigns, and cryptocurrency-funded political action committees are reshaping how interests are represented in Washington. At the same time, calls for reform — including expanded disclosure requirements, longer cooling-off periods for the revolving door, and restrictions on foreign lobbying — continue to gain momentum.
        </p>
        <p className="text-gray-700 mb-3">
          As lobbying grows more sophisticated and more expensive, transparency becomes more important than ever. Understanding who is spending money, on what issues, and through which channels is the first step toward holding government accountable.
        </p>
        <p className="text-gray-700">
          Stay informed with our latest <Link href="/investigations" className="text-indigo-600 hover:text-indigo-800 font-semibold">investigations</Link> and follow spending trends on our <Link href="/trends" className="text-indigo-600 hover:text-indigo-800 font-semibold">trends dashboard</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Frequently Cited Lobbying Myths</h2>
        <div className="space-y-3 mb-4">
          <div className="border-l-4 border-red-300 pl-4">
            <p className="font-bold text-gray-800">Myth: Lobbying is bribery</p>
            <p className="text-gray-600 text-sm">Lobbying involves advocacy and persuasion, not direct payments for votes. Bribery is a federal crime. However, critics argue that the combination of lobbying access and campaign contributions creates a system that functions similarly in practice.</p>
          </div>
          <div className="border-l-4 border-red-300 pl-4">
            <p className="font-bold text-gray-800">Myth: Only corporations lobby</p>
            <p className="text-gray-600 text-sm">While corporations and trade associations account for the majority of spending, nonprofits, universities, state and local governments, unions, and advocacy groups also lobby extensively. The AARP, for example, consistently ranks among the top 20 lobbying spenders.</p>
          </div>
          <div className="border-l-4 border-red-300 pl-4">
            <p className="font-bold text-gray-800">Myth: Lobbying always produces results</p>
            <p className="text-gray-600 text-sm">Many lobbying campaigns fail to achieve their objectives. Policy outcomes depend on public opinion, media coverage, competing interests, and political dynamics that no amount of lobbying spending can fully control.</p>
          </div>
          <div className="border-l-4 border-red-300 pl-4">
            <p className="font-bold text-gray-800">Myth: All lobbying is disclosed</p>
            <p className="text-gray-600 text-sm">The LDA&apos;s 20% time threshold means many influence professionals operate without registering. &quot;Shadow lobbying&quot; by former officials who advise on strategy without making direct contacts is a growing concern.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Notes</h2>
        <p className="text-gray-600 mb-3">
          All data on OpenLobby is sourced from Senate Office of Public Records lobbying disclosure filings under the Lobbying Disclosure Act of 1995. For our full methodology, see our <Link href="/methodology" className="text-indigo-600 hover:text-indigo-800 font-semibold">methodology page</Link>.
        </p>
      </section>

      <section className="mt-10 mb-8 not-prose">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Data</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/how-lobbying-works" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📖 How Lobbying Works</div>
          </Link>
          <Link href="/clients" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">👤 Top Clients</div>
          </Link>
          <Link href="/issues" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📋 All Issue Areas</div>
          </Link>
        </div>
      </section>
    </div>
  )
}
