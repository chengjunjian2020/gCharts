---
nav: 
  title: 组件
  order: 2
group:
  title: 图表组件
  order: 1

toc: content
order: 4
---

# 折线聚合图

```tsx
/**
 * defaultShowCode: true
 */
import { LineChart } from 'advanced-charts'

const App = () => {
  const 聚合图 = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        name: 'Email',
        stack: 'sign',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        stack: 'sign',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        stack: 'sign',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        stack: 'sign',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        stack: 'sign',
        data: [820, 932, 901, 600, 500, 400, 500]
      }
    ]
  }

  return <LineChart option={聚合图} containerStyle={{ border: '1px solid #eee' }} />
}

export default App
```
