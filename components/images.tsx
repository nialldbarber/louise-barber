import React, {FC} from 'react';
import Link from 'next/link';

interface ImageGridProps {
  id: string;
  url: string;
}

const Image: FC<ImageGridProps> = ({id, url}) => {
  return (
    <Link href="/art/[id]" as={`/art/${id}`}>
      <div>
        <a>
          <img src={url} alt="image" />
        </a>
      </div>
    </Link>
  );
};

export default Image;
