import React, { useState } from 'openinula'

import ZIndexDemo from './ZIndexDemo'
import GroupDemo from './GroupDemo'
import RectDemo from './RectDemo'
import CircleDemo from './CircleDemo'
import LineDemo from './LineDemo'
import CurveDemo from './CurveDemo'
import SectorDemo from './SectorDemo'
import TrapezoidDemo from './TrapezoidDemo'
import EventDemo from './EventDemo'
import AnimateDemo from './AnimateDemo'
import AnimateBubbleDemo from './AnimateBubbleDemo'
import Animate5000Demo from './Animate5000Demo'

import LineChartDemo1 from './LineChartDemo1'
import LineChartDemo2 from './LineChartDemo2'
import LineChartDemo3 from './LineChartDemo3'
import LineChartDemo4 from './LineChartDemo4'
import LineChartDemo5 from './LineChartDemo5'
import LineChartDemo6 from './LineChartDemo6'
import LineChartDemo7 from './LineChartDemo7'

import BarChartDemo1 from './BarChartDemo1'
import BarChartDemo3 from './BarChartDemo3'
import BarChartDemo2 from './BarChartDemo2'
import BarChartDemo4 from './BarChartDemo4'
import BarChartDemo5 from './BarChartDemo5'
import BarChartDemo6 from './BarChartDemo6'

import PieChartDemo1 from './PieChartDemo1'
import PieChartDemo2 from './PieChartDemo2'

import KLineChartDemo1 from './KLineChartDemo1'
import KLineChartDemo2 from './KLineChartDemo2'

import './index.css'
import EventHitDemo from './EventHitDemo'

import QueueDemo from './QueueDemo'
import RectDragLine from './RectDragLine'
import ChartJsxDemo from './ChartJsxDemo'
import MatrixDemo from './MatrixDemo'
import EventBubbleDemo from './EventBubbleDemo'
import BaseAttrDemo from './BaseAttrDemo'
import BoundingBoxDemo from './BoundingBoxDemo'

// 矩形,圆形,椭圆,扇形,简单线条(直线),多边形,折线,曲线,图片,文字,弧形,路径,箭头,自定义图形,梯形,正多边形
// x,y 填充,边框,半径,透明度,阴影,圆角矩形,鼠标样式,矩阵变换

// 鼠标事件,事件冒泡,拖拽,阻止冒泡方法,键盘事件,裁剪

const demosMap = {
  BaseAttrDemo: <BaseAttrDemo />,
  QueueDemo: <QueueDemo />,
  RectDragLine: <RectDragLine />,
  ChartJsxDemo: <ChartJsxDemo />,
  MatrixDemo: <MatrixDemo />,
  BoundingBoxDemo: <BoundingBoxDemo />,

  zIndex: <ZIndexDemo />,
  group: <GroupDemo />,
  rect: <RectDemo />,
  circle: <CircleDemo />,
  line: <LineDemo />,
  curve: <CurveDemo />,
  sector: <SectorDemo />,
  trapezoid: <TrapezoidDemo />,
  event: <EventDemo />,
  eventBubble: <EventBubbleDemo />,
  eventHit: <EventHitDemo />,
  animate: <AnimateDemo />,
  animateBubble: <AnimateBubbleDemo />,
  Animate5000Demo: <Animate5000Demo />,

  lineChart1: <LineChartDemo1 />,
  lineChart2: <LineChartDemo2 />,
  lineChart3: <LineChartDemo3 />,
  lineChart4: <LineChartDemo4 />,
  lineChart5: <LineChartDemo5 />,
  lineChart6: <LineChartDemo6 />,
  lineChart7: <LineChartDemo7 />,

  barChart1: <BarChartDemo1 />,
  barChart2: <BarChartDemo2 />,
  barChart3: <BarChartDemo3 />,
  barChart4: <BarChartDemo4 />,
  barChart5: <BarChartDemo5 />,
  barChart6: <BarChartDemo6 />,

  pieChart1: <PieChartDemo1 />,
  pieChart2: <PieChartDemo2 />,

  kChart1: <KLineChartDemo1 />,
  kChart2: <KLineChartDemo2 />
}

function App() {
  console.log('App render')

  const [cur, setCur] = useState(location.hash.slice(1) || 'rect')

  return (
    <div style={{ display: 'flex' }}>
      <div className="let" style={{ width: '300px', position: 'fixed', top: 0, bottom: 0, overflow: 'auto' }}>
        <h1>demo 演示</h1>
        {Object.keys(demosMap).map(item => (
          <a
            href="javascript:;"
            className="side-tab"
            style={{ color: item === cur ? 'red' : '' }}
            onClick={() => {
              location.hash = item
              setCur(item)
            }}
          >
            <div style={{ margin: '15px', fontSize: '18px' }}>{item}</div>
          </a>
        ))}
      </div>
      <div className="right" style={{ flex: 1, padding: '30px', marginLeft: 300 }}>
        {demosMap[cur]}
      </div>
    </div>
  )

  // return (
  //   <Stage>
  //     {/* <BoxHidden /> */}
  //     {/* <Line /> */}

  //     <Group draggable>
  //       <Rect x={100} y={100} width={100} height={100} fillStyle="pink" />
  //       <Rect x={150} y={150} width={100} height={100} fillStyle="blueviolet" />
  //     </Group>

  //     {/* <Rect /> */}
  //     {/* <Trapezoid /> */}

  //     {/* <Text />
  //     <Circle /> */}

  //     <div>11</div>
  //     <Asd></Asd>
  //   </Stage>
  // )

  // return (
  //   <div>
  //     <hr />

  //     <button onClick={() => setX(100)}>setX</button>
  //     <hr />

  //     <Stage>
  //       <Line points={[10, 10, 50, 50]} strokeStyle="red" />
  //       <Circle
  //         x={x}
  //         y={x}
  //         radius={20}
  //         fillStyle="red"
  //         cursor="pointer"
  //         onclick={() => {
  //           console.log(1234)
  //         }}
  //         onmouseenter={() => {
  //           console.log('enter')
  //         }}
  //         animation={{ duration: 300, easing: 'linear' }}
  //       />

  //       <Group>
  //         <Rect x={120} y={10} width={100} height={100} fillStyle="blue" />
  //         <Rect x={180} y={10} width={100} height={100} fillStyle="red" />
  //       </Group>

  //       <Group>
  //         <Rect x={120} y={120} width={100} height={100} fillStyle="gray" />
  //         <Rect x={180} y={120} width={100} height={100} fillStyle="pink" />
  //       </Group>

  //       <BoxHidden x={330} y={10} width={100} height={100} fillStyle="pink">
  //         <Circle x={340} y={20} radius={30} fillStyle="green" draggable cursor="move" />
  //       </BoxHidden>

  //       <Text x={10} y={150} content="哈哈哈"></Text>
  //     </Stage>
  //   </div>
  // )
}

React.render(<App />, document.getElementById('root'))
