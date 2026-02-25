import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare Lobbying Clients & Firms | OpenLobby',
  description: 'Compare lobbying spending between two clients or firms side by side. See which organizations spend more and file more lobbying reports.',
}

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return children
}
