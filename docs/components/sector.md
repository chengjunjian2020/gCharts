---
nav: 
  title: 组件
  order: 2
group:
  title: 基础组件
  order: -1

toc: content
order: 3
---

# Sector 扇形

```tsx
/**
 * inline: true
 */
import { useState } from 'react'
import { Sector, Stage } from 'advanced-charts'

const App = () => {
  const [x, setX] = useState(200)
  const [y, setY] = useState(100)

  const [radius, setRadius] = useState(100)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={200} max={250} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={100} max={150} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> radius: </label>
        <input type="range" value={radius} min={100} max={150} onChange={evt => setRadius(Number(evt.target.value))} />
      </div>

      <Stage>
        <Sector x={x} y={y} radius={radius} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default App
```

```tsx | pure
import { useState } from 'openinula'
import { Sector, Stage } from 'advanced-charts'

const App = () => {
  const [x, setX] = useState(200)
  const [y, setY] = useState(100)

  const [radius, setRadius] = useState(100)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={200} max={250} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={100} max={150} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> radius: </label>
        <input type="range" value={radius} min={100} max={150} onChange={evt => setRadius(Number(evt.target.value))} />
      </div>

      <Stage>
        <Sector x={x} y={y} radius={radius} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default App
```

Sector 支持的属性如下

| name       | description | type      | default |
| :--------- | :---------- | :-------- | :------ |
| x          | 圆心坐标    | ?: number | 10      |
| y          | 圆心坐标    | ?: number | 10      |
| radius     | 半径        | ?: number | 8       |
| fillStyle  | 填充颜色    | ?: string | black   |
| startAngle | 开始角度    | ?: number | 30      |
| endAngle   | 结束角度    | ?: number | 90      |
