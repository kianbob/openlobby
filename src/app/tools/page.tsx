import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive Tools | OpenLobby',
  description: 'Explore lobbying data with interactive tools — search filings, compare industries, find your representative, calculate ROI, and more.',
}

const tools = [
  {
    href: '/search',
    icon: '🔍',
    title: 'Lobbying Search',
    desc: 'Search across 38,000+ clients, 7,700 firms, 23,500 lobbyists, and 79 issue areas. Results ranked by spending.',
    tag: 'Core',
    tagColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    href: '/tools/your-rep',
    icon: '🏛️',
    title: 'Find Your Representative',
    desc: 'See which companies and industries are lobbying YOUR representative in Congress. Know who\'s buying influence in your district.',
    tag: 'Popular',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    href: '/tools/industry-compare',
    icon: '📊',
    title: 'Industry Compare',
    desc: 'Compare lobbying spending across industries side by side. See which sectors dominate and how spending has shifted over time.',
    tag: 'Analysis',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    href: '/your-tax-dollar',
    icon: '💸',
    title: 'Your Tax Dollar Calculator',
    desc: 'How much of YOUR income goes to lobbied industries? Interactive slider shows your personal share of the $6B lobbying machine.',
    tag: 'Interactive',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    href: '/lobbying-roi',
    icon: '📈',
    title: 'Lobbying ROI Calculator',
    desc: 'Calculate the return on lobbying investment. For every $1 spent lobbying, companies get $220 back. Some get 49,536x returns.',
    tag: 'Featured',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    href: '/compare',
    icon: '⚖️',
    title: 'Compare Tool',
    desc: 'Put any two clients or firms side by side. Compare spending, issues, lobbyists, and growth trajectories.',
    tag: 'Analysis',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    href: '/influence-score',
    icon: '⚡',
    title: 'Influence Score',
    desc: 'Our composite ranking system scores clients across 5 dimensions: spending, connections, issues, growth, and network reach.',
    tag: 'Unique',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    href: '/revolving-door',
    icon: '🚪',
    title: 'Revolving Door Tracker',
    desc: 'Track 5,000+ former government officials who are now registered lobbyists. See who went from public service to K Street.',
    tag: 'Popular',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    href: '/network',
    icon: '🕸️',
    title: 'Influence Network',
    desc: 'Visualize the web of connections between lobbyists, firms, clients, and issues. See how influence flows through Washington.',
    tag: 'Visual',
    tagColor: 'bg-sky-100 text-sky-700',
  },
  {
    href: '/trends',
    icon: '📉',
    title: 'Spending Trends',
    desc: 'Track how lobbying spending has changed from 2018 to 2025. Identify surges, declines, and seasonal patterns.',
    tag: 'Data',
    tagColor: 'bg-gray-100 text-gray-700',
  },
  {
    href: '/tools/lobbying-search',
    icon: '📝',
    title: 'Filing Search',
    desc: 'Search individual lobbying filings by keyword, client, firm, or issue code. Dive into the raw disclosure data.',
    tag: 'Core',
    tagColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    href: '/text-analysis',
    icon: '💬',
    title: 'What Lobbyists Write',
    desc: 'Analyze the actual language in lobbying disclosures. See trending words, bills, and lobbying descriptions across industries.',
    tag: 'Unique',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    href: '/geographic',
    icon: '🗺️',
    title: 'Geographic Analysis',
    desc: 'Where does lobbying money come from? Interactive map showing spending by state and per-capita analysis.',
    tag: 'Visual',
    tagColor: 'bg-sky-100 text-sky-700',
  },
  {
    href: '/arms-race',
    icon: '🔥',
    title: 'The Arms Race',
    desc: 'Which issues are surging in lobbying spend? Track the fastest-growing lobbying areas and emerging policy battles.',
    tag: 'Trending',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    href: '/agencies',
    icon: '🏢',
    title: 'Agency Pressure',
    desc: 'Which government agencies get lobbied the most? See where corporate influence is concentrated across the federal government.',
    tag: 'Data',
    tagColor: 'bg-gray-100 text-gray-700',
  },
  {
    href: '/embed',
    icon: '🧩',
    title: 'Embeddable Widgets',
    desc: 'Embed OpenLobby charts and data on your own website. Perfect for journalists, researchers, and advocacy organizations.',
    tag: 'Developer',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    href: '/downloads',
    icon: '📥',
    title: 'Data Downloads',
    desc: 'Download the complete processed dataset. All client, firm, lobbyist, and issue data in JSON format. Free and open.',
    tag: 'Open Data',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
]

export default function ToolsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Interactive Tools
          </h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            {tools.length} tools to explore, analyze, and understand lobbying data.
            All free. No login required.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map(tool => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-indigo-200 hover:scale-[1.01] transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{tool.icon}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tool.tagColor}`}>{tool.tag}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-700 transition-colors mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
            Built for Transparency
          </h2>
          <p className="text-gray-600 mb-6">
            Every tool on this site is free, open, and requires no login. Our mission is to make lobbying data
            accessible to journalists, researchers, advocates, and citizens.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/methodology" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
              Our Methodology →
            </Link>
            <Link href="/downloads" className="px-6 py-3 bg-white border border-gray-200 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              Download the Data →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
