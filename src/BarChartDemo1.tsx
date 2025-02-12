import { BarChart } from '../components'

const BarChartDemo1 = () => {
  const 柱状图 = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    series: [
      {
        data: [190, 210, 300, 450]
      }
    ]
  }

  return <BarChart option={柱状图} containerStyle={{ border: '1px solid #eee' }} />
}

export default BarChartDemo1
