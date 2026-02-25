import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search — Find Clients, Firms, Lobbyists & Issues',
  description: 'Search across 46,000+ lobbying clients, 7,700+ firms, 23,500+ lobbyists, and 79 issue categories. Find any organization lobbying Congress in our $37.7B database of Senate LDA filings.',
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
