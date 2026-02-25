import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Lobbying Data',
  description: 'Search federal lobbying data — clients, firms, lobbyists, and issues.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
