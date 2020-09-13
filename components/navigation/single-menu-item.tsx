import React, {FC} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import useStore from 'state/store';
import {Items} from 'constants/site-config';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

const SingleMenuItem: FC<Items> = ({href, page}) => {
  const {showHoveredCursor, hideHoveredCursor, closeMenu} = useStore();

  return (
    <motion.li variants={variants}>
      <Link href={href}>
        <a
          onClick={closeMenu}
          onMouseEnter={showHoveredCursor}
          onMouseLeave={hideHoveredCursor}
        >
          {page}
        </a>
      </Link>
    </motion.li>
  );
};

export default SingleMenuItem;
