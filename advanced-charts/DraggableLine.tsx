import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Circle, Line, LineProps } from './index';

type DraggableLineProps = LineProps & {
  type?:
    | 'hollow' // 空心的
    | 'solid'; // 实心的
};

export const DraggableLine = forwardRef((props: DraggableLineProps, ref) => {
  const { type = 'solid' } = props;

  const [start, setStart] = useState(props.start);
  const [end, setEnd] = useState(props.end);

  const shapeRef = useRef(null);
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);

  useImperativeHandle(ref, () => [
    shapeRef.current,
    circleRef1.current,
    circleRef2.current,
  ]);

  const fillStyle = type === 'solid' ? '#4d91ff' : '#fff';
  const strokeStyle = type === 'solid' ? 'transparent' : '#4d91ff';

  useLayoutEffect(() => {
    return () => {
      shapeRef.current.remove();
      circleRef1.current.remove();
      circleRef2.current.remove();
    };
  }, []);

  return (
    <>
      <Line
        {...props}
        start={start}
        end={end}
        draggable
        ref={(el) => {
          shapeRef.current = el;
        }}
      />

      <Circle
        x={start.x}
        y={start.y}
        radius={6}
        draggable
        fillStyle={fillStyle}
        strokeStyle={strokeStyle}
        ondrag={(evt) => {
          setStart({ x: evt.x, y: evt.y });
        }}
        ref={(el) => {
          circleRef1.current = el;
        }}
      />

      <Circle
        x={end.x}
        y={end.y}
        radius={6}
        draggable
        fillStyle={fillStyle}
        strokeStyle={strokeStyle}
        ondrag={(evt) => {
          setEnd({ x: evt.x, y: evt.y });
        }}
        ref={(el) => {
          circleRef2.current = el;
        }}
      />
    </>
  );
});
