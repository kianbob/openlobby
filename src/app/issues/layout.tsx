import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lobbying by Issue',
  description: '79 issue categories from healthcare to defense. See which industries spend the most on each policy area.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
