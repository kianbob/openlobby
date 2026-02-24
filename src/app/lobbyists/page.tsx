import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Federal Lobbyists — Who Works the Halls of Congress',
  description: 'Search 87,000+ individual lobbyists. See who they represent, their former government positions, and what issues they lobby on.',
}

export default function LobbyistsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Lobbyists' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Federal Lobbyists</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">87,000+ individuals registered to lobby the federal government. Many are former congressional staffers, agency officials, and even former members of Congress.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Data loading — lobbyist directory coming soon.</p>
      </div>
    </div>
  )
}
