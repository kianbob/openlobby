import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'First-Time Filers: Meet the Companies That Just Started Lobbying Washington',
  description: '6,997 organizations filed lobbying disclosures for the first time in 2025 — from AI startups to hospital chains to wedding platforms. What drove them to K Street?',
  openGraph: {
    title: 'First-Time Filers: Meet the Companies That Just Started Lobbying Washington',
    description: 'Nearly 7,000 new organizations started lobbying in 2025. AI companies, crypto firms, hospitals, and even wedding marketplaces are hiring lobbyists for the first time.',
    url: 'https://www.openlobby.us/investigations/first-time-filers-2024',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
