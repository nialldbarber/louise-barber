import React, {FC} from 'react';
import {motion} from 'framer-motion';

import {ImageGridProps} from 'components/images';

interface SingleImageProps extends ImageGridProps {
  img: string;
}

const SingleImage: FC<SingleImageProps> = ({img, title}) => {
  return (
    <motion.picture
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0}}
      transition={{ease: 'easeIn', duration: 0.4}}
    >
      <source type="image/avif" srcSet={img} />
      <img src={img} alt={`An image titled ${title}`} />
    </motion.picture>
  );
};

export default SingleImage;
