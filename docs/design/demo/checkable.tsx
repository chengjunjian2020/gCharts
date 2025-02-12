import React, { useState } from 'react';
import {Stage, Rect} from 'advanced-charts'

const App = () => {
  console.log(useState)
  const [x, setX] = useState(0)
  return (
    <div onClick={() => setX(x + 20)}>
      <Stage>
        <Rect x={x} y={120} width={100} height={100} fillStyle="gray" />
      </Stage>
    </div>
  )
}

export default App;