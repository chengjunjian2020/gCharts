---
nav:
  title: 组件
  order: 2

toc: content
order: 3
---

# 动画

每个元素都支持动画，我们通过 animation 属性配置动画的参数，并通过修改其他样式属性的方式来触发动画。

```tsx | pure
import { useEffect, useState } from 'openinula';
import { Rect, Stage } from 'advanced-charts';

const s = { x: 0, height: 60, fillStyle: 'purple' };
const e = { x: 200, height: 200, fillStyle: 'red' };

const App = () => {
  const [state, setState] = useState(s);

  useEffect(() => {
    setTimeout(() => {
      state.x = 200;
      setState({ ...state });
    }, 500);

    setTimeout(() => {
      state.height = 200;
      state.fillStyle = 'red';
      setState({ ...state });
    }, 800);
  }, []);

  return (
    <Stage>
      <Rect
        x={state.x}
        y={50}
        width={100}
        height={state.height}
        fillStyle={state.fillStyle}
        shadowColor="red"
        cursor="pointer"
        animation={{ duration: 1000, easing: 'linear' }}
        onclick={() => {
          let _state;
          if (state.x == 200) {
            _state = { x: 0, height: 60, fillStyle: 'purple' };
          } else {
            _state = { x: 200, height: 200, fillStyle: 'red' };
          }
          setState(_state);
        }}
      />
    </Stage>
  );
};

export default App;
```

演示效果如下，如果动画已经结束，可再次点击矩形触发动画

```tsx
/**
 * inline: true
 */
import { useEffect, useState } from 'react';
import { Rect, Stage } from 'advanced-charts';

const s = { x: 0, height: 60, fillStyle: 'purple' };
const e = { x: 200, height: 200, fillStyle: 'red' };

const App = () => {
  const [state, setState] = useState(s);

  useEffect(() => {
    setTimeout(() => {
      state.x = 200;
      setState({ ...state });
    }, 500);

    setTimeout(() => {
      state.height = 200;
      state.fillStyle = 'red';
      setState({ ...state });
    }, 800);
  }, []);

  return (
    <Stage>
      <Rect
        x={state.x}
        y={50}
        width={100}
        height={state.height}
        fillStyle={state.fillStyle}
        shadowColor="red"
        cursor="pointer"
        animation={{ duration: 1000, easing: 'linear' }}
        onclick={() => {
          let _state;
          if (state.x == 200) {
            _state = { x: 0, height: 60, fillStyle: 'purple' };
          } else {
            _state = { x: 200, height: 200, fillStyle: 'red' };
          }
          setState(_state);
        }}
      />
    </Stage>
  );
};

export default App;
```
