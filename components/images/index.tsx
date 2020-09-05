import React, {FC, CSSProperties} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import SingleImage from 'components/images/single-image';
import {ART_PAGE} from 'constants/config';

export interface ImageGridProps {
  id?: string;
  url?: string;
  title: string;
  style?: CSSProperties;
}

const Images: FC<ImageGridProps> = ({id, url, title}) => {
  return id && url ? (
    <Link href={`${ART_PAGE}[id]`} as={`${ART_PAGE}${id}`}>
      <a>
        {<SingleImage img={url} title={title} /> ?? null}
        <div className="title-container">
          <p className="image-title">{title || ''}</p>
        </div>
      </a>
    </Link>
  ) : null;
};

export default Images;
