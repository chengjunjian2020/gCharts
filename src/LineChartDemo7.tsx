import { LineChart } from '../components'

const LineChartDemo7 = () => {
  const 拐角图 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f']
    },
    series: [
      {
        name: 'Step Start',
        step: 'start',
        data: [120, 132, 101, 134, 90, 230]
      },
      {
        name: 'Step Middle',
        step: 'middle',
        data: [220, 282, 201, 234, 290, 430]
      },
      {
        name: 'Step End',
        step: 'end',
        data: [450, 432, 401, 454, 590, 530]
      }
    ]
  }

  return <LineChart option={拐角图} containerStyle={{ border: '1px solid #eee' }} />
}

export default LineChartDemo7
