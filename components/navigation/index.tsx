import React, {FC, useRef} from 'react';
import {motion} from 'framer-motion';
import useStore from 'state/store';
import useDimensions from 'hooks/useDimensions';
import MenuToggle from 'components/navigation/menu-toggle';
import MenuItems from 'components/navigation/menu-items';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Nav: FC = () => {
  const {isMenuOpen} = useStore();
  const containerRef = useRef<HTMLInputElement>(null);
  const {height} = useDimensions(containerRef);
  const menuOpen: string = isMenuOpen ? 'open' : 'closed';

  return (
    <motion.nav
      initial={false}
      animate={menuOpen}
      custom={height}
      ref={containerRef}
      className="main-nav"
    >
      <motion.div className="nav-background" variants={sidebar} />
      <MenuItems />
      <MenuToggle className={menuOpen} />
    </motion.nav>
  );
};

export default Nav;
