import GCharts from "..";
import { PointerType } from "../type";
import { ChartOptions } from "./bar";

export class BaseChart {
  _chart: GCharts;
  options?: ChartOptions;
  context: any;
  private private_attr = {
    drawPointer: false,
  };
  constructor(_chart: GCharts) {
    this._chart = _chart;
  }
  injectContext(context: any) {
    this.context = context;
    this.options = context.options;
  }
  axisPointer() {
    if (this.options?.axisPointer.show) {
      this.private_attr.drawPointer = false;
      // TODO 后期值同步修改
      this._chart.canvas.addEventListener("mousemove", (e) => {
        this._handlePointer(e);
      });
      this._chart.canvas.addEventListener("mouseout", () => {
        if (this.private_attr.drawPointer) {
          this._drawPointer(
            [
              [0, 0],
              [0, 0],
            ],
            false
          );
          this.private_attr.drawPointer = false;
        }
      });
    }
  }
  _handlePointer(e: MouseEvent) {
    const chart = this._chart;
    const { offsetX: x, offsetY: y } = e;
    const { width } = chart;
    const { barAttr } = this.context;
    const { widestXLabel, xAxisLength, xAxisPosY } = barAttr;
    const startX = width - widestXLabel / 2 - xAxisLength;
    const endX = width - widestXLabel / 2 + 5;
    const endY = xAxisPosY + 3;
    const startY = 14;
    const pointer = [
      [startX, y],
      [endX, y],
    ] as PointerType;
    if (x >= startX && x <= endX && y >= startY && y <= endY) {
      this._drawPointer(pointer);
      this.private_attr.drawPointer = true;
    } else {
      if (this.private_attr.drawPointer) {
        this._drawPointer(pointer, false);
        this.private_attr.drawPointer = false;
      }
    }
  }
  // 可能本次是清除操作
  _drawPointer(pointer: PointerType, renderPointer = true) {
    this._chart.clear();
    this.context.render();
    if (renderPointer) {
      const { ctx } = this._chart;
      ctx.beginPath();
      ctx.moveTo(...pointer[0]);
      ctx.lineTo(...pointer[1]);
      ctx.stroke();
      ctx.closePath();
      const { scaleHop, calculatedScale, scaleHeight } = this.context.barAttr;
      //   console.log(scaleHop)
      //渲染文字 1*2=2
      //   console.log(pixelsPerUnit)
      console.log(scaleHeight);
      const [_textX, textY] = pointer[0];
      const pointerValue =  
        ((textY -5) / scaleHop) * calculatedScale.stepValue;
      console.log(pointerValue);
    }
  }
}
