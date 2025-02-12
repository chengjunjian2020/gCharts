---
nav: 设计思想
group:
  title: 结构
  order: 2

toc: content
---

# Group 分组

原则上来说，图形节点在 `Stage` 中，是一个扁平的结构，所有的图形节点都是兄弟节点。但是有的时候，我们希望对部分元素进行分组管理，这部分元素可以具备共同的变化行为，例如拖拽。因此我们引入了一个新的容器节点 `Group`。

`Group` 可以将所有的子元素当成是一个整体进行操作。例如下面的案例中，粉色与橘色的矩形同属于一个 Group，当我们拖拽他们时，整个 Group 中的元素会一起跟着移动。演示效果如下

```tsx
/**
 * defaultShowCode: true
 */
import {Stage, Group, Rect} from 'advanced-charts'

 const App = () => {
  return (
    <Stage border="1px solid orange">
      <Rect />
      <Rect x={100} fillStyle="red" />
      <Group draggable>
        <Rect x={200} fillStyle="pink" />
        <Rect x={200} y={120} fillStyle="orange" />
      </Group>
    </Stage>
  )
};

export default App
```
