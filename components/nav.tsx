import React, {FC} from 'react';
import Link from 'next/link';
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
    </nav>
  );
};

export default Nav;
