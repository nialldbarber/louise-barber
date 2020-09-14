import React from 'react';
import Link from 'next/link';
import Navigation from 'components/navigation';
import CursorLink from 'components/helpers/cursor-hover-links';
import {HeaderContainer, MainHeader} from 'styles/typography/header';
import {TITLE} from 'constants/site-config';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <CursorLink>
          <MainHeader>{TITLE.MAIN}</MainHeader>
        </CursorLink>
      </Link>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
