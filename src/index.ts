import { Bar } from "./chart/bar";
import { Callback } from "./type";
import {
  getMaximumHeight,
  getMaximumWidth,
  retinaScale,
} from "./utils/helpers";

export interface ChartGlobalOptions {
  animation: boolean;
  animationSteps: number;
  animationEasing: string;
  showScale: boolean;
  scaleOverride: boolean;
  scaleSteps: number | null;
  scaleStepWidth: number | null;
  scaleStartValue: number | null;
  scaleLineColor: string;
  scaleLineWidth: number;
  scaleShowLabels: boolean;
  scaleLabel: string;
  scaleIntegersOnly: boolean;
  scaleBeginAtZero: boolean;
  scaleFontFamily: string;
  scaleFontSize: number;
  scaleFontStyle: string;
  scaleFontColor: string;
  responsive: boolean;
  maintainAspectRatio: boolean;
  showTooltips: boolean;
  customTooltips: boolean;
  tooltipEvents: string[];
  tooltipFillColor: string;
  tooltipFontFamily: string;
  tooltipFontSize: number;
  tooltipFontStyle: string;
  tooltipFontColor: string;
  tooltipTitleFontFamily: string;
  tooltipTitleFontSize: number;
  tooltipTitleFontStyle: string;
  tooltipTitleFontColor: string;
  tooltipYPadding: number;
  tooltipXPadding: number;
  tooltipCaretSize: number;
  tooltipCornerRadius: number;
  tooltipXOffset: number;
  tooltipTemplate: string;
  multiTooltipTemplate: string;
  multiTooltipKeyBackground: string;
  onAnimationProgress: () => void;
  onAnimationComplete: () => void;
}

export default class GCharts {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  aspectRatio: number; //纵横比
  default: { global: ChartGlobalOptions } = {
    global: {
      // Boolean - Whether to animate the chart
      animation: false,

      // Number - Number of animation steps
      animationSteps: 60,

      // String - Animation easing effect
      animationEasing: "easeOutQuart",

      // Boolean - If we should show the scale at all
      showScale: true,

      // Boolean - If we want to override with a hard coded scale
      scaleOverride: false,

      // ** Required if scaleOverride is true **
      // Number - The number of steps in a hard coded scale
      scaleSteps: null,
      // Number - The value jump in the hard coded scale
      scaleStepWidth: null,
      // Number - The scale starting value
      scaleStartValue: null,

      // String - Colour of the scale line
      scaleLineColor: "rgba(0,0,0,.1)",

      // Number - Pixel width of the scale line
      scaleLineWidth: 1,

      // Boolean - Whether to show labels on the scale
      scaleShowLabels: true,

      // Interpolated JS string - can access value
      scaleLabel: "<%=value%>",

      // Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
      scaleIntegersOnly: true,

      // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: false,

      // String - Scale label font declaration for the scale label
      scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // Number - Scale label font size in pixels
      scaleFontSize: 12,

      // String - Scale label font weight style
      scaleFontStyle: "normal",

      // String - Scale label font colour
      scaleFontColor: "#666",

      // Boolean - whether or not the chart should be responsive and resize when the browser does.
      responsive: false,

      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: true,

      // Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
      showTooltips: true,

      // Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
      customTooltips: false,

      // Array - Array of string names to attach tooltip events
      tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

      // String - Tooltip background colour
      tooltipFillColor: "rgba(0,0,0,0.8)",

      // String - Tooltip label font declaration for the scale label
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // Number - Tooltip label font size in pixels
      tooltipFontSize: 14,

      // String - Tooltip font weight style
      tooltipFontStyle: "normal",

      // String - Tooltip label font colour
      tooltipFontColor: "#fff",

      // String - Tooltip title font declaration for the scale label
      tooltipTitleFontFamily:
        "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // Number - Tooltip title font size in pixels
      tooltipTitleFontSize: 14,

      // String - Tooltip title font weight style
      tooltipTitleFontStyle: "bold",

      // String - Tooltip title font colour
      tooltipTitleFontColor: "#fff",

      // Number - pixel width of padding around tooltip text
      tooltipYPadding: 6,

      // Number - pixel width of padding around tooltip text
      tooltipXPadding: 6,

      // Number - Size of the caret on the tooltip
      tooltipCaretSize: 8,

      // Number - Pixel radius of the tooltip border
      tooltipCornerRadius: 6,

      // Number - Pixel offset from point x to tooltip edge
      tooltipXOffset: 10,

      // String - Template string for single tooltips
      tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

      // String - Template string for single tooltips
      multiTooltipTemplate: "<%= value %>",

      // String - Colour behind the legend colour block
      multiTooltipKeyBackground: "#fff",

      // Function - Will fire on animation progression.
      onAnimationProgress: function () {},

      // Function - Will fire on animation completion.
      onAnimationComplete: function () {},
    },
  };
  constructor(context: CanvasRenderingContext2D) {
    this.canvas = context.canvas;

    this.ctx = context;
    this.width = context.canvas.width;
    this.height = context.canvas.height;
    this.aspectRatio = this.width / this.height;
    //高像素密度显示
    if (window.devicePixelRatio) {
      context.canvas.style.width = this.width + "px";
      context.canvas.style.height = this.height + "px";
      context.canvas.height = this.height * window.devicePixelRatio;
      context.canvas.width = this.width * window.devicePixelRatio;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }
  setOptions() {}
  resize(callback?: Callback) {
    const canvas = this.canvas;
    const newWidth = getMaximumWidth(this.canvas);
    const newHeight = this.default.global.maintainAspectRatio
      ? newWidth / this.aspectRatio
      : getMaximumHeight(this.canvas);

    canvas.width = this.width = newWidth;
    canvas.height = this.height = newHeight;
    retinaScale(this.ctx);
    if (typeof callback === "function") {
      callback?.(this);
    }
    return this;
  }
  clear(){
    this.ctx.clearRect(0,0,this.width,this.height)
  }
  render(data:any){
    new Bar(data,this.default.global,this)
  }
}
