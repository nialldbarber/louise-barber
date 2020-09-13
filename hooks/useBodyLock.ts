import {useLayoutEffect} from 'react';

const useBodyLock = (): void => {
  useLayoutEffect(() => {
    const orgStyle: string = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = orgStyle;
    };
  }, []);
};

export default useBodyLock;
