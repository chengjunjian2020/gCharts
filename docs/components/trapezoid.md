---
nav: 
  title: 组件
  order: 2
group:
  title: 基础组件
  order: -1

toc: content
order: 4
---

# Trapezoid 梯形


```tsx
/**
 * inline: true
 */

import { useState } from 'react'
import { Stage, Trapezoid } from 'g-charts'

const App = () => {
  const [x, setX] = useState(250)
  const [y, setY] = useState(50)

  const [shortLength, setShortLength] = useState(100)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={250} max={450} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={50} max={180} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> radius: </label>
        <input
          type="range"
          value={shortLength}
          min={100}
          max={150}
          onChange={evt => setShortLength(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <Trapezoid x={x} y={y} width={200} height={400} shortLength={shortLength} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default App
```

```tsx | pure
import { useState } from 'openinula'
import { Stage, Trapezoid } from 'g-charts'

const App = () => {
  const [x, setX] = useState(250)
  const [y, setY] = useState(50)

  const [shortLength, setShortLength] = useState(100)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={250} max={450} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={50} max={180} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> shortLength: </label>
        <input
          type="range"
          value={shortLength}
          min={100}
          max={150}
          onChange={evt => setShortLength(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <Trapezoid x={x} y={y} width={200} height={400} shortLength={shortLength} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default App
```

Trapezoid 支持的属性如下

| name        | description   | type      | default |
| :---------- | :------------ | :-------- | :------ |
| x           | 左上角 x 坐标 | ?: number | 0       |
| y           | 左上角 y 坐标 | ?: number | 0       |
| width       | 宽            | ?: number | 100     |
| height      | 高            | ?: number | 100     |
| fillStyle   | 填充颜色      | ?: string | black   |
| shortLength | 短边长度      | ?: number | 80      |

