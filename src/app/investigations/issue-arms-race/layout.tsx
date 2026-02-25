import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Lobbying Arms Race: When Industries Go to War Over the Same Issues — OpenLobby',
  description: 'Healthcare + Medicare: 31,240 co-filings. Budget + Defense: 23,981. We mapped the lobbying battlegrounds where opposing industries collide on the same issues.',
  openGraph: {
    title: 'The Lobbying Arms Race: When Industries Go to War Over the Same Issues',
    description: '287,262 multi-issue lobbying filings reveal the permanent battlegrounds of American policy. See which issue pairs generate the most lobbying warfare.',
    url: 'https://www.openlobby.us/investigations/issue-arms-race',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
