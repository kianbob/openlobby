const investigations = [
  { slug: 'doge-vs-lobbying', title: 'DOGE vs. The Lobbying Machine', desc: 'What happens when DOGE comes for the agencies that lobbyists depend on?', date: '2026-02-15' },
  { slug: 'big-pharma-lobbying', title: "Big Pharma's $452M Lobbying Machine", desc: 'The pharmaceutical industry has spent $452 million lobbying Congress.', date: '2026-02-24' },
  { slug: 'tech-lobbying-war', title: "Big Tech's $150M Lobbying War", desc: 'Google, Meta, Amazon, Apple, Microsoft lobbying on AI, antitrust, privacy.', date: '2026-02-24' },
  { slug: 'revolving-door-exposed', title: 'The Revolving Door Exposed', desc: '5,000 former government officials now lobby their old colleagues.', date: '2026-02-24' },
  { slug: 'foreign-influence', title: 'Foreign Governments Are Lobbying Congress', desc: '1,000+ foreign entities from 50+ countries lobby the US government.', date: '2026-02-24' },
  { slug: 'follow-the-money', title: 'The 8,187x Return on Lobbying', desc: 'Companies spend millions lobbying and get billions in contracts.', date: '2026-02-24' },
  { slug: 'lobbying-statistics', title: 'Federal Lobbying Statistics 2025: Complete Guide', desc: 'Comprehensive federal lobbying statistics — $15.2B total, 650K+ filings.', date: '2026-02-24' },
  { slug: 'what-is-lobbying', title: 'What Is Lobbying? A Complete Guide', desc: 'How lobbying works, who does it, and why $2.7 billion a year buys influence.', date: '2026-02-24' },
  { slug: 'defense-contractor-lobbying', title: "The Pentagon's Lobbying Machine", desc: 'Defense contractors spend millions lobbying for contracts worth billions.', date: '2026-02-24' },
  { slug: 'ai-regulation-fight', title: 'The Battle to Shape AI Policy', desc: 'Tech giants are spending billions to influence AI regulation.', date: '2026-02-24' },
  { slug: 'tariff-lobbying-surge', title: 'The 2025 Tariff Lobbying Explosion', desc: 'As tariffs return, lobbying on trade is surging.', date: '2026-02-24' },
  { slug: 'crypto-lobbying-explosion', title: "Crypto's K Street Invasion", desc: 'The fastest-growing lobbying sector in DC.', date: '2026-02-24' },
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
    <description>Data-driven investigations into federal lobbying — who spends, who benefits, and what it means.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
