'use client'

import dynamic from 'next/dynamic'

const BarChart = dynamic(() => import('recharts').then(m => m.BarChart), { ssr: false })
const Bar = dynamic(() => import('recharts').then(m => m.Bar), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false })
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false })

const yearlyData = [
  { year: '2018', spending: 1398 },
  { year: '2019', spending: 1466 },
  { year: '2020', spending: 1624 },
  { year: '2021', spending: 1756 },
  { year: '2022', spending: 2047 },
  { year: '2023', spending: 2240 },
  { year: '2024', spending: 1981 },
  { year: '2025', spending: 2702 },
]

export default function YearlyChart() {
  return (
    <div className="bg-gray-50 rounded-xl p-4" style={{ height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={yearlyData}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v: any) => `$${v}M`} />
          <Tooltip formatter={(v: any) => [`$${v}M`, 'Spending']} />
          <Bar dataKey="spending" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
