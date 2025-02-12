import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import { Context } from './Stage';
import { useBindEvent, usePropertyChange } from './_hooks';
import { BoxHidden as _BoxHidden } from './render';
import { AnimationConfig, Children } from './type';

type BoxHiddenProps = _BoxHidden['data'] & AnimationConfig & Children;

const defaultProps: BoxHiddenProps = {
  x: 10,
  y: 10,
  width: 100,
  height: 100,
  strokeStyle: 'black',
};

export const BoxHidden = forwardRef<_BoxHidden, BoxHiddenProps>(
  (props, ref) => {
    const mergeProps = { ...defaultProps, ...props };

    const bh = useRef(new _BoxHidden(mergeProps));

    useImperativeHandle(ref, () => bh.current);

    usePropertyChange(mergeProps, 'width', bh.current);
    usePropertyChange(mergeProps, 'height', bh.current);

    usePropertyChange(mergeProps, 'name', bh.current);
    usePropertyChange(mergeProps, 'x', bh.current);
    usePropertyChange(mergeProps, 'y', bh.current);
    usePropertyChange(mergeProps, 'shadowColor', bh.current);
    usePropertyChange(mergeProps, 'shadowBlur', bh.current);
    usePropertyChange(mergeProps, 'shadowOffsetX', bh.current);
    usePropertyChange(mergeProps, 'shadowOffsetY', bh.current);
    usePropertyChange(mergeProps, 'lineWidth', bh.current);
    usePropertyChange(mergeProps, 'opacity', bh.current);
    usePropertyChange(mergeProps, 'zIndex', bh.current);
    usePropertyChange(mergeProps, 'fillStyle', bh.current);
    usePropertyChange(mergeProps, 'strokeStyle', bh.current);
    usePropertyChange(mergeProps, 'lineCap', bh.current);
    usePropertyChange(mergeProps, 'lineJoin', bh.current);
    usePropertyChange(mergeProps, 'lineDash', bh.current);
    usePropertyChange(mergeProps, 'draggable', bh.current);
    usePropertyChange(mergeProps, 'cursor', bh.current);
    usePropertyChange(mergeProps, 'pointerEvents', bh.current);
    usePropertyChange(mergeProps, 'transform', bh.current);
    usePropertyChange(mergeProps, 'onclick', bh.current);
    usePropertyChange(mergeProps, 'onmouseenter', bh.current);
    usePropertyChange(mergeProps, 'onmousemove', bh.current);
    usePropertyChange(mergeProps, 'onmouseleave', bh.current);
    usePropertyChange(mergeProps, 'onmousedown', bh.current);
    usePropertyChange(mergeProps, 'onmouseup', bh.current);
    usePropertyChange(mergeProps, 'ondragstart', bh.current);
    usePropertyChange(mergeProps, 'ondrag', bh.current);
    usePropertyChange(mergeProps, 'ondragend', bh.current);
    useBindEvent(mergeProps, bh.current);

    useBindEvent(props, bh.current);

    const parent = useContext(Context);

    useLayoutEffect(() => {
      parent.append(bh.current);

      return () => {
        bh.current.remove();
      };
    }, []);

    return (
      <Context.Provider value={bh.current}>{props.children}</Context.Provider>
    );
  },
);
