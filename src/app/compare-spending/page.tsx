import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SourceCitation from '@/components/SourceCitation'
import ShareStatCards from './ShareStatCards'

export const metadata: Metadata = {
  title: 'Lobbying Spending in Perspective | OpenLobby',
  description: 'Put $37.7 billion in lobbying spending into context with relatable comparisons — from NASA budgets to teacher salaries.',
  openGraph: {
    title: 'Lobbying Spending in Perspective',
    description: '$37.7B in lobbying spending since 2018. Here\'s what that actually means.',
    type: 'website',
  },
}

const comparisons = [
  {
    bigNumber: '$37.7B',
    headline: '149% of NASA\'s Budget',
    description: 'Total lobbying spending since 2018 is 149% of NASA\'s annual budget ($25.4B). Lobbyists outspend rocket science — by half again.',
    source: 'NASA FY2024 budget; OpenLobby data 2018–2025',
    tweet: '💰 $37.7 BILLION in lobbying since 2018 — that\'s 149% of NASA\'s entire annual budget. Lobbyists outspend rocket science. via @OpenLobby',
    color: 'from-indigo-500 to-blue-600',
    emoji: '🚀',
  },
  {
    bigNumber: '$2.7B',
    headline: 'More Than 15+ Countries\' GDP',
    description: '2025 lobbying spending alone exceeds the GDP of Tonga ($536M), Palau ($284M), Micronesia ($427M), and a dozen other nations — combined.',
    source: 'World Bank GDP data; OpenLobby 2025 data',
    tweet: '🌍 US lobbying in 2025 ($2.7B) exceeds the GDP of 15+ entire countries including Tonga, Palau, and Micronesia. via @OpenLobby',
    color: 'from-emerald-500 to-teal-600',
    emoji: '🌍',
  },
  {
    bigNumber: '$80M+',
    headline: 'US Chamber > Most Small Towns',
    description: 'The US Chamber of Commerce spends over $80 million per year on lobbying — more than the entire annual budget of most American towns under 10,000 people.',
    source: 'Census of Governments; OpenLobby client data',
    tweet: '🏘️ The US Chamber of Commerce spends MORE on lobbying per year ($80M+) than most small towns\' entire budgets. via @OpenLobby',
    color: 'from-amber-500 to-orange-600',
    emoji: '🏘️',
  },
  {
    bigNumber: '$3.3B',
    headline: '33,000 Teacher Salaries',
    description: 'Big Pharma\'s lobbying tab since 2018 could fund 33,000 teacher salaries at the US average of $100K (salary + benefits). That\'s enough for a mid-size school district.',
    source: 'BLS teacher compensation data; OpenLobby pharma analysis',
    tweet: '💊 Big Pharma spent $3.3B on lobbying — enough to fund 33,000 teacher salaries. Priorities? via @OpenLobby',
    color: 'from-red-500 to-pink-600',
    emoji: '💊',
  },
  {
    bigNumber: '49,600x',
    headline: 'Best ROI in History',
    description: 'TriWest Healthcare spent $270K lobbying and received $13.4B in federal contracts. That\'s a 49,600x return — better than any stock, crypto, or lottery ticket in history.',
    source: 'USASpending.gov; OpenLobby ROI analysis',
    tweet: '📈 Defense contractor spent $270K lobbying → got $13.4B in contracts. A 49,600x return. No stock in history comes close. via @OpenLobby',
    color: 'from-green-500 to-emerald-600',
    emoji: '📈',
  },
  {
    bigNumber: '60,000',
    headline: 'Homes at Median Price',
    description: '$37.7B in lobbying could buy 149,000 homes at the US median price of $253K (2018 median). That\'s enough to house a small city.',
    source: 'US Census median home price; OpenLobby data',
    tweet: '🏠 $37.7B in lobbying spending could buy 149,000 homes. That\'s enough to house a major city. via @OpenLobby',
    color: 'from-violet-500 to-purple-600',
    emoji: '🏠',
  },
  {
    bigNumber: '$46',
    headline: 'Per American Since 2018',
    description: 'Spread across the US population, lobbying spending works out to about $46 per person since 2018. That\'s $46 of corporate influence on the laws that govern your life.',
    source: 'US Census population; OpenLobby data 2018–2025',
    tweet: '🇺🇸 $46 per American — that\'s how much has been spent on lobbying since 2018. $46 of corporate influence on YOUR laws. via @OpenLobby',
    color: 'from-sky-500 to-cyan-600',
    emoji: '🇺🇸',
  },
]

export default function CompareSpendingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Tools', href: '/search' }, { name: 'Spending Comparisons' }]} />

      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        Lobbying Spending in Perspective
      </h1>
      <p className="text-gray-600 mb-10 max-w-3xl text-lg">
        $37.7 billion is hard to wrap your head around. These comparisons put lobbying spending 
        in context — and make it easy to share.
      </p>

      <ShareStatCards comparisons={comparisons} />

      <SourceCitation
        sources={[
          'US Senate Lobbying Disclosure Act filings (2018–2025)',
          'NASA FY2024 Budget',
          'World Bank GDP Data',
          'US Census Bureau',
          'Bureau of Labor Statistics',
          'USASpending.gov',
        ]}
        lastUpdated="February 2025"
      />
    </div>
  )
}
