import { AxisPointer } from "./axisPointerType";
import { BaseChartOpts } from "./config";

export interface CandlestickType {
    labels:string[]
    data: Array<[number, number, number, number]> // open close high low 开盘价 收盘价 最高价 最低价
    //条形之间的间距
    barValueSpacing?: number;
    strokeColor?: string; //#d60a22 #037b66
    riseColor?: string;
    depreciateColor?: string;
    axisPointer: AxisPointer
  }
  export type CandlestickOptions = CandlestickType & BaseChartOpts