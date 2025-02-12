---
nav:
  title: 组件
  order: 2

toc: content
order: 2
---

# 图形拾取

- 点击图形即可看到拾取效果
- 鼠标 hover 也有不同的 UI 表现

```tsx
/**
 * inline: true
 */
import { useState } from 'react';
import { BoxHidden, Circle, Group, Rect, Stage, Text } from 'g-charts';
import colorAlpha from 'color-alpha';

const App = () => {
  const [log, setLog] = useState('无');

  return (
    <>
      <div style={{ height: 30, lineHeight: '30px' }}>点击了: {log}</div>

      <Stage>
        <Circle
          onclick={(evt) => setLog(evt.target.data.name)}
          {...{
            name: '棕色',
            x: 230,
            y: 300,
            radius: 80,
            fillStyle: colorAlpha('brown', 0.8),
            cursor: 'e-resize',
          }}
        />

        <Group onclick={(evt) => setLog(evt.target.data.name)}>
          <Rect
            {...{
              name: '粉色',
              x: 20,
              y: 20,
              width: 100,
              height: 100,
              fillStyle: colorAlpha('pink', 0.8),
              cursor: 'pointer',
              zIndex: 1,
            }}
          />
          <Rect
            {...{
              name: '紫色',
              x: 50,
              y: 50,
              width: 100,
              height: 100,
              fillStyle: colorAlpha('purple', 0.8),
              cursor: 'move',
            }}
          />

          <Group zIndex={4}>
            <Circle
              {...{
                name: '蓝色',
                x: 170,
                y: 100,
                radius: 40,
                fillStyle: 'blue',
                cursor: 's-resize',
              }}
            />
            <Circle
              {...{
                name: '红色',
                x: 220,
                y: 100,
                radius: 50,
                fillStyle: colorAlpha('red', 0.8),
                cursor: 'e-resize',
              }}
            />
            <Text
              {...{
                name: '文字 qwer',
                x: 220,
                y: 100,
                content: 'qwer',
                cursor: 'text',
              }}
            />

            <Group zIndex={4}>
              <Circle
                {...{
                  name: '灰色',
                  x: 180,
                  y: 140,
                  radius: 40,
                  fillStyle: colorAlpha('gray', 0.8),
                  cursor: 'crosshair',
                }}
              />
            </Group>
          </Group>

          <BoxHidden
            {...{
              name: '橘色',
              x: 210,
              y: 120,
              width: 200,
              height: 200,
              fillStyle: colorAlpha('orange', 0.8),
              cursor: 'help',
              zIndex: 3,
            }}
          >
            <Circle
              {...{
                name: '绿色',
                x: 300,
                y: 110,
                radius: 60,
                fillStyle: 'greenyellow',
                cursor: 'wait',
              }}
            />
          </BoxHidden>
        </Group>
      </Stage>
    </>
  );
};

export default App;
```

```tsx | pure
import { useState } from 'openinula';
import { BoxHidden, Circle, Group, Rect, Stage, Text } from 'g-charts';
import colorAlpha from 'color-alpha';

const App = () => {
  const [log, setLog] = useState('无');

  return (
    <>
      <div style={{ height: 30, lineHeight: '30px' }}>点击了: {log}</div>

      <Stage>
        <Circle
          onclick={(evt) => setLog(evt.target.data.name)}
          {...{
            name: '棕色',
            x: 230,
            y: 300,
            radius: 80,
            fillStyle: colorAlpha('brown', 0.8),
            cursor: 'e-resize',
          }}
        />

        <Group onclick={(evt) => setLog(evt.target.data.name)}>
          <Rect
            {...{
              name: '粉色',
              x: 20,
              y: 20,
              width: 100,
              height: 100,
              fillStyle: colorAlpha('pink', 0.8),
              cursor: 'pointer',
              zIndex: 1,
            }}
          />
          <Rect
            {...{
              name: '紫色',
              x: 50,
              y: 50,
              width: 100,
              height: 100,
              fillStyle: colorAlpha('purple', 0.8),
              cursor: 'move',
            }}
          />

          <Group zIndex={4}>
            <Circle
              {...{
                name: '蓝色',
                x: 170,
                y: 100,
                radius: 40,
                fillStyle: 'blue',
                cursor: 's-resize',
              }}
            />
            <Circle
              {...{
                name: '红色',
                x: 220,
                y: 100,
                radius: 50,
                fillStyle: colorAlpha('red', 0.8),
                cursor: 'e-resize',
              }}
            />
            <Text
              {...{
                name: '文字 qwer',
                x: 220,
                y: 100,
                content: 'qwer',
                cursor: 'text',
              }}
            />

            <Group zIndex={4}>
              <Circle
                {...{
                  name: '灰色',
                  x: 180,
                  y: 140,
                  radius: 40,
                  fillStyle: colorAlpha('gray', 0.8),
                  cursor: 'crosshair',
                }}
              />
            </Group>
          </Group>

          <BoxHidden
            {...{
              name: '橘色',
              x: 210,
              y: 120,
              width: 200,
              height: 200,
              fillStyle: colorAlpha('orange', 0.8),
              cursor: 'help',
              zIndex: 3,
            }}
          >
            <Circle
              {...{
                name: '绿色',
                x: 300,
                y: 110,
                radius: 60,
                fillStyle: 'greenyellow',
                cursor: 'wait',
              }}
            />
          </BoxHidden>
        </Group>
      </Stage>
    </>
  );
};

export default App;
```
