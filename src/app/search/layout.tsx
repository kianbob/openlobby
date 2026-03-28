import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Federal Lobbying Data — Clients, Firms, Lobbyists & Issues',
  description: 'Search across 37,994 clients, 7,757 firms, 23,545 lobbyists, and 79 issue categories. The most powerful federal lobbying search engine, powered by 726,000+ Senate filings.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
