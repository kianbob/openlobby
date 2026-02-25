import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Lobbyists Actually Write — Language of Influence',
  description: 'Analyze the language of lobbying. Trending words, bills mentioned, and lobbying descriptions across 650,000+ filings.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
