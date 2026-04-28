import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The K Street Network: Map Hidden Connections Between Lobbyists & Power',
  description: 'Visualize the web connecting lobbying firms, lobbyists, and clients. Discover which lobbyists juggle multiple firms and which corporations share the same insiders.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
