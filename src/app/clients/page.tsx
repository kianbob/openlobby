import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Top Lobbying Clients — Who Spends the Most',
  description: 'Explore the biggest spenders in federal lobbying. Search by client name, industry, state, and total spending from 2018-2025.',
}

export default function ClientsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Clients' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Top Lobbying Clients
      </h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Every organization that pays lobbyists to influence Congress, ranked by total spending. 
        Data from Senate LDA filings, 2018–2025.
      </p>
      {/* Client table will load from public/data/top-clients.json */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p className="text-lg">Data loading...</p>
        <p className="text-sm mt-2">Client rankings will appear here once data processing is complete.</p>
      </div>
    </div>
  )
}
