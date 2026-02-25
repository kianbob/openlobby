import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbyists Directory',
  description: 'Search individual lobbyists. Find revolving-door officials, top filers, and their client lists.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
