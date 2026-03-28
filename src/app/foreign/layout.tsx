import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foreign Lobbying: 1,000+ Entities From 50+ Countries Lobby the US Government',
  description: 'Which countries lobby Congress? The UK leads with 474 filings, Canada 312, China 165. Search the foreign influence database — every foreign entity registered to lobby Washington.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
