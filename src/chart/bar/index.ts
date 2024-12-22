import GCharts, { ChartGlobalOptions } from "../..";
import { uuid } from "../../utils/helpers";
import {
  calculateDrawingHeight,
  calculateOffset,
  calculateScale,
  calculateXAxisSize,
  getValueBounds,
} from "../../core/calc";
import GraphicAnimation from "../../core/animation";
import { BarChartOptions } from "../../type/config";
import { BaseChart } from "../baseChart";

export interface BarData {
  labels: string[];
  datasets: Array<any>;
}
export type ChartOptions = BarChartOptions & ChartGlobalOptions;
export class Bar extends BaseChart {
  defaultConfig: BarChartOptions = {
    scaleOverlay: false,
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
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
    animation: false,
    animationSteps: 60,
    animationEasing: "easeOutQuart",
    onAnimationComplete: () => {},
    axisPointer: {
      show: true,
      lineStyle: {
        color: "#000",
        width: 1,
      },
    },
  };
  options: BarChartOptions & ChartGlobalOptions;
  chart: GCharts;
  datasets: BarData;
  id: string;
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
  constructor(data: BarData, options: Partial<ChartOptions>, chart: GCharts) {
    super(chart);
    this.datasets = data;
    this.options = {
      ...chart.default.global,
      ...this.defaultConfig,
      ...options,
    };
    this.chart = chart;
    this.id = uuid();
    if (this.options.responsive) {
      this.chart.resize();
    }
    this.calcBar(data, this.options);
    this.injectContext(this);
    this.axisPointer()
  }
 
  calcBar(data: BarData, options: ChartOptions) {
    const { labelHeight, widestXLabel, scaleHeight, rotateLabels } =
      calculateDrawingHeight(data, this.chart, this.options);
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
        this.options,
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
      config: this.options,
      drawData: this.drawBars,
      drawScale: this.drawScale,
    });
  }

  drawBars = (percent: number) => {
    const { ctx } = this.chart;
    const config = this.options;
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
  drawScale = () => {
    const { ctx, width } = this.chart;
    const config = this.options;
    const data = this.datasets;
    const {
      widestXLabel,
      xAxisPosY,
      yAxisPosX,
      xAxisLength,
      rotateLabels,
      valueHop,
      calculatedScale,
      scaleHop,
    } = this.barAttr;
    //X axis line
    ctx.lineWidth = config.scaleLineWidth;
    ctx.strokeStyle = config.scaleLineColor;
    ctx.beginPath();
    ctx.moveTo(width - widestXLabel / 2 + 5, xAxisPosY);
    ctx.lineTo(width - widestXLabel / 2 - xAxisLength - 5, xAxisPosY);
    ctx.stroke();

    if (rotateLabels > 0) {
      ctx.save();
      ctx.textAlign = "right";
    } else {
      ctx.textAlign = "center";
    }
    ctx.fillStyle = config.scaleFontColor;
    for (var i = 0; i < data.labels.length; i++) {
      ctx.save();
      if (rotateLabels > 0) {
        ctx.translate(
          yAxisPosX + i * valueHop,
          xAxisPosY + config.scaleFontSize
        );
        ctx.rotate(-(rotateLabels * (Math.PI / 180)));
        ctx.fillText(data.labels[i], 0, 0);
        ctx.restore();
      } else {
        ctx.fillText(
          data.labels[i],
          yAxisPosX + i * valueHop + valueHop / 2,
          xAxisPosY + config.scaleFontSize + 3
        );
      }

      ctx.beginPath();
      ctx.moveTo(yAxisPosX + (i + 1) * valueHop, xAxisPosY + 3);
      //Check i isnt 0, so we dont go over the Y axis twice.
      ctx.lineWidth = config.scaleGridLineWidth;
      ctx.strokeStyle = config.scaleGridLineColor;
      ctx.lineTo(yAxisPosX + (i + 1) * valueHop, 5);
      ctx.stroke();
    }

    //Y axis
    ctx.lineWidth = config.scaleLineWidth;
    ctx.strokeStyle = config.scaleLineColor;
    ctx.beginPath();
    ctx.moveTo(yAxisPosX, xAxisPosY);
    ctx.lineTo(yAxisPosX, 14);
    ctx.stroke();

    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (var j = 0; j < calculatedScale.steps; j++) {
      ctx.beginPath();
      ctx.moveTo(yAxisPosX - 3, xAxisPosY - (j + 1) * scaleHop);
      if (config.scaleShowGridLines) {
        ctx.lineWidth = config.scaleGridLineWidth;
        ctx.strokeStyle = config.scaleGridLineColor;
        ctx.lineTo(yAxisPosX + xAxisLength + 5, xAxisPosY - (j + 1) * scaleHop);
      } else {
        ctx.lineTo(yAxisPosX - 0.5, xAxisPosY - (j + 1) * scaleHop);
      }

      ctx.stroke();
      if (config.scaleShowLabels) {
        // console.log("text",xAxisPosY - (j + 1) * scaleHop,calculatedScale.labels[j])
        ctx.fillText(
          calculatedScale.labels[j],
          yAxisPosX - 8,
          xAxisPosY - (j + 1) * scaleHop
        );
      }
    }
  };
  render() {
    this.drawScale();
    this.drawBars(1);
  }
}
