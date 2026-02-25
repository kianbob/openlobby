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
  { slug: 'lobbying-vs-contracts', title: 'For Every $1 They Lobby, They Get $49,536 Back', desc: 'Cross-referenced lobbying with USASpending contract data. 21 contractors, $281M lobbying, $183.8B contracts.', date: '2026-02-24' },
  { slug: 'healthcare-3-billion-bet', title: "The Healthcare Lobby's $3 Billion Bet", desc: "Healthcare is the #1 lobbied issue. $3.7B spent lobbying on healthcare since 2018.", date: '2026-02-24' },
  { slug: 'seasonal-lobbying', title: "Washington's Busiest Quarter", desc: 'The hidden calendar of lobbying — Q4 is king with $9.9B in income.', date: '2026-02-24' },
  { slug: 'the-22000-percent-roi', title: "The 22,000% ROI: How Lobbying Became America's Best Investment", desc: '93 firms spent $283M lobbying for a tax holiday and saved $62.5B.', date: '2026-02-24' },
  { slug: 'first-time-filers-2024', title: 'First-Time Filers: Meet the Companies That Just Started Lobbying', desc: '6,997 organizations filed lobbying disclosures for the first time in 2025.', date: '2026-02-24' },
  { slug: 'the-revolving-door-premium', title: 'The 369% Premium: Hard Proof That the Revolving Door Pays', desc: 'Firms with ex-government lobbyists earn 369% more revenue.', date: '2026-02-24' },
  { slug: 'dc-lobbying-capital', title: "$27,000 Per Person: Why DC Is America's True Lobbying Capital", desc: 'DC has $27,105 in lobbying per capita — 89x the national average.', date: '2026-02-24' },
  { slug: 'issue-arms-race', title: 'The Lobbying Arms Race: When Industries Go to War', desc: 'Healthcare + Medicare: 31,240 co-filings. The permanent battlegrounds.', date: '2026-02-24' },
  { slug: 'wall-street-washington-pipeline', title: 'The Wall Street–Washington Pipeline', desc: 'How the financial sector spends billions lobbying to write its own rules.', date: '2026-02-25' },
  { slug: 'big-oil-climate-lobby', title: "Big Oil's Climate Lobby", desc: 'Energy companies spend hundreds of millions lobbying against climate regulation.', date: '2026-02-25' },
  { slug: 'silicon-valley-antitrust', title: "Silicon Valley vs. Antitrust", desc: 'Google, Apple, Amazon, Meta, and Microsoft have spent $150M+ lobbying against antitrust regulation.', date: '2026-02-25' },
  { slug: 'healthcare-insurance-lobby', title: 'The Health Insurance Lobby', desc: 'UnitedHealth, Cigna, Elevance, and AHIP fight Medicare expansion and drug pricing reform.', date: '2026-02-25' },
  { slug: 'the-lobbying-industrial-complex', title: 'The Lobbying Industrial Complex', desc: '650,000 filings. $15.2 billion. 29,000+ lobbyists. The machine that runs Washington.', date: '2026-02-25' },
]

const analysisPages = [
  { slug: 'new-entrants', title: 'First-Time Filers: New Lobbying Entrants', desc: 'Track new organizations entering the lobbying game.', date: '2026-02-24' },
  { slug: 'momentum', title: "What's Surging Now: Lobbying Momentum", desc: 'Quarter-over-quarter momentum in lobbying spending.', date: '2026-02-24' },
  { slug: 'concentration', title: 'The Power Players: Firm Concentration Analysis', desc: 'How dependent are lobbying firms on their biggest clients?', date: '2026-02-24' },
  { slug: 'issue-battles', title: 'Issue Collisions: When Industries Clash', desc: 'Which lobbying issues get fought together.', date: '2026-02-24' },
  { slug: 'geographic', title: 'The Lobbying Map: Where Influence Comes From', desc: 'Lobbying spending by state and per capita.', date: '2026-02-24' },
  { slug: 'filing-patterns', title: 'Inside the Filing Room', desc: 'Filing volumes, types, and seasonal patterns.', date: '2026-02-24' },
]

export async function GET() {
  const baseUrl = 'https://www.openlobby.us'
  const analysisItems = analysisPages.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${baseUrl}/${p.slug}</link>
      <description><![CDATA[${p.desc}]]></description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/${p.slug}</guid>
    </item>`).join('')
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
    ${analysisItems}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
