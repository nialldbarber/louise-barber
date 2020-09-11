import React from 'react';
import Link from 'next/link';
import Navigation from 'components/navigation';
import {HeaderContainer, MainHeader} from 'styles/typography/header';
import {TITLE} from 'constants/site-config';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <MainHeader>{TITLE.MAIN}</MainHeader>
        </a>
      </Link>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
