---
nav: 设计思想
group:
  title: 结构
  order: 3

toc: content
---

# 节点管理思路

和 DOM 结构不同，`advanced-charts` 采用了扁平的方式管理节点。因此在大多数情况下，所有的节点都是兄弟节点的关系。在性能表现上，这种方式优势非常大。除了个别节点之外，例如 `Stage` `Group`， 其他每一个图形都是元素节点，不支持接收子元素。

下面这种写法是不支持的。

```tsx | pure
function App() {
  return (
    <Stage>
      <Rect>
        <Rect />
      </Rect>
    </Stage>
  )
}
```

因此，我们在使用时，也不需要考虑那么复杂的布局规则，可以直接按照绝对定位的思路来布局。

当然，其他开发者可以基于自己的基础组件扩展布局方式。

除此之外，在某些部分复杂的场景，我们引入了 `Group` 的概念来管理组件。但是一定要注意的是，`Group` 本身不是一个元素节点，他只是负责给元素分组方便统一管理。例如统一拖拽。

```tsx
/**
 * defaultShowCode: true
 */
import {Stage, Group, Rect} from 'advanced-charts'

 const App = () => {
  return (
    <Stage border="1px solid orange">
      <Group draggable>
        <Rect />
        <Rect x={100} fillStyle="red" />
      </Group>
      
      <Group draggable>
        <Rect x={200} fillStyle="pink" />
        <Rect x={200} y={120} fillStyle="orange" />
      </Group>
    </Stage>
  )
};

export default App
```


`Group` 组件不影响组件的布局。不参与组件的渲染。

节点之间，我们设计了 `zIndex` 属性来管理层级关系。我们可以直接简单的通过修改 `zIndex` 的值，来修改元素之间的遮挡关系。由于所有的可视节点都是扁平的，因此节点的关系就是直接比较大小即可。

```tsx 
/**
 * inline: true
 */
import { useRef, useState } from 'react'
import { Rect, Stage } from 'advanced-charts'
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
