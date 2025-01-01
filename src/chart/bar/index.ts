import GCharts from "../..";
import {
  calculateDrawingHeight,
  calculateOffset,
  calculateScale,
  calculateXAxisSize,
  getValueBounds,
} from "../../core/calc";
import GraphicAnimation from "../../core/animation";
import { ChartGlobalOptions } from "../../type/config";
import { BaseChart } from "../baseChart";
import Scale from "../../component/scale/scale";
import { BarChartOptions } from "../../type/barType";
import { BaseData } from "../../type";


type BarOption = BarChartOptions & ChartGlobalOptions;
export class Bar extends BaseChart {
  defaultConfig: BarChartOptions = {
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "rgba(0,0,0,.1)",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleFontFamily: "'Arial'",
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#666",
    scaleShowGridLines: false,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    barShowStroke: false,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 2,
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutQuart",
    axisPointer: {
      show: true,
      fontSize: 14,
      lineStyle:"#999",
      color: "#fff",
      background: "#B4B4B4"
    },
  };
  _options: BarChartOptions & ChartGlobalOptions;
  chart: GCharts;
  datasets: BaseData;
  barAttr = {
    valueHop: 0,
    yAxisPosX: 0,
    xAxisPosY: 0,
    barWidth: 0,
    scaleHop: 0,
    widestXLabel: 1,
    xAxisLength: 0,
    rotateLabels: 0,
    scaleHeight:0,//实际绘制区域高度
    calculatedScale: {
      steps: 0,
      stepValue: 0,
      graphMin: 0,
      labels: [] as string[],
    },
  };
  animation: GraphicAnimation | null = null;
  scale: Scale;
  constructor(data: BaseData, options: Partial<BarOption>, chart: GCharts) {
    super(chart);
    this.datasets = data;
    this._options = {
      ...chart.default.global,
      ...this.defaultConfig,
      ...options,
    };
    this.chart = chart;
    // if (this.options.responsive) {
    //   this.chart.resize();
    // }
    this.scale = new Scale(this.chart, this);
    this.calcBar(data, this._options);
    this.injectContext(this);
  }
  setOption(data: BaseData, options: Partial<BarOption>,){
    this.datasets = data;
    this._options = {
      ...this.chart.default.global,
      ...this.defaultConfig,
      ...options,
    };
    this.calcBar(data, this._options);
  }
  calcBar(data: BaseData, options: BarOption) {
    const { labelHeight, widestXLabel, scaleHeight, rotateLabels } =
      calculateDrawingHeight(data, this.chart, this._options);
    const valueBounds = getValueBounds(data, scaleHeight, labelHeight);
    // label模板
    const labelTemplateString = options.scaleShowLabels
      ? options.scaleLabel
      : "";
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
          data,
          scaleHeight,
        },
        this._options,
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
      scaleHeight
    };
    this.animation = new GraphicAnimation(this.chart, {
      config: this._options,
      drawData: this.drawBars,
      drawScale: this.scale.drawScale,
    });
  }

  drawBars = (percent: number) => {
    const { ctx } = this.chart;
    const config = this._options;
    const data = this.datasets;
    const {
      valueHop,
      yAxisPosX,
      xAxisPosY,
      barWidth,
      calculatedScale,
      scaleHop,
    } = this.barAttr;
    ctx.lineWidth = config.barStrokeWidth;
    for (let i = 0; i < data.datasets.length; i++) {
      ctx.fillStyle = data.datasets[i].fillColor;
      ctx.strokeStyle = data.datasets[i].strokeColor;
      for (let j = 0; j < data.datasets[i].data.length; j++) {
        let barOffset =
          yAxisPosX +
          config.barValueSpacing +
          valueHop * j +
          barWidth * i +
          config.barDatasetSpacing * i +
          config.barStrokeWidth * i;

        ctx.beginPath();
        ctx.moveTo(barOffset, xAxisPosY);
        ctx.lineTo(
          barOffset,
          xAxisPosY -
            percent *
              calculateOffset(
                data.datasets[i].data[j],
                calculatedScale,
                scaleHop
              ) +
            config.barStrokeWidth / 2
        );
        ctx.lineTo(
          barOffset + barWidth,
          xAxisPosY -
            percent *
              calculateOffset(
                data.datasets[i].data[j],
                calculatedScale,
                scaleHop
              ) +
            config.barStrokeWidth / 2
        );
        ctx.lineTo(barOffset + barWidth, xAxisPosY);
        if (config.barShowStroke) {
          ctx.stroke();
        }
        ctx.closePath();
        ctx.fill();
      }
    }
  };
  render() {
    this.scale.drawScale();
    this.drawBars(1);
  }
}
