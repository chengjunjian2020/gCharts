---
nav: 
  title: 组件
  order: 2
group:
  title: 图表组件
  order: 1

toc: content
order: 9
---

# 梯形柱状图

```tsx
/**
 * defaultShowCode: true
 */
import { BarChart } from 'advanced-charts'

const App = () => {
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

export default App
```
