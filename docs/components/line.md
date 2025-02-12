---
nav: 
  title: 组件
  order: 2
group:
  title: 基础组件
  order: -1

toc: content
order: 2
---

# Line 线条


```tsx
/**
 * inline: true
 */
import { useState } from 'react'
import { Stage, DraggableLine } from 'advanced-charts'

const App = () => {
  const [lineWidth, setLineWidth] = useState(2)

  const [strokeStyle, setStrokeStyle] = useState('blue')

  return (
    <>
      <div>
        <label> strokeColor: </label>
        <input type="color" onChange={evt => setStrokeStyle(evt.target.value)} />
      </div>

      <div>
        <label> strokeWidth: </label>
        <input
          type="range"
          value={lineWidth}
          min={1}
          max={10}
          onChange={evt => setLineWidth(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <DraggableLine
          type="solid"
          start={{ x: 100, y: 100 }}
          end={{ x: 300, y: 300 }}
          lineWidth={lineWidth}
          strokeStyle={strokeStyle}
        />
      </Stage>
    </>
  )
}

export default App
```

```tsx | pure
import { useState } from 'openinula'
import { Stage, DraggableLine } from 'advanced-charts'

const App = () => {
  const [lineWidth, setLineWidth] = useState(2)

  const [strokeStyle, setStrokeStyle] = useState('blue')

  return (
    <>
      <div>
        <label> strokeColor: </label>
        <input type="color" onChange={evt => setStrokeStyle(evt.target.value)} />
      </div>

      <div>
        <label> strokeWidth: </label>
        <input
          type="range"
          value={lineWidth}
          min={1}
          max={10}
          onChange={evt => setLineWidth(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <DraggableLine
          type="solid"
          start={{ x: 100, y: 100 }}
          end={{ x: 300, y: 300 }}
          lineWidth={lineWidth}
          strokeStyle={strokeStyle}
        />
      </Stage>
    </>
  )
}

export default App
```

Line 支持的属性如下

| name        | description | type                        | default            |
| :---------- | :---------- | :-------------------------- | :----------------- |
| start       | 起点坐标    | ?: { x: number, y: number } | { x: 0, y: 0 }     |
| end         | 终点坐标    | ?: { x: number, y: number } | { x: 100, y: 100 } |
| strokeStyle | 描边颜色    | ?: string                   | black              |
| lineWidth   | 描边宽度    | ?: number                   | 1                  |
