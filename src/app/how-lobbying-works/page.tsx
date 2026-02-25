import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Federal Lobbying Works: A Complete Guide',
  description: 'Learn how federal lobbying works in the United States. Understand the Lobbying Disclosure Act, lobbyist registration, quarterly reports, the revolving door, and how $37.7 billion flows through Washington.',
  keywords: ['how lobbying works', 'what is lobbying', 'lobbying disclosure act', 'federal lobbying', 'lobbyist registration', 'K Street'],
  openGraph: {
    title: 'How Federal Lobbying Works: A Complete Guide',
    description: 'Everything you need to know about federal lobbying — from registration to disclosure, the revolving door to quarterly reports.',
    url: 'https://www.openlobby.us/how-lobbying-works',
  },
}

export default function HowLobbyingWorksPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-12">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">Complete Guide</p>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          How Federal Lobbying Works
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Every year, thousands of organizations spend billions of dollars trying to influence Congress and federal agencies.
          Here&apos;s how the system works, who the players are, and what the data reveals.
        </p>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '$37.7B', label: 'Total Lobbying (2018-2025)' },
          { value: '726,000+', label: 'Filings in Our Database' },
          { value: '23,545', label: 'Registered Lobbyists' },
          { value: '79', label: 'Issue Categories' },
        ].map(s => (
          <div key={s.label} className="bg-indigo-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>{s.value}</div>
            <div className="text-xs text-gray-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none prose-headings:font-bold" style={{ fontFamily: 'inherit' }}>
        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What Is Lobbying?</h2>
        <p>
          Lobbying is the act of attempting to influence decisions made by government officials — most commonly legislators
          and members of regulatory agencies. In the United States, lobbying is a constitutionally protected activity under
          the First Amendment&apos;s right to &quot;petition the Government for a redress of grievances.&quot;
        </p>
        <p>
          In practice, federal lobbying involves paid professionals (lobbyists) who contact members of Congress, their staff,
          and executive branch officials on behalf of clients — corporations, trade associations, nonprofits, foreign governments,
          and other organizations.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Lobbying Disclosure Act (LDA)</h2>
        <p>
          The <strong>Lobbying Disclosure Act of 1995</strong> (amended in 2007 by the Honest Leadership and Open Government Act)
          requires lobbyists to register with the Secretary of the Senate and the Clerk of the House if they meet certain thresholds:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>They make more than one lobbying contact</li>
          <li>They spend at least 20% of their time on lobbying activities for a particular client</li>
          <li>The client spends more than $14,000 on lobbying in a quarter (if using outside firms) or $14,000 on in-house lobbying activities</li>
        </ul>
        <p>
          Registered lobbyists must file quarterly reports (LD-2 forms) disclosing their clients, the issues they lobbied on,
          the government entities they contacted, and how much they were paid. This is the data that powers OpenLobby —
          we&apos;ve analyzed <strong>over 726,000 of these filings</strong> from 2018 to 2025.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How Lobbying Actually Happens</h2>
        <p>Lobbying takes many forms:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Direct lobbying:</strong> Meeting with members of Congress or their staff, testifying at hearings, providing policy expertise</li>
          <li><strong>Grassroots lobbying:</strong> Organizing constituent campaigns, email drives, and public pressure</li>
          <li><strong>Coalition building:</strong> Forming alliances with other organizations around shared policy goals</li>
          <li><strong>Issue advertising:</strong> Running ads to shape public opinion on policy issues</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door</h2>
        <p>
          One of the most consequential aspects of the lobbying industry is the &quot;revolving door&quot; — the movement of
          individuals between government positions and lobbying jobs. Our data shows that <strong>over 5,000 former government
          officials</strong> are currently registered as federal lobbyists.
        </p>
        <p>
          These ex-government lobbyists command a significant premium. Our analysis found that lobbying firms with former
          government officials charge <Link href="/revolving-door-premium" className="text-indigo-600 hover:text-indigo-800 font-semibold">369% more</Link> than
          firms without them — a clear market signal of the value of insider connections.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Quarterly Reporting</h2>
        <p>
          Lobbying firms and in-house lobbyists must file LD-2 reports every quarter with the Senate Office of Public Records.
          These reports include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Client name and description</li>
          <li>Income received (or expenses for in-house lobbyists)</li>
          <li>Specific lobbying issues (using 79 standardized issue codes like HCR for healthcare, DEF for defense)</li>
          <li>Names of lobbyists who worked on the matter</li>
          <li>Government entities contacted (Senate, House, specific agencies)</li>
          <li>Specific bills lobbied on</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Who Spends the Most?</h2>
        <p>
          The biggest lobbying spenders are typically large corporations, industry trade associations, and major advocacy groups.
          The top lobbying issues by total spending include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Budget/Appropriations (BUD):</strong> $2.6 billion — the single largest issue, as organizations fight for federal funding</li>
          <li><strong>Healthcare (HCR):</strong> $2.3 billion — driven by pharmaceutical companies, hospitals, and insurers</li>
          <li><strong>Defense (DEF):</strong> Billions in defense contractor lobbying, with some firms seeing <Link href="/lobbying-vs-contracts" className="text-indigo-600 hover:text-indigo-800 font-semibold">49,536:1 ROI</Link> on their lobbying investment</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Why Lobbying Transparency Matters</h2>
        <p>
          In a democracy, citizens have a right to know who is trying to influence their government and how much they&apos;re spending.
          While lobbying is legal and often serves important functions — providing expertise to lawmakers, representing diverse interests —
          the scale and opacity of the industry raises serious concerns about whose voices are heard in Washington.
        </p>
        <p>
          That&apos;s why we built OpenLobby: to make this public data truly accessible, analyzable, and understandable. Every filing
          shown on this site is a public record, required by law. We just made it searchable.
        </p>
      </div>

      {/* CTAs */}
      <div className="mt-16 grid sm:grid-cols-3 gap-4">
        <Link href="/clients" className="block p-5 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition-colors">
          <div className="font-bold text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>See Top Clients</div>
          <p className="text-sm text-gray-600 mt-1">Who spends the most</p>
        </Link>
        <Link href="/revolving-door" className="block p-5 bg-red-50 rounded-xl text-center hover:bg-red-100 transition-colors">
          <div className="font-bold text-red-700" style={{ fontFamily: 'var(--font-serif)' }}>Revolving Door</div>
          <p className="text-sm text-gray-600 mt-1">Former officials now lobbying</p>
        </Link>
        <Link href="/investigations" className="block p-5 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors">
          <div className="font-bold text-amber-700" style={{ fontFamily: 'var(--font-serif)' }}>Investigations</div>
          <p className="text-sm text-gray-600 mt-1">Deep-dive articles</p>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Dive Deeper</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/investigations/what-is-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📖 What Is Lobbying?</div>
            <div className="text-xs text-gray-500 mt-1">The complete explainer guide</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers</div>
          </Link>
          <Link href="/investigations/follow-the-money" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💰 Follow the Money</div>
            <div className="text-xs text-gray-500 mt-1">Where lobbying dollars actually go</div>
          </Link>
          <Link href="/tech-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💻 Tech Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Industry overview</div>
          </Link>
          <Link href="/pharmaceutical-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">💊 Pharma Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Industry overview</div>
          </Link>
          <Link href="/defense-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🛡️ Defense Lobbying</div>
            <div className="text-xs text-gray-500 mt-1">Industry overview</div>
          </Link>
        </div>
      </div>
    </article>
  )
}
