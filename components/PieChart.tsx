import { useEffect, useRef } from 'openinula'

import rmstCharts, { ChartRoot } from './core'
import { ChartProps } from './type'
import { addTypeToChartOption } from './utils'
import { useResizeObserver } from './_hooks'

export const PieChart = ({ option, width = '100%', height = 500, containerStyle }: ChartProps) => {
  const insRef = useRef<ChartRoot>()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ins = rmstCharts.init(containerRef.current)
    insRef.current = ins
  }, [])

  useEffect(() => {
    const _option = addTypeToChartOption(option, 'pie')
    insRef.current.setOption(_option)
  }, [option])

  
  useResizeObserver(containerRef, () => insRef.current.refreshDraw())

  return <div ref={containerRef} style={{ width, height, ...containerStyle }}></div>
}
