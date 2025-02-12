import { useState } from 'openinula'
import { Sector, Stage } from '../components'

const SectorDemo = () => {
  const [x, setX] = useState(200)
  const [y, setY] = useState(100)

  const [radius, setRadius] = useState(100)

  const [fillStyle, setFillStyle] = useState('red')

  return (
    <>
      <div>
        <label> fillColor: </label>
        <input type="color" onChange={evt => setFillStyle(evt.target.value)} />
      </div>

      <div>
        <label> x: </label>
        <input type="range" value={x} min={200} max={250} onChange={evt => setX(Number(evt.target.value))} />
      </div>

      <div>
        <label> y: </label>
        <input type="range" value={y} min={100} max={150} onChange={evt => setY(Number(evt.target.value))} />
      </div>

      <div>
        <label> radius: </label>
        <input type="range" value={radius} min={100} max={150} onChange={evt => setRadius(Number(evt.target.value))} />
      </div>

      <Stage>
        <Sector x={x} y={y} radius={radius} fillStyle={fillStyle} />
      </Stage>
    </>
  )
}

export default SectorDemo
