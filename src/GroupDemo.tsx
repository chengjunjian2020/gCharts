import { Stage, Group, Rect } from '../components'

 const GroupDemo = () => {
  return (
    <Stage border="1px solid orange">
      <Rect />
      <Rect x={100} fillStyle="red" />
      <Group draggable>
        <Rect x={200} fillStyle="red" />
        <Rect x={200} y={120} fillStyle="orange" />
      </Group>
    </Stage>
  )
};

export default GroupDemo