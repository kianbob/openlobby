import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying ROI Calculator',
  description: 'See which companies get the biggest return on their lobbying investment. Compare lobbying spend to government contracts received.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
