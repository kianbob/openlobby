import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Latest Lobbying Filings: See What Was Just Filed With the Senate",
  description: "The newest federal lobbying disclosures, updated as they're filed. See which companies just lobbied Congress, how much they spent, and what issues they targeted.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
