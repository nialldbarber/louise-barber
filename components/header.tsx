import React from 'react';
import Link from 'next/link';
import Nav from 'components/nav';
import {SITE_TITLE} from 'constants/config';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <h1>{SITE_TITLE}</h1>
        </a>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
