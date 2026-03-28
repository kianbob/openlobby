import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Influence Score Rankings: The Most Powerful Lobbying Clients in America',
  description: 'Composite influence scores ranking lobbying clients by spend, revolving door connections, filing frequency, and issue breadth. Who has the most pull in Washington?',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
