import { LineChart } from '../components'

const lineChartDemo1 = () => {
  const 折线图 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f']
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 1001]
      }
    ]
  }

  return <LineChart option={折线图} containerStyle={{ border: '1px solid #eee' }} />
}

export default lineChartDemo1
