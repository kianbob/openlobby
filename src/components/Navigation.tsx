'use client'

import { useState } from 'react'
import Link from 'next/link'

const navGroups = [
  {
    label: 'Explore',
    items: [
      { name: 'Top Clients', href: '/clients', desc: 'Who spends the most on lobbying' },
      { name: 'Lobbying Firms', href: '/firms', desc: 'K Street\'s biggest players' },
      { name: 'Lobbyists', href: '/lobbyists', desc: 'The people working the halls' },
      { name: 'Issues', href: '/issues', desc: 'What they\'re lobbying about' },
      { name: 'By State', href: '/states', desc: 'Lobbying by client state' },
    ],
  },
  {
    label: 'Analysis',
    items: [
      { name: 'Trends', href: '/trends', desc: 'Lobbying spending over time' },
      { name: 'Revolving Door', href: '/revolving-door', desc: 'Government to K Street pipeline' },
      { name: 'Foreign Lobbying', href: '/foreign', desc: 'Foreign influence in DC' },
      { name: 'Industry Breakdown', href: '/industries', desc: 'Spending by sector' },
      { name: 'Lobbying ROI', href: '/lobbying-roi', desc: 'Return on lobbying investment' },
      { name: 'Influence Score', href: '/influence-score', desc: 'Most influential clients ranked' },
      { name: 'Arms Race', href: '/arms-race', desc: 'What\'s surging right now' },
    ],
  },
  {
    label: 'Investigations',
    items: [
      { name: 'All Investigations', href: '/investigations', desc: 'Deep-dive articles' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Compare', href: '/compare', desc: 'Compare clients or firms' },
      { name: 'Search', href: '/search', desc: 'Search all data' },
      { name: 'Downloads', href: '/downloads', desc: 'Get the raw data' },
    ],
  },
  {
    label: 'About',
    items: [
      { name: 'About', href: '/about', desc: 'Our mission and methodology' },
    ],
  },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              OpenLobby
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors">
                  {group.label}
                  <svg className="inline-block ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === group.label && (
                  <div className="absolute top-full pt-1 left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/search"
              className="ml-2 p-2 text-gray-500 hover:text-primary"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          {navGroups.map((group) => (
            <div key={group.label} className="border-b border-gray-100">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {group.label}
              </div>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
