import { Metadata } from 'next'
import RevolvingDoorClient from './RevolvingDoorClient'

export const metadata: Metadata = {
  title: '5,000+ Ex-Officials Now Lobby Congress',
  description: 'White House advisors, Pentagon officials, congressional chiefs of staff — 5,000+ now lobby their former colleagues. Search by name, agency, or position. The revolving door, exposed.',
}

export default function RevolvingDoorPage() {

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the revolving door in lobbying?","acceptedAnswer":{"@type":"Answer","text":"The revolving door refers to the movement of government officials into lobbying positions. Over 5,000 former government employees — from White House advisors to congressional chiefs of staff — are now registered federal lobbyists."}},{"@type":"Question","name":"How many former government officials become lobbyists?","acceptedAnswer":{"@type":"Answer","text":"According to OpenLobby data, 5,000+ former government officials are currently registered as federal lobbyists, representing about 21% of all active lobbyists."}},{"@type":"Question","name":"Do revolving door lobbyists earn more?","acceptedAnswer":{"@type":"Answer","text":"Yes. Lobbying firms with former government employees on staff earn 369% more revenue on average and have 4.9x more clients than firms without revolving door connections."}}]}) }} />
      <RevolvingDoorClient />
    </div>
  )
}
