import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import { Context } from './Stage';
import { useBindEvent, usePropertyChange } from './_hooks';
import { Trapezoid as _Trapezoid } from './render';
import { AnimationConfig } from './type';

const defaultProps: _Trapezoid['data'] = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  shortLength: 80,
  fillStyle: 'black',
};

export const Trapezoid = forwardRef<
  _Trapezoid,
  _Trapezoid['data'] & AnimationConfig
>((props, ref) => {
  const mergeProps = { ...defaultProps, ...props };

  const TrapezoidRef = useRef(new _Trapezoid(mergeProps));

  useImperativeHandle(ref, () => TrapezoidRef.current);

  usePropertyChange(mergeProps, 'width', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'height', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'shortLength', TrapezoidRef.current);

  usePropertyChange(mergeProps, 'name', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'x', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'y', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'shadowColor', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'shadowBlur', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'shadowOffsetX', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'shadowOffsetY', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'lineWidth', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'opacity', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'zIndex', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'fillStyle', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'strokeStyle', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'lineCap', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'lineJoin', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'lineDash', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'draggable', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'cursor', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'pointerEvents', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'transform', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'onclick', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'onmouseenter', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'onmousemove', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'onmouseleave', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'onmousedown', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'onmouseup', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'ondragstart', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'ondrag', TrapezoidRef.current);
  usePropertyChange(mergeProps, 'ondragend', TrapezoidRef.current);

  useBindEvent(mergeProps, TrapezoidRef.current);

  const parent = useContext(Context);

  useLayoutEffect(() => {
    parent.append(TrapezoidRef.current);

    return () => {
      TrapezoidRef.current.remove();
    };
  }, []);

  return null;
});
