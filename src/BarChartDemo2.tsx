import { BarChart } from '../components'

const BarChartDemo2 = () => {
  const 梯形柱状图 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd']
    },
    series: [
      {
        data: [666, 78, 88, 600],
        itemStyle: {
          shortLength: '70%'
        }
      }
    ]
  }

  return <BarChart option={梯形柱状图} containerStyle={{ border: '1px solid #eee' }} />
}

export default BarChartDemo2
