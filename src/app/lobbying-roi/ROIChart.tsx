'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { formatCurrency } from '@/lib/format'

interface ChartEntry {
  name: string
  roi: number
  lobbying: number
  contracts: number
}

export default function ROIChart({ data }: { data: ChartEntry[] }) {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="name"
            angle={-35}
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 11, fill: '#6b7280' }}
            height={80}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#6b7280' }}
            tickFormatter={(v) => `${v.toLocaleString()}x`}
          />
          <Tooltip
            formatter={(value: any, name: any) => {
              if (name === 'roi') return [`${value.toLocaleString()}x`, 'ROI']
              return [formatCurrency(value), name]
            }}
            contentStyle={{ borderRadius: 8, border: '1px solid #e5e7eb' }}
          />
          <Bar dataKey="roi" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
