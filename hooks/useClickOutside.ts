import {useEffect, MouseEvent} from 'react';
import {Ref} from 'hooks/useDimensions';

const useClickOutside = (ref: Ref, handler: () => void): void => {
  useEffect(() => {
    function listener(e: MouseEvent) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      handler(e);
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
