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
    title: 'Big Tech\'s $260M Lobbying Machine',
    desc: 'How Google, Meta, Amazon, and Apple spend hundreds of millions to shape tech regulation.',
    tag: 'Tech',
    date: 'Coming Soon',
  },
  {
    slug: 'pharma-drug-pricing',
    title: '$450M to Keep Drug Prices High',
    desc: 'The pharmaceutical industry is the biggest lobbying spender in Washington. Here\'s what they\'re buying.',
    tag: 'Pharma',
    date: 'Coming Soon',
  },
  {
    slug: 'revolving-door-exposed',
    title: 'The Revolving Door Exposed',
    desc: 'Thousands of former government officials now lobby their old colleagues. The most egregious cases.',
    tag: 'Revolving Door',
    date: 'Coming Soon',
  },
  {
    slug: 'foreign-influence',
    title: 'Foreign Governments Lobbying America',
    desc: 'Which countries spend the most trying to influence US policy? Follow the foreign money trail.',
    tag: 'Foreign',
    date: 'Coming Soon',
  },
  {
    slug: 'lobbying-roi',
    title: 'The 22,000% Return on Investment',
    desc: 'For every $1 spent on lobbying, companies get $200+ back. We calculated the actual ROI.',
    tag: 'Analysis',
    date: 'Coming Soon',
  },
  {
    slug: 'defense-contractor-lobbying',
    title: 'Lockheed, Boeing, Raytheon: The Defense Lobby',
    desc: 'Defense contractors spend millions lobbying for contracts worth billions. The numbers.',
    tag: 'Defense',
    date: 'Coming Soon',
  },
  {
    slug: 'crypto-lobbying-explosion',
    title: 'The Crypto Lobbying Explosion',
    desc: 'The fastest-growing lobbying sector in DC. How crypto went from zero to a political force.',
    tag: 'Crypto',
    date: 'Coming Soon',
  },
  {
    slug: 'ai-regulation-fight',
    title: 'Who\'s Lobbying to Shape AI Policy',
    desc: 'Meta spent $26M in 2024 alone. The AI regulation fight is the biggest lobbying battle of the decade.',
    tag: 'AI',
    date: 'Coming Soon',
  },
  {
    slug: 'tariff-lobbying-surge',
    title: 'The 2025 Tariff Panic',
    desc: 'As tariffs return, lobbying on trade surges. Which industries are most desperate to be exempt?',
    tag: 'Trade',
    date: 'Coming Soon',
  },
  {
    slug: 'lobbying-statistics',
    title: 'Federal Lobbying Statistics 2025',
    desc: 'The definitive stats page — total spending, top clients, biggest issues, yearly trends.',
    tag: 'Reference',
    date: 'Coming Soon',
  },
  {
    slug: 'what-is-lobbying',
    title: 'What Is Lobbying? A Complete Guide',
    desc: 'How lobbying works, who does it, and why it matters. Your plain-language explainer.',
    tag: 'Guide',
    date: 'Coming Soon',
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {investigations.map(inv => (
          <Link
            key={inv.slug}
            href={`/investigations/${inv.slug}`}
            className={`block bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all ${inv.date === 'Coming Soon' ? 'opacity-70' : ''}`}
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
