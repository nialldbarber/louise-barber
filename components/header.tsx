import React from 'react';
import Link from 'next/link';
import Navigation from 'components/navigation';
import {HeaderContainer, MainHeader} from 'styles/typography/header';
import {SITE_TITLE} from 'constants/config';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <MainHeader>{SITE_TITLE}</MainHeader>
        </a>
      </Link>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
