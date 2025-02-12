import { PieChart } from '../components'

const PieChartDemo2 = () => {
  const 环形 = {
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        radius: ['40%', '70%'],
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

  return <PieChart option={环形} containerStyle={{ border: '1px solid #eee' }} />
}

export default PieChartDemo2
