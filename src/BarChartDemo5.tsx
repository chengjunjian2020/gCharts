import { BarChart } from '../components'

const BarChartDemo5 = () => {
  const 极坐标_角度轴 = {
    polar: {},
    radiusAxis: {},
    angleAxis: {
      type: 'category',
      data: ['a', 'b', 'c', 'd', 'e'],
      startAngle: 0
    },
    series: [
      {
        data: [18, 26, 24.4, 33.6, 55],
        coordinateSystem: 'polar'
      }
    ]
  }

  return <BarChart option={极坐标_角度轴} containerStyle={{ border: '1px solid #eee' }} />
}

export default BarChartDemo5
