---
nav:
  title: 组件
  order: 2

toc: content
order: 5
---

# 包围盒

```tsx
import { Rect, Stage, Circle } from 'g-charts';

const BoundingBoxDemo = () => {
  function getBoundingBox(circleData) {
    return {
      x: circleData.x - circleData.radius,
      y: circleData.y - circleData.radius,
      width: circleData.radius * 2,
      height: circleData.radius * 2,
    };
  }
  const circleData_1 = { x: 100, y: 100, radius: 50, fillStyle: 'pink' };
  const rectData_1 = getBoundingBox(circleData_1);

  const circleData_2 = { x: 400, y: 150, radius: 50, fillStyle: 'purple' };
  const rectData_2 = getBoundingBox(circleData_2);

  const circleData_3 = { x: 150, y: 260, radius: 50, fillStyle: 'blueviolet' };
  const rectData_3 = getBoundingBox(circleData_3);

  const circleData_4 = { x: 350, y: 280, radius: 50, fillStyle: 'cadetblue' };
  const rectData_4 = getBoundingBox(circleData_4);

  return (
    <Stage>
      <Circle {...circleData_1} />
      <Rect {...rectData_1} fillStyle="transparent" strokeStyle="red" />

      <Circle {...circleData_2} />
      <Rect {...rectData_2} fillStyle="transparent" strokeStyle="red" />

      <Circle {...circleData_3} />
      <Rect {...rectData_3} fillStyle="transparent" strokeStyle="red" />

      <Circle {...circleData_4} />
      <Rect {...rectData_4} fillStyle="transparent" strokeStyle="red" />
    </Stage>
  );
};

export default BoundingBoxDemo;
```
