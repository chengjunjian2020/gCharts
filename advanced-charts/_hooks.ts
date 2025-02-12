import { cloneElement, useEffect, useLayoutEffect, useRef } from 'react';

const useChildren = (children) => {
  const childRef = useRef([]);

  const childrenList = []
    .concat(children)
    .filter(Boolean)
    .filter(
      (item) =>
        typeof item.type !== 'function' && typeof item.type !== 'string',
    );

  const newChild = childrenList.map((child) => {
    return cloneElement(child, {
      ref: (child) => {
        childRef.current.push(child);
      },
    });
  });

  return [newChild, childRef.current];
};

function usePropsChange(props, shapeInstance, animation) {
  const changed = {};

  const filterKeys = ['animation'];
  Object.keys(props).forEach((key) => {
    if (
      shapeInstance.data[key] !== props[key] &&
      !key.startsWith('on') &&
      !filterKeys.includes(key)
    ) {
      changed[key] = props[key];
    }
  });

  useLayoutEffect(() => {
    if (Object.keys(changed).length) {
      if (animation?.duration > 16.7) {
        shapeInstance.animateCartoon(changed, { ...animation }).then(() => {
          animation.animationEnd?.();
        });
      } else {
        shapeInstance.attr(changed);
      }
    }
  });
}

export const usePropertyChange = (props, property, shape) => {
  useLayoutEffect(() => {
    if (props.animation?.duration > 16.7) {
      shape
        .animateCartoon({ [property]: props[property] }, { ...props.animation })
        .then(() => {
          props.animation.animationEnd?.();
        });
    } else {
      if (props[property] !== undefined) {
        shape.attr({ [property]: props[property] });
      }
    }
  }, [props[property]]);
};

export const useBindEvent = (props, shapeInstance) => {
  useLayoutEffect(() => {
    for (const key in props) {
      if (key.startsWith('on')) {
        shapeInstance[key] = props[key];
      }
    }
  });
};

export const useResizeObserver = (containerRef, cb) => {
  useEffect(() => {
    const ob = new ResizeObserver(cb);

    ob.observe(containerRef.current);

    return () => {
      ob.disconnect();
    };
  }, []);
};

export const useFirstRender = () => {
  const ref = useRef(true);

  useLayoutEffect(() => {
    ref.current = false;
  }, []);

  return ref.current;
};
