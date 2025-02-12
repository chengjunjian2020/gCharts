import { useState } from 'openinula'
import { Stage, DraggableLine } from '../components'

const LineDemo = () => {
  const [lineWidth, setLineWidth] = useState(2)

  const [strokeStyle, setStrokeStyle] = useState('blue')

  return (
    <>
      <div>
        <label> strokeColor: </label>
        <input type="color" onChange={evt => setStrokeStyle(evt.target.value)} />
      </div>

      <div>
        <label> strokeWidth: </label>
        <input
          type="range"
          value={lineWidth}
          min={1}
          max={10}
          onChange={evt => setLineWidth(Number(evt.target.value))}
        />
      </div>

      <Stage>
        <DraggableLine
          type="solid"
          start={{ x: 100, y: 100 }}
          end={{ x: 300, y: 300 }}
          lineWidth={lineWidth}
          strokeStyle={strokeStyle}
        />
      </Stage>
    </>
  )
}

export default LineDemo
