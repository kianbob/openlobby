import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Foreign Lobbying — Who Influences U.S. Policy From Abroad',
  description: 'Foreign governments and corporations spending millions to lobby Congress. Track foreign entities disclosed in Senate LDA filings.',
}

export default function ForeignPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Foreign Lobbying' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Foreign Lobbying</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">Foreign governments and corporations are required to disclose when they hire U.S. lobbyists. Here&apos;s who&apos;s spending and what they want.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Foreign lobbying data coming soon.</p>
      </div>
    </div>
  )
}
