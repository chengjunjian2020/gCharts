import GCharts from "../..";
import Scale from "../../component/scale/scale";
import GraphicAnimation from "../../core/animation";
import {
  calculateDrawingHeight,
  calculateOffset,
  calculateScale,
  calculateXAxisSize,
  getValueBounds,
} from "../../core/calc";
import { BaseData } from "../../type";
import { CandlestickOptions, CandlestickType } from "../../type/candletick";
import { ChartGlobalOptions } from "../../type/config";
import { BaseChart } from "../baseChart";

export class Candlestick extends BaseChart {
  defaultConfig: CandlestickType = {
    data: [],
    labels: [],
    riseColor: "#d60a22",
    depreciateColor: "#037b66",
    axisPointer: {
      show: true,
      fontSize: 14,
      lineStyle:"#999",
      color: "#fff",
      background: "#B4B4B4"
    },
  };
  chart: GCharts;
  scale: Scale;
  _options: CandlestickOptions & ChartGlobalOptions;
  barAttr = {
    valueHop: 0,
    yAxisPosX: 0,
    xAxisPosY: 0,
    barWidth: 0,
    scaleHop: 0,
    widestXLabel: 1,
    xAxisLength: 0,
    rotateLabels: 0,
    scaleHeight: 0, //实际绘制区域高度
    calculatedScale: {
      steps: 0,
      stepValue: 0,
      graphMin: 0,
      labels: [] as string[],
    },
  };
  datasets: BaseData;
  animation: GraphicAnimation | null = null;
  constructor(
    options: CandlestickOptions & ChartGlobalOptions,
    chart: GCharts
  ) {
    super(chart);
    this._options = {
      ...this.defaultConfig,
      ...this._chart.default.global,
      ...options,
    };
    this.datasets = {
      labels: options.labels,
      datasets: [
        {
          data: options.data.flat(),
          fillColor: "#f5804d",
        },
      ],
    };
    this.chart = chart;
    this.scale = new Scale(this.chart, this);
    this.injectContext(this);
    this.calcCandlestick();
  }
  setOption(options: CandlestickOptions & ChartGlobalOptions){
    this._options = {
      ...this.defaultConfig,
      ...this._chart.default.global,
      ...options,
    };
    this.datasets = {
      labels: options.labels,
      datasets: [
        {
          data: options.data.flat(),
          fillColor: "#f5804d",
        },
      ],
    };
    this.calcCandlestick();
  }
  calcCandlestick() {
    const { labelHeight, widestXLabel, scaleHeight, rotateLabels } =
      calculateDrawingHeight(
        this.defaultConfig,
        this.chart,
        this._chart.default.global
      );
    const { labels, barValueSpacing } = this._options;
    const { scaleShowLabels, scaleLabel } = this._chart.default.global;
    const valueBounds = getValueBounds(
      { labels, datasets: this.datasets.datasets },
      scaleHeight,
      labelHeight
    );
    const labelTemplateString = scaleShowLabels ? scaleLabel : "";
    const calculatedScale = calculateScale(
      valueBounds.maxSteps,
      valueBounds.minSteps,
      valueBounds.maxValue,
      valueBounds.minValue,
      labelTemplateString
    );
    // 每一个刻度的高度
    const scaleHop = Math.floor(scaleHeight / calculatedScale.steps);
    const { valueHop, yAxisPosX, xAxisPosY, barWidth, xAxisLength } =
      calculateXAxisSize(
        calculatedScale.labels,
        {
          widestXLabel,
          data: this.datasets,
          scaleHeight,
        },
        {
          ...this._options,
          barValueSpacing: barValueSpacing || 0,
          scaleGridLineWidth: 0,
          barDatasetSpacing: 0,
          barStrokeWidth: 0,
        },
        this.chart
      );
    this.barAttr = {
      valueHop,
      yAxisPosX,
      xAxisPosY,
      barWidth,
      calculatedScale,
      scaleHop,
      widestXLabel,
      xAxisLength,
      rotateLabels,
      scaleHeight,
    };
    this.animation = new GraphicAnimation(this.chart, {
      config: this._options,
      drawData: this.drawkLine,
      drawScale: this.scale.drawScale,
    });
  }
  drawkLine = (percent: number) => {
    const { ctx } = this.chart;
    const { yAxisPosX, xAxisPosY, valueHop, calculatedScale, scaleHop } =
      this.barAttr;
    const { riseColor, depreciateColor } = this._options;
    const data = this._options;
    //涨
    // const isRise =
    for (const index in data.data) {
      const i = Number(index);
      const item = data.data[i];
      const [open, close, high, low] = item;
      const isRise = close > open;
      ctx.beginPath();
      ctx.fillStyle = (isRise ? riseColor : depreciateColor) as string;
      ctx.strokeStyle = (isRise ? riseColor : depreciateColor) as string;
      // x位置
      const x = yAxisPosX + i * valueHop + valueHop / 2;
      // y位置
      const y =
        xAxisPosY -
        percent *
          calculateOffset(Math.max(open, close), calculatedScale, scaleHop);
      const tempHeight =
        xAxisPosY -
        percent *
          calculateOffset(Math.min(open, close), calculatedScale, scaleHop);
      const height = Math.max(y, tempHeight) - Math.min(y, tempHeight);
      // TODO 前期这里可以写死柱子宽度
      ctx.fillRect(x - 5, y, 10, height);
     
      ctx.moveTo(
        x,
        xAxisPosY - percent * calculateOffset(high, calculatedScale, scaleHop)
      );
    
      ctx.lineTo(
        x,
        xAxisPosY -
          percent *
            calculateOffset(Math.max(open, close), calculatedScale, scaleHop)
      );

      ctx.moveTo(
        x,
        xAxisPosY - percent * calculateOffset(low, calculatedScale, scaleHop)
      );
      ctx.lineTo(
        x,
        y+height
      );
      ctx.stroke();
    }
  };
  render() {
    this.scale.drawScale();
    this.drawkLine(1);
  }
}
