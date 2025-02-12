import { LineChart } from '../components'

const LineChartDemo3 = () => {
  const 面积图 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f'],
      boundaryGap: false
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 800],
        areaStyle: {}
      }
    ]
  }

  return <LineChart option={面积图} containerStyle={{ border: '1px solid #eee' }} />
}

export default LineChartDemo3
