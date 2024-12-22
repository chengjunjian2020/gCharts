import GCharts from "..";
import { ChartOptions } from "../chart/bar";
import { animationOptions, easeFn } from "../common/ease";
import { isNumber } from "../utils/number";
export function CapValue(
  valueToCap: number,
  maxValue: number | null,
  minValue: number
) {
  if (isNumber(maxValue)) {
    if ((valueToCap as number) > (maxValue as number)) {
      return maxValue;
    }
  }
  if (isNumber(minValue)) {
    if ((valueToCap as number) < minValue) {
      return minValue;
    }
  }
  return valueToCap as number;
}
interface animationOpts {
  config: ChartOptions;
  drawScale: () => void;
  drawData: (percent: number) => void;
}
export default class GraphicAnimation {
  animFrameAmount: number; // 动画增量数据
  easingFunction: easeFn;
  percentAnimComplete=0; // 进度百分比
  _chart: GCharts;
  opts: animationOpts;
  constructor(_chart: GCharts, opts: animationOpts) {
    const { config } = opts;
    this.opts = opts;
    this._chart = _chart;
    this.animFrameAmount = config.animation
      ? 
        1 / (this.CapValue(config.animationSteps as number, Number.MAX_VALUE, 1) as number)
      : 1;
    this.easingFunction =
      animationOptions[config.animationEasing as keyof typeof animationOptions];
    this.percentAnimComplete = config.animation ? 0 : 1;

    requestAnimationFrame(()=>{
      this.animLoop()
    });
  }
  // 每一帧
  animLoop() {
    this.percentAnimComplete += this.animFrameAmount;
    this.animateFrame();
    const { config } = this.opts;
    if (this.percentAnimComplete <= 1) {
      requestAnimationFrame(()=>{
        this.animLoop()
      });
    } else {
      if (typeof this.opts.config.onAnimationComplete == "function")
        config.onAnimationComplete();
    }
  }

  animateFrame() {
    const { config, drawData } = this.opts;
    const easeAdjustedAnimationPercent = config.animation
      ? this.CapValue(this.easingFunction(this.percentAnimComplete), null, 0)
      : 1;
    this._chart.clear();
    if (config.scaleOverlay) {
      drawData(easeAdjustedAnimationPercent as number);
      this.opts.drawScale();
    } else {
      this.opts.drawScale();
      drawData(easeAdjustedAnimationPercent as number);
    }
  }
  CapValue(valueToCap: number,
    maxValue: number | null,
    minValue: number){
      return CapValue(valueToCap,maxValue,minValue);
  }
}
