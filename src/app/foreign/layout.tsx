import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foreign Lobbying',
  description: 'Foreign governments and corporations spending millions to influence US policy. All disclosed under the LDA.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
