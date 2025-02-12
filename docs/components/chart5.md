---
nav: 
  title: 组件
  order: 2
group:
  title: 图表组件
  order: 1

toc: content
order: 5
---

# 面积聚合图

```tsx
/**
 * defaultShowCode: true
 */
import { LineChart } from 'g-charts'

const App = () => {
  const 聚合面积图 = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      boundaryGap: false
    },
    series: [
      {
        name: 'Email',
        stack: 'sign',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210],
        symbolSize: 10
      },
      {
        name: 'Union Ads',
        stack: 'sign',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310],
        symbolSize: 10
      },
      {
        name: 'Video Ads',
        stack: 'sign',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410],
        symbolSize: 10
      },
      {
        name: 'Direct',
        stack: 'sign',
        areaStyle: {},
        data: [320, 332, 301, 334, 390, 330, 320],
        symbolSize: 10
      },
      {
        name: 'Search Engine',
        stack: 'sign',
        areaStyle: {},
        data: [400, 600, 800, 700, 400, 500, 300],
        symbolSize: 10
      }
    ]
  }

  return <LineChart option={聚合面积图} containerStyle={{ border: '1px solid #eee' }} />
}

export default App
```
