import { CSSProperties } from 'openinula'
import { Circle as _Circle, Easing } from './render'

export interface AnimationConfig {
  animation?: { duration?: number; easing?: Easing; animationEnd?: () => void }
}

export interface Children {
  children?
}

export interface ChartProps {
  option
  width?: number | string
  height?: number
  containerStyle?: CSSProperties
}
