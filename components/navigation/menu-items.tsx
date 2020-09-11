import React, {FC} from 'react';
import {motion} from 'framer-motion';
import SingleMenuItem from 'components/navigation/single-menu-item';
import {navItems} from 'constants/site-config';

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  },
};

const MenuItems: FC = () => {
  return (
    <motion.ul variants={variants}>
      {navItems.map(({id, href, page}) => (
        <SingleMenuItem id={id} href={href} page={page} />
      ))}
    </motion.ul>
  );
};

export default MenuItems;
