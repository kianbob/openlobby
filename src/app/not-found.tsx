import Link from 'next/link'

const popularPages = [
  { name: 'Top Clients', href: '/clients', icon: '💰' },
  { name: 'Lobbying Firms', href: '/firms', icon: '🏢' },
  { name: 'Lobbyists', href: '/lobbyists', icon: '👤' },
  { name: 'Issues', href: '/issues', icon: '📋' },
  { name: 'Investigations', href: '/investigations', icon: '🔍' },
  { name: 'Revolving Door', href: '/revolving-door', icon: '🏛️' },
  { name: 'Trends', href: '/trends', icon: '📈' },
  { name: 'Downloads', href: '/downloads', icon: '📥' },
]

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl">
        <div className="text-8xl font-black text-indigo-100 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-2">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          There are 37,000+ pages on this site — let&apos;s find the right one.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link href="/" className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            Go Home
          </Link>
          <Link href="/search" className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            🔍 Try Searching
          </Link>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Popular Pages</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {popularPages.map(page => (
              <Link
                key={page.href}
                href={page.href}
                className="flex flex-col items-center gap-1 p-3 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all text-sm"
              >
                <span className="text-xl">{page.icon}</span>
                <span className="font-medium text-gray-700">{page.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
