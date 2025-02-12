---
nav:
  title: 组件
  order: 2
group:
  title: 基础组件
  order: -1

toc: content
order: 7
---

# Text 文字

```tsx
import { Stage, Text } from 'advanced-charts';

function App() {
  return (
    <Stage>
      <Text x={100} y={100} content="hello inula" />
      <Text x={100} y={140} content="hello inula" textAlign="center" />
    </Stage>
  );
}

export default App;
```
