# 饼图
饼图根据数据被分成多个部分，每个部分的弧线代表每项数据的比例值。
适合展示数据之间的关系比例

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import GCharts from '../src/index.ts';
const domRef = ref<HTMLCanvasElement>()

onMounted(()=>{
  const gcharts = new GCharts(domRef.value?.getContext("2d") as CanvasRenderingContext2D);
gcharts.pie([
	{
		value: 30,
		color:"#F38630"
	},
	{
		value : 50,
		color : "#E0E4CC"
	},
	{
		value : 100,
		color : "#69D2E7"
	}			
],{})
})
</script>

<canvas class="container" ref="domRef" width="800" height="500"></canvas>
示例用法

```typescript
const gcharts = new GCharts(
  domRef.value?.getContext("2d") as CanvasRenderingContext2D
);
gcharts.pie(data);
```
配置项
```typescript
{
    segmentShowStroke: boolean, 启用或禁用图表分段的边框
    segmentStrokeColor: string, 设置分段边框的颜色
    segmentStrokeWidth: 2, 设置每个分段边框的宽度
    animation: boolean,
    animationSteps: number, 动画步长
    animationEasing: string,
    animateRotate: boolean,设置是否对图表的旋转部分启用动画
    animateScale: boolean,是否对图表的缩放部分启用动画
  }
```