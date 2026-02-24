import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'The Revolving Door — From Government to K Street',
  description: 'Thousands of lobbyists are former government officials. Explore the pipeline from Congress and federal agencies to K Street lobbying firms.',
}

export default function RevolvingDoorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Revolving Door' }]} />
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">Former senators, congressional staffers, and agency officials — now lobbying the very institutions they used to run. The LDA requires disclosure of &quot;covered positions&quot; — here&apos;s what we found.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Revolving door analysis coming soon.</p>
      </div>
    </div>
  )
}
