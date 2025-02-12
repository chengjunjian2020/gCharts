---
nav:
  title: 组件
  order: 2

toc: content
order: 2
---

# 拖拽

## 基本

设置 `draggable` 属性即可拖拽

```tsx
import { Circle, Stage } from 'advanced-charts';

const App = () => {
  return (
    <Stage>
      <Circle
        x={300}
        y={200}
        radius={100}
        cursor="pointer"
        fillStyle="purple"
        draggable
      />
    </Stage>
  );
};

export default App;
```

## 横向/纵向

只可横向 或 纵向 拖拽

```tsx
import { Rect, Circle, Stage } from 'advanced-charts';

const App = () => {
  return (
    <Stage>
      <Circle
        x={200}
        y={200}
        radius={50}
        cursor="pointer"
        fillStyle="purple"
        draggable="horizontal"
      />
      <Rect
        x={400}
        y={200}
        width={100}
        height={100}
        cursor="move"
        fillStyle="orange"
        draggable="vertical"
      />
    </Stage>
  );
};

export default App;
```

## 成组拖拽

```tsx
import { Group, Rect, Circle, Stage } from 'advanced-charts';

const App = () => {
  return (
    <Stage>
      <Group draggable>
        <Circle x={200} y={200} radius={50} cursor="pointer" fillStyle="red" />
        <Rect
          x={400}
          y={200}
          width={100}
          height={100}
          cursor="move"
          fillStyle="blue"
        />
      </Group>
    </Stage>
  );
};

export default App;
```
