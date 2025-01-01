# k 线图

是一种以蜡烛状图形展示数据的图表类型。用于显示金融市场中股票、外汇、加密货币等资产的价格变动

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import GCharts from "../src/index.ts";
import {getRandomHexColor} from "../src/utils/color.ts"
import {getRandomInt} from "../src/utils/number.ts"

const domRef = ref();
let kLine;
let dataRangeFlag=true;
onMounted(() => {
  const gcharts = new GCharts(domRef.value?.getContext("2d") as CanvasRenderingContext2D);
 
  fetch("./data.json")
    .then((res) => res.json())
    .then((data:any[]) => {
        dataRangeFlag=!dataRangeFlag;
      kLine = gcharts.kLine({
        labels:data.slice(0,10).map(item=>item.time),
        data: data.slice(0,10).map(item=>[item.open,item.close,item.high,item.low]),
      });
    });
  
});

const changeData = ()=>{
     fetch("./data.json")
    .then((res) => res.json())
    .then((data:any[]) => {
      kLine.setOption({
        labels:data.slice(dataRangeFlag?0:10,dataRangeFlag?10:20).map(item=>item.time),
        data: data.slice(dataRangeFlag?0:10,dataRangeFlag?10:20).map(item=>[item.open,item.close,item.high,item.low]),
      })
      dataRangeFlag=!dataRangeFlag
    });
  }
  const changeStyle = ()=>{
    fetch("./data.json")
    .then((res) => res.json())
    .then((data:any[]) => {
    kLine.setOption({
         labels:data.slice(dataRangeFlag?0:10,dataRangeFlag?10:20).map(item=>item.time),
        data: data.slice(dataRangeFlag?0:10,dataRangeFlag?10:20).map(item=>[item.open,item.close,item.high,item.low]),
        riseColor:getRandomHexColor(),
        depreciateColor:getRandomHexColor()
    })
    })
  }
</script>

<canvas class="container" ref="domRef" width="800" height="500"></canvas>

<div>
  <div @click="changeData" style="display:inline-block;margin: 10px 0px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;">更改数据</div>
  <div style="display:inline-block;margin: 10px 0px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;margin-left:10px" @click="changeStyle">更改样式</div>
</div>

示例用法

```typescript
const gcharts = new GCharts(
  domRef.value?.getContext("2d") as CanvasRenderingContext2D
);
gcharts.kLine(barChartData, options);
```

数据结构

```typescript
{
    "labels": [
        "2017-01-03",
    ],
    [最大值,最小值,最高值,最低值]
    "data": [
        [
            "166.300",
            "179.300",
            "180.660",
            "160.820"
        ],
    ]
}
```

配置项

```typescript
{
    //x轴数据
    labels:string[]
    //条形之间的间距
    barValueSpacing?: number;
    //涨价颜色
    riseColor?: string;
    //跌价颜色
    depreciateColor?: string;
    //坐标轴指示器
    axisPointer: AxisPointer
  }
  {
    show:boolean;
    color:string;
    fontSize:number;
    background:string;
    lineStyle:string
  }
```
