import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Text Analysis — What Are They Lobbying About?',
  description: 'Analyze the language of lobbying. See which words, phrases, and bills appear most in lobbying disclosures.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
