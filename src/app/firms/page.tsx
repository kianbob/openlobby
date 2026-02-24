import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'K Street\'s Biggest Lobbying Firms',
  description: 'The largest lobbying firms in Washington, ranked by total income. Explore who they represent and how much they earn.',
}

export default function FirmsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Lobbying Firms' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Firms</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">K Street&apos;s biggest players — ranked by total lobbying income from 2018–2025.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Data loading — firm rankings coming soon.</p>
      </div>
    </div>
  )
}
