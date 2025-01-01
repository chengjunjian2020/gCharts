# 条形图

条形图是一种以条形显示数据的方式。
用于显示趋势数据，以及并排比较多个数据集。

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import GCharts from "../src/index.ts";
import {getRandomHexColor} from "../src/utils/color.ts"
import {getRandomInt} from "../src/utils/number.ts"

const domRef = ref();
let bar;
onMounted(() => {
  const gcharts = new GCharts(domRef.value?.getContext("2d") as CanvasRenderingContext2D);
  const barChartData = {
    labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
    datasets: [
      {
        fillColor: "#f5804d",
        data: [65, 59, 90, 81, 56, 55, 140],
      },
      {
      	fillColor : "#09bcb7",
      	data : [28,48,40,19,96,27,100]
      },
      
    ],
  };
  bar = gcharts.bar(barChartData);
  
});
const changeAxis = ()=>{
  const barChartData = {
    labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
    datasets: [
      {
        fillColor: "#f5804d",
        data: [65, 59, 90, 81, 56, 55, 140],
      },
    ],
  };
 bar.setOption(barChartData)
}
const changeTheme = ()=>{
    const barChartData = {
    labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
    datasets: [
      {
        fillColor: getRandomHexColor(),
        data: [getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200)],
      },
      {
      	fillColor : getRandomHexColor(),
      	data : [getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200),getRandomInt(30,200)]
      },
      
    ],
  };
  bar.setOption(barChartData)
  }
</script>

<canvas class="container" ref="domRef" width="800" height="500"></canvas>

<div>
  <div @click="changeTheme" style="display:inline-block;margin: 10px 0px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;">更改数据与样式</div>
  <div style="display:inline-block;margin: 10px 0px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;margin-left:10px" @click="changeAxis">减少轴</div>
</div>

示例用法

```typescript
const gcharts = new GCharts(
  domRef.value?.getContext("2d") as CanvasRenderingContext2D
);
gcharts.bar(barChartData, options);
```

数据结构

```typescript
const barChartData = {
  labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
  datasets: [
    {
      fillColor: "#f5804d", //柱条颜色
      data: [65, 59, 90, 81, 56, 55, 140],
    },
    {
      fillColor: "#09bcb7",
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
};
```

配置项

```typescript
{
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
  axisPointer: AxisPointer;
}
```
