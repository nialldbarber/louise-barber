import React, {FC} from 'react';
import {ImageGridProps} from 'components/images';

interface SingleImageProps extends ImageGridProps {
  img: string;
}

const SingleImage: FC<SingleImageProps> = ({img, title}) => {
  return (
    <>
      <img src={img} alt={`An image titled ${title}`} />
    </>
  );
};

export default SingleImage;
