import React, {FC, CSSProperties} from 'react';
import Link from 'next/link';
import useStore from 'state/store';
import useDetectDevice from 'hooks/useDetectDevice';
import SingleImage from 'components/images/single-image';
import {ART_PAGE} from 'constants/site-config';

export interface ImageGridProps {
  id?: string;
  url?: string;
  title: string;
  style?: CSSProperties;
}

const Images: FC<ImageGridProps> = ({id, url, title}) => {
  const {showHoveredCursor, hideHoveredCursor} = useStore();
  const {isMobile} = useDetectDevice();

  return id && url ? (
    <Link href={`${ART_PAGE}[id]`} as={`${ART_PAGE}${id}`}>
      <a
        onClick={hideHoveredCursor}
        onMouseEnter={showHoveredCursor}
        onMouseLeave={hideHoveredCursor}
        className={isMobile ? 'mobile' : ''}
      >
        {<SingleImage img={url} title={title} /> ?? null}
        <div className="title-container">
          <p className="image-title">{title || ''}</p>
        </div>
      </a>
    </Link>
  ) : null;
};

export default Images;
