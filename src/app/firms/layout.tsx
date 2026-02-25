import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying Firms',
  description: 'Explore top lobbying firms in Washington. See which firms represent the most clients and earn the most revenue.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
