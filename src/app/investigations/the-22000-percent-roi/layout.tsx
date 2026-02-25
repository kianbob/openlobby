import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 22,000% ROI: How Lobbying Became America\'s Best Investment — OpenLobby',
  description: 'Academic research proves lobbying returns 22,000%. Our data on 650,000+ filings and $15.2B in spending confirms it — the more you lobby, the more you get.',
  openGraph: {
    title: 'The 22,000% ROI: How Lobbying Became America\'s Best Investment',
    description: '93 firms spent $283M lobbying for a tax holiday and saved $62.5B. That\'s a 22,000% return. Our data confirms lobbying is the best investment in America.',
    url: 'https://www.openlobby.us/investigations/the-22000-percent-roi',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
