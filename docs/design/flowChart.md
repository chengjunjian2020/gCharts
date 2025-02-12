---
nav: 设计思想
group:
  title: 结构
  order: 1

toc: content
order: 7
---

# 流程图节点

```tsx | inline
import { useEffect, useRef } from 'react';
import {
  Stage,
  Rect,
  Circle,
  Group,
  Line,
  calcLineLength,
} from 'advanced-charts/render';
import { useResizeObserver } from 'advanced-charts/_hooks';

class RectWithCircle {
  constructor(rectData: Rect['data']) {
    this.createRect(rectData);
    this.createCircles();

    this.group = new Group({ zIndex: 10, draggable: true });
    this.group.append(this.rect);

    this.group.onmouseenter = () => {
      this.showCircles();
    };
    this.group.onmouseleave = () => {
      this.hideCircles();
    };

    this.group.ondrag = (evt) => {
      this.startLines.forEach((item) => {
        const { points } = item.data;
        const start = [points[0] + evt.dx, points[1] + evt.dy];
        const end = [points[2], points[3]];
        item.attr({ points: [...start, ...end] });
      });

      this.endLines.forEach((item) => {
        const { points } = item.data;
        const start = [points[0], points[1]];
        const end = [points[2] + evt.dx, points[3] + evt.dy];
        item.attr({ points: [...start, ...end] });
      });
    };
  }

  group: Group;
  rect: Rect;
  circles: Circle[];

  showCircles() {
    this.group.append(this.circles);
  }

  hideCircles() {
    this.circles.forEach((item) => {
      item.remove();
    });
  }

  private createRect(rectData) {
    this.rect = new Rect({
      fillStyle: 'white',
      strokeStyle: '#444',
      lineWidth: 2,
      cornerRadius: 2,
      ...rectData,
    });
  }

  private createCircles() {
    const { rect } = this;

    const opt = {
      draggable: false,
      radius: 4,
      fillStyle: 'white',
      strokeStyle: 'blue',
      cursor: 'crosshair',
    } as const;

    this.circles = [
      new Circle({
        x: rect.data.x + rect.data.width / 2,
        y: rect.data.y,
        ...opt,
      }),
      new Circle({
        x: rect.data.x + rect.data.width,
        y: rect.data.y + rect.data.height / 2,
        ...opt,
      }),
      new Circle({
        x: rect.data.x + rect.data.width / 2,
        y: rect.data.y + rect.data.height,
        ...opt,
      }),
      new Circle({
        x: rect.data.x,
        y: rect.data.y + rect.data.height / 2,
        ...opt,
      }),
    ];

    this.circles.forEach((item) => {
      item.onmousedown = () => {
        this.onCircleMousedown(item);
      };
    });
  }

  // 存放的是 从该图形拖出来的 线
  startLines: Line[] = [];

  // 存放的是 拖至该图形 线
  endLines: Line[] = [];

  onCircleMousedown(circle: Circle) {}

  detectOther(x: number, y: number) {
    let otherRectWithCircle: RectWithCircle;
    let collisionCircle: Circle;
    for (const item of this.subscribeOthers) {
      const ans = RectWithCircle.detectCircle(x, y, item.circles);
      if (ans) {
        collisionCircle = ans;
        otherRectWithCircle = item;

        return { collisionCircle, otherRectWithCircle };
      }
    }

    return null;
  }

  static detectCircle(x: number, y: number, circles) {
    for (const item of circles) {
      if (
        calcLineLength({ x, y }, { x: item.data.x, y: item.data.y }) <=
        item.data.radius
      ) {
        return item;
      }
    }

    return null;
  }

  subscribeOthers: RectWithCircle[] = [];
  // 该图形 可以和 other 连线 : a.subscribe(b) -> 代表 可以从 a 拖出一条线连到 b
  subscribe(other: RectWithCircle, isEachOther: boolean) {
    this.subscribeOthers.push(other);

    if (isEachOther) {
      other.subscribe(this, false);
    }
  }
}

function App() {
  const canvasRef = useRef();
  const stageRef = useRef();

  useEffect(() => {
    const stage = new Stage({ container: canvasRef.current });
    stageRef.current = stage;

    const rectWithCircles_1 = new RectWithCircle({
      x: 100,
      y: 50,
      width: 100,
      height: 100,
    });
    const rectWithCircles_2 = new RectWithCircle({
      x: 400,
      y: 50,
      width: 100,
      height: 100,
    });
    const rectWithCircles_3 = new RectWithCircle({
      x: 250,
      y: 160,
      width: 100,
      height: 100,
    });

    const list = [rectWithCircles_1, rectWithCircles_2, rectWithCircles_3];
    stage.append(list.map((item) => item.group));

    list.forEach((item) => {
      item.onCircleMousedown = (c) => {
        downRectWithCircle = item;
        downCircle = c;
      };
    });

    eachOtherSubscribe(list);

    function eachOtherSubscribe(list: RectWithCircle[]) {
      if (list.length < 2) {
        console.log('至少要有两个');
        return;
      }

      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          list[i].subscribe(list[j], true);
        }
      }
    }

    let downRectWithCircle: RectWithCircle;
    let downCircle: Circle;
    let line: Line;
    let other: { otherRectWithCircle: RectWithCircle; collisionCircle: Circle };

    stage.onmousemove = (evt) => {
      if (!downCircle) {
        return;
      }

      if (!line) {
        line = new Line({
          points: [downCircle.data.x, downCircle.data.y, evt.x, evt.y],
          strokeStyle: '#444',
          lineWidth: 2,
        });

        downRectWithCircle.startLines.push(line);
        stage.append(line);
      } else {
        line.attr({
          points: [downCircle.data.x, downCircle.data.y, evt.x, evt.y],
        });
      }

      other = downRectWithCircle.detectOther(evt.x, evt.y);
      if (other) {
        line.attr({
          points: [
            downCircle.data.x,
            downCircle.data.y,
            other.collisionCircle.data.x,
            other.collisionCircle.data.y,
          ],
        });
      }
    };

    stage.onmouseup = () => {
      if (other) {
        other.otherRectWithCircle.endLines.push(line);
      }
      downRectWithCircle = null;
      downCircle = null;
      line = null;
      other = null;
    };
  }, []);

  useResizeObserver(canvasRef, () => {
    stageRef.current.refreshDraw();
  });

  return <div ref={canvasRef} style={{ width: '100%', height: 400 }}></div>;
}

export default App;
```
