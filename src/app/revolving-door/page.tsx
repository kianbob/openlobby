import { Metadata } from 'next'
import RevolvingDoorClient from './RevolvingDoorClient'

export const metadata: Metadata = {
  title: '5,000+ Ex-Officials Now Lobby Congress',
  description: 'White House advisors, Pentagon officials, congressional chiefs of staff — 5,000+ now lobby their former colleagues. Search by name, agency, or position. The revolving door, exposed.',
}

export default function RevolvingDoorPage() {

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the revolving door in lobbying?","acceptedAnswer":{"@type":"Answer","text":"The revolving door refers to the movement of government officials into lobbying positions. Over 5,000 former government employees — from White House advisors to congressional chiefs of staff — are now registered federal lobbyists."}},{"@type":"Question","name":"How many former government officials become lobbyists?","acceptedAnswer":{"@type":"Answer","text":"According to OpenLobby data, 5,000+ former government officials are currently registered as federal lobbyists, representing about 21% of all active lobbyists."}},{"@type":"Question","name":"Do revolving door lobbyists earn more?","acceptedAnswer":{"@type":"Answer","text":"Yes. Lobbying firms with former government employees on staff earn 369% more revenue on average and have 4.9x more clients than firms without revolving door connections."}},{"@type":"Question","name":"What are the cooling-off period rules for former officials?","acceptedAnswer":{"@type":"Answer","text":"Federal law imposes cooling-off periods: 1 year for most senior executive branch officials, 2 years for very senior officials, and varying restrictions for former members of Congress. However, many former officials work as 'strategic advisors' during cooling-off periods without formally registering as lobbyists."}},{"@type":"Question","name":"Which government agencies produce the most lobbyists?","acceptedAnswer":{"@type":"Answer","text":"The Department of Defense, congressional offices, and the White House produce the most revolving door lobbyists. Defense-sector lobbyists with Pentagon experience charge a significant premium and are heavily sought after by defense contractors."}}]}) }} />

      {/* Substantive content section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>The Revolving Door: How Government Service Becomes Lobbying Gold</h2>

          <p>
            The revolving door between government and K Street is one of the most consequential — and least understood — dynamics in American politics. When a senior government official leaves public service and becomes a lobbyist, they don&apos;t just bring expertise. They bring relationships, insider knowledge, and access that money alone can&apos;t buy.
          </p>

          <p>
            OpenLobby&apos;s analysis of federal lobbying disclosures reveals that <strong>more than 5,000 former government officials</strong> are currently registered as federal lobbyists. That&apos;s roughly 21% of all active lobbyists in Washington — and they command dramatically higher fees than their peers without government experience.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The 369% Premium</h3>

          <p>
            Firms with former government employees on staff earn <strong>369% more revenue</strong> on average than those without revolving door connections. They also attract 4.9 times more clients. The message from the market is clear: government experience is the most valuable credential in lobbying, worth far more than policy expertise or legal training.
          </p>

          <p>
            Why the premium? Former officials know how agencies make decisions, which staffers hold real power, and how to navigate the unwritten rules that govern Washington. A former chief of staff to a committee chairman knows exactly when to call, what language to use in a letter, and which arguments will resonate. That knowledge is worth millions to clients trying to influence legislation.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Where They Come From</h3>

          <p>
            The biggest sources of revolving door lobbyists are the Department of Defense, congressional offices, and the White House. Defense lobbyists with Pentagon experience are especially valuable — they command the highest premiums in the industry and are aggressively recruited by contractors like Lockheed Martin, Boeing, and RTX. In 2026, over 780 former Pentagon officials are active defense lobbyists, helping drive a <strong>$380 million defense lobbying year</strong>.
          </p>

          <p>
            Congressional staffers are another major pipeline. Former chiefs of staff, legislative directors, and committee counsels frequently move to lobbying firms within months of leaving government. While federal law imposes cooling-off periods — one year for senior executive branch officials, two years for very senior officials — many former staffers work as &ldquo;strategic advisors&rdquo; during their cooling-off periods, advising lobbying clients without formally registering.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>The Shadow Lobbying Problem</h3>

          <p>
            The official numbers understate the true scale of the revolving door. An estimated <strong>$6 billion per year</strong> in influence activity goes unreported as &ldquo;shadow lobbying&rdquo; — former officials who advise clients on government relations without triggering lobbying disclosure requirements. They work at think tanks, law firms, and consulting shops, providing &ldquo;strategic counsel&rdquo; that walks right up to the line of lobbying without crossing it.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>What the Data Shows</h3>

          <p>
            Use the searchable table below to explore every former government official in our database who is now a registered federal lobbyist. You can search by name, former agency, or government position. Each entry links to their full lobbying disclosure history, including clients, filings, and spending.
          </p>
        </div>
      </div>

      <RevolvingDoorClient />
    </div>
  )
}
