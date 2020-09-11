import React, {FC} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {Items} from 'constants/config';

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

export interface SingleMenuItemProps extends Items {
  closeMenu: () => void;
}

const SingleMenuItem: FC<SingleMenuItemProps> = ({
  id,
  href,
  page,
  closeMenu,
}) => {
  return (
    <motion.li key={id} variants={variants}>
      <Link href={href}>
        <a onClick={closeMenu}>{page}</a>
      </Link>
    </motion.li>
  );
};

export default SingleMenuItem;
