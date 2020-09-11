import React, {FC, useRef} from 'react';
import {motion, useCycle} from 'framer-motion';
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
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLInputElement>(null);
  const {height} = useDimensions(containerRef);

  const closeMenu = () => {
    console.log('HELLO');
    toggleOpen();
  }

  const isMenuOpen: string = isOpen ? 'open' : 'closed';

  return (
    <motion.nav
      initial={false}
      animate={isMenuOpen}
      custom={height}
      ref={containerRef}
      className="main-nav"
    >
      <motion.div className="nav-background" variants={sidebar} />
      <MenuItems closeMenu={closeMenu} />
      <MenuToggle className={isMenuOpen} toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Nav;
