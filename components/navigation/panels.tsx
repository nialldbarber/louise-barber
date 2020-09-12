import React, {FC, useEffect} from 'react';
import {motion} from 'framer-motion';
import {LeftPanelBg, RightPanelBg} from 'styles/components/navigation';

interface PanelsProps {}

const transition = {duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9]};

// Modified from: https://www.youtube.com/watch?v=qvFLjZvz5Mw&ab_channel=WrongAkram
const Panels: FC<PanelsProps> = () => {
  useEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Unmounted');
    };
  }, []);

  return (
    <motion.div>
      <LeftPanelBg
        initial={{height: 0}}
        animate={{
          height: [0, window.innerHeight],
        }}
        exit={{
          height: [window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        transition={{...transition, duration: 1.25, times: [0, 0.5, 1]}}
      />
      <RightPanelBg
        initial={{height: 0}}
        animate={{
          height: [0, window.innerHeight],
          bottom: [0, 0],
        }}
        exit={{
          height: [window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{...transition, duration: 1.25, times: [0, 0.5, 1]}}
      />
    </motion.div>
  );
};

export default Panels;
