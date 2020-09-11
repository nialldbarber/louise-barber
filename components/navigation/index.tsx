import React, {FC} from 'react';
import Link from 'next/link';
import MenuToggle from 'components/navigation/menu-toggle';
import {navItems} from 'constants/config';

const Nav: FC = () => {
  return (
    <nav>
      <ul>
        {navItems.map(({id, href, page}) => (
          <li key={id}>
            <Link href={href}>
              <a>{page}</a>
            </Link>
          </li>
        ))}
      </ul>
      <MenuToggle />
    </nav>
  );
};

export default Nav;
