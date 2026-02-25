'use client'

import { useState, useEffect } from 'react'
import WidgetWrapper from '../WidgetWrapper'

interface Client {
  slug: string
  name: string
  totalIncome: number
}

function formatCurrency(v: number) {
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1)}B`
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`
  return `$${(v / 1e3).toFixed(0)}K`
}

export default function TopSpendersWidget() {
  const [clients, setClients] = useState<Client[]>([])

  useEffect(() => {
    fetch('/data/client-index.json')
      .then(r => r.json())
      .then((data: Client[]) => setClients(data.slice(0, 10)))
      .catch(() => {})
  }, [])

  const max = clients[0]?.totalIncome || 1

  return (
    <WidgetWrapper>
      <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px', color: '#111827' }}>
        Top 10 Lobbying Spenders
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {clients.map((c, i) => (
          <div key={c.slug}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '2px' }}>
              <span style={{ color: '#374151', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '65%' }}>
                {i + 1}. {c.name}
              </span>
              <span style={{ color: '#6b7280', fontWeight: 600 }}>{formatCurrency(c.totalIncome)}</span>
            </div>
            <div style={{ height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(c.totalIncome / max) * 100}%`, background: '#6366f1', borderRadius: '3px' }} />
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '10px', color: '#9ca3af', marginTop: '10px' }}>Total lobbying income 2018–2025</p>
    </WidgetWrapper>
  )
}
