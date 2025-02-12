---
nav:
  title: 博客
  order: 4

toc: content
---

# 同时执行上万个动画不掉帧

在我们的项目内部，使用了面向对象的方式

例如: 创建一个矩形的方式是`const rect = new Rect({ x: 0, y: 0, width: 100, height: 100 })`

修改属性：`rect.attr('width', 200)`, 之后`attr`方法内部，会清除画布，绘制最新状态

## 上百个矩形动画

那么如果多个矩形同时执行动画，流程如下

1. rect_1.attr('width', 200) -> 清除画布_绘制最新状态
2. rect_2.attr('width', 200) -> 清除画布_绘制最新状态
3. rect_3.attr('width', 200) -> 清除画布_绘制最新状态
4. rect_4.attr('width', 200) -> 清除画布_绘制最新状态
5. rect_5.attr('width', 200) -> 清除画布_绘制最新状态
6. ...更多矩形

每一个矩形的宽度变化，都重新绘制一下，似乎非常合理

然而现实是，在浏览器的事件循环机制 与 UI 视图的更新机制下，只有最后一次 的 '清除画布_绘制最新状态' 是有效操作，之前的都是无意义的执行，大幅占用 js 主线程时间，随着矩形数量变多，性能问题会更加明显。

那是不是可以，让前面的矩形 执行 `attr`方法 仅仅修改内存中的矩形宽度数据，只有当最后一个矩形执行完 `attr`方法后，才进行绘制呢？

## 五千个矩形动画

希望的执行过程应该是这样的

1. rect_1.attr('width', 200) -> ~~清除画布_绘制最新状态~~
2. rect_2.attr('width', 200) -> ~~清除画布_绘制最新状态~~
3. rect_3.attr('width', 200) -> ~~清除画布_绘制最新状态~~
4. rect_4.attr('width', 200) -> ~~清除画布_绘制最新状态~~
5. rect_5.attr('width', 200) -> ~~清除画布_绘制最新状态~~
6. ...
7. rect_5.attr('width', 200) -> 清除画布_绘制最新状态

但是，内部如何知道是最后一个矩形修改完毕呢，这要借助事件循环机制，让'绘制'成为一个异步操作。

首先定义一个变量标识 `isAsyncRenderTack`，代表是否派发了渲染任务，初始值为 `false`

在第一次调用 `rect_1.attr('width', 200)` 方法时，将 `isAsyncRenderTack` 改为 `true`，并使用 `requestAnimationFrame`派发一个异步的渲染任务

```javascript
let isAsyncRenderTack = false

function attr(property], value) {
  this[property] = value

  if (isAsyncRenderTack) {
    return
  }

  isAsyncRenderTack = true

  requestAnimationFrame(() => {
    清除画布_绘制最新状态()

    isAsyncRenderTack = false
  })
}
```

这样当所有 attr 执行完毕后，函数调用栈为空，接下来开始执行异步的绘制任务，大量减少 js 的执行时间。

基于此 **批量更新**原理，可以做到同时执行 **5000** 个矩形执行动画不掉帧

## 一万五千个矩形动画

每一个矩形在动的时候，都需要计算出每一帧的状态的怎样的（宽度，高度 等），需要通过`requestAnimationFrame`派发一个异步任务来计算，如果有一万个矩形，那么在每一帧就需要有派发一万个异步任务，也就是说，在一帧的时间内有一万个函数需要执行，去计算出每个矩形的当前帧的状态，这一万个函数的执行需要消耗一定的时间，一旦超过 16.7 毫秒（假设屏幕刷新率是 60hz），就会导致渲染延后，出现掉帧的现象。

在我们的案例里面，所有的矩形的动画函数 和 动画持续时间是一样的，因此，我们在每一帧只需要派发一个异步任务即可

```javascript
const rects = [] // 一万五千个矩形
const startState = rects.map(item => ({ ...item }))
const dis = 50 // 矩形的宽和高增加量是 50

const animator = new Animator({ duration: 1000 })
animator.start()

animator.onUpdate = (elapsedRatio) => {
  for (let index = 0; index < rects.length; index++) {
    const item = rects[index]
    const itemStartState = startState[index]

    const curWidth = itemStartState.width + dis * elapsedRatio
    const curHeight = itemStartState.height + dis * elapsedRatio

    item.attr({ width: curWidth, height: curHeight })
  }
}
```

同时也基于 **批量更新**原理 可以达到一万五千个矩形动画的流畅体验

## 未来

未来将引入并发模式，达到支持到 2 万个以上的流畅体验
