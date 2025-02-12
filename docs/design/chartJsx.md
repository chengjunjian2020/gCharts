---
nav: 设计思想
group:
  title: 结构
  order: 1

toc: content
order: 5
---

# 以 jsx 的使用图表组件

我们支持以 jsx 的形式使用图表组件, 展示 x 轴 y 轴 图表主体等

> 一般 Y 轴的数据是自动算的, 默认情况下可以不写 `<YAxis /> `

```tsx | inline
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import rmstCharts from 'advanced-charts/core';
import { useResizeObserver } from 'advanced-charts/_hooks';

const Context = createContext(null);

const xData_1 = ['a', 'b', 'c', 'd', 'e', 'f'];
const xData_2 = ['g', 'h', 'i', 'j', 'k', 'l'];

const mainData_1 = [620, 932, 901, 934, 800, 1001];
const mainData_2 = [680, 232, 401, 934, 300, 101];

const App = () => {
  const [xData, setXData] = useState(xData_1);
  const [mainData, setMainData] = useState(mainData_1);

  return (
    <div>
      {/* <button onClick={() => setXData(xData === xData_1 ? xData_2 : xData_1)}>
        更新 X轴
      </button> */}
      <button
        onClick={() =>
          setMainData(mainData === mainData_1 ? mainData_2 : mainData_1)
        }
      >
        更新 data
      </button>

      <ChartStage>
        <XAxis data={xData} />
        <LineMain data={mainData} />
      </ChartStage>
    </div>
  );
};

export default App;

function ChartStage(props) {
  const containerRef = useRef();

  const insRef = useRef(null);
  const optionRef = useRef({ xAxis: { data: [] }, series: [] });

  useEffect(() => {
    const ins = rmstCharts.init(containerRef.current);
    insRef.current = ins;

    for (const child of props.children || []) {
      if (child.type === XAxis) {
        optionRef.current.xAxis = child.props;
        continue;
      }
      if (child.type === LineMain) {
        optionRef.current.series = [{ type: 'line', data: child.props.data }];
      }
    }
    ins.setOption(optionRef.current);
  }, []);

  function updateXAxisData(data) {
    optionRef.current.xAxis.data = data;
    insRef.current.setOption(optionRef.current);
  }

  function updateLineMainData(data) {
    optionRef.current.series = [{ type: 'line', data }];
    insRef.current.setOption(optionRef.current);
  }

  const value = useMemo(() => {
    return { updateXAxisData, updateLineMainData };
  }, []);

  useResizeObserver(containerRef, () => insRef.current.refreshDraw());

  return (
    <Context.Provider value={value}>
      <div
        ref={containerRef}
        style={{ width: '100%', height: 500, border: '1px solid #aaa' }}
      ></div>

      {props.children}
    </Context.Provider>
  );
}

function XAxis(props) {
  const { updateXAxisData } = useContext(Context);
  const isFirstRender = useFirstRender();

  useLayoutEffect(() => {
    if (!isFirstRender) {
      console.log(props.data);
      updateXAxisData(props.data);
    }
  }, [props.data]);

  return null;
}
function LineMain(props) {
  const { updateLineMainData } = useContext(Context);

  const isFirstRender = useFirstRender();

  useLayoutEffect(() => {
    if (!isFirstRender) {
      updateLineMainData(props.data);
    }
  }, [props.data]);

  return null;
}

function useFirstRender() {
  const ref = useRef(true);

  useLayoutEffect(() => {
    ref.current = false;
  }, []);

  return ref.current;
}
```

```tsx | pure
import { ChartStage, XAxis, LineMain } from 'advanced-charts';

const mainData_1 = [620, 932, 901, 934, 800, 1001];
const mainData_2 = [680, 232, 401, 934, 300, 101];

const App = () => {
  const [xData] = useState(['a', 'b', 'c', 'd', 'e', 'f'];);
  const [mainData, setMainData] = useState(mainData_1);

  return (
    <div>
      <button
        onClick={() =>
          setMainData(mainData === mainData_1 ? mainData_2 : mainData_1)
        }
      >
        更新 data
      </button>

      <ChartStage>
        <XAxis data={xData} />
        <LineMain data={mainData} />
      </ChartStage>
    </div>
  );
};
```
