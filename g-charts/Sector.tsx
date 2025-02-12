// 扇形

import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import { Circle as _Circle } from './render';

import { useBindEvent, usePropertyChange } from './_hooks';

import { Context } from './Stage';
import { AnimationConfig } from './type';

const defaultProps: _Circle['data'] = {
  x: 10,
  y: 10,
  radius: 8,
  fillStyle: 'black',
  startAngle: 30,
  endAngle: 90,
};

export const Sector = forwardRef<_Circle, _Circle['data'] & AnimationConfig>(
  (props, ref) => {
    const mergeProps = { ...defaultProps, ...props };

    const circleRef = useRef(new _Circle(mergeProps));

    useImperativeHandle(ref, () => circleRef.current);

    console.log(circleRef);

    usePropertyChange(mergeProps, 'radius', circleRef.current);
    usePropertyChange(mergeProps, 'startAngle', circleRef.current);
    usePropertyChange(mergeProps, 'endAngle', circleRef.current);

    usePropertyChange(mergeProps, 'name', circleRef.current);
    usePropertyChange(mergeProps, 'x', circleRef.current);
    usePropertyChange(mergeProps, 'y', circleRef.current);
    usePropertyChange(mergeProps, 'shadowColor', circleRef.current);
    usePropertyChange(mergeProps, 'shadowBlur', circleRef.current);
    usePropertyChange(mergeProps, 'shadowOffsetX', circleRef.current);
    usePropertyChange(mergeProps, 'shadowOffsetY', circleRef.current);
    usePropertyChange(mergeProps, 'lineWidth', circleRef.current);
    usePropertyChange(mergeProps, 'opacity', circleRef.current);
    usePropertyChange(mergeProps, 'zIndex', circleRef.current);
    usePropertyChange(mergeProps, 'fillStyle', circleRef.current);
    usePropertyChange(mergeProps, 'strokeStyle', circleRef.current);
    usePropertyChange(mergeProps, 'lineCap', circleRef.current);
    usePropertyChange(mergeProps, 'lineJoin', circleRef.current);
    usePropertyChange(mergeProps, 'lineDash', circleRef.current);
    usePropertyChange(mergeProps, 'draggable', circleRef.current);
    usePropertyChange(mergeProps, 'cursor', circleRef.current);
    usePropertyChange(mergeProps, 'pointerEvents', circleRef.current);
    usePropertyChange(mergeProps, 'transform', circleRef.current);
    usePropertyChange(mergeProps, 'onclick', circleRef.current);
    usePropertyChange(mergeProps, 'onmouseenter', circleRef.current);
    usePropertyChange(mergeProps, 'onmousemove', circleRef.current);
    usePropertyChange(mergeProps, 'onmouseleave', circleRef.current);
    usePropertyChange(mergeProps, 'onmousedown', circleRef.current);
    usePropertyChange(mergeProps, 'onmouseup', circleRef.current);
    usePropertyChange(mergeProps, 'ondragstart', circleRef.current);
    usePropertyChange(mergeProps, 'ondrag', circleRef.current);
    usePropertyChange(mergeProps, 'ondragend', circleRef.current);

    useBindEvent(props, circleRef.current);

    const parent = useContext(Context);

    useLayoutEffect(() => {
      parent.append(circleRef.current);

      return () => {
        circleRef.current.remove();
      };
    }, []);

    return null;
  },
);
