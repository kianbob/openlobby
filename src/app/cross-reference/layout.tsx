import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cross-Reference: Lobbying Spend vs. Federal Contracts — The ROI of Influence',
  description: 'We matched lobbying disclosures with USASpending.gov contracts. The results are staggering: top contractors get $49,536 back for every $1 lobbied. Explore the data.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
