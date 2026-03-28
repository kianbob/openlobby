'use client'

import { useState } from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const yearlyTrends = [
  { year: 2018, income: 4.02, filings: 78416 },
  { year: 2019, income: 4.09, filings: 80040 },
  { year: 2020, income: 4.10, filings: 84085 },
  { year: 2021, income: 4.40, filings: 90760 },
  { year: 2022, income: 4.96, filings: 93482 },
  { year: 2023, income: 4.97, filings: 95236 },
  { year: 2024, income: 5.15, filings: 96649 },
  { year: 2025, income: 6.02, filings: 107600 },
]

const topSpenders = [
  { name: 'US Chamber of Commerce', spending: 607.9, slug: 'chamber-of-commerce-of-the-usa' },
  { name: 'Business Roundtable', spending: 210.3, slug: 'business-roundtable-inc' },
  { name: 'Meta Platforms', spending: 168.9, slug: 'meta-platforms-inc-and-various-subsidiaries' },
  { name: 'Open Society Action Fund', spending: 100.5, slug: 'open-society-action-fund' },
  { name: "America's Health Insurance (AHIP)", spending: 96.4, slug: 'americas-health-insurance-plans-inc-ahip' },
  { name: 'Bayer Corporation', spending: 73.0, slug: 'bayer-corporation-consolidated-report' },
  { name: 'Toyota Motor North America', spending: 64.9, slug: 'toyota-motor-north-america-inc-tma' },
  { name: 'Natl Multifamily Housing Council', spending: 61.0, slug: 'national-multifamily-housing-council-inc' },
  { name: 'Dow Chemical', spending: 60.4, slug: 'dow-chemical-company-dba-dow' },
  { name: 'American Electric Power', spending: 59.5, slug: 'american-electric-power-company-inc-and-affiliated-corporations' },
]

const trendingIssues = [
  { code: 'BUD', name: 'Budget/Appropriations', spending: 3.10 },
  { code: 'HCR', name: 'Health Issues', spending: 2.69 },
  { code: 'TAX', name: 'Taxation', spending: 2.58 },
  { code: 'DEF', name: 'Defense', spending: 1.65 },
  { code: 'TRD', name: 'Trade', spending: 1.39 },
  { code: 'MMM', name: 'Medicare/Medicaid', spending: 1.36 },
  { code: 'ENG', name: 'Energy/Nuclear', spending: 1.26 },
  { code: 'TRA', name: 'Transportation', spending: 1.15 },
]

function formatBillions(v: number) {
  return `$${v.toFixed(1)}B`
}

export function SpendingTrendChart() {
  const [chartType, setChartType] = useState<'area' | 'bar'>('area')

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
            Lobbying Spending Trend
          </h3>
          <p className="text-sm text-gray-500">Total lobbying income by year (billions)</p>
        </div>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setChartType('area')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${chartType === 'area' ? 'bg-white shadow text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Area
          </button>
          <button
            onClick={() => setChartType('bar')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${chartType === 'bar' ? 'bg-white shadow text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Bar
          </button>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'area' ? (
            <AreaChart data={yearlyTrends}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(v) => `$${v}B`} tick={{ fontSize: 12 }} domain={[3.5, 6.5]} />
              <Tooltip formatter={(value: number) => [formatBillions(value), 'Spending']} />
              <Area type="monotone" dataKey="income" stroke="#6366f1" strokeWidth={3} fill="url(#colorIncome)" />
            </AreaChart>
          ) : (
            <BarChart data={yearlyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(v) => `$${v}B`} tick={{ fontSize: 12 }} domain={[0, 7]} />
              <Tooltip formatter={(value: number) => [formatBillions(value), 'Spending']} />
              <Bar dataKey="income" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
        <span className="inline-block w-3 h-3 rounded-full bg-indigo-500" />
        <span>2025 spending hit a record <strong className="text-gray-600">$6.0B</strong> — up 50% from 2018</span>
      </div>
    </div>
  )
}

export function TopSpendersSection() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
        🏆 Top Spenders Right Now
      </h3>
      <p className="text-sm text-gray-500 mb-4">Highest cumulative lobbying spend (2018–2025)</p>
      <div className="space-y-2">
        {topSpenders.map((client, i) => (
          <a
            key={client.slug}
            href={`/clients/${client.slug}`}
            className="flex items-center gap-3 group hover:bg-indigo-50 rounded-lg px-3 py-2 -mx-3 transition-colors"
          >
            <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i < 3 ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}>
              {i + 1}
            </span>
            <span className="flex-1 min-w-0 text-sm font-medium text-gray-900 truncate group-hover:text-indigo-700 transition-colors">
              {client.name}
            </span>
            <span className="text-sm font-semibold text-indigo-600">${client.spending.toFixed(0)}M</span>
          </a>
        ))}
      </div>
      <a href="/clients" className="inline-block mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
        View all clients →
      </a>
    </div>
  )
}

export function TrendingIssuesSection() {
  const maxSpending = trendingIssues[0].spending
  return (
    <div>
      <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
        🔥 Hottest Lobbying Issues
      </h3>
      <p className="text-sm text-gray-500 mb-4">Most-lobbied issue areas by total spending</p>
      <div className="space-y-3">
        {trendingIssues.map((issue) => (
          <a
            key={issue.code}
            href={`/issues/${issue.code}`}
            className="block group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-800 group-hover:text-indigo-700 transition-colors">
                {issue.name}
              </span>
              <span className="text-xs font-semibold text-gray-500">${issue.spending.toFixed(2)}B</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all group-hover:from-amber-400 group-hover:to-amber-500"
                style={{ width: `${(issue.spending / maxSpending) * 100}%` }}
              />
            </div>
          </a>
        ))}
      </div>
      <a href="/issues" className="inline-block mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
        View all issues →
      </a>
    </div>
  )
}

export function ActionSection() {
  const actions = [
    { href: '/tools/your-rep', icon: '🏛️', title: 'Find Your Representative', desc: 'See who\'s lobbying YOUR representative and how much they\'re spending' },
    { href: '/tools/industry-compare', icon: '📊', title: 'Compare Industries', desc: 'Which sectors dominate? Compare lobbying spend across all industries' },
    { href: '/search', icon: '🔍', title: 'Search Everything', desc: 'Search 38,000 clients, 7,700 firms, and 23,500 lobbyists instantly' },
    { href: '/your-tax-dollar', icon: '💸', title: 'Your Tax Dollar Calculator', desc: 'How much of YOUR money goes to lobbied industries? Find out' },
    { href: '/lobbying-roi', icon: '📈', title: 'ROI Calculator', desc: 'See the insane return on investment companies get from lobbying' },
    { href: '/revolving-door', icon: '🚪', title: 'Revolving Door Tracker', desc: '5,000+ former officials now lobby Congress. Find them here' },
  ]

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
          What Can You Do?
        </h2>
        <p className="text-gray-600 text-lg">Knowledge is power. Here&apos;s how to use it.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {actions.map((action) => (
          <a
            key={action.href}
            href={action.href}
            className="group block p-6 bg-gradient-to-br from-white to-indigo-50/50 border border-gray-200 rounded-2xl hover:shadow-xl hover:border-indigo-300 hover:scale-[1.02] transition-all duration-200"
          >
            <div className="text-4xl mb-3">{action.icon}</div>
            <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
              {action.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{action.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
