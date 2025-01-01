import { AxisPointer } from "./axisPointerType";
import { BaseChartOpts } from "./config";

export interface BarChartOptions extends BaseChartOpts{
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
    // 指示器
    axisPointer:AxisPointer
  }