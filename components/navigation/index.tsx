import React, {FC, useRef} from 'react';
import {AnimatePresence} from 'framer-motion';
import useStore from 'state/store';
import useDimensions from 'hooks/useDimensions';
import MenuToggle from 'components/navigation/menu-toggle';
import MenuItems from 'components/navigation/menu-items';
import Panels from 'components/navigation/panels';
import {MainNav} from 'styles/components/navigation';

const Nav: FC = () => {
  const {isMenuOpen} = useStore();
  const containerRef = useRef<HTMLInputElement>(null);
  const {height} = useDimensions(containerRef);
  const menuOpen: string = isMenuOpen ? 'open' : 'closed';

  return (
    <MainNav
      initial={false}
      animate={menuOpen}
      custom={height}
      ref={containerRef}
      className={menuOpen}
    >
      <AnimatePresence>{isMenuOpen && <Panels />}</AnimatePresence>
      <MenuItems />
      <MenuToggle className={menuOpen} />
    </MainNav>
  );
};

export default Nav;
