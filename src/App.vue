<template>
  <canvas class="container" ref="domRef" width="800" height="500"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import GCharts from '.';
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
<style scoped>
</style>
