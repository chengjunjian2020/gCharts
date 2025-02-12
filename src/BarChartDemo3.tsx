import { BarChart } from '../components'

const BarChartDemo3 = () => {
  const 有背景色 = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    series: [
      {
        showBackground: true,
        data: [190, 210, 300, 450]
      }
    ]
  }

  return <BarChart option={有背景色} containerStyle={{ border: '1px solid #eee' }} />
}

export default BarChartDemo3
