---
nav: 
  title: 组件
  order: 2
group:
  title: 图表组件
  order: 1

toc: content
order: 1
---

# 折线图

```tsx
/**
 * defaultShowCode: true
 */
import { LineChart } from 'g-charts'

const App = () => {
  const 折线图 = {
    xAxis: {
      data: ['a', 'b', 'c', 'd', 'e', 'f']
    },
    series: [
      {
        data: [620, 932, 901, 934, 800, 1001]
      }
    ]
  }

  return (
    <LineChart option={折线图} containerStyle={{ border: '1px solid #eee' }} />
  )
}

export default App;
```

LineChart 支持的属性如下

| name           | description   | type     | default |
| :------------- | :------------ | :------- | :------ |
| option         | 配置项        | `Option` |         |
| width          | 容器宽度      | `number` |         |
| height         | 容器高度      | `number` |         |
| containerStyle | 其他 css 属性 |          |         |

## Option

| name              | description  | type       | default |
| ----------------- | ------------ | ---------- | ------- |
| xAxis             | x 轴配置     | `xAxis`    |         |
| series            | 图表配置     | `Series[]` |         |
| animationDuration | 动画持续时间 | `number`   | `1000`  |
| animation         | 是否开启动画 | `boolean`  | `true`  |
| legend            | 图例         | `legend`   |         |

## Series

| name       | description      | type                          | default    |
| ---------- | ---------------- | ----------------------------- | ---------- |
| data       | 图表数据         | `number[]`                    |            |
| smooth     | 是否使用平滑曲线 | `boolean`                     | `false`    |
| step       | 阶梯配置         | `"start" \|"middle" \| "end"` |            |
| symbol     | 指示点           | `"circle"\|"none"`            | `"circle"` |
| symbolSize | 指示点尺寸       | `number`                      | `3`        |
| stack      | 堆叠             | `string`                      |            |
| areaStyle  | 面积图配置       | `areaStyle`                   |            |
| lineStyle  | 线的配置         | `lineStyle`                   |            |

## lineStyle

| name  | description | type             | default    |
| ----- | ----------- | ---------------- | ---------- |
| width | 宽度        | `number`         | `2`        |
| join  |             | `CanvasLineJoin` | `'butt'`   |
| cap   |             | `CanvasLineCap`  | `'bevel' ` |

## areaStyle

| name    | description  | type     | default |
| ------- | ------------ | -------- | ------- |
| opacity | 面积图透明度 | `number` | `1`     |
| color   | 渐变配置     | `string` |         |

## xAxis

| name        | description        | type       | default |
| :---------- | :----------------- | :--------- | :------ |
| data        | x 轴刻度文字       | `string[]` |         |
| boundaryGap | x 轴两侧否有内间距 | ` boolean` | `true`  |

## legend

| name   | description | type                              | default      |
| ------ | ----------- | --------------------------------- | ------------ |
| orient |             | `'vertical'` \| `'horizontal'`    | `horizontal` |
| left   |             | `'left'` \|`'center'`\| `'right'` | `'center'`   |
