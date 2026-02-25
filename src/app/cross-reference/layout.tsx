import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cross-Reference Intelligence',
  description: 'Connect the dots between lobbying spend and government contracts. See how lobbying correlates with federal spending across defense, pharma, and more.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
