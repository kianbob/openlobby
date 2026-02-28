import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              OpenLobby
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Independent data journalism tracking federal lobbying.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Explore</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/clients" className="text-sm hover:text-white transition-colors">Top Clients</Link></li>
              <li><Link href="/firms" className="text-sm hover:text-white transition-colors">Lobbying Firms</Link></li>
              <li><Link href="/lobbyists" className="text-sm hover:text-white transition-colors">Lobbyists</Link></li>
              <li><Link href="/issues" className="text-sm hover:text-white transition-colors">Issues</Link></li>
              <li><Link href="/agencies" className="text-sm hover:text-white transition-colors">Agencies</Link></li>
              <li><Link href="/industries" className="text-sm hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Analysis</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/trends" className="text-sm hover:text-white transition-colors">Spending Trends</Link></li>
              <li><Link href="/revolving-door" className="text-sm hover:text-white transition-colors">Revolving Door</Link></li>
              <li><Link href="/foreign" className="text-sm hover:text-white transition-colors">Foreign Lobbying</Link></li>
              <li><Link href="/lobbying-roi" className="text-sm hover:text-white transition-colors">Lobbying ROI</Link></li>
              <li><Link href="/influence-score" className="text-sm hover:text-white transition-colors">Influence Score</Link></li>
              <li><Link href="/network" className="text-sm hover:text-white transition-colors">Influence Network</Link></li>
              <li><Link href="/geographic" className="text-sm hover:text-white transition-colors">Geographic</Link></li>
              <li><Link href="/cross-reference" className="text-sm hover:text-white transition-colors">Cross-Reference</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Tools &amp; About</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/compare" className="text-sm hover:text-white transition-colors">Compare</Link></li>
              <li><Link href="/search" className="text-sm hover:text-white transition-colors">Search</Link></li>
              <li><Link href="/downloads" className="text-sm hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/investigations" className="text-sm hover:text-white transition-colors">Investigations</Link></li>
              <li><Link href="/methodology" className="text-sm hover:text-white transition-colors">Methodology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Learn</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/how-lobbying-works" className="text-sm hover:text-white transition-colors">How Lobbying Works</Link></li>
              <li><Link href="/lobbying-statistics-2025" className="text-sm hover:text-white transition-colors">Lobbying Statistics 2025</Link></li>
              <li><Link href="/pharmaceutical-lobbying" className="text-sm hover:text-white transition-colors">Pharmaceutical Lobbying</Link></li>
              <li><Link href="/tech-lobbying" className="text-sm hover:text-white transition-colors">Tech Lobbying</Link></li>
              <li><Link href="/defense-lobbying" className="text-sm hover:text-white transition-colors">Defense Lobbying</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Sister Sites</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="https://www.openmedicaid.org" className="text-sm hover:text-white transition-colors">OpenMedicaid</a></li>
              <li><a href="https://www.openmedicare.us" className="text-sm hover:text-white transition-colors">OpenMedicare</a></li>
              <li><a href="https://www.openfeds.org" className="text-sm hover:text-white transition-colors">OpenFeds</a></li>
              <li><a href="https://www.openimmigration.us" className="text-sm hover:text-white transition-colors">OpenImmigration</a></li>
              <li><a href="https://www.openspending.us" className="text-sm hover:text-white transition-colors">OpenSpending</a></li>
              <li><a href="https://www.vaccinewatch.org" className="text-sm hover:text-white transition-colors">VaccineWatch</a></li>
              <li><a href="https://www.opensubsidies.org" className="text-sm hover:text-white transition-colors">OpenSubsidies</a></li>
              <li><a href="https://thedataproject.ai" className="text-sm hover:text-white transition-colors">TheDataProject.ai</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 text-sm">
            <span className="text-gray-400 font-medium">Stay Updated:</span>
            <a href="https://x.com/thedataproject0" className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-800 rounded-full hover:bg-gray-700 text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Follow @thedataproject0
            </a>
            <a href="https://thedataproject.ai" className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-800 rounded-full hover:bg-gray-700 text-white transition-colors">
              TheDataProject.ai →
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Data Sources: <a href="https://lda.senate.gov" className="hover:text-white">Senate LDA Filings</a> · Lobbying Disclosure Act Reports
          </p>
          <p className="text-sm text-gray-500">
            © 2026 OpenLobby. Independent data journalism. Built by{' '}
            <a href="https://thedataproject.ai" className="hover:text-white">TheDataProject.ai</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
