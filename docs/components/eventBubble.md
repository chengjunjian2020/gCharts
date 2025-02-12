---
nav:
  title: 组件
  order: 2

toc: content
order: 1
---

# event 事件冒泡

当 Group 有后代元素时, 支持事件冒泡到 Group

```tsx | inline
import { useState } from 'react';
import { Circle, Group, Stage } from 'advanced-charts';

const App = () => {
  const [groupLog, setGroupLog] = useState('');
  const [log, setLog] = useState('');

  return (
    <>
      <div style={{ height: 20 }}>group: {groupLog}</div>
      <div style={{ height: 20 }}>circle: {log}</div>

      <Stage>
        <Group onclick={() => setGroupLog('group click')}>
          <Circle
            x={350}
            y={260}
            radius={100}
            cursor="pointer"
            fillStyle="pink"
            onclick={() => setLog('circle click')}
          />
        </Group>
      </Stage>
    </>
  );
};

export default App;
```

```tsx | pure
import { useState } from 'openinula';
import { Circle, Group, Stage } from 'advanced-charts';

const App = () => {
  const [groupLog, setGroupLog] = useState('');
  const [log, setLog] = useState('');

  return (
    <>
      <div style={{ height: 20 }}>group: {groupLog}</div>
      <div style={{ height: 20 }}>circle: {log}</div>

      <Stage>
        <Group onclick={() => setGroupLog('group click')}>
          <Circle
            x={350}
            y={260}
            radius={100}
            cursor="pointer"
            fillStyle="pink"
            onclick={() => setLog('circle click')}
          />
        </Group>
      </Stage>
    </>
  );
};

export default App;
```
