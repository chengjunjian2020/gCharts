---
nav: 
  title: 组件
  order: 2
group:
  title: 图表组件
  order: 1

toc: content
order: 3
---

# 面积图

```tsx
/**
 * defaultShowCode: true
 */
import { LineChart } from 'advanced-charts'

const App = () => {
  const 面积图 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f'],
      boundaryGap: false
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 800],
        areaStyle: {}
      }
    ]
  }

  return <LineChart option={面积图} containerStyle={{ border: '1px solid #eee' }} />
}

export default App
```
