import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search — Find Clients, Firms, Lobbyists & Issues',
  description: 'Search across 37,000+ lobbying clients, firms, lobbyists, and issues in the OpenLobby database.',
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
