import { KLineChart } from '../components'

const KLineChartDemo1 = () => {
  const K线图 = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    series: [
      {
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42]
        ],
        animationDuration: 300
      }
    ]
  }

  return <KLineChart option={K线图} containerStyle={{ border: '1px solid #eee' }} />
}

export default KLineChartDemo1
