---
nav: 
  title: 组件
  order: 2

toc: content
order: 1
---

# event 事件

```tsx
/**
 * inline: true
 */
import { useState } from 'react'
import { Circle, Stage } from 'advanced-charts'

const App = () => {
  const [log, setLog] = useState('')

  return (
    <>
      <div style={{ height: 20 }}>{log}</div>

      <Stage>
        <Circle
          x={350}
          y={260}
          radius={100}
          cursor="pointer"
          fillStyle="pink"
          onclick={() => {
            setLog('click')
          }}
          onmouseenter={() => {
            setLog('mouseenter')
          }}
          onmouseleave={() => {
            setLog('mouseleave')
          }}
          onmousedown={() => {
            setLog('mousedown')
          }}
        />
      </Stage>
    </>
  )
}

export default App
```

```tsx | pure
import { useState } from 'openinula'
import { Circle, Stage } from 'advanced-charts'

const App = () => {
  const [log, setLog] = useState('')

  return (
    <>
      <div style={{ height: 20 }}>{log}</div>

      <Stage>
        <Circle
          x={350}
          y={260}
          radius={100}
          cursor="pointer"
          fillStyle="pink"
          onclick={() => {
            setLog('click')
          }}
          onmouseenter={() => {
            setLog('mouseenter')
          }}
          onmouseleave={() => {
            setLog('mouseleave')
          }}
          onmousedown={() => {
            setLog('mousedown')
          }}
        />
      </Stage>
    </>
  )
}

export default App;
```

## event 支持程度如下

| eventName   | description    | type                                     | default     |
| :---------- | :------------- | :--------------------------------------- | :---------- |
| click       | 点击事件       | (eventParameter: EventParameter) => void | `undefined` |
| mouseenter  | 鼠标移入       | (eventParameter: EventParameter) => void | `undefined` |
| mouseleave  | 鼠标移出       | (eventParameter: EventParameter) => void | `undefined` |
| mousemove   | 鼠标移动       | (eventParameter: EventParameter) => void | `undefined` |
| mousedown   | 鼠标按下       | (eventParameter: EventParameter) => void | `undefined` |
| mouseup     | 鼠标抬起       | (eventParameter: EventParameter) => void | `undefined` |
| ondragstart | 拖拽开始       | (eventParameter: EventParameter) => void | `undefined` |
| ondrag      | 拖拽时持续触发 | (eventParameter: EventParameter) => void | `undefined` |
| ondragend   | 拖拽结束       | (eventParameter: EventParameter) => void | `undefined` |


:::info
- 目前只有 `click` 事件支持事件冒泡
- 设置了 `draggable: true` 的图形，才会触发 `ondragstart` `ondrag` `ondragend` 事件
:::

## event 参数

```ts
type EventParameter = {
  target: IShape;
  x: number;
  y: number;
  dx?: number;
  dy?: number;
  nativeEvent?: MouseEvent;
}
```
