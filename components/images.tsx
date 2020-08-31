import React, {FC} from 'react';
import Link from 'next/link';

interface ImageGridProps {
  id: string;
  url: string;
  title: string;
}

const Image: FC<ImageGridProps> = ({id, url, title}) => {
  return (
    <Link href="/art/[id]" as={`/art/${id}`}>
      <div>
        <a>
          <img src={url} alt={title} />
          <div className="title-container">
            <p className="image-title">{title || ''}</p>
          </div>
        </a>
      </div>
    </Link>
  );
};

export default Image;
