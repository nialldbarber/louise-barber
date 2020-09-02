import React, {FC} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {ART_PAGE} from 'constants/config';

interface ImageGridProps {
  id: string;
  url: string;
  title: string;
}

const Image: FC<ImageGridProps> = ({id, url, title}) => { 
  return (
    <Link href={`${ART_PAGE}[id]`} as={`${ART_PAGE}${id}`}>
      <a>
        <img src={url} alt={title} />
        <div className="title-container">
          <p className="image-title">{title || ''}</p>
        </div>
      </a>
    </Link>
  );
};

export default Image;
