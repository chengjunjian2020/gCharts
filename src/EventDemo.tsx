import { useState } from 'openinula'
import { Circle, Stage } from '../components'

const EventDemo = () => {
  const [log, setLog] = useState('')

  return (
    <>
      <div style={{ height: 20 }}>{log}</div>

      <Stage>
        <Circle
          x={350}
          y={260}
          radius={100}
          cursor="pointer"
          fillStyle="pink"
          onclick={() => {
            setLog('click')
          }}
          onmouseenter={() => {
            setLog('mouseenter')
          }}
          onmouseleave={() => {
            setLog('mouseleave')
          }}
          onmousedown={() => {
            setLog('mousedown')
          }}
        />
      </Stage>
    </>
  )
}

export default EventDemo
