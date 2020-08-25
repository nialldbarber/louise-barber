import {useState, useEffect} from 'react';
import Router from 'next/router';

const useIsLoaded = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      setTimeout(() => {
        Router.events.off('routeChangeStart', startLoading);
        Router.events.off('routeChangeComplete', endLoading);
        Router.events.off('routeChangeError', endLoading);
      }, 3000);
    };
  }, []);

  return {loading};
};

export default useIsLoaded;
