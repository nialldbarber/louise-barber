import React, {FC} from 'react';
import Link from 'next/link';

const Nav: FC = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
