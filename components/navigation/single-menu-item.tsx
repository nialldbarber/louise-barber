import React, {FC, MouseEvent} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
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
  const router = useRouter();
  const {showHoveredCursor, hideHoveredCursor, closeMenu} = useStore();

  function handleClick(e: MouseEvent): void {
    e.preventDefault();
    closeMenu();
    hideHoveredCursor();
    setTimeout(() => {
      router.push(href);
    }, 1200);
  }

  return (
    <motion.li variants={variants}>
      <Link href={href}>
        <a
          onClick={handleClick}
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
