import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Embeddable Widgets — OpenLobby',
  description: 'Embed lobbying data widgets on your site. Free for journalists, researchers, and publications.',
}

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return children
}
