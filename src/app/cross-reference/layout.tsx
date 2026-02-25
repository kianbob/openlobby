import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Lobbying vs. Federal Contracts Cross-Reference',
  description: 'Cross-reference lobbying spending with federal contract awards. See which companies spend millions lobbying and get billions in government contracts.',
  openGraph: {
    title: 'Lobbying vs. Federal Contracts Cross-Reference',
    description: 'Cross-reference lobbying spending with federal contract awards.',
    url: 'https://www.openlobby.us/cross-reference',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
