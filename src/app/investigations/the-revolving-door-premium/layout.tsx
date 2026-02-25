import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 369% Premium: Hard Proof That the Revolving Door Pays',
  description: 'Lobbying firms with ex-government employees earn 369% more revenue and have 4.9x more clients. We quantified the revolving door premium with 650,000+ filings.',
  openGraph: {
    title: 'The 369% Premium: Hard Proof That the Revolving Door Pays',
    description: 'Firms with revolving door lobbyists average $8.25M in revenue vs $1.76M without. The premium is 369%. Here\'s the data.',
    url: 'https://www.openlobby.us/investigations/the-revolving-door-premium',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
