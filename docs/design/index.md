---
nav: 设计思想
group:
  title: 结构
  order: 0

toc: content
---

# Stage 舞台

在 `advanced-charts` 中，`Stage` 元素是图形绘制的**必备顶层容器节点**，用于表示该区域为图形绘制区域。其他所有的图形组件节点都必须挂载在组件节点之下，使用方式如下。

```tsx
/**
 * title: Stage 简单使用
 * defaultShowCode: true
 */
import {Stage, Rect} from 'advanced-charts'

function App() {
  return (
    <Stage height={150}>
      <Rect fillStyle="orange" />
    </Stage>
  )
}

export default App
```

`Stage` 可以支持多个子节点。

```jsx
/**
 * title: Stage 多个字节点
 * defaultShowCode: true
 */
import {Stage, Rect} from 'advanced-charts'

function App() {
  return (
    <Stage>
      <Rect />
      <Rect x={100} y={100} fillStyle="red" />
      <Rect x={200} y={200} fillStyle="pink" />
      <Rect x={300} y={300} fillStyle="gray" />
    </Stage>
  )
}

export default App
```

:::warning
需要注意的是，`Stage` 中，不支持其他 React 组件作为子节点。如果你在 Stage 等容器组件中写入了其他 React 节点，我们将会在内部将其过滤掉
:::

Stage 支持的属性如下

|name| description |type | default |
|:----|:-----------|:----|:------|
|width|宽         |?: number|600|
|height|高         |?: number|400|
|background|背景         |?: string|#FFF|
|其他|其他 css 属性         |||

