<!-- 

最高价（最大值）：指这根K线所代表的时间段内的股票价格达到的最高点，对应K线上方的影线顶端。
最低价（最小值）：指这根K线所代表的时间段内的股票价格达到的最低点，对应K线下方的影线底端。
开盘价和收盘价的位置：
开盘价：这根K线时间段内的第一笔交易价格。
收盘价：这根K线时间段内的最后一笔交易价格。
区别阳线和阴线：
阳线（股价上涨）：收盘价 > 开盘价。
开盘价是矩形的下边（实体部分的底部）。
收盘价是矩形的上边（实体部分的顶部）。
阴线（股价下跌）：收盘价 < 开盘价。
开盘价是矩形的上边（实体部分的顶部）。
收盘价是矩形的下边（实体部分的底部）。
实体和影线的关系：
最高价可能高于收盘价或开盘价，因此它在影线顶端。
最低价可能低于收盘价或开盘价，因此它在影线底端。
正确理解的规则：
收盘价绝不可能大于最高价，开盘价绝不可能小于最低价。
如果没有上下影线（即最高价 = 开盘价或收盘价，最低价 = 开盘价或收盘价），则K线看起来像一个完整的矩形。
关键点小结：
柱子（实体部分）代表开盘价和收盘价之间的区间。
影线（细线部分）表示最高价和最低价超出开盘价和收盘价的范围。 -->
<template>
  <div style="width: 700px; height: 700px">
    <canvas class="container" ref="domRef" width="600" height="450"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import GCharts from "./index";
const domRef = ref<HTMLCanvasElement>();

onMounted(() => {
  const gcharts = new GCharts(domRef.value?.getContext("2d"));
  var barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        fillColor: "#f5804d",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
      	fillColor : "#09bcb7",
      	data : [28,48,40,19,96,27,100]
      },
      
    ],
  };
  gcharts.render(barChartData);
});
</script>
<style scoped>
.container {
  border: 1px solid red;
}
</style>
