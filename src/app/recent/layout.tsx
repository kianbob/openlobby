import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recent Filings — Latest Lobbying Disclosures',
  description: 'Browse the 50 most recent federal lobbying filings from the Senate LDA database. See who is lobbying, how much they spent, and what issues they targeted.',
}

export default function RecentLayout({ children }: { children: React.ReactNode }) {
  return children
}
