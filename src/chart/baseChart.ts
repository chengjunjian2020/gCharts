import GCharts from "..";
import { PointerType } from "../type";
import { BarChartOptions } from "../type/barType";
import { uuid } from "../utils/helpers";

export class BaseChart {
  _chart: GCharts;
  private options?: BarChartOptions;
  context: any;
  id: string;

  private private_attr = {
    drawPointer: false,
  };
  constructor(_chart: GCharts) {
    this._chart = _chart;
    this.id = uuid();
  }
  injectContext(context: any) {
    this.context = context;
    this.options = context._options;
    this.axisPointer()
  }
  axisPointer() {
    if (this.options?.axisPointer?.show) {
      this.private_attr.drawPointer = false;
      // TODO 后期值同步修改
      this._chart.canvas.addEventListener("mousemove", (e) => {
        this._handlePointer(e);
      });
      this._chart.canvas.addEventListener("mouseout", () => {
        this._mouseOutPointer()
      });
    }
  }
  _mouseOutPointer(){
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
  }
  _handlePointer(e: MouseEvent) {
    const chart = this._chart;
    const { offsetX:x, offsetY:y  } = e;
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
      const {_options} = this.context;
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = _options.axisPointer.lineStyle
      ctx.moveTo(...pointer[0]);
      ctx.lineTo(...pointer[1]);
      ctx.closePath();
      ctx.stroke();
      const { scaleHop, calculatedScale,yAxisPosX } = this.context.barAttr;
      const {axisPointer} = this.context.options;
      const [_textX, _textY] = pointer[0];
      // TODO 后期考虑1
      const pointerValue =  calculatedScale.graphMax-
        Math.floor(((_textY -13) / scaleHop) * calculatedScale.stepValue);
      
      const textX = yAxisPosX - 5;
      const textY = _textY
      const textWidth = ctx.measureText(pointerValue+"").width
      ctx.save();
      ctx.fillStyle=axisPointer.background;
      ctx.fillRect(textX-textWidth-5,textY-axisPointer.fontSize+5,textWidth+10,14);
      ctx.fillStyle = axisPointer.color;
      ctx.fillText(pointerValue+"",textX,textY)
    }
  }
}
