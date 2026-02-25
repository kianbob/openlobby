const investigations = [
  {
    slug: 'doge-vs-lobbying',
    title: 'DOGE vs. The Lobbying Machine',
    desc: 'Billions spent lobbying to keep government programs alive. What happens when DOGE comes for the agencies that lobbyists depend on?',
    date: '2026-02-15',
  },
  {
    slug: 'tech-lobbying-war',
    title: "Big Tech's $260M Lobbying Machine",
    desc: 'How Google, Meta, Amazon, and Apple spend hundreds of millions to shape tech regulation.',
    date: '2026-02-20',
  },
  {
    slug: 'pharma-drug-pricing',
    title: '$450M to Keep Drug Prices High',
    desc: "The pharmaceutical industry is the biggest lobbying spender in Washington. Here's what they're buying.",
    date: '2026-02-22',
  },
]

export async function GET() {
  const baseUrl = 'https://www.openlobby.us'
  const items = investigations.map(inv => `
    <item>
      <title><![CDATA[${inv.title}]]></title>
      <link>${baseUrl}/investigations/${inv.slug}</link>
      <description><![CDATA[${inv.desc}]]></description>
      <pubDate>${new Date(inv.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/investigations/${inv.slug}</guid>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>OpenLobby Investigations</title>
    <link>${baseUrl}</link>
    <description>Data-driven investigations into federal lobbying</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
