import { BarChart } from '../components'

const BarChartDemo4 = () => {
  const 聚合 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    },
    series: [
      {
        name: 'Apple',
        stack: 'sign',
        data: [100, 732, 701, 734, 1090, 1130, 1120]
      },
      {
        name: 'Banana',
        stack: 'sign',
        data: [100, 132, 101, 134, 290, 230, 220]
      },
      {
        name: 'Orange',
        stack: 'sign',
        data: [100, 72, 71, 74, 190, 130, 110]
      },
      {
        name: 'Pineapple',
        stack: 'sign',
        data: [100, 82, 91, 84, 109, 110, 120]
      }
    ]
  }

  return <BarChart option={聚合} containerStyle={{ border: '1px solid #eee' }} />
}

export default BarChartDemo4
