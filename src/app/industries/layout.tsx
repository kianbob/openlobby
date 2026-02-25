import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying by Industry',
  description: 'See which industries spend the most on federal lobbying. From pharma to tech to defense.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
