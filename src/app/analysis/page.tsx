import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Analysis — In-Depth Lobbying Research',
  description: 'Data-driven analysis of federal lobbying: top spenders, the revolving door, industry breakdowns, dark money, foreign influence, and more.',
}

const articles = [
  {
    slug: 'top-lobbying-spenders',
    title: 'The Top 20 Lobbying Spenders',
    desc: 'Which corporations and trade groups spend the most to influence Congress? A ranked breakdown with exact dollar amounts.',
    tag: 'Spending Analysis',
    tagColor: 'bg-amber-100 text-amber-800',
    stat: '$535M+',
    statLabel: '#1 spender (US Chamber)',
  },
  {
    slug: 'revolving-door-lobbyists',
    title: 'The Revolving Door',
    desc: 'How former members of Congress become million-dollar lobbyists. The pipeline from Capitol Hill to K Street.',
    tag: 'Revolving Door',
    tagColor: 'bg-red-100 text-red-800',
    stat: '5,000+',
    statLabel: 'Former officials now lobbying',
  },
  {
    slug: 'tech-lobbying',
    title: 'Big Tech\'s Washington Takeover',
    desc: 'Google, Meta, Amazon, Apple, and Microsoft have spent $950M+ on lobbying. Here\'s how Silicon Valley bought DC.',
    tag: 'Big Tech',
    tagColor: 'bg-blue-100 text-blue-800',
    stat: '$950M+',
    statLabel: 'Big 5 tech lobbying total',
  },
  {
    slug: 'pharma-lobbying',
    title: 'Pharma\'s $4.4B Influence Machine',
    desc: 'The pharmaceutical industry outspends every other sector. Drug pricing, patents, and the business of blocking reform.',
    tag: 'Healthcare',
    tagColor: 'bg-green-100 text-green-800',
    stat: '$4.4B+',
    statLabel: 'Healthcare sector lobbying',
  },
  {
    slug: 'defense-lobbying',
    title: 'The Military-Industrial Lobbying Complex',
    desc: 'Defense contractors spend hundreds of millions lobbying for weapons systems. Eisenhower warned us.',
    tag: 'Defense',
    tagColor: 'bg-gray-200 text-gray-800',
    stat: '$780M+',
    statLabel: 'Top 5 defense contractors',
  },
  {
    slug: 'oil-gas-lobbying',
    title: 'Big Oil\'s Climate Lobbying Playbook',
    desc: 'Fossil fuel companies pledge net-zero while spending $890M+ lobbying against climate legislation.',
    tag: 'Energy',
    tagColor: 'bg-orange-100 text-orange-800',
    stat: '12+',
    statLabel: 'Climate bills killed or weakened',
  },
  {
    slug: 'lobbying-roi',
    title: 'The 22,000% Return on Lobbying',
    desc: 'Academic research proves lobbying is the best investment in America. $1 in → $220 out.',
    tag: 'ROI Analysis',
    tagColor: 'bg-emerald-100 text-emerald-800',
    stat: '22,000%',
    statLabel: 'Average lobbying ROI (tax)',
  },
  {
    slug: 'dark-money',
    title: 'Shadow Lobbying',
    desc: 'Think tanks, 501(c)(4)s, and "strategic advisors" — the influence that never gets reported.',
    tag: 'Dark Money',
    tagColor: 'bg-purple-100 text-purple-800',
    stat: '$6B+',
    statLabel: 'Estimated shadow lobbying/yr',
  },
  {
    slug: 'foreign-lobbying',
    title: 'Foreign Governments Lobbying America',
    desc: 'Saudi Arabia, Israel, China, and 100+ countries spend millions lobbying the U.S. government. FARA exposed.',
    tag: 'Foreign Influence',
    tagColor: 'bg-indigo-100 text-indigo-800',
    stat: '$500M+',
    statLabel: 'Foreign lobbying per year',
  },
  {
    slug: 'lobbying-101',
    title: 'Lobbying 101',
    desc: 'How lobbying works, who the players are, what\'s legal, and what the disclosure rules actually say.',
    tag: 'Guide',
    tagColor: 'bg-sky-100 text-sky-800',
    stat: '12,000',
    statLabel: 'Registered lobbyists',
  },
]

export default function AnalysisIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Analysis' }]} />

      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Analysis
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          In-depth, data-driven analysis of federal lobbying. We follow the money so you don&apos;t have to.
        </p>
      </div>

      {/* Featured article */}
      <Link
        href="/analysis/top-lobbying-spenders"
        className="block mb-12 bg-gradient-to-r from-indigo-950 to-purple-900 text-white rounded-2xl p-8 md:p-12 hover:shadow-2xl transition-shadow group"
      >
        <span className="inline-block bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
          Featured
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-amber-300 transition-colors"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          The Top 20 Lobbying Spenders
        </h2>
        <p className="text-indigo-200 text-lg mb-4 max-w-2xl">
          A ranked breakdown of the corporations and trade groups that spend the most to buy influence in
          Washington — with exact dollar amounts from Senate LDA filings.
        </p>
        <span className="text-amber-400 font-semibold group-hover:text-amber-300">Read the full analysis →</span>
      </Link>

      {/* Article grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(1).map((a) => (
          <Link
            key={a.slug}
            href={`/analysis/${a.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-200"
          >
            <div className="p-7">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${a.tagColor}`}>{a.tag}</span>
                <div className="text-right">
                  <div className="text-xl font-black text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
                    {a.stat}
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">{a.statLabel}</div>
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-3 group-hover:text-indigo-700 transition-colors"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {a.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-indigo-600 group-hover:text-indigo-800">
                Read Analysis →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-4">Want to explore the raw data behind these analyses?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/clients"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Explore Client Data →
          </Link>
          <Link
            href="/downloads"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
          >
            Download Datasets →
          </Link>
        </div>
      </div>
    </div>
  )
}
