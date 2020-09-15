import {useEffect, useState} from 'react';

type Mobile = {isMobile: boolean};

const useDetectDevice = (): Mobile => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const userAgent: string =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;

    const mobile: boolean = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

    setIsMobile(mobile);
  }, []);

  return {isMobile};
};

export default useDetectDevice;
