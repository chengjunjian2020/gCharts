import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import { Line, LineProps } from './index';

export const Curve = forwardRef((props: LineProps, ref) => {
  const shapeRef = useRef(null);

  useImperativeHandle(ref, () => shapeRef.current);

  useLayoutEffect(() => {
    return () => {
      shapeRef.current.remove();
    };
  }, []);

  return (
    <Line
      smooth
      ref={(el) => {
        shapeRef.current = el;
      }}
      {...props}
    />
  );
});
