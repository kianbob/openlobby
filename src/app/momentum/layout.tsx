import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying Momentum Tracker: Which Issues Are Surging Right Now?',
  description: 'Track which lobbying issues are surging and which are dying — quarter-over-quarter shifts across 79 federal issue categories. Updated from live Senate filings.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
