import React from 'react';
import Link from 'next/link';
import Nav from 'components/nav';
import {MainHeader} from 'styles/typography/header';
import {SITE_TITLE} from 'constants/config';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <MainHeader>{SITE_TITLE}</MainHeader>
        </a>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
