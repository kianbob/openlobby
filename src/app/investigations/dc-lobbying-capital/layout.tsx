import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '$27,000 Per Person: Why DC Is America\'s True Lobbying Capital',
  description: 'Washington DC has $27,105 in lobbying spending per capita — 89x the national average. Virginia: $305. California: $68. We mapped the geography of influence.',
  openGraph: {
    title: '$27,000 Per Person: Why DC Is America\'s True Lobbying Capital',
    description: 'DC lobbying per capita is $27,105 — 89x the national average. We mapped where lobbying money comes from, state by state.',
    url: 'https://www.openlobby.us/investigations/dc-lobbying-capital',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
