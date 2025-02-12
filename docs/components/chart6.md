---
nav: 
  title: 组件
  order: 2
group:
  title: 图表组件
  order: 1

toc: content
order: 6
---

# 曲线面积渐变图

```tsx
/**
 * defaultShowCode: true
 */
import { LineChart } from 'advanced-charts'

const App = () => {
  const 渐变图 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      boundaryGap: false
    },
    series: [
      {
        name: 'Line 1',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(128, 255, 15)' },
            { offset: 1, color: 'rgb(1, 191, 236)' }
          ]
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: 'Line 2',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(0, 221, 25)' },
            { offset: 1, color: 'rgb(77, 119, 25)' }
          ]
        },
        data: [120, 282, 111, 234, 220, 340, 310]
      },
      {
        name: 'Line 3',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(55, 162, 25)' },
            { offset: 1, color: 'rgb(116, 21, 19)' }
          ]
        },
        data: [320, 132, 201, 334, 190, 130, 220]
      },
      {
        name: 'Line 4',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(25, 0, 13)' },
            { offset: 1, color: 'rgb(135, 0, 15)' }
          ]
        },
        data: [220, 402, 231, 134, 190, 230, 120]
      },
      {
        name: 'Line 5',
        stack: 'sign',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: {
          opacity: 0.8,
          color: [
            { offset: 0, color: 'rgb(255, 191, 0)' },
            { offset: 1, color: 'rgb(224, 62, 76)' }
          ]
        },
        data: [220, 302, 181, 234, 210, 290, 150]
      }
    ]
  }

  return <LineChart option={渐变图} containerStyle={{ border: '1px solid #eee' }} />
}

export default App
```
