import { Stage } from '..'
import { EventParameter, EventType, OnEventType, dpr, supportBubblesEventType } from '../constant'
import { IShape } from '../type'
import { isStage } from '../utils'

export function setCanvasStyle(canvasElement, containerWidth, containerHeight) {
  const canvasWidth = containerWidth * dpr
  const canvasHeight = containerHeight * dpr

  canvasElement.width = canvasWidth
  canvasElement.height = canvasHeight
  canvasElement.style.width = '100%'
  canvasElement.style.height = '100%'
}

function createCanvas(containerWidth: number, containerHeight: number) {
  const canvasElement = document.createElement('canvas')

  const ctx = updateCanvas(canvasElement, containerWidth, containerHeight)

  return { canvasElement, ctx }
}

export function updateCanvas(canvasElement, containerWidth, containerHeight) {
  setCanvasStyle(canvasElement, containerWidth, containerHeight)

  const ctx = canvasElement.getContext('2d')

  ctx.scale(dpr, dpr)
  ctx.textBaseline = 'top'
  ctx.font = `${14}px 微软雅黑`

  return ctx
}

export function initStage(canvasContainer: HTMLElement) {
  const { offsetWidth, offsetHeight } = canvasContainer
  const { canvasElement, ctx } = createCanvas(offsetWidth, offsetHeight)

  canvasContainer.append(canvasElement)

  return { canvasElement, ctx }
}

export function triggerEventHandlers(
  elementItem: IShape | Stage,
  eventName: OnEventType,
  eventParameter: EventParameter
) {
  elementItem[eventName](eventParameter)
  const eventType = eventName.slice(2) as EventType

  const handlers = elementItem.eventTypeHandlerMap.get(eventType)
  if (Array.isArray(handlers)) {
    handlers.forEach(handlerItem => {
      handlerItem(eventParameter)
    })
  }

  const parent = elementItem.parent
  if (parent && !isStage(parent)) {
    if (supportBubblesEventType.includes(eventType)) {
      const _parent = parent as unknown as IShape

      triggerEventHandlers(_parent, eventName, eventParameter)
    }
  }
}

export const findToRoot = (elementItem: IShape) => {
  const stack = [elementItem]
  let parent = elementItem.parent
  while (parent && !isStage(parent)) {
    stack.unshift(parent)
    parent = parent.parent
  }

  return stack
}
