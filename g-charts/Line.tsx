import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import { Context } from './Stage';
import { useBindEvent, usePropertyChange } from './_hooks';
import { Line as _Line } from './render';
import { AnimationConfig } from './type';

const defaultProps: LineProps = {
  points: [10, 10, 100, 100],
  strokeStyle: 'black',
  start: { x: 0, y: 0 },
  end: { x: 100, y: 100 },
};

export type LineProps = _Line['data'] & {
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

export const Line = forwardRef<_Line, LineProps & AnimationConfig>(
  (props, ref) => {
    const mergeProps = { ...defaultProps, ...props };

    if (props.start) {
      mergeProps.points = [
        props.start.x,
        props.start.y,
        props.end.x,
        props.end.y,
      ];
    }

    const lineRef = useRef(new _Line(mergeProps));

    useImperativeHandle(ref, () => lineRef.current);

    usePropertyChange(mergeProps, 'points', lineRef.current);
    usePropertyChange(mergeProps, 'start', lineRef.current);
    usePropertyChange(mergeProps, 'end', lineRef.current);
    usePropertyChange(mergeProps, 'closed', lineRef.current);
    usePropertyChange(mergeProps, 'smooth', lineRef.current);
    usePropertyChange(mergeProps, 'percent', lineRef.current);

    usePropertyChange(mergeProps, 'name', lineRef.current);
    usePropertyChange(mergeProps, 'shadowColor', lineRef.current);
    usePropertyChange(mergeProps, 'shadowBlur', lineRef.current);
    usePropertyChange(mergeProps, 'shadowOffsetX', lineRef.current);
    usePropertyChange(mergeProps, 'shadowOffsetY', lineRef.current);
    usePropertyChange(mergeProps, 'lineWidth', lineRef.current);
    usePropertyChange(mergeProps, 'opacity', lineRef.current);
    usePropertyChange(mergeProps, 'zIndex', lineRef.current);
    usePropertyChange(mergeProps, 'fillStyle', lineRef.current);
    usePropertyChange(mergeProps, 'strokeStyle', lineRef.current);
    usePropertyChange(mergeProps, 'lineCap', lineRef.current);
    usePropertyChange(mergeProps, 'lineJoin', lineRef.current);
    usePropertyChange(mergeProps, 'lineDash', lineRef.current);
    usePropertyChange(mergeProps, 'draggable', lineRef.current);
    usePropertyChange(mergeProps, 'cursor', lineRef.current);
    usePropertyChange(mergeProps, 'pointerEvents', lineRef.current);
    usePropertyChange(mergeProps, 'transform', lineRef.current);
    usePropertyChange(mergeProps, 'onclick', lineRef.current);
    usePropertyChange(mergeProps, 'onmouseenter', lineRef.current);
    usePropertyChange(mergeProps, 'onmousemove', lineRef.current);
    usePropertyChange(mergeProps, 'onmouseleave', lineRef.current);
    usePropertyChange(mergeProps, 'onmousedown', lineRef.current);
    usePropertyChange(mergeProps, 'onmouseup', lineRef.current);
    usePropertyChange(mergeProps, 'ondragstart', lineRef.current);
    usePropertyChange(mergeProps, 'ondrag', lineRef.current);
    usePropertyChange(mergeProps, 'ondragend', lineRef.current);

    useBindEvent(mergeProps, lineRef.current);

    const parent = useContext(Context);

    useLayoutEffect(() => {
      parent.append(lineRef.current);

      return () => {
        lineRef.current.remove();
      };
    }, []);

    return null;
  },
);
