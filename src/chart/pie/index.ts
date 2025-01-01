import GCharts from "../..";
import GraphicAnimation from "../../core/animation";
import { BaseChart } from "../baseChart";

export interface PieProps {
  //Boolean - 在每个扇形上显示边框（线条)
  segmentShowStroke: boolean;

  //每个扇形的边框颜色。
  segmentStrokeColor: string;

  //每个扇形边框的宽度。
  segmentStrokeWidth: number;

  animation: boolean;

  //动画的步骤数量（动画进行的帧数）
  animationSteps: number;

  animationEasing: string;

  //Boolean - 启用饼图旋转动画
  animateRotate: boolean;

  //Boolean - 启用饼图从中心缩放的动画
  animateScale: boolean;

  //Function - 动画完成后的回调函数。
  onAnimationComplete?: () => void;
}
interface DataProps {
  value: number;
  color: string;
}
export class Pie extends BaseChart {
  _options = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    animation: true,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
  };
  pieAttr: { radius: number; segmentTotal: number; data: Array<DataProps> } = {
    radius: 0,
    segmentTotal: 0,
    data: [],
  };
  animation?: GraphicAnimation;
  constructor(data: Array<DataProps>, options: PieProps, chart: GCharts) {
    super(chart);
    this._options = {
      ...this._options,
      ...options,
    };
    this.injectContext(this);
    this.calcPie(data);
  }
  setOption(data: Array<DataProps>, options: PieProps) {
    this._options = {
      ...this._options,
      ...options,
    };
    this.calcPie(data);
  }
  calcPie(data: Array<DataProps>) {
    const { width, height } = this._chart;
    const radius = Math.min(width / 2, height / 2) - 5;
    const segmentTotal = data.reduce((prev, cur) => prev + cur.value, 0);
    this.pieAttr = {
      radius,
      segmentTotal,
      data,
    };
    this.animation = new GraphicAnimation(this._chart, {
      config: this._options,
      drawData: this.drawPie,
      drawScale: () => {},
    });
  }
  drawPie = (percent: number)=> {
    const { _options, pieAttr } = this;
    const { ctx, width, height } = this._chart;
    let cumulativeAngle =0 //角度
    let scaleAnimation = 1;
    let rotateAnimation = 1;
    if (_options.animation) {
      if (_options.animateScale) {
        scaleAnimation = percent;
      }
      if (_options.animateRotate){
        rotateAnimation = percent;
      }
    }
    for (var i=0; i<pieAttr.data.length; i++){
      const item = pieAttr.data[i];
      var segmentAngle = rotateAnimation * ((item.value/pieAttr.segmentTotal) * (Math.PI*2));
      ctx.beginPath();
      ctx.arc(width/2,height/2,scaleAnimation * pieAttr.radius,cumulativeAngle,cumulativeAngle + segmentAngle);
      ctx.lineTo(width/2,height/2);
      ctx.fillStyle = item.color;
      ctx.fill();
      ctx.closePath();
      
      if(_options.segmentShowStroke){
        ctx.lineWidth = _options.segmentStrokeWidth;
        ctx.strokeStyle = _options.segmentStrokeColor;
        ctx.stroke();
      }
      cumulativeAngle += segmentAngle;
    }			
  }
}
