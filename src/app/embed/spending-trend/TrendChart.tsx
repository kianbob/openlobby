'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface YearData {
  year: number
  totalIncome: number
}

export default function TrendChart({ data }: { data: YearData[] }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
        <XAxis dataKey="year" tick={{ fontSize: 11 }} />
        <YAxis
          tickFormatter={(v: number) => `$${(v / 1e9).toFixed(1)}B`}
          tick={{ fontSize: 11 }}
          width={55}
        />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Tooltip formatter={(v: any) => [`$${(Number(v) / 1e9).toFixed(2)}B`, 'Total Income']} />
        <Line type="monotone" dataKey="totalIncome" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
