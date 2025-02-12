import { useState } from 'openinula'
import { Circle, Group, Stage } from '../components'

const EventBubbleDemo = () => {
  const [groupLog, setGroupLog] = useState('')
  const [log, setLog] = useState('')

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
  )
}

export default EventBubbleDemo
