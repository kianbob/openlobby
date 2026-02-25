import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-6xl font-black text-indigo-200 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            Go Home
          </Link>
          <Link href="/search" className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Search Data
          </Link>
          <Link href="/investigations" className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Read Investigations
          </Link>
        </div>
      </div>
    </div>
  )
}
