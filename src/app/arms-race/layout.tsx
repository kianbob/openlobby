import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying Arms Race — Surge Tracker',
  description: 'Track which lobbying issues are surging or declining quarter over quarter. A real-time heat map of lobbying activity.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
