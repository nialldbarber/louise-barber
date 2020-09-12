import React, {FC} from 'react';
import {motion} from 'framer-motion';
import useStore from 'state/store';
import SingleMenuItem from 'components/navigation/single-menu-item';
import {navItems} from 'constants/site-config';

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 1.3},
  },
  closed: {
    transition: {staggerChildren: 0.02, staggerDirection: -1},
  },
};

const MenuItems: FC = () => {
  const {isMenuOpen} = useStore();

  return (
    <motion.ul variants={variants} style={{zIndex: isMenuOpen ? 999 : -1}}>
      {navItems.map(({id, href, page}) => (
        <SingleMenuItem id={id} href={href} page={page} />
      ))}
    </motion.ul>
  );
};

export default MenuItems;
