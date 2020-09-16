import React, {FC, CSSProperties, MouseEvent} from 'react';
import Link from 'next/link';
import useStore from 'state/store';
import SingleImage from 'components/images/single-image';
import {ART_PAGE} from 'constants/site-config';

export interface ImageGridProps {
  id?: string;
  url?: string;
  title: string;
  action?: () => void;
  style?: CSSProperties;
}

const Images: FC<ImageGridProps> = ({id, url, title, action}) => {
  const {showHoveredCursor, hideHoveredCursor} = useStore();

  return id && url ? (
    <Link href={`${ART_PAGE}[id]`} as={`${ART_PAGE}${id}`}>
      <a
        onClick={(e: MouseEvent) => {
          e.preventDefault();
          hideHoveredCursor();
          action(id);
        }}
        onMouseEnter={showHoveredCursor}
        onMouseLeave={hideHoveredCursor}
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
