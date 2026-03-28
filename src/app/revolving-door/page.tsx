import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import RevolvingDoorClient from './RevolvingDoorClient'

export const metadata: Metadata = {
  title: '5,000+ Ex-Government Officials Now Lobby Congress — Search the Database',
  description: 'White House advisors, Pentagon officials, congressional chiefs of staff — 5,000+ now lobby their former colleagues. Search by name, agency, or position. The revolving door, exposed.',
}

export default function RevolvingDoorPage() {
  let count = 5000
  try {
    const data = JSON.parse(readFileSync(join(process.cwd(), 'public', 'data', 'revolving-door.json'), 'utf-8'))
    count = data.length
  } catch {}

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the revolving door in lobbying?","acceptedAnswer":{"@type":"Answer","text":"The revolving door refers to the movement of government officials into lobbying positions. Over 5,000 former government employees — from White House advisors to congressional chiefs of staff — are now registered federal lobbyists."}},{"@type":"Question","name":"How many former government officials become lobbyists?","acceptedAnswer":{"@type":"Answer","text":"According to OpenLobby data, 5,000+ former government officials are currently registered as federal lobbyists, representing about 21% of all active lobbyists."}},{"@type":"Question","name":"Do revolving door lobbyists earn more?","acceptedAnswer":{"@type":"Answer","text":"Yes. Lobbying firms with former government employees on staff earn 369% more revenue on average and have 4.9x more clients than firms without revolving door connections."}}]}) }} />
      <RevolvingDoorClient />
      {/* SEO content */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>About the Revolving Door</h2>
          <p className="text-gray-600">
            The revolving door between government and the lobbying industry is one of the most powerful dynamics in Washington. 
            Our database tracks <strong>{count.toLocaleString()} former government officials</strong> who now work as registered lobbyists, 
            including former White House advisors, congressional chiefs of staff, agency directors, and military officials.
          </p>
          <p className="text-gray-600">
            These lobbyists disclosed their prior government positions on their Lobbying Disclosure Act (LDA) filings. 
            Research shows that firms employing revolving door lobbyists command a <strong>369% revenue premium</strong> over 
            those without — proof that access to former colleagues has a quantifiable market value.
          </p>
          <p className="text-gray-600">
            The data spans 2018–2025 and includes lobbyists from every branch of government. 
            Use the search above to find specific officials, or browse by position type.
          </p>
        </div>
      </div>
    </div>
  )
}
