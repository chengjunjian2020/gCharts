---
nav: 
  title: 组件
  order: 2
group:
  title: 基础组件
  order: -1

toc: content
---

# Rect 矩形

```tsx
/**
 * inline: true
 */
import { useState } from 'react'
import { Rect, Stage } from 'advanced-charts'

const App = () => {
  const [x, setX] = useState(200)
  const [y, setY] = useState(100)
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(300)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div style={{marginTop: '30px'}}>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={100} max={200} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={10} max={100} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> width: </label>
        <input type="range" value={width} min={100} max={300} onChange={evt => setWidth(Number(evt.target.value))} />
      </div>

      <div>
        <label> height: </label>
        <input type="range" value={height} min={100} max={300} onChange={evt => setHeight(Number(evt.target.value))} />
      </div>

      <Stage>
        <Rect x={x} y={y} width={width} height={height} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default App
```

代码如下

```tsx | pure
import { useState } from 'openinula'
import { Rect, Stage } from 'advanced-charts'

const App = () => {
  const [x, setX] = useState(200)
  const [y, setY] = useState(100)
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(300)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div style={{marginTop: '30px'}}>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={100} max={200} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={10} max={100} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> width: </label>
        <input type="range" value={width} min={100} max={300} onChange={evt => setWidth(Number(evt.target.value))} />
      </div>

      <div>
        <label> height: </label>
        <input type="range" value={height} min={100} max={300} onChange={evt => setHeight(Number(evt.target.value))} />
      </div>

      <Stage>
        <Rect x={x} y={y} width={width} height={height} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default App
```

Rect 支持的属性如下

| name         | description | type      | default |
| :----------- | :---------- | :-------- | :------ |
| x            | 左上角 x坐标  | ?: number | 0       |
| y            | 左上角 y坐标  | ?: number | 0       |
| width        | 宽          | ?: number | 100     |
| height       | 高          | ?: number | 100     |
| fillStyle    | 填充颜色     | ?: string | black   |
| cornerRadius | 圆角        | ?: number | 0       |
