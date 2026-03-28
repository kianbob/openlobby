import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The K Street Network: How Lobbyists, Firms & Clients Are All Connected',
  description: 'Map the hidden connections between lobbying firms, lobbyists, and clients. See which lobbyists work for multiple firms and which firms share the most lobbyists.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
