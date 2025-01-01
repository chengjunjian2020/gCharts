import { Bar } from "./chart/bar";
import { Candlestick } from "./chart/candlestick";
import { Pie } from "./chart/pie";
import { Callback } from "./type";
import { ChartGlobalOptions } from "./type/config";
import {
  getMaximumHeight,
  getMaximumWidth,
  retinaScale,
} from "./utils/helpers";

class GCharts {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  aspectRatio: number; //纵横比
  default: { global: ChartGlobalOptions } = {
    global: {
      // 布尔值 - 是否为图表添加动画效果
    animation: true,

    // 数字 - 动画的步骤数
    animationSteps: 60,

    // 字符串 - 动画缓动效果
    animationEasing: "easeOutQuart",

    // 布尔值 - 是否显示刻度
    showScale: true,

    // 布尔值 - 是否使用硬编码的刻度
    scaleOverride: false,

    // ** 如果 scaleOverride 为 true，则必须设置以下字段 **
    // 数字 - 硬编码刻度的步数
    scaleSteps: null,
    // 数字 - 硬编码刻度的步长
    scaleStepWidth: null,
    // 数字 - 刻度的起始值
    scaleStartValue: null,

    // 字符串 - 刻度线的颜色
    scaleLineColor: "rgba(0,0,0,.1)",

    // 数字 - 刻度线的像素宽度
    scaleLineWidth: 1,

    // 布尔值 - 是否在刻度上显示标签
    scaleShowLabels: true,

    // 插值的 JS 字符串 - 可以访问值
    scaleLabel: "<%=value%>",

    // 字符串 - 刻度标签的字体声明
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // 数字 - 刻度标签的字体大小（像素）
    scaleFontSize: 12,

    // 字符串 - 刻度标签的字体样式
    scaleFontStyle: "normal",

    // 字符串 - 刻度标签的字体颜色
    scaleFontColor: "#666",

    // 布尔值 - 图表响应式时是否保持起始的纵横比，如果设置为 false，将占满整个容器
    maintainAspectRatio: true,

    // 布尔值 - 决定是否在画布上绘制工具提示 - 绑定 touchmove 和 mousemove 事件
    showTooltips: true,

    // 布尔值 - 决定是否绘制内置的工具提示或调用自定义工具提示函数
    customTooltips: false,

    // 字符串 - 多个工具提示的模板字符串
    multiTooltipTemplate: "<%= value %>",

    // 字符串 - 图例颜色块后的背景颜色
    multiTooltipKeyBackground: "#fff",

    // 函数 - 动画进行时触发
    onAnimationProgress: function () {},

    // 函数 - 动画完成时触发
    onAnimationComplete: function () {},
    },
  };
  constructor(context: CanvasRenderingContext2D,options?:ChartGlobalOptions) {
    this.canvas = context.canvas;
    this.default.global={
      ...this.default.global,
      ...options
    }
    this.ctx = context;
    console.log(context)
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
  bar(data:any){
    return new Bar(data,this.default.global,this)
  }
  kLine(data:any){
    return new Candlestick(data,this)
  }
  pie(data:any,options:any){
    return new Pie(data,options,this)
  }
}

export default GCharts