import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Lobbying Data',
  description: 'Search clients, lobbying firms, individual lobbyists, and issues across 726K+ federal lobbying filings.',
}

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Search Lobbying Data</h1>
      <p className="text-gray-600 mb-8">Search across 726K+ filings, 133K+ clients, 87K+ lobbyists, and 17K+ firms.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Universal search coming soon.</p>
      </div>
    </div>
  )
}
