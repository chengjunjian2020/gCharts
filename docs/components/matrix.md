---
nav:
  title: 组件
  order: 2

toc: content
order: 4
---

# 矩阵变换

```tsx
import { Rect, Stage } from 'advanced-charts';

const App = () => {
  return (
    <Stage>
      <Rect
        x={0}
        y={0}
        width={100}
        height={100}
        fillStyle="red"
        translate={{ x: 200, y: 0 }}
      />
      <Rect
        x={200}
        y={120}
        width={100}
        height={100}
        fillStyle="blue"
        transform={[1, 0.2, 0.8, 1, 0, 0]}
      />
    </Stage>
  );
};

export default App;
```
