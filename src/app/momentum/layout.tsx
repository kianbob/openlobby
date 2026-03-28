import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying Momentum Tracker: Surging vs. Declining Issues in Real Time',
  description: 'Which lobbying issues are surging and which are dying? Track quarter-over-quarter momentum shifts across all 79 federal issue categories. Live data from Senate filings.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
