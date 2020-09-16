import React, {FC, CSSProperties} from 'react';
import Link from 'next/link';
import SingleImage from 'components/images/single-image';
import CursorLink from 'components/helpers/cursor-hover-links';
import {ART_PAGE} from 'constants/site-config';

export interface ImageGridProps {
  id?: string;
  url?: string;
  title: string;
  action?: () => void;
  style?: CSSProperties;
}

const Images: FC<ImageGridProps> = ({id, url, title, action}) => {
  return id && url ? (
    <Link href={`${ART_PAGE}[id]`} as={`${ART_PAGE}${id}`}>
      <a
        onClick={(e) => {
          e.preventDefault();
          action(id);
        }}
      >
        <CursorLink>
          <>
            {<SingleImage img={url} title={title} /> ?? null}
            <div className="title-container">
              <p className="image-title">{title || ''}</p>
            </div>
          </>
        </CursorLink>
      </a>
    </Link>
  ) : null;
};

export default Images;
