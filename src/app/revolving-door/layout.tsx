import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Revolving Door',
  description: 'Thousands of former government officials now lobby Congress. Explore the revolving door between government and K Street.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
