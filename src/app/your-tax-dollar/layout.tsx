import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Does Lobbying Cost You?',
  description: 'Calculate your personal share of the $6.0 billion spent lobbying Congress. See which industries spend the most influencing the laws that affect your life.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
