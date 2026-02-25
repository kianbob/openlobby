'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

function formatCurrencyShort(value: number) {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(0)}M`
  return `$${(value / 1_000).toFixed(0)}K`
}

export default function IssueCharts({ data }: { data: { year: number; income: number; filings: number }[] }) {
  if (!data || data.length === 0) return null

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={formatCurrencyShort} tick={{ fontSize: 12 }} width={60} />
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Tooltip formatter={(v: any) => formatCurrencyShort(Number(v))} labelFormatter={(l) => `Year ${l}`} />
          <Bar dataKey="income" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Spending" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
