import { Easing, easingFuncs, calcTargetValue, interpolateColor } from './utils'

export type AnimateCartoonConfig = {
  duration?: number // 毫秒
  delay?: number
  during?: (percent: number, newState: Record<string, string | number>) => void
  done?: Function
  aborted?: Function
  scope?: string
  force?: boolean
  additive?: boolean
  setToFinal?: boolean
  easing?: Easing
  iterationCount?: number // Infinity
}
export * from './utils'

const defaultCfg: AnimateCartoonConfig = { duration: 1000, easing: 'linear', iterationCount: 1 }
export class Animator {
  constructor(startProp = {}, targetProp = {}, cfg: AnimateCartoonConfig = {}) {
    this.startProp = startProp
    this.targetProp = targetProp

    this.cfg = { ...defaultCfg, ...cfg }
  }

  cfg: AnimateCartoonConfig

  startProp
  targetProp

  rafTimer: number

  startTime: number

  forward = true // 正向动画

  start() {
    const { duration, easing, during, iterationCount } = this.cfg
    const keys = Object.keys(this.targetProp)

    const rafCb = (timestamp: number) => {
      if (!this.startTime) {
        this.startTime = timestamp
      }

      let elapsedTimeRatio = easingFuncs[easing](Math.min((timestamp - this.startTime) / duration, 1))

      if (this.forward === false) {
        elapsedTimeRatio = 1 - elapsedTimeRatio
      }

      const currentProp = {}
      keys.forEach(propKey => {
        const startValue = this.startProp[propKey]
        const endValue = this.targetProp[propKey]

        // 如果是颜色
        if (typeof startValue === 'string' && typeof endValue === 'string') {
          const color = interpolateColor(startValue, endValue, elapsedTimeRatio)
          currentProp[propKey] = color

          return
        }

        const targetValue = calcTargetValue(this.startProp[propKey], this.targetProp[propKey], elapsedTimeRatio)
        currentProp[propKey] = targetValue
      })

      this.onUpdate(currentProp, elapsedTimeRatio)

      if (during) {
        during(elapsedTimeRatio, currentProp)
      }

      const nextCondition = this.forward ? elapsedTimeRatio < 1 : 0 < elapsedTimeRatio
      if (nextCondition) {
        this.rafTimer = requestAnimationFrame(rafCb)
      }

      const endCondition = this.forward ? elapsedTimeRatio === 1 : elapsedTimeRatio === 0

      if (endCondition) {
        if (iterationCount === Infinity) {
          this.forward = !this.forward
          this.startTime = undefined
          this.start()
        } else {
          this.onDone()
        }
      }
    }

    requestAnimationFrame(rafCb)
  }

  onUpdate(currentProp, elapsedTimeRatio: number) {}

  onDone() {}

  stop() {
    cancelAnimationFrame(this.rafTimer)
  }
}

export * from './AnimatorSingle'
