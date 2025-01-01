<template>
  <div
    class="map-container"
    ref="mapRef"
    :style="{ width: props.width, height: props.height }"
  ></div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const props = defineProps({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});
const oldTiles=reactive<Array<number>>([]);
const mapRef = ref<HTMLElement>();
</script>

<style scoped>
.map-container{
    position: relative;
    display: inline-block;
    overflow: hidden;
    background: #dddddd'
}
</style>
