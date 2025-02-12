---
nav: 设计思想
group:
  title: 结构
  order: 1

toc: content
---

# zIndex 层叠顺序

`g-charts` 节点之间，我们通过 `zIndex` 来管理层叠顺序。每个元素组件都支持基础属性 `zIndex`

```tsx | pure
<Rect zIndex={9} />
```

我们可以通过修改 `zIndex` 的值来动态调整元素之间的层叠顺序。点击下面案例中，中间粉红色的矩形可以查看层叠变化的演示效果。

```tsx 
/**
 * inline: true
 */
import { useRef, useState } from 'react'
import { Rect, Stage } from 'g-charts'
const ZIndexDemo = () => {
  const [zIndex, setZIndex] = useState(2)

  return (
    <Stage height={200} border="1px solid orange" margin="20px auto">
      <Rect x={130} y={10} fillStyle="red" zIndex={1} />
      <Rect x={170} y={50} fillStyle="pink" zIndex={zIndex} onclick={() => { setZIndex(zIndex === 2 ? 4 : 2) }} />
      <Rect x={210} y={90} fillStyle="purple" zIndex={3} />
    </Stage>
  )
}

export default ZIndexDemo
```

代码为

```tsx | pure
import { useState } from 'openinula'
import { Rect, Stage } from 'g-charts'
const ZIndexDemo = () => {
  const [zIndex, setZIndex] = useState(2)

  return (
    <Stage height={200} border="1px solid orange" margin="20px auto">
      <Rect x={130} y={10} fillStyle="red" zIndex={1} />
      <Rect x={170} y={50} fillStyle="pink" zIndex={zIndex} onclick={() => { setZIndex(zIndex === 2 ? 4 : 2) }} />
      <Rect x={210} y={90} fillStyle="purple" zIndex={3} />
    </Stage>
  )
}

export default ZIndexDemo
```