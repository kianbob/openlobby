'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import WidgetWrapper from '../WidgetWrapper'

const TrendChart = dynamic(() => import('./TrendChart'), { ssr: false })

interface YearData {
  year: number
  totalIncome: number
}

export default function SpendingTrendWidget() {
  const [data, setData] = useState<YearData[]>([])

  useEffect(() => {
    fetch('/data/trends.json')
      .then(r => r.json())
      .then(setData)
      .catch(() => {})
  }, [])

  return (
    <WidgetWrapper>
      <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px', color: '#111827' }}>
        Lobbying Spending Trend
      </h2>
      {data.length > 0 ? (
        <TrendChart data={data} />
      ) : (
        <div style={{ height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>Loading...</div>
      )}
      <p style={{ fontSize: '10px', color: '#9ca3af', marginTop: '8px' }}>Yearly total lobbying income 2018–2025</p>
    </WidgetWrapper>
  )
}
