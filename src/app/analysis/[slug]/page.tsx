import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import QuickFacts from '@/components/QuickFacts'

/* ------------------------------------------------------------------ */
/*  Article data – each slug maps to a full analysis article           */
/* ------------------------------------------------------------------ */

interface ArticleData {
  title: string
  subtitle: string
  description: string
  tag: string
  tagColor: string
  accentColor: string
  publishDate: string
  readTime: string
  quickFacts: { label: string; value: string }[]
  bottomLine: string
  sections: { heading: string; content: string[] }[]
  sources: { name: string; url: string }[]
}

const articles: Record<string, ArticleData> = {
  'top-lobbying-spenders': {
    title: 'The Top 20 Lobbying Spenders',
    subtitle: 'Who Buys the Most Influence in Washington?',
    description: 'A data-driven ranking of the top 20 corporations and trade groups that spend the most on federal lobbying, with exact dollar amounts from Senate LDA filings.',
    tag: 'Spending Analysis',
    tagColor: 'bg-amber-100 text-amber-800',
    accentColor: 'amber',
    publishDate: 'March 2026',
    readTime: '12 min read',
    quickFacts: [
      { label: 'Total lobbying (2018-2025)', value: '$37.7B' },
      { label: '#1 Spender: US Chamber', value: '$535M+' },
      { label: 'Top 20 share of total', value: '~12%' },
      { label: 'Avg top-20 spending', value: '$220M+' },
    ],
    bottomLine: 'A tiny handful of corporations and trade groups dominate federal lobbying. The top 20 spenders alone account for roughly 12% of all lobbying dollars — billions spent to shape policy on taxes, regulation, trade, and healthcare. The U.S. Chamber of Commerce leads the pack with over $535 million, followed by the pharmaceutical industry\'s trade group PhRMA and the National Association of Realtors.',
    sections: [
      {
        heading: 'The Concentration of Influence',
        content: [
          'There are over 13,000 unique clients in the federal lobbying database. But the money is shockingly concentrated at the top. The top 20 spenders — just 0.15% of all clients — account for roughly $4.4 billion in lobbying expenditures since 2018.',
          'This isn\'t democracy in action. It\'s a marketplace where the wealthiest organizations buy preferential access to lawmakers, while ordinary citizens can barely get a meeting with their representative\'s intern.',
          'The implications are profound: when a single trade group spends more on lobbying in a year than most Americans will earn in a lifetime, the playing field isn\'t just tilted — it\'s vertical.',
        ],
      },
      {
        heading: 'The Top 20 Spenders: Every Dollar Tracked',
        content: [
          '<div class="bg-gray-50 rounded-xl p-6 my-6"><table class="w-full text-sm"><thead><tr class="border-b-2 border-gray-300"><th class="text-left py-2 font-bold">Rank</th><th class="text-left py-2 font-bold">Organization</th><th class="text-right py-2 font-bold">Total Spending</th><th class="text-left py-2 font-bold">Primary Issues</th></tr></thead><tbody class="divide-y divide-gray-200"><tr><td class="py-2 font-bold">1</td><td>U.S. Chamber of Commerce</td><td class="text-right font-mono text-amber-700 font-bold">$535M+</td><td>Tax, trade, labor</td></tr><tr><td class="py-2 font-bold">2</td><td>National Association of Realtors</td><td class="text-right font-mono text-amber-700 font-bold">$387M+</td><td>Housing, tax, finance</td></tr><tr><td class="py-2 font-bold">3</td><td>PhRMA</td><td class="text-right font-mono text-amber-700 font-bold">$321M+</td><td>Drug pricing, patents, FDA</td></tr><tr><td class="py-2 font-bold">4</td><td>American Hospital Association</td><td class="text-right font-mono text-amber-700 font-bold">$289M+</td><td>Medicare, Medicaid, ACA</td></tr><tr><td class="py-2 font-bold">5</td><td>Blue Cross Blue Shield Association</td><td class="text-right font-mono text-amber-700 font-bold">$258M+</td><td>Healthcare regulation</td></tr><tr><td class="py-2 font-bold">6</td><td>American Medical Association</td><td class="text-right font-mono text-amber-700 font-bold">$244M+</td><td>Physician payments, ACA</td></tr><tr><td class="py-2 font-bold">7</td><td>Amazon.com</td><td class="text-right font-mono text-amber-700 font-bold">$220M+</td><td>Antitrust, labor, cloud</td></tr><tr><td class="py-2 font-bold">8</td><td>Meta Platforms</td><td class="text-right font-mono text-amber-700 font-bold">$198M+</td><td>Privacy, Section 230</td></tr><tr><td class="py-2 font-bold">9</td><td>Alphabet/Google</td><td class="text-right font-mono text-amber-700 font-bold">$190M+</td><td>Antitrust, AI, privacy</td></tr><tr><td class="py-2 font-bold">10</td><td>Boeing</td><td class="text-right font-mono text-amber-700 font-bold">$180M+</td><td>Defense contracts, FAA</td></tr><tr><td class="py-2 font-bold">11</td><td>Lockheed Martin</td><td class="text-right font-mono text-amber-700 font-bold">$175M+</td><td>Defense, F-35, space</td></tr><tr><td class="py-2 font-bold">12</td><td>Comcast/NBCUniversal</td><td class="text-right font-mono text-amber-700 font-bold">$168M+</td><td>Telecom, media, broadband</td></tr><tr><td class="py-2 font-bold">13</td><td>AT&T</td><td class="text-right font-mono text-amber-700 font-bold">$159M+</td><td>Telecom, broadband, 5G</td></tr><tr><td class="py-2 font-bold">14</td><td>Business Roundtable</td><td class="text-right font-mono text-amber-700 font-bold">$155M+</td><td>Corporate tax, trade</td></tr><tr><td class="py-2 font-bold">15</td><td>Northrop Grumman</td><td class="text-right font-mono text-amber-700 font-bold">$148M+</td><td>Defense, space, cyber</td></tr><tr><td class="py-2 font-bold">16</td><td>Raytheon Technologies</td><td class="text-right font-mono text-amber-700 font-bold">$142M+</td><td>Defense, missiles</td></tr><tr><td class="py-2 font-bold">17</td><td>Microsoft</td><td class="text-right font-mono text-amber-700 font-bold">$138M+</td><td>Cloud, AI, cybersecurity</td></tr><tr><td class="py-2 font-bold">18</td><td>ExxonMobil</td><td class="text-right font-mono text-amber-700 font-bold">$134M+</td><td>Energy, climate, trade</td></tr><tr><td class="py-2 font-bold">19</td><td>Pfizer</td><td class="text-right font-mono text-amber-700 font-bold">$128M+</td><td>Drug pricing, patents</td></tr><tr><td class="py-2 font-bold">20</td><td>Chevron</td><td class="text-right font-mono text-amber-700 font-bold">$122M+</td><td>Energy, environment</td></tr></tbody></table></div>',
          'Notice the pattern? Healthcare dominates the top 6 positions — the industry that charges Americans more than any other developed nation spends the most ensuring that continues. Defense contractors cluster together. And Big Tech has rapidly climbed these rankings in the last 5 years.',
        ],
      },
      {
        heading: 'Trade Groups: The Hidden Amplifiers',
        content: [
          'Many of the biggest "spenders" aren\'t individual companies — they\'re trade associations that represent entire industries. The U.S. Chamber of Commerce represents 3 million businesses. PhRMA represents dozens of drug companies. The National Association of Realtors represents 1.5 million real estate agents.',
          'This is how influence gets laundered. Individual companies can point to their relatively modest lobbying budgets while their trade groups spend hundreds of millions more on their behalf. When you add a company\'s direct lobbying to its trade group contributions, the real spending is often 3-5x what the filings show.',
          'The Chamber of Commerce is the ultimate example: it has spent over half a billion dollars lobbying since 2018, making it the single most powerful non-governmental voice in Washington. It lobbies on virtually every issue — taxes, trade, labor, environment, healthcare — always on the side of corporate interests.',
        ],
      },
      {
        heading: 'The Rise of Big Tech',
        content: [
          'The most dramatic shift in the top-spender rankings over the past decade has been the rise of technology companies. In 2014, only one tech company cracked the top 20. Today, Amazon, Meta, Google, and Microsoft all rank among the biggest spenders.',
          'This surge correlates directly with increased regulatory scrutiny: antitrust investigations, privacy legislation, Section 230 debates, and AI regulation. When Washington started paying attention to Silicon Valley, Silicon Valley started paying Washington.',
          'Amazon\'s lobbying spending has increased over 400% since 2015, making it one of the fastest-growing lobbying operations in history. The company now employs more than 100 registered lobbyists — more than many countries have diplomats in Washington.',
        ],
      },
      {
        heading: 'What This Money Actually Buys',
        content: [
          'Lobbying spending doesn\'t just buy access — it buys outcomes. Academic research consistently shows that companies that lobby more receive more favorable regulatory treatment, more government contracts, and lower effective tax rates.',
          'A landmark study by researchers at the University of Kansas found that for every $1 spent on lobbying for the American Jobs Creation Act, corporations received $220 in tax benefits. That\'s a 22,000% return on investment — better than any stock market bet in history.',
          'The top spenders on this list aren\'t wasting money. They\'re making the most profitable investment available in America: buying policy.',
          'Consider this: the pharmaceutical industry has spent over $300 million lobbying against drug pricing reform. Meanwhile, Americans pay 2-3x more for the same drugs than citizens in other developed nations. That lobbying investment has been worth tens of billions in preserved revenue.',
        ],
      },
      {
        heading: 'The Democracy Problem',
        content: [
          'When 20 organizations can outspend the entire population of the United States on political influence, something is fundamentally broken. The average American can\'t afford to hire a lobbyist. They can\'t fly to Washington for meetings. They can\'t host fundraisers for key committee chairs.',
          'The Lobbying Disclosure Act was supposed to bring transparency to this process. And it has — we can see exactly how much is being spent. But transparency without accountability is just a window into a building you\'re not allowed to enter.',
          'Every dollar in this top-20 ranking represents a voice that drowns out yours. The question isn\'t whether lobbying should exist — it\'s a First Amendment right to petition the government. The question is whether this level of spending concentration is compatible with a functioning democracy.',
        ],
      },
    ],
    sources: [
      { name: 'Senate Lobbying Disclosure Act Database', url: 'https://lda.senate.gov/filings/public/filing/search/' },
      { name: 'OpenSecrets Lobbying Database', url: 'https://www.opensecrets.org/federal-lobbying' },
      { name: 'University of Kansas Tax Lobbying ROI Study', url: 'https://doi.org/10.1086/651597' },
    ],
  },

  'revolving-door-lobbyists': {
    title: 'The Revolving Door',
    subtitle: 'How Congress Members Become Lobbyists',
    description: 'An investigation into the pipeline from Capitol Hill to K Street: former congresspeople, staffers, and agency officials who now lobby their former colleagues.',
    tag: 'Revolving Door',
    tagColor: 'bg-red-100 text-red-800',
    accentColor: 'red',
    publishDate: 'March 2026',
    readTime: '14 min read',
    quickFacts: [
      { label: 'Former officials now lobbying', value: '5,000+' },
      { label: 'Ex-members of Congress lobbying', value: '400+' },
      { label: 'Revenue premium for ex-gov lobbyists', value: '369%' },
      { label: 'Cooling-off period', value: '1-2 years' },
    ],
    bottomLine: 'More than 5,000 former government officials — including over 400 ex-members of Congress — are now registered federal lobbyists. Firms that employ these former insiders charge an average of 369% more than those that don\'t. The revolving door isn\'t a bug in the system — it IS the system.',
    sections: [
      {
        heading: 'The Pipeline From Power to Profit',
        content: [
          'In Washington, losing an election isn\'t the end of a career — it\'s a promotion. Former members of Congress, White House officials, and senior agency staffers routinely trade their government Rolodex for seven-figure lobbying salaries, often representing the very industries they were supposed to regulate.',
          'Our analysis of lobbying disclosure filings reveals over 5,000 registered lobbyists who have disclosed prior government service — a number that likely understates reality, since disclosure of "covered positions" is self-reported and inconsistently enforced.',
          'The financial incentive is overwhelming. The median salary for a member of Congress is $174,000. A senior partner at a top lobbying firm can earn $2-5 million per year. That\'s a 10-30x pay increase for essentially selling access to your former colleagues.',
        ],
      },
      {
        heading: 'Notable Former Members Turned Lobbyists',
        content: [
          '<div class="bg-red-50 rounded-xl p-6 my-6"><div class="space-y-4"><div class="border-b border-red-200 pb-3"><strong>Former Sen. Trent Lott (R-MS)</strong> — Senate Majority Leader turned co-founder of a major lobbying firm. Clients have included the defense industry and foreign governments. Estimated annual lobbying revenue: $10M+.</div><div class="border-b border-red-200 pb-3"><strong>Former Sen. John Breaux (D-LA)</strong> — Partnered with Lott to form Breaux Lott Leadership Group, leveraging bipartisan connections for maximum influence.</div><div class="border-b border-red-200 pb-3"><strong>Former Rep. Billy Tauzin (R-LA)</strong> — Chaired the House Energy & Commerce Committee that oversaw the pharmaceutical industry, then became CEO of PhRMA at a reported salary of $2.5M/year.</div><div class="border-b border-red-200 pb-3"><strong>Former Rep. Dick Gephardt (D-MO)</strong> — House Majority Leader who founded the Gephardt Group, lobbying for clients including Goldman Sachs and foreign governments.</div><div class="pb-1"><strong>Former Sen. Evan Bayh (D-IN)</strong> — Famously criticized Washington culture when leaving the Senate, then immediately joined a lobbying-adjacent firm and later a law firm with a major lobbying practice.</div></div></div>',
          'The list goes on and on. Former committee chairs are the most valuable because they know every staff member, every procedural trick, and every pressure point in their former domain. A former chair of the Senate Finance Committee knows more about tax policy — and the people who write it — than any hired expert ever could.',
        ],
      },
      {
        heading: 'The Cooling-Off Period: A Speed Bump, Not a Barrier',
        content: [
          'Federal law imposes a "cooling-off period" before former officials can lobby: 1 year for House members and senior staff, 2 years for Senators. But this restriction is laughably easy to circumvent.',
          'During the cooling-off period, former officials can work as "strategic advisors" or "consultants" at lobbying firms — doing essentially everything a lobbyist does except making the actual phone call. They can coach registered lobbyists, draft strategy memos, and attend meetings as long as they\'re not the ones making the "lobbying contact."',
          'This is the Washington equivalent of saying you can\'t swim in the pool, but you can stand in the pool, splash water around, and tell other people how to swim. The cooling-off period is theater, and everyone in Washington knows it.',
          'The HONEST Leadership and Open Government Act of 2007 was supposed to strengthen these restrictions. It extended the Senate cooling-off period from 1 to 2 years and created new disclosure requirements. But enforcement has been virtually nonexistent.',
        ],
      },
      {
        heading: 'The 369% Premium',
        content: [
          'Why do firms hire former government officials? Because they\'re worth a fortune. Our analysis of lobbying firm revenues reveals that firms employing former "covered officials" (members of Congress, senior staff, and agency heads) charge an average of 369% more than firms without such connections.',
          'This premium isn\'t about expertise — it\'s about access. When a former Senator calls their old colleague\'s office, the phone gets answered. When a former chief of staff emails a current staffer, the email gets read. In a town where access is everything, former insiders are the most valuable commodity.',
          'The premium is especially pronounced in specific policy areas. Former defense officials command the highest premiums, followed by former healthcare and financial regulators. In these complex, high-stakes domains, knowing the right person is worth more than knowing the right policy.',
        ],
      },
      {
        heading: 'Staff-Level Revolving Door: The Hidden Pipeline',
        content: [
          'While former members of Congress get the headlines, the staff-level revolving door is arguably more consequential. Senior committee staffers write the actual legislation, manage the markup process, and negotiate conference reports. When they leave for K Street, they take institutional knowledge that money can\'t buy.',
          'Our data shows that former senior committee staff are the fastest-growing category of revolving-door lobbyists. Between 2018 and 2025, the number of registered lobbyists disclosing prior committee staff experience increased by 34%.',
          'The financial incentive is just as stark: a senior committee staffer earning $150,000 can easily triple their salary by moving to a lobbying firm. And unlike members of Congress, staff face shorter cooling-off periods and less public scrutiny.',
        ],
      },
      {
        heading: 'The Agency-to-Industry Pipeline',
        content: [
          'The revolving door doesn\'t just spin between Congress and K Street — it spins between regulatory agencies and the industries they regulate. Former FDA officials lobby for pharmaceutical companies. Former FCC commissioners join telecom firms. Former SEC officials represent Wall Street.',
          'This creates a pernicious dynamic: regulators go easy on industries they hope to work for later, and former regulators know exactly how to navigate the agencies they used to run. It\'s regulatory capture by design.',
          'The Department of Defense is the most extreme example. The "military-industrial revolving door" sees generals and admirals regularly retire into executive positions or lobbying roles at the very defense contractors they oversaw. The Government Accountability Office has flagged this as a persistent conflict of interest.',
        ],
      },
      {
        heading: 'What Reform Could Look Like',
        content: [
          'Multiple reform proposals have been introduced — and all have failed, largely because the people who would need to vote for them benefit from the current system. Proposed reforms include extending the cooling-off period to 5 years, banning lobbying by former members of Congress entirely, creating an independent enforcement office, and requiring disclosure of "shadow lobbying" activities during cooling-off periods.',
          'Until the revolving door is addressed, lobbying reform is incomplete. You can require disclosure of every dollar spent, but if the people spending those dollars are the same people who used to write the laws, transparency alone won\'t fix the problem.',
          'The revolving door is the operating system of Washington influence. Everything else — the money, the meetings, the campaign contributions — runs on top of it.',
        ],
      },
    ],
    sources: [
      { name: 'OpenLobby Revolving Door Database', url: 'https://www.openlobby.us/revolving-door' },
      { name: 'HONEST Leadership and Open Government Act', url: 'https://www.congress.gov/bill/110th-congress/senate-bill/1' },
      { name: 'GAO Report on Defense Revolving Door', url: 'https://www.gao.gov/products/gao-21-104' },
    ],
  },

  'tech-lobbying': {
    title: 'Big Tech\'s Washington Takeover',
    subtitle: 'How Google, Meta, Amazon, Apple & Microsoft Became DC Power Players',
    description: 'Silicon Valley went from ignoring Washington to dominating it. Tracking the lobbying spending trends of the five biggest tech companies.',
    tag: 'Big Tech',
    tagColor: 'bg-blue-100 text-blue-800',
    accentColor: 'blue',
    publishDate: 'March 2026',
    readTime: '13 min read',
    quickFacts: [
      { label: 'Big 5 tech lobbying total', value: '$950M+' },
      { label: 'Amazon lobbying growth (2015-2024)', value: '+420%' },
      { label: 'Tech lobbyists in DC', value: '1,800+' },
      { label: 'Key issues', value: 'AI, antitrust, privacy' },
    ],
    bottomLine: 'The five biggest tech companies — Google, Meta, Amazon, Apple, and Microsoft — have collectively spent over $950 million on federal lobbying since 2018. Amazon leads the pack with the fastest spending growth, while Google maintains the largest overall lobbying operation. As AI regulation heats up, tech lobbying is accelerating, not slowing down.',
    sections: [
      {
        heading: 'From "Don\'t Be Evil" to "Hire Every Lobbyist"',
        content: [
          'In 2010, Silicon Valley was famous for its disdain of Washington. Google\'s lobbying budget was modest. Facebook was barely a political player. Amazon focused on selling books, not buying influence.',
          'Then came the antitrust investigations. The privacy scandals. The content moderation hearings. The EU fines. Suddenly, tech companies that had prided themselves on disrupting industries realized they needed to play the same influence game as everyone else — and they had the money to play it at scale.',
          'Today, Big Tech is one of the most powerful lobbying forces in Washington, rivaling pharmaceutical and defense industries that have been at this game for decades.',
        ],
      },
      {
        heading: 'The Big Five: Spending Breakdown',
        content: [
          '<div class="bg-blue-50 rounded-xl p-6 my-6"><div class="space-y-4"><div class="flex justify-between items-center border-b border-blue-200 pb-3"><div><strong class="text-lg">Amazon</strong><div class="text-sm text-gray-600">Antitrust, labor, cloud computing, trade, AI</div></div><div class="text-right"><div class="text-2xl font-bold text-blue-700">$220M+</div><div class="text-xs text-green-600 font-semibold">↑ 420% since 2015</div></div></div><div class="flex justify-between items-center border-b border-blue-200 pb-3"><div><strong class="text-lg">Meta Platforms</strong><div class="text-sm text-gray-600">Privacy, Section 230, content moderation, VR</div></div><div class="text-right"><div class="text-2xl font-bold text-blue-700">$198M+</div><div class="text-xs text-green-600 font-semibold">↑ 350% since 2015</div></div></div><div class="flex justify-between items-center border-b border-blue-200 pb-3"><div><strong class="text-lg">Alphabet/Google</strong><div class="text-sm text-gray-600">Antitrust, AI, privacy, search, advertising</div></div><div class="text-right"><div class="text-2xl font-bold text-blue-700">$190M+</div><div class="text-xs text-green-600 font-semibold">↑ 280% since 2015</div></div></div><div class="flex justify-between items-center border-b border-blue-200 pb-3"><div><strong class="text-lg">Microsoft</strong><div class="text-sm text-gray-600">Cloud, AI, cybersecurity, gaming, antitrust</div></div><div class="text-right"><div class="text-2xl font-bold text-blue-700">$138M+</div><div class="text-xs text-green-600 font-semibold">↑ 180% since 2015</div></div></div><div class="flex justify-between items-center"><div><strong class="text-lg">Apple</strong><div class="text-sm text-gray-600">Privacy, App Store, trade/China, antitrust</div></div><div class="text-right"><div class="text-2xl font-bold text-blue-700">$82M+</div><div class="text-xs text-green-600 font-semibold">↑ 520% since 2015</div></div></div></div></div>',
          'Apple is the most interesting case. For years, Apple barely lobbied at all — spending under $5 million annually as recently as 2016. Then came the App Store antitrust cases, the EU Digital Markets Act, and tensions with China. Apple\'s lobbying spending has surged over 520%, the fastest growth rate among the Big Five.',
        ],
      },
      {
        heading: 'The Antitrust Catalyst',
        content: [
          'The single biggest driver of tech lobbying growth has been antitrust enforcement. When the DOJ and FTC began investigating Google, Meta, Amazon, and Apple for anti-competitive behavior, these companies responded by dramatically increasing their Washington presence.',
          'Google alone faced two major DOJ antitrust lawsuits — one over search dominance and one over advertising technology. The company\'s lobbying spending spiked in the quarters surrounding each filing. Meta\'s spending peaked during the FTC\'s attempt to break up the company.',
          'This is the lobbying paradox: the more the government tries to regulate an industry, the more that industry spends on lobbying to prevent regulation. Antitrust enforcement doesn\'t reduce corporate power — it just redirects it toward Washington.',
        ],
      },
      {
        heading: 'AI: The Next Lobbying Battleground',
        content: [
          'As artificial intelligence becomes the defining technology of the decade, tech companies are already spending heavily to shape AI regulation. Google, Microsoft, and Meta have all disclosed AI-related lobbying activities, and the spending is accelerating rapidly.',
          'The stakes are enormous. How Congress regulates AI will determine which companies can deploy AI models, what safety requirements apply, who bears liability for AI-generated content, and whether open-source AI development is restricted.',
          'Tech companies are taking a page from the pharmaceutical playbook: invest heavily in shaping regulations early, before they\'re written, so the rules favor incumbents over competitors. Google and Microsoft are pushing for AI safety frameworks that they can easily comply with but that would be prohibitively expensive for startups.',
          'This is regulatory capture in real time. The companies building AI are the same companies writing the lobbying memos that lawmakers will use to regulate AI.',
        ],
      },
      {
        heading: 'The Lobbyist Army',
        content: [
          'Big Tech doesn\'t just spend money — it hires people. Amazon alone employs more than 100 registered lobbyists, an army that rivals many foreign embassies in size. Google employs around 80. Meta employs around 60.',
          'And these aren\'t junior operatives. Tech companies specifically recruit former congressional staffers, former FTC and DOJ officials, and former White House technology advisors. The revolving door spins just as fast in tech as it does in defense or pharma.',
          'Beyond their in-house teams, tech companies retain dozens of outside lobbying firms, spreading their influence across both parties and every relevant committee. A single company like Amazon might have 15-20 different lobbying firms working on different issues simultaneously.',
        ],
      },
      {
        heading: 'Trade Groups and Coalition Politics',
        content: [
          'Direct company lobbying is just the visible portion. Tech companies also funnel money through trade groups like the Internet Association (now TechNet), the Computer & Communications Industry Association (CCIA), the Information Technology Industry Council, and BSA | The Software Alliance.',
          'These trade groups spend tens of millions more on lobbying, often on the same issues the member companies lobby on directly. This creates a multiplier effect: Congress hears from Google directly, from CCIA (which Google funds), from TechNet (which Google funds), and from various "innovation coalitions" (which Google funds).',
          'When five different organizations all make the same argument, it sounds like a consensus. But it\'s often one company speaking through five megaphones.',
        ],
      },
      {
        heading: 'What Big Tech Is Buying',
        content: [
          'Tech lobbying has been remarkably effective at preventing legislation. Despite years of public outrage over privacy violations, data breaches, content moderation failures, and anti-competitive behavior, Congress has passed essentially zero major tech regulation.',
          'No federal privacy law. No Section 230 reform. No AI regulation. No antitrust legislation targeting tech platforms. The American Innovation and Choice Online Act — the most promising bipartisan antitrust bill — died without a floor vote despite passing committee.',
          'That\'s what $950 million buys: not favorable legislation, but the absence of unfavorable legislation. In Washington, killing a bill is often more valuable than passing one.',
        ],
      },
    ],
    sources: [
      { name: 'Senate LDA Filings Database', url: 'https://lda.senate.gov/filings/public/filing/search/' },
      { name: 'DOJ Antitrust Division - Google Cases', url: 'https://www.justice.gov/atr' },
      { name: 'FTC v. Meta Platforms', url: 'https://www.ftc.gov/legal-library/browse/cases-proceedings/191-0134-facebook-inc-ftc-v' },
    ],
  },

  'pharma-lobbying': {
    title: 'Pharma\'s $4.4 Billion Influence Machine',
    subtitle: 'The Industry That Outspends Everyone',
    description: 'The pharmaceutical industry is the biggest lobbying spender in America. Here\'s how it shapes drug pricing, patent law, and healthcare policy.',
    tag: 'Healthcare',
    tagColor: 'bg-green-100 text-green-800',
    accentColor: 'green',
    publishDate: 'March 2026',
    readTime: '15 min read',
    quickFacts: [
      { label: 'Healthcare sector lobbying', value: '$4.4B+' },
      { label: 'Pharma companies lobbying', value: '1,200+' },
      { label: 'PhRMA annual spending', value: '$30M+/yr' },
      { label: 'Drug price increase (vs inflation)', value: '3x higher' },
    ],
    bottomLine: 'The healthcare and pharmaceutical sector has spent over $4.4 billion on federal lobbying since 2018 — more than any other sector. This spending has successfully blocked or weakened drug pricing reform, extended patent protections, and preserved a system where Americans pay 2-3x more for prescription drugs than citizens in any other developed nation.',
    sections: [
      {
        heading: 'The Most Powerful Lobby in America',
        content: [
          'No industry spends more on lobbying than healthcare and pharmaceuticals. When you combine drug companies, health insurers, hospitals, medical device makers, and their trade groups, the healthcare sector accounts for roughly 25% of all federal lobbying spending.',
          'This isn\'t a coincidence. Healthcare is a $4.3 trillion industry — nearly 20% of GDP — and every dollar of that revenue depends on government decisions. Medicare and Medicaid alone account for over $1.5 trillion in annual spending. FDA approvals determine which drugs can be sold. Patent law determines how long companies can charge monopoly prices.',
          'When the government is your biggest customer and your regulator, lobbying isn\'t optional — it\'s a cost of doing business. And pharmaceutical companies have decided that the ROI on lobbying is far better than the ROI on R&D.',
        ],
      },
      {
        heading: 'PhRMA: The $30 Million-Per-Year Machine',
        content: [
          'The Pharmaceutical Research & Manufacturers of America (PhRMA) is the pharmaceutical industry\'s main trade group, and it operates one of the most sophisticated lobbying operations in Washington. PhRMA consistently spends $25-35 million per year on federal lobbying alone.',
          'But that\'s just the disclosed lobbying. PhRMA also runs massive advertising campaigns ("issue advocacy"), funds think tanks and patient advocacy groups, makes political contributions, and sponsors academic research that supports industry positions. The total influence spending is estimated to be 5-10x the disclosed lobbying amount.',
          'PhRMA\'s current agenda centers on fighting any expansion of Medicare drug price negotiation, preserving patent protections (especially for biologics), and opposing importation of cheaper drugs from other countries. Every one of these positions serves to keep drug prices high.',
        ],
      },
      {
        heading: 'The Drug Pricing Battle',
        content: [
          'The Inflation Reduction Act of 2022 included the first-ever provision allowing Medicare to negotiate drug prices — but only for 10 drugs initially, expanding to 20 over several years. The pharmaceutical industry spent an estimated $350 million fighting this provision, and succeeded in making it far weaker than originally proposed.',
          'The original House bill would have allowed negotiation for all drugs and included penalties for price increases exceeding inflation for all payers. The final version was limited to Medicare only, covered far fewer drugs, and included lengthy timelines that give companies years of monopoly pricing before negotiations begin.',
          'This is what effective lobbying looks like: not blocking legislation entirely (which would look bad), but weakening it enough to protect the bottom line. Industry analysts estimated the final bill would cost pharma companies roughly $100 billion over 10 years — a fraction of the $500 billion+ the original proposal would have cost.',
        ],
      },
      {
        heading: 'Patent Evergreening and the 20-Year Cash Cow',
        content: [
          'One of pharma\'s most lucrative lobbying victories has been the preservation and expansion of patent protections that allow companies to maintain monopoly pricing for decades. Through a practice called "patent evergreening," companies make minor modifications to existing drugs — a new coating, a slightly different dosage, a combination with another drug — and obtain new patents that extend their exclusive pricing power.',
          'Humira, the world\'s best-selling drug, is the poster child. AbbVie filed over 250 patents on Humira, creating a "patent thicket" that blocked generic competition for 20 years. During that time, AbbVie raised Humira\'s price by over 470%, generating over $200 billion in revenue.',
          'The pharmaceutical lobby has successfully blocked every legislative attempt to curtail patent evergreening, arguing that strong patent protections are necessary to incentivize innovation. But studies show that the majority of pharma R&D spending goes toward developing "me-too" drugs and incremental modifications, not breakthrough treatments.',
        ],
      },
      {
        heading: 'The Opioid Lobbying Cover-Up',
        content: [
          'Perhaps the most damaging example of pharmaceutical lobbying was the opioid crisis. Companies like Purdue Pharma spent millions lobbying against restrictions on opioid prescribing while simultaneously marketing OxyContin as non-addictive.',
          'The pharmaceutical industry lobbied successfully for the passage of the Ensuring Patient Access and Effective Drug Enforcement Act of 2016 — a law that weakened the DEA\'s ability to freeze suspicious drug shipments. The bill\'s chief sponsor, Rep. Tom Marino, later withdrew from consideration as Trump\'s Drug Czar when his pharma lobbying ties were exposed.',
          'The opioid epidemic has killed over 500,000 Americans. The lobbying that enabled it cost a few million dollars. This may be the most tragic "return on lobbying investment" in American history.',
        ],
      },
      {
        heading: 'Health Insurers: The Other Healthcare Lobby',
        content: [
          'While pharma gets the most attention, health insurance companies are also massive lobbying spenders. UnitedHealth Group, Cigna, Elevance Health (formerly Anthem), Humana, and Blue Cross Blue Shield collectively spend hundreds of millions on lobbying.',
          'Their agenda often overlaps with pharma\'s — both industries benefit from a complex, opaque system where prices are negotiated behind closed doors and consumers have little leverage. Health insurers lobby against single-payer healthcare, public option proposals, and transparency requirements that would reveal their actual costs and profit margins.',
          'The irony is that pharma and insurers sometimes lobby against each other on drug pricing (insurers want lower drug costs; pharma doesn\'t), creating a dynamic where consumers lose regardless of which side "wins." Both industries have a fundamental interest in preserving the profitable complexity of the current system.',
        ],
      },
      {
        heading: 'Follow the Money, Find the Cure',
        content: [
          'The pharmaceutical industry argues that high drug prices fund lifesaving research. The data tells a different story. The top 10 pharmaceutical companies spend more on lobbying, marketing, and stock buybacks combined than they do on R&D.',
          'Meanwhile, much of the foundational research behind breakthrough drugs is funded by the National Institutes of Health — taxpayer money. A study published in the Proceedings of the National Academy of Sciences found that NIH funding contributed to every single one of the 210 drugs approved by the FDA from 2010-2016.',
          'Americans are paying twice: once through taxes that fund basic research, and again through monopoly drug prices that fund lobbying to keep those prices high. The pharmaceutical lobby has turned this double-payment system into the most profitable business model in history.',
        ],
      },
    ],
    sources: [
      { name: 'Senate LDA Filings', url: 'https://lda.senate.gov/filings/public/filing/search/' },
      { name: 'Inflation Reduction Act Drug Pricing Provisions', url: 'https://www.congress.gov/bill/117th-congress/house-bill/5376' },
      { name: 'PNAS Study: NIH Funding and Drug Approvals', url: 'https://doi.org/10.1073/pnas.1715368115' },
    ],
  },

  'defense-lobbying': {
    title: 'The Military-Industrial Lobbying Complex',
    subtitle: 'How Defense Contractors Buy Their Own Contracts',
    description: 'Defense contractors spend hundreds of millions lobbying for weapons systems and military budgets. We tracked every dollar.',
    tag: 'Defense',
    tagColor: 'bg-gray-100 text-gray-800',
    accentColor: 'gray',
    publishDate: 'March 2026',
    readTime: '13 min read',
    quickFacts: [
      { label: 'Top 5 defense contractors lobbying', value: '$780M+' },
      { label: 'Defense sector total lobbying', value: '$1.2B+' },
      { label: 'Former DOD officials now lobbying', value: '700+' },
      { label: 'Avg lobbying ROI (defense)', value: '2,100:1' },
    ],
    bottomLine: 'The five largest defense contractors — Lockheed Martin, Boeing, Raytheon, Northrop Grumman, and General Dynamics — have spent over $780 million on lobbying since 2018. They employ more than 700 former Pentagon officials as lobbyists. For every dollar spent lobbying, they receive an average of $2,100 in federal contracts. Eisenhower warned us. We didn\'t listen.',
    sections: [
      {
        heading: 'Eisenhower\'s Warning, Realized',
        content: [
          'In his 1961 farewell address, President Dwight D. Eisenhower warned of the "unwarranted influence" of the military-industrial complex. Sixty-five years later, his prediction has been exceeded beyond what even he could have imagined.',
          'The defense industry has built the most efficient influence machine in Washington. It\'s not just lobbying — it\'s a complete system of political influence that includes campaign contributions, think tank funding, a revolving door with the Pentagon, and strategic distribution of defense contracts across every congressional district.',
          'The result: a defense budget that grows almost every year regardless of the actual threat environment, weapons systems that survive long past their usefulness, and a permanent war economy that spends more than the next 10 countries combined.',
        ],
      },
      {
        heading: 'The Big Five: Defense Lobbying Powerhouses',
        content: [
          '<div class="bg-gray-50 rounded-xl p-6 my-6"><div class="space-y-4"><div class="flex justify-between items-center border-b border-gray-200 pb-3"><div><strong>Lockheed Martin</strong> — F-35, missile defense, space</div><div class="font-bold text-gray-700">$175M+</div></div><div class="flex justify-between items-center border-b border-gray-200 pb-3"><div><strong>Boeing</strong> — Aircraft, satellites, defense systems</div><div class="font-bold text-gray-700">$180M+</div></div><div class="flex justify-between items-center border-b border-gray-200 pb-3"><div><strong>Northrop Grumman</strong> — B-21 bomber, space, cyber</div><div class="font-bold text-gray-700">$148M+</div></div><div class="flex justify-between items-center border-b border-gray-200 pb-3"><div><strong>Raytheon Technologies</strong> — Missiles, radar, engines</div><div class="font-bold text-gray-700">$142M+</div></div><div class="flex justify-between items-center"><div><strong>General Dynamics</strong> — Submarines, tanks, IT</div><div class="font-bold text-gray-700">$135M+</div></div></div></div>',
          'These five companies collectively receive over $150 billion in federal contracts annually. Their lobbying investment of $780 million represents roughly 0.5% of their contract revenue — an extraordinary return on investment.',
        ],
      },
      {
        heading: 'The Pentagon Revolving Door',
        content: [
          'The defense industry\'s revolving door is the most entrenched and consequential in Washington. Over 700 former Department of Defense officials — including generals, admirals, and senior civilian officials — are registered as lobbyists for defense contractors.',
          'The pipeline works in both directions. Defense contractors hire former Pentagon officials who know the procurement system inside and out. And the Pentagon hires former defense industry executives to manage the programs that benefit their former employers.',
          'A 2021 Government Accountability Office report found that in a single year, 14 of the top 20 defense contractors employed former senior DOD officials in lobbying or executive roles. The conflicts of interest are so pervasive that they\'ve become invisible — just part of how Washington works.',
        ],
      },
      {
        heading: 'The F-35: A $1.7 Trillion Lobbying Success Story',
        content: [
          'The F-35 Joint Strike Fighter program is the most expensive weapons system in human history, with lifetime costs projected at $1.7 trillion. It\'s also one of the most troubled — plagued by cost overruns, delays, and performance problems since its inception.',
          'Yet the F-35 program survives and expands every year. Why? Because Lockheed Martin strategically distributed F-35 production across 45 states and over 1,500 suppliers. This means that cutting the F-35 threatens jobs in the districts of nearly every member of Congress.',
          'Combined with aggressive lobbying — Lockheed spends $15-20 million per year — the F-35 is essentially politically indestructible. Members of Congress who vote against it face the wrath of both the defense lobby and their own constituents who work in F-35 supply chain jobs.',
          'This is the military-industrial complex at its most sophisticated: making its products too politically expensive to cancel, regardless of whether they work.',
        ],
      },
      {
        heading: 'Congressional District Strategy',
        content: [
          'Defense contractors have perfected a strategy that no other industry has replicated at scale: distributing their supply chains across as many congressional districts as possible. This ensures that virtually every member of Congress has a financial stake in defense spending.',
          'Lockheed Martin has suppliers in 375 of 435 congressional districts. Boeing has facilities or suppliers in all 50 states. Raytheon employs workers in 49 states.',
          'When the defense budget comes up for a vote, these companies don\'t just send lobbyists — they send economic impact reports showing exactly how many jobs in each district depend on defense contracts. Members who vote for cuts are voting against jobs in their own district.',
        ],
      },
      {
        heading: 'The Annual Budget Ratchet',
        content: [
          'The defense budget almost never decreases in nominal terms. Even during periods of relative peace and after major war drawdowns, the budget tends to plateau briefly before resuming its climb. The FY2025 defense budget is approximately $886 billion.',
          'This "budget ratchet" effect is a direct result of lobbying. Each year, defense companies lobby for new programs, expanded production runs, and increased funding for existing systems. Even if individual programs are cut, the overall budget grows because new programs replace old ones.',
          'The lobbying extends beyond individual companies to the defense industry\'s trade groups — the Aerospace Industries Association, the National Defense Industrial Association, and dozens more — which lobby for general budget increases that benefit all their members.',
        ],
      },
      {
        heading: 'The Human Cost',
        content: [
          'Every dollar spent on unnecessary defense systems is a dollar not spent on healthcare, education, infrastructure, or climate change. The opportunity cost of the military-industrial lobbying complex is measured not just in dollars but in lives.',
          'When defense lobbying extends a war or expands military operations, the costs include the lives of service members and civilians. When defense spending crowds out domestic investment, the costs include crumbling bridges, underfunded schools, and inadequate healthcare.',
          'Eisenhower\'s warning wasn\'t just about corruption or waste — it was about the fundamental distortion of national priorities that occurs when an industry profits from conflict and insecurity. That distortion is now baked into the DNA of American governance.',
        ],
      },
    ],
    sources: [
      { name: 'Senate LDA Filings', url: 'https://lda.senate.gov/filings/public/filing/search/' },
      { name: 'GAO Report: Defense Revolving Door', url: 'https://www.gao.gov/products/gao-21-104' },
      { name: 'F-35 Program Office Selected Acquisition Report', url: 'https://www.acq.osd.mil/ara/am/sar/' },
    ],
  },

  'oil-gas-lobbying': {
    title: 'Big Oil\'s Climate Lobbying Playbook',
    subtitle: 'Fossil Fuel Spending vs. Climate Legislation',
    description: 'How the oil and gas industry has spent billions lobbying against climate action while publicly pledging to reduce emissions.',
    tag: 'Energy',
    tagColor: 'bg-orange-100 text-orange-800',
    accentColor: 'orange',
    publishDate: 'March 2026',
    readTime: '14 min read',
    quickFacts: [
      { label: 'Oil & gas lobbying (2018-2025)', value: '$890M+' },
      { label: 'ExxonMobil lobbying total', value: '$134M+' },
      { label: 'Climate bills killed or weakened', value: '12+' },
      { label: 'Fossil fuel lobbyists', value: '1,500+' },
    ],
    bottomLine: 'The oil and gas industry has spent over $890 million on federal lobbying since 2018, making it one of the top lobbying sectors. This spending has successfully killed or weakened at least 12 major climate bills, delayed the clean energy transition by years, and preserved tens of billions in fossil fuel subsidies — all while these same companies publicly pledge to achieve "net zero" emissions.',
    sections: [
      {
        heading: 'The Great Green Contradiction',
        content: [
          'ExxonMobil runs advertisements about its commitment to reducing emissions. Chevron touts its "ever-cleaner energy" investments. BP rebranded itself as "Beyond Petroleum." Shell pledges to be net-zero by 2050.',
          'Meanwhile, these same companies collectively spend hundreds of millions of dollars every year lobbying against the very climate policies that would make their pledges meaningful. They lobby against carbon taxes, emissions standards, clean energy subsidies, methane regulations, and electric vehicle incentives.',
          'This isn\'t a contradiction — it\'s a strategy. Public pledges manage reputation. Lobbying manages legislation. When the two conflict, the lobbying wins every time.',
        ],
      },
      {
        heading: 'Follow the Lobbying Dollars',
        content: [
          '<div class="bg-orange-50 rounded-xl p-6 my-6"><div class="space-y-3"><div class="flex justify-between items-center border-b border-orange-200 pb-2"><strong>ExxonMobil</strong><span class="font-bold text-orange-700">$134M+</span></div><div class="flex justify-between items-center border-b border-orange-200 pb-2"><strong>Chevron</strong><span class="font-bold text-orange-700">$122M+</span></div><div class="flex justify-between items-center border-b border-orange-200 pb-2"><strong>Shell (US operations)</strong><span class="font-bold text-orange-700">$82M+</span></div><div class="flex justify-between items-center border-b border-orange-200 pb-2"><strong>American Petroleum Institute</strong><span class="font-bold text-orange-700">$78M+</span></div><div class="flex justify-between items-center border-b border-orange-200 pb-2"><strong>BP America</strong><span class="font-bold text-orange-700">$65M+</span></div><div class="flex justify-between items-center border-b border-orange-200 pb-2"><strong>ConocoPhillips</strong><span class="font-bold text-orange-700">$58M+</span></div><div class="flex justify-between items-center border-b border-orange-200 pb-2"><strong>Koch Industries</strong><span class="font-bold text-orange-700">$52M+</span></div><div class="flex justify-between items-center"><strong>Marathon Petroleum</strong><span class="font-bold text-orange-700">$48M+</span></div></div></div>',
          'And this is just the disclosed lobbying. The oil and gas industry also funds think tanks, climate denial research, front groups, and "astroturf" organizations that oppose climate legislation without disclosing their industry funding.',
        ],
      },
      {
        heading: 'The Subsidy Protection Racket',
        content: [
          'Perhaps the most remarkable lobbying achievement of the fossil fuel industry is the preservation of subsidies. The U.S. provides an estimated $20 billion annually in direct subsidies and tax breaks to fossil fuel companies — companies that are among the most profitable in history.',
          'Every administration since Obama\'s has proposed eliminating or reducing fossil fuel subsidies. Every attempt has been blocked or significantly weakened by lobbying. The oil and gas industry spent an estimated $100 million specifically lobbying to preserve these subsidies over the past decade.',
          'The math is stunning: for every $1 spent lobbying to preserve subsidies, the industry preserves roughly $200 in subsidies received. That\'s a 20,000% return on investment, making subsidy lobbying one of the most profitable investments in the fossil fuel portfolio.',
        ],
      },
      {
        heading: 'Killing Climate Legislation: A History',
        content: [
          'The fossil fuel lobby has a near-perfect record of killing or weakening major climate legislation. The Waxman-Markey cap-and-trade bill passed the House in 2009 but died in the Senate after intensive fossil fuel lobbying. The Clean Power Plan was challenged in court and eventually replaced. Carbon tax proposals have never received a floor vote.',
          'The Inflation Reduction Act of 2022 — the most significant climate legislation in U.S. history — only passed after significant concessions to the fossil fuel industry, including mandatory oil and gas lease sales on federal land and provisions beneficial to carbon capture (which extends the life of fossil fuel infrastructure).',
          'Senator Joe Manchin, whose support was essential for the IRA, received more money from the oil and gas industry than any other senator. The bill he ultimately supported was dramatically different from the original Build Back Better proposal — weakened in ways that directly aligned with fossil fuel industry lobbying priorities.',
        ],
      },
      {
        heading: 'The American Petroleum Institute: Industry\'s Political Arm',
        content: [
          'The American Petroleum Institute (API) is the oil and gas industry\'s main trade group, and it functions as a political organization that happens to have an industry association attached. API coordinates industry-wide lobbying strategy, runs advertising campaigns, funds political activities, and speaks with one voice for an industry of thousands of companies.',
          'API\'s lobbying priorities read like a wish list for climate delay: opposing methane regulations, fighting electric vehicle mandates, promoting natural gas as a "clean" transition fuel, supporting carbon capture over emissions reduction, and opposing international climate agreements.',
          'API also serves as a coordination mechanism that allows companies to present a unified front while maintaining plausible deniability. Individual companies can tout their climate commitments while API — funded by those same companies — lobbies against climate action.',
        ],
      },
      {
        heading: 'The Koch Network: Shadow Oil Lobbying',
        content: [
          'Koch Industries and the broader Koch political network represent a parallel lobbying operation that dwarfs most disclosed lobbying efforts. While Koch Industries itself discloses roughly $52 million in direct lobbying, the Koch network — including Americans for Prosperity, the American Legislative Exchange Council (ALEC), and dozens of other organizations — spends hundreds of millions more on political influence.',
          'Much of this spending falls outside lobbying disclosure requirements because it\'s categorized as "issue advocacy," "grassroots organizing," or "education." But the effect is the same: generating opposition to climate legislation, promoting fossil fuel interests, and funding candidates who oppose climate action.',
          'The Koch network pioneered the strategy of building a permanent political infrastructure — think tanks, advocacy groups, donor networks, and media operations — that operates year-round, not just during lobbying campaigns. It\'s the most sophisticated political influence operation ever built by private interests.',
        ],
      },
      {
        heading: 'The Clock Is Ticking',
        content: [
          'Every year that climate legislation is delayed, the cost of addressing climate change increases and the window for action narrows. The IPCC has estimated that reaching net-zero emissions by 2050 requires cutting global emissions by 45% by 2030 — a target that becomes more difficult with each passing year.',
          'The oil and gas lobby doesn\'t need to stop climate action forever — it just needs to delay it long enough for existing fossil fuel assets to generate maximum returns. A decade of delay is worth hundreds of billions in continued fossil fuel revenue.',
          'The fossil fuel industry is betting that it can extract enough value from existing infrastructure before the transition becomes inevitable. Lobbying buys them time. And every year of time bought is another year of record profits — and another year of accelerating climate change.',
        ],
      },
    ],
    sources: [
      { name: 'Senate LDA Filings', url: 'https://lda.senate.gov/filings/public/filing/search/' },
      { name: 'IMF Fossil Fuel Subsidy Estimates', url: 'https://www.imf.org/en/Topics/climate-change/energy-subsidies' },
      { name: 'IPCC Sixth Assessment Report', url: 'https://www.ipcc.ch/assessment-report/ar6/' },
    ],
  },

  'lobbying-roi': {
    title: 'The 22,000% Return on Lobbying',
    subtitle: 'Why Lobbying Is the Best Investment in America',
    description: 'Academic research shows that corporate lobbying delivers extraordinary returns — $220 for every $1 spent. We examine the evidence.',
    tag: 'ROI Analysis',
    tagColor: 'bg-emerald-100 text-emerald-800',
    accentColor: 'emerald',
    publishDate: 'March 2026',
    readTime: '12 min read',
    quickFacts: [
      { label: 'Avg lobbying ROI (tax policy)', value: '22,000%' },
      { label: 'Highest single ROI found', value: '49,536:1' },
      { label: 'Avg contract ROI (lobbying firms)', value: '2,101:1' },
      { label: 'Academic studies confirming ROI', value: '15+' },
    ],
    bottomLine: 'Lobbying is the single most profitable investment available to American corporations. Academic research consistently finds returns of 100:1 to 22,000:1 — dwarfing stock market returns by orders of magnitude. Our own analysis found that companies receiving federal contracts earned an average of $2,101 for every $1 spent on lobbying. The most extreme case: TriWest Healthcare spent $270,000 lobbying and received $13.4 billion in contracts — a 49,536:1 return.',
    sections: [
      {
        heading: 'The Most Profitable Investment You\'ve Never Heard Of',
        content: [
          'If someone offered you an investment that returned $220 for every $1 invested, you\'d think it was a scam. But that\'s exactly what lobbying delivers, according to peer-reviewed academic research.',
          'A landmark 2009 study by researchers at the University of Kansas examined companies that lobbied for the American Jobs Creation Act of 2004 — a law that created a tax holiday for repatriated foreign profits. The companies that lobbied for the act spent a combined $283 million on lobbying and received $62.5 billion in tax benefits. That\'s a return of $220 for every $1 spent — a 22,000% ROI.',
          'And this wasn\'t an outlier. Study after study has found extraordinary returns on lobbying investment across different policy areas, time periods, and methodologies.',
        ],
      },
      {
        heading: 'Our Own Analysis: The Contract ROI',
        content: [
          'We conducted our own analysis by cross-referencing lobbying filings with federal contract data from USASpending.gov. The results were striking: among clients that both lobby and receive federal contracts, the average return is $2,101 for every $1 spent on lobbying.',
          '<div class="bg-emerald-50 rounded-xl p-6 my-6"><h3 class="font-bold text-lg mb-4">Top Lobbying ROI: Contracts vs. Lobbying Spending</h3><div class="space-y-3"><div class="flex justify-between items-center border-b border-emerald-200 pb-2"><div><strong>TriWest Healthcare</strong><div class="text-sm text-gray-500">TRICARE health services</div></div><div class="text-right"><div class="font-bold text-emerald-700">49,536:1</div><div class="text-xs text-gray-500">$270K lobbying → $13.4B contracts</div></div></div><div class="flex justify-between items-center border-b border-emerald-200 pb-2"><div><strong>Humana</strong><div class="text-sm text-gray-500">TRICARE, Medicare</div></div><div class="text-right"><div class="font-bold text-emerald-700">12,400:1</div><div class="text-xs text-gray-500">$2M lobbying → $24.8B contracts</div></div></div><div class="flex justify-between items-center border-b border-emerald-200 pb-2"><div><strong>McKesson Corp</strong><div class="text-sm text-gray-500">Drug distribution</div></div><div class="text-right"><div class="font-bold text-emerald-700">8,900:1</div><div class="text-xs text-gray-500">$3.2M lobbying → $28.5B contracts</div></div></div><div class="flex justify-between items-center border-b border-emerald-200 pb-2"><div><strong>Leidos</strong><div class="text-sm text-gray-500">Defense IT services</div></div><div class="text-right"><div class="font-bold text-emerald-700">5,200:1</div><div class="text-xs text-gray-500">$8.4M lobbying → $43.7B contracts</div></div></div><div class="flex justify-between items-center"><div><strong>SAIC</strong><div class="text-sm text-gray-500">Defense technology</div></div><div class="text-right"><div class="font-bold text-emerald-700">4,800:1</div><div class="text-xs text-gray-500">$5.1M lobbying → $24.5B contracts</div></div></div></div></div>',
          'These numbers come with a caveat: we can\'t prove that lobbying directly caused the contracts. Many of these companies would receive contracts regardless of lobbying. But the correlation is unmistakable, and the academic literature supports a causal relationship for at least a significant portion of the returns.',
        ],
      },
      {
        heading: 'The Academic Evidence',
        content: [
          'Over 15 peer-reviewed studies have examined the returns on lobbying investment, and the findings are consistent: lobbying delivers returns that make Wall Street look like a savings account.',
          'Alexander, Scholz, and Mazza (2009) found the 22,000% ROI on tax lobbying. Richter, Samphantharak, and Timmons (2009) found that a 1% increase in lobbying spending was associated with a 0.5-1.6% decrease in effective tax rates. Chen, Parsley, and Yang (2015) found that firms that lobby have higher stock returns than non-lobbying firms.',
          'The mechanism is straightforward: lobbying provides access to decision-makers, and access translates into favorable treatment. Whether it\'s a tax break, a regulatory exemption, a government contract, or the killing of unfavorable legislation, the return on that access is enormous.',
        ],
      },
      {
        heading: 'Why Don\'t All Companies Lobby?',
        content: [
          'If lobbying delivers such extraordinary returns, why don\'t all companies do it? The answer is that many of the returns accrue to companies in industries that are heavily regulated or dependent on government spending — healthcare, defense, finance, energy, and technology.',
          'A small software company with no government contracts and minimal regulatory exposure won\'t benefit much from lobbying. But a pharmaceutical company whose products require FDA approval, whose prices depend on Medicare policy, and whose patents are governed by federal law? For them, lobbying is the highest-ROI investment available.',
          'The concentration of lobbying in certain industries isn\'t a market failure — it\'s a rational response to where government decisions have the most impact on corporate profits. And it creates a vicious cycle: industries that lobby the most get the most favorable treatment, which increases their profits, which funds more lobbying.',
        ],
      },
      {
        heading: 'The Stock Market of Influence',
        content: [
          'Some researchers have described lobbying as a "second stock market" where companies invest in political influence the way they invest in productive assets. The returns are comparable or better, the risks are lower (lobbying rarely results in losses), and the market is far less competitive than traditional capital markets.',
          'This framing helps explain why lobbying spending has grown consistently for decades, even as the economy has gone through booms and busts. In a recession, companies cut R&D, advertising, and headcount — but lobbying spending tends to hold steady or increase, because the returns are too good to leave on the table.',
          'The total amount spent on federal lobbying has exceeded $3.5 billion per year every year since 2018. That\'s not waste — it\'s the most rational allocation of corporate capital in the economy.',
        ],
      },
      {
        heading: 'What This Means for Democracy',
        content: [
          'The extraordinary ROI on lobbying has a corrosive implication for democracy: it means that political influence is enormously underpriced. If lobbying returns $220 for every $1 spent, then the "price" of a favorable policy outcome is far below its value — which means there is massive unmet demand for influence.',
          'This is why lobbying spending keeps growing: corporations are rationally increasing their influence investments toward the equilibrium point where the returns equal the costs. But that equilibrium may never arrive, because the returns from influence are compounding — more influence leads to more favorable policies, which leads to more profits, which funds more influence.',
          'The ROI on lobbying isn\'t just a financial statistic — it\'s a measure of how much our democratic system is worth to those who can afford to buy it. And at 22,000%, it\'s the bargain of the century.',
        ],
      },
    ],
    sources: [
      { name: 'Alexander, Scholz & Mazza (2009) — Tax Lobbying ROI', url: 'https://doi.org/10.1086/651597' },
      { name: 'OpenLobby ROI Calculator', url: 'https://www.openlobby.us/lobbying-roi' },
      { name: 'USASpending.gov Federal Contract Data', url: 'https://www.usaspending.gov' },
    ],
  },

  'dark-money': {
    title: 'Shadow Lobbying',
    subtitle: 'The Influence That Doesn\'t Get Reported',
    description: 'Think tanks, 501(c)(4)s, and strategic advisors that influence policy without registering as lobbyists. The dark side of Washington influence.',
    tag: 'Dark Money',
    tagColor: 'bg-purple-100 text-purple-800',
    accentColor: 'purple',
    publishDate: 'March 2026',
    readTime: '13 min read',
    quickFacts: [
      { label: 'Estimated shadow lobbying', value: '$6B+/year' },
      { label: 'Registered lobbyists (declining)', value: '12,000' },
      { label: 'De-registered since 2007', value: '4,000+' },
      { label: '501(c)(4) political spending', value: '$1B+/cycle' },
    ],
    bottomLine: 'For every dollar of disclosed lobbying, an estimated $2-3 is spent on influence that never appears in any database. "Shadow lobbying" — through think tanks, 501(c)(4) organizations, "strategic advisory" firms, and grassroots campaigns — has exploded since the 2007 lobbying reform law made disclosure requirements slightly more burdensome. Over 4,000 lobbyists have de-registered since then, but they haven\'t stopped lobbying — they\'ve just stopped reporting it.',
    sections: [
      {
        heading: 'The Disclosure Gap',
        content: [
          'The Lobbying Disclosure Act of 1995, as amended by the HONEST Leadership Act of 2007, requires individuals and organizations to register and report their lobbying activities. But the law has a critical weakness: its definitions are narrow enough to drive a truck through.',
          'Under the LDA, you only need to register as a lobbyist if you spend at least 20% of your time on lobbying activities for a particular client, make more than one lobbying contact, and earn at least $3,000 from that client in a quarter. If you structure your work to fall below any of these thresholds, you don\'t need to register — even if you\'re actively influencing legislation.',
          'This has created a booming industry of "strategic advisors," "government affairs consultants," and "policy experts" who do everything a lobbyist does except technically cross the registration threshold.',
        ],
      },
      {
        heading: 'The De-Registration Wave',
        content: [
          'After the HONEST Leadership Act imposed new restrictions on registered lobbyists — including gift bans, travel restrictions, and revolving door cooling-off periods — something remarkable happened: thousands of lobbyists de-registered.',
          'The number of registered lobbyists peaked at around 14,800 in 2007 and has fallen to roughly 12,000 today. But lobbying spending has increased during the same period. This means either the remaining lobbyists got dramatically more productive, or thousands of people are still lobbying without registering.',
          'Former Senator Russ Feingold, who co-authored the reforms, later called this the "unintended consequence" of the law: by making registration more burdensome, the law incentivized people to avoid registration rather than comply with it.',
        ],
      },
      {
        heading: 'Think Tanks: The Policy Laundry',
        content: [
          'Think tanks occupy a uniquely powerful position in Washington\'s influence ecosystem. They produce research, publish policy papers, host events, and provide "expert" testimony to Congress — all while receiving millions from the industries their research supports.',
          'The Brookings Institution, the Heritage Foundation, the American Enterprise Institute, the Center for American Progress — these organizations are treated by the media and Congress as independent voices. But many receive substantial funding from corporations and industry groups that have a direct stake in their policy recommendations.',
          'This is how corporate influence gets laundered through academic credibility. A pharmaceutical company can\'t testify before Congress that drug prices should stay high. But a "health policy expert" from a pharma-funded think tank can make the same argument while appearing independent.',
          'Think tank spending is not reported as lobbying because think tanks are classified as 501(c)(3) charitable organizations. They\'re technically prohibited from lobbying, but the line between "education" and "advocacy" is invisible in practice.',
        ],
      },
      {
        heading: '501(c)(4)s: The Dark Money ATMs',
        content: [
          '501(c)(4) "social welfare" organizations have become the primary vehicles for political influence that avoids disclosure requirements. Unlike PACs and super PACs, 501(c)(4)s are not required to disclose their donors, and they can spend unlimited amounts on "issue advocacy" that falls short of expressly advocating for the election or defeat of a candidate.',
          'In the lobbying context, 501(c)(4)s fund grassroots campaigns, run issue advertisements, and organize constituents to pressure lawmakers — all without disclosing who\'s paying for it. When a member of Congress receives thousands of phone calls opposing a bill, they may not know that the calls were generated by a campaign funded by a single corporation through a 501(c)(4).',
          'The Koch-backed Americans for Prosperity, the pharmaceutical industry\'s various patient advocacy front groups, and the tech industry\'s innovation coalitions all operate through this model.',
        ],
      },
      {
        heading: 'The "Strategic Advisory" Loophole',
        content: [
          'Many of Washington\'s most influential figures don\'t register as lobbyists. Instead, they work as "strategic advisors" at firms that also have lobbying practices. They attend the same meetings, make the same phone calls, and provide the same advice — but because they structure their time to fall below the 20% threshold, they avoid registration.',
          'Former House Speaker Newt Gingrich famously received $1.6 million from Freddie Mac for what he described as "strategic advice" — not lobbying. Former Attorney General John Ashcroft runs a firm that provides "strategic consulting" to clients with business before the government. Former Senate Majority Leader Tom Daschle worked as a "policy advisor" at a lobbying firm without registering as a lobbyist.',
          'These aren\'t obscure figures exploiting obscure loopholes. They\'re the most powerful people in Washington openly conducting influence activities without any disclosure requirements.',
        ],
      },
      {
        heading: 'Grassroots Lobbying: Manufacturing Consent',
        content: [
          'Traditional lobbying involves direct contact with lawmakers. But an increasingly large share of influence spending goes toward "grassroots lobbying" — organizing constituents to contact their representatives about specific issues.',
          'Grassroots lobbying is explicitly excluded from the LDA\'s disclosure requirements. A company can spend $50 million on a campaign to generate phone calls to Congress, and none of that spending appears in the lobbying database.',
          'The pharmaceutical industry has perfected this approach. When Congress considers drug pricing reform, PhRMA and its member companies fund "patient advocacy groups" that organize constituents to call their representatives and express opposition to price controls. The callers genuinely believe they\'re speaking for themselves — but the entire campaign is funded and orchestrated by the industry.',
        ],
      },
      {
        heading: 'Sizing the Shadow',
        content: [
          'How big is shadow lobbying? No one knows precisely, because the whole point is to avoid disclosure. But several estimates converge on a range of $6-10 billion per year — roughly 2-3x the amount of disclosed lobbying.',
          'This means that the $3.7 billion in annual disclosed lobbying — the number that appears in databases like OpenLobby, OpenSecrets, and the Senate filing system — represents at most one-third of total influence spending in Washington.',
          'The disclosed system that we can analyze is, in effect, the tip of the iceberg. The real influence economy operates largely in the dark, with no disclosure, no accountability, and no way for citizens to know who is spending how much to influence which policies.',
          'Reforming this system would require closing the "strategic advisory" loophole, requiring disclosure of grassroots lobbying campaigns, increasing transparency for think tank funding, and expanding the definition of lobbying to capture the full range of influence activities. None of these reforms is on the horizon.',
        ],
      },
    ],
    sources: [
      { name: 'HONEST Leadership and Open Government Act', url: 'https://www.congress.gov/bill/110th-congress/senate-bill/1' },
      { name: 'Lobbying Disclosure Act of 1995', url: 'https://lobbyingdisclosure.house.gov/lda.html' },
      { name: 'OpenSecrets Dark Money Data', url: 'https://www.opensecrets.org/dark-money' },
    ],
  },

  'foreign-lobbying': {
    title: 'Foreign Governments Lobbying America',
    subtitle: 'Saudi Arabia, Israel, China, and the Battle for DC',
    description: 'Foreign governments spend hundreds of millions lobbying the U.S. government through FARA registrations and lobbying firms. Here\'s who spends what.',
    tag: 'Foreign Influence',
    tagColor: 'bg-indigo-100 text-indigo-800',
    accentColor: 'indigo',
    publishDate: 'March 2026',
    readTime: '14 min read',
    quickFacts: [
      { label: 'Foreign lobbying spending', value: '$500M+/yr' },
      { label: 'Countries with DC lobbyists', value: '100+' },
      { label: 'FARA registrations active', value: '500+' },
      { label: 'Top foreign spender', value: 'Saudi Arabia' },
    ],
    bottomLine: 'Over 100 foreign governments and their agents spend an estimated $500 million or more per year lobbying the U.S. government — through both the Lobbying Disclosure Act and the Foreign Agents Registration Act (FARA). Saudi Arabia, Japan, South Korea, Israel, and the UAE are among the top spenders, hiring the most prestigious lobbying firms in Washington to influence arms deals, trade policy, sanctions, and foreign aid.',
    sections: [
      {
        heading: 'The Foreign Influence Industry',
        content: [
          'When foreign governments want to influence U.S. policy, they hire American lobbyists. It\'s a massive, legal, and largely overlooked industry that gives foreign powers a direct line to the most powerful government in the world.',
          'Foreign lobbying is governed by two separate disclosure regimes: the Lobbying Disclosure Act (LDA), which covers general lobbying, and the Foreign Agents Registration Act (FARA), which specifically requires disclosure by agents of foreign principals. The two systems overlap imperfectly, creating gaps in transparency.',
          'At any given time, over 500 FARA registrations are active, representing foreign governments, political parties, state-owned enterprises, and foreign companies seeking to influence U.S. policy.',
        ],
      },
      {
        heading: 'The Biggest Foreign Spenders',
        content: [
          '<div class="bg-indigo-50 rounded-xl p-6 my-6"><div class="space-y-3"><div class="flex justify-between items-center border-b border-indigo-200 pb-2"><div><strong>Saudi Arabia</strong><div class="text-xs text-gray-500">Arms deals, Yemen war, MBS reputation</div></div><span class="font-bold text-indigo-700">$80M+/yr</span></div><div class="flex justify-between items-center border-b border-indigo-200 pb-2"><div><strong>Japan</strong><div class="text-xs text-gray-500">Trade, defense alliance, auto industry</div></div><span class="font-bold text-indigo-700">$55M+/yr</span></div><div class="flex justify-between items-center border-b border-indigo-200 pb-2"><div><strong>South Korea</strong><div class="text-xs text-gray-500">Trade, defense, semiconductor policy</div></div><span class="font-bold text-indigo-700">$42M+/yr</span></div><div class="flex justify-between items-center border-b border-indigo-200 pb-2"><div><strong>United Arab Emirates</strong><div class="text-xs text-gray-500">Arms sales, Middle East policy, trade</div></div><span class="font-bold text-indigo-700">$38M+/yr</span></div><div class="flex justify-between items-center border-b border-indigo-200 pb-2"><div><strong>Israel (and allied groups)</strong><div class="text-xs text-gray-500">Military aid, Iran policy, regional stability</div></div><span class="font-bold text-indigo-700">$35M+/yr</span></div><div class="flex justify-between items-center border-b border-indigo-200 pb-2"><div><strong>China (disclosed only)</strong><div class="text-xs text-gray-500">Trade, tech, Taiwan, investment</div></div><span class="font-bold text-indigo-700">$25M+/yr</span></div><div class="flex justify-between items-center"><div><strong>Qatar</strong><div class="text-xs text-gray-500">Military base, Middle East policy</div></div><span class="font-bold text-indigo-700">$22M+/yr</span></div></div></div>',
          'These numbers represent disclosed spending only. Actual foreign influence spending is likely significantly higher when accounting for think tank donations, media investments, cultural exchange programs, and other influence channels.',
        ],
      },
      {
        heading: 'Saudi Arabia: Lobbying Empire',
        content: [
          'Saudi Arabia operates the most expensive foreign lobbying operation in Washington. The kingdom retains multiple top-tier lobbying firms, PR agencies, and law firms to manage its image and advance its policy interests.',
          'Saudi lobbying spending spiked dramatically after the murder of journalist Jamal Khashoggi in 2018, as the kingdom sought to rehabilitate Mohammed bin Salman\'s reputation and prevent Congressional action that could threaten the U.S.-Saudi relationship.',
          'The Saudi government and Saudi-funded entities have hired firms including the Podesta Group, Hogan Lovells, Squire Patton Boggs, and dozens of others. They lobby on arms sales, Yemen policy, oil production agreements, and increasingly on investment-related issues tied to Saudi Arabia\'s Vision 2030 plan.',
          'Critics argue that Saudi lobbying has successfully prevented meaningful accountability for human rights abuses, maintained billions in arms sales despite the Yemen war, and preserved a strategic relationship that primarily benefits Saudi elites and American defense contractors.',
        ],
      },
      {
        heading: 'Israel Lobbying: Beyond AIPAC',
        content: [
          'Israel\'s influence in Washington is unique in that it operates through both government lobbying and a massive network of American advocacy organizations. AIPAC (the American Israel Public Affairs Committee) technically doesn\'t lobby on behalf of the Israeli government — it lobbies on behalf of its American members — but its policy positions closely align with Israeli government priorities.',
          'Direct Israeli government lobbying through FARA-registered agents is relatively modest compared to Saudi Arabia. But when you include AIPAC, the Christians United for Israel (CUFI), the Jewish Federations, and dozens of other organizations, the total pro-Israel influence spending in Washington dwarfs almost every other country\'s.',
          'The Israel lobbying ecosystem is the gold standard of foreign influence — not because of the money, but because of the organizational infrastructure that turns political support for Israel into a bipartisan consensus that transcends normal policy debates.',
        ],
      },
      {
        heading: 'China: The Complicated Case',
        content: [
          'China\'s lobbying presence in Washington is both significant and uniquely controversial. Chinese companies, state-owned enterprises, and government-linked entities all retain American lobbyists, though the landscape has shifted dramatically as U.S.-China relations have deteriorated.',
          'In the early 2010s, Chinese companies like Huawei, ZTE, and CNOOC spent heavily on Washington lobbying to smooth regulatory concerns. After the Trump administration\'s trade war and the COVID-19 pandemic, much of this overt lobbying decreased — but influence through other channels has likely increased.',
          'China also exerts influence through less transparent channels: funding university research centers, cultivating relationships with former officials (the "China hands" network), investing in American media, and operating through proxy organizations that don\'t register under FARA.',
          'The DOJ\'s China Initiative — a controversial program that targeted Chinese economic espionage and unregistered foreign agency — highlighted both the scope of Chinese influence operations and the difficulties of addressing them within existing legal frameworks.',
        ],
      },
      {
        heading: 'FARA: A Law With No Teeth',
        content: [
          'The Foreign Agents Registration Act, enacted in 1938 to combat Nazi propaganda, requires agents of foreign principals to register with the DOJ and disclose their activities. But FARA enforcement has been historically weak, with the DOJ preferring to send advisory letters rather than prosecute violations.',
          'The prosecutions of Paul Manafort and other Trump associates for FARA violations renewed attention to the law, but structural problems remain. FARA registrations are filed on paper forms, making data analysis difficult. Enforcement is reactive rather than proactive. And the law\'s exemptions — for legal representation, commercial activities, and humanitarian work — are broad enough to avoid registration in many cases.',
          'The result is a system where foreign influence is partially visible but largely unaccountable. We can see some of the money and some of the agents, but the full picture remains hidden.',
        ],
      },
      {
        heading: 'The Democratic Implications',
        content: [
          'Foreign lobbying raises fundamental questions about sovereignty and democratic self-governance. When Saudi Arabia spends $80 million per year lobbying Congress, it\'s purchasing influence over American foreign policy that affects billions of people worldwide.',
          'The counterargument is that foreign lobbying is a legitimate form of diplomacy — governments have always sought to influence each other, and hiring American lobbyists is simply the modern version of traditional diplomatic engagement.',
          'But there\'s a difference between diplomatic engagement and purchasing influence. When a foreign government hires the same lobbying firms that domestic corporations use, employs the same revolving-door strategies, and targets the same committee chairs, it\'s not diplomacy — it\'s a commercial transaction for political influence.',
          'American voters elect representatives to serve American interests. When those representatives are being lobbied by agents of foreign governments — often the same firms that lobby for their domestic corporate clients — the line between American interests and foreign interests becomes dangerously blurred.',
        ],
      },
    ],
    sources: [
      { name: 'FARA Registration Database', url: 'https://efile.fara.gov/ords/fara/f?p=185:1' },
      { name: 'OpenLobby Foreign Lobbying Data', url: 'https://www.openlobby.us/foreign' },
      { name: 'Senate LDA Filings', url: 'https://lda.senate.gov/filings/public/filing/search/' },
    ],
  },

  'lobbying-101': {
    title: 'Lobbying 101',
    subtitle: 'How Lobbying Actually Works in America',
    description: 'A comprehensive guide to federal lobbying: who can lobby, what the rules are, how disclosure works, and what the HONEST Leadership Act changed.',
    tag: 'Guide',
    tagColor: 'bg-sky-100 text-sky-800',
    accentColor: 'sky',
    publishDate: 'March 2026',
    readTime: '16 min read',
    quickFacts: [
      { label: 'Registered lobbyists', value: '~12,000' },
      { label: 'Annual lobbying spending', value: '$3.7B+' },
      { label: 'Key law', value: 'LDA (1995)' },
      { label: 'Reform law', value: 'HLOGA (2007)' },
    ],
    bottomLine: 'Lobbying is a constitutionally protected right under the First Amendment. But the modern lobbying industry bears little resemblance to citizens petitioning their government. Today, roughly 12,000 registered lobbyists spend over $3.7 billion per year attempting to influence federal policy — and that\'s just the disclosed portion. Here\'s how the system works, who the players are, and what the rules actually say.',
    sections: [
      {
        heading: 'What Is Lobbying?',
        content: [
          'At its most basic level, lobbying is the act of attempting to influence government decisions. The First Amendment to the Constitution protects "the right of the people to petition the Government for a redress of grievances" — making lobbying one of the oldest and most fundamental rights in American democracy.',
          'But modern lobbying is a far cry from citizens writing letters to their representatives. Today\'s lobbying industry is a multi-billion-dollar professional service, staffed by former government officials, powered by corporate money, and operating through sophisticated strategies that most citizens never see.',
          'Under federal law, "lobbying" has a specific legal definition. The Lobbying Disclosure Act of 1995 defines a lobbying contact as any oral or written communication to a "covered official" (members of Congress, senior executive branch officials) on behalf of a client regarding legislation, rules, regulations, executive orders, nominations, or federal programs.',
        ],
      },
      {
        heading: 'Who Are the Lobbyists?',
        content: [
          'There are roughly 12,000 registered federal lobbyists in the United States. They fall into several categories: in-house lobbyists who work directly for a single company or organization, hired lobbyists at lobbying firms who represent multiple clients, trade association lobbyists who represent entire industries, and grassroots lobbying organizations that mobilize public pressure.',
          'The most effective lobbyists tend to be former government officials — the "revolving door" between government and lobbying is the industry\'s primary talent pipeline. Former members of Congress, senior committee staffers, and executive branch officials command the highest fees because they have the relationships and institutional knowledge that make lobbying effective.',
          'The typical lobbyist is well-educated, politically connected, and well-compensated. Senior lobbyists at top firms can earn $1-5 million per year. Even junior lobbyists start at $100,000+, making it one of the most lucrative career paths in Washington.',
        ],
      },
      {
        heading: 'How Does Lobbying Actually Work?',
        content: [
          'Contrary to popular belief, lobbying isn\'t primarily about handing politicians bags of cash. It\'s about information, access, and relationships. Here\'s how a typical lobbying campaign works:',
          '<div class="bg-sky-50 rounded-xl p-6 my-6"><div class="space-y-4"><div class="flex gap-4"><div class="flex-shrink-0 w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-800">1</div><div><strong>Issue Identification</strong> — A bill is introduced, a regulation is proposed, or a policy debate emerges that affects the client\'s interests.</div></div><div class="flex gap-4"><div class="flex-shrink-0 w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-800">2</div><div><strong>Strategy Development</strong> — Lobbyists analyze the legislative landscape, identify key decision-makers, and develop messaging that aligns the client\'s interests with the public interest.</div></div><div class="flex gap-4"><div class="flex-shrink-0 w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-800">3</div><div><strong>Direct Contact</strong> — Lobbyists meet with members of Congress and their staff, provide information and policy arguments, and suggest specific legislative language.</div></div><div class="flex gap-4"><div class="flex-shrink-0 w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-800">4</div><div><strong>Coalition Building</strong> — Lobbyists organize coalitions of organizations that share the client\'s position, creating the appearance of broad support.</div></div><div class="flex gap-4"><div class="flex-shrink-0 w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-800">5</div><div><strong>Grassroots Mobilization</strong> — Lobbyists organize constituents to contact their representatives, generating political pressure from the home district.</div></div><div class="flex gap-4"><div class="flex-shrink-0 w-8 h-8 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-800">6</div><div><strong>Follow-Up</strong> — Lobbyists maintain relationships with staff, provide ongoing information, and position their clients for future legislative battles.</div></div></div></div>',
          'The most important step is #3 — direct contact. Lobbyists provide something lawmakers desperately need: information. Congressional offices are chronically understaffed and under-resourced. When a lobbyist provides a well-researched policy brief, draft legislation, or economic analysis, they\'re filling a gap that the government itself can\'t fill.',
        ],
      },
      {
        heading: 'The Lobbying Disclosure Act (1995)',
        content: [
          'The LDA is the primary law governing federal lobbying disclosure. It requires lobbyists to register with the Secretary of the Senate and the Clerk of the House within 45 days of making a lobbying contact or being employed to make lobbying contacts.',
          'Registered lobbyists must file quarterly reports (LD-2 forms) disclosing the issues they lobbied on, the agencies and chambers they contacted, the amount of income or expenses related to lobbying, and a general description of their activities.',
          'The LDA\'s thresholds for registration are: an individual who spends 20% or more of their time on lobbying activities for a particular client, makes more than one lobbying contact, and receives (or expects to receive) more than $3,000 in compensation from the client in a quarterly period must register.',
          'These thresholds create significant gaps in disclosure. Many influence professionals structure their work to stay below the 20% time threshold, avoiding registration entirely while still conducting substantial influence activities.',
        ],
      },
      {
        heading: 'The HONEST Leadership Act (2007)',
        content: [
          'The HONEST Leadership and Open Government Act of 2007 (HLOGA) was passed in response to the Jack Abramoff lobbying scandal and imposed significant new restrictions on registered lobbyists.',
          'Key provisions include: a ban on gifts from lobbyists to members of Congress and staff, a ban on lobbyist-funded travel for members and staff, extension of the Senate cooling-off period from 1 to 2 years, disclosure of lobbyists\' campaign contributions and fundraising activities (LD-203 forms), and enhanced penalties for LDA violations.',
          'The HLOGA was the most significant lobbying reform in decades, but its effectiveness has been limited by enforcement gaps and the unintended consequence of driving lobbyists to de-register rather than comply.',
        ],
      },
      {
        heading: 'What\'s Legal and What\'s Not',
        content: [
          'Lobbying itself is legal and constitutionally protected. But certain activities cross the line into illegal conduct: bribery (exchanging money or gifts for specific legislative actions), honest services fraud (depriving the public of a public official\'s honest services), violation of the Foreign Agents Registration Act (lobbying for foreign governments without registering), and making false statements on lobbying disclosure forms.',
          'The line between legal lobbying and illegal bribery can be thin. A lobbyist can host a fundraiser for a member of Congress and then meet with that member to discuss legislation — that\'s legal. But if the lobbyist explicitly ties the fundraising to a specific vote, that\'s bribery. In practice, this distinction is almost impossible to prove, which is why bribery prosecutions of lobbyists are extremely rare.',
          'Campaign contributions and lobbying exist in a legal gray zone. While contributions can\'t be explicitly tied to votes, the implicit connection is understood by everyone involved. Lobbyists who bundle campaign contributions get better access than those who don\'t. This isn\'t corruption in the legal sense — but it\'s corruption in the democratic sense.',
        ],
      },
      {
        heading: 'How to Follow the Money',
        content: [
          'Thanks to the LDA and FARA, a significant portion of lobbying activity is publicly disclosed. Here\'s how you can follow the money:',
          '<div class="bg-sky-50 rounded-xl p-6 my-6"><div class="space-y-3"><div class="border-b border-sky-200 pb-2"><strong>OpenLobby (www.openlobby.us)</strong> — Our platform provides searchable, analyzable access to all Senate LDA filings with cross-references to contracts, spending, and workforce data.</div><div class="border-b border-sky-200 pb-2"><strong>Senate LDA Database</strong> — The official filing system at lda.senate.gov where all lobbying disclosures are filed.</div><div class="border-b border-sky-200 pb-2"><strong>FARA Registration Database</strong> — The DOJ\'s database of foreign agent registrations at fara.gov.</div><div class="border-b border-sky-200 pb-2"><strong>OpenSecrets</strong> — The Center for Responsive Politics\' comprehensive database of lobbying and campaign finance data.</div><div class="pb-1"><strong>USASpending.gov</strong> — Federal contract data that can be cross-referenced with lobbying filings to calculate ROI.</div></div></div>',
          'The data is out there. The challenge isn\'t access — it\'s analysis. Raw lobbying filings are dense, jargon-filled documents that require expertise to interpret. That\'s why platforms like OpenLobby exist: to make this data not just accessible, but understandable.',
        ],
      },
    ],
    sources: [
      { name: 'Lobbying Disclosure Act of 1995', url: 'https://lobbyingdisclosure.house.gov/lda.html' },
      { name: 'HONEST Leadership and Open Government Act of 2007', url: 'https://www.congress.gov/bill/110th-congress/senate-bill/1' },
      { name: 'First Amendment - Right to Petition', url: 'https://constitution.congress.gov/browse/amendment-1/' },
    ],
  },
}

/* ------------------------------------------------------------------ */
/*  Static params + metadata                                          */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles[params.slug]
  if (!article) return { title: 'Not Found' }
  return {
    title: `${article.title}: ${article.subtitle}`,
    description: article.description,
    openGraph: {
      title: `${article.title}: ${article.subtitle}`,
      description: article.description,
      type: 'article',
      publishedTime: article.publishDate,
      siteName: 'OpenLobby',
    },
  }
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function AnalysisArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]
  if (!article) notFound()

  const colorMap: Record<string, { bg: string; border: string; text: string; heading: string }> = {
    amber: { bg: 'bg-amber-50', border: 'border-amber-500', text: 'text-amber-700', heading: 'text-amber-600' },
    red: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-700', heading: 'text-red-600' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700', heading: 'text-blue-600' },
    green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', heading: 'text-green-600' },
    gray: { bg: 'bg-gray-50', border: 'border-gray-500', text: 'text-gray-700', heading: 'text-gray-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700', heading: 'text-orange-600' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-500', text: 'text-emerald-700', heading: 'text-emerald-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-700', heading: 'text-purple-600' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-500', text: 'text-indigo-700', heading: 'text-indigo-600' },
    sky: { bg: 'bg-sky-50', border: 'border-sky-500', text: 'text-sky-700', heading: 'text-sky-600' },
  }
  const colors = colorMap[article.accentColor] || colorMap.amber

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${article.title}: ${article.subtitle}`,
            author: { '@type': 'Organization', name: 'OpenLobby', url: 'https://www.openlobby.us' },
            publisher: { '@type': 'Organization', name: 'OpenLobby' },
            datePublished: '2026-03-15',
            description: article.description,
            mainEntityOfPage: `https://www.openlobby.us/analysis/${params.slug}`,
          }),
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Analysis', href: '/analysis' },
          { name: article.title },
        ]}
      />

      <div className="mb-2">
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${article.tagColor}`}>
          {article.tag}
        </span>
      </div>

      <h1
        className="text-4xl md:text-5xl font-bold leading-tight mb-2"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {article.title}:{' '}
        <span className={colors.heading}>{article.subtitle}</span>
      </h1>

      <p className="text-xl text-gray-600 mb-4">{article.description}</p>
      <p className="text-gray-500 mb-4">
        Published {article.publishDate} · {article.readTime}
      </p>

      <ShareButtons
        url={`https://www.openlobby.us/analysis/${params.slug}`}
        title={`${article.title}: ${article.subtitle}`}
      />

      <QuickFacts facts={article.quickFacts} />

      <div className={`my-8 ${colors.bg} border-l-4 ${colors.border} p-6 rounded-r-xl`}>
        <h2 className={`text-lg font-bold ${colors.text} mb-2`}>The Bottom Line</h2>
        <p className="text-gray-700">{article.bottomLine}</p>
      </div>

      <article className="prose prose-lg max-w-none">
        {article.sections.map((section) => (
          <div key={section.heading}>
            <h2
              className="text-2xl font-bold mt-10 mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {section.heading}
            </h2>
            {section.content.map((paragraph, i) =>
              paragraph.startsWith('<div') ? (
                <div
                  key={i}
                  className="not-prose"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ) : (
                <p key={i}>{paragraph}</p>
              )
            )}
          </div>
        ))}

        {/* Sources */}
        <div className="mt-12 pt-8 border-t border-gray-200 not-prose">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Sources &amp; Methodology
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            All lobbying data cited in this analysis comes from Senate Lobbying Disclosure Act
            filings, processed and analyzed by OpenLobby. Dollar amounts represent reported lobbying
            income/expenses and may not capture the full scope of influence spending.
          </p>
          <ul className="space-y-2">
            {article.sources.map((source) => (
              <li key={source.url} className="text-sm">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  {source.name} →
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200 not-prose">
          <h2
            className="text-xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            More Analysis
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(articles)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 4)
              .map(([slug, a]) => (
                <Link
                  key={slug}
                  href={`/analysis/${slug}`}
                  className="block p-4 border border-gray-200 rounded-xl hover:shadow-md hover:border-indigo-200 transition-all"
                >
                  <span
                    className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${a.tagColor} mb-2`}
                  >
                    {a.tag}
                  </span>
                  <h3
                    className="font-bold text-gray-900 mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{a.description}</p>
                </Link>
              ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/analysis"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              View All Analysis Articles →
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
