import React, { CSSProperties, useRef, useLayoutEffect, createContext, useState, useEffect } from 'openinula'
import { Group as _Group, Rect as _Rect, Stage as _Stage } from './render'
import { useResizeObserver } from './_hooks'

interface StageProps extends CSSProperties {
  children?
  width?: number | string
  height?: number
  border?: string
  background?: string
  margin?: string | number
}

const defaultProps: StageProps = {
  width: '100%',
  height: 400,
  background: '#fff',
  margin: '0 auto'
}

export const Context = createContext<_Stage | _Group>(null)

export const Stage = (props: StageProps) => {
  const mergeProps = { ...defaultProps, ...props }

  const containerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<_Stage>(new _Stage())

  useLayoutEffect(() => {
    stageRef.current.mount({ container: containerRef.current as HTMLDivElement }, true)
  }, [])

  useResizeObserver(containerRef, () => stageRef.current.refreshDraw())

  return (
    <Context.Provider value={stageRef.current}>
      <div ref={containerRef} style={mergeProps}></div>

      {props.children}
    </Context.Provider>
  )
}
