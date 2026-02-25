import Link from 'next/link'

interface LinkItem {
  href: string
  title: string
  desc: string
  emoji?: string
}

export function RelatedInvestigations({ articles }: { articles: LinkItem[] }) {
  if (articles.length === 0) return null
  return (
    <section className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {articles.map(a => (
          <Link key={a.href} href={a.href} className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">{a.emoji && `${a.emoji} `}{a.title}</div>
            <div className="text-xs text-gray-500 mt-1">{a.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function ExploreMore({ links }: { links: LinkItem[] }) {
  if (links.length === 0) return null
  return (
    <section className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {links.map(l => (
          <Link key={l.href} href={l.href} className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">{l.emoji && `${l.emoji} `}{l.title}</div>
            <div className="text-xs text-gray-500 mt-1">{l.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function FeaturedInvestigation({ href, title, desc, emoji }: LinkItem) {
  return (
    <Link href={href} className="block mb-8 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl hover:shadow-md transition-all">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{emoji || '🔍'}</span>
        <div>
          <div className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">Featured Investigation</div>
          <div className="font-bold text-indigo-900" style={{ fontFamily: 'var(--font-serif)' }}>{title}</div>
          <div className="text-sm text-gray-600 mt-1">{desc}</div>
        </div>
      </div>
    </Link>
  )
}

export function DiveDeeper({ links }: { links: LinkItem[] }) {
  if (links.length === 0) return null
  return (
    <section className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Dive Deeper</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {links.map(l => (
          <Link key={l.href} href={l.href} className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">{l.emoji && `${l.emoji} `}{l.title}</div>
            <div className="text-xs text-gray-500 mt-1">{l.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
