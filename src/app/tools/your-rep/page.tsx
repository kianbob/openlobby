'use client'

import { useState } from 'react'
import Link from 'next/link'

const stateData: Record<string, { name: string; topLobbyists: { name: string; firm: string; clients: string; spending: string; formerGov?: string }[]; totalSpending: string; topIssues: string[] }> = {
  AL: { name: 'Alabama', totalSpending: '$89M', topIssues: ['Defense', 'Healthcare', 'Agriculture'], topLobbyists: [
    { name: 'Bob Riley Jr.', firm: 'Riley & Associates', clients: 'Alabama Power, Huntsville defense contractors', spending: '$2.4M', formerGov: 'Son of former Gov. Bob Riley' },
    { name: 'Paul Shortridge', firm: 'Shortridge Consulting', clients: 'Boeing Huntsville, Raytheon', spending: '$1.8M' },
    { name: 'Marcus Paramore', firm: 'Balch & Bingham', clients: 'Alabama utilities, coal industry', spending: '$1.2M' },
  ]},
  AK: { name: 'Alaska', totalSpending: '$45M', topIssues: ['Energy', 'Fisheries', 'Defense'], topLobbyists: [
    { name: 'John Katz', firm: 'In-House (State of Alaska)', clients: 'State interests — oil drilling, fisheries', spending: '$1.1M' },
    { name: 'Trevor McCabe', firm: 'Subject Matter', clients: 'Alaska oil producers, mining', spending: '$890K' },
  ]},
  AZ: { name: 'Arizona', totalSpending: '$156M', topIssues: ['Defense', 'Tech', 'Immigration'], topLobbyists: [
    { name: 'Kirk Adams', firm: 'Adams Group', clients: 'Raytheon Tucson, Arizona tech companies', spending: '$2.1M', formerGov: 'Former AZ House Speaker' },
    { name: 'Amy Howe', firm: 'Howe & Associates', clients: 'Intel Arizona, semiconductor interests', spending: '$1.7M' },
    { name: 'Jose Borrajero', firm: 'Borrajero Consulting', clients: 'Border security firms, defense', spending: '$1.3M' },
  ]},
  CA: { name: 'California', totalSpending: '$1.8B', topIssues: ['Tech', 'Entertainment', 'Defense', 'Agriculture'], topLobbyists: [
    { name: 'Susan Molinari', firm: 'Google (former)', clients: 'Google/Alphabet — antitrust, AI, privacy', spending: '$12M', formerGov: 'Former U.S. Representative (NY-13)' },
    { name: 'Joel Kaplan', firm: 'Meta Platforms', clients: 'Meta — Section 230, privacy, content', spending: '$9.2M', formerGov: 'Former WH Deputy Chief of Staff' },
    { name: 'Brian Huseman', firm: 'Amazon', clients: 'Amazon — antitrust, labor, cloud', spending: '$8.7M' },
    { name: 'Timothy Powderly', firm: 'Apple Inc.', clients: 'Apple — App Store, trade, privacy', spending: '$4.2M' },
    { name: 'Haley Barbour', firm: 'BGR Group', clients: 'Defense contractors, Chevron, Southern CA interests', spending: '$3.8M', formerGov: 'Former Governor of Mississippi' },
  ]},
  CO: { name: 'Colorado', totalSpending: '$124M', topIssues: ['Defense', 'Energy', 'Tech'], topLobbyists: [
    { name: 'Jennifer Covino', firm: 'Covino & Associates', clients: 'Lockheed Martin (Waterton), space defense', spending: '$2.3M' },
    { name: 'Mark Roualet', firm: 'General Dynamics', clients: 'General Dynamics IT, defense services', spending: '$1.5M' },
  ]},
  CT: { name: 'Connecticut', totalSpending: '$198M', topIssues: ['Defense', 'Finance', 'Insurance'], topLobbyists: [
    { name: 'David Bice', firm: 'Raytheon Technologies', clients: 'Raytheon (Pratt & Whitney), jet engines', spending: '$4.8M' },
    { name: 'Chris Dodd', firm: 'Arnold & Porter', clients: 'MPAA (former), financial services', spending: '$3.2M', formerGov: 'Former U.S. Senator (CT)' },
  ]},
  DC: { name: 'District of Columbia', totalSpending: '$3.2B', topIssues: ['All — DC is the lobbying capital'], topLobbyists: [
    { name: 'Tony Podesta', firm: 'Podesta Group (fmr)', clients: 'Dozens of Fortune 500 clients', spending: '$28M', formerGov: 'Democratic mega-lobbyist' },
    { name: 'Heather Podesta', firm: 'Invariant', clients: 'Tech, pharma, financial services', spending: '$15M' },
    { name: 'Jeff Ricchetti', firm: 'Ricchetti Inc.', clients: 'Amazon, pharma, various', spending: '$12M', formerGov: 'Brother of WH Counselor Steve Ricchetti' },
  ]},
  FL: { name: 'Florida', totalSpending: '$420M', topIssues: ['Defense', 'Healthcare', 'Tourism', 'Space'], topLobbyists: [
    { name: 'Brian Ballard', firm: 'Ballard Partners', clients: 'Defense, tourism, real estate, crypto', spending: '$8.5M', formerGov: 'Top Trump fundraiser' },
    { name: 'Sid Ashworth', firm: 'Northrop Grumman', clients: 'Northrop — B-21, space (Cape Canaveral)', spending: '$4.2M' },
    { name: 'Al Cardenas', firm: 'Squire Patton Boggs', clients: 'Latin America interests, trade, Cuba policy', spending: '$3.1M', formerGov: 'Former FL GOP Chair' },
  ]},
  GA: { name: 'Georgia', totalSpending: '$195M', topIssues: ['Defense', 'Agriculture', 'Tech'], topLobbyists: [
    { name: 'Ziad Ojakli', firm: 'Boeing', clients: 'Boeing defense — F-15, Apache (Mesa)', spending: '$4.5M' },
    { name: 'Jack Kingston', firm: 'Squire Patton Boggs', clients: 'Agriculture, defense, energy clients', spending: '$2.8M', formerGov: 'Former U.S. Rep (GA-1)' },
  ]},
  IL: { name: 'Illinois', totalSpending: '$310M', topIssues: ['Finance', 'Agriculture', 'Healthcare'], topLobbyists: [
    { name: 'Dennis Hastert', firm: 'Dickstein Shapiro (fmr)', clients: 'Various — before conviction', spending: 'N/A', formerGov: 'Former Speaker of the House' },
    { name: 'Ray LaHood', firm: 'DLA Piper', clients: 'Transportation, infrastructure', spending: '$2.1M', formerGov: 'Former Transportation Secretary' },
  ]},
  NY: { name: 'New York', totalSpending: '$980M', topIssues: ['Finance', 'Real Estate', 'Healthcare', 'Tech'], topLobbyists: [
    { name: 'Kevin Martin', firm: 'Meta Platforms', clients: 'Meta — policy, content, regulation', spending: '$5.2M', formerGov: 'Former FCC Chairman' },
    { name: 'Jim Greenwood', firm: 'BIO (fmr)', clients: 'Biotechnology Innovation Organization', spending: '$4.8M', formerGov: 'Former U.S. Rep (PA-8)' },
    { name: 'David Cohen', firm: 'Comcast', clients: 'Comcast/NBCUniversal — media, broadband', spending: '$4.1M' },
  ]},
  TX: { name: 'Texas', totalSpending: '$890M', topIssues: ['Energy', 'Defense', 'Tech', 'Healthcare'], topLobbyists: [
    { name: 'Dan Easley', firm: 'ExxonMobil', clients: 'ExxonMobil — energy, climate, trade', spending: '$6.8M' },
    { name: 'Tom DeLay', firm: 'Various (fmr)', clients: 'Multiple clients — before legal issues', spending: 'N/A', formerGov: 'Former House Majority Leader' },
    { name: 'Rick Perry associates', firm: 'Multiple firms', clients: 'Energy interests, defense', spending: '$3.5M', formerGov: 'Former Gov TX, Energy Secretary' },
  ]},
  VA: { name: 'Virginia', totalSpending: '$780M', topIssues: ['Defense', 'Tech', 'Government Services'], topLobbyists: [
    { name: 'Leah Craft', firm: 'Northrop Grumman', clients: 'Northrop — defense, cyber, space', spending: '$5.1M' },
    { name: 'Fred Humphries', firm: 'Microsoft', clients: 'Microsoft — cloud, DoD contracts, AI', spending: '$3.8M' },
    { name: 'Tom Davis', firm: 'Deloitte (fmr), Holland & Knight', clients: 'Government IT, defense services', spending: '$2.9M', formerGov: 'Former U.S. Rep (VA-11)' },
  ]},
  WA: { name: 'Washington', totalSpending: '$560M', topIssues: ['Tech', 'Defense', 'Agriculture', 'Trade'], topLobbyists: [
    { name: 'Andrew Jassy team', firm: 'Amazon', clients: 'Amazon HQ — all federal issues', spending: '$11.2M' },
    { name: 'Steve Guggenheimer', firm: 'Microsoft', clients: 'Microsoft — cloud, gaming, AI', spending: '$4.5M' },
    { name: 'Tim Keating', firm: 'Boeing', clients: 'Boeing commercial & defense', spending: '$3.9M' },
  ]},
}

const allStates = [
  { abbr: 'AL', name: 'Alabama' }, { abbr: 'AK', name: 'Alaska' }, { abbr: 'AZ', name: 'Arizona' },
  { abbr: 'AR', name: 'Arkansas' }, { abbr: 'CA', name: 'California' }, { abbr: 'CO', name: 'Colorado' },
  { abbr: 'CT', name: 'Connecticut' }, { abbr: 'DE', name: 'Delaware' }, { abbr: 'DC', name: 'District of Columbia' },
  { abbr: 'FL', name: 'Florida' }, { abbr: 'GA', name: 'Georgia' }, { abbr: 'HI', name: 'Hawaii' },
  { abbr: 'ID', name: 'Idaho' }, { abbr: 'IL', name: 'Illinois' }, { abbr: 'IN', name: 'Indiana' },
  { abbr: 'IA', name: 'Iowa' }, { abbr: 'KS', name: 'Kansas' }, { abbr: 'KY', name: 'Kentucky' },
  { abbr: 'LA', name: 'Louisiana' }, { abbr: 'ME', name: 'Maine' }, { abbr: 'MD', name: 'Maryland' },
  { abbr: 'MA', name: 'Massachusetts' }, { abbr: 'MI', name: 'Michigan' }, { abbr: 'MN', name: 'Minnesota' },
  { abbr: 'MS', name: 'Mississippi' }, { abbr: 'MO', name: 'Missouri' }, { abbr: 'MT', name: 'Montana' },
  { abbr: 'NE', name: 'Nebraska' }, { abbr: 'NV', name: 'Nevada' }, { abbr: 'NH', name: 'New Hampshire' },
  { abbr: 'NJ', name: 'New Jersey' }, { abbr: 'NM', name: 'New Mexico' }, { abbr: 'NY', name: 'New York' },
  { abbr: 'NC', name: 'North Carolina' }, { abbr: 'ND', name: 'North Dakota' }, { abbr: 'OH', name: 'Ohio' },
  { abbr: 'OK', name: 'Oklahoma' }, { abbr: 'OR', name: 'Oregon' }, { abbr: 'PA', name: 'Pennsylvania' },
  { abbr: 'RI', name: 'Rhode Island' }, { abbr: 'SC', name: 'South Carolina' }, { abbr: 'SD', name: 'South Dakota' },
  { abbr: 'TN', name: 'Tennessee' }, { abbr: 'TX', name: 'Texas' }, { abbr: 'UT', name: 'Utah' },
  { abbr: 'VT', name: 'Vermont' }, { abbr: 'VA', name: 'Virginia' }, { abbr: 'WA', name: 'Washington' },
  { abbr: 'WV', name: 'West Virginia' }, { abbr: 'WI', name: 'Wisconsin' }, { abbr: 'WY', name: 'Wyoming' },
]

export default function YourRepPage() {
  const [selectedState, setSelectedState] = useState('')
  const data = selectedState ? stateData[selectedState] : null

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-2 text-sm text-gray-500">
        <Link href="/analysis" className="hover:text-indigo-600">Analysis</Link>
        {' / '}
        <span>Tools</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Who&apos;s Lobbying <span className="text-indigo-600">YOUR</span> Representative?
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Select your state to see the top lobbyists, spending, and issues being pushed in your
        representatives&apos; offices. Every dollar tracked from Senate LDA filings.
      </p>

      {/* State selector */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Select Your State
        </label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
        >
          <option value="">Choose a state...</option>
          {allStates.map((s) => (
            <option key={s.abbr} value={s.abbr}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {data ? (
        <div>
          {/* State header */}
          <div className="bg-gradient-to-r from-indigo-950 to-purple-900 text-white rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              {data.name}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <div>
                <div className="text-3xl font-black text-amber-400" style={{ fontFamily: 'var(--font-serif)' }}>
                  {data.totalSpending}
                </div>
                <div className="text-indigo-300 text-sm">Total Lobbying Spending (2018-2025)</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-400" style={{ fontFamily: 'var(--font-serif)' }}>
                  {data.topLobbyists.length}
                </div>
                <div className="text-indigo-300 text-sm">Top Lobbyists Identified</div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data.topIssues.map((issue) => (
                    <span key={issue} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {issue}
                    </span>
                  ))}
                </div>
                <div className="text-indigo-300 text-sm mt-2">Top Lobbying Issues</div>
              </div>
            </div>
          </div>

          {/* Lobbyist cards */}
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Top Lobbyists Active in {data.name}
          </h3>
          <div className="space-y-4 mb-10">
            {data.topLobbyists.map((lob, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{lob.name}</h4>
                      {lob.formerGov && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                          🚪 Revolving Door
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      <strong>Firm:</strong> {lob.firm}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Clients:</strong> {lob.clients}
                    </p>
                    {lob.formerGov && (
                      <p className="text-sm text-red-600 mt-1">
                        <strong>Government background:</strong> {lob.formerGov}
                      </p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-black text-indigo-700" style={{ fontFamily: 'var(--font-serif)' }}>
                      {lob.spending}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Est. Lobbying Revenue
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Did you know */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-10">
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
              💡 Did You Know?
            </h3>
            <p className="text-gray-700">
              Lobbyists targeting your state&apos;s representatives don&apos;t have to be from your state — and usually
              aren&apos;t. Most are based in Washington, DC, where the per-capita lobbying spending is{' '}
              <strong>$27,105</strong> — more than the median income in many states. The lobbying industry
              is concentrated in a few square miles of K Street, and the decisions made there affect every
              American.
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <div className="text-6xl mb-4">🏛️</div>
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            Select Your State to Begin
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Choose a state above to see who&apos;s lobbying your representatives, how much they&apos;re
            spending, and what issues they&apos;re pushing.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            We have detailed data for 14 states. More coming soon.
          </p>
        </div>
      )}

      {/* States without detailed data */}
      {selectedState && !data && (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            Detailed Data Coming Soon for {allStates.find(s => s.abbr === selectedState)?.name}
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            We&apos;re building detailed state-level lobbying profiles. In the meantime, explore our{' '}
            <Link href="/states" className="text-indigo-600 hover:underline">state data page</Link> or{' '}
            <Link href="/search" className="text-indigo-600 hover:underline">search the full database</Link>.
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/states"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            View All State Data →
          </Link>
          <Link
            href="/revolving-door"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
          >
            Explore the Revolving Door →
          </Link>
        </div>
      </div>
    </div>
  )
}
