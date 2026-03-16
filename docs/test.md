---
title: 测试页面
nav:
  title: 测试页面
  order: 10
---

# 测试页面

这是一个专门用于测试 advanced-charts 组件的页面。

## 基础图形测试

### 矩形测试

```tsx
import { Stage, Rect } from "advanced-charts"

export default () => (
  <Stage height={200} border="1px solid #ccc">
    <Rect x={10} y={10} width={80} height={80} fillStyle="red" />
    <Rect x={100} y={10} width={80} height={80} fillStyle="blue" />
    <Rect x={190} y={10} width={80} height={80} fillStyle="green" />
  </Stage>
)
```

### 圆形测试

```tsx
import { Stage, Circle } from "advanced-charts"

export default () => (
  <Stage height={200} border="1px solid #ccc">
    <Circle x={50} y={50} radius={30} fillStyle="red" />
    <Circle x={150} y={50} radius={30} fillStyle="blue" />
    <Circle x={250} y={50} radius={30} fillStyle="green" />
  </Stage>
)
```

## 交互测试

### 点击事件测试

```tsx
import { Stage, Rect, Circle } from "advanced-charts"
import { useState } from "react"

export default () => {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div>
      <p>点击次数: {clickCount}</p>
      
      <Stage height={200} border="1px solid #ccc">
        <Rect 
          x={10} y={10} 
          width={80} height={80} 
          fillStyle="red"
          cursor="pointer"
          onclick={() => {
            setClickCount(prev => prev + 1)
            console.log("矩形被点击了！")
          }}
        />
        
        <Circle 
          x={150} y={50} 
          radius={30} 
          fillStyle="blue"
          cursor="pointer"
          onclick={() => {
            setClickCount(prev => prev + 1)
            console.log("圆形被点击了！")
          }}
        />
      </Stage>
    </div>
  )
}
```

## 测试说明

这个测试页面包含了以下功能测试：

1. **基础图形渲染** - 测试矩形、圆形的基本渲染
2. **交互事件** - 测试点击事件
3. **样式测试** - 测试不同的颜色和样式

你可以在这个页面上测试各种功能，看看 advanced-charts 的表现如何！
