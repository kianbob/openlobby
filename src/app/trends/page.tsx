import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Lobbying Spending Trends — $4.4B and Climbing',
  description: 'Track federal lobbying spending from 2018 to 2025. Record-breaking growth every year since 2016.',
}

export default function TrendsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Trends' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying Spending Trends</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">$4.4 billion in 2024 — another record. Lobbying spending has grown every year, with no signs of slowing down.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Trend charts coming soon.</p>
      </div>
    </div>
  )
}
