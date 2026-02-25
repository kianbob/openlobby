import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Investigations — Deep-Dive Analysis',
  description: 'In-depth data journalism about federal lobbying. Follow the money from K Street to Capitol Hill.',
}

const investigations = [
  {
    slug: 'doge-vs-lobbying',
    title: 'DOGE vs. The Lobbying Machine',
    desc: 'Billions spent lobbying to keep government programs alive. What happens when DOGE comes for the agencies that lobbyists depend on?',
    tag: 'DOGE',
    date: 'Feb 2026',
  },
  {
    slug: 'tech-lobbying-war',
    title: 'Big Tech\'s $150M Lobbying War',
    desc: 'Google, Meta, Amazon, Apple, Microsoft, and Qualcomm have spent $150M+ lobbying on AI, antitrust, privacy, and trade.',
    tag: 'Tech',
    date: 'Feb 2026',
  },
  {
    slug: 'big-pharma-lobbying',
    title: 'Big Pharma\'s $452M Lobbying Machine',
    desc: 'The pharmaceutical and healthcare industry has spent $452 million lobbying Congress. Here are the companies and the money.',
    tag: 'Pharma',
    date: 'Feb 2026',
  },
  {
    slug: 'revolving-door-exposed',
    title: 'The Revolving Door Exposed',
    desc: '5,000 former government officials — from White House advisors to congressional chiefs of staff — now lobby their old colleagues.',
    tag: 'Revolving Door',
    date: 'Feb 2026',
  },
  {
    slug: 'foreign-influence',
    title: 'Foreign Governments Are Lobbying Congress',
    desc: '1,000+ foreign entities from 50+ countries lobby the US government. The UK leads with 474 filings. China has 165.',
    tag: 'Foreign',
    date: 'Feb 2026',
  },
  {
    slug: 'follow-the-money',
    title: 'Follow the Money: The 8,187x Return on Lobbying',
    desc: 'Companies that lobby get billions in government contracts. McKesson spent $1.45M and got $11.8B back. We calculated the ROI.',
    tag: 'Analysis',
    date: 'Feb 2026',
  },
  {
    slug: 'defense-contractor-lobbying',
    title: 'Lockheed, Boeing, Raytheon: The Defense Lobby',
    desc: 'Defense contractors spend millions lobbying for contracts worth billions. The numbers.',
    tag: 'Defense',
    date: 'Feb 2026',
  },
  {
    slug: 'crypto-lobbying-explosion',
    title: 'The Crypto Lobbying Explosion',
    desc: 'The fastest-growing lobbying sector in DC. How crypto went from zero to a political force.',
    tag: 'Crypto',
    date: 'Feb 2026',
  },
  {
    slug: 'ai-regulation-fight',
    title: 'Who\'s Lobbying to Shape AI Policy',
    desc: 'Meta spent $26M in 2024 alone. The AI regulation fight is the biggest lobbying battle of the decade.',
    tag: 'AI',
    date: 'Feb 2026',
  },
  {
    slug: 'tariff-lobbying-surge',
    title: 'The 2025 Tariff Panic',
    desc: 'As tariffs return, lobbying on trade surges. Which industries are most desperate to be exempt?',
    tag: 'Trade',
    date: 'Feb 2026',
  },
  {
    slug: 'lobbying-statistics',
    title: 'Federal Lobbying Statistics 2025: Complete Guide',
    desc: 'The definitive stats page — $15.2B total, $2.7B in 2025, 650K+ filings, industry breakdowns, and historical trends.',
    tag: 'Reference',
    date: 'Feb 2026',
  },
  {
    slug: 'what-is-lobbying',
    title: 'What Is Lobbying? A Complete Guide',
    desc: 'How lobbying works, who does it, and why $2.7 billion a year buys a lot of influence. Your plain-language explainer.',
    tag: 'Guide',
    date: 'Feb 2026',
  },
]

const tagColors: Record<string, string> = {
  DOGE: 'bg-red-100 text-red-800',
  Tech: 'bg-blue-100 text-blue-800',
  Pharma: 'bg-green-100 text-green-800',
  'Revolving Door': 'bg-amber-100 text-amber-800',
  Foreign: 'bg-purple-100 text-purple-800',
  Analysis: 'bg-indigo-100 text-indigo-800',
  Defense: 'bg-gray-200 text-gray-800',
  Crypto: 'bg-yellow-100 text-yellow-800',
  AI: 'bg-cyan-100 text-cyan-800',
  Trade: 'bg-orange-100 text-orange-800',
  Reference: 'bg-gray-100 text-gray-700',
  Guide: 'bg-gray-100 text-gray-700',
}

export default function InvestigationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Investigations' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Investigations</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Deep-dive data journalism about federal lobbying. We follow the money from K Street to Capitol Hill 
        and tell the stories the numbers reveal.
      </p>

      <a href="/investigations/doge-vs-lobbying" className="block mb-10 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 text-white hover:shadow-2xl transition-shadow">
        <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full mb-4">FEATURED</span>
        <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>DOGE Wants to Cut Government. $4.4 Billion in Lobbying Wants to Keep It.</h2>
        <p className="text-gray-300 mb-4">What happens when DOGE comes for the agencies that lobbyists depend on? A deep-dive into the collision between government efficiency and the lobbying industry.</p>
        <span className="text-amber-400 text-sm font-medium">Read the investigation →</span>
      </a>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {investigations.map(inv => (
          <Link
            key={inv.slug}
            href={`/investigations/${inv.slug}`}
            className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-0.5 text-xs font-semibold rounded ${tagColors[inv.tag] || 'bg-gray-100 text-gray-700'}`}>
                {inv.tag}
              </span>
              <span className="text-xs text-gray-400">{inv.date}</span>
            </div>
            <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{inv.title}</h2>
            <p className="text-sm text-gray-600">{inv.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
