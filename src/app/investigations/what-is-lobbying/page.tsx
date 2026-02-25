import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from "@/components/SourceCitation"
import ShareButtons from '@/components/ShareButtons'

export const metadata: Metadata = {
  title: 'What Is Lobbying? A Complete Guide',
  description: 'What is lobbying, how does it work, and why does it matter? A comprehensive guide to federal lobbying, the Lobbying Disclosure Act, and how money influences Washington.',
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

        <p className="text-xl text-gray-700 mt-6">In 2025, organizations spent <strong>$2.7 billion</strong> lobbying the federal government — more than ever before. But what exactly is lobbying, who does it, and how does it shape the laws that affect your life?</p>

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
