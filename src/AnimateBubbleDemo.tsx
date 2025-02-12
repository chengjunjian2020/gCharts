import { useEffect, useState } from 'openinula'
import { Circle, Rect, Stage } from '../components'
import colorAlpha from 'color-alpha'

const radius = 25
const maxRadius = 50

function randomX() {
  return maxRadius + Math.random() * (750 - maxRadius * 2)
}

function randomY() {
  return maxRadius + Math.random() * (500 - maxRadius * 2)
}

export function randomColor() {
  const r = Math.round(255 * Math.random())
  const g = Math.round(255 * Math.random())
  const b = Math.round(255 * Math.random())

  return `rgb(${r}, ${g}, ${b})`
}

const AnimateBubbleDemo = () => {
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

export default AnimateBubbleDemo
