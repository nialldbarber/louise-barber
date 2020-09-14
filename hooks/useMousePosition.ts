import {useState, useEffect} from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    function handlePosition(e: any): void {
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
