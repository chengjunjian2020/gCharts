---
nav: 设计思想
group:
  title: 结构
  order: 1

toc: content
order: 6
---

# 优先级队列

通过点击执行按钮后, 再不断地点击插队按钮, 任务将优先执行

我们在内部维护了一个优先级队列, 当有高优先级的任务进入后, 将会优先执行高优先级的任务

```tsx | inline
import { useEffect, useRef } from 'react';
import { Stage, Rect } from 'advanced-charts/render';

const App = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<Stage>(null);

  useEffect(() => {
    const stage = new Stage({ container: canvasRef.current });
    stageRef.current = stage;

    renderRects();

    return () => {
      stageRef.current.dispose();
    };
  }, []);

  function renderRects() {
    const stage = stageRef.current;
    const start_x = 5;
    const start_y = 5;

    const gap = 5;

    const rectSize = 17;
    const width = rectSize;
    const height = rectSize;

    let curRow = 0;
    let curColumn = 0;

    const 执行Btn = document.querySelector('.执行') as HTMLButtonElement;
    const 插队Btn = document.querySelector('.插队') as HTMLButtonElement;

    执行Btn.onclick = () => {
      执行Btn.innerText = '已点击，插入中';

      requestIdleCallback(performWorkUnit);
    };

    插队Btn.onclick = () => {
      highPriorityTask();
    };

    let prevRect: Rect;

    function highPriorityTask() {
      const startTime = performance.now();

      while (performance.now() - startTime < 1) {}

      const rect = new Rect({
        x: prevRect.data.x,
        y: prevRect.data.y,
        width,
        height,
        fillStyle: 'red',
      });
      stage.appendIncrement(rect);
    }

    function task() {
      const startTime = performance.now();
      while (performance.now() - startTime < 1) {}

      let x = calcX();

      if (x + width > stage.canvasSize.width) {
        curRow += 1;
        curColumn = 0;

        x = calcX();
      }

      const y = start_y + (height + gap) * curRow;

      curColumn += 1;

      const rect = new Rect({
        x,
        y,
        width,
        height,
        fillStyle: 'pink',
        cursor: 'move',
        draggable: true,
      });
      stage.appendIncrement(rect);

      prevRect = rect;

      function calcX() {
        return start_x + (width + gap) * curColumn;
      }
    }

    const taskQueue = Array.from({ length: 100000 }, () => task);

    function performWorkUnit() {
      if (taskQueue.length === 0) {
        执行Btn.innerText = '执行';
        return;
      }

      requestIdleCallback((deadline) => {
        let task;
        while (
          (task = taskQueue.pop()) &&
          !deadline.didTimeout &&
          deadline.timeRemaining() > 0
        ) {
          task();
        }
        performWorkUnit();
      });
    }
  }

  return (
    <div style={{ marginTop: 10 }}>
      <button className="执行">执行</button>
      <button className="插队">插队</button>

      <div
        className="canvas-container"
        ref={canvasRef}
        style={{ width: 700, height: 30000 }}
      ></div>
    </div>
  );
};

export default App;
```
