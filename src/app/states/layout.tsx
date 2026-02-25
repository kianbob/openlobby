import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying by State',
  description: 'Federal lobbying activity by state. See which states have the most lobbying clients and spending.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
