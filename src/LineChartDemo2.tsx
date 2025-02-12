import { LineChart } from '../components'

const LineChartDemo2 = () => {
  const 曲线折线图 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f']
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 800],
        smooth: true
      }
    ]
  }

  return <LineChart option={曲线折线图} containerStyle={{ border: '1px solid #eee' }} />
}

export default LineChartDemo2
