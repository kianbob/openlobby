import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Investigations — Data-Driven Lobbying Exposés',
  description: 'Deep-dive investigations into federal lobbying: who spends, who benefits, and what it means for American policy.',
}

export default function InvestigationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Investigations' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Investigations</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">Data-driven investigations into the lobbying industry. Coming soon.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Investigation articles coming soon after data processing.</p>
      </div>
    </div>
  )
}
