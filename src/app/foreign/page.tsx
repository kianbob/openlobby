'use client'
import Link from 'next/link'
import SourceCitation from '@/components/SourceCitation'
import { useState, useEffect } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatNumber, toTitleCase, slugify } from '@/lib/format'

interface ForeignEntity {
  name: string
  country: string
  filings: number
  clientCount: number
  clients: string[]
}

export default function ForeignPage() {
  const [entities, setEntities] = useState<ForeignEntity[]>([])
  const [search, setSearch] = useState('')
  const [shown, setShown] = useState(50)

  useEffect(() => {
    fetch('/data/foreign-entities.json').then(r => r.json()).then(setEntities).catch(() => {})
  }, [])

  const filtered = entities.filter(e => !search ||
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.country?.toLowerCase().includes(search.toLowerCase())
  )

  // Count by country for top countries
  const countryCounts: Record<string, number> = {}
  entities.forEach(e => {
    if (e.country) countryCounts[e.country] = (countryCounts[e.country] || 0) + 1
  })
  const topCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Foreign Lobbying' }]} />
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Foreign Lobbying in Washington</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        Foreign governments, companies, and organizations that lobby the US Congress.
        Disclosed on LDA filings when a lobbying client has foreign entity affiliations.
      </p>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-indigo-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>AI Overview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">Foreign governments and corporations spend millions lobbying the U.S. Congress — and it&apos;s perfectly legal. The UK leads with hundreds of filings, followed by Canada, Japan, and South Korea. But the most controversial foreign lobbying comes from adversarial nations: Chinese companies like Huawei and TikTok, Saudi Arabian interests, and Russian-linked entities. This data shows which countries are most actively trying to shape American policy.</p>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>{formatNumber(entities.length)}</div>
          <div className="text-xs text-gray-500">Foreign Entities</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{Object.keys(countryCounts).length}</div>
          <div className="text-xs text-gray-500">Countries Represented</div>
        </div>
        <div className="bg-amber-50 rounded-xl p-4">
          <div className="text-sm text-amber-800 leading-relaxed">
            <strong>💡 Did you know?</strong> Foreign lobbying is legal under FARA (Foreign Agents Registration Act). Countries like Saudi Arabia, Japan, and South Korea spend millions yearly to influence US policy.
          </div>
        </div>
      </div>

      {/* Top Countries */}
      {topCountries.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Top Countries by Entity Count</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {topCountries.map(([country, count]) => (
              <button
                key={country}
                onClick={() => setSearch(country)}
                className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="text-lg font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>{count}</div>
                <div className="text-sm text-gray-600">{country}</div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Search */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>All Foreign Entities</h2>
        <input type="text" placeholder="Search by entity name or country..." value={search}
          onChange={e => { setSearch(e.target.value); setShown(50) }}
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none mb-4" />
        <p className="text-sm text-gray-500 mb-4">{formatNumber(filtered.length)} foreign entities{search ? ` matching "${search}"` : ''}</p>
      </section>

      {entities.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center text-gray-500">Loading...</div>
      ) : (
        <>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Entity</th>
                  <th className="px-4 py-3 text-left font-semibold">Country</th>
                  <th className="px-4 py-3 text-right font-semibold">Filings</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Clients</th>
                </tr>
              </thead>
              <tbody>
                {filtered.slice(0, shown).map((e, i) => (
                  <tr key={e.name} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/clients/${slugify(e.name)}`} className="font-medium text-primary hover:underline">{toTitleCase(e.name)}</Link>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => setSearch(e.country)} className="text-gray-600 hover:text-primary hover:underline cursor-pointer">{e.country || 'Unknown'}</button>
                    </td>
                    <td className="px-4 py-3 text-right">{formatNumber(e.filings)}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {(e.clients || []).slice(0, 3).map(c => (
                          <Link key={c} href={`/clients/${slugify(c)}`} className="text-xs bg-indigo-50 px-2 py-0.5 rounded text-indigo-600 hover:bg-indigo-100 transition-colors">{toTitleCase(c)}</Link>
                        ))}
                        {(e.clients || []).length > 3 && <span className="text-xs text-gray-400">+{e.clients.length - 3}</span>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {shown < filtered.length && (
            <div className="text-center mt-6">
              <button onClick={() => setShown(s => s + 50)} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Show More ({formatNumber(filtered.length - shown)} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {/* Related */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Related Investigations</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/investigations/foreign-influence" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🌍 Foreign Influence</div>
            <div className="text-xs text-gray-500 mt-1">1,000+ entities from 50+ countries</div>
          </Link>
          <Link href="/investigations/tariff-lobbying-surge" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📦 The Tariff Panic</div>
            <div className="text-xs text-gray-500 mt-1">Trade lobbying and foreign interests</div>
          </Link>
          <Link href="/investigations/lobbying-statistics" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📊 Lobbying Statistics 2025</div>
            <div className="text-xs text-gray-500 mt-1">The definitive numbers</div>
          </Link>
        </div>
      </section>
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link href="/geographic" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">🗺️ Geographic Analysis</Link>
          <Link href="/clients" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">👤 Top Clients</Link>
          <Link href="/issues/FOR" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📋 Foreign Relations Issues</Link>
        </div>
      </section>

      {/* Additional Content */}
      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How Foreign Lobbying Works</h2>
        <div className="prose prose-lg max-w-none">
          <p>Foreign entities lobby the U.S. government through two primary legal frameworks. The <strong>Lobbying Disclosure Act (LDA)</strong> requires disclosure when a foreign entity is affiliated with a lobbying client — this is the data shown on this page. The <strong>Foreign Agents Registration Act (FARA)</strong> is a separate, stricter law that requires registration by anyone acting as an agent of a foreign principal.</p>
          <p>In practice, most foreign lobbying is conducted through American lobbying firms that are hired by foreign governments, state-owned enterprises, or foreign corporations. These firms file LDA reports listing the foreign entity as an affiliate of their lobbying client. The lobbyists themselves are typically American citizens with extensive government experience.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Why Foreign Governments Lobby Congress</h3>
          <p>Foreign governments lobby for a variety of strategic interests:</p>
          <ul>
            <li><strong>Military aid and arms sales:</strong> Countries lobby for Foreign Military Financing, weapons purchases, and defense cooperation agreements</li>
            <li><strong>Trade policy:</strong> Nations seek favorable trade terms, tariff exemptions, and sanctions relief</li>
            <li><strong>Diplomatic support:</strong> Countries lobby for UN votes, diplomatic recognition, and bilateral agreements</li>
            <li><strong>Investment access:</strong> Foreign governments promote their countries as investment destinations and seek regulatory approvals for state-owned enterprises</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Controversial Foreign Lobbying</h3>
          <p>While allied nations like the UK, Canada, and Japan conducting lobbying is generally uncontroversial, foreign lobbying becomes politically charged when it involves adversarial nations. Chinese companies like Huawei and TikTok&apos;s parent company ByteDance have spent millions lobbying to avoid bans and restrictions. Saudi Arabian interests have lobbied extensively following the Khashoggi murder and in connection with oil policy. Russian-linked entities have faced intense scrutiny since 2016.</p>
          <p>Our data tracks all foreign entity disclosures regardless of the country of origin — use the search above to explore specific countries.</p>

          <h3 className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>The 2025-2026 Foreign Lobbying Landscape</h3>
          <p>Tariff policy has dramatically increased foreign lobbying activity. As the U.S. imposes new tariffs on imports, foreign governments and companies are lobbying aggressively for exemptions and favorable treatment. Countries that previously had minimal lobbying presence have suddenly appeared in LDA filings as trade uncertainty affects their economies.</p>
          <p>Additionally, AI regulation debates have attracted lobbying from foreign tech companies seeking to ensure that U.S. regulations don&apos;t disadvantage their products in the American market.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Can foreign governments lobby the U.S. Congress?", acceptedAnswer: { "@type": "Answer", text: "Yes. Foreign governments, state-owned enterprises, and foreign companies can legally lobby the U.S. government. They typically hire American lobbying firms to represent their interests. This activity is regulated under both the Lobbying Disclosure Act (LDA) and the Foreign Agents Registration Act (FARA)." } },
          { "@type": "Question", name: "Which countries lobby the U.S. the most?", acceptedAnswer: { "@type": "Answer", text: "The UK leads with the most foreign entity filings, followed by Canada, Japan, and South Korea. However, some of the most controversial foreign lobbying comes from China, Saudi Arabia, and other nations with complex U.S. relationships." } },
          { "@type": "Question", name: "What is FARA vs. LDA for foreign lobbying?", acceptedAnswer: { "@type": "Answer", text: "FARA (Foreign Agents Registration Act) requires registration by anyone acting as an agent of a foreign principal. LDA (Lobbying Disclosure Act) requires separate disclosure when a lobbying client has foreign entity affiliations. FARA has stricter requirements and stronger enforcement penalties." } },
          { "@type": "Question", name: "How much do foreign entities spend on U.S. lobbying?", acceptedAnswer: { "@type": "Answer", text: "Foreign entities collectively spend hundreds of millions annually on lobbying the U.S. government, with estimates exceeding $500M per year when combining LDA and FARA-reported activities. This includes direct lobbying as well as public relations and strategic consulting." } },
        ]
      }) }} />

      <SourceCitation sources={["U.S. Senate Lobbying Disclosure Act (LDA) Filings"]} lastUpdated="February 2026" />

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Trade Wars and Foreign Lobbying Surges</h2>
        <div className="prose prose-lg max-w-none">
          <p>The tariff escalations of 2025-2026 have triggered a massive surge in foreign entity lobbying. Companies and governments facing new U.S. tariffs are spending heavily to secure exemptions, delays, or modifications. European automakers, Japanese semiconductor firms, and South Korean steel producers have all dramatically increased their Washington lobbying presence.</p>
          <p>This trade-driven lobbying creates unusual alliances. Foreign manufacturers often lobby alongside their American customers — U.S. retailers and importers who face higher costs from tariffs. Track trade-related lobbying on our <Link href="/issues/TRD" className="text-indigo-600 hover:underline">trade issues page</Link> or see overall spending shifts on the <Link href="/momentum" className="text-indigo-600 hover:underline">momentum tracker</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>FARA vs. LDA: Understanding Foreign Influence Disclosure</h2>
        <div className="prose prose-lg max-w-none">
          <p>Foreign lobbying in the U.S. is governed by two overlapping disclosure regimes. The <strong>Lobbying Disclosure Act (LDA)</strong> requires quarterly reporting when a lobbying client has foreign entity affiliations. The <strong>Foreign Agents Registration Act (FARA)</strong> imposes stricter requirements on anyone acting as an agent of a foreign principal, including detailed reporting of all activities, compensation, and disbursements.</p>
          <p>OpenLobby tracks LDA filings that disclose foreign entity affiliations. FARA filings are maintained separately by the Department of Justice. Together, these datasets provide the most complete picture of foreign influence in U.S. policy. For more on how we process this data, see our <Link href="/methodology" className="text-indigo-600 hover:underline">methodology page</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Explore More</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Link href="/geographic" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">🗺️ Geographic Analysis</div>
            <div className="text-xs text-gray-500 mt-1">Where lobbying concentrates by state</div>
          </Link>
          <Link href="/trends" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📈 Spending Trends</div>
            <div className="text-xs text-gray-500 mt-1">Historical spending patterns</div>
          </Link>
          <Link href="/investigations/what-is-lobbying" className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors border border-gray-100">
            <div className="font-medium text-sm text-indigo-700">📖 What Is Lobbying?</div>
            <div className="text-xs text-gray-500 mt-1">The complete guide</div>
          </Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Country Spotlight: Key Foreign Lobbying Players</h2>
        <div className="prose prose-lg max-w-none">
          <p><strong>United Kingdom:</strong> The UK leads in total foreign entity filings, primarily through defense and pharmaceutical companies with significant U.S. operations. BAE Systems, AstraZeneca, and GlaxoSmithKline are among the most active foreign lobbying entities.</p>
          <p><strong>Japan &amp; South Korea:</strong> Asian allies maintain robust lobbying presences focused on trade policy, defense cooperation, and technology standards. Automakers (Toyota, Hyundai) and electronics firms (Samsung, Sony) are particularly active.</p>
          <p><strong>China:</strong> Chinese entities face increasing scrutiny and disclosure requirements. While direct Chinese government lobbying is controversial, Chinese companies like Huawei and TikTok (ByteDance) have maintained active lobbying operations despite political headwinds.</p>
          <p><strong>Middle East:</strong> Saudi Arabia, the UAE, and Qatar maintain significant lobbying operations focused on defense sales, energy policy, and diplomatic relations. These operations often involve prominent former U.S. officials through the <Link href="/investigations/revolving-door-exposed" className="text-indigo-600 hover:underline">revolving door</Link>.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>How Foreign Lobbying Connects to Domestic Policy</h2>
        <div className="prose prose-lg max-w-none">
          <p>Foreign lobbying often intersects with domestic policy battles. When Congress debates tariffs, foreign manufacturers lobby alongside American importers and retailers. When defense authorization bills include arms sales provisions, allied governments lobby for favorable terms. And when tech regulation proposals could affect global platforms, foreign tech companies engage alongside their American counterparts.</p>
          <p>These intersections mean that understanding foreign lobbying requires understanding the broader domestic landscape. Explore our <Link href="/issue-battles" className="text-indigo-600 hover:underline">issue battles</Link> to see where foreign and domestic interests collide.</p>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Foreign Lobbying Data</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">🔍 Search Foreign Filings</Link>
          <Link href="/downloads" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📥 Download Datasets</Link>
          <Link href="/investigations/lobbying-statistics" className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">📊 Full Statistics</Link>
        </div>
      </section>

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Foreign Lobbying Enforcement</h2>
        <div className="prose prose-lg max-w-none">
          <p>Enforcement of foreign lobbying disclosure requirements has intensified in recent years. The Department of Justice has increased FARA enforcement actions, and several high-profile cases — including prosecutions of former officials who failed to register — have raised the stakes for compliance. However, critics argue that enforcement remains inconsistent and that many foreign influence activities still escape scrutiny.</p>
          <p>The gap between LDA and FARA reporting also creates challenges. Some foreign entities register under LDA but not FARA, or vice versa, making it difficult to get a complete picture of foreign influence. OpenLobby tracks LDA-disclosed foreign entity affiliations; for FARA data, the Department of Justice maintains a separate <a href="https://www.fara.us" className="text-indigo-600 hover:underline">public database</a>.</p>
        </div>
      </section>
          {/* Data Notes */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Data Notes &amp; Methodology</h2>
        <p className="text-gray-600 mb-3">
          All data on this page is sourced from Senate Office of Public Records lobbying disclosure filings
          under the Lobbying Disclosure Act of 1995. Figures reflect reported spending as filed and may be
          subject to amendment. Quarterly totals are annualized where noted.
        </p>
        <p className="text-gray-600 mb-3">
          Industry classifications follow the Center for Responsive Politics methodology. Where companies
          operate across multiple sectors, spending is attributed to the primary business classification.
          Foreign entity designations follow FARA and LDA Section 4 definitions.
        </p>
        <p className="text-gray-600 mb-3">
          Year-over-year comparisons use inflation-adjusted figures (2026 dollars) unless otherwise noted.
          Historical data extends back to 1998 when electronic filing became mandatory.
        </p>
        <p className="text-gray-600">
          For questions about our data or methodology, see our{' '}
          <a href="/methodology" className="text-blue-600 hover:underline">full methodology page</a> or{' '}
          <a href="/about" className="text-blue-600 hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  )
}
