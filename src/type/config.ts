export interface BarChartOptions {
  /**
   * 是否覆盖默认刻度
   */
  scaleOverlay: boolean;

  /**
   * 是否覆盖默认的刻度配置
   */
  scaleOverride: boolean;

  /**
   * 刻度步骤数，如果 scaleOverride 为 true，则需要指定
   */
  scaleSteps: number | null;

  /**
   * 每个刻度的宽度，如果 scaleOverride 为 true，则需要指定
   */
  scaleStepWidth: number | null;

  /**
   * 刻度的起始值，如果 scaleOverride 为 true，则需要指定
   */
  scaleStartValue: number | null;

  /**
   * 刻度线的颜色
   */
  scaleLineColor: string;

  /**
   * 刻度线的宽度
   */
  scaleLineWidth: number;

  /**
   * 是否显示刻度标签
   */
  scaleShowLabels: boolean;

  /**
   * 刻度标签的模板
   */
  scaleLabel: string;

  /**
   * 刻度字体的字体族
   */
  scaleFontFamily: string;

  /**
   * 刻度字体的大小
   */
  scaleFontSize: number;

  /**
   * 刻度字体的样式
   */
  scaleFontStyle: string;

  /**
   * 刻度字体的颜色
   */
  scaleFontColor: string;

  /**
   * 是否显示网格线
   */
  scaleShowGridLines: boolean;

  /**
   * 网格线的颜色
   */
  scaleGridLineColor: string;

  /**
   * 网格线的宽度
   */
  scaleGridLineWidth: number;

  /**
   * 是否显示条形的描边
   */
  barShowStroke: boolean;

  /**
   * 条形描边的宽度
   */
  barStrokeWidth: number;

  /**
   * 条形之间的间距
   */
  barValueSpacing: number;

  /**
   * 不同数据集之间的间距
   */
  barDatasetSpacing: number;
  /**
   * 是否启用动画
   */
  animation: boolean;

  /**
   * 动画的步骤数
   */
  animationSteps: number;

  /**
   * 动画的缓动效果
   */
  animationEasing: string;

  /**
   * 动画完成后的回调函数
   */
  onAnimationComplete: (() => void) ;
  
  axisPointer:{
    show:boolean;
    lineStyle:{
      color:string;
      width:number;
    }
  }
}