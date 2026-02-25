import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ShareButtons from '@/components/ShareButtons'
import SourceCitation from '@/components/SourceCitation'

export const metadata: Metadata = {
  title: 'Foreign Governments Are Lobbying Congress — Here\'s Who\'s Spending the Most',
  description: 'Over 1,000 foreign entities from 50+ countries are registered to lobby the US government. The UK leads with 474 filings, followed by Canada, Switzerland, and China.',
}

export default function ForeignInfluencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { name: 'Investigations', href: '/investigations' },
        { name: 'Foreign Influence' },
      ]} />

      <div className="mb-2">
        <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Foreign Influence</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Foreign Governments Are Lobbying Congress.{' '}
        <span className="text-purple-600">1,000 Entities. 50+ Countries.</span>
      </h1>

      <p className="text-gray-500 mb-4">Published February 2026 · 9 min read</p>

      <ShareButtons url="https://www.openlobby.us/investigations/foreign-influence" title="Foreign Governments Are Lobbying Congress" />

      <div className="my-8 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
        <h2 className="text-lg font-bold text-purple-700 mb-2">The Bottom Line</h2>
        <p className="text-gray-700">
          Over <strong>1,000 foreign entities</strong> — corporations, governments, and state-linked organizations — 
          are disclosed in federal lobbying filings. The <strong>United Kingdom</strong> leads with 130 entities and 474 filings, 
          followed by Canada (303 filings), Switzerland (199), the Netherlands (184), and Germany (182). 
          Chinese entities account for 165 filings — including Huawei, BYD, and TikTok parent ByteDance.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Global Influence Map</h2>

        <p>
          When Americans think of lobbying, they picture K Street firms and domestic corporations. 
          But a significant share of Washington&apos;s influence industry serves foreign interests. 
          Under the Lobbying Disclosure Act — and the related Foreign Agents Registration Act (FARA) — 
          entities with foreign ownership or ties must disclose their connections when lobbying the US government.
        </p>

        <p>
          Our analysis of these disclosures paints a vivid picture of global influence-peddling in Washington. 
          More than 1,000 foreign entities from over 50 countries appear in federal lobbying filings, 
          collectively accounting for thousands of individual disclosure reports.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Which Countries Lobby the Most?</h2>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Foreign Lobbying by Country (Total Filings)</h3>
          <div className="space-y-2">
            {[
              { country: 'United Kingdom', entities: 130, filings: 474 },
              { country: 'Canada', entities: 98, filings: 303 },
              { country: 'Switzerland', entities: 49, filings: 199 },
              { country: 'Netherlands', entities: 51, filings: 184 },
              { country: 'Germany', entities: 45, filings: 182 },
              { country: 'South Korea', entities: 36, filings: 173 },
              { country: 'China', entities: 56, filings: 165 },
              { country: 'Japan', entities: 51, filings: 158 },
              { country: 'France', entities: 42, filings: 120 },
              { country: 'Belgium', entities: 15, filings: 97 },
              { country: 'British Virgin Islands', entities: 29, filings: 88 },
              { country: 'Cayman Islands', entities: 37, filings: 88 },
              { country: 'Luxembourg', entities: 30, filings: 70 },
              { country: 'Ireland', entities: 21, filings: 66 },
            ].map(item => (
              <div key={item.country} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-44">{item.country}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                  <div 
                    className="bg-purple-500 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${(item.filings / 474) * 100}%` }}
                  >
                    <span className="text-xs font-bold text-white">{item.filings}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-500 w-20">{item.entities} entities</span>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The UK: America&apos;s Top Foreign Lobby</h2>

        <p>
          The United Kingdom dominates foreign lobbying disclosures with <strong>130 entities and 474 filings</strong>. 
          This includes major corporations like British American Tobacco (26 filings), multiple Stellantis/Fiat Chrysler 
          holding companies (which are UK-registered), and defense firms with significant US government contracts.
        </p>

        <p>
          The UK&apos;s dominance partly reflects corporate structure — many multinational companies are incorporated 
          in the UK for tax or regulatory reasons, even if their operations are global. But it also reflects 
          the deep economic ties between the US and UK, particularly in defense, finance, and pharmaceuticals.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The China Question</h2>

        <p>
          Chinese entities account for <strong>56 entities and 165 filings</strong> — making China the 7th most active 
          country in US lobbying. The most notable names include:
        </p>

        <ul>
          <li><strong>Huawei Investment &amp; Holding Co.</strong> — 5 filings. The telecom giant lobbied as the US 
          government moved to ban its equipment from American networks.</li>
          <li><strong>BYD Company, Ltd.</strong> — 5 filings. The electric vehicle maker as it expanded into the US market.</li>
          <li><strong>Zhang Yiming</strong> (ByteDance/TikTok owner) — 5 filings. Listed as the individual owner 
          of ByteTeam Ltd, the entity behind TikTok&apos;s lobbying as Congress debated a ban.</li>
          <li><strong>Shanghai Shuoda Investment Centre</strong> — 11 filings. The most active Chinese entity by filing count.</li>
          <li><strong>Ninestar Corporation</strong> — 9 filings. A printer/toner company that faced US sanctions over 
          alleged ties to forced labor.</li>
        </ul>

        <p>
          Chinese lobbying is particularly controversial because of ongoing US-China tensions. Critics argue that 
          Chinese state-linked companies shouldn&apos;t be allowed to lobby the US government at all. 
          Defenders note that lobbying disclosure is preferable to the alternative — covert influence operations.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Tax Havens and Corporate Structures</h2>

        <p>
          Some of the countries on the list are notable not for their geopolitical significance, 
          but for their role as corporate domiciles. The <strong>British Virgin Islands</strong> (88 filings), 
          <strong>Cayman Islands</strong> (88 filings), <strong>Luxembourg</strong> (70 filings), and 
          <strong>Ireland</strong> (66 filings) appear prominently — not because these tiny jurisdictions 
          have vast lobbying interests, but because multinational corporations register holding companies there.
        </p>

        <p>
          When a &quot;Cayman Islands entity&quot; lobbies Congress, it&apos;s typically a subsidiary of an American 
          or European corporation using an offshore structure. The lobbying disclosure rules capture these 
          relationships, providing a window into the complex corporate structures that global companies 
          use to manage their political influence.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>The Biggest Foreign Players</h2>

        <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
          <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Most Active Foreign Entities</h3>
          <div className="space-y-3">
            {[
              { name: 'Interel Holdings, SA/NV', country: 'Belgium', filings: 51, clients: 8 },
              { name: 'Stellantis N.V.', country: 'Netherlands', filings: 34, clients: 3 },
              { name: 'Philip Morris Products S.A.', country: 'Switzerland', filings: 29, clients: 5 },
              { name: 'British American Tobacco P.L.C.', country: 'United Kingdom', filings: 26, clients: 3 },
              { name: 'Danone SA', country: 'France', filings: 23, clients: 3 },
              { name: 'ABB Asea Brown Boveri, Ltd.', country: 'Switzerland', filings: 23, clients: 3 },
              { name: 'Deutsche Telekom AG', country: 'Germany', filings: 22, clients: 8 },
              { name: 'CACIF (business federation)', country: 'Guatemala', filings: 22, clients: 2 },
            ].map(item => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-gray-200 last:border-0">
                <div className="font-semibold text-gray-900 sm:w-64">{item.name}</div>
                <div className="text-purple-600 font-medium text-sm sm:w-28">{item.country}</div>
                <div className="text-sm text-gray-600 flex-1">{item.filings} filings · {item.clients} clients</div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)' }}>Why It Matters</h2>

        <p>
          Foreign lobbying is legal and, in many ways, inevitable in a globalized economy. 
          European automakers lobby on emissions standards. Japanese tech firms lobby on trade policy. 
          Canadian energy companies lobby on pipeline permits.
        </p>

        <p>
          But the scale and scope of foreign influence in Washington raises legitimate questions. 
          When a Chinese state-linked company hires a K Street firm staffed by former Pentagon officials 
          to lobby on defense policy, the public has a right to know. When a Saudi or Russian-connected entity 
          engages lobbyists to shape sanctions policy, transparency is essential.
        </p>

        <p>
          That&apos;s what these disclosures provide: not a prohibition on foreign lobbying, 
          but a public record of who&apos;s trying to influence American policy — and where the money comes from.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8 not-prose">
          <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Explore the Data</h3>
          <p className="text-gray-700 mb-4">Search all 1,000+ foreign entities and see which countries and companies are lobbying the US government.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/foreign" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              Foreign Entities →
            </Link>
            <Link href="/clients" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Top Clients →
            </Link>
          </div>
        </div>
      </article>

      <SourceCitation 
        sources={[
          'Senate LDA Filings (lda.senate.gov)',
          'OpenLobby Foreign Entities Database (1,000+ entities)',
          'Foreign Agents Registration Act (FARA) filings',
        ]}
        lastUpdated="February 2026"
      />
    </div>
  )
}
