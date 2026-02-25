'use client'

import dynamic from 'next/dynamic'

const IndustryCharts = dynamic(() => import('./IndustryCharts'), { ssr: false })

export default function IndustryChartsWrapper({ data }: { data: { year: number; spending: number }[] }) {
  return <IndustryCharts data={data} />
}
