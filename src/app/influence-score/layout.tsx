import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Influence Score Rankings — OpenLobby',
  description: 'Composite influence scores ranking the most powerful lobbying clients based on spend, revolving door connections, issues lobbied, and more.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
