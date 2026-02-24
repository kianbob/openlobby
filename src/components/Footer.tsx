import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Analysis</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/trends" className="text-sm hover:text-white transition-colors">Spending Trends</Link></li>
              <li><Link href="/revolving-door" className="text-sm hover:text-white transition-colors">Revolving Door</Link></li>
              <li><Link href="/foreign" className="text-sm hover:text-white transition-colors">Foreign Lobbying</Link></li>
              <li><Link href="/industries" className="text-sm hover:text-white transition-colors">By Industry</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">About</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/data-sources" className="text-sm hover:text-white transition-colors">Data Sources</Link></li>
              <li><Link href="/downloads" className="text-sm hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="/methodology" className="text-sm hover:text-white transition-colors">Methodology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Sister Sites</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="https://www.openmedicaid.org" className="text-sm hover:text-white transition-colors">OpenMedicaid</a></li>
              <li><a href="https://www.openmedicare.us" className="text-sm hover:text-white transition-colors">OpenMedicare</a></li>
              <li><a href="https://www.openfeds.org" className="text-sm hover:text-white transition-colors">OpenFeds</a></li>
              <li><a href="https://www.openspending.us" className="text-sm hover:text-white transition-colors">OpenSpending</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
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
