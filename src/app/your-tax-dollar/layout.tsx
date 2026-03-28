import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Your Tax Dollar & Lobbying: $37.50 Per Taxpayer Goes to Fund Influence",
  description: "How much of YOUR tax money funds lobbying? At $6B/year and 160M taxpayers, it's $37.50 each. See the breakdown by industry — healthcare, defense, tech, and more.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
