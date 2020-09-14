import {useState, useEffect, MouseEvent} from 'react';

interface Dimensions {
  x: number | null;
  y: number | null;
}

const useMousePosition = (): Dimensions => {
  const [mousePosition, setMousePosition] = useState<Dimensions>({
    x: null,
    y: null,
  });

  useEffect(() => {
    function handlePosition(e: MouseEvent<Element, MouseEvent>): void {
      setMousePosition({
        x: e?.pageX,
        y: e?.pageY,
      });
    }

    window.addEventListener('mousemove', handlePosition);

    return () => {
      window.removeEventListener('mousemove', handlePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
