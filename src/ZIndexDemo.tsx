import { useRef, useState } from 'openinula'
import { Rect, Stage } from '../components'

const ZIndexDemo = () => {
  const [zIndex, setZIndex] = useState(2)

  return (
    <Stage>
      <Rect x={130} y={10} width={150} height={150} fillStyle="red" zIndex={1} />
      <Rect
        x={210}
        y={90}
        width={150}
        height={150}
        fillStyle="pink"
        zIndex={zIndex}
        onclick={() => {
          setZIndex(zIndex === 2 ? 4 : 2)
        }}
      />
      <Rect x={290} y={170} width={150} height={150} fillStyle="purple" zIndex={3} />
    </Stage>
  )
}

function ZIndexDemo2() {
  const [z1, setZ1] = useState(1)
  const [z2, setZ2] = useState(2)
  const [z3, setZ3] = useState(3)
  const [z4, setZ4] = useState(4)
  const [z5, setZ5] = useState(5)
  const [z6, setZ6] = useState(6)

  const maxRef = useRef(6)

  return (
    <Stage>
      <Rect
        x={80}
        y={80}
        width={150}
        height={150}
        fillStyle="pink"
        zIndex={z1}
        onclick={() => {
          maxRef.current += 1
          setZ1(maxRef.current)
        }}
      />
      <Rect
        x={110}
        y={110}
        width={150}
        height={150}
        fillStyle="red"
        zIndex={z2}
        onclick={() => {
          maxRef.current += 1
          setZ2(maxRef.current)
        }}
      />
      <Rect
        x={140}
        y={140}
        width={150}
        height={150}
        fillStyle="blue"
        zIndex={z3}
        onclick={() => {
          maxRef.current += 1
          setZ3(maxRef.current)
        }}
      />
      <Rect
        x={170}
        y={170}
        width={150}
        height={150}
        fillStyle="green"
        zIndex={z4}
        onclick={() => {
          maxRef.current += 1
          setZ4(maxRef.current)
        }}
      />
      <Rect
        x={200}
        y={200}
        width={150}
        height={150}
        fillStyle="orange"
        zIndex={z5}
        onclick={() => {
          maxRef.current += 1
          setZ5(maxRef.current)
        }}
      />
      <Rect
        x={230}
        y={230}
        width={150}
        height={150}
        fillStyle="yellow"
        zIndex={z6}
        onclick={() => {
          maxRef.current += 1
          setZ6(maxRef.current)
        }}
      />
    </Stage>
  )
}

export default ZIndexDemo2
