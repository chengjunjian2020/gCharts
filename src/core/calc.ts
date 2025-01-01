import GCharts from "..";
import { BaseData } from "../type";
import { BaseChartOpts } from "../type/config";
import { CapValue } from "./animation";

//计算实际绘图高度
export function calculateDrawingHeight(
  data: any,
  global: GCharts,
  config: BaseChartOpts
) {
  const { height, width, ctx } = global;
  let maxSize = height;
  ctx.font =
    config.scaleFontStyle +
    " " +
    config.scaleFontSize +
    "px " +
    config.scaleFontFamily;
  let widestXLabel = 1;
  let rotateLabels = 0;
  for (let i = 0; i < data.labels.length; i++) {
    let textLength = ctx.measureText(data.labels[i]).width;
    //取最大值
    widestXLabel = textLength > widestXLabel ? textLength : widestXLabel;
  }

  if (width / data.labels.length < widestXLabel) {
    rotateLabels = 45;
    if (width / data.labels.length < Math.cos(rotateLabels) * widestXLabel) {
      rotateLabels = 90;
      maxSize -= widestXLabel;
    } else {
      maxSize -= Math.sin(rotateLabels) * widestXLabel;
    }
  } else {
    maxSize -= config.scaleFontSize*2;
  }

  //跟底部添加一点边距
  maxSize -= 5;

  const labelHeight = config.scaleFontSize;
  const scaleHeight = maxSize;
  return {
    labelHeight, // 字体高度
    widestXLabel, // 最大字体宽度
    rotateLabels, //文字旋转度数
    scaleHeight, // 绘制区域高度
  };
}
//求出最大值最小值和对应步数
export function getValueBounds(
  data: BaseData,
  scaleHeight: number,
  labelHeight: number
) {
  let upperValue = Number.MIN_VALUE;
  let lowerValue = Number.MAX_VALUE;
  for (let i = 0; i < data.datasets.length; i++) {
    for (let j = 0; j < data.datasets[i].data.length; j++) {
      if (data.datasets[i].data[j] > upperValue) {
        upperValue = data.datasets[i].data[j];
      }
      if (data.datasets[i].data[j] < lowerValue) {
        lowerValue = data.datasets[i].data[j];
      }
    }
  }
  //控制 Y 轴上刻度的数量 不同场景下使用不同的刻度步数不至于特别密集和松散
  let maxSteps = Math.floor(scaleHeight / (labelHeight * 0.66));
  let minSteps = Math.floor((scaleHeight / labelHeight) * 0.5);

  return {
    maxValue: upperValue,
    minValue: lowerValue,
    maxSteps: maxSteps,
    minSteps: minSteps,
  };
}
function calculateOrderOfMagnitude(val: number) {
  return Math.floor(Math.log(val) / Math.LN10);
}
export interface calcYScale{
    steps: number,
    stepValue: number,
    graphMin: number,
    labels: string[]
}
export function calculateScale(
  maxSteps: number,
  minSteps: number,
  maxValue: number,
  minValue: number,
  labelTemplateString: string
) {
  const valueRange = maxValue - minValue;
  // 求出数量级 生成整齐易于理解的刻度范围
  const rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange);
  // 根据数量级求出y轴刻度真实的最大值与最小值
  const graphMin =
    Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) *
    Math.pow(10, rangeOrderOfMagnitude);
  const graphMax =
    Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) *
    Math.pow(10, rangeOrderOfMagnitude);
  const graphRange = graphMax - graphMin;
  let stepValue = Math.pow(10, rangeOrderOfMagnitude);
  let numberOfSteps = Math.round(graphRange / stepValue);
  // 根据最大值与最小值调整步长与数量
  while (numberOfSteps < minSteps || numberOfSteps > maxSteps) {
    if (numberOfSteps < minSteps) {
      stepValue /= 2;
      numberOfSteps = Math.round(graphRange / stepValue);
    } else {
      stepValue *= 2;
      numberOfSteps = Math.round(graphRange / stepValue);
    }
  }
  const labels: string[] = [];
  populateLabels(
    labelTemplateString,
    labels,
    numberOfSteps,
    graphMin,
    stepValue
  );
  return {
    steps: numberOfSteps, // 刻度数量
    stepValue: stepValue, // 步长 增量数据
    graphMin, // 最小值
    graphMax,
    labels, // 刻度标签
  };
}
export function populateLabels(
  labelTemplateString: string,
  labels: string[],
  numberOfSteps: number,
  graphMin: number,
  stepValue: number
) {
  if (labelTemplateString) {
    //Fix floating point errors by setting to fixed the on the same decimal as the stepValue.
    for (let i = 1; i < numberOfSteps + 1; i++) {
      labels.push(
        tmpl(labelTemplateString, {
          value: Math.floor(Number((graphMin + stepValue * i).toFixed(
            getDecimalPlaces(stepValue)))
          ),
        })
      );
    }
  }
}

function getDecimalPlaces(num: number) {
  if (num % 1 != 0) {
    return num.toString().split(".")[1].length;
  } else {
    return 0;
  }
}
function tmpl(
  str: string,
  data: any,
  cache: { [key in string]: string } = {} // 缓存
): any {
  // 判断 str 是模板字符串还是模板元素的
  let fn = !/\W/.test(str)
    ? (cache[str] =
        cache[str] ||
        tmpl((document.getElementById(str) as HTMLElement).innerHTML, cache))
    : // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function(
        "obj",
        "let p=[],print=function(){p.push.apply(p,arguments);};" +
          // Introduce the data as local letiables using with(){}
          "with(obj){p.push('" +
          // Convert the template into pure JavaScript
          str
            .replace(/[\r\t\n]/g, " ")
            .split("<%")
            .join("\t")
            .replace(/((^|%>)[^\t]*)'/g, "$1\r")
            .replace(/\t=(.*?)%>/g, "',$1,'")
            .split("\t")
            .join("');")
            .split("%>")
            .join("p.push('")
            .split("\r")
            .join("\\'") +
          "');}return p.join('');"
      );

  // Provide some basic currying to the user
  return data ? fn(data) : fn;
}
/**
 * 线性转换公式 数据值转换为像素值 总数*数据值比例
 * @param val 数值
 * @param calculatedScale 
 * @param scaleHop 每个刻度的高度
 * @returns 
 */
export function calculateOffset(val:number,calculatedScale:calcYScale,scaleHop:number){
    const outerValue = calculatedScale.steps * calculatedScale.stepValue;
    const adjustedValue = val - calculatedScale.graphMin;
    const scalingFactor = CapValue(adjustedValue/outerValue,1,0) as number;
    return (scaleHop*calculatedScale.steps) * scalingFactor;
}
/**
 * @returns valueHop  //刻度间隔
 * @returns yAxisPosX  // Y 轴在水平方向的位置
 *  @returns xAxisPosY  //  X 轴在垂直方向的位置
 * @returns barWidth  // 柱子宽度
 * @returns widestXLabel 最宽的文字
 * @returns xAxisLength X轴长度
 */
export const calculateXAxisSize = (
  labels: string[],
  {
    widestXLabel,
    data,
    scaleHeight,
  }: { widestXLabel: number; data: BaseData; scaleHeight: number },
  options: {
    scaleShowLabels: boolean;
    scaleFontStyle: string;
    scaleFontSize: number;
    scaleFontFamily: string;
    scaleGridLineWidth: number;
    barValueSpacing: number;
    barDatasetSpacing: number;
    barStrokeWidth: number;
  },
  chart:GCharts
)=> {
  const { ctx, width } = chart;
  const config = options;
  let longestText = 1;
  if (options.scaleShowLabels) {
    ctx.font =
      config.scaleFontStyle +
      " " +
      config.scaleFontSize +
      "px " +
      config.scaleFontFamily;
    for (var i = 0; i < labels.length; i++) {
      const measuredText = ctx.measureText(labels[i]).width;
      longestText = measuredText > longestText ? measuredText : longestText;
    }
    longestText += 10;
  }
  const xAxisLength = width - longestText - widestXLabel;
  // 求出每一个刻度的宽度
  const valueHop = Math.floor(xAxisLength / (data.labels.length));
  const barWidth =
    (valueHop -
      config.scaleGridLineWidth * 2 -
      config.barValueSpacing * 2 -
      (config.barDatasetSpacing * data.datasets.length - 1) -
      ((config.barStrokeWidth / 2) * data.datasets.length - 1)) /
    data.datasets.length;
  const yAxisPosX = width - widestXLabel / 2 - xAxisLength;
  const xAxisPosY = scaleHeight + config.scaleFontSize / 2;
  return {
    valueHop, //刻度间隔
    yAxisPosX, // Y 轴在水平方向的位置
    xAxisPosY, //  X 轴在垂直方向的位置
    barWidth, // 柱子宽度
    widestXLabel,
    xAxisLength,
  };
}