import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Lobbying by Issue — What Washington Fights Over',
  description: 'See which issues attract the most lobbying money. 76 categories from healthcare to defense to taxes, ranked by spending.',
}

export default function IssuesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Issues' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by Issue</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">What are lobbyists fighting over? 76 issue categories covering everything from healthcare reform to defense contracts to tax policy.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Data loading — issue breakdown coming soon.</p>
      </div>
    </div>
  )
}
