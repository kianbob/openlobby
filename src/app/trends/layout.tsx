import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying Trends 2018-2025: How $37.7B in Spending Changed Washington',
  description: 'Year-by-year lobbying spending trends. See how total spending grew, which years spiked, and how filings and registrations shifted from 2018 to 2025. Interactive charts.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
