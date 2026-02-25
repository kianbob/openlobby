'use client'

import { useState, useEffect } from 'react'
import WidgetWrapper from '../WidgetWrapper'

interface Issue {
  code: string
  name: string
  totalSpending: number
}

function formatCurrency(v: number) {
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1)}B`
  if (v >= 1e6) return `$${(v / 1e6).toFixed(0)}M`
  return `$${(v / 1e3).toFixed(0)}K`
}

const barColors = ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#7c3aed', '#4f46e5', '#818cf8', '#6d28d9', '#5b21b6', '#4338ca']

export default function IssueBreakdownWidget() {
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    fetch('/data/issue-index.json')
      .then(r => r.json())
      .then((data: Issue[]) => setIssues(data.slice(0, 10)))
      .catch(() => {})
  }, [])

  const max = issues[0]?.totalSpending || 1

  return (
    <WidgetWrapper>
      <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px', color: '#111827' }}>
        Top 10 Lobbying Issues
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {issues.map((issue, i) => (
          <div key={issue.code}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '2px' }}>
              <span style={{ color: '#374151', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '65%' }}>
                {issue.name}
              </span>
              <span style={{ color: '#6b7280', fontWeight: 600 }}>{formatCurrency(issue.totalSpending)}</span>
            </div>
            <div style={{ height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(issue.totalSpending / max) * 100}%`, background: barColors[i], borderRadius: '3px' }} />
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '10px', color: '#9ca3af', marginTop: '10px' }}>Total spending by issue area 2018–2025</p>
    </WidgetWrapper>
  )
}
