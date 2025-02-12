---
nav: 
  title: 组件
  order: 2
group:
  title: 图表组件
  order: 1

toc: content
order: 11
---

# 饼图

```tsx
/**
 * defaultShowCode: true
 */
import { PieChart } from 'advanced-charts'

const App = () => {
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

export default App
```
