import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Geographic Lobbying Map: Every State's Spending, Per Capita & Top Issues",
  description: "Interactive map of federal lobbying by state. DC: $27,105/capita. Virginia: $305. Your state? See spending, filing counts, client counts, and top issues for all 50 states.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
