import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying Spending Trends',
  description: 'Track federal lobbying spending year by year. See how lobbying has grown from 2018 to 2025.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
