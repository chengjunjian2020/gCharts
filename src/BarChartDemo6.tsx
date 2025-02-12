import { BarChart } from '../components'

const BarChartDemo6 = () => {
  const 极坐标_径向轴 = {
    polar: {},
    angleAxis: {
      startAngle: 45
    },
    radiusAxis: {
      type: 'category',
      data: ['a', 'b', 'c', 'd']
    },
    series: [
      {
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar'
      }
    ]
  }

  return <BarChart option={极坐标_径向轴} containerStyle={{ border: '1px solid #eee' }} />
}

export default BarChartDemo6
