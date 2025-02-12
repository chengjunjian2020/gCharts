import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import { Context } from './Stage';
import { useBindEvent, usePropertyChange } from './_hooks';
import { Text as _Text } from './render';
import { AnimationConfig } from './type';

const defaultProps: _Text['data'] = {
  x: 0,
  y: 0,
  content: 'hello world',
  fillStyle: 'black',
};

export const Text = forwardRef<_Text, _Text['data'] & AnimationConfig>(
  (props, ref) => {
    const mergeProps = { ...defaultProps, ...props };

    const textRef = useRef(new _Text(mergeProps));

    useImperativeHandle(ref, () => textRef.current);

    usePropertyChange(mergeProps, 'content', textRef.current);

    usePropertyChange(mergeProps, 'name', textRef.current);
    usePropertyChange(mergeProps, 'x', textRef.current);
    usePropertyChange(mergeProps, 'y', textRef.current);
    usePropertyChange(mergeProps, 'shadowColor', textRef.current);
    usePropertyChange(mergeProps, 'shadowBlur', textRef.current);
    usePropertyChange(mergeProps, 'shadowOffsetX', textRef.current);
    usePropertyChange(mergeProps, 'shadowOffsetY', textRef.current);
    usePropertyChange(mergeProps, 'lineWidth', textRef.current);
    usePropertyChange(mergeProps, 'opacity', textRef.current);
    usePropertyChange(mergeProps, 'zIndex', textRef.current);
    usePropertyChange(mergeProps, 'fillStyle', textRef.current);
    usePropertyChange(mergeProps, 'strokeStyle', textRef.current);
    usePropertyChange(mergeProps, 'lineCap', textRef.current);
    usePropertyChange(mergeProps, 'lineJoin', textRef.current);
    usePropertyChange(mergeProps, 'lineDash', textRef.current);
    usePropertyChange(mergeProps, 'draggable', textRef.current);
    usePropertyChange(mergeProps, 'cursor', textRef.current);
    usePropertyChange(mergeProps, 'pointerEvents', textRef.current);
    usePropertyChange(mergeProps, 'transform', textRef.current);
    usePropertyChange(mergeProps, 'onclick', textRef.current);
    usePropertyChange(mergeProps, 'onmouseenter', textRef.current);
    usePropertyChange(mergeProps, 'onmousemove', textRef.current);
    usePropertyChange(mergeProps, 'onmouseleave', textRef.current);
    usePropertyChange(mergeProps, 'onmousedown', textRef.current);
    usePropertyChange(mergeProps, 'onmouseup', textRef.current);
    usePropertyChange(mergeProps, 'ondragstart', textRef.current);
    usePropertyChange(mergeProps, 'ondrag', textRef.current);
    usePropertyChange(mergeProps, 'ondragend', textRef.current);

    useBindEvent(mergeProps, textRef.current);

    const parent = useContext(Context);

    useLayoutEffect(() => {
      parent.append(textRef.current);

      return () => {
        textRef.current.remove();
      };
    }, []);

    return null;
  },
);
