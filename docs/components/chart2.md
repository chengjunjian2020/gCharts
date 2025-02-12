---
nav: 
  title: 组件
  order: 2
group:
  title: 图表组件
  order: 1

toc: content
order: 2
---

# 曲线图


```tsx
/**
 * defaultShowCode: true
 */
import { LineChart } from 'advanced-charts'

const App = () => {
  const 曲线图 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f']
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 800],
        smooth: true
      }
    ]
  }

  return <LineChart option={曲线图} containerStyle={{ border: '1px solid #eee' }} />
}

export default App
```
