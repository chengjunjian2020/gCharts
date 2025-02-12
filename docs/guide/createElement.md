---
group:
  title: 指南
  order: 1

toc: content
order: 2
---

# 图形语法

`advanced-charts` 中，所有的图表结构，都是通过组合不同的图形语法元素得到的。因此，我们可能需要对基础图形有一个基本了解，以便于使用者基于基础图形发觉更多的使用场景。

这里就以 `Circle` 圆形为例，给大家介绍基础图形的使用


### Circle

我们可以通过简单的语法创建一个圆形

```tsx
/**
 * defaultShowCode: true
 */
import {Stage, Circle} from 'advanced-charts'

function App() {
  return (
    <Stage height={250}>
      <Circle x={200} y={100} radius={50} />
    </Stage>
  )
}

export default App;
```

### 坐标

我们可以从代码中简单看出，Circle 组件支持传入 `x、y` 属性，他们共同表示一个坐标点。该坐标点是以 canvas 元素左上角作为坐标原点描述出来的位置。

在图表中，我们可能还会涉及到其他的坐标点，因为我们在实际的运用中，还会自定义坐标系，例如笛卡尔坐标系。通常情况下，自定义的坐标系与 canvas 默认支持的坐标系不一样。使用时一定要注意这个细节

### 填充与边框

我们使用 `fillStyle` 表示内容填充，使用 `strokeStyle` 表示边框填充，`lineWidth` 表示边框线粗细

> 这些词汇都源自于 canvas 语法，我们尽量与其保持一致

```tsx
/**
 * defaultShowCode: true
 */
import {Stage, Circle} from 'advanced-charts'

function App() {
  return (
    <Stage height={250}>
      <Circle x={200} y={100} radius={50} fillStyle="pink" />
      <Circle x={320} y={100} radius={50} strokeStyle="red" lineWidth={10} />
    </Stage>
  )
}

export default App;
```

### 事件

每个基础元素都有常用的事件支持

```tsx
/**
 * defaultShowCode: true
 */
import { Circle, Stage } from 'advanced-charts'

const App = () => {
  return (
    <Stage>
      <Circle
        x={250}
        y={160}
        radius={100}
        cursor="pointer"
        fillStyle="orange"
        onclick={() => {
          alert('点击事件')
        }}
        onmouseenter={() => {
          alert('鼠标移入')
        }}
      />
    </Stage>
  )
}

export default App

```


### 动画

每个元素都支持动画，我们通过 `animation` 属性配置动画的参数，并通过修改其他样式属性的方式来触发动画。

```tsx | pure
import { useEffect, useState } from 'openinula'
import { Rect, Stage } from 'advanced-charts'

const s = { x: 0, height: 60, fillStyle: 'purple' }
const e = { x: 200, height: 200, fillStyle: 'red' }

const App = () => {
  const [state, setState] = useState(s)

  useEffect(() => {
    setTimeout(() => {
      state.x = 200
      setState({ ...state })
    }, 500)

    setTimeout(() => {
      state.height = 200
      state.fillStyle = 'red'
      setState({ ...state })
    }, 800)
  }, [])

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
          let _state
          if (state.x == 200) {
            _state = { x: 0, height: 60, fillStyle: 'purple' }
          } else {
            _state = { x: 200, height: 200, fillStyle: 'red' }
          }
          setState(_state)
        }}
      />
    </Stage>
  )
}

export default App
```

演示效果如下，如果动画已经结束，可再次点击矩形触发动画

```tsx
/**
 * inline: true
 */
import { useEffect, useState } from 'react'
import { Rect, Stage } from 'advanced-charts'

const s = { x: 0, height: 60, fillStyle: 'purple' }
const e = { x: 200, height: 200, fillStyle: 'red' }

const App = () => {
  const [state, setState] = useState(s)

  useEffect(() => {
    setTimeout(() => {
      state.x = 200
      setState({ ...state })
    }, 500)

    setTimeout(() => {
      state.height = 200
      state.fillStyle = 'red'
      setState({ ...state })
    }, 800)
  }, [])

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
          let _state
          if (state.x == 200) {
            _state = { x: 0, height: 60, fillStyle: 'purple' }
          } else {
            _state = { x: 200, height: 200, fillStyle: 'red' }
          }
          setState(_state)
        }}
      />
    </Stage>
  )
}

export default App
```
