import { Stage, Rect, Circle, Line, Sector, Trapezoid, Curve, Text } from '../components'

const BaseAttrDemo = () => {
  return (
    <Stage>
      <Rect
        x={130}
        y={10}
        width={150}
        height={150}
        cornerRadius={4}
        fillStyle="red"
        strokeStyle="blue"
        shadowBlur={8}
        shadowOffsetX={10}
        shadowOffsetY={10}
        shadowColor="#333"
        lineWidth={5}
        lineJoin="bevel"
        lineCap="square"
        lineDash={[4]}
        opacity={0.5}
        transform={[1, 0.2, 0.8, 1, 0, 0]}
        scale={{ x: 2, y: 2 }}
        translate={{ x: 100, y: 0 }}
      />
      {/* 
      <Circle x={10} y={10} radius={20} innerRadius={10} strokeStyle="blue" />
      <Line start={{ x: 100, y: 100 }} end={{ x: 200, y: 100 }} strokeStyle="pink" />
      <Sector x={10} y={10} radius={20} innerRadius={10} startAngle={30} endAngle={90} />
      <Trapezoid x={100} y={100} width={100} height={100} shortLength={80} />
      <Curve points={[100, 100, 200, 244, 300, 123]} strokeStyle="pink" />
      <Text x={40} y={40} content="hello" textAlign="center" textBaseline="middle" /> */}
    </Stage>
  )
}

export default BaseAttrDemo
