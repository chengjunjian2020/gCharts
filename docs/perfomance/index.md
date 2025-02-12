---
nav: 
  title: 性能
  order: 3

toc: content
---

# Bubble

我们写了一个 demo 来演示 `advanced-charts` 在性能上的优秀表现。

```tsx
/**
 * inline: true
 */
import { useEffect, useState } from 'react'
import { Circle, Rect, Stage } from 'advanced-charts'
import colorAlpha from 'color-alpha'

const radius = 25
const maxRadius = 50

function randomX() {
  return maxRadius + Math.random() * (750 - maxRadius * 2)
}

function randomY() {
  return maxRadius + Math.random() * (500 - maxRadius * 2)
}

function randomColor() {
  const r = Math.round(255 * Math.random())
  const g = Math.round(255 * Math.random())
  const b = Math.round(255 * Math.random())

  return `rgb(${r}, ${g}, ${b})`
}

const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const timer = setInterval(() => {
      createBubble()
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function createBubble() {
    const radius = 25
    const maxRadius = 50

    const fillStyle = randomColor()
    const targetColor = colorAlpha(fillStyle, 0)

    const bubble = {
      key: Math.random().toString(),
      x: randomX(),
      y: randomY(),
      fillStyle: randomColor(),
      radius: radius,
      animationEnd: () => {
        setList(value => value.filter(item => item.key !== bubble.key))
      }
    }

    setList(value => value.concat(bubble))

    setTimeout(() => {
      bubble.x = randomX()
      bubble.y = randomY()
      bubble.radius = maxRadius
      bubble.fillStyle = targetColor

      setList(value => [...value])
    }, 10)
  }

  return (
    <>
      <Stage>
        {list.map(item => (
          <Circle
            key={item.key}
            x={item.x}
            y={item.y}
            radius={item.radius}
            fillStyle={item.fillStyle}
            animation={{ duration: 1000, easing: 'linear', animationEnd: item.animationEnd }}
          />
        ))}
      </Stage>
    </>
  )
}

export default App
```

代码如下所示

```tsx | pure
import { useEffect, useState } from 'openinula'
import { Circle, Rect, Stage } from 'advanced-charts'
import colorAlpha from 'color-alpha'

const radius = 25
const maxRadius = 50

function randomX() {
  return maxRadius + Math.random() * (750 - maxRadius * 2)
}

function randomY() {
  return maxRadius + Math.random() * (500 - maxRadius * 2)
}

function randomColor() {
  const r = Math.round(255 * Math.random())
  const g = Math.round(255 * Math.random())
  const b = Math.round(255 * Math.random())

  return `rgb(${r}, ${g}, ${b})`
}

const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const timer = setInterval(() => {
      createBubble()
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function createBubble() {
    const radius = 25
    const maxRadius = 50

    const fillStyle = randomColor()
    const targetColor = colorAlpha(fillStyle, 0)

    const bubble = {
      key: Math.random().toString(),
      x: randomX(),
      y: randomY(),
      fillStyle: randomColor(),
      radius: radius,
      animationEnd: () => {
        setList(value => value.filter(item => item.key !== bubble.key))
      }
    }

    setList(value => value.concat(bubble))

    setTimeout(() => {
      bubble.x = randomX()
      bubble.y = randomY()
      bubble.radius = maxRadius
      bubble.fillStyle = targetColor

      setList(value => [...value])
    }, 10)
  }

  return (
    <>
      <Stage>
        {list.map(item => (
          <Circle
            key={item.key}
            x={item.x}
            y={item.y}
            radius={item.radius}
            fillStyle={item.fillStyle}
            animation={{ duration: 1000, easing: 'linear', animationEnd: item.animationEnd }}
          />
        ))}
      </Stage>
    </>
  )
}

export default App
```
