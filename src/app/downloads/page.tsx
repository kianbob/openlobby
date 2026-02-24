import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Download Lobbying Data',
  description: 'Download processed lobbying data files. Free, no login required.',
}

export default function DownloadsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Downloads' }]} />
      <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>Download the Data</h1>
      <p className="text-gray-600 mb-8">All our processed data files are free to download. No login, no paywall.</p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">
        <p>Download links coming soon after data processing.</p>
      </div>
    </div>
  )
}
