import { PieChart } from '../components'

const PieChartDemo1 = () => {
  const 饼图 = {
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        data: [
          { value: 1, name: 'pie-1' },
          { value: 2, name: 'pie-2' },
          { value: 3, name: 'pie-3' },
          { value: 4, name: 'pie-4' },
          { value: 5, name: 'pie-5' }
        ]
      }
    ]
  }

  return <PieChart option={饼图} containerStyle={{ border: '1px solid #eee' }} />
}

export default PieChartDemo1
