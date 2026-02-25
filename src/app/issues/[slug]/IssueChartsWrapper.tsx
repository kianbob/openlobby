'use client'

import dynamic from 'next/dynamic'

const IssueCharts = dynamic(() => import('./IssueCharts'), { ssr: false })

export default function IssueChartsWrapper({ data }: { data: { year: number; income: number; filings: number }[] }) {
  return <IssueCharts data={data} />
}
