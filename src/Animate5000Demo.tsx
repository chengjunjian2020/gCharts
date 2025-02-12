import { useEffect, useRef, useState } from 'openinula'
import { Rect, Stage, Animator } from '../components'

const rectCount = 5000

const stageWidth = 700
const stageHeight = 10700

const Animate5000Demo = () => {
  const rectSize = 17

  const [list] = useState(() => {
    const width = rectSize
    const height = rectSize
    let curRow = 0
    let curColumn = 0
    const start_x = 5
    const start_y = 5

    const gap = 5

    return Array.from({ length: rectCount }, _ => {
      let x = calcX()

      if (x + width > stageWidth) {
        curRow += 1
        curColumn = 0

        x = calcX()
      }

      const y = start_y + (height + gap) * curRow

      curColumn += 1

      return { x, y, width, height }

      function calcX() {
        return start_x + (width + gap) * curColumn
      }
    })
  })

  const rectsRef = useRef([])

  useEffect(() => {
    const animator = new Animator({ a: 0 }, { a: 100 }, { iterationCount: Infinity })
    animator.start()

    const startRectState = list.map(item => ({ ...item, dis: -10 }))
    animator.onUpdate = (_, elapsedTimeRatio) => {
      for (let index = 0; index < rectsRef.current.length; index++) {
        const item = rectsRef.current[index]

        const curWidth = startRectState[index].width + startRectState[index].dis * elapsedTimeRatio
        const curHeight = startRectState[index].height + startRectState[index].dis * elapsedTimeRatio

        item?.attr({ width: curWidth, height: curHeight })
      }
    }

    return () => {
      animator.stop()
    }
  }, [])

  return (
    <Stage width={stageWidth} height={stageHeight} border="1px solid red">
      {list.map((item, index) => (
        <Rect
          ref={el => (rectsRef.current[index] = el)}
          x={item.x}
          y={item.y}
          width={item.width}
          height={item.height}
          fillStyle="pink"
          draggable
        />
      ))}
    </Stage>
  )
}

export default Animate5000Demo
