import { useEffect, useState } from 'openinula'
import { Rect, Stage } from '../components'

const AnimateDemo = () => {
  const [state, setState] = useState({ x: 0, height: 60, fillStyle: 'purple' })

  useEffect(() => {
    setTimeout(() => {
      state.x = 200
      setState({ ...state })
    }, 500)

    setTimeout(() => {
      state.height = 200
      state.fillStyle = 'red'
      setState({ ...state })
    }, 800)
  }, [])

  return (
    <Stage>
      <Rect
        x={state.x}
        y={50}
        width={100}
        height={state.height}
        fillStyle={state.fillStyle}
        shadowColor="red"
        cursor="pointer"
        animation={{ duration: 1000, easing: 'linear' }}
      />
    </Stage>
  )
}

export default AnimateDemo
