import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'openinula'
import rmstCharts from '../components/core'
import { useFirstRender } from '../components/_hooks'

const xData_1 = ['a', 'b', 'c', 'd', 'e', 'f']
const xData_2 = ['g', 'h', 'i', 'j', 'k', 'l']

const mainData_1 = [620, 932, 901, 934, 800, 1001]
const mainData_2 = [680, 232, 401, 934, 300, 101]

const ChartJsxDemo = () => {
  const [xData, setXData] = useState(xData_1)
  const [mainData, setMainData] = useState(mainData_1)

  return (
    <div>
      <button onClick={() => setXData(xData === xData_1 ? xData_2 : xData_1)}>更新 X轴</button>
      <button onClick={() => setMainData(mainData === mainData_1 ? mainData_2 : mainData_1)}>更新 data</button>

      <ChartStage>
        <XAxis data={xData} />
        <LineMain data={mainData} />
      </ChartStage>
    </div>
  )
}

export default ChartJsxDemo

const optionRef = { xAxis: { data: [] }, series: [] }
function ChartStage(props) {
  const containerRef = useRef()

  const insRef = useRef(null)

  useEffect(() => {
    const ins = rmstCharts.init(containerRef.current)
    insRef.current = ins

    for (const child of props.children || []) {
      if (child.type === XAxis) {
        optionRef.xAxis = child.props
        continue
      }
      if (child.type === LineMain) {
        optionRef.series = [{ type: 'line', data: child.props.data }]
      }
    }
    ins.setOption(optionRef)
  }, [])

  function updateXAxisData(data) {
    optionRef.xAxis.data = data
    insRef.current.setOption(optionRef)
  }

  function updateLineMainData(data) {
    optionRef.series = [{ type: 'line', data }]
    insRef.current.setOption(optionRef)
  }

  return (
    <Context.Provider value={{ updateXAxisData, updateLineMainData }}>
      <div ref={containerRef} style={{ width: 750, height: 500, border: '1px solid #aaa' }}></div>

      {props.children}
    </Context.Provider>
  )
}

function XAxis(props) {
  const { updateXAxisData } = useContext(Context)
  const isFirstRender = useFirstRender()

  useLayoutEffect(() => {
    if (!isFirstRender) {
      updateXAxisData(props.data)
    }
  }, [props.data])

  return null
}
function LineMain(props) {
  const { updateLineMainData } = useContext(Context)

  const isFirstRender = useFirstRender()

  useLayoutEffect(() => {
    if (!isFirstRender) {
      updateLineMainData(props.data)
    }
  }, [props.data])

  return null
}

const Context = createContext(null)
