import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top Lobbying Clients',
  description: 'Browse the biggest spenders in federal lobbying. Search thousands of clients by name and spending.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
