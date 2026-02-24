import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Lobbying by Industry — Which Sectors Spend the Most',
  description: 'Healthcare, tech, defense, finance — see which industries spend the most on federal lobbying.',
}

export default function IndustriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Industries' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Lobbying by Industry</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">Which sectors pour the most money into lobbying? Healthcare, tech, defense, and finance lead the pack — but the details tell a bigger story.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Industry breakdown coming soon.</p>
      </div>
    </div>
  )
}
