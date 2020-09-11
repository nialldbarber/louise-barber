import {useEffect, useRef} from 'react';

// Remove "any" types here

// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=/src/Example.tsx&file=/src/use-dimensions.ts
const useDimensions = (ref: any) => {
  const dimensions = useRef({width: 0, height: 0});

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

export default useDimensions;
