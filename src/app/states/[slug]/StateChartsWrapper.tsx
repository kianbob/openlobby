'use client'

import dynamic from 'next/dynamic'

const StateCharts = dynamic(() => import('./StateCharts'), { ssr: false })

export default function StateChartsWrapper({ data }: { data: { year: number; income: number }[] }) {
  return <StateCharts data={data} />
}
