'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const widgets = [
  {
    name: 'Top Spenders',
    slug: 'top-spenders',
    desc: 'Shows the top 10 lobbying clients by total spending (2018–2025).',
    width: 400,
    height: 500,
  },
  {
    name: 'Spending Trend',
    slug: 'spending-trend',
    desc: 'Line chart showing yearly lobbying spending from 2018 to 2025.',
    width: 500,
    height: 350,
  },
  {
    name: 'Issue Breakdown',
    slug: 'issue-breakdown',
    desc: 'Top 10 lobbying issue areas by total spending.',
    width: 400,
    height: 500,
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
      className="px-3 py-1.5 text-xs font-medium bg-primary text-white rounded-lg hover:opacity-90 transition"
    >
      {copied ? '✓ Copied!' : 'Copy Code'}
    </button>
  )
}

export default function EmbedPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Embeddable Widgets' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Embeddable Widgets
      </h1>
      <p className="text-gray-600 mb-2">
        Free to use. Just include the embed code on your site. Widgets update automatically when our data refreshes.
      </p>
      <p className="text-sm text-gray-500 mb-8">
        Perfect for journalists, researchers, and anyone covering lobbying and money in politics.
      </p>

      <div className="space-y-10">
        {widgets.map(w => {
          const iframeCode = `<iframe src="https://www.openlobby.us/embed/${w.slug}" width="${w.width}" height="${w.height}" frameborder="0"></iframe>`
          return (
            <div key={w.slug} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-5 bg-gray-50 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">{w.name} Widget</h2>
                <p className="text-sm text-gray-600 mt-1">{w.desc}</p>
              </div>

              <div className="p-5">
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white">
                  <iframe
                    src={`/embed/${w.slug}`}
                    width={w.width}
                    height={w.height}
                    className="max-w-full"
                    style={{ border: 'none' }}
                  />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-gray-700">Embed Code:</span>
                  <CopyButton text={iframeCode} />
                </div>
                <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded-lg overflow-x-auto">
                  {iframeCode}
                </pre>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
